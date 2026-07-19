let cachedVoice: SpeechSynthesisVoice | null = null;

const CALM_VOICE_HINTS = ["calm", "samantha", "moira", "serena", "google uk english female"];

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;

  // Voices load asynchronously and are sometimes empty on the first call — in that
  // case just return null for this utterance (browser default voice) rather than
  // permanently caching "no voice found".
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const english = voices.filter((v) => v.lang.startsWith("en"));
  const hinted = english.find((v) =>
    CALM_VOICE_HINTS.some((hint) => v.name.toLowerCase().includes(hint))
  );

  cachedVoice = hinted ?? english[0] ?? voices[0] ?? null;
  return cachedVoice;
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string) {
  if (!isSpeechSupported()) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 0.95;
  const voice = pickVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
