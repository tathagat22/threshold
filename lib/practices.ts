import { practices } from "@/data/practices";
import type { Practice } from "@/lib/types";

export function getAllPractices(): Practice[] {
  return practices;
}

export function getPracticeBySlug(slug: string): Practice | undefined {
  return practices.find((practice) => practice.slug === slug);
}
