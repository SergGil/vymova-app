// Vymova — js/features/mode-utils.ts
// Generic N×N language-pair dispatcher: any of the 13 target languages can
// pair with any other (or with EN/UA) — see plan "Full N×N language-pair
// matrix" for the rationale. Mode strings stay `${front}-${back}` (or the
// bare 'en'/'ua' for the EN↔UA pair) exactly as before; we just stopped
// hand-enumerating which pairs are constructible.
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { W_IT } from '../../data/words_it.js';
import { W_PT } from '../../data/words_pt.js';
import { W_DE } from '../../data/words_de.js';
import { W_HE } from '../../data/words_he.js';
import { W_AR } from '../../data/words_ar.js';
import { W_PL } from '../../data/words_pl.js';
import { W_ZH } from '../../data/words_zh.js';
import { W_EL } from '../../data/words_el.js';
import { W_JA } from '../../data/words_ja.js';
import { W_TR } from '../../data/words_tr.js';
import { W_NL } from '../../data/words_nl.js';
import { boldEn, boldUa, boldHead } from '../core/card-helpers.ts';
import {
  saveKnown, saveKnownEs, saveKnownFr, saveKnownIt, saveKnownPt, saveKnownDe,
  saveKnownHe, saveKnownAr, saveKnownPl, saveKnownZh, saveKnownEl, saveKnownJa,
  saveKnownTr, saveKnownNl,
} from '../core/storage.ts';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

export type TargetLang = 'es' | 'fr' | 'it' | 'pt' | 'de' | 'he' | 'ar' | 'pl' | 'zh' | 'el' | 'ja' | 'tr' | 'nl';
export type Code = TargetLang | 'en' | 'ua';

type Entry = readonly [string, string, string?] | null;

function lookup(table: Record<string, unknown>, word: string): Entry {
  return (table as Record<string, Entry>)[word] ?? null;
}

interface LangConfig {
  entry: (word: string) => Entry;
  known: () => Set<string>;
  saveKnown: (s: Set<string>) => void;
  voiceLocale: string;
  rtl: boolean;
}

const LANG_REGISTRY: Record<TargetLang, LangConfig> = {
  es: { entry: w => lookup(W_ES, w), known: () => state.knownEs, saveKnown: saveKnownEs, voiceLocale: 'es-ES', rtl: false },
  fr: { entry: w => lookup(W_FR, w), known: () => state.knownFr, saveKnown: saveKnownFr, voiceLocale: 'fr-FR', rtl: false },
  it: { entry: w => lookup(W_IT, w), known: () => state.knownIt, saveKnown: saveKnownIt, voiceLocale: 'it-IT', rtl: false },
  pt: { entry: w => lookup(W_PT, w), known: () => state.knownPt, saveKnown: saveKnownPt, voiceLocale: 'pt-PT', rtl: false },
  de: { entry: w => lookup(W_DE, w), known: () => state.knownDe, saveKnown: saveKnownDe, voiceLocale: 'de-DE', rtl: false },
  he: { entry: w => lookup(W_HE, w), known: () => state.knownHe, saveKnown: saveKnownHe, voiceLocale: 'he-IL', rtl: true },
  ar: { entry: w => lookup(W_AR, w), known: () => state.knownAr, saveKnown: saveKnownAr, voiceLocale: 'ar-SA', rtl: true },
  pl: { entry: w => lookup(W_PL, w), known: () => state.knownPl, saveKnown: saveKnownPl, voiceLocale: 'pl-PL', rtl: false },
  zh: { entry: w => lookup(W_ZH, w), known: () => state.knownZh, saveKnown: saveKnownZh, voiceLocale: 'zh-CN', rtl: false },
  el: { entry: w => lookup(W_EL, w), known: () => state.knownEl, saveKnown: saveKnownEl, voiceLocale: 'el-GR', rtl: false },
  ja: { entry: w => lookup(W_JA, w), known: () => state.knownJa, saveKnown: saveKnownJa, voiceLocale: 'ja-JP', rtl: false },
  tr: { entry: w => lookup(W_TR, w), known: () => state.knownTr, saveKnown: saveKnownTr, voiceLocale: 'tr-TR', rtl: false },
  nl: { entry: w => lookup(W_NL, w), known: () => state.knownNl, saveKnown: saveKnownNl, voiceLocale: 'nl-NL', rtl: false },
};

export const ALL_TARGET_LANGS: TargetLang[] = ['es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl'];

export function langConfig(code: TargetLang): LangConfig {
  return LANG_REGISTRY[code];
}

export function isTargetLang(v: string): v is TargetLang {
  return Object.prototype.hasOwnProperty.call(LANG_REGISTRY, v);
}

const RAW_TABLES: Record<TargetLang, Record<string, unknown>> = {
  es: W_ES, fr: W_FR, it: W_IT, pt: W_PT, de: W_DE, he: W_HE, ar: W_AR,
  pl: W_PL, zh: W_ZH, el: W_EL, ja: W_JA, tr: W_TR, nl: W_NL,
};

// word (in `code`'s own language) → English headword — built lazily, once
// per language, by inverting that language's translation table. Lets UI
// that only has a foreign-language word string (e.g. a hand-curated
// synonym) find the flashcard it belongs to, if any.
const REVERSE_HEADWORD_CACHE: Partial<Record<TargetLang, Map<string, string>>> = {};

export function reverseHeadwordFor(code: TargetLang, word: string): string | null {
  let map = REVERSE_HEADWORD_CACHE[code];
  if (!map) {
    map = new Map();
    for (const [en, entry] of Object.entries(RAW_TABLES[code])) {
      const translated = (entry as Entry)?.[0];
      if (translated && !map.has(translated.toLowerCase())) map.set(translated.toLowerCase(), en);
    }
    REVERSE_HEADWORD_CACHE[code] = map;
  }
  return map.get(word.toLowerCase()) ?? null;
}

function isCode(v: string): v is Code {
  return v === 'en' || v === 'ua' || isTargetLang(v);
}

/** Parses a mode string (`'en'`, `'ua'`, or `'${front}-${back}'`) into its front/back language codes. */
export function parsePair(mode: string): { front: Code; back: Code; valid: boolean } {
  if (mode === 'en') return { front: 'en', back: 'ua', valid: true };
  if (mode === 'ua') return { front: 'ua', back: 'en', valid: true };
  const i = mode.indexOf('-');
  if (i > 0) {
    const f = mode.slice(0, i), b = mode.slice(i + 1);
    if (isCode(f) && isCode(b)) return { front: f, back: b, valid: true };
  }
  return { front: 'en', back: 'ua', valid: false };
}

function entryFor(code: Code, cw: WordEntry): { word: string; ex: string } {
  if (code === 'en') return { word: cw[0], ex: cw[2] || '' };
  if (code === 'ua') return { word: cw[1], ex: cw[3] || '' };
  const e = LANG_REGISTRY[code].entry(cw[0]);
  return { word: e ? e[0] : '', ex: e ? e[1] : '' };
}

// Backward-compat: each XX_MODES Set now contains every mode string where
// that language appears as front or back (not just the historical EN/UA
// pairs) — existing consumers that only check membership (not direction)
// keep working unchanged.
function modesFor(code: TargetLang): Set<string> {
  const others: Code[] = ['en', 'ua', ...ALL_TARGET_LANGS.filter(l => l !== code)];
  const modes = others.flatMap(o => [`${code}-${o}`, `${o}-${code}`]);
  return new Set(modes);
}

export const ES_MODES = modesFor('es');
export const FR_MODES = modesFor('fr');
export const IT_MODES = modesFor('it');
export const PT_MODES = modesFor('pt');
export const DE_MODES = modesFor('de');
export const HE_MODES = modesFor('he');
export const AR_MODES = modesFor('ar');
export const PL_MODES = modesFor('pl');
export const ZH_MODES = modesFor('zh');
export const EL_MODES = modesFor('el');
export const JA_MODES = modesFor('ja');
export const TR_MODES = modesFor('tr');
export const NL_MODES = modesFor('nl');

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

export type FrontLang = 'EN' | 'UA' | 'ES' | 'FR' | 'IT' | 'PT' | 'DE' | 'HE' | 'AR' | 'PL' | 'ZH' | 'EL' | 'JA' | 'TR' | 'NL';

// FRONT_LANG залежить лише від обраного режиму (не від конкретного слова) —
// чисто обчислюється з `mode`, тому винесено окремо для CardMeta (item 28a).
export function getFrontLang(mode: string): FrontLang {
  return parsePair(mode).front.toUpperCase() as FrontLang;
}

// Для 'mix'-режиму getMode() обирає випадкове значення (a чи b) при кожному
// викликові. render() резолвить його раз на оновлення картки і кладе в
// `state._mode`, щоб усі React-компоненти картки (item 28a/28b) бачили той
// самий резолвлений режим, а не кожен своє випадкове значення.
export function getResolvedMode(): string {
  return state._mode || getMode();
}

/**
 * Whichever side of the pair is a target language (front takes priority
 * when both front and back are target languages, as can now happen with
 * target↔target pairs) — null when the pair is plain EN↔UA. Mirrors the
 * legacy behaviour where e.g. both 'es-en' and 'en-es' tracked ES regardless
 * of which side ES was on.
 */
export function getActiveTargetLang(mode: string): TargetLang | null {
  const { front, back } = parsePair(mode);
  if (isTargetLang(front)) return front;
  if (isTargetLang(back)) return back;
  return null;
}

/** The active known-Set for the active target language of `mode` (see getActiveTargetLang), or `fallback`. */
export function getActiveKnownSet(mode: string, fallback: Set<string>): Set<string> {
  const lang = getActiveTargetLang(mode);
  return lang ? LANG_REGISTRY[lang].known() : fallback;
}

// Той самий вибір активного набору "вивчених" слів, що й `_activeKnown()`
// в app.ts/card-actions.ts — за поточним резолвленим режимом.
export function getActiveKnown(known: Set<string>): Set<string> {
  return getActiveKnownSet(getResolvedMode(), known);
}

interface CardView {
  FRONT_LANG: FrontLang;
  frontWord: string;
  backWord: string;
  exenHtml: string;
  exuaHtml: string;
  frontRtl: boolean;
  backRtl: boolean;
}

// Чисте обчислення FRONT_LANG/frontWord/backWord/прикладів для item 28b.
export function computeCardView(cw: WordEntry, mode: string): CardView {
  const { front, back, valid } = parsePair(mode);
  const frontE = entryFor(front, cw);
  const backE = entryFor(back, cw);
  const FRONT_LANG = front.toUpperCase() as FrontLang;
  const frontWord = frontE.word, backWord = backE.word;
  const frontRtl = isTargetLang(front) && LANG_REGISTRY[front].rtl;
  const backRtl = isTargetLang(back) && LANG_REGISTRY[back].rtl;

  let exenHtml = '', exuaHtml = '';
  if (mode === 'en') {
    exenHtml = boldEn(frontE.ex, cw);
    exuaHtml = backE.ex;
  } else if (mode === 'ua') {
    exenHtml = boldUa(frontE.ex, cw) || frontE.ex;
    exuaHtml = boldEn(backE.ex, cw);
  } else if (valid) {
    exenHtml = boldHead(frontE.ex, frontWord) || frontE.ex;
    exuaHtml = boldHead(backE.ex, backWord) || backE.ex;
  }

  return { FRONT_LANG, frontWord, backWord, exenHtml, exuaHtml, frontRtl, backRtl };
}

export function esEntry(word: string): Entry { return LANG_REGISTRY.es.entry(word); }
export function frEntry(word: string): Entry { return LANG_REGISTRY.fr.entry(word); }
export function itEntry(word: string): Entry { return LANG_REGISTRY.it.entry(word); }
export function ptEntry(word: string): Entry { return LANG_REGISTRY.pt.entry(word); }
export function deEntry(word: string): Entry { return LANG_REGISTRY.de.entry(word); }
export function heEntry(word: string): Entry { return LANG_REGISTRY.he.entry(word); }
export function arEntry(word: string): Entry { return LANG_REGISTRY.ar.entry(word); }
export function plEntry(word: string): Entry { return LANG_REGISTRY.pl.entry(word); }
export function zhEntry(word: string): Entry { return LANG_REGISTRY.zh.entry(word); }
export function elEntry(word: string): Entry { return LANG_REGISTRY.el.entry(word); }
export function jaEntry(word: string): Entry { return LANG_REGISTRY.ja.entry(word); }
export function trEntry(word: string): Entry { return LANG_REGISTRY.tr.entry(word); }
export function nlEntry(word: string): Entry { return LANG_REGISTRY.nl.entry(word); }

function targetLangFromStorageKey(key: string): TargetLang | null {
  return isTargetLang(key) ? key : null;
}

/** The headword for `code` (en/ua/target language) from a WordEntry — '' if no translation exists for that language. */
export function headwordFor(code: Code, w: WordEntry): string {
  if (code === 'en') return w[0];
  if (code === 'ua') return w[1];
  return LANG_REGISTRY[code].entry(w[0])?.[0] ?? '';
}

/** Count of "known" words in the currently selected learn language. */
export function getKnownInLang(): number {
  return getActiveKnownByLang().size;
}

/** The active known Set for the currently selected learn language. */
export function getActiveKnownByLang(): Set<string> {
  const lang = targetLangFromStorageKey(localStorage.getItem('ew_learn_lang') ?? 'en');
  return lang ? LANG_REGISTRY[lang].known() : state.known;
}

/**
 * Filter word list to only those available in the current pair — the
 * intersection of whichever of (learn language, know language) are target
 * languages (EN/UA always cover every word, so they never restrict).
 */
export function getWordsForPair(words: WordEntry[]): WordEntry[] {
  const learn = targetLangFromStorageKey(localStorage.getItem('ew_learn_lang') ?? 'en');
  const know = targetLangFromStorageKey(localStorage.getItem('ew_know_lang') ?? 'ua');
  if (!learn && !know) return words;
  return words.filter(w =>
    (!learn || LANG_REGISTRY[learn].entry(w[0]) !== null) &&
    (!know || LANG_REGISTRY[know].entry(w[0]) !== null)
  );
}

/** @deprecated use getWordsForPair — kept as an alias for existing call sites. */
export function getWordsForLang(words: WordEntry[]): WordEntry[] {
  return getWordsForPair(words);
}

/** True when `mode` involves a target language on either side (i.e. needs deck filtering, unlike plain EN↔UA). */
export function isSpecialMode(mode: string): boolean {
  const { front, back } = parsePair(mode);
  return isTargetLang(front) || isTargetLang(back);
}

/** Words matching both target-language sides of `mode` (en/ua sides never restrict). */
export function getWordsForMode(mode: string, words: WordEntry[]): WordEntry[] {
  const { front, back } = parsePair(mode);
  const frontT = isTargetLang(front) ? front : null;
  const backT = isTargetLang(back) ? back : null;
  if (!frontT && !backT) return words;
  return words.filter(w =>
    (!frontT || LANG_REGISTRY[frontT].entry(w[0]) !== null) &&
    (!backT || LANG_REGISTRY[backT].entry(w[0]) !== null)
  );
}

const NO_TRANSLATIONS_KEY: Record<TargetLang, string> = {
  es: 'deck.noEsTranslations', fr: 'deck.noFrTranslations', it: 'deck.noItTranslations', pt: 'deck.noPtTranslations',
  de: 'deck.noDeTranslations', he: 'deck.noHeTranslations', ar: 'deck.noArTranslations', pl: 'deck.noPlTranslations',
  zh: 'deck.noZhTranslations', el: 'deck.noElTranslations', ja: 'deck.noJaTranslations', tr: 'deck.noTrTranslations',
  nl: 'deck.noNlTranslations',
};

function hasAnyEntries(lang: TargetLang, words: WordEntry[]): boolean {
  return words.some(w => LANG_REGISTRY[lang].entry(w[0]) !== null);
}

/** i18n key for the "no translations available" toast shown when getWordsForMode(mode, words) is empty. */
export function noTranslationsKey(mode: string, words: WordEntry[]): string {
  if (mode === 'es-fr' || mode === 'fr-es') return 'deck.noEsFrTranslations';
  const { front, back } = parsePair(mode);
  const frontT = isTargetLang(front) ? front : null;
  const backT = isTargetLang(back) ? back : null;
  if (frontT && !hasAnyEntries(frontT, words)) return NO_TRANSLATIONS_KEY[frontT];
  if (backT && !hasAnyEntries(backT, words)) return NO_TRANSLATIONS_KEY[backT];
  return NO_TRANSLATIONS_KEY[(frontT ?? backT ?? 'de') as TargetLang];
}
