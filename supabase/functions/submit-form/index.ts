import { createClient } from "npm:@supabase/supabase-js@2.108.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SubmissionPayload {
  form_type: "contact" | "quiz_lead" | "newsletter" | "quote";
  email: string;
  data: Record<string, unknown>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown): SubmissionPayload {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid request body.");
  }

  const { form_type, email, data } = body as Record<string, unknown>;

  const validTypes = ["contact", "quiz_lead", "newsletter", "quote"];
  if (!form_type || !validTypes.includes(form_type as string)) {
    throw new Error("Missing or invalid form_type.");
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    throw new Error("A valid email address is required.");
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Form data must be an object.");
  }

  return {
    form_type: form_type as SubmissionPayload["form_type"],
    email: email.trim().toLowerCase(),
    data: data as Record<string, unknown>,
  };
}

function sanitizeForZoho(
  payload: SubmissionPayload
): Record<string, string> {
  const zohoData: Record<string, string> = {
    Email: payload.email,
    FormType: payload.form_type,
  };

  for (const [key, value] of Object.entries(payload.data)) {
    if (value === null || value === undefined) continue;
    const strValue =
      typeof value === "string"
        ? value
        : typeof value === "object"
          ? JSON.stringify(value)
          : String(value);
    if (strValue.length > 32000) {
      zohoData[key] = strValue.slice(0, 32000);
    } else {
      zohoData[key] = strValue;
    }
  }

  return zohoData;
}

async function forwardToZoho(
  payload: SubmissionPayload,
  zohoWebhookUrl: string | undefined
): Promise<{ success: boolean; response: Record<string, unknown> }> {
  if (!zohoWebhookUrl) {
    return { success: true, response: { skipped: true, reason: "no_zoho_webhook_configured" } };
  }

  const zohoData = sanitizeForZoho(payload);

  try {
    const response = await fetch(zohoWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zohoData),
    });

    let responseJson: Record<string, unknown> = {};
    const text = await response.text();
    try {
      responseJson = text ? JSON.parse(text) : {};
    } catch {
      responseJson = { raw: text };
    }

    return {
      success: response.ok,
      response: { status: response.status, body: responseJson },
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "network_error";
    return { success: false, response: { error: message } };
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed. Use POST." }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const rawBody = await req.json();
    const payload = validatePayload(rawBody);

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { data: insertedRow, error: dbError } = await supabase
      .from("form_submissions")
      .insert({
        form_type: payload.form_type,
        email: payload.email,
        payload: payload.data,
        zoho_status: "pending",
      })
      .select("id")
      .single();

    if (dbError) {
      return new Response(
        JSON.stringify({ error: "Failed to store submission." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const zohoWebhookUrl = Deno.env.get("ZOHO_FORMS_WEBHOOK_URL");
    const zohoResult = await forwardToZoho(payload, zohoWebhookUrl);

    await supabase
      .from("form_submissions")
      .update({
        zoho_status: zohoResult.success ? "sent" : "failed",
        zoho_response: zohoResult.response,
      })
      .eq("id", insertedRow.id);

    return new Response(
      JSON.stringify({
        success: true,
        submission_id: insertedRow.id,
        zoho_forwarded: zohoResult.success,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    const status = message.includes("required") || message.includes("invalid") || message.includes("Missing") ? 400 : 500;
    return new Response(
      JSON.stringify({ error: message }),
      { status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
