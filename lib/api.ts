export type FormType = "contact" | "quiz_lead" | "newsletter" | "quote";

interface SubmitFormParams {
  formType: FormType;
  email: string;
  data: Record<string, unknown>;
}

interface SubmitFormResult {
  success: boolean;
  submissionId?: string;
  error?: string;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function submitForm({
  formType,
  email,
  data,
}: SubmitFormParams): Promise<SubmitFormResult> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return { success: false, error: "Configuration error. Please try again later." };
  }

  const endpoint = `${SUPABASE_URL}/functions/v1/submit-form`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        form_type: formType,
        email,
        data,
      }),
    });

    if (!response.ok) {
      let errorMsg = `Request failed (${response.status})`;
      try {
        const errorBody = await response.json();
        errorMsg = errorBody.error || errorMsg;
      } catch {
        // response wasn't JSON, keep default message
      }
      return { success: false, error: errorMsg };
    }

    const result = await response.json();

    if (!result || result.success !== true) {
      return {
        success: false,
        error: result?.error || "Submission failed. Please try again.",
      };
    }

    return {
      success: true,
      submissionId: result.submission_id,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error. Please check your connection.";
    return { success: false, error: message };
  }
}
