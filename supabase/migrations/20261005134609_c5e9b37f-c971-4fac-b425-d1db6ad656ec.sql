create table public.cabinets (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  actif boolean not null default true,
  created_at timestamptz not null default now()
);
create table public.cabinet_members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  cabinet_id uuid not null references public.cabinets(id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);
create table public.cabinet_zones (
  id uuid primary key default gen_random_uuid(),
  cabinet_id uuid not null references public.cabinets(id) on delete cascade,
  departement text not null,
  verticale text not null,
  last_assigned_at timestamptz,
  created_at timestamptz not null default now(),
  unique (cabinet_id, departement, verticale)
);
create table public.leads (
  siren text primary key check (siren ~ '^[0-9]{9}$'),
  cabinet_id uuid references public.cabinets(id) on delete set null,
  verticale text not null,
  departement text not null,
  niveau text not null,
  score int not null,
  denomination text not null,
  date_creation date,
  detecte_le date not null,
  a_supprimer_le date not null,
  opposition_rne boolean not null default false,
  payload jsonb not null,
  statut text not null default 'nouveau' check (statut in ('nouveau','contacte','rdv','signe','ecarte')),
  note text,
  assigned_at timestamptz,
  inserted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index leads_cabinet_idx on public.leads(cabinet_id);
create index leads_purge_idx on public.leads(a_supprimer_le);
create table public.lead_access_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  siren text not null,
  action text not null,
  at timestamptz not null default now()
);
create table public.pipeline_runs (
  id uuid primary key default gen_random_uuid(),
  genere_le timestamptz,
  recus int not null default 0,
  inseres int not null default 0,
  mis_a_jour int not null default 0,
  supprimes int not null default 0,
  at timestamptz not null default now()
);

grant select on public.cabinets, public.cabinet_members, public.cabinet_zones, public.pipeline_runs to authenticated;
grant insert, update, delete on public.cabinets, public.cabinet_zones to authenticated;
grant select on public.leads to authenticated;
grant update (statut, note, cabinet_id) on public.leads to authenticated;
grant select, insert on public.lead_access_log to authenticated;
grant all on public.cabinets, public.cabinet_members, public.cabinet_zones, public.leads, public.lead_access_log, public.pipeline_runs to service_role;

alter table public.cabinets enable row level security;
alter table public.cabinet_members enable row level security;
alter table public.cabinet_zones enable row level security;
alter table public.leads enable row level security;
alter table public.lead_access_log enable row level security;
alter table public.pipeline_runs enable row level security;

create or replace function public.user_cabinet_id(_user_id uuid)
returns uuid language sql stable security definer set search_path = public as $$
  select cabinet_id from public.cabinet_members where user_id = _user_id
$$;

create policy "admin all cabinets" on public.cabinets for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create policy "member reads own cabinet" on public.cabinets for select to authenticated
  using (id = public.user_cabinet_id(auth.uid()));

create policy "admin reads members" on public.cabinet_members for select to authenticated
  using (public.has_role(auth.uid(),'admin'));
create policy "member reads self" on public.cabinet_members for select to authenticated
  using (user_id = auth.uid());

create policy "admin all zones" on public.cabinet_zones for all to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create policy "member reads own zones" on public.cabinet_zones for select to authenticated
  using (cabinet_id = public.user_cabinet_id(auth.uid()));

create policy "cabinet reads own leads" on public.leads for select to authenticated
  using (cabinet_id = public.user_cabinet_id(auth.uid()) and opposition_rne = false);
create policy "cabinet updates own leads" on public.leads for update to authenticated
  using (cabinet_id = public.user_cabinet_id(auth.uid()) and opposition_rne = false)
  with check (cabinet_id = public.user_cabinet_id(auth.uid()));
create policy "admin reads leads" on public.leads for select to authenticated
  using (public.has_role(auth.uid(),'admin'));
create policy "admin updates leads" on public.leads for update to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create policy "user logs own access" on public.lead_access_log for insert to authenticated
  with check (user_id = auth.uid());
create policy "admin reads log" on public.lead_access_log for select to authenticated
  using (public.has_role(auth.uid(),'admin'));

create policy "admin reads runs" on public.pipeline_runs for select to authenticated
  using (public.has_role(auth.uid(),'admin'));

-- Tour de rôle : zone active la moins récemment servie
create or replace function public.assign_lead_cabinet(_departement text, _verticale text)
returns uuid language plpgsql security definer set search_path = public as $$
declare z record;
begin
  select cz.id, cz.cabinet_id into z
  from public.cabinet_zones cz join public.cabinets c on c.id = cz.cabinet_id
  where c.actif and cz.departement = _departement and cz.verticale = _verticale
  order by cz.last_assigned_at nulls first, cz.created_at
  limit 1 for update of cz;
  if z.id is null then return null; end if;
  update public.cabinet_zones set last_assigned_at = now() where id = z.id;
  return z.cabinet_id;
end $$;
revoke execute on function public.assign_lead_cabinet(text,text) from public, anon, authenticated;

create or replace function public.purge_expired_leads()
returns int language sql security definer set search_path = public as $$
  with d as (delete from public.leads where a_supprimer_le <= current_date returning 1)
  select count(*)::int from d
$$;
revoke execute on function public.purge_expired_leads() from public, anon, authenticated;

do $$ begin
  create extension if not exists pg_cron;
  perform cron.schedule('purge-expired-leads', '15 2 * * *', 'select public.purge_expired_leads()');
exception when others then raise notice 'pg_cron indisponible: %', sqlerrm;
end $$;