// Vymova — js/features/duel-deck.ts
// Pure language/deck-building helpers, extracted out of duel.ts. Dependency-
// free leaf module (like duel-firebase.ts / duel-profile-snap.ts) — used
// both by duel.ts's own core (question rendering, history) and by the other
// extracted duel-*-logic.ts modules (tournament/async-challenge/spectator),
// which no longer need to import duel.ts itself just for deck-building.
import { W } from '../../../data/words.js';
import { WORD_CATEGORIES } from '../../../data/categories.js';
import { getCefrLevel } from '../../../data/cefr.ts';
import type { WordEntry } from '../../../src/types.js';
import { getLang } from '../i18n.ts';
import {
  esEntry,
  frEntry,
  itEntry,
  ptEntry,
  deEntry,
  heEntry,
  arEntry,
  plEntry,
  zhEntry,
  elEntry,
  jaEntry,
  trEntry,
  nlEntry,
  viEntry,
  hiEntry,
  bnEntry,
  idEntry,
  pcmEntry,
  koEntry,
  faEntry,
  swEntry,
  msEntry,
  thEntry,
  azEntry,
  roEntry,
  huEntry,
  csEntry,
  kkEntry,
  svEntry,
  kaEntry,
  hrEntry,
  srEntry,
  bsEntry,
  bgEntry,
  skEntry,
  hyEntry,
  daEntry,
  fiEntry,
  noEntry,
  laEntry,
} from '../mode-utils.ts';
import type { DuelMode, Difficulty } from './duel.ts';
import { CHARS, ROOM_SIZE } from './duel-types.ts';

export const DUEL_LANG_CODES = [
  'en',
  'ua',
  'es',
  'fr',
  'it',
  'pt',
  'de',
  'he',
  'ar',
  'pl',
  'zh',
  'el',
  'ja',
  'tr',
  'nl',
  'vi',
];

export function _wordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'en':
      return w[0];
    case 'es':
      return esEntry(w[0])?.[0] ?? w[1];
    case 'fr':
      return frEntry(w[0])?.[0] ?? w[1];
    case 'it':
      return itEntry(w[0])?.[0] ?? w[1];
    case 'pt':
      return ptEntry(w[0])?.[0] ?? w[1];
    case 'de':
      return deEntry(w[0])?.[0] ?? w[1];
    case 'he':
      return heEntry(w[0])?.[0] ?? w[1];
    case 'ar':
      return arEntry(w[0])?.[0] ?? w[1];
    case 'pl':
      return plEntry(w[0])?.[0] ?? w[1];
    case 'zh':
      return zhEntry(w[0])?.[0] ?? w[1];
    case 'el':
      return elEntry(w[0])?.[0] ?? w[1];
    case 'ja':
      return jaEntry(w[0])?.[0] ?? w[1];
    case 'tr':
      return trEntry(w[0])?.[0] ?? w[1];
    case 'nl':
      return nlEntry(w[0])?.[0] ?? w[1];
    case 'vi':
      return viEntry(w[0])?.[0] ?? w[1];
    case 'hi':
      return hiEntry(w[0])?.[0] ?? w[1];
    case 'bn':
      return bnEntry(w[0])?.[0] ?? w[1];
    case 'id':
      return idEntry(w[0])?.[0] ?? w[1];
    case 'pcm':
      return pcmEntry(w[0])?.[0] ?? w[1];
    case 'ko':
      return koEntry(w[0])?.[0] ?? w[1];
    case 'fa':
      return faEntry(w[0])?.[0] ?? w[1];
    case 'sw':
      return swEntry(w[0])?.[0] ?? w[1];
    case 'ms':
      return msEntry(w[0])?.[0] ?? w[1];
    case 'th':
      return thEntry(w[0])?.[0] ?? w[1];
    case 'az':
      return azEntry(w[0])?.[0] ?? w[1];
    case 'ro':
      return roEntry(w[0])?.[0] ?? w[1];
    case 'hu':
      return huEntry(w[0])?.[0] ?? w[1];
    case 'cs':
      return csEntry(w[0])?.[0] ?? w[1];
    case 'kk':
      return kkEntry(w[0])?.[0] ?? w[1];
    case 'sv':
      return svEntry(w[0])?.[0] ?? w[1];
    case 'ka':
      return kaEntry(w[0])?.[0] ?? w[1];
    case 'hr':
      return hrEntry(w[0])?.[0] ?? w[1];
    case 'sr':
      return srEntry(w[0])?.[0] ?? w[1];
    case 'bs':
      return bsEntry(w[0])?.[0] ?? w[1];
    case 'bg':
      return bgEntry(w[0])?.[0] ?? w[1];
    case 'sk':
      return skEntry(w[0])?.[0] ?? w[1];
    case 'hy':
      return hyEntry(w[0])?.[0] ?? w[1];
    case 'da':
      return daEntry(w[0])?.[0] ?? w[1];
    case 'fi':
      return fiEntry(w[0])?.[0] ?? w[1];
    case 'no':
      return noEntry(w[0])?.[0] ?? w[1];
    case 'la':
      return laEntry(w[0])?.[0] ?? w[1];
    default:
      return w[1]; // 'ua'
  }
}

// Whether `w` has a usable translation for `lang` (en/ua are always present).
export function _hasLangWord(w: WordEntry, lang: string): boolean {
  switch (lang) {
    case 'en':
    case 'ua':
      return true;
    case 'es':
      return esEntry(w[0]) !== null;
    case 'fr':
      return frEntry(w[0]) !== null;
    case 'it':
      return itEntry(w[0]) !== null;
    case 'pt':
      return ptEntry(w[0]) !== null;
    case 'de':
      return deEntry(w[0]) !== null;
    case 'he':
      return heEntry(w[0]) !== null;
    case 'ar':
      return arEntry(w[0]) !== null;
    case 'pl':
      return plEntry(w[0]) !== null;
    case 'zh':
      return zhEntry(w[0]) !== null;
    case 'el':
      return elEntry(w[0]) !== null;
    case 'ja':
      return jaEntry(w[0]) !== null;
    case 'tr':
      return trEntry(w[0]) !== null;
    case 'nl':
      return nlEntry(w[0]) !== null;
    case 'vi':
      return viEntry(w[0]) !== null;
    case 'hi':
      return hiEntry(w[0]) !== null;
    case 'bn':
      return bnEntry(w[0]) !== null;
    case 'id':
      return idEntry(w[0]) !== null;
    case 'pcm':
      return pcmEntry(w[0]) !== null;
    case 'ko':
      return koEntry(w[0]) !== null;
    case 'fa':
      return faEntry(w[0]) !== null;
    case 'sw':
      return swEntry(w[0]) !== null;
    case 'ms':
      return msEntry(w[0]) !== null;
    case 'th':
      return thEntry(w[0]) !== null;
    case 'az':
      return azEntry(w[0]) !== null;
    case 'ro':
      return roEntry(w[0]) !== null;
    case 'hu':
      return huEntry(w[0]) !== null;
    case 'cs':
      return csEntry(w[0]) !== null;
    case 'kk':
      return kkEntry(w[0]) !== null;
    case 'sv':
      return svEntry(w[0]) !== null;
    case 'ka':
      return kaEntry(w[0]) !== null;
    case 'hr':
      return hrEntry(w[0]) !== null;
    case 'sr':
      return srEntry(w[0]) !== null;
    case 'bs':
      return bsEntry(w[0]) !== null;
    case 'bg':
      return bgEntry(w[0]) !== null;
    case 'sk':
      return skEntry(w[0]) !== null;
    case 'hy':
      return hyEntry(w[0]) !== null;
    case 'da':
      return daEntry(w[0]) !== null;
    case 'fi':
      return fiEntry(w[0]) !== null;
    case 'no':
      return noEntry(w[0]) !== null;
    case 'la':
      return laEntry(w[0]) !== null;
    default:
      return true;
  }
}

export function _dateLocale(): string {
  return getLang() === 'en' ? 'en' : getLang() === 'es' ? 'es' : 'uk';
}
export function _secUnit(): string {
  return getLang() === 'ua' ? 'с' : 's';
}
export function _genCode(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(6)), (v) => CHARS[v % CHARS.length]).join(
    '',
  );
}
export function _fmtCode(c: string): string {
  return c.slice(0, 3) + '-' + c.slice(3);
}
export function _rng(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// Words usable as a letter source for anagram/letters modes: plain a-z, 4-9 letters
export const _SCRAMBLE_POOL: WordEntry[] = (W as unknown as WordEntry[]).filter(
  (w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4 && w[0].length <= 9,
);

export function _buildDeck(
  seed: number,
  category: string,
  difficulty: Difficulty,
  mode?: DuelMode,
  lang?: string,
  knowLang?: string,
): WordEntry[] {
  const rnd = _rng(seed);
  const scramble = mode === 'anagram' || mode === 'letters';
  let pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
  // Language filter: keep only words that have translations in both selected languages
  if (!scramble) {
    const langPool = pool.filter(
      (w) => _hasLangWord(w, lang || 'en') && _hasLangWord(w, knowLang || 'ua'),
    );
    if (langPool.length >= ROOM_SIZE) pool = langPool;
  }
  // Category filter
  if (category) {
    const allowed = new Set((WORD_CATEGORIES[category] ?? []).map((w: string) => w.toLowerCase()));
    pool = pool.filter((w) => allowed.has(w[0].toLowerCase()));
  }
  // CEFR-based difficulty filter
  if (difficulty !== 'mixed') {
    const cefrPool = pool.filter((w) => getCefrLevel(w[0]) === difficulty);
    if (cefrPool.length >= ROOM_SIZE) pool = cefrPool;
    // fallback: include adjacent levels if not enough words
    else if (cefrPool.length > 0) pool = cefrPool;
  }
  if (pool.length < ROOM_SIZE) pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]); // final fallback
  return Array.from({ length: pool.length }, (_, i) => i)
    .sort(() => rnd() - 0.5)
    .slice(0, ROOM_SIZE)
    .map((i) => pool[i]);
}
