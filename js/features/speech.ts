// English Words App — js/features/speech.ts
// TTS: getVoice, speak, _speakWeb, _speakWithLang
import { synth, hasSpeech } from '../core/srs.ts';
import { getSelectedUkVoice, getSelectedEsVoice, speakFakeYou } from './voice.tsx';

function getVoice(): SpeechSynthesisVoice | null {
  const v = synth.getVoices();
  return v.find(x => x.lang.startsWith('en-US') && x.name.includes('Google'))
      || v.find(x => x.lang.startsWith('en-US'))
      || v.find(x => x.lang.startsWith('en'))
      || null;
}

export function _speakWithLang(text: string, lang: string, btn: HTMLElement | null): void {
  if (!hasSpeech) return;
  synth.cancel();
  const clean = text.replace(/<[^>]+>/g, '').replace(/\s*\([^)]*\)/g, '').trim();
  if (!clean) return;
  const u = new SpeechSynthesisUtterance(clean);
  u.lang  = lang || 'en-US';
  u.rate  = 0.88;
  u.pitch = 1;
  const voices  = synth.getVoices();
  const langLow = u.lang.toLowerCase();
  let match: SpeechSynthesisVoice | null | undefined = null;

  if (langLow.startsWith('uk')) {
    match = getSelectedUkVoice();
    if (!match) match = voices.find(v => v.lang?.toLowerCase().startsWith('uk'));
  } else if (langLow.startsWith('es')) {
    match = getSelectedEsVoice();
    if (!match) match = voices.find(v => v.lang?.toLowerCase().startsWith('es'));
  } else if (langLow.startsWith('en')) {
    match = getVoice();
    if (!match) match = voices.find(v => v.lang?.toLowerCase().startsWith('en'));
  } else {
    match = voices.find(v => v.lang?.toLowerCase() === langLow)
         || voices.find(v => v.lang?.toLowerCase().startsWith(langLow.slice(0, 2)));
  }
  if (match) u.voice = match;
  if (btn) {
    btn.classList.add('on');
    u.onend   = () => btn.classList.remove('on');
    u.onerror = () => btn.classList.remove('on');
  }
  synth.speak(u);
}

function _speakWeb(text: string, btn: HTMLElement | null): void {
  _speakWithLang(text, 'en-US', btn);
}

export function speak(text: string, btn: HTMLElement | null): void {
  if (speakFakeYou(text, btn)) return;
  _speakWeb(text, btn);
}
