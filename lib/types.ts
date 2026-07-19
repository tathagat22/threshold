export type ProvenanceStatus = "verified" | "needs-sourcing";

export interface PracticeSource {
  /** Named lineage/tradition, e.g. "Rinzai Zen", "Advaita Vedanta". */
  tradition: string;
  /** Human-readable citation — text, teacher, or scholarly source. */
  citation: string;
  /** True when this is an adaptation rather than a direct rendering of the source practice. */
  isAdaptation: boolean;
}

export interface PracticeStep {
  /** Short instruction shown one at a time during the guided runner. */
  instruction: string;
  /** How long to hold on this step, in seconds. */
  durationSeconds: number;
}

export interface Practice {
  slug: string;
  title: string;
  /** One line: what the visitor should actually notice, not what the concept means. */
  promise: string;
  source: PracticeSource;
  /** Total guided runner length in seconds. */
  durationSeconds: number;
  steps: PracticeStep[];
  /** Secondary, collapsible context for readers who want the intellectual layer. */
  context: string;
  relatedSlugs: string[];
  provenance: ProvenanceStatus;
}
