// English Words App — js/features/search-inline.tsx
// Inline search box (header) with debounce + keyboard navigation.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { state } from '../../src/state.ts';
import { useStateVersion } from '../../src/store.ts';
import { shuffle } from '../core/srs.ts';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES, getMode } from './mode-utils.ts';
import { t } from './i18n.ts';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

function activeKnown(): Set<string> {
  const mode = getMode();
  if (ES_MODES.has(mode)) return state.knownEs;
  if (FR_MODES.has(mode)) return state.knownFr;
  if (IT_MODES.has(mode)) return state.knownIt;
  if (PT_MODES.has(mode)) return state.knownPt;
  if (DE_MODES.has(mode)) return state.knownDe;
  if (HE_MODES.has(mode)) return state.knownHe;
  if (AR_MODES.has(mode)) return state.knownAr;
  if (PL_MODES.has(mode)) return state.knownPl;
  if (ZH_MODES.has(mode)) return state.knownZh;
  if (EL_MODES.has(mode)) return state.knownEl;
  if (JA_MODES.has(mode)) return state.knownJa;
  if (TR_MODES.has(mode)) return state.knownTr;
  if (NL_MODES.has(mode)) return state.knownNl;
  return state.known;
}

function goToWord(word: string, after: () => void): void {
  const deckNow = state.deck as unknown as WordEntry[];
  let di = deckNow.findIndex(w => w[0].toLowerCase() === word.toLowerCase());
  if (di === -1) {
    const wLow = word.toLowerCase();
    let wi = -1;
    const wordIdx = state._wordIdx;
    wordIdx.forEach((i: number, k: string) => { if (k.toLowerCase() === wLow) wi = i; });
    if (wi === -1) return;
    const newDeck = W.slice() as unknown as WordEntry[];
    shuffle(newDeck);
    setDeck(newDeck);
    di = (newDeck as WordEntry[]).findIndex(w => w[0].toLowerCase() === wLow);
    (document.getElementById('sel-range') as HTMLSelectElement).value = '0';
  }
  setIdx(di);
  stopAuto();
  render();
  after();
}

export function SearchInline(): ReactElement {
  useStateVersion();
  const [query, setQuery]       = useState('');
  const [hits, setHits]         = useState<WordEntry[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isOpen, setIsOpen]     = useState(false);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function reset(): void {
    setQuery(''); setHits([]); setActiveIdx(-1); setIsOpen(false);
    inputRef.current?.blur();
  }

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const q = query.trim().toLowerCase();
    if (!q) { setHits([]); setIsOpen(false); return; }
    timerRef.current = setTimeout(() => {
      const h = (W as unknown as WordEntry[]).filter(w =>
        w[0].toLowerCase().startsWith(q) || w[1].toLowerCase().includes(q)
      ).slice(0, 8);
      setHits(h);
      setActiveIdx(-1);
      setIsOpen(true);
    }, 180);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [query]);

  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      if (!wrapRef.current?.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="search-wrap-inner" style={{ display: 'contents' }}>
      <span className="search-icon">🔍</span>
      <input
        ref={inputRef}
        type="text"
        id="search-input"
        placeholder={t('cards.searchPlaceholder')}
        autoComplete="off"
        spellCheck={false}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIdx(i => (i === -1 ? 0 : i < hits.length - 1 ? i + 1 : -1));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIdx(i => (i === -1 ? hits.length - 1 : i > 0 ? i - 1 : -1));
          } else if (e.key === 'Enter' && activeIdx !== -1 && hits[activeIdx]) {
            e.preventDefault();
            goToWord(hits[activeIdx][0], reset);
          } else if (e.key === 'Escape') {
            setIsOpen(false);
            inputRef.current?.blur();
          }
        }}
      />
      <div className={'search-results' + (isOpen ? ' open' : '')} id="search-results">
        {hits.length === 0
          ? (query.trim() ? <div className="search-no-results">{t('search.noResults')}</div> : null)
          : hits.map((w, i) => {
              const isKnown = activeKnown().has(w[0]);
              return (
                <div
                  key={w[0]}
                  className={'search-result-item' + (isKnown ? ' sr-known' : '') + (i === activeIdx ? ' active' : '')}
                  onClick={() => goToWord(w[0], reset)}
                  onTouchEnd={() => goToWord(w[0], reset)}
                >
                  <span className="sr-word">{w[0]}</span>
                  <span className="sr-transl">{w[1]}</span>
                  {isKnown && <span className="sr-known-badge">✓</span>}
                </div>
              );
            })}
      </div>
    </div>
  );
}

