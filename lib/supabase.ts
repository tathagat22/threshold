import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

/**
 * Returns null (not a thrown error) when Supabase isn't configured yet, so the
 * reflections feature degrades to "hidden" rather than crashing the page —
 * this project ships before the user has necessarily created a Supabase project.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  client = url && anonKey ? createClient(url, anonKey) : null;
  return client;
}
