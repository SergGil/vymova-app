// Vymova — js/features/speak-lang.ts
// Shared "speak text in the right language's voice, falling back to
// English" helper. Kept in its own small module (rather than living in
// card-actions.ts) so that card-front-text.tsx — a presentational component
// rendered for every card flip — doesn't need to pull in card-actions.ts's
// much heavier transitive import graph (storage, game, combo, notes, etc).
import {
  getSelectedUkVoice,
  getSelectedEsVoice,
  getSelectedFrVoice,
  getSelectedItVoice,
  getSelectedPtVoice,
  getSelectedDeVoice,
  getSelectedHeVoice,
  getSelectedArVoice,
  getSelectedPlVoice,
  getSelectedZhVoice,
  getSelectedElVoice,
  getSelectedJaVoice,
  getSelectedTrVoice,
  getSelectedNlVoice,
  getSelectedViVoice,
} from './voice.tsx';
import { speak, _speakWithLang } from './speech.ts';
import { isTargetLang, langConfig, type TargetLang, type Code } from './mode-utils.ts';

export const VOICE_GETTERS: Record<TargetLang, () => SpeechSynthesisVoice | null> = {
  es: getSelectedEsVoice,
  fr: getSelectedFrVoice,
  it: getSelectedItVoice,
  pt: getSelectedPtVoice,
  de: getSelectedDeVoice,
  he: getSelectedHeVoice,
  ar: getSelectedArVoice,
  pl: getSelectedPlVoice,
  zh: getSelectedZhVoice,
  el: getSelectedElVoice,
  ja: getSelectedJaVoice,
  tr: getSelectedTrVoice,
  nl: getSelectedNlVoice,
  vi: getSelectedViVoice,
};

export function speakForCode(
  code: Code,
  text: string,
  fallbackEnText: string,
  btn: HTMLElement | null,
): void {
  if (isTargetLang(code)) {
    const cfg = langConfig(code);
    if (text && VOICE_GETTERS[code]()) {
      _speakWithLang(text, cfg.voiceLocale, btn);
      return;
    }
    speak(fallbackEnText, btn);
    return;
  }
  if (code === 'ua') {
    if (text && getSelectedUkVoice()) {
      _speakWithLang(text, 'uk-UA', btn);
      return;
    }
    speak(fallbackEnText, btn);
    return;
  }
  speak(text || fallbackEnText, btn);
}
