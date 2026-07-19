let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let oscillators: OscillatorNode[] = [];
let lfo: OscillatorNode | null = null;

const FADE_SECONDS = 1.5;

/**
 * Three slightly detuned low tones (a plain, pleasant triad, not tied to any
 * "healing frequency" claim) plus a slow LFO breathing the volume — a calm
 * procedural pad, generated entirely with Web Audio oscillators. No audio
 * files, so this stays inside the site's zero-asset-weight budget.
 */
export function startAmbient() {
  if (ctx) return;

  ctx = new AudioContext();
  masterGain = ctx.createGain();
  masterGain.gain.value = 0;
  masterGain.connect(ctx.destination);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 800;
  filter.connect(masterGain);

  const baseFreqs = [110, 164.81, 220]; // A2, E3, A3 — a plain open fifth + octave
  oscillators = baseFreqs.map((freq) => {
    const osc = ctx!.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const gain = ctx!.createGain();
    gain.gain.value = 1 / baseFreqs.length;
    osc.connect(gain);
    gain.connect(filter);
    osc.start();
    return osc;
  });

  lfo = ctx.createOscillator();
  lfo.frequency.value = 0.08; // one full swell roughly every 12s
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.15;
  lfo.connect(lfoGain);
  lfoGain.connect(masterGain.gain);
  lfo.start();

  masterGain.gain.setValueAtTime(0, ctx.currentTime);
  masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + FADE_SECONDS);
}

export function stopAmbient() {
  if (!ctx || !masterGain) return;

  const activeCtx = ctx;
  const activeGain = masterGain;
  const activeOscillators = oscillators;
  const activeLfo = lfo;

  activeGain.gain.cancelScheduledValues(activeCtx.currentTime);
  activeGain.gain.setValueAtTime(activeGain.gain.value, activeCtx.currentTime);
  activeGain.gain.linearRampToValueAtTime(0, activeCtx.currentTime + FADE_SECONDS);

  setTimeout(() => {
    activeOscillators.forEach((osc) => osc.stop());
    activeLfo?.stop();
    activeCtx.close();
  }, FADE_SECONDS * 1000 + 100);

  ctx = null;
  masterGain = null;
  oscillators = [];
  lfo = null;
}
