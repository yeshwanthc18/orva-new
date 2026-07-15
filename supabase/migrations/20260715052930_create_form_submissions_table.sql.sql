/*
# Create form_submissions table

1. Purpose
   - Central storage for all website form submissions (contact, quote request, quiz leads, newsletter signup).
   - Each row captures the form type, submitter email, and a flexible JSONB payload for form-specific fields.
   - The backend edge function stores submissions here before forwarding to Zoho Forms.
   - This ensures no lead is ever lost even if the Zoho API is temporarily unavailable.

2. New Tables
   - `form_submissions`
     - `id` (uuid, primary key, auto-generated)
     - `form_type` (text, NOT NULL) — one of: 'contact', 'quiz_lead', 'newsletter', 'quote'
     - `email` (text, NOT NULL) — submitter's email address for follow-up
     - `payload` (JSONB, NOT NULL, default '{}') — full form data specific to each form type
     - `zoho_status` (text, default 'pending') — tracks Zoho forwarding: 'pending', 'sent', 'failed'
     - `zoho_response` (JSONB, nullable) — stores the Zoho API response for debugging/auditing
     - `created_at` (timestamptz, default now())

3. Indexes
   - `idx_form_submissions_form_type` — filter by form type
   - `idx_form_submissions_email` — look up by submitter email
   - `idx_form_submissions_zoho_status` — find pending/failed submissions for retry

4. Security
   - Enable RLS on `form_submissions`.
   - Allow anon + authenticated INSERT (public forms write here via the edge function's service-role client; but for direct anon writes if needed).
   - SELECT/UPDATE/DELETE restricted to authenticated (admin-only) — submissions contain PII.
   - Note: The edge function uses the SUPABASE_SERVICE_ROLE_KEY which bypasses RLS, so writes from the backend always succeed.
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL CHECK (form_type IN ('contact', 'quiz_lead', 'newsletter', 'quote')),
  email text NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  zoho_status text DEFAULT 'pending' CHECK (zoho_status IN ('pending', 'sent', 'failed')),
  zoho_response JSONB,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_zoho_status ON form_submissions(zoho_status);

-- Allow anon to insert (public form submissions via edge function or direct)
DROP POLICY IF EXISTS "anon_insert_form_submissions" ON form_submissions;
CREATE POLICY "anon_insert_form_submissions"
  ON form_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated (admin) can view submissions — contains PII
DROP POLICY IF EXISTS "authenticated_select_form_submissions" ON form_submissions;
CREATE POLICY "authenticated_select_form_submissions"
  ON form_submissions FOR SELECT
  TO authenticated USING (true);

-- Only authenticated (admin) can update (e.g., update zoho_status)
DROP POLICY IF EXISTS "authenticated_update_form_submissions" ON form_submissions;
CREATE POLICY "authenticated_update_form_submissions"
  ON form_submissions FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated (admin) can delete
DROP POLICY IF EXISTS "authenticated_delete_form_submissions" ON form_submissions;
CREATE POLICY "authenticated_delete_form_submissions"
  ON form_submissions FOR DELETE
  TO authenticated USING (true);
