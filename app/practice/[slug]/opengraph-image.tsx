import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";
import { loadDisplayFont } from "@/lib/og-font";
import { getAllPractices, getPracticeBySlug } from "@/lib/practices";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPractices().map((practice) => ({ slug: practice.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = getPracticeBySlug(slug);
  const title = practice?.title ?? SITE_NAME;
  const subtitle = practice?.source.tradition;

  const fontData = await loadDisplayFont(title + (subtitle ?? ""));

  return new ImageResponse(<OgCard title={title} subtitle={subtitle} />, {
    ...size,
    fonts: [{ name: "Fraunces", data: fontData, style: "normal", weight: 600 }],
  });
}
