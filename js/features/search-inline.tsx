// Vymova — js/features/search-inline.tsx
// Inline search box (header) with debounce + keyboard navigation.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { useStateVersion } from '../../src/store.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { getWordIndex } from '../core/word-index.ts';
import { shuffle } from '../core/srs.ts';
import {
  getMode,
  getActiveTargetLang,
  getResolvedMode,
  computeCardView,
  getWordsForLang,
} from './mode-utils.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { t } from './i18n.ts';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

function activeKnown(): Set<string> {
  return getKnownSnapshot(getActiveTargetLang(getMode()) ?? 'en');
}

function goToWord(word: string, after: () => void): void {
  const deckNow = getDeckSnapshot();
  let di = deckNow.findIndex((w) => w[0].toLowerCase() === word.toLowerCase());
  if (di === -1) {
    const wLow = word.toLowerCase();
    let wi = -1;
    const wordIdx = getWordIndex();
    wordIdx.forEach((i: number, k: string) => {
      if (k.toLowerCase() === wLow) wi = i;
    });
    if (wi === -1) return;
    const newDeck = W.slice() as unknown as WordEntry[];
    shuffle(newDeck);
    setDeck(newDeck);
    di = (newDeck as WordEntry[]).findIndex((w) => w[0].toLowerCase() === wLow);
    (document.getElementById('sel-range') as HTMLSelectElement).value = '0';
  }
  setIdx(di);
  stopAuto();
  render();
  after();
}

type Hit = { key: string; front: string; back: string; frontRtl: boolean };

export function SearchInline(): ReactElement {
  useStateVersion();
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function reset(): void {
    setQuery('');
    setHits([]);
    setActiveIdx(-1);
    setIsOpen(false);
    inputRef.current?.blur();
  }

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const q = query.trim().toLowerCase();
    if (!q) {
      setHits([]);
      setIsOpen(false);
      return;
    }
    timerRef.current = setTimeout(() => {
      // Шукаємо по словах поточної мови вивчення, а не завжди по англійському
      // масиву — frontWord/backWord обчислюються так само, як на самій картці
      // (computeCardView), щоб результати відповідали обраній парі мов.
      const mode = getResolvedMode();
      const pool = getWordsForLang(W as unknown as WordEntry[]);
      const h: Hit[] = [];
      for (const w of pool) {
        const { frontWord, backWord, frontRtl } = computeCardView(w, mode);
        if (frontWord.toLowerCase().startsWith(q) || backWord.toLowerCase().includes(q)) {
          h.push({ key: w[0], front: frontWord, back: backWord, frontRtl });
          if (h.length >= 8) break;
        }
      }
      setHits(h);
      setActiveIdx(-1);
      setIsOpen(true);
    }, 180);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
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
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIdx((i) => (i === -1 ? 0 : i < hits.length - 1 ? i + 1 : -1));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIdx((i) => (i === -1 ? hits.length - 1 : i > 0 ? i - 1 : -1));
          } else if (e.key === 'Enter' && activeIdx !== -1 && hits[activeIdx]) {
            e.preventDefault();
            goToWord(hits[activeIdx].key, reset);
          } else if (e.key === 'Escape') {
            setIsOpen(false);
            inputRef.current?.blur();
          }
        }}
      />
      <div className={'search-results' + (isOpen ? ' open' : '')} id="search-results">
        {hits.length === 0 ? (
          query.trim() ? (
            <div className="search-no-results">{t('search.noResults')}</div>
          ) : null
        ) : (
          hits.map((h, i) => {
            const isKnown = activeKnown().has(h.key);
            return (
              <div
                key={h.key}
                className={
                  'search-result-item' +
                  (isKnown ? ' sr-known' : '') +
                  (i === activeIdx ? ' active' : '')
                }
                onClick={() => goToWord(h.key, reset)}
                onTouchEnd={() => goToWord(h.key, reset)}
              >
                <span className="sr-word" dir={h.frontRtl ? 'rtl' : undefined}>
                  {h.front}
                </span>
                <span className="sr-transl">{h.back}</span>
                {isKnown && <span className="sr-known-badge">✓</span>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
