import type { Practice } from "@/lib/types";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function toIsoDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `PT${minutes ? `${minutes}M` : ""}${seconds ? `${seconds}S` : ""}` || "PT0S";
}

export function practiceHowToSchema(practice: Practice) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: practice.title,
    description: practice.promise,
    totalTime: toIsoDuration(practice.durationSeconds),
    about: practice.source.tradition,
    url: `${SITE_URL}/practice/${practice.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    step: practice.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step.instruction,
    })),
  };
}
