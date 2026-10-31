ALTER TABLE public.demo_requests
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS departements text,
  ADD COLUMN IF NOT EXISTS taille_cabinet text,
  ADD COLUMN IF NOT EXISTS statut text NOT NULL DEFAULT 'nouveau',
  ADD COLUMN IF NOT EXISTS booking_token uuid NOT NULL DEFAULT gen_random_uuid(),
  ADD COLUMN IF NOT EXISTS rdv_at timestamptz,
  ADD COLUMN IF NOT EXISTS followup_count integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_followup_at timestamptz;

CREATE UNIQUE INDEX IF NOT EXISTS demo_requests_booking_token_key ON public.demo_requests(booking_token);
CREATE UNIQUE INDEX IF NOT EXISTS demo_requests_rdv_at_key ON public.demo_requests(rdv_at) WHERE rdv_at IS NOT NULL;

ALTER TABLE public.demo_requests DROP CONSTRAINT IF EXISTS demo_requests_statut_check;
ALTER TABLE public.demo_requests ADD CONSTRAINT demo_requests_statut_check
  CHECK (statut IN ('nouveau','relance','rdv_pris','signe','perdu'));

GRANT UPDATE ON public.demo_requests TO authenticated;
GRANT ALL ON public.demo_requests TO service_role;

DROP POLICY IF EXISTS "Admins can update demo requests" ON public.demo_requests;
CREATE POLICY "Admins can update demo requests" ON public.demo_requests
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));