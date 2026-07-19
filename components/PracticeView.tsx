import Link from "next/link";
import { PracticePlayer } from "@/components/PracticePlayer";
import { Reflections } from "@/components/Reflections";
import { getPracticeBySlug } from "@/lib/practices";
import { practiceHowToSchema } from "@/lib/schema";
import type { Practice } from "@/lib/types";

export function PracticeView({ practice }: { practice: Practice }) {
  const related = practice.relatedSlugs
    .map((slug) => getPracticeBySlug(slug))
    .filter((p): p is Practice => Boolean(p));

  const schemaJson = JSON.stringify(practiceHowToSchema(practice)).replace(/</g, "\\u003c");

  return (
    <article className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <header className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm uppercase tracking-wide text-muted">{practice.source.tradition}</p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{practice.title}</h1>
      </header>

      <PracticePlayer practice={practice} />

      <Reflections practiceSlug={practice.slug} />

      <details className="rounded-lg border border-foreground/10 p-4">
        <summary className="cursor-pointer text-sm font-medium">Read the practice</summary>
        <ol className="mt-4 flex flex-col gap-3 text-sm text-muted">
          {practice.steps.map((step, i) => (
            <li key={i}>
              <span className="text-foreground">{step.instruction}</span>{" "}
              <span className="whitespace-nowrap">({step.durationSeconds}s)</span>
            </li>
          ))}
        </ol>
      </details>

      <details className="rounded-lg border border-foreground/10 p-4">
        <summary className="cursor-pointer text-sm font-medium">Where this comes from</summary>
        <p className="mt-4 text-sm leading-relaxed text-muted">{practice.context}</p>
        <p className="mt-3 text-xs text-muted">{practice.source.citation}</p>
        {practice.source.isAdaptation && (
          <p className="mt-3 text-xs text-muted">
            Adapted here as a short guided exercise; not a substitute for teacher-led practice within
            the tradition it comes from.
          </p>
        )}
      </details>

      {related.length > 0 && (
        <nav className="flex flex-col gap-2">
          <p className="text-sm font-medium">Related practices</p>
          <ul className="flex flex-col gap-1">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/practice/${r.slug}`}
                  className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <Link
        href="/practices"
        className="text-center text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-foreground"
      >
        See all practices
      </Link>
    </article>
  );
}
