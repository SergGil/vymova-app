// Vymova — js/features/idioms-page.tsx
// Idioms reference page: EN/UA/ES tabs, search, speak buttons
import { useEffect, useState, type ReactElement, type MouseEventHandler } from 'react';
import { IDIOMS_BY_LANG, type Idiom } from '../../data/idioms.ts';
import { t } from './i18n.ts';
import { _speakWithLang } from './voice/speech.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { flagUrl } from '../core/flags.ts';
import { FLAG_CODE } from '../core/flag-codes.ts';
import { ALL_TARGET_LANGS, type Code } from '../../src/types.js';

// Derived from the canonical Code union (src/types.ts) instead of its own
// hand-copied list — adding a language to ALL_TARGET_LANGS is now enough on
// its own to make it a candidate tab (still needs LANG_BY_TAB/TAB_I18N_KEY
// content below, but tsc now enforces that instead of a silent gap — see
// docs/adding-a-language.md 7a.2 for the bug class this used to cause).
type Tab = Code;
const ALL_TABS: readonly Tab[] = ['en', 'ua', ...ALL_TARGET_LANGS];

function _speak(text: string, lang: string, btn: HTMLElement | null): void {
  _speakWithLang(text, lang, btn);
}

const LANG_BY_TAB: Record<Tab, string> = {
  en: 'en-US',
  ua: 'uk-UA',
  es: 'es-ES',
  fr: 'fr-FR',
  it: 'it-IT',
  pt: 'pt-PT',
  de: 'de-DE',
  he: 'he-IL',
  ar: 'ar-SA',
  pl: 'pl-PL',
  zh: 'zh-CN',
  el: 'el-GR',
  ja: 'ja-JP',
  tr: 'tr-TR',
  nl: 'nl-NL',
  vi: 'vi-VN',
  hi: 'hi-IN',
  bn: 'bn-BD',
  id: 'id-ID',
  pcm: 'pcm-NG',
  ko: 'ko-KR',
  fa: 'fa-IR',
  sw: 'sw-TZ',
  ms: 'ms-MY',
  th: 'th-TH',
  az: 'az-AZ',
  ro: 'ro-RO',
  hu: 'hu-HU',
  cs: 'cs-CZ',
  kk: 'kk-KZ',
  sv: 'sv-SE',
  ka: 'ka-GE',
  hr: 'hr-HR',
  sr: 'sr-RS',
  bs: 'bs-BA',
  bg: 'bg-BG',
  sk: 'sk-SK',
  hy: 'hy-AM',
  da: 'da-DK',
  fi: 'fi-FI',
  no: 'nb-NO',
  la: 'la',
  lt: 'lt-LT',
  lv: 'lv-LV',
  et: 'et-EE',
  sl: 'sl-SI',
  mk: 'mk-MK',
  sq: 'sq-AL',
  is: 'is-IS',
  cy: 'cy-GB',
  ga: 'ga-IE',
  tl: 'fil-PH',
  mn: 'mn-MN',
  uz: 'uz-UZ',
  am: 'am-ET',
  eo: 'eo',
  ta: 'ta-IN',
  pa: 'pa-IN',
  zu: 'zu-ZA',
  af: 'af-ZA',
  ky: 'ky-KG',
  tg: 'tg-TJ',
  tk: 'tk-TM',
  ug: 'ug-CN',
  eu: 'eu-ES',
  ca: 'ca-ES',
  gl: 'gl-ES',
  mt: 'mt-MT',
  lb: 'lb-LU',
  ht: 'ht-HT',
  bo: 'bo-CN',
  my: 'my-MM',
  km: 'km-KH',
  lo: 'lo-LA',
  ne: 'ne-NP',
  si: 'si-LK',
  ur: 'ur-PK',
  te: 'te-IN',
  ml: 'ml-IN',
  kn: 'kn-IN',
  mr: 'mr-IN',
  gu: 'gu-IN',
  or: 'or-IN',
  as: 'as-IN',
  sd: 'sd-PK',
  ps: 'ps-AF',
  so: 'so-SO',
  ha: 'ha-NG',
  yo: 'yo-NG',
  ig: 'ig-NG',
  ti: 'ti-ER',
  wo: 'wo-SN',
  mg: 'mg-MG',
  xh: 'xh-ZA',
  sn: 'sn-ZW',
  ny: 'ny-MW',
  fj: 'fj-FJ',
  sm: 'sm-WS',
  to: 'to-TO',
  mi: 'mi-NZ',
  haw: 'haw-US',
  jv: 'jv-ID',
  su: 'su-ID',
  gd: 'gd-GB',
  br: 'br-FR',
  kw: 'kw-GB',
  gv: 'gv-IM',
  fo: 'fo-FO',
  oc: 'oc-FR',
  co: 'co-FR',
  sc: 'sc-IT',
  fy: 'fy-NL',
  yi: 'yi',
  lad: 'lad',
  qu: 'qu-PE',
  gn: 'gn-PY',
  ay: 'ay-BO',
  dz: 'dz-BT',
  dv: 'dv-MV',
  tet: 'tet-TL',
  be: 'be-BY',
  qya: 'fi-FI',
  sjn: 'cy-GB',
  ku: 'ku-TR',
  om: 'om-ET',
  ln: 'ln-CD',
  bho: 'bho-IN',
  ceb: 'ceb-PH',
  rm: 'rm-CH',
  ty: 'ty-PF',
  ch: 'ch-GU',
  mh: 'mh-MH',
  pau: 'pau-PW',
  nah: 'nah-MX',
  nv: 'nv-US',
  tlh: 'tlh',
  val: 'val',
  dth: 'dth',
};
const TAB_I18N_KEY: Record<Tab, string> = {
  en: 'idioms.tabEn',
  ua: 'idioms.tabUa',
  es: 'idioms.tabEs',
  fr: 'idioms.tabFr',
  it: 'idioms.tabIt',
  pt: 'idioms.tabPt',
  de: 'idioms.tabDe',
  he: 'idioms.tabHe',
  ar: 'idioms.tabAr',
  pl: 'idioms.tabPl',
  zh: 'idioms.tabZh',
  el: 'idioms.tabEl',
  ja: 'idioms.tabJa',
  tr: 'idioms.tabTr',
  nl: 'idioms.tabNl',
  vi: 'idioms.tabVi',
  hi: 'idioms.tabHi',
  bn: 'idioms.tabBn',
  id: 'idioms.tabId',
  pcm: 'idioms.tabPcm',
  ko: 'idioms.tabKo',
  fa: 'idioms.tabFa',
  sw: 'idioms.tabSw',
  ms: 'idioms.tabMs',
  th: 'idioms.tabTh',
  az: 'idioms.tabAz',
  ro: 'idioms.tabRo',
  hu: 'idioms.tabHu',
  cs: 'idioms.tabCs',
  kk: 'idioms.tabKk',
  sv: 'idioms.tabSv',
  ka: 'idioms.tabKa',
  hr: 'idioms.tabHr',
  sr: 'idioms.tabSr',
  bs: 'idioms.tabBs',
  bg: 'idioms.tabBg',
  sk: 'idioms.tabSk',
  hy: 'idioms.tabHy',
  da: 'idioms.tabDa',
  fi: 'idioms.tabFi',
  no: 'idioms.tabNo',
  la: 'idioms.tabLa',
  lt: 'idioms.tabLt',
  lv: 'idioms.tabLv',
  et: 'idioms.tabEt',
  sl: 'idioms.tabSl',
  mk: 'idioms.tabMk',
  sq: 'idioms.tabSq',
  is: 'idioms.tabIs',
  cy: 'idioms.tabCy',
  ga: 'idioms.tabGa',
  tl: 'idioms.tabTl',
  mn: 'idioms.tabMn',
  uz: 'idioms.tabUz',
  am: 'idioms.tabAm',
  eo: 'idioms.tabEo',
  ta: 'idioms.tabTa',
  pa: 'idioms.tabPa',
  zu: 'idioms.tabZu',
  af: 'idioms.tabAf',
  ky: 'idioms.tabKy',
  tg: 'idioms.tabTg',
  tk: 'idioms.tabTk',
  ug: 'idioms.tabUg',
  eu: 'idioms.tabEu',
  ca: 'idioms.tabCa',
  gl: 'idioms.tabGl',
  mt: 'idioms.tabMt',
  lb: 'idioms.tabLb',
  ht: 'idioms.tabHt',
  bo: 'idioms.tabBo',
  my: 'idioms.tabMy',
  km: 'idioms.tabKm',
  lo: 'idioms.tabLo',
  ne: 'idioms.tabNe',
  si: 'idioms.tabSi',
  ur: 'idioms.tabUr',
  te: 'idioms.tabTe',
  ml: 'idioms.tabMl',
  kn: 'idioms.tabKn',
  mr: 'idioms.tabMr',
  gu: 'idioms.tabGu',
  or: 'idioms.tabOr',
  as: 'idioms.tabAs',
  sd: 'idioms.tabSd',
  ps: 'idioms.tabPs',
  so: 'idioms.tabSo',
  ha: 'idioms.tabHa',
  yo: 'idioms.tabYo',
  ig: 'idioms.tabIg',
  ti: 'idioms.tabTi',
  wo: 'idioms.tabWo',
  mg: 'idioms.tabMg',
  xh: 'idioms.tabXh',
  sn: 'idioms.tabSn',
  ny: 'idioms.tabNy',
  fj: 'idioms.tabFj',
  sm: 'idioms.tabSm',
  to: 'idioms.tabTo',
  mi: 'idioms.tabMi',
  haw: 'idioms.tabHaw',
  jv: 'idioms.tabJv',
  su: 'idioms.tabSu',
  gd: 'idioms.tabGd',
  br: 'idioms.tabBr',
  kw: 'idioms.tabKw',
  gv: 'idioms.tabGv',
  fo: 'idioms.tabFo',
  oc: 'idioms.tabOc',
  co: 'idioms.tabCo',
  sc: 'idioms.tabSc',
  fy: 'idioms.tabFy',
  yi: 'idioms.tabYi',
  lad: 'idioms.tabLad',
  qu: 'idioms.tabQu',
  gn: 'idioms.tabGn',
  ay: 'idioms.tabAy',
  dz: 'idioms.tabDz',
  dv: 'idioms.tabDv',
  tet: 'idioms.tabTet',
  be: 'idioms.tabBe',
  qya: 'idioms.tabQya',
  sjn: 'idioms.tabSjn',
  ku: 'idioms.tabKu',
  om: 'idioms.tabOm',
  ln: 'idioms.tabLn',
  bho: 'idioms.tabBho',
  ceb: 'idioms.tabCeb',
  rm: 'idioms.tabRm',
  ty: 'idioms.tabTy',
  ch: 'idioms.tabCh',
  mh: 'idioms.tabMh',
  pau: 'idioms.tabPau',
  nah: 'idioms.tabNah',
  nv: 'idioms.tabNv',
  tlh: 'idioms.tabTlh',
  val: 'idioms.tabVal',
  dth: 'idioms.tabDth',
};
const RTL_TABS = new Set<Tab>(['he', 'ar', 'fa', 'ug', 'ur', 'sd', 'ps', 'yi', 'dv']);

function _isTab(l: string): l is Tab {
  return (ALL_TABS as readonly string[]).includes(l);
}

/** Tabs relevant to the current language pair (know/learn) that have idiom data. */
function _relevantTabs(): Tab[] {
  const langs = [getLearnLang(), getKnowLang()];
  const tabs: Tab[] = [];
  for (const l of langs) {
    if (_isTab(l) && IDIOMS_BY_LANG[l] && !tabs.includes(l)) tabs.push(l);
  }
  return tabs;
}

function IdiomCard({
  idiom,
  num,
  tab,
  learnLang,
}: {
  idiom: Idiom;
  num: number;
  tab: Tab;
  learnLang: string;
}): ReactElement {
  const lang = LANG_BY_TAB[tab];
  const tr = tab === 'ua' ? idiom.translations?.[learnLang] : undefined;
  const meaning = tr?.meaning ?? idiom.meaning;
  const exampleTr = tr?.exampleTr ?? idiom.exampleTr;
  // exampleTr's language depends on where it came from, NOT on the active
  // tab: a per-language `translations` entry is in learnLang; the UA tab's
  // own idiom.exampleTr fallback (no translations entry for this learnLang,
  // e.g. he/ar/pl/zh/el/ja/tr/nl/vi) is English; every other tab's
  // idiom.exampleTr is Ukrainian (see the Idiom interface's field comments).
  // Using the tab's own source language here would ask the TTS engine to
  // read Ukrainian or English text in the wrong voice/locale.
  const trLang = tr
    ? (LANG_BY_TAB[learnLang as Tab] ?? lang)
    : tab === 'ua'
      ? LANG_BY_TAB.en
      : LANG_BY_TAB.ua;
  const rtl = RTL_TABS.has(tab) ? 'rtl' : undefined;

  const speak =
    (text: string, speakLang: string): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      _speak(text, speakLang, e.currentTarget);
    };

  return (
    <div className="idiom-card">
      <div className="idiom-head">
        <div className="idiom-num">{num}</div>
        <div className="idiom-phrase" dir={rtl}>
          {idiom.emoji ? `${idiom.emoji} ` : ''}
          {idiom.phrase}
          <button className="speak-btn idiom-speak" title="🔊" onClick={speak(idiom.phrase, lang)}>
            🔊
          </button>
        </div>
        <div className="idiom-meaning">
          {meaning}
          {idiom.meaningEn && !tr ? (
            <span className="idiom-meaning-en"> ({idiom.meaningEn})</span>
          ) : null}
        </div>
      </div>
      <div className="idiom-example">
        <div className="idiom-ex-src" dir={rtl}>
          {idiom.exampleSrc}
          <button
            className="speak-btn idiom-speak"
            title="🔊"
            onClick={speak(idiom.exampleSrc, lang)}
          >
            🔊
          </button>
        </div>
        <div className="idiom-ex-tr">
          {exampleTr}
          <button className="speak-btn idiom-speak" title="🔊" onClick={speak(exampleTr, trLang)}>
            🔊
          </button>
        </div>
      </div>
    </div>
  );
}

function IdiomsPage(): ReactElement {
  const tabs = _relevantTabs();
  const [tab, setTab] = useState<Tab | undefined>(tabs[0]);
  const [query, setQuery] = useState('');
  const learnLang = getLearnLang();

  const activeTab = tabs.includes(tab as Tab) ? (tab as Tab) : tabs[0];

  if (!activeTab) {
    return (
      <div id="idioms-list" className="idioms-list">
        <div className="idioms-empty">{t('idioms.notAvailable')}</div>
      </div>
    );
  }

  const source = IDIOMS_BY_LANG[activeTab] ?? [];
  const q = query.trim().toLowerCase();
  const filtered = q
    ? source.filter(
        (i) =>
          i.phrase.toLowerCase().includes(q) ||
          i.meaning.toLowerCase().includes(q) ||
          (i.meaningEn ?? '').toLowerCase().includes(q),
      )
    : source;

  return (
    <>
      <div className="idioms-tabs">
        {tabs.map((tb) => {
          const url = flagUrl(FLAG_CODE[tb]);
          return (
            <button
              key={tb}
              className={'idioms-tab' + (tb === activeTab ? ' idioms-tab-active' : '')}
              onClick={() => setTab(tb)}
            >
              {url && <img src={url} alt="" width={14} height={14} />}
              <span data-i18n={TAB_I18N_KEY[tb]}>{t(TAB_I18N_KEY[tb])}</span>
            </button>
          );
        })}
      </div>
      <div className="idioms-search-wrap">
        <input
          type="text"
          className="idioms-search"
          placeholder={t('idioms.searchPlaceholder')}
          data-i18n-placeholder="idioms.searchPlaceholder"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div id="idioms-list" className="idioms-list">
        {filtered.length === 0 ? (
          <div className="idioms-empty">{t('idioms.empty')}</div>
        ) : (
          filtered.map((idiom, i) => (
            <IdiomCard
              key={idiom.phrase}
              idiom={idiom}
              num={i + 1}
              tab={activeTab}
              learnLang={learnLang}
            />
          ))
        )}
      </div>
    </>
  );
}

let _bumpTick: (() => void) | null = null;

export function openIdiomsContent(): void {
  _bumpTick?.();
}

export function IdiomsPageRoot(): ReactElement {
  const [, setTick] = useState(0);
  useEffect(() => {
    _bumpTick = () => setTick((x) => x + 1);
    return () => {
      _bumpTick = null;
    };
  }, []);
  return <IdiomsPage />;
}

import { bindOverlayDismiss } from './overlay-utils.ts';
bindOverlayDismiss('idioms-overlay', 'idioms-close');
