// English Words App — js/features/mode-utils.ts
// Shared ES mode detection + helpers used by app.ts and similar-words.ts
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { W_IT } from '../../data/words_it.js';
import { W_PT } from '../../data/words_pt.js';
import { W_DE } from '../../data/words_de.js';
import { boldEn, boldUa, boldHead } from '../core/card-helpers.ts';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

export const ES_MODES = new Set(['en-es', 'es-en', 'es-ua', 'ua-es', 'es-fr', 'fr-es']);
export const FR_MODES = new Set(['en-fr', 'fr-en', 'fr-ua', 'ua-fr', 'es-fr', 'fr-es']);
export const IT_MODES = new Set(['en-it', 'it-en', 'it-ua', 'ua-it']);
export const PT_MODES = new Set(['en-pt', 'pt-en', 'pt-ua', 'ua-pt']);
export const DE_MODES = new Set(['en-de', 'de-en', 'de-ua', 'ua-de']);

export function getMode(): string {
  const sel = document.getElementById('sel-mode') as HTMLSelectElement | null;
  const m = sel?.value ?? 'en';
  if (m === 'mix') {
    const a = sel?.dataset.mixA || 'en';
    const b = sel?.dataset.mixB || 'ua';
    return Math.random() > 0.5 ? a : b;
  }
  return m || 'en';
}

// FRONT_LANG залежить лише від обраного режиму (не від конкретного слова) —
// чисто обчислюється з `mode`, тому винесено окремо для CardMeta (item 28a).
export function getFrontLang(mode: string): 'EN' | 'UA' | 'ES' | 'FR' | 'IT' | 'PT' | 'DE' {
  switch (mode) {
    case 'ua':    return 'UA';
    case 'es-en': return 'ES';
    case 'es-ua': return 'ES';
    case 'ua-es': return 'UA';
    case 'fr-en': return 'FR';
    case 'fr-ua': return 'FR';
    case 'ua-fr': return 'UA';
    case 'es-fr': return 'ES';
    case 'fr-es': return 'FR';
    case 'it-en': return 'IT';
    case 'it-ua': return 'IT';
    case 'ua-it': return 'UA';
    case 'pt-en': return 'PT';
    case 'pt-ua': return 'PT';
    case 'ua-pt': return 'UA';
    case 'de-en': return 'DE';
    case 'de-ua': return 'DE';
    case 'ua-de': return 'UA';
    default:      return 'EN'; // 'en', 'en-es', 'en-fr', 'en-it', 'en-pt', 'en-de'
  }
}

// Для 'mix'-режиму getMode() обирає випадкове значення (a чи b) при кожному
// викликові. render() резолвить його раз на оновлення картки і кладе в
// `state._mode`, щоб усі React-компоненти картки (item 28a/28b) бачили той
// самий резолвлений режим, а не кожен своє випадкове значення.
export function getResolvedMode(): string {
  return state._mode || getMode();
}

// Той самий вибір активного набору "вивчених" слів, що й `_activeKnown()`
// в app.ts/card-actions.ts — за поточним резолвленим режимом.
export function getActiveKnown(known: Set<string>): Set<string> {
  const mode = getResolvedMode();
  if (ES_MODES.has(mode)) return state.knownEs ?? known;
  if (FR_MODES.has(mode)) return state.knownFr ?? known;
  if (IT_MODES.has(mode)) return state.knownIt ?? known;
  if (PT_MODES.has(mode)) return state.knownPt ?? known;
  if (DE_MODES.has(mode)) return state.knownDe ?? known;
  return known;
}

interface CardView {
  FRONT_LANG: 'EN' | 'UA' | 'ES' | 'FR' | 'IT' | 'PT' | 'DE';
  frontWord: string;
  backWord: string;
  exenHtml: string;
  exuaHtml: string;
}

// Чисте обчислення FRONT_LANG/frontWord/backWord/прикладів для item 28b.
// Дублює (без зміни) логіку, яка раніше була в render(); сама render() ще
// лишається — буде прибрана в фінальних під-кроках 28.
export function computeCardView(cw: WordEntry, mode: string): CardView {
  const esE = ES_MODES.has(mode) ? esEntry(cw[0]) : null;
  const _esWord = esE ? esE[0] : '';
  const _esEx   = esE ? esE[1] : '';
  const frE = FR_MODES.has(mode) ? frEntry(cw[0]) : null;
  const _frWord = frE ? frE[0] : '';
  const _frEx   = frE ? frE[1] : '';
  const itE = IT_MODES.has(mode) ? itEntry(cw[0]) : null;
  const _itWord = itE ? itE[0] : '';
  const _itEx   = itE ? itE[1] : '';
  const ptE = PT_MODES.has(mode) ? ptEntry(cw[0]) : null;
  const _ptWord = ptE ? ptE[0] : '';
  const _ptEx   = ptE ? ptE[1] : '';
  const deE = DE_MODES.has(mode) ? deEntry(cw[0]) : null;
  const _deWord = deE ? deE[0] : '';
  const _deEx   = deE ? deE[1] : '';

  let FRONT_LANG: 'EN' | 'UA' | 'ES' | 'FR' | 'IT' | 'PT' | 'DE';
  let frontWord: string, backWord: string;
  switch (mode) {
    case 'ua':    FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = cw[0];   break;
    case 'en-es': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _esWord; break;
    case 'es-en': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[0];   break;
    case 'es-ua': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = cw[1];   break;
    case 'ua-es': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _esWord; break;
    case 'en-fr': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _frWord; break;
    case 'fr-en': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = cw[0];   break;
    case 'fr-ua': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = cw[1];   break;
    case 'ua-fr': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _frWord; break;
    case 'es-fr': FRONT_LANG = 'ES'; frontWord = _esWord; backWord = _frWord; break;
    case 'fr-es': FRONT_LANG = 'FR'; frontWord = _frWord; backWord = _esWord; break;
    case 'en-it': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _itWord; break;
    case 'it-en': FRONT_LANG = 'IT'; frontWord = _itWord; backWord = cw[0];   break;
    case 'it-ua': FRONT_LANG = 'IT'; frontWord = _itWord; backWord = cw[1];   break;
    case 'ua-it': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _itWord; break;
    case 'en-pt': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _ptWord; break;
    case 'pt-en': FRONT_LANG = 'PT'; frontWord = _ptWord; backWord = cw[0];   break;
    case 'pt-ua': FRONT_LANG = 'PT'; frontWord = _ptWord; backWord = cw[1];   break;
    case 'ua-pt': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _ptWord; break;
    case 'en-de': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _deWord; break;
    case 'de-en': FRONT_LANG = 'DE'; frontWord = _deWord; backWord = cw[0];   break;
    case 'de-ua': FRONT_LANG = 'DE'; frontWord = _deWord; backWord = cw[1];   break;
    case 'ua-de': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _deWord; break;
    default:      FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = cw[1];
  }

  const _enEx = cw[2] || '';
  const _uaEx = cw[3] || '';
  let exenHtml = '', exuaHtml = '';
  if (mode === 'en') {
    exenHtml = boldEn(_enEx, cw);
    exuaHtml = _uaEx;
  } else if (mode === 'ua') {
    exenHtml = boldUa(_uaEx, cw) || _uaEx;
    exuaHtml = boldEn(_enEx, cw);
  } else if (ES_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-es': _frontEx = _enEx; _backEx = _esEx; break;
      case 'es-en': _frontEx = _esEx; _backEx = _enEx; break;
      case 'es-ua': _frontEx = _esEx; _backEx = _uaEx; break;
      case 'ua-es': _frontEx = _uaEx; _backEx = _esEx; break;
      case 'es-fr': _frontEx = _esEx; _backEx = _frEx; break;
      case 'fr-es': _frontEx = _frEx; _backEx = _esEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (FR_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-fr': _frontEx = _enEx; _backEx = _frEx; break;
      case 'fr-en': _frontEx = _frEx; _backEx = _enEx; break;
      case 'fr-ua': _frontEx = _frEx; _backEx = _uaEx; break;
      case 'ua-fr': _frontEx = _uaEx; _backEx = _frEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (IT_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-it': _frontEx = _enEx; _backEx = _itEx; break;
      case 'it-en': _frontEx = _itEx; _backEx = _enEx; break;
      case 'it-ua': _frontEx = _itEx; _backEx = _uaEx; break;
      case 'ua-it': _frontEx = _uaEx; _backEx = _itEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (PT_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-pt': _frontEx = _enEx; _backEx = _ptEx; break;
      case 'pt-en': _frontEx = _ptEx; _backEx = _enEx; break;
      case 'pt-ua': _frontEx = _ptEx; _backEx = _uaEx; break;
      case 'ua-pt': _frontEx = _uaEx; _backEx = _ptEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (DE_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-de': _frontEx = _enEx; _backEx = _deEx; break;
      case 'de-en': _frontEx = _deEx; _backEx = _enEx; break;
      case 'de-ua': _frontEx = _deEx; _backEx = _uaEx; break;
      case 'ua-de': _frontEx = _uaEx; _backEx = _deEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  }

  return { FRONT_LANG, frontWord, backWord, exenHtml, exuaHtml };
}

export function esEntry(word: string): readonly [string, string] | null {
  return (W_ES as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function frEntry(word: string): readonly [string, string] | null {
  return (W_FR as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function itEntry(word: string): readonly [string, string] | null {
  return (W_IT as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function ptEntry(word: string): readonly [string, string] | null {
  return (W_PT as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function deEntry(word: string): readonly [string, string] | null {
  return (W_DE as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

/** Count of "known" words in the currently selected learn language. */
export function getKnownInLang(): number {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  switch (lang) {
    case 'es': return state.knownEs.size;
    case 'fr': return state.knownFr.size;
    case 'it': return state.knownIt.size;
    case 'pt': return state.knownPt.size;
    case 'de': return state.knownDe.size;
    default:   return state.known.size;
  }
}

/** The active known Set for the currently selected learn language. */
export function getActiveKnownByLang(): Set<string> {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  switch (lang) {
    case 'es': return state.knownEs;
    case 'fr': return state.knownFr;
    case 'it': return state.knownIt;
    case 'pt': return state.knownPt;
    case 'de': return state.knownDe;
    default:   return state.known;
  }
}

/** Filter word list to only those that have a translation in the current learn language. */
export function getWordsForLang(words: WordEntry[]): WordEntry[] {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  switch (lang) {
    case 'es': return words.filter(w => esEntry(w[0]) !== null);
    case 'fr': return words.filter(w => frEntry(w[0]) !== null);
    case 'it': return words.filter(w => itEntry(w[0]) !== null);
    case 'pt': return words.filter(w => ptEntry(w[0]) !== null);
    case 'de': return words.filter(w => deEntry(w[0]) !== null);
    default:   return words;
  }
}
