CREATE TABLE public.ai_visibility_guard (
  scope text PRIMARY KEY,
  attempts integer NOT NULL DEFAULT 0,
  window_started_at timestamptz NOT NULL DEFAULT now(),
  paused_status integer,
  paused_message text
);
GRANT ALL ON public.ai_visibility_guard TO service_role;
REVOKE ALL ON public.ai_visibility_guard FROM anon, authenticated;
ALTER TABLE public.ai_visibility_guard ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.ai_visibility_guard IS 'Server-only AI usage limits and durable terminal credit/provider pause state; no site content stored.';
CREATE FUNCTION public.reserve_ai_visibility_audit(_user_id uuid) RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n integer;
BEGIN
  INSERT INTO public.ai_visibility_guard(scope, attempts) VALUES ('user:' || _user_id::text, 1)
  ON CONFLICT (scope) DO UPDATE SET
    attempts = CASE WHEN ai_visibility_guard.window_started_at < now() - interval '1 hour' THEN 1 ELSE ai_visibility_guard.attempts + 1 END,
    window_started_at = CASE WHEN ai_visibility_guard.window_started_at < now() - interval '1 hour' THEN now() ELSE ai_visibility_guard.window_started_at END
  RETURNING attempts INTO n;
  RETURN n <= 3;
END; $$;
REVOKE ALL ON FUNCTION public.reserve_ai_visibility_audit(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reserve_ai_visibility_audit(uuid) TO service_role;