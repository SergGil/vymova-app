// English Words App — js/features/idioms-page.tsx
// Idioms reference page: EN/UA/ES tabs, search, speak buttons
import { useEffect, useState, type ReactElement, type MouseEventHandler } from 'react';
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS, SPANISH_IDIOMS, type Idiom } from '../../data/idioms.ts';
import { t } from './i18n.ts';

type Tab = 'en' | 'ua' | 'es';

function _speak(text: string, lang: string, btn: HTMLElement | null): void {
  (window._speakWithLang as ((text: string, lang: string, btn: HTMLElement | null) => void) | undefined)?.(text, lang, btn);
}

const LANG_BY_TAB: Record<Tab, string> = { en: 'en-US', ua: 'uk-UA', es: 'es-ES' };

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
  const [tab, setTab] = useState<Tab>('en');
  const [query, setQuery] = useState('');

  const source = tab === 'en' ? ENGLISH_IDIOMS : tab === 'ua' ? UKRAINIAN_IDIOMS : SPANISH_IDIOMS;
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
        <button className={'idioms-tab' + (tab === 'en' ? ' idioms-tab-active' : '')} onClick={() => setTab('en')} data-i18n="idioms.tabEn">{t('idioms.tabEn')}</button>
        <button className={'idioms-tab' + (tab === 'ua' ? ' idioms-tab-active' : '')} onClick={() => setTab('ua')} data-i18n="idioms.tabUa">{t('idioms.tabUa')}</button>
        <button className={'idioms-tab' + (tab === 'es' ? ' idioms-tab-active' : '')} onClick={() => setTab('es')} data-i18n="idioms.tabEs">{t('idioms.tabEs')}</button>
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
          : filtered.map((idiom, i) => <IdiomCard key={idiom.phrase} idiom={idiom} num={i + 1} tab={tab} />)}
      </div>
    </>
  );
}

let _bumpTick: (() => void) | null = null;

export function openIdiomsContent(): void {
  _bumpTick?.();
}

window._refreshIdiomsUI = openIdiomsContent;

export function openIdioms(): void {
  (window.openPage as ((p: string) => void) | undefined)?.('idioms');
}

window.openIdiomsContent = openIdiomsContent;
window.openIdioms = openIdioms;

export function IdiomsPageRoot(): ReactElement {
  const [, setTick] = useState(0);
  useEffect(() => {
    _bumpTick = () => setTick(x => x + 1);
    return () => { _bumpTick = null; };
  }, []);
  return <IdiomsPage />;
}

{
  const overlay = document.getElementById('idioms-overlay') as HTMLElement | null;
  if (overlay) {
    const closeIdioms = (): void => { (window.closePage as (() => void) | undefined)?.(); };
    document.getElementById('idioms-close')?.addEventListener('click', closeIdioms);
    overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) closeIdioms(); });
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeIdioms();
    });
  }
}
