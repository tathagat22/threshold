import type { MetadataRoute } from "next";
import { getAllPractices } from "@/lib/practices";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const practiceEntries: MetadataRoute.Sitemap = getAllPractices().map((practice) => ({
    url: `${SITE_URL}/practice/${practice.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/practices`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...practiceEntries,
  ];
}
