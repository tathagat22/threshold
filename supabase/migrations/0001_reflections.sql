create table if not exists reflections (
  id uuid primary key default gen_random_uuid(),
  practice_slug text not null,
  text text not null,
  consented boolean not null default false,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table reflections enable row level security;

-- Anyone can submit a reflection, but cannot mark it approved themselves —
-- moderation happens separately (Supabase table editor, or a service-role
-- update) by setting approved = true.
create policy "anon can insert reflections"
  on reflections for insert
  to anon
  with check (approved = false);

-- Visitors can only ever read reflections that have been through moderation —
-- unapproved submissions are never visible to anyone but the project owner.
create policy "anon can read approved reflections"
  on reflections for select
  to anon
  using (approved = true);
