// Vymova — js/core/audio.ts
// Web Audio API sound effects
export {};

let _audioCtx: AudioContext | null = null;

function _getCtx(): AudioContext | null {
  if (!_audioCtx) {
    try {
      // Prefer standard AudioContext, fall back to webkit (old Safari/Chrome)
      const Ctx =
        window.AudioContext ??
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (Ctx) _audioCtx = new Ctx();
    } catch (e) {}
  }
  return _audioCtx;
}

export function playSound(type: string): void {
  const ctx = _getCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'know') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.type = 'sine';
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'next') {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.type = 'sine';
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'combo') {
      [440, 554, 659, 880].forEach((freq, i) => {
        const o = ctx.createOscillator(),
          g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = freq;
        o.type = 'sine';
        g.gain.setValueAtTime(0.09, ctx.currentTime + i * 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.18);
        o.start(ctx.currentTime + i * 0.06);
        o.stop(ctx.currentTime + i * 0.06 + 0.18);
      });
    } else if (type === 'tick') {
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.type = 'square';
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'goal') {
      [523, 659, 784, 1047].forEach((freq, i) => {
        const o = ctx.createOscillator(),
          g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.value = freq;
        o.type = 'sine';
        g.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.25);
        o.start(ctx.currentTime + i * 0.1);
        o.stop(ctx.currentTime + i * 0.1 + 0.25);
      });
    }
  } catch (e) {}
}
