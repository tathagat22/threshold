import Link from "next/link";
import { PracticePlayer } from "@/components/PracticePlayer";
import { getPracticeBySlug } from "@/lib/practices";
import { SITE_NAME } from "@/lib/site";
import { notFound } from "next/navigation";

const FRONT_DOOR_SLUG = "gap-between-two-breaths";

export default function Home() {
  const practice = getPracticeBySlug(FRONT_DOOR_SLUG);
  if (!practice) notFound();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center">
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm uppercase tracking-wide text-muted">{SITE_NAME}</p>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{practice.title}</h1>
        <p className="text-sm text-muted">{practice.source.tradition}</p>
      </div>

      <PracticePlayer practice={practice} />

      <Link
        href={`/practice/${practice.slug}`}
        className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-foreground"
      >
        Where this comes from
      </Link>

      <Link
        href="/practices"
        className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-foreground"
      >
        See all practices
      </Link>
    </main>
  );
}
