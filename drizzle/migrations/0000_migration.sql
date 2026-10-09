CREATE TABLE public.partnership_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  fleet_size text,
  project_needs text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.partnership_inquiries TO service_role;
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;