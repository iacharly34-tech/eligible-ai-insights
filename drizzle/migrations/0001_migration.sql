CREATE TABLE IF NOT EXISTS public.internal_job_secrets (
  name text PRIMARY KEY,
  secret text NOT NULL DEFAULT encode(gen_random_bytes(32), 'hex'),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.internal_job_secrets TO service_role;
ALTER TABLE public.internal_job_secrets ENABLE ROW LEVEL SECURITY;
INSERT INTO public.internal_job_secrets(name) VALUES ('demo_followups') ON CONFLICT DO NOTHING;