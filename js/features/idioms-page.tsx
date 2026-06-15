// English Words App — js/features/idioms-page.tsx
// Idioms reference page: EN/UA/ES tabs, search, speak buttons
import { useEffect, useState, type ReactElement, type MouseEventHandler } from 'react';
import { IDIOMS_BY_LANG, type Idiom } from '../../data/idioms.ts';
import { t } from './i18n.ts';
import { _speakWithLang } from './speech.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';

type Tab = 'en' | 'ua' | 'es';

function _speak(text: string, lang: string, btn: HTMLElement | null): void {
  _speakWithLang(text, lang, btn);
}

const LANG_BY_TAB: Record<Tab, string> = { en: 'en-US', ua: 'uk-UA', es: 'es-ES' };
const TAB_I18N_KEY: Record<Tab, string> = { en: 'idioms.tabEn', ua: 'idioms.tabUa', es: 'idioms.tabEs' };

/** Tabs relevant to the current language pair (know/learn) that have idiom data. */
function _relevantTabs(): Tab[] {
  const langs = [getLearnLang(), getKnowLang()];
  const tabs: Tab[] = [];
  for (const l of langs) {
    if ((l === 'en' || l === 'ua' || l === 'es') && IDIOMS_BY_LANG[l] && !tabs.includes(l)) tabs.push(l);
  }
  return tabs;
}

function IdiomCard({ idiom, num, tab }: { idiom: Idiom; num: number; tab: Tab }): ReactElement {
  const lang = LANG_BY_TAB[tab];

  const speak = (text: string): MouseEventHandler<HTMLButtonElement> => (e) => {
    _speak(text, lang, e.currentTarget);
  };

  return (
    <div className="idiom-card">
      <div className="idiom-head">
        <div className="idiom-num">{num}</div>
        <div className="idiom-phrase">
          {idiom.emoji ? `${idiom.emoji} ` : ''}{idiom.phrase}
          <button className="speak-btn idiom-speak" title="🔊" onClick={speak(idiom.phrase)}>🔊</button>
        </div>
        <div className="idiom-meaning">
          {idiom.meaning}
          {idiom.meaningEn ? <span className="idiom-meaning-en"> ({idiom.meaningEn})</span> : null}
        </div>
      </div>
      <div className="idiom-example">
        <div className="idiom-ex-src">
          {idiom.exampleSrc}
          <button className="speak-btn idiom-speak" title="🔊" onClick={speak(idiom.exampleSrc)}>🔊</button>
        </div>
        <div className="idiom-ex-tr">
          {idiom.exampleTr}
          <button className="speak-btn idiom-speak" title="🔊" onClick={speak(idiom.exampleTr)}>🔊</button>
        </div>
      </div>
    </div>
  );
}

function IdiomsPage(): ReactElement {
  const tabs = _relevantTabs();
  const [tab, setTab] = useState<Tab | undefined>(tabs[0]);
  const [query, setQuery] = useState('');

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
    ? source.filter(i =>
        i.phrase.toLowerCase().includes(q) ||
        i.meaning.toLowerCase().includes(q) ||
        (i.meaningEn ?? '').toLowerCase().includes(q))
    : source;

  return (
    <>
      <div className="idioms-tabs">
        {tabs.map(tb => (
          <button key={tb} className={'idioms-tab' + (tb === activeTab ? ' idioms-tab-active' : '')} onClick={() => setTab(tb)} data-i18n={TAB_I18N_KEY[tb]}>{t(TAB_I18N_KEY[tb])}</button>
        ))}
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
        {filtered.length === 0
          ? <div className="idioms-empty">{t('idioms.empty')}</div>
          : filtered.map((idiom, i) => <IdiomCard key={idiom.phrase} idiom={idiom} num={i + 1} tab={activeTab} />)}
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
    _bumpTick = () => setTick(x => x + 1);
    return () => { _bumpTick = null; };
  }, []);
  return <IdiomsPage />;
}

import { bindOverlayDismiss } from './overlay-utils.ts';
bindOverlayDismiss('idioms-overlay', 'idioms-close');
