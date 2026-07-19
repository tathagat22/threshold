"use client";

import { useEffect, useRef, useState } from "react";
import { startAmbient, stopAmbient } from "@/lib/audio";
import type { Practice } from "@/lib/types";
import { isSpeechSupported, speak, stopSpeaking } from "@/lib/voice";

type Phase = "intro" | "running" | "done";

const VOICE_STORAGE_KEY = "threshold:voice-enabled";
const AMBIENT_STORAGE_KEY = "threshold:ambient-enabled";

// Fixed breathing cadence (~10.7 breaths/min, a relaxed resting pace) — deliberately
// decoupled from step.durationSeconds. Steps run 20-75s in data/practices.ts; if the
// pulse's sine cycle spanned the whole step (the old behavior), a 70s step produced a
// single breath that took 70 seconds to complete, reading as a slow zoom, not a breath.
const BREATH_PERIOD_MS = 5600;

export function PracticeRunner({
  practice,
  onComplete,
}: {
  practice: Practice;
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [ambientEnabled, setAmbientEnabled] = useState(true);
  const [voiceSupported, setVoiceSupported] = useState(false);

  const pulseRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLSpanElement>(null);
  const stepElapsedMsRef = useRef(0);
  const lastFrameTsRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of a platform API, not derived render state
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time feature detection
    setVoiceSupported(isSpeechSupported());

    const storedVoice = localStorage.getItem(VOICE_STORAGE_KEY);
    const storedAmbient = localStorage.getItem(AMBIENT_STORAGE_KEY);
    if (storedVoice !== null) setVoiceEnabled(storedVoice === "1");
    if (storedAmbient !== null) setAmbientEnabled(storedAmbient === "1");
  }, []);

  // Speak the current instruction aloud whenever it changes, so voice guidance stays
  // in sync with the on-screen text without duplicating the step-advance logic above.
  useEffect(() => {
    if (phase === "running" && voiceEnabled) {
      speak(practice.steps[stepIndex].instruction);
    }
    if (phase !== "running") {
      stopSpeaking();
      stopAmbient();
    }
  }, [phase, stepIndex, voiceEnabled, practice.steps]);

  useEffect(() => {
    return () => {
      stopSpeaking();
      stopAmbient();
    };
  }, []);

  useEffect(() => {
    if (phase !== "running") return;

    const step = practice.steps[stepIndex];
    const stepMs = step.durationSeconds * 1000;
    let lastSecondShown = -1;

    function tick(ts: number) {
      if (lastFrameTsRef.current == null) lastFrameTsRef.current = ts;
      const delta = ts - lastFrameTsRef.current;
      lastFrameTsRef.current = ts;
      stepElapsedMsRef.current += delta;

      const frac = Math.min(stepElapsedMsRef.current / stepMs, 1);

      // Progress bar reflects elapsed time and is essential feedback (not decorative
      // vestibular motion) — keep it running under reduced motion too, otherwise it
      // sits frozen at 0% for the entire practice while steps silently auto-advance.
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${frac})`;
      }

      // Breath cycle is independent of step length: a fixed period looping via modulo,
      // instead of one sine hump stretched across the whole step.
      const breathFrac = (stepElapsedMsRef.current % BREATH_PERIOD_MS) / BREATH_PERIOD_MS;
      if (pulseRef.current) {
        if (reducedMotion) {
          // Vestibular-safe substitute: a slow, low-amplitude opacity drift instead of
          // scaling. Keeps the circle "alive" as a pacing cue rather than fully inert.
          const opacity = 0.85 + Math.sin(breathFrac * Math.PI) * 0.1;
          pulseRef.current.style.opacity = String(opacity);
        } else {
          const scale = 0.88 + Math.sin(breathFrac * Math.PI) * 0.12;
          pulseRef.current.style.transform = `scale(${scale})`;
        }
      }

      const secondsLeft = Math.max(0, Math.ceil((stepMs - stepElapsedMsRef.current) / 1000));
      if (secondsLeft !== lastSecondShown && secondsRef.current) {
        secondsRef.current.textContent = String(secondsLeft);
        lastSecondShown = secondsLeft;
      }

      if (frac >= 1) {
        stepElapsedMsRef.current = 0;
        lastFrameTsRef.current = null;
        if (stepIndex + 1 < practice.steps.length) {
          setStepIndex((i) => i + 1);
        } else {
          setPhase("done");
          onCompleteRef.current?.();
        }
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    let rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      lastFrameTsRef.current = null;
    };
  }, [phase, stepIndex, practice.steps, reducedMotion]);

  function begin() {
    stepElapsedMsRef.current = 0;
    lastFrameTsRef.current = null;
    setStepIndex(0);
    setPhase("running");
    // Started from this click handler (a user gesture), not an effect, so the
    // AudioContext it creates is reliably allowed to play by browser autoplay policy.
    if (ambientEnabled) startAmbient();
  }

  function restart() {
    stepElapsedMsRef.current = 0;
    lastFrameTsRef.current = null;
    setStepIndex(0);
    setPhase("intro");
  }

  function toggleVoice() {
    setVoiceEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(VOICE_STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  }

  function toggleAmbient() {
    setAmbientEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(AMBIENT_STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  }

  const currentStep = practice.steps[stepIndex];

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div
        ref={pulseRef}
        aria-hidden="true"
        className={`h-40 w-40 rounded-full bg-accent/20 shadow-[0_0_60px_-10px_var(--accent)] [will-change:transform,opacity] ${
          phase !== "running" ? "idle-breathe" : ""
        }`}
      />

      {phase === "intro" && (
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-md text-lg text-muted">{practice.promise}</p>
          <button
            type="button"
            onClick={begin}
            className="rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Begin ({Math.round(practice.durationSeconds / 60) || 1} min)
          </button>
          <div className="flex items-center gap-4 text-xs text-muted">
            {voiceSupported && (
              <button type="button" onClick={toggleVoice} className="underline decoration-dotted underline-offset-4">
                Spoken guidance: {voiceEnabled ? "on" : "off"}
              </button>
            )}
            <button type="button" onClick={toggleAmbient} className="underline decoration-dotted underline-offset-4">
              Ambient tone: {ambientEnabled ? "on" : "off"}
            </button>
          </div>
        </div>
      )}

      {phase === "running" && (
        <div className="flex w-full max-w-md flex-col items-center gap-4" aria-live="off">
          <p
            key={stepIndex}
            className={`min-h-16 text-xl leading-relaxed ${reducedMotion ? "" : "step-reveal"}`}
            aria-live="polite"
          >
            {currentStep.instruction}
          </p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
            <div
              ref={barRef}
              className="h-full w-full origin-left bg-accent [will-change:transform]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <p className="text-sm text-muted">
            Step {stepIndex + 1} of {practice.steps.length} · <span ref={secondsRef}>{currentStep.durationSeconds}</span>s left
          </p>
        </div>
      )}

      {phase === "done" && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl">That&rsquo;s the practice.</p>
          <p className="max-w-md text-muted">
            Stay here a moment before moving on — there&rsquo;s no need to rush back into thinking about it.
          </p>
          <button
            type="button"
            onClick={restart}
            className="text-sm text-muted underline decoration-dotted underline-offset-4 hover:text-foreground"
          >
            Do it again
          </button>
        </div>
      )}
    </div>
  );
}
