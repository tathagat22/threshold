"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

interface SpeechRecognitionResultLike {
  0: { transcript: string };
}

interface SpeechRecognitionEventLike {
  results: ArrayLike<SpeechRecognitionResultLike>;
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

type Status = "idle" | "submitting" | "submitted" | "error";

export function ReflectionCapture({ practiceSlug }: { practiceSlug: string }) {
  const [text, setText] = useState("");
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [recording, setRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const baseTextRef = useRef("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time feature detection
    setSpeechSupported(Boolean(getSpeechRecognitionCtor()));
  }, []);

  function startRecording() {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) return;

    const recognition = new Ctor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    baseTextRef.current = text;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(baseTextRef.current ? `${baseTextRef.current} ${transcript}` : transcript);
    };
    recognition.onend = () => setRecording(false);

    recognitionRef.current = recognition;
    recognition.start();
    setRecording(true);
  }

  function stopRecording() {
    recognitionRef.current?.stop();
    setRecording(false);
  }

  async function submit() {
    const supabase = getSupabaseClient();
    if (!supabase || !text.trim()) return;

    setStatus("submitting");
    const { error } = await supabase
      .from("reflections")
      .insert({ practice_slug: practiceSlug, text: text.trim(), consented });
    setStatus(error ? "error" : "submitted");
  }

  if (!getSupabaseClient()) return null;

  if (status === "submitted") {
    return <p className="text-sm text-muted">Thank you — that&apos;s saved.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium">What did you notice?</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type, or use the mic below..."
        rows={3}
        className="w-full rounded-lg border border-foreground/10 bg-transparent p-3 text-sm"
      />
      {speechSupported && (
        <button
          type="button"
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onMouseLeave={() => recording && stopRecording()}
          onTouchStart={startRecording}
          onTouchEnd={stopRecording}
          className={`self-start rounded-full border px-4 py-2 text-sm ${
            recording ? "border-accent text-accent" : "border-foreground/10 text-muted"
          }`}
        >
          {recording ? "Listening… release to stop" : "Hold to speak"}
        </button>
      )}
      <label className="flex items-center gap-2 text-xs text-muted">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
        />
        OK to show this anonymously on the site
      </label>
      <button
        type="button"
        onClick={submit}
        disabled={!text.trim() || status === "submitting"}
        className="self-start rounded-full bg-accent-strong px-6 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {status === "submitting" ? "Saving…" : "Save"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-600">Something went wrong — please try again.</p>
      )}
    </div>
  );
}
