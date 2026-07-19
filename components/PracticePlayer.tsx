"use client";

import { useState } from "react";
import { PracticeRunner } from "@/components/PracticeRunner";
import { ReflectionCapture } from "@/components/ReflectionCapture";
import type { Practice } from "@/lib/types";

export function PracticePlayer({ practice }: { practice: Practice }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <PracticeRunner practice={practice} onComplete={() => setCompleted(true)} />
      {completed && (
        <div className="w-full max-w-md">
          <ReflectionCapture practiceSlug={practice.slug} />
        </div>
      )}
    </div>
  );
}
