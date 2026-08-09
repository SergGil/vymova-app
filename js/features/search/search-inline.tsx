// Vymova — js/features/search/search-inline.tsx
// Inline search box (header) with debounce + keyboard navigation.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { Combobox as ComboboxPrimitive } from '@base-ui/react';
import { ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '../../../src/components/ui/combobox.tsx';
import { W } from '../../../data/words-data/words.js';
import { useLangVersion } from '../../../src/store.ts';
import { getDeckSnapshot } from '../../../src/deck-store.ts';
import { setRangeWithoutRebuild } from '../../../src/range-store.ts';
import { getWordIndex } from '../../core/word-index.ts';
import { shuffle } from '../../core/srs.ts';
import {
  getMode,
  getActiveTargetLang,
  getResolvedMode,
  computeCardView,
  getWordsForLang,
} from '../mode/mode-utils.ts';
import { getKnownSnapshot, useKnownWords } from '../../../src/known-words-store.ts';
import { t } from '../i18n.ts';
import { render, setDeck, setIdx, stopAuto } from '../../core/card-engine.ts';
import type { WordEntry } from '../../../src/types.js';

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
    setRangeWithoutRebuild('0');
  }
  setIdx(di);
  stopAuto();
  render();
  after();
}

type Hit = { key: string; front: string; back: string; frontRtl: boolean };

export function SearchInline(): ReactElement {
  // Only needs to know about UI-language/learn-pair switches (for t() and
  // which language's known-set applies) and that known-set's own content —
  // not the global bus's per-card/per-answer churn, which used to re-render
  // this on every flashcard advance even while the search box sat closed.
  useLangVersion();
  useKnownWords(getActiveTargetLang(getMode()) ?? 'en');
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function reset(): void {
    setHits([]);
    setIsOpen(false);
    inputRef.current?.blur();
    // Deferred: Combobox's own post-selection effect re-syncs the input's
    // text to the just-selected item's stringified label (no public prop
    // disables this) — that effect runs after this handler, so a
    // synchronous setQuery('') here gets silently overwritten. A
    // zero-delay timeout runs after that effect's commit instead.
    setTimeout(() => setQuery(''), 0);
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
      setIsOpen(true);
    }, 180);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  return (
    <ComboboxPrimitive.Root<Hit>
      items={hits}
      inputValue={query}
      onInputValueChange={(val) => setQuery(val)}
      open={isOpen}
      onOpenChange={setIsOpen}
      filter={null}
      itemToStringLabel={(hit) => hit.front}
      onValueChange={(hit) => {
        if (hit) goToWord(hit.key, reset);
      }}
    >
      <div className="search-wrap-inner" style={{ display: 'contents' }}>
        <span className="search-icon absolute top-1/2 left-2.5 -translate-y-1/2 text-[13px] text-[var(--text3)] pointer-events-none">
          🔍
        </span>
        <ComboboxPrimitive.Input
          ref={inputRef}
          id="search-input"
          className="w-full rounded-[10px] py-2 pr-3 pl-8 text-[.85rem] font-[inherit] outline-none transition-[border-color] duration-200 border-[1.5px] text-[var(--text)] bg-[var(--search-input-bg)] border-[var(--search-input-border)] focus:border-[var(--accent)] focus:shadow-[var(--search-input-focus-shadow)] [@media(max-width:640px)]:text-[0.9rem] [@media(max-width:640px)]:py-[10px] [@media(max-width:640px)]:pr-[14px] [@media(max-width:640px)]:pl-[34px] [@media(max-width:640px)]:min-h-[42px]"
          placeholder={t('cards.searchPlaceholder')}
          autoComplete="off"
          spellCheck={false}
        />
        <ComboboxContent
          id="search-results"
          className="search-results z-[99999] rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--card)] shadow-[0_4px_16px_rgba(0,0,0,.1)]"
        >
          <ComboboxList>
            {(h: Hit) => {
              const isKnown = activeKnown().has(h.key);
              return (
                <ComboboxItem
                  key={h.key}
                  value={h}
                  className={
                    'search-result-item flex cursor-default justify-between gap-2 rounded-none px-3 py-2 text-[.85rem] hover:bg-[var(--search-result-hover-bg)] data-highlighted:bg-[var(--search-result-hover-bg)]' +
                    (isKnown ? ' sr-known bg-[var(--sr-known-bg)]' : '')
                  }
                >
                  <span
                    className="sr-word font-semibold text-[var(--text)]"
                    dir={h.frontRtl ? 'rtl' : undefined}
                  >
                    {h.front}
                  </span>
                  <span className="sr-transl flex-1 text-[var(--text2)]">{h.back}</span>
                  {isKnown && (
                    <span className="sr-known-badge shrink-0 text-[.72rem] font-bold text-[#27ae60]">
                      ✓
                    </span>
                  )}
                </ComboboxItem>
              );
            }}
          </ComboboxList>
          <ComboboxEmpty className="search-no-results block px-3 py-2.5 text-center text-[.83rem] text-[var(--text3)]">
            {t('search.noResults')}
          </ComboboxEmpty>
        </ComboboxContent>
      </div>
    </ComboboxPrimitive.Root>
  );
}
