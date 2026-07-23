// Vymova — js/features/duel-deck.ts
// Pure language/deck-building helpers, extracted out of duel.ts. Dependency-
// free leaf module (like duel-firebase.ts / duel-profile-snap.ts) — used
// both by duel.ts's own core (question rendering, history) and by the other
// extracted duel-*-logic.ts modules (tournament/async-challenge/spectator),
// which no longer need to import duel.ts itself just for deck-building.
import { W } from '../../../data/words-data/words.js';
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
  ltEntry,
  lvEntry,
  etEntry,
  slEntry,
  mkEntry,
  sqEntry,
  isEntry,
  cyEntry,
  gaEntry,
  tlEntry,
  mnEntry,
  uzEntry,
  amEntry,
  eoEntry,
  taEntry,
  paEntry,
  zuEntry,
  afEntry,
  kyEntry,
  tgEntry,
  tkEntry,
  ugEntry,
  euEntry,
  caEntry,
  glEntry,
  mtEntry,
  lbEntry,
  htEntry,
  boEntry,
  myEntry,
  kmEntry,
  loEntry,
  neEntry,
  siEntry,
  urEntry,
  teEntry,
  mlEntry,
  knEntry,
  mrEntry,
  guEntry,
  orEntry,
  asEntry,
  sdEntry,
  psEntry,
  soEntry,
  haEntry,
  yoEntry,
  igEntry,
  tiEntry,
  woEntry,
  mgEntry,
  xhEntry,
  snEntry,
  nyEntry,
  fjEntry,
  smEntry,
  toEntry,
  miEntry,
  hawEntry,
  jvEntry,
  suEntry,
  gdEntry,
  brEntry,
  kwEntry,
  gvEntry,
  foEntry,
  ocEntry,
  coEntry,
  scEntry,
  fyEntry,
  yiEntry,
  ladEntry,
  quEntry,
  gnEntry,
  ayEntry,
  dzEntry,
  dvEntry,
  tetEntry,
  beEntry,
  qyaEntry,
  sjnEntry,
  kuEntry,
  omEntry,
  lnEntry,
  bhoEntry,
  cebEntry,
  rmEntry,
  tyEntry,
  chEntry,
  mhEntry,
  pauEntry,
  nahEntry,
  nvEntry,
  tlhEntry,
  valEntry,
  dthEntry,
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
    case 'lt':
      return ltEntry(w[0])?.[0] ?? w[1];
    case 'lv':
      return lvEntry(w[0])?.[0] ?? w[1];
    case 'et':
      return etEntry(w[0])?.[0] ?? w[1];
    case 'sl':
      return slEntry(w[0])?.[0] ?? w[1];
    case 'mk':
      return mkEntry(w[0])?.[0] ?? w[1];
    case 'sq':
      return sqEntry(w[0])?.[0] ?? w[1];
    case 'is':
      return isEntry(w[0])?.[0] ?? w[1];
    case 'cy':
      return cyEntry(w[0])?.[0] ?? w[1];
    case 'ga':
      return gaEntry(w[0])?.[0] ?? w[1];
    case 'tl':
      return tlEntry(w[0])?.[0] ?? w[1];
    case 'mn':
      return mnEntry(w[0])?.[0] ?? w[1];
    case 'uz':
      return uzEntry(w[0])?.[0] ?? w[1];
    case 'am':
      return amEntry(w[0])?.[0] ?? w[1];
    case 'eo':
      return eoEntry(w[0])?.[0] ?? w[1];
    case 'ta':
      return taEntry(w[0])?.[0] ?? w[1];
    case 'pa':
      return paEntry(w[0])?.[0] ?? w[1];
    case 'zu':
      return zuEntry(w[0])?.[0] ?? w[1];
    case 'af':
      return afEntry(w[0])?.[0] ?? w[1];
    case 'ky':
      return kyEntry(w[0])?.[0] ?? w[1];
    case 'tg':
      return tgEntry(w[0])?.[0] ?? w[1];
    case 'tk':
      return tkEntry(w[0])?.[0] ?? w[1];
    case 'ug':
      return ugEntry(w[0])?.[0] ?? w[1];
    case 'eu':
      return euEntry(w[0])?.[0] ?? w[1];
    case 'ca':
      return caEntry(w[0])?.[0] ?? w[1];
    case 'gl':
      return glEntry(w[0])?.[0] ?? w[1];
    case 'mt':
      return mtEntry(w[0])?.[0] ?? w[1];
    case 'lb':
      return lbEntry(w[0])?.[0] ?? w[1];
    case 'ht':
      return htEntry(w[0])?.[0] ?? w[1];
    case 'bo':
      return boEntry(w[0])?.[0] ?? w[1];
    case 'my':
      return myEntry(w[0])?.[0] ?? w[1];
    case 'km':
      return kmEntry(w[0])?.[0] ?? w[1];
    case 'lo':
      return loEntry(w[0])?.[0] ?? w[1];
    case 'ne':
      return neEntry(w[0])?.[0] ?? w[1];
    case 'si':
      return siEntry(w[0])?.[0] ?? w[1];
    case 'ur':
      return urEntry(w[0])?.[0] ?? w[1];
    case 'te':
      return teEntry(w[0])?.[0] ?? w[1];
    case 'ml':
      return mlEntry(w[0])?.[0] ?? w[1];
    case 'kn':
      return knEntry(w[0])?.[0] ?? w[1];
    case 'mr':
      return mrEntry(w[0])?.[0] ?? w[1];
    case 'gu':
      return guEntry(w[0])?.[0] ?? w[1];
    case 'or':
      return orEntry(w[0])?.[0] ?? w[1];
    case 'as':
      return asEntry(w[0])?.[0] ?? w[1];
    case 'sd':
      return sdEntry(w[0])?.[0] ?? w[1];
    case 'ps':
      return psEntry(w[0])?.[0] ?? w[1];
    case 'so':
      return soEntry(w[0])?.[0] ?? w[1];
    case 'ha':
      return haEntry(w[0])?.[0] ?? w[1];
    case 'yo':
      return yoEntry(w[0])?.[0] ?? w[1];
    case 'ig':
      return igEntry(w[0])?.[0] ?? w[1];
    case 'ti':
      return tiEntry(w[0])?.[0] ?? w[1];
    case 'wo':
      return woEntry(w[0])?.[0] ?? w[1];
    case 'mg':
      return mgEntry(w[0])?.[0] ?? w[1];
    case 'xh':
      return xhEntry(w[0])?.[0] ?? w[1];
    case 'sn':
      return snEntry(w[0])?.[0] ?? w[1];
    case 'ny':
      return nyEntry(w[0])?.[0] ?? w[1];
    case 'fj':
      return fjEntry(w[0])?.[0] ?? w[1];
    case 'sm':
      return smEntry(w[0])?.[0] ?? w[1];
    case 'to':
      return toEntry(w[0])?.[0] ?? w[1];
    case 'mi':
      return miEntry(w[0])?.[0] ?? w[1];
    case 'haw':
      return hawEntry(w[0])?.[0] ?? w[1];
    case 'jv':
      return jvEntry(w[0])?.[0] ?? w[1];
    case 'su':
      return suEntry(w[0])?.[0] ?? w[1];
    case 'gd':
      return gdEntry(w[0])?.[0] ?? w[1];
    case 'br':
      return brEntry(w[0])?.[0] ?? w[1];
    case 'kw':
      return kwEntry(w[0])?.[0] ?? w[1];
    case 'gv':
      return gvEntry(w[0])?.[0] ?? w[1];
    case 'fo':
      return foEntry(w[0])?.[0] ?? w[1];
    case 'oc':
      return ocEntry(w[0])?.[0] ?? w[1];
    case 'co':
      return coEntry(w[0])?.[0] ?? w[1];
    case 'sc':
      return scEntry(w[0])?.[0] ?? w[1];
    case 'fy':
      return fyEntry(w[0])?.[0] ?? w[1];
    case 'yi':
      return yiEntry(w[0])?.[0] ?? w[1];
    case 'lad':
      return ladEntry(w[0])?.[0] ?? w[1];
    case 'qu':
      return quEntry(w[0])?.[0] ?? w[1];
    case 'gn':
      return gnEntry(w[0])?.[0] ?? w[1];
    case 'ay':
      return ayEntry(w[0])?.[0] ?? w[1];
    case 'dz':
      return dzEntry(w[0])?.[0] ?? w[1];
    case 'dv':
      return dvEntry(w[0])?.[0] ?? w[1];
    case 'tet':
      return tetEntry(w[0])?.[0] ?? w[1];
    case 'be':
      return beEntry(w[0])?.[0] ?? w[1];
    case 'qya':
      return qyaEntry(w[0])?.[0] ?? w[1];
    case 'sjn':
      return sjnEntry(w[0])?.[0] ?? w[1];
    case 'ku':
      return kuEntry(w[0])?.[0] ?? w[1];
    case 'om':
      return omEntry(w[0])?.[0] ?? w[1];
    case 'ln':
      return lnEntry(w[0])?.[0] ?? w[1];
    case 'bho':
      return bhoEntry(w[0])?.[0] ?? w[1];
    case 'ceb':
      return cebEntry(w[0])?.[0] ?? w[1];
    case 'rm':
      return rmEntry(w[0])?.[0] ?? w[1];
    case 'ty':
      return tyEntry(w[0])?.[0] ?? w[1];
    case 'ch':
      return chEntry(w[0])?.[0] ?? w[1];
    case 'mh':
      return mhEntry(w[0])?.[0] ?? w[1];
    case 'pau':
      return pauEntry(w[0])?.[0] ?? w[1];
    case 'nah':
      return nahEntry(w[0])?.[0] ?? w[1];
    case 'nv':
      return nvEntry(w[0])?.[0] ?? w[1];
    case 'tlh':
      return tlhEntry(w[0])?.[0] ?? w[1];
    case 'val':
      return valEntry(w[0])?.[0] ?? w[1];
    case 'dth':
      return dthEntry(w[0])?.[0] ?? w[1];
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
    case 'lt':
      return ltEntry(w[0]) !== null;
    case 'lv':
      return lvEntry(w[0]) !== null;
    case 'et':
      return etEntry(w[0]) !== null;
    case 'sl':
      return slEntry(w[0]) !== null;
    case 'mk':
      return mkEntry(w[0]) !== null;
    case 'sq':
      return sqEntry(w[0]) !== null;
    case 'is':
      return isEntry(w[0]) !== null;
    case 'cy':
      return cyEntry(w[0]) !== null;
    case 'ga':
      return gaEntry(w[0]) !== null;
    case 'tl':
      return tlEntry(w[0]) !== null;
    case 'mn':
      return mnEntry(w[0]) !== null;
    case 'uz':
      return uzEntry(w[0]) !== null;
    case 'am':
      return amEntry(w[0]) !== null;
    case 'eo':
      return eoEntry(w[0]) !== null;
    case 'ta':
      return taEntry(w[0]) !== null;
    case 'pa':
      return paEntry(w[0]) !== null;
    case 'zu':
      return zuEntry(w[0]) !== null;
    case 'af':
      return afEntry(w[0]) !== null;
    case 'ky':
      return kyEntry(w[0]) !== null;
    case 'tg':
      return tgEntry(w[0]) !== null;
    case 'tk':
      return tkEntry(w[0]) !== null;
    case 'ug':
      return ugEntry(w[0]) !== null;
    case 'eu':
      return euEntry(w[0]) !== null;
    case 'ca':
      return caEntry(w[0]) !== null;
    case 'gl':
      return glEntry(w[0]) !== null;
    case 'mt':
      return mtEntry(w[0]) !== null;
    case 'lb':
      return lbEntry(w[0]) !== null;
    case 'ht':
      return htEntry(w[0]) !== null;
    case 'bo':
      return boEntry(w[0]) !== null;
    case 'my':
      return myEntry(w[0]) !== null;
    case 'km':
      return kmEntry(w[0]) !== null;
    case 'lo':
      return loEntry(w[0]) !== null;
    case 'ne':
      return neEntry(w[0]) !== null;
    case 'si':
      return siEntry(w[0]) !== null;
    case 'ur':
      return urEntry(w[0]) !== null;
    case 'te':
      return teEntry(w[0]) !== null;
    case 'ml':
      return mlEntry(w[0]) !== null;
    case 'kn':
      return knEntry(w[0]) !== null;
    case 'mr':
      return mrEntry(w[0]) !== null;
    case 'gu':
      return guEntry(w[0]) !== null;
    case 'or':
      return orEntry(w[0]) !== null;
    case 'as':
      return asEntry(w[0]) !== null;
    case 'sd':
      return sdEntry(w[0]) !== null;
    case 'ps':
      return psEntry(w[0]) !== null;
    case 'so':
      return soEntry(w[0]) !== null;
    case 'ha':
      return haEntry(w[0]) !== null;
    case 'yo':
      return yoEntry(w[0]) !== null;
    case 'ig':
      return igEntry(w[0]) !== null;
    case 'ti':
      return tiEntry(w[0]) !== null;
    case 'wo':
      return woEntry(w[0]) !== null;
    case 'mg':
      return mgEntry(w[0]) !== null;
    case 'xh':
      return xhEntry(w[0]) !== null;
    case 'sn':
      return snEntry(w[0]) !== null;
    case 'ny':
      return nyEntry(w[0]) !== null;
    case 'fj':
      return fjEntry(w[0]) !== null;
    case 'sm':
      return smEntry(w[0]) !== null;
    case 'to':
      return toEntry(w[0]) !== null;
    case 'mi':
      return miEntry(w[0]) !== null;
    case 'haw':
      return hawEntry(w[0]) !== null;
    case 'jv':
      return jvEntry(w[0]) !== null;
    case 'su':
      return suEntry(w[0]) !== null;
    case 'gd':
      return gdEntry(w[0]) !== null;
    case 'br':
      return brEntry(w[0]) !== null;
    case 'kw':
      return kwEntry(w[0]) !== null;
    case 'gv':
      return gvEntry(w[0]) !== null;
    case 'fo':
      return foEntry(w[0]) !== null;
    case 'oc':
      return ocEntry(w[0]) !== null;
    case 'co':
      return coEntry(w[0]) !== null;
    case 'sc':
      return scEntry(w[0]) !== null;
    case 'fy':
      return fyEntry(w[0]) !== null;
    case 'yi':
      return yiEntry(w[0]) !== null;
    case 'lad':
      return ladEntry(w[0]) !== null;
    case 'qu':
      return quEntry(w[0]) !== null;
    case 'gn':
      return gnEntry(w[0]) !== null;
    case 'ay':
      return ayEntry(w[0]) !== null;
    case 'dz':
      return dzEntry(w[0]) !== null;
    case 'dv':
      return dvEntry(w[0]) !== null;
    case 'tet':
      return tetEntry(w[0]) !== null;
    case 'be':
      return beEntry(w[0]) !== null;
    case 'qya':
      return qyaEntry(w[0]) !== null;
    case 'sjn':
      return sjnEntry(w[0]) !== null;
    case 'ku':
      return kuEntry(w[0]) !== null;
    case 'om':
      return omEntry(w[0]) !== null;
    case 'ln':
      return lnEntry(w[0]) !== null;
    case 'bho':
      return bhoEntry(w[0]) !== null;
    case 'ceb':
      return cebEntry(w[0]) !== null;
    case 'rm':
      return rmEntry(w[0]) !== null;
    case 'ty':
      return tyEntry(w[0]) !== null;
    case 'ch':
      return chEntry(w[0]) !== null;
    case 'mh':
      return mhEntry(w[0]) !== null;
    case 'pau':
      return pauEntry(w[0]) !== null;
    case 'nah':
      return nahEntry(w[0]) !== null;
    case 'nv':
      return nvEntry(w[0]) !== null;
    case 'tlh':
      return tlhEntry(w[0]) !== null;
    case 'val':
      return valEntry(w[0]) !== null;
    case 'dth':
      return dthEntry(w[0]) !== null;
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
  // Partial Fisher-Yates instead of sorting the whole pool by a random
  // comparator: picking ROOM_SIZE (~8-10) words out of a pool that can be
  // the full ~10,411-word dictionary doesn't need an O(n log n) sort over
  // every word just to keep the first few — this only touches ROOM_SIZE
  // positions. Still driven by the same seeded rnd(), so both players'
  // clients independently compute the identical deck from the shared seed.
  const n = pool.length;
  const k = Math.min(ROOM_SIZE, n);
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = 0; i < k; i++) {
    const j = i + Math.floor(rnd() * (n - i));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, k).map((i) => pool[i]);
}
