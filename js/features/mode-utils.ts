// Vymova — js/features/mode-utils.ts
// Generic N×N language-pair dispatcher: any of the 13 target languages can
// pair with any other (or with EN/UA) — see plan "Full N×N language-pair
// matrix" for the rationale. Mode strings stay `${front}-${back}` (or the
// bare 'en'/'ua' for the EN↔UA pair) exactly as before; we just stopped
// hand-enumerating which pairs are constructible.
import { W } from '../../data/words.js';
import { boldEn, boldUa, boldHead } from '../core/card-helpers.ts';
import {
  saveKnownEs,
  saveKnownFr,
  saveKnownIt,
  saveKnownPt,
  saveKnownDe,
  saveKnownHe,
  saveKnownAr,
  saveKnownPl,
  saveKnownZh,
  saveKnownEl,
  saveKnownJa,
  saveKnownTr,
  saveKnownNl,
  saveKnownVi,
  saveKnownHi,
  saveKnownBn,
  saveKnownId,
  saveKnownPcm,
  saveKnownKo,
  saveKnownFa,
  saveKnownSw,
  saveKnownMs,
  saveKnownTh,
  saveKnownAz,
  saveKnownRo,
  saveKnownHu,
  saveKnownCs,
  saveKnownKk,
  saveKnownSv,
  saveKnownKa,
  saveKnownHr,
  saveKnownSr,
  saveKnownBs,
  saveKnownBg,
  saveKnownSk,
  saveKnownHy,
  saveKnownDa,
  saveKnownFi,
  saveKnownNo,
} from '../core/storage.ts';
import { getModeSnapshot } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.js';
import { ALL_TARGET_LANGS, type TargetLang, type Code } from '../../src/types.js';
import { getKnownSnapshot } from '../../src/known-words-store.ts';

export type { TargetLang, Code };
export { ALL_TARGET_LANGS };

type Entry = readonly [string, string, string?] | null;
type Table = Record<string, unknown>;

function lookup(table: Table, word: string): Entry {
  return (table as Record<string, Entry>)[word] ?? null;
}

// Per-language word tables are loaded on first use (dynamic import) to keep
// the initial bundle small. Only words.js (EN/UA base) is eager.
const TABLES: Partial<Record<TargetLang, Table>> = {};
const LANG_LOADERS: Record<TargetLang, () => Promise<Table>> = {
  es: () => import('../../data/words_es.js').then((m) => m.W_ES as Table),
  fr: () => import('../../data/words_fr.js').then((m) => m.W_FR as Table),
  it: () => import('../../data/words_it.js').then((m) => m.W_IT as Table),
  pt: () => import('../../data/words_pt.js').then((m) => m.W_PT as Table),
  de: () => import('../../data/words_de.js').then((m) => m.W_DE as Table),
  he: () => import('../../data/words_he.js').then((m) => m.W_HE as Table),
  ar: () => import('../../data/words_ar.js').then((m) => m.W_AR as Table),
  pl: () => import('../../data/words_pl.js').then((m) => m.W_PL as Table),
  zh: () => import('../../data/words_zh.js').then((m) => m.W_ZH as Table),
  el: () => import('../../data/words_el.js').then((m) => m.W_EL as Table),
  ja: () => import('../../data/words_ja.js').then((m) => m.W_JA as Table),
  tr: () => import('../../data/words_tr.js').then((m) => m.W_TR as Table),
  nl: () => import('../../data/words_nl.js').then((m) => m.W_NL as Table),
  vi: () => import('../../data/words_vi.js').then((m) => m.W_VI as Table),
  hi: () => import('../../data/words_hi.js').then((m) => m.W_HI as Table),
  bn: () => import('../../data/words_bn.js').then((m) => m.W_BN as Table),
  id: () => import('../../data/words_id.js').then((m) => m.W_ID as Table),
  pcm: () => import('../../data/words_pcm.js').then((m) => m.W_PCM as Table),
  ko: () => import('../../data/words_ko.js').then((m) => m.W_KO as Table),
  fa: () => import('../../data/words_fa.js').then((m) => m.W_FA as Table),
  sw: () => import('../../data/words_sw.js').then((m) => m.W_SW as Table),
  ms: () => import('../../data/words_ms.js').then((m) => m.W_MS as Table),
  th: () => import('../../data/words_th.js').then((m) => m.W_TH as Table),
  az: () => import('../../data/words_az.js').then((m) => m.W_AZ as Table),
  ro: () => import('../../data/words_ro.js').then((m) => m.W_RO as Table),
  hu: () => import('../../data/words_hu.js').then((m) => m.W_HU as Table),
  cs: () => import('../../data/words_cs.js').then((m) => m.W_CS as Table),
  kk: () => import('../../data/words_kk.js').then((m) => m.W_KK as Table),
  sv: () => import('../../data/words_sv.js').then((m) => m.W_SV as Table),
  ka: () => import('../../data/words_ka.js').then((m) => m.W_KA as Table),
  hr: () => import('../../data/words_hr.js').then((m) => m.W_HR as Table),
  sr: () => import('../../data/words_sr.js').then((m) => m.W_SR as Table),
  bs: () => import('../../data/words_bs.js').then((m) => m.W_BS as Table),
  bg: () => import('../../data/words_bg.js').then((m) => m.W_BG as Table),
  sk: () => import('../../data/words_sk.js').then((m) => m.W_SK as Table),
  hy: () => import('../../data/words_hy.js').then((m) => m.W_HY as Table),
  da: () => import('../../data/words_da.js').then((m) => m.W_DA as Table),
  fi: () => import('../../data/words_fi.js').then((m) => m.W_FI as Table),
  no: () => import('../../data/words_no.js').then((m) => m.W_NO as Table),
};

// In-flight promises to avoid duplicate fetches for the same language.
const LOADING: Partial<Record<TargetLang, Promise<void>>> = {};

/** True when both lang codes have their word tables in cache (en/ua are always ready). */
export function areLangTablesReady(a: string, b: string): boolean {
  const ready = (c: string) => !isTargetLang(c) || !!TABLES[c];
  return ready(a) && ready(b);
}

/** Ensures the word table for `code` is loaded. Safe to call multiple times. */
export async function ensureLangTableLoaded(code: string): Promise<void> {
  if (!isTargetLang(code)) return;
  if (TABLES[code]) return;
  if (!LOADING[code]) {
    LOADING[code] = LANG_LOADERS[code]().then((t) => {
      TABLES[code] = t;
    });
  }
  await LOADING[code];
}

function getTable(code: TargetLang): Table {
  return TABLES[code] ?? {};
}

interface LangConfig {
  entry: (word: string) => Entry;
  known: () => Set<string>;
  saveKnown: (s: Set<string>) => void;
  voiceLocale: string;
  rtl: boolean;
}

const LANG_REGISTRY: Record<TargetLang, LangConfig> = {
  es: {
    entry: (w) => lookup(getTable('es'), w),
    known: () => getKnownSnapshot('es'),
    saveKnown: saveKnownEs,
    voiceLocale: 'es-ES',
    rtl: false,
  },
  fr: {
    entry: (w) => lookup(getTable('fr'), w),
    known: () => getKnownSnapshot('fr'),
    saveKnown: saveKnownFr,
    voiceLocale: 'fr-FR',
    rtl: false,
  },
  it: {
    entry: (w) => lookup(getTable('it'), w),
    known: () => getKnownSnapshot('it'),
    saveKnown: saveKnownIt,
    voiceLocale: 'it-IT',
    rtl: false,
  },
  pt: {
    entry: (w) => lookup(getTable('pt'), w),
    known: () => getKnownSnapshot('pt'),
    saveKnown: saveKnownPt,
    voiceLocale: 'pt-PT',
    rtl: false,
  },
  de: {
    entry: (w) => lookup(getTable('de'), w),
    known: () => getKnownSnapshot('de'),
    saveKnown: saveKnownDe,
    voiceLocale: 'de-DE',
    rtl: false,
  },
  he: {
    entry: (w) => lookup(getTable('he'), w),
    known: () => getKnownSnapshot('he'),
    saveKnown: saveKnownHe,
    voiceLocale: 'he-IL',
    rtl: true,
  },
  ar: {
    entry: (w) => lookup(getTable('ar'), w),
    known: () => getKnownSnapshot('ar'),
    saveKnown: saveKnownAr,
    voiceLocale: 'ar-SA',
    rtl: true,
  },
  pl: {
    entry: (w) => lookup(getTable('pl'), w),
    known: () => getKnownSnapshot('pl'),
    saveKnown: saveKnownPl,
    voiceLocale: 'pl-PL',
    rtl: false,
  },
  zh: {
    entry: (w) => lookup(getTable('zh'), w),
    known: () => getKnownSnapshot('zh'),
    saveKnown: saveKnownZh,
    voiceLocale: 'zh-CN',
    rtl: false,
  },
  el: {
    entry: (w) => lookup(getTable('el'), w),
    known: () => getKnownSnapshot('el'),
    saveKnown: saveKnownEl,
    voiceLocale: 'el-GR',
    rtl: false,
  },
  ja: {
    entry: (w) => lookup(getTable('ja'), w),
    known: () => getKnownSnapshot('ja'),
    saveKnown: saveKnownJa,
    voiceLocale: 'ja-JP',
    rtl: false,
  },
  tr: {
    entry: (w) => lookup(getTable('tr'), w),
    known: () => getKnownSnapshot('tr'),
    saveKnown: saveKnownTr,
    voiceLocale: 'tr-TR',
    rtl: false,
  },
  nl: {
    entry: (w) => lookup(getTable('nl'), w),
    known: () => getKnownSnapshot('nl'),
    saveKnown: saveKnownNl,
    voiceLocale: 'nl-NL',
    rtl: false,
  },
  vi: {
    entry: (w) => lookup(getTable('vi'), w),
    known: () => getKnownSnapshot('vi'),
    saveKnown: saveKnownVi,
    voiceLocale: 'vi-VN',
    rtl: false,
  },
  hi: {
    entry: (w) => lookup(getTable('hi'), w),
    known: () => getKnownSnapshot('hi'),
    saveKnown: saveKnownHi,
    voiceLocale: 'hi-IN',
    rtl: false,
  },
  bn: {
    entry: (w) => lookup(getTable('bn'), w),
    known: () => getKnownSnapshot('bn'),
    saveKnown: saveKnownBn,
    voiceLocale: 'bn-BD',
    rtl: false,
  },
  id: {
    entry: (w) => lookup(getTable('id'), w),
    known: () => getKnownSnapshot('id'),
    saveKnown: saveKnownId,
    voiceLocale: 'id-ID',
    rtl: false,
  },
  pcm: {
    entry: (w) => lookup(getTable('pcm'), w),
    known: () => getKnownSnapshot('pcm'),
    saveKnown: saveKnownPcm,
    voiceLocale: 'pcm-NG',
    rtl: false,
  },
  ko: {
    entry: (w) => lookup(getTable('ko'), w),
    known: () => getKnownSnapshot('ko'),
    saveKnown: saveKnownKo,
    voiceLocale: 'ko-KR',
    rtl: false,
  },
  fa: {
    entry: (w) => lookup(getTable('fa'), w),
    known: () => getKnownSnapshot('fa'),
    saveKnown: saveKnownFa,
    voiceLocale: 'fa-IR',
    rtl: true,
  },
  sw: {
    entry: (w) => lookup(getTable('sw'), w),
    known: () => getKnownSnapshot('sw'),
    saveKnown: saveKnownSw,
    voiceLocale: 'sw-TZ',
    rtl: false,
  },
  ms: {
    entry: (w) => lookup(getTable('ms'), w),
    known: () => getKnownSnapshot('ms'),
    saveKnown: saveKnownMs,
    voiceLocale: 'ms-MY',
    rtl: false,
  },
  th: {
    entry: (w) => lookup(getTable('th'), w),
    known: () => getKnownSnapshot('th'),
    saveKnown: saveKnownTh,
    voiceLocale: 'th-TH',
    rtl: false,
  },
  az: {
    entry: (w) => lookup(getTable('az'), w),
    known: () => getKnownSnapshot('az'),
    saveKnown: saveKnownAz,
    voiceLocale: 'az-AZ',
    rtl: false,
  },
  ro: {
    entry: (w) => lookup(getTable('ro'), w),
    known: () => getKnownSnapshot('ro'),
    saveKnown: saveKnownRo,
    voiceLocale: 'ro-RO',
    rtl: false,
  },
  hu: {
    entry: (w) => lookup(getTable('hu'), w),
    known: () => getKnownSnapshot('hu'),
    saveKnown: saveKnownHu,
    voiceLocale: 'hu-HU',
    rtl: false,
  },
  cs: {
    entry: (w) => lookup(getTable('cs'), w),
    known: () => getKnownSnapshot('cs'),
    saveKnown: saveKnownCs,
    voiceLocale: 'cs-CZ',
    rtl: false,
  },
  kk: {
    entry: (w) => lookup(getTable('kk'), w),
    known: () => getKnownSnapshot('kk'),
    saveKnown: saveKnownKk,
    voiceLocale: 'kk-KZ',
    rtl: false,
  },
  sv: {
    entry: (w) => lookup(getTable('sv'), w),
    known: () => getKnownSnapshot('sv'),
    saveKnown: saveKnownSv,
    voiceLocale: 'sv-SE',
    rtl: false,
  },
  ka: {
    entry: (w) => lookup(getTable('ka'), w),
    known: () => getKnownSnapshot('ka'),
    saveKnown: saveKnownKa,
    voiceLocale: 'ka-GE',
    rtl: false,
  },
  hr: {
    entry: (w) => lookup(getTable('hr'), w),
    known: () => getKnownSnapshot('hr'),
    saveKnown: saveKnownHr,
    voiceLocale: 'hr-HR',
    rtl: false,
  },
  sr: {
    entry: (w) => lookup(getTable('sr'), w),
    known: () => getKnownSnapshot('sr'),
    saveKnown: saveKnownSr,
    voiceLocale: 'sr-RS',
    rtl: false,
  },
  bs: {
    entry: (w) => lookup(getTable('bs'), w),
    known: () => getKnownSnapshot('bs'),
    saveKnown: saveKnownBs,
    voiceLocale: 'bs-BA',
    rtl: false,
  },
  bg: {
    entry: (w) => lookup(getTable('bg'), w),
    known: () => getKnownSnapshot('bg'),
    saveKnown: saveKnownBg,
    voiceLocale: 'bg-BG',
    rtl: false,
  },
  sk: {
    entry: (w) => lookup(getTable('sk'), w),
    known: () => getKnownSnapshot('sk'),
    saveKnown: saveKnownSk,
    voiceLocale: 'sk-SK',
    rtl: false,
  },
  hy: {
    entry: (w) => lookup(getTable('hy'), w),
    known: () => getKnownSnapshot('hy'),
    saveKnown: saveKnownHy,
    voiceLocale: 'hy-AM',
    rtl: false,
  },
  da: {
    entry: (w) => lookup(getTable('da'), w),
    known: () => getKnownSnapshot('da'),
    saveKnown: saveKnownDa,
    voiceLocale: 'da-DK',
    rtl: false,
  },
  fi: {
    entry: (w) => lookup(getTable('fi'), w),
    known: () => getKnownSnapshot('fi'),
    saveKnown: saveKnownFi,
    voiceLocale: 'fi-FI',
    rtl: false,
  },
  no: {
    entry: (w) => lookup(getTable('no'), w),
    known: () => getKnownSnapshot('no'),
    saveKnown: saveKnownNo,
    voiceLocale: 'nb-NO',
    rtl: false,
  },
};

export function langConfig(code: TargetLang): LangConfig {
  return LANG_REGISTRY[code];
}

export function isTargetLang(v: string): v is TargetLang {
  return Object.prototype.hasOwnProperty.call(LANG_REGISTRY, v);
}

// word (in `code`'s own language) → English headword — built lazily, once
// per language, by inverting that language's translation table. Lets UI
// that only has a foreign-language word string (e.g. a hand-curated
// synonym) find the flashcard it belongs to, if any.
const REVERSE_HEADWORD_CACHE: Partial<Record<TargetLang, Map<string, string>>> = {};

export function reverseHeadwordFor(code: TargetLang, word: string): string | null {
  let map = REVERSE_HEADWORD_CACHE[code];
  if (!map) {
    map = new Map();
    for (const [en, entry] of Object.entries(getTable(code))) {
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
    const f = mode.slice(0, i),
      b = mode.slice(i + 1);
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
  const others: Code[] = ['en', 'ua', ...ALL_TARGET_LANGS.filter((l) => l !== code)];
  const modes = others.flatMap((o) => [`${code}-${o}`, `${o}-${code}`]);
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
export const VI_MODES = modesFor('vi');
export const HI_MODES = modesFor('hi');
export const BN_MODES = modesFor('bn');
export const ID_MODES = modesFor('id');
export const PCM_MODES = modesFor('pcm');
export const KO_MODES = modesFor('ko');
export const FA_MODES = modesFor('fa');
export const SW_MODES = modesFor('sw');
export const MS_MODES = modesFor('ms');
export const TH_MODES = modesFor('th');
export const AZ_MODES = modesFor('az');
export const RO_MODES = modesFor('ro');
export const HU_MODES = modesFor('hu');
export const CS_MODES = modesFor('cs');
export const KK_MODES = modesFor('kk');
export const SV_MODES = modesFor('sv');
export const KA_MODES = modesFor('ka');
export const HR_MODES = modesFor('hr');
export const SR_MODES = modesFor('sr');
export const BS_MODES = modesFor('bs');
export const BG_MODES = modesFor('bg');
export const SK_MODES = modesFor('sk');
export const HY_MODES = modesFor('hy');
export const DA_MODES = modesFor('da');
export const FI_MODES = modesFor('fi');
export const NO_MODES = modesFor('no');

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

export type FrontLang =
  | 'EN'
  | 'UA'
  | 'ES'
  | 'FR'
  | 'IT'
  | 'PT'
  | 'DE'
  | 'HE'
  | 'AR'
  | 'PL'
  | 'ZH'
  | 'EL'
  | 'JA'
  | 'TR'
  | 'NL'
  | 'VI'
  | 'HI'
  | 'BN'
  | 'ID'
  | 'PCM'
  | 'KO'
  | 'FA'
  | 'SW'
  | 'MS'
  | 'TH'
  | 'AZ'
  | 'RO'
  | 'HU'
  | 'CS'
  | 'KK'
  | 'SV'
  | 'KA'
  | 'HR'
  | 'SR'
  | 'BS'
  | 'BG'
  | 'SK'
  | 'HY'
  | 'DA'
  | 'FI'
  | 'NO';

// FRONT_LANG залежить лише від обраного режиму (не від конкретного слова) —
// чисто обчислюється з `mode`, тому винесено окремо для CardMeta (item 28a).
export function getFrontLang(mode: string): FrontLang {
  return parsePair(mode).front.toUpperCase() as FrontLang;
}

// Для 'mix'-режиму getMode() обирає випадкове значення (a чи b) при кожному
// викликові. render() резолвить його раз на оновлення картки і кладе в
// deck-store, щоб усі React-компоненти картки (item 28a/28b) бачили той
// самий резолвлений режим, а не кожен своє випадкове значення.
export function getResolvedMode(): string {
  return getModeSnapshot() || getMode();
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
  const frontWord = frontE.word,
    backWord = backE.word;
  const frontRtl = isTargetLang(front) && LANG_REGISTRY[front].rtl;
  const backRtl = isTargetLang(back) && LANG_REGISTRY[back].rtl;

  let exenHtml = '',
    exuaHtml = '';
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

export function esEntry(word: string): Entry {
  return LANG_REGISTRY.es.entry(word);
}
export function frEntry(word: string): Entry {
  return LANG_REGISTRY.fr.entry(word);
}
export function itEntry(word: string): Entry {
  return LANG_REGISTRY.it.entry(word);
}
export function ptEntry(word: string): Entry {
  return LANG_REGISTRY.pt.entry(word);
}
export function deEntry(word: string): Entry {
  return LANG_REGISTRY.de.entry(word);
}
export function heEntry(word: string): Entry {
  return LANG_REGISTRY.he.entry(word);
}
export function arEntry(word: string): Entry {
  return LANG_REGISTRY.ar.entry(word);
}
export function plEntry(word: string): Entry {
  return LANG_REGISTRY.pl.entry(word);
}
export function zhEntry(word: string): Entry {
  return LANG_REGISTRY.zh.entry(word);
}
export function elEntry(word: string): Entry {
  return LANG_REGISTRY.el.entry(word);
}
export function jaEntry(word: string): Entry {
  return LANG_REGISTRY.ja.entry(word);
}
export function trEntry(word: string): Entry {
  return LANG_REGISTRY.tr.entry(word);
}
export function nlEntry(word: string): Entry {
  return LANG_REGISTRY.nl.entry(word);
}
export function viEntry(word: string): Entry {
  return LANG_REGISTRY.vi.entry(word);
}
export function hiEntry(word: string): Entry {
  return LANG_REGISTRY.hi.entry(word);
}
export function bnEntry(word: string): Entry {
  return LANG_REGISTRY.bn.entry(word);
}
export function idEntry(word: string): Entry {
  return LANG_REGISTRY.id.entry(word);
}
export function pcmEntry(word: string): Entry {
  return LANG_REGISTRY.pcm.entry(word);
}
export function koEntry(word: string): Entry {
  return LANG_REGISTRY.ko.entry(word);
}
export function faEntry(word: string): Entry {
  return LANG_REGISTRY.fa.entry(word);
}
export function swEntry(word: string): Entry {
  return LANG_REGISTRY.sw.entry(word);
}
export function msEntry(word: string): Entry {
  return LANG_REGISTRY.ms.entry(word);
}
export function thEntry(word: string): Entry {
  return LANG_REGISTRY.th.entry(word);
}
export function azEntry(word: string): Entry {
  return LANG_REGISTRY.az.entry(word);
}
export function roEntry(word: string): Entry {
  return LANG_REGISTRY.ro.entry(word);
}
export function huEntry(word: string): Entry {
  return LANG_REGISTRY.hu.entry(word);
}
export function csEntry(word: string): Entry {
  return LANG_REGISTRY.cs.entry(word);
}
export function kkEntry(word: string): Entry {
  return LANG_REGISTRY.kk.entry(word);
}
export function svEntry(word: string): Entry {
  return LANG_REGISTRY.sv.entry(word);
}
export function kaEntry(word: string): Entry {
  return LANG_REGISTRY.ka.entry(word);
}
export function hrEntry(word: string): Entry {
  return LANG_REGISTRY.hr.entry(word);
}
export function srEntry(word: string): Entry {
  return LANG_REGISTRY.sr.entry(word);
}
export function bsEntry(word: string): Entry {
  return LANG_REGISTRY.bs.entry(word);
}
export function bgEntry(word: string): Entry {
  return LANG_REGISTRY.bg.entry(word);
}
export function skEntry(word: string): Entry {
  return LANG_REGISTRY.sk.entry(word);
}
export function hyEntry(word: string): Entry {
  return LANG_REGISTRY.hy.entry(word);
}
export function daEntry(word: string): Entry {
  return LANG_REGISTRY.da.entry(word);
}
export function fiEntry(word: string): Entry {
  return LANG_REGISTRY.fi.entry(word);
}
export function noEntry(word: string): Entry {
  return LANG_REGISTRY.no.entry(word);
}

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

/** Total vocabulary size available for the currently selected learn language (full dictionary for en/ua, that language's own table otherwise). */
export function getMaxWordsForLearnLang(): number {
  const lang = targetLangFromStorageKey(localStorage.getItem('ew_learn_lang') ?? 'en');
  return lang ? Object.keys(getTable(lang)).length : W.length;
}

/** The active known Set for the currently selected learn language. */
export function getActiveKnownByLang(): Set<string> {
  const lang = targetLangFromStorageKey(localStorage.getItem('ew_learn_lang') ?? 'en');
  return lang ? LANG_REGISTRY[lang].known() : getKnownSnapshot('en');
}

/** Count of target languages (beyond en/ua) with at least one known word — for "polyglot" achievements. */
export function getStudiedLangCount(): number {
  return ALL_TARGET_LANGS.filter((l) => LANG_REGISTRY[l].known().size > 0).length;
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
  return words.filter(
    (w) =>
      (!learn || LANG_REGISTRY[learn].entry(w[0]) !== null) &&
      (!know || LANG_REGISTRY[know].entry(w[0]) !== null),
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
  return words.filter(
    (w) =>
      (!frontT || LANG_REGISTRY[frontT].entry(w[0]) !== null) &&
      (!backT || LANG_REGISTRY[backT].entry(w[0]) !== null),
  );
}

const NO_TRANSLATIONS_KEY: Record<TargetLang, string> = {
  es: 'deck.noEsTranslations',
  fr: 'deck.noFrTranslations',
  it: 'deck.noItTranslations',
  pt: 'deck.noPtTranslations',
  de: 'deck.noDeTranslations',
  he: 'deck.noHeTranslations',
  ar: 'deck.noArTranslations',
  pl: 'deck.noPlTranslations',
  zh: 'deck.noZhTranslations',
  el: 'deck.noElTranslations',
  ja: 'deck.noJaTranslations',
  tr: 'deck.noTrTranslations',
  nl: 'deck.noNlTranslations',
  vi: 'deck.noViTranslations',
  hi: 'deck.noHiTranslations',
  bn: 'deck.noBnTranslations',
  id: 'deck.noIdTranslations',
  pcm: 'deck.noPcmTranslations',
  ko: 'deck.noKoTranslations',
  fa: 'deck.noFaTranslations',
  sw: 'deck.noSwTranslations',
  ms: 'deck.noMsTranslations',
  th: 'deck.noThTranslations',
  az: 'deck.noAzTranslations',
  ro: 'deck.noRoTranslations',
  hu: 'deck.noHuTranslations',
  cs: 'deck.noCsTranslations',
  kk: 'deck.noKkTranslations',
  sv: 'deck.noSvTranslations',
  ka: 'deck.noKaTranslations',
  hr: 'deck.noHrTranslations',
  sr: 'deck.noSrTranslations',
  bs: 'deck.noBsTranslations',
  bg: 'deck.noBgTranslations',
  sk: 'deck.noSkTranslations',
  hy: 'deck.noHyTranslations',
  da: 'deck.noDaTranslations',
  fi: 'deck.noFiTranslations',
  no: 'deck.noNoTranslations',
};

function hasAnyEntries(lang: TargetLang, words: WordEntry[]): boolean {
  return words.some((w) => LANG_REGISTRY[lang].entry(w[0]) !== null);
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
