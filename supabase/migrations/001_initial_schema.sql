-- ============================================
-- 1. USERS TABLE
-- Extends Supabase Auth with app-specific user data
-- ============================================
create table public.users (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text not null,
  email text not null unique,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.users enable row level security;

-- Users can read their own data
create policy "Users can view own data"
  on public.users for select
  using (auth.uid() = id);

-- Users can update their own data
create policy "Users can update own data"
  on public.users for update
  using (auth.uid() = id);

-- Allow insert during registration
create policy "Users can insert own data"
  on public.users for insert
  with check (auth.uid() = id);


-- ============================================
-- 2. SUBSCRIPTIONS TABLE
-- Tracks which plan a user is on
-- ============================================
create table public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users(id) on delete cascade not null unique,
  plan_id text not null check (plan_id in ('basic', 'business', 'enterprise')),
  billing_cycle text not null check (billing_cycle in ('monthly', 'annual')),
  status text not null default 'active' check (status in ('active', 'canceled', 'past_due')),
  price numeric(10, 2) not null,
  current_period_start timestamp with time zone default now(),
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.subscriptions enable row level security;

-- Users can read their own subscription
create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Users can create their own subscription
create policy "Users can insert own subscription"
  on public.subscriptions for insert
  with check (auth.uid() = user_id);

-- Users can update their own subscription
create policy "Users can update own subscription"
  on public.subscriptions for update
  using (auth.uid() = user_id);


-- ============================================
-- 3. AUTO-CREATE USER ON SIGNUP
-- Trigger: when someone signs up via Supabase Auth,
-- automatically create a row in public.users
-- ============================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
