import { getSupabaseClient } from "@/lib/supabase";

export async function Reflections({ practiceSlug }: { practiceSlug: string }) {
  const supabase = getSupabaseClient();
  if (!supabase) return null;

  const { data } = await supabase
    .from("reflections")
    .select("text, created_at")
    .eq("practice_slug", practiceSlug)
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(12);

  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium">What people noticed</p>
      <ul className="flex flex-col gap-4">
        {data.map((reflection, i) => (
          <li key={i} className="text-sm italic leading-relaxed text-muted">
            &ldquo;{reflection.text}&rdquo;
          </li>
        ))}
      </ul>
    </div>
  );
}
