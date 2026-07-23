// Vymova — js/features/learning-path.ts
// 🎯 Learning Path: structured CEFR-based curriculum with daily goals
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import { W } from '../../data/words-data/words.js';
import { getLevel } from './game.ts';
import { openPage, closePage } from './sidebar.tsx';
import { jumpToGrammarRule } from './grammar-page.tsx';
import { ensureGrammarLoaded, getGrammarForLang } from './grammar-loader.ts';
import type { WordEntry } from '../../src/types.js';
import type { PaceSnapshot } from './learning-path-logic.ts';
import {
  computeCefrStats,
  findCurrentLevel,
  filterDailyWords,
  computePersonalPace,
  estimateDays,
  updateCompletionDates,
} from './learning-path-logic.ts';
import { t, getLang, skillName, levelName } from './i18n.ts';
import { today as localToday } from '../core/today.ts';
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
  isTargetLang,
  headwordFor,
  type Code,
} from './mode-utils.ts';

// ── Language helpers ──────────────────────────────────────────

function _learnLang(): string {
  return localStorage.getItem('ew_learn_lang') ?? 'en';
}

function _knowLang(): string {
  return localStorage.getItem('ew_know_lang') ?? 'ua';
}

function _isCode(v: string): v is Code {
  return v === 'en' || v === 'ua' || isTargetLang(v);
}

function _activeKnownSet(): Set<string> {
  const lang = _learnLang();
  return getKnownSnapshot(isTargetLang(lang) ? lang : 'en');
}

function _getTranslation(w: WordEntry, lang: string): string {
  switch (lang) {
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
      return w[1];
  }
}

function _filterWordsForLang(words: WordEntry[], lang: string): WordEntry[] {
  switch (lang) {
    case 'es':
      return words.filter((w) => esEntry(w[0]) !== null);
    case 'fr':
      return words.filter((w) => frEntry(w[0]) !== null);
    case 'it':
      return words.filter((w) => itEntry(w[0]) !== null);
    case 'pt':
      return words.filter((w) => ptEntry(w[0]) !== null);
    case 'de':
      return words.filter((w) => deEntry(w[0]) !== null);
    case 'he':
      return words.filter((w) => heEntry(w[0]) !== null);
    case 'ar':
      return words.filter((w) => arEntry(w[0]) !== null);
    case 'pl':
      return words.filter((w) => plEntry(w[0]) !== null);
    case 'zh':
      return words.filter((w) => zhEntry(w[0]) !== null);
    case 'el':
      return words.filter((w) => elEntry(w[0]) !== null);
    case 'ja':
      return words.filter((w) => jaEntry(w[0]) !== null);
    case 'tr':
      return words.filter((w) => trEntry(w[0]) !== null);
    case 'nl':
      return words.filter((w) => nlEntry(w[0]) !== null);
    case 'vi':
      return words.filter((w) => viEntry(w[0]) !== null);
    case 'hi':
      return words.filter((w) => hiEntry(w[0]) !== null);
    case 'bn':
      return words.filter((w) => bnEntry(w[0]) !== null);
    case 'id':
      return words.filter((w) => idEntry(w[0]) !== null);
    case 'pcm':
      return words.filter((w) => pcmEntry(w[0]) !== null);
    case 'ko':
      return words.filter((w) => koEntry(w[0]) !== null);
    case 'fa':
      return words.filter((w) => faEntry(w[0]) !== null);
    case 'sw':
      return words.filter((w) => swEntry(w[0]) !== null);
    case 'ms':
      return words.filter((w) => msEntry(w[0]) !== null);
    case 'th':
      return words.filter((w) => thEntry(w[0]) !== null);
    case 'az':
      return words.filter((w) => azEntry(w[0]) !== null);
    case 'ro':
      return words.filter((w) => roEntry(w[0]) !== null);
    case 'hu':
      return words.filter((w) => huEntry(w[0]) !== null);
    case 'cs':
      return words.filter((w) => csEntry(w[0]) !== null);
    case 'kk':
      return words.filter((w) => kkEntry(w[0]) !== null);
    case 'sv':
      return words.filter((w) => svEntry(w[0]) !== null);
    case 'ka':
      return words.filter((w) => kaEntry(w[0]) !== null);
    case 'hr':
      return words.filter((w) => hrEntry(w[0]) !== null);
    case 'sr':
      return words.filter((w) => srEntry(w[0]) !== null);
    case 'bs':
      return words.filter((w) => bsEntry(w[0]) !== null);
    case 'bg':
      return words.filter((w) => bgEntry(w[0]) !== null);
    case 'sk':
      return words.filter((w) => skEntry(w[0]) !== null);
    case 'hy':
      return words.filter((w) => hyEntry(w[0]) !== null);
    case 'da':
      return words.filter((w) => daEntry(w[0]) !== null);
    case 'fi':
      return words.filter((w) => fiEntry(w[0]) !== null);
    case 'no':
      return words.filter((w) => noEntry(w[0]) !== null);
    case 'la':
      return words.filter((w) => laEntry(w[0]) !== null);
    case 'lt':
      return words.filter((w) => ltEntry(w[0]) !== null);
    case 'lv':
      return words.filter((w) => lvEntry(w[0]) !== null);
    case 'et':
      return words.filter((w) => etEntry(w[0]) !== null);
    case 'sl':
      return words.filter((w) => slEntry(w[0]) !== null);
    case 'mk':
      return words.filter((w) => mkEntry(w[0]) !== null);
    case 'sq':
      return words.filter((w) => sqEntry(w[0]) !== null);
    case 'is':
      return words.filter((w) => isEntry(w[0]) !== null);
    case 'cy':
      return words.filter((w) => cyEntry(w[0]) !== null);
    case 'ga':
      return words.filter((w) => gaEntry(w[0]) !== null);
    case 'tl':
      return words.filter((w) => tlEntry(w[0]) !== null);
    case 'mn':
      return words.filter((w) => mnEntry(w[0]) !== null);
    case 'uz':
      return words.filter((w) => uzEntry(w[0]) !== null);
    case 'am':
      return words.filter((w) => amEntry(w[0]) !== null);
    case 'eo':
      return words.filter((w) => eoEntry(w[0]) !== null);
    case 'ta':
      return words.filter((w) => taEntry(w[0]) !== null);
    case 'pa':
      return words.filter((w) => paEntry(w[0]) !== null);
    case 'zu':
      return words.filter((w) => zuEntry(w[0]) !== null);
    case 'af':
      return words.filter((w) => afEntry(w[0]) !== null);
    case 'ky':
      return words.filter((w) => kyEntry(w[0]) !== null);
    case 'tg':
      return words.filter((w) => tgEntry(w[0]) !== null);
    case 'tk':
      return words.filter((w) => tkEntry(w[0]) !== null);
    case 'ug':
      return words.filter((w) => ugEntry(w[0]) !== null);
    case 'eu':
      return words.filter((w) => euEntry(w[0]) !== null);
    case 'ca':
      return words.filter((w) => caEntry(w[0]) !== null);
    case 'gl':
      return words.filter((w) => glEntry(w[0]) !== null);
    case 'mt':
      return words.filter((w) => mtEntry(w[0]) !== null);
    case 'lb':
      return words.filter((w) => lbEntry(w[0]) !== null);
    case 'ht':
      return words.filter((w) => htEntry(w[0]) !== null);
    case 'bo':
      return words.filter((w) => boEntry(w[0]) !== null);
    case 'my':
      return words.filter((w) => myEntry(w[0]) !== null);
    case 'km':
      return words.filter((w) => kmEntry(w[0]) !== null);
    case 'lo':
      return words.filter((w) => loEntry(w[0]) !== null);
    case 'ne':
      return words.filter((w) => neEntry(w[0]) !== null);
    case 'si':
      return words.filter((w) => siEntry(w[0]) !== null);
    case 'ur':
      return words.filter((w) => urEntry(w[0]) !== null);
    case 'te':
      return words.filter((w) => teEntry(w[0]) !== null);
    case 'ml':
      return words.filter((w) => mlEntry(w[0]) !== null);
    case 'kn':
      return words.filter((w) => knEntry(w[0]) !== null);
    case 'mr':
      return words.filter((w) => mrEntry(w[0]) !== null);
    case 'gu':
      return words.filter((w) => guEntry(w[0]) !== null);
    case 'or':
      return words.filter((w) => orEntry(w[0]) !== null);
    case 'as':
      return words.filter((w) => asEntry(w[0]) !== null);
    case 'sd':
      return words.filter((w) => sdEntry(w[0]) !== null);
    case 'ps':
      return words.filter((w) => psEntry(w[0]) !== null);
    case 'so':
      return words.filter((w) => soEntry(w[0]) !== null);
    case 'ha':
      return words.filter((w) => haEntry(w[0]) !== null);
    case 'yo':
      return words.filter((w) => yoEntry(w[0]) !== null);
    case 'ig':
      return words.filter((w) => igEntry(w[0]) !== null);
    case 'ti':
      return words.filter((w) => tiEntry(w[0]) !== null);
    case 'wo':
      return words.filter((w) => woEntry(w[0]) !== null);
    case 'mg':
      return words.filter((w) => mgEntry(w[0]) !== null);
    case 'xh':
      return words.filter((w) => xhEntry(w[0]) !== null);
    case 'sn':
      return words.filter((w) => snEntry(w[0]) !== null);
    case 'ny':
      return words.filter((w) => nyEntry(w[0]) !== null);
    case 'fj':
      return words.filter((w) => fjEntry(w[0]) !== null);
    case 'sm':
      return words.filter((w) => smEntry(w[0]) !== null);
    case 'to':
      return words.filter((w) => toEntry(w[0]) !== null);
    case 'mi':
      return words.filter((w) => miEntry(w[0]) !== null);
    case 'haw':
      return words.filter((w) => hawEntry(w[0]) !== null);
    case 'jv':
      return words.filter((w) => jvEntry(w[0]) !== null);
    case 'su':
      return words.filter((w) => suEntry(w[0]) !== null);
    case 'gd':
      return words.filter((w) => gdEntry(w[0]) !== null);
    case 'br':
      return words.filter((w) => brEntry(w[0]) !== null);
    case 'kw':
      return words.filter((w) => kwEntry(w[0]) !== null);
    case 'gv':
      return words.filter((w) => gvEntry(w[0]) !== null);
    case 'fo':
      return words.filter((w) => foEntry(w[0]) !== null);
    case 'oc':
      return words.filter((w) => ocEntry(w[0]) !== null);
    case 'co':
      return words.filter((w) => coEntry(w[0]) !== null);
    case 'sc':
      return words.filter((w) => scEntry(w[0]) !== null);
    case 'fy':
      return words.filter((w) => fyEntry(w[0]) !== null);
    case 'yi':
      return words.filter((w) => yiEntry(w[0]) !== null);
    case 'lad':
      return words.filter((w) => ladEntry(w[0]) !== null);
    case 'qu':
      return words.filter((w) => quEntry(w[0]) !== null);
    case 'gn':
      return words.filter((w) => gnEntry(w[0]) !== null);
    case 'ay':
      return words.filter((w) => ayEntry(w[0]) !== null);
    case 'dz':
      return words.filter((w) => dzEntry(w[0]) !== null);
    case 'dv':
      return words.filter((w) => dvEntry(w[0]) !== null);
    case 'tet':
      return words.filter((w) => tetEntry(w[0]) !== null);
    case 'be':
      return words.filter((w) => beEntry(w[0]) !== null);
    case 'qya':
      return words.filter((w) => qyaEntry(w[0]) !== null);
    case 'sjn':
      return words.filter((w) => sjnEntry(w[0]) !== null);
    case 'ku':
      return words.filter((w) => kuEntry(w[0]) !== null);
    case 'om':
      return words.filter((w) => omEntry(w[0]) !== null);
    case 'ln':
      return words.filter((w) => lnEntry(w[0]) !== null);
    case 'bho':
      return words.filter((w) => bhoEntry(w[0]) !== null);
    case 'ceb':
      return words.filter((w) => cebEntry(w[0]) !== null);
    case 'rm':
      return words.filter((w) => rmEntry(w[0]) !== null);
    case 'ty':
      return words.filter((w) => tyEntry(w[0]) !== null);
    case 'ch':
      return words.filter((w) => chEntry(w[0]) !== null);
    case 'mh':
      return words.filter((w) => mhEntry(w[0]) !== null);
    case 'pau':
      return words.filter((w) => pauEntry(w[0]) !== null);
    case 'nah':
      return words.filter((w) => nahEntry(w[0]) !== null);
    case 'nv':
      return words.filter((w) => nvEntry(w[0]) !== null);
    case 'tlh':
      return words.filter((w) => tlhEntry(w[0]) !== null);
    case 'val':
      return words.filter((w) => valEntry(w[0]) !== null);
    case 'dth':
      return words.filter((w) => dthEntry(w[0]) !== null);
    default:
      return words;
  }
}

// ── Plan definition ───────────────────────────────────────────
interface LevelPlan {
  level: CefrLevel;
  wordsGoal: number;
  skills: string[];
  grammarLinks: Partial<Record<string, string>>; // skill label → grammar rule id
}

const PLANS: LevelPlan[] = [
  {
    level: 'A1',
    wordsGoal: 283,
    skills: ['Базове вітання', 'Числа і кольори', "Сім'я та тіло", 'Повсякденні дії'],
    grammarLinks: {
      'Базове вітання': 'greetings-intro',
      'Числа і кольори': 'numbers-determiners',
      "Сім'я та тіло": 'family-body',
      'Повсякденні дії': 'present-simple',
    },
  },
  {
    level: 'A2',
    wordsGoal: 883,
    skills: ['Опис людей/місць', 'Магазини і ціни', 'Подорожі', 'Минулі події'],
    grammarLinks: {
      'Опис людей/місць': 'comparatives',
      'Магазини і ціни': 'countable-uncountable',
      Подорожі: 'prepositions',
      'Минулі події': 'past-simple',
    },
  },
  {
    level: 'B1',
    wordsGoal: 1917,
    skills: ['Розмова про роботу', 'Новини та медіа', 'Вирішення проблем', 'Плани на майбутнє'],
    grammarLinks: {
      'Розмова про роботу': 'modal-verbs',
      'Новини та медіа': 'reported-speech',
      'Вирішення проблем': 'advice-suggestions',
      'Плани на майбутнє': 'future-forms',
    },
  },
  {
    level: 'B2',
    wordsGoal: 1512,
    skills: [
      'Академічні тексти',
      'Бізнес комунікація',
      'Складні аргументи',
      'Фільми без субтитрів',
    ],
    grammarLinks: {
      'Академічні тексти': 'passive-voice',
      'Бізнес комунікація': 'business-english',
      'Складні аргументи': 'conditionals',
      // 'Фільми без субтитрів' — навичка слухання, не граматика
    },
  },
  {
    level: 'C1',
    wordsGoal: 817,
    skills: ['Наукові статті', 'Переговори', 'Нюанси та ідіоми', 'Публічні виступи'],
    grammarLinks: {
      'Наукові статті': 'nominalisation',
      Переговори: 'negotiation-language',
      'Нюанси та ідіоми': 'idioms',
      'Публічні виступи': 'register',
    },
  },
  {
    level: 'C2',
    wordsGoal: 230,
    skills: ['Художня проза', 'Академічний стиль', 'Повне розуміння', 'Рівень носія'],
    grammarLinks: {
      'Академічний стиль': 'register',
      // 'Художня проза', 'Повне розуміння', 'Рівень носія' — профіційні мілстоуни
    },
  },
];

// ── LocalStorage helpers ──────────────────────────────────────

function _lsKey(base: string): string {
  const lang = _learnLang();
  return lang === 'en' || lang === 'ua' ? base : `${base}_${lang}`;
}

function _loadSnapshots(): PaceSnapshot[] {
  try {
    return JSON.parse(localStorage.getItem(_lsKey('lp_pace_snapshots')) ?? '[]');
  } catch {
    return [];
  }
}

function _saveSnapshot(knownCount: number): void {
  const today = localToday();
  const snaps = _loadSnapshots().filter((s) => s.date !== today);
  snaps.push({ date: today, count: knownCount });
  const kept = snaps.sort((a, b) => a.date.localeCompare(b.date)).slice(-14);
  try {
    localStorage.setItem(_lsKey('lp_pace_snapshots'), JSON.stringify(kept));
  } catch {
    /* quota */
  }
}

function _loadCompletionDates(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(_lsKey('lp_completion_dates')) ?? '{}');
  } catch {
    return {};
  }
}

function _saveCompletionDates(dates: Record<string, string>): void {
  try {
    localStorage.setItem(_lsKey('lp_completion_dates'), JSON.stringify(dates));
  } catch {
    /* quota */
  }
}

function _formatDate(iso: string): string {
  // Parse from local components — `new Date(iso)` parses a bare YYYY-MM-DD
  // as UTC midnight, which formats as the previous local day west of UTC.
  const [y, m, day] = iso.split('-').map(Number);
  const d = new Date(y, m - 1, day);
  const locale = getLang() === 'en' ? 'en-US' : getLang() === 'es' ? 'es-ES' : 'uk-UA';
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Grammar link availability ────────────────────────────────
// PLANS' grammarLinks ids (greetings-intro, past-simple, ...) are only
// defined in the English grammar set (data/grammar-data/grammar_en.ts's
// GRAMMAR_EN) — the per-target-language sets (grammar_es.ts, grammar_de.ts,
// ...) use their own, unrelated rule ids (and several target languages
// only have a handful of
// rules at all so far). Blindly rendering every skill as a "↗ open
// grammar" link meant clicking it for any non-English target language
// silently landed on the empty "select a topic" state instead of the
// intended rule. Only offer the link where it actually resolves.
function _grammarRuleExists(gid: string, lang: string): boolean {
  const grammar = getGrammarForLang(lang) ?? [];
  return grammar.some((cat) => cat.rules.some((r) => r.id === gid));
}

// ── Navigate to CEFR level ────────────────────────────────────

function _navigateToLevel(level: CefrLevel): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (sel) {
    sel.value = `cefr-${level}`;
    sel.dispatchEvent(new Event('change'));
  }
  openPage('cards' as Parameters<typeof openPage>[0]);
  closePage();
}

// ── Render ────────────────────────────────────────────────────

export function renderLearningPath(): void {
  const el = document.getElementById('lp-content') as HTMLElement | null;
  if (!el) return;

  const lang = _learnLang();
  const knownLang = _knowLang();
  const learnCode: Code = _isCode(lang) ? lang : 'en';
  const knowCode: Code = _isCode(knownLang) ? knownLang : 'ua';

  // Grammar data (used below by _grammarRuleExists, for the "✓ skill" tags
  // that link to their grammar rule) loads lazily per language
  // (js/features/grammar-loader.ts). Render proceeds immediately either way
  // — a not-yet-loaded language just means those tags render as plain,
  // non-clickable checkmarks this pass (same graceful fallback as a
  // language with no matching grammar data at all) — then re-renders once
  // loaded so the links pick up.
  if (!getGrammarForLang(lang)) {
    ensureGrammarLoaded(lang).then(() => {
      if (document.getElementById('lp-content')) renderLearningPath();
    });
  }
  const knownSet = _activeKnownSet();
  const allWords = W as unknown as WordEntry[];
  const words = _filterWordsForLang(allWords, lang);

  // Track daily pace snapshot
  _saveSnapshot(knownSet.size);

  const stats = computeCefrStats(knownSet, words);
  const currentLevel = findCurrentLevel(stats);
  const snapshots = _loadSnapshots();
  const pace = computePersonalPace(snapshots);
  const todayStr = localToday();
  const lv = getLevel(knownSet.size);
  const todayWords = filterDailyWords(currentLevel, knownSet, words);

  // Save completion dates for newly-completed levels
  const prevDates = _loadCompletionDates();
  const newDates = updateCompletionDates(stats, prevDates, todayStr);
  if (JSON.stringify(newDates) !== JSON.stringify(prevDates)) _saveCompletionDates(newDates);

  // Daily challenge section
  const dailyChallengeHtml =
    todayWords.length > 0
      ? `
    <div class="lp-section mb-5">
      <div class="lp-section-title mb-2.5 text-[.78rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)]">📅 ${t('lp.todayPlan')} ${currentLevel}</div>
      <div class="lp-day-words mb-3 flex flex-wrap gap-1.5">
        ${todayWords
          .map(
            (w) => `
          <div class="lp-word-chip flex min-w-[80px] flex-col cursor-default rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-2.5 py-1.5">
            <span class="lp-word text-[.82rem] font-bold text-[var(--text)]">${headwordFor(learnCode, w) || w[0]}</span>
            <span class="lp-transl mt-px text-[.7rem] text-[var(--text3)]">${headwordFor(knowCode, w) || _getTranslation(w, knownLang)}</span>
          </div>
        `,
          )
          .join('')}
      </div>
      <button class="lp-start-btn w-full cursor-pointer rounded-[12px] border-none bg-[var(--accent)] p-3 font-[inherit] text-[.9rem] font-bold text-white transition-opacity duration-150 hover:opacity-[.88]" data-lp-level="${currentLevel}">
        📚 ${t('lp.learnWordsNow')} ${currentLevel} ${t('lp.now')}
      </button>
    </div>
  `
      : `
    <div class="lp-section lp-complete mb-5 rounded-[14px] border-[1.5px] border-[rgba(39,174,96,.25)] bg-[rgba(39,174,96,.08)] p-5 text-center">
      <div class="lp-section-title mb-2.5 text-[.78rem] font-bold uppercase tracking-[0.07em] text-[#27ae60]">🏆 ${t('lp.levelWord')} ${currentLevel} ${t('lp.completedExcl')}</div>
      <p>${t('lp.allLearned')}</p>
    </div>
  `;

  // CEFR progress rows
  const progressHtml = PLANS.map((plan) => {
    const s = stats[plan.level];
    const meta = CEFR_META[plan.level];
    const isCurrent = plan.level === currentLevel;
    const isComplete = s.pct >= 90;
    const compDate = newDates[plan.level];
    const remaining = s.total - s.known;
    const days = estimateDays(remaining, pace);
    const paceLabel =
      pace !== null && pace > 0
        ? `${t('lp.yourPace')} ${pace} ${t('lp.wordsPerDay')}`
        : t('lp.defaultPace');

    const skillsHtml = plan.skills
      .map((sk) => {
        const gid = plan.grammarLinks[sk];
        if (gid && _grammarRuleExists(gid, lang)) {
          return `<span class="lp-skill-tag lp-skill-link cursor-pointer rounded-[5px] border border-[rgba(0,200,100,.2)] bg-[rgba(0,200,100,.08)] px-[7px] py-0.5 text-[.68rem] text-[var(--accent)] transition-colors duration-150 hover:bg-[rgba(0,200,100,.18)]" data-grammar="${gid}" title="${t('lp.openGrammar')}">✓ ${skillName(sk)} ↗</span>`;
        }
        return `<span class="lp-skill-tag rounded-[5px] bg-[var(--border)] px-[7px] py-0.5 text-[.68rem] text-[var(--text3)]">✓ ${skillName(sk)}</span>`;
      })
      .join('');

    const milestones = [25, 50, 75]
      .map(
        (m) =>
          `<div class="lp-milestone pointer-events-none absolute top-0 h-full w-px bg-white/35" style="left:${m}%"></div>`,
      )
      .join('');

    const completionHtml =
      isComplete && compDate
        ? `<div class="lp-completion-date mb-1.5 text-[.68rem] font-semibold text-[#27ae60]">${t('lp.completed')} ${_formatDate(compDate)}</div>`
        : '';

    return `
      <div class="lp-level-row rounded-[14px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3.5 py-3 transition-colors duration-200${isCurrent ? ' lp-current border-[var(--accent)] bg-[rgba(0,200,100,.04)]' : ''}${isComplete ? ' lp-done opacity-75' : ''}">
        <div class="lp-level-header mb-2 flex items-center gap-2.5">
          <span class="lp-level-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-[.85rem] font-black" style="background:color-mix(in srgb, ${meta.color} 15%, transparent);color:${meta.color};border:1.5px solid color-mix(in srgb, ${meta.color} 35%, transparent);">
            ${isComplete ? '✓' : plan.level}
          </span>
          <div class="lp-level-info min-w-0 flex-1">
            <div class="lp-level-name flex items-center gap-1.5 text-[.85rem] font-bold" style="color:${meta.color}">
              ${plan.level} — ${t('cefr.' + plan.level)}
              ${isCurrent ? `<span class="lp-current-badge rounded-[10px] bg-[var(--accent)] px-1.5 py-px text-[.65rem] font-semibold text-white">${t('lp.currentNow')}</span>` : ''}
            </div>
            <div class="lp-level-skills mt-0.5 text-[.72rem] text-[var(--text3)]">${plan.skills.slice(0, 2).map(skillName).join(' · ')}</div>
          </div>
          <div class="lp-level-stat shrink-0 text-right">
            <div class="lp-stat-num text-[.82rem] font-bold" style="color:${meta.color}">${s.known}/${s.total}</div>
            <div class="lp-stat-pct text-[.7rem] text-[var(--text3)]">${s.pct}%</div>
          </div>
          ${!isComplete ? `<button class="lp-learn-btn shrink-0 cursor-pointer rounded-md border-[1.5px] bg-transparent px-2.5 py-1 font-[inherit] text-[.72rem] font-bold transition-colors duration-150 hover:bg-[rgba(0,200,100,.1)] max-[480px]:hidden" data-lp-level="${plan.level}" style="border-color:${meta.color};color:${meta.color}">${t('lp.learnArrow')}</button>` : ''}
        </div>
        <div class="lp-progress-bar relative mb-2 h-[5px] overflow-hidden rounded-[3px] bg-[var(--border)]">
          <div class="lp-progress-fill h-full rounded-[3px] transition-[width] duration-[600ms]" style="width:${s.pct}%;background:${meta.color};"></div>
          ${milestones}
        </div>
        ${completionHtml}
        <div class="lp-level-details flex flex-wrap items-center gap-1">
          ${skillsHtml}
          <span class="lp-days-est ml-auto text-[.68rem] text-[var(--text3)] max-[480px]:hidden">~${days} ${t('lp.daysApprox')} (${paceLabel})</span>
        </div>
      </div>
    `;
  }).join('');

  // Overall stats
  const totalKnown = Object.values(stats).reduce((s, v) => s + v.known, 0);
  const totalWords = Object.values(stats).reduce((s, v) => s + v.total, 0);
  const overallPct = Math.round((totalKnown / totalWords) * 100);
  const paceDisplay =
    pace !== null && pace > 0
      ? `⚡ ${pace} ${t('lp.wordsPerDayFull')}`
      : `📈 ${t('lp.startLearning')}`;

  el.innerHTML = `
    <div class="lp-hero mb-[18px] flex gap-4 rounded-2xl border-[1.5px] border-[var(--border)] bg-[var(--card)] px-5 py-4 max-[480px]:flex-col">
      <div class="lp-hero-left min-w-0 flex-1">
        <div class="lp-hero-level mb-1.5 text-[.9rem] font-bold text-[var(--text)]">${levelName(lv.name)}</div>
        <div class="lp-hero-stats mb-2 flex flex-wrap gap-3 text-[.78rem] text-[var(--text2)]">
          <span>📚 ${totalKnown} / ${totalWords} ${t('lp.wordsCount')}</span>
          <span>📊 ${overallPct}% ${t('lp.completedPct')}</span>
          <span class="lp-pace-display font-semibold text-[var(--accent)]">${paceDisplay}</span>
        </div>
        <div class="lp-hero-bar h-[6px] overflow-hidden rounded-[3px] bg-[var(--border)]">
          <div class="lp-hero-fill h-full rounded-[3px] bg-[linear-gradient(90deg,#27ae60,#2ecc71)] transition-[width] duration-[600ms]" style="width:${overallPct}%"></div>
        </div>
      </div>
      <div class="lp-hero-focus shrink-0 rounded-[12px] bg-[var(--bg)] px-4 py-2.5 text-center max-[480px]:flex max-[480px]:items-center max-[480px]:gap-3 max-[480px]:px-3 max-[480px]:py-2 max-[480px]:text-left">
        <div class="lp-focus-label mb-1 text-[.68rem] text-[var(--text3)] uppercase tracking-[0.06em]">${t('lp.currentFocus')}</div>
        <div class="lp-focus-level font-[Orbitron,monospace] text-[2rem] font-black max-[480px]:text-[1.5rem]" style="color:${CEFR_META[currentLevel].color}">${currentLevel}</div>
        <div class="lp-focus-desc mt-0.5 text-[.75rem] text-[var(--text2)]">${t('cefr.' + currentLevel)}</div>
      </div>
    </div>

    ${dailyChallengeHtml}

    <div class="lp-section mb-5">
      <div class="lp-section-title mb-2.5 text-[.78rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)]">${t('lp.cefrProgress')}</div>
      <div class="lp-levels-list flex flex-col gap-2.5">${progressHtml}</div>
    </div>
  `;

  // Wire up "Start / Learn" buttons
  el.querySelectorAll<HTMLButtonElement>('[data-lp-level]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lvl = btn.dataset.lpLevel as CefrLevel;
      _navigateToLevel(lvl);
    });
  });

  // Wire up grammar skill links
  el.querySelectorAll<HTMLElement>('.lp-skill-link').forEach((tag) => {
    tag.addEventListener('click', () => {
      const gid = tag.dataset.grammar!;
      jumpToGrammarRule(gid);
    });
  });
}

// ── Page open/close ───────────────────────────────────────────
export function openLearningPath(retriesLeft = 2): void {
  try {
    renderLearningPath();
  } catch (e) {
    console.error('[learning-path] render failed', e);
    // known-words-store's data may not be hydrated yet right after a page
    // reload — retry shortly instead of leaving the overlay empty.
    if (retriesLeft > 0) setTimeout(() => openLearningPath(retriesLeft - 1), 200);
  }
}
