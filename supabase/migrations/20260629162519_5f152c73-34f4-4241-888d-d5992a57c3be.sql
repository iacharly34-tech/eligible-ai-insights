CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  message TEXT,
  source TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.demo_requests TO anon, authenticated;
GRANT ALL ON public.demo_requests TO service_role;

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit the demo form
CREATE POLICY "Anyone can submit a demo request"
  ON public.demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(full_name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND char_length(company) BETWEEN 1 AND 200
    AND (message IS NULL OR char_length(message) <= 5000)
  );

-- No SELECT/UPDATE/DELETE policies = nobody can read from client. service_role (edge functions) bypasses RLS.
CREATE INDEX demo_requests_created_at_idx ON public.demo_requests (created_at DESC);