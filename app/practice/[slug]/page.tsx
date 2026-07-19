import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeView } from "@/components/PracticeView";
import { getAllPractices, getPracticeBySlug } from "@/lib/practices";

export function generateStaticParams() {
  return getAllPractices().map((practice) => ({ slug: practice.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPracticeBySlug(slug);
  if (!practice) return {};

  const url = `/practice/${practice.slug}`;

  return {
    title: practice.title,
    description: practice.promise,
    alternates: { canonical: url },
    openGraph: {
      title: practice.title,
      description: practice.promise,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: practice.title,
      description: practice.promise,
    },
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = getPracticeBySlug(slug);
  if (!practice) notFound();

  return <PracticeView practice={practice} />;
}
