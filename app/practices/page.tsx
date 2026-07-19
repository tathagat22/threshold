import type { Metadata } from "next";
import Link from "next/link";
import { getAllPractices } from "@/lib/practices";

export const metadata: Metadata = {
  title: "All practices",
  description: "Short, guided direct-experience practices from contemplative traditions around the world.",
};

export default function PracticesPage() {
  const practices = getAllPractices();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-16">
      <h1 className="text-3xl font-medium tracking-tight">All practices</h1>
      <ul className="flex flex-col gap-6">
        {practices.map((practice) => (
          <li key={practice.slug}>
            <Link href={`/practice/${practice.slug}`} className="group flex flex-col gap-1">
              <span className="text-xl group-hover:underline">{practice.title}</span>
              <span className="text-sm text-muted">{practice.source.tradition}</span>
              <span className="text-sm text-muted">{practice.promise}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
