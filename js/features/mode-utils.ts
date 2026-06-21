// Vymova — js/features/mode-utils.ts
// Shared ES mode detection + helpers used by app.ts and similar-words.ts
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
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

export const ES_MODES = new Set(['en-es', 'es-en', 'es-ua', 'ua-es', 'es-fr', 'fr-es']);
export const FR_MODES = new Set(['en-fr', 'fr-en', 'fr-ua', 'ua-fr', 'es-fr', 'fr-es']);
export const IT_MODES = new Set(['en-it', 'it-en', 'it-ua', 'ua-it']);
export const PT_MODES = new Set(['en-pt', 'pt-en', 'pt-ua', 'ua-pt']);
export const DE_MODES = new Set(['en-de', 'de-en', 'de-ua', 'ua-de']);
export const HE_MODES = new Set(['en-he', 'he-en', 'he-ua', 'ua-he']);
export const AR_MODES = new Set(['en-ar', 'ar-en', 'ar-ua', 'ua-ar']);
export const PL_MODES = new Set(['en-pl', 'pl-en', 'pl-ua', 'ua-pl']);
export const ZH_MODES = new Set(['en-zh', 'zh-en', 'zh-ua', 'ua-zh']);
export const EL_MODES = new Set(['en-el', 'el-en', 'el-ua', 'ua-el']);
export const JA_MODES = new Set(['en-ja', 'ja-en', 'ja-ua', 'ua-ja']);
export const TR_MODES = new Set(['en-tr', 'tr-en', 'tr-ua', 'ua-tr']);
export const NL_MODES = new Set(['en-nl', 'nl-en', 'nl-ua', 'ua-nl']);
// RTL learn-language modes — front (or back) text needs dir="rtl".
export const RTL_MODES = new Set(['en-he', 'he-en', 'he-ua', 'ua-he', 'en-ar', 'ar-en', 'ar-ua', 'ua-ar']);

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
    case 'he-en': return 'HE';
    case 'he-ua': return 'HE';
    case 'ua-he': return 'UA';
    case 'ar-en': return 'AR';
    case 'ar-ua': return 'AR';
    case 'ua-ar': return 'UA';
    case 'pl-en': return 'PL';
    case 'pl-ua': return 'PL';
    case 'ua-pl': return 'UA';
    case 'zh-en': return 'ZH';
    case 'zh-ua': return 'ZH';
    case 'ua-zh': return 'UA';
    case 'el-en': return 'EL';
    case 'el-ua': return 'EL';
    case 'ua-el': return 'UA';
    case 'ja-en': return 'JA';
    case 'ja-ua': return 'JA';
    case 'ua-ja': return 'UA';
    case 'tr-en': return 'TR';
    case 'tr-ua': return 'TR';
    case 'ua-tr': return 'UA';
    case 'nl-en': return 'NL';
    case 'nl-ua': return 'NL';
    case 'ua-nl': return 'UA';
    default:      return 'EN'; // 'en', 'en-es', 'en-fr', 'en-it', 'en-pt', 'en-de', 'en-he', 'en-ar', 'en-pl', 'en-zh', 'en-el', 'en-ja', 'en-tr', 'en-nl'
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
  if (HE_MODES.has(mode)) return state.knownHe ?? known;
  if (AR_MODES.has(mode)) return state.knownAr ?? known;
  if (PL_MODES.has(mode)) return state.knownPl ?? known;
  if (ZH_MODES.has(mode)) return state.knownZh ?? known;
  if (EL_MODES.has(mode)) return state.knownEl ?? known;
  if (JA_MODES.has(mode)) return state.knownJa ?? known;
  if (TR_MODES.has(mode)) return state.knownTr ?? known;
  if (NL_MODES.has(mode)) return state.knownNl ?? known;
  return known;
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
  const heE = HE_MODES.has(mode) ? heEntry(cw[0]) : null;
  const _heWord = heE ? heE[0] : '';
  const _heEx   = heE ? heE[1] : '';
  const arE = AR_MODES.has(mode) ? arEntry(cw[0]) : null;
  const _arWord = arE ? arE[0] : '';
  const _arEx   = arE ? arE[1] : '';
  const plE = PL_MODES.has(mode) ? plEntry(cw[0]) : null;
  const _plWord = plE ? plE[0] : '';
  const _plEx   = plE ? plE[1] : '';
  const zhE = ZH_MODES.has(mode) ? zhEntry(cw[0]) : null;
  const _zhWord = zhE ? zhE[0] : '';
  const _zhEx   = zhE ? zhE[1] : '';
  const elE = EL_MODES.has(mode) ? elEntry(cw[0]) : null;
  const _elWord = elE ? elE[0] : '';
  const _elEx   = elE ? elE[1] : '';
  const jaE = JA_MODES.has(mode) ? jaEntry(cw[0]) : null;
  const _jaWord = jaE ? jaE[0] : '';
  const _jaEx   = jaE ? jaE[1] : '';
  const trE = TR_MODES.has(mode) ? trEntry(cw[0]) : null;
  const _trWord = trE ? trE[0] : '';
  const _trEx   = trE ? trE[1] : '';
  const nlE = NL_MODES.has(mode) ? nlEntry(cw[0]) : null;
  const _nlWord = nlE ? nlE[0] : '';
  const _nlEx   = nlE ? nlE[1] : '';

  let FRONT_LANG: FrontLang;
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
    case 'en-he': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _heWord; break;
    case 'he-en': FRONT_LANG = 'HE'; frontWord = _heWord; backWord = cw[0];   break;
    case 'he-ua': FRONT_LANG = 'HE'; frontWord = _heWord; backWord = cw[1];   break;
    case 'ua-he': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _heWord; break;
    case 'en-ar': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _arWord; break;
    case 'ar-en': FRONT_LANG = 'AR'; frontWord = _arWord; backWord = cw[0];   break;
    case 'ar-ua': FRONT_LANG = 'AR'; frontWord = _arWord; backWord = cw[1];   break;
    case 'ua-ar': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _arWord; break;
    case 'en-pl': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _plWord; break;
    case 'pl-en': FRONT_LANG = 'PL'; frontWord = _plWord; backWord = cw[0];   break;
    case 'pl-ua': FRONT_LANG = 'PL'; frontWord = _plWord; backWord = cw[1];   break;
    case 'ua-pl': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _plWord; break;
    case 'en-zh': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _zhWord; break;
    case 'zh-en': FRONT_LANG = 'ZH'; frontWord = _zhWord; backWord = cw[0];   break;
    case 'zh-ua': FRONT_LANG = 'ZH'; frontWord = _zhWord; backWord = cw[1];   break;
    case 'ua-zh': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _zhWord; break;
    case 'en-el': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _elWord; break;
    case 'el-en': FRONT_LANG = 'EL'; frontWord = _elWord; backWord = cw[0];   break;
    case 'el-ua': FRONT_LANG = 'EL'; frontWord = _elWord; backWord = cw[1];   break;
    case 'ua-el': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _elWord; break;
    case 'en-ja': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _jaWord; break;
    case 'ja-en': FRONT_LANG = 'JA'; frontWord = _jaWord; backWord = cw[0];   break;
    case 'ja-ua': FRONT_LANG = 'JA'; frontWord = _jaWord; backWord = cw[1];   break;
    case 'ua-ja': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _jaWord; break;
    case 'en-tr': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _trWord; break;
    case 'tr-en': FRONT_LANG = 'TR'; frontWord = _trWord; backWord = cw[0];   break;
    case 'tr-ua': FRONT_LANG = 'TR'; frontWord = _trWord; backWord = cw[1];   break;
    case 'ua-tr': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _trWord; break;
    case 'en-nl': FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = _nlWord; break;
    case 'nl-en': FRONT_LANG = 'NL'; frontWord = _nlWord; backWord = cw[0];   break;
    case 'nl-ua': FRONT_LANG = 'NL'; frontWord = _nlWord; backWord = cw[1];   break;
    case 'ua-nl': FRONT_LANG = 'UA'; frontWord = cw[1];   backWord = _nlWord; break;
    default:      FRONT_LANG = 'EN'; frontWord = cw[0];   backWord = cw[1];
  }
  const frontRtl = FRONT_LANG === 'HE' || FRONT_LANG === 'AR';
  const backRtl  = (HE_MODES.has(mode) && FRONT_LANG !== 'HE') || (AR_MODES.has(mode) && FRONT_LANG !== 'AR');

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
  } else if (HE_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-he': _frontEx = _enEx; _backEx = _heEx; break;
      case 'he-en': _frontEx = _heEx; _backEx = _enEx; break;
      case 'he-ua': _frontEx = _heEx; _backEx = _uaEx; break;
      case 'ua-he': _frontEx = _uaEx; _backEx = _heEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (AR_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-ar': _frontEx = _enEx; _backEx = _arEx; break;
      case 'ar-en': _frontEx = _arEx; _backEx = _enEx; break;
      case 'ar-ua': _frontEx = _arEx; _backEx = _uaEx; break;
      case 'ua-ar': _frontEx = _uaEx; _backEx = _arEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (PL_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-pl': _frontEx = _enEx; _backEx = _plEx; break;
      case 'pl-en': _frontEx = _plEx; _backEx = _enEx; break;
      case 'pl-ua': _frontEx = _plEx; _backEx = _uaEx; break;
      case 'ua-pl': _frontEx = _uaEx; _backEx = _plEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (ZH_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-zh': _frontEx = _enEx; _backEx = _zhEx; break;
      case 'zh-en': _frontEx = _zhEx; _backEx = _enEx; break;
      case 'zh-ua': _frontEx = _zhEx; _backEx = _uaEx; break;
      case 'ua-zh': _frontEx = _uaEx; _backEx = _zhEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (EL_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-el': _frontEx = _enEx; _backEx = _elEx; break;
      case 'el-en': _frontEx = _elEx; _backEx = _enEx; break;
      case 'el-ua': _frontEx = _elEx; _backEx = _uaEx; break;
      case 'ua-el': _frontEx = _uaEx; _backEx = _elEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (JA_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-ja': _frontEx = _enEx; _backEx = _jaEx; break;
      case 'ja-en': _frontEx = _jaEx; _backEx = _enEx; break;
      case 'ja-ua': _frontEx = _jaEx; _backEx = _uaEx; break;
      case 'ua-ja': _frontEx = _uaEx; _backEx = _jaEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (TR_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-tr': _frontEx = _enEx; _backEx = _trEx; break;
      case 'tr-en': _frontEx = _trEx; _backEx = _enEx; break;
      case 'tr-ua': _frontEx = _trEx; _backEx = _uaEx; break;
      case 'ua-tr': _frontEx = _uaEx; _backEx = _trEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  } else if (NL_MODES.has(mode)) {
    let _frontEx = '', _backEx = '';
    switch (mode) {
      case 'en-nl': _frontEx = _enEx; _backEx = _nlEx; break;
      case 'nl-en': _frontEx = _nlEx; _backEx = _enEx; break;
      case 'nl-ua': _frontEx = _nlEx; _backEx = _uaEx; break;
      case 'ua-nl': _frontEx = _uaEx; _backEx = _nlEx; break;
    }
    exenHtml = boldHead(_frontEx, frontWord) || _frontEx;
    exuaHtml = boldHead(_backEx, backWord) || _backEx;
  }

  return { FRONT_LANG, frontWord, backWord, exenHtml, exuaHtml, frontRtl, backRtl };
}

export function esEntry(word: string): readonly [string, string, string?] | null {
  return (W_ES as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function frEntry(word: string): readonly [string, string, string?] | null {
  return (W_FR as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function itEntry(word: string): readonly [string, string, string?] | null {
  return (W_IT as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function ptEntry(word: string): readonly [string, string, string?] | null {
  return (W_PT as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function deEntry(word: string): readonly [string, string, string?] | null {
  return (W_DE as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function heEntry(word: string): readonly [string, string, string?] | null {
  return (W_HE as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function arEntry(word: string): readonly [string, string, string?] | null {
  return (W_AR as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function plEntry(word: string): readonly [string, string, string?] | null {
  return (W_PL as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function zhEntry(word: string): readonly [string, string, string?] | null {
  return (W_ZH as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function elEntry(word: string): readonly [string, string, string?] | null {
  return (W_EL as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function jaEntry(word: string): readonly [string, string, string?] | null {
  return (W_JA as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function trEntry(word: string): readonly [string, string, string?] | null {
  return (W_TR as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
}

export function nlEntry(word: string): readonly [string, string, string?] | null {
  return (W_NL as unknown as Record<string, readonly [string, string, string?]>)[word] ?? null;
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
    case 'he': return state.knownHe.size;
    case 'ar': return state.knownAr.size;
    case 'pl': return state.knownPl.size;
    case 'zh': return state.knownZh.size;
    case 'el': return state.knownEl.size;
    case 'ja': return state.knownJa.size;
    case 'tr': return state.knownTr.size;
    case 'nl': return state.knownNl.size;
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
    case 'he': return state.knownHe;
    case 'ar': return state.knownAr;
    case 'pl': return state.knownPl;
    case 'zh': return state.knownZh;
    case 'el': return state.knownEl;
    case 'ja': return state.knownJa;
    case 'tr': return state.knownTr;
    case 'nl': return state.knownNl;
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
    case 'he': return words.filter(w => heEntry(w[0]) !== null);
    case 'ar': return words.filter(w => arEntry(w[0]) !== null);
    case 'pl': return words.filter(w => plEntry(w[0]) !== null);
    case 'zh': return words.filter(w => zhEntry(w[0]) !== null);
    case 'el': return words.filter(w => elEntry(w[0]) !== null);
    case 'ja': return words.filter(w => jaEntry(w[0]) !== null);
    case 'tr': return words.filter(w => trEntry(w[0]) !== null);
    case 'nl': return words.filter(w => nlEntry(w[0]) !== null);
    default:   return words;
  }
}
