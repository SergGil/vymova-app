// Vymova — js/features/voice/speech.ts
// TTS: getVoice, speak, _speakWeb, _speakWithLang
import { synth, hasSpeech } from '../../core/srs.ts';
import { getSelectedUkVoice, getSelectedEsVoice, speakPreferredEnVoice } from './voice.tsx';

// .speak-btn.on/.accent-btn.on/.listen-play-btn.on all toggle the same bare
// 'on' token through this shared helper (whatever button element they're
// given), but .listen-play-btn.on's @keyframes (listenPulse) differs from
// the other two's shared pulse-flash — branch on the button's own
// pre-existing base class, the same way the original compound CSS selectors
// did implicitly (docs/full-css-tailwind-migration-roadmap.md Tier 2d).
function addPulseOn(btn: HTMLElement): void {
  btn.classList.add(
    'on',
    btn.classList.contains('listen-play-btn')
      ? 'animate-[listenPulse_0.7s_ease-in-out_infinite_alternate]'
      : 'animate-[pulse-flash_0.7s_ease-in-out_infinite_alternate]',
  );
}
function removePulseOn(btn: HTMLElement): void {
  btn.classList.remove(
    'on',
    'animate-[pulse-flash_0.7s_ease-in-out_infinite_alternate]',
    'animate-[listenPulse_0.7s_ease-in-out_infinite_alternate]',
  );
}

function getVoice(): SpeechSynthesisVoice | null {
  const v = synth.getVoices();
  return (
    v.find((x) => x.lang.startsWith('en-US') && x.name.includes('Google')) ||
    v.find((x) => x.lang.startsWith('en-US')) ||
    v.find((x) => x.lang.startsWith('en')) ||
    null
  );
}

export function _speakWithLang(text: string, lang: string, btn: HTMLElement | null): void {
  if (!hasSpeech) return;
  synth.cancel();
  const clean = text
    .replace(/<[^>]+>/g, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim();
  if (!clean) return;
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = lang || 'en-US';
  u.rate = 0.88;
  u.pitch = 1;
  const voices = synth.getVoices();
  const langLow = u.lang.toLowerCase();
  let match: SpeechSynthesisVoice | null | undefined;

  if (langLow.startsWith('uk')) {
    match = getSelectedUkVoice();
    if (!match) match = voices.find((v) => v.lang?.toLowerCase().startsWith('uk'));
  } else if (langLow.startsWith('es')) {
    match = getSelectedEsVoice();
    if (!match) match = voices.find((v) => v.lang?.toLowerCase().startsWith('es'));
  } else if (langLow.startsWith('en')) {
    match = getVoice();
    if (!match) match = voices.find((v) => v.lang?.toLowerCase().startsWith('en'));
  } else {
    match =
      voices.find((v) => v.lang?.toLowerCase() === langLow) ||
      voices.find((v) => v.lang?.toLowerCase().startsWith(langLow.slice(0, 2)));
  }
  if (match) u.voice = match;
  if (btn) {
    addPulseOn(btn);
    u.onend = () => removePulseOn(btn);
    u.onerror = () => removePulseOn(btn);
  }
  synth.speak(u);
}

function _speakWeb(text: string, btn: HTMLElement | null): void {
  _speakWithLang(text, 'en-US', btn);
}

export function speak(text: string, btn: HTMLElement | null): void {
  if (speakPreferredEnVoice(text, btn)) return;
  _speakWeb(text, btn);
}
