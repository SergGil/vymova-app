// Vymova — js/modes/catpairs.tsx
// 📦 CATEGORY PAIRS MODE + WOTD + MILESTONES + WEAK WORDS
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { getWordIndex } from '../core/word-index.ts';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { loadSRS } from '../core/storage.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.js';
import { t, wordsLabel, categoryName } from '../features/i18n.ts';
import { playSound } from '../core/audio.ts';
import { addCombo, breakCombo, awardXP } from '../features/game/combo.ts';
import { entryFor } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { useModeSession } from '../features/mode/use-mode-session.ts';
import { bindOverlayOpenClose } from '../features/overlay-utils.ts';

const CP = 6;
const RANDOM_KEY = '🎲 Випадково';
type PairItem = { text: string; id: number };

function fmt(ms: number): string {
  return (ms / 1000).toFixed(1) + t('common.secSuffix');
}
function getBest(k: string): number {
  return parseFloat(localStorage.getItem('ew_cp_' + k) ?? '0');
}
function setBest(k: string, secs: number): void {
  const b = getBest(k);
  if (!b || secs < b) localStorage.setItem('ew_cp_' + k, secs.toFixed(1));
}

let _catCache: Record<string, WordEntry[]> = {};
export function invalidateCatCache(): void {
  _catCache = {};
}

function getCatWords(catName: string, catWords: string[]): WordEntry[] {
  if (_catCache[catName]) return _catCache[catName];
  const wordIdx = getWordIndex();
  if (!wordIdx) return [];
  const result = catWords
    .filter((w) => wordIdx.has(w))
    .map((w) => (W as unknown as WordEntry[])[wordIdx.get(w)!])
    .filter(Boolean);
  _catCache[catName] = result;
  return result;
}

function getRandomWords(): WordEntry[] {
  const wordIdx = getWordIndex();
  const all: WordEntry[] = [],
    seen = new Set<string>();
  if (wordIdx) {
    Object.values(WORD_CATEGORIES)
      .flat()
      .forEach((w) => {
        if (wordIdx.has(w) && !seen.has(w)) {
          seen.add(w);
          all.push((W as unknown as WordEntry[])[wordIdx.get(w)!]);
        }
      });
  }
  return all;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openCatpairs(): void {
  _open?.();
}
function closeCatpairs(): void {
  _close?.();
}

type Selection = { id: number; side: string } | null;

export function CatPairsPage(): ReactElement | null {
  const [screen, setScreen] = useState<'select' | 'game'>('select');
  const [catKey, setCatKey] = useState('');
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [enItems, setEnItems] = useState<PairItem[]>([]);
  const [uaItems, setUaItems] = useState<PairItem[]>([]);
  const [sel, setSel] = useState<Selection>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongIds, setWrongIds] = useState<{ id: number; side: string }[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState<{ ms: number; isNew: boolean } | null>(null);
  const [, setGridTick] = useState(0);

  const startRef = useRef<number | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTick = (): void => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  };

  const session = useModeSession({
    overlayId: 'catpairs-overlay',
    modeId: 'catpairs',
    // Never calls recordModeComplete — this mode tracks its own per-category
    // best time (getBest/setBest) instead of the shared mode-stats system.
    isFinal: false,
    onOpen: () => {
      setScreen('select');
      setGridTick((x) => x + 1);
    },
    onClose: stopTick,
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
        stopTick();
      };
    },
  });
  const { isOpen } = session;

  const startGame = (key: string, words: WordEntry[]): void => {
    stopTick();
    const d = orderDeckPool(words).slice(0, Math.min(CP, words.length));
    startRef.current = null;
    setCatKey(key);
    setDeck(d);
    setSel(null);
    setMatched(new Set());
    setWrongIds([]);
    setElapsed(0);
    setFinished(null);
    const learnLang = getLearnLang();
    const knowLang = getKnowLang();
    setEnItems(_shuf(d.map((w, i) => ({ text: entryFor(learnLang, w).word, id: i }))));
    setUaItems(_shuf(d.map((w, i) => ({ text: entryFor(knowLang, w).word, id: i }))));
    setScreen('game');
  };

  const finish = (deckLen: number): void => {
    stopTick();
    const ms = Date.now() - (startRef.current ?? Date.now());
    const secs = ms / 1000;
    const b = getBest(catKey);
    const isNew = !b || secs < b;
    setBest(catKey, secs);
    setFinished({ ms, isNew });
    void deckLen;
  };

  const onClick = (item: PairItem, side: string): void => {
    if (matched.has(item.id)) return;
    if (!startRef.current) {
      startRef.current = Date.now();
      tickRef.current = setInterval(() => {
        setElapsed(Date.now() - startRef.current!);
      }, 100);
    }
    if (!sel) {
      setSel({ id: item.id, side });
    } else if (sel.id === item.id && sel.side === side) {
      setSel(null);
    } else if (sel.side === side) {
      setSel({ id: item.id, side });
    } else if (sel.id === item.id) {
      const newMatched = new Set(matched);
      newMatched.add(item.id);
      setMatched(newMatched);
      setSel(null);
      try {
        playSound('know');
        addCombo();
        awardXP(5);
      } catch (e) {}
      if (newMatched.size === deck.length) setTimeout(() => finish(deck.length), 350);
    } else {
      const a = sel;
      setWrongIds([a, { id: item.id, side }]);
      setSel(null);
      try {
        playSound('next');
        breakCombo();
      } catch (e) {}
      setTimeout(() => setWrongIds([]), 420);
    }
  };

  function renderContent(): ReactElement {
    const best = getBest(catKey);
    const title =
      screen === 'select'
        ? t('catpairs.themes')
        : catKey === RANDOM_KEY
          ? t('catpairs.random')
          : categoryName(catKey);
    const isWrong = (id: number, side: string): boolean =>
      wrongIds.some((w) => w.id === id && w.side === side);
    const isSelected = (id: number, side: string): boolean =>
      !!sel && sel.id === id && sel.side === side;

    return (
      <>
      <div className="mb-3.5 flex items-center justify-between">
        <div>
          <div className="text-[1.05rem] font-bold text-[var(--text)]">{title}</div>
          <div className="mt-0.5 text-[.72rem] text-[var(--text3)]">
            {screen === 'game' && best ? t('pairs.record', { t: fmt(best * 1000) }) : ''}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          {screen === 'game' && !finished && (
            <div className="min-w-[52px] text-right text-[1.4rem] font-bold text-[var(--accent)]">
              {fmt(elapsed)}
            </div>
          )}
          {finished && (
            <div
              className="min-w-[52px] text-right text-[1.4rem] font-bold"
              style={{ color: finished.isNew ? 'var(--accent2)' : 'var(--accent)' }}
            >
              {fmt(finished.ms)}
            </div>
          )}
          <button
            onClick={closeCatpairs}
            className="cursor-pointer border-none bg-transparent text-[1.3rem] text-[var(--text3)]"
            aria-label={t('common.close')}
          >
            ✕
          </button>
        </div>
      </div>

      {screen === 'select' && (
        <div>
          <div className="mb-2.5 text-center text-[.8rem] text-[var(--text2)]">
            {t('catpairs.selectPrompt')}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2 mb-4">
            {CATEGORY_LIST.map((cat) => {
              const words = getCatWords(cat, WORD_CATEGORIES[cat] ?? []);
              const b = getBest(cat);
              const disabled = words.length < 4;
              return (
                <button
                  key={cat}
                  className="cat-select-btn py-2.5 px-2 rounded-xl border-[1.5px] border-[var(--border)] text-[var(--text)] text-[0.82rem] cursor-pointer text-center leading-[1.4] transition-[border-color,background] duration-[120ms] hover:border-[var(--accent)] bg-[var(--card)] hover:bg-[var(--cat-select-hover-bg)]"
                  disabled={disabled}
                  style={disabled ? { opacity: 0.4 } : undefined}
                  onClick={() => {
                    if (!disabled) startGame(cat, words);
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${categoryName(cat)}<span class="cat-count">${words.length} ${wordsLabel(words.length)}${b ? ` · 🏆${fmt(b * 1000)}` : ''}</span>`,
                  }}
                />
              );
            })}
            <button
              className="cat-select-btn py-2.5 px-2 rounded-xl border-[1.5px] border-[var(--border)] text-[var(--text)] text-[0.82rem] cursor-pointer text-center leading-[1.4] transition-[border-color,background] duration-[120ms] hover:border-[var(--accent)] bg-[var(--card)] hover:bg-[var(--cat-select-hover-bg)]"
              onClick={() => startGame(RANDOM_KEY, getRandomWords())}
              dangerouslySetInnerHTML={{
                __html: `${t('catpairs.random')}<span class="cat-count">${t('catpairs.randomDesc')}</span>`,
              }}
            />
          </div>
        </div>
      )}

      {screen === 'game' && (
        <div>
          {!finished && (
            <div className="mb-3 grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                {enItems.map((item) => (
                  <button
                    key={'en' + item.id}
                    className={
                      "pair-btn [font-family:'DM_Sans',sans-serif] text-[0.85rem] leading-[1.3] py-2.5 px-2 min-h-[52px] rounded-xl cursor-pointer flex items-center justify-center text-center [word-break:break-word] transition-[border-color,background] duration-[120ms] border-2 border-[var(--border)] bg-[var(--card)] text-[var(--text)]" +
                      (matched.has(item.id)
                        ? ' matched !border-[var(--pair-matched-border)] !bg-[var(--pair-matched-bg)] !text-[var(--pair-matched-color)]'
                        : '') +
                      (isSelected(item.id, 'en')
                        ? ' selected border-[var(--pair-btn-selected-border)] bg-[var(--pair-btn-selected-bg)]'
                        : '') +
                      (isWrong(item.id, 'en')
                        ? ' wrong !border-[var(--pair-wrong-border)] animate-[pairShake_0.38s_ease]'
                        : '') +
                      (!matched.has(item.id) && !isWrong(item.id, 'en')
                        ? ' hover:border-[var(--pair-btn-hover-border)] hover:bg-[var(--pair-btn-hover-bg)]'
                        : '')
                    }
                    onClick={() => onClick(item, 'en')}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {uaItems.map((item) => (
                  <button
                    key={'ua' + item.id}
                    className={
                      "pair-btn [font-family:'DM_Sans',sans-serif] text-[0.85rem] leading-[1.3] py-2.5 px-2 min-h-[52px] rounded-xl cursor-pointer flex items-center justify-center text-center [word-break:break-word] transition-[border-color,background] duration-[120ms] border-2 border-[var(--border)] bg-[var(--card)] text-[var(--text)]" +
                      (matched.has(item.id)
                        ? ' matched !border-[var(--pair-matched-border)] !bg-[var(--pair-matched-bg)] !text-[var(--pair-matched-color)]'
                        : '') +
                      (isSelected(item.id, 'ua')
                        ? ' selected border-[var(--pair-btn-selected-border)] bg-[var(--pair-btn-selected-bg)]'
                        : '') +
                      (isWrong(item.id, 'ua')
                        ? ' wrong !border-[var(--pair-wrong-border)] animate-[pairShake_0.38s_ease]'
                        : '') +
                      (!matched.has(item.id) && !isWrong(item.id, 'ua')
                        ? ' hover:border-[var(--pair-btn-hover-border)] hover:bg-[var(--pair-btn-hover-bg)]'
                        : '')
                    }
                    onClick={() => onClick(item, 'ua')}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {finished && (
            <div className="py-2 text-center">
              <div className="mb-2 text-[2.5rem]">{finished.isNew ? '🏆' : '🎉'}</div>
              <div className="mb-1 text-[1.4rem] font-bold text-[var(--text)]">
                {fmt(finished.ms)}
              </div>
              <div className="mb-[18px] text-[.88rem] text-[var(--text2)]">
                {finished.isNew
                  ? t('pairs.newRecord')
                  : t('pairs.record', { t: fmt(getBest(catKey) * 1000) })}
              </div>
              <div className="flex flex-wrap justify-center gap-2.5">
                <button
                  onClick={() =>
                    startGame(
                      catKey,
                      catKey === RANDOM_KEY
                        ? getRandomWords()
                        : getCatWords(catKey, WORD_CATEGORIES[catKey] ?? []),
                    )
                  }
                  className="cursor-pointer rounded-[10px] border-[1.5px] border-[var(--accent)] bg-transparent px-[22px] py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] font-semibold text-[var(--accent)]"
                  data-i18n="pairs.again"
                >
                  {t('pairs.again')}
                </button>
                <button
                  onClick={() => setScreen('select')}
                  className="cursor-pointer rounded-[10px] border-[1.5px] border-[var(--border)] bg-transparent px-[22px] py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] text-[var(--text2)]"
                  data-i18n="catpairs.backToThemes"
                >
                  {t('catpairs.backToThemes')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      </>
    );
  }

  if (typeof document === 'undefined') return null;
  return createPortal(
    <div
      id="catpairs-overlay"
      className="fixed inset-0 z-[9100] flex items-center justify-center bg-black/55 px-3 py-4"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="pairs-panel bg-[var(--quiz-panel-bg)] [border:var(--quiz-panel-border)] shadow-[var(--quiz-panel-shadow)]">
        {isOpen && renderContent()}
      </div>
    </div>,
    document.body,
  );
}

// ════ WEAK WORDS ══════════════════════════════════════════════
// item.w[0]/[1] are always static bundled dictionary data today — never
// live user input — but escaping them before interpolation into innerHTML
// below is cheap defense-in-depth against a future custom-word feature.
function _esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderWeakWords(): void {
  const el = document.getElementById('weak-words-list');
  if (!el) return;
  const wordIdx = getWordIndex();
  if (!wordIdx) return;
  const srsData = loadSRS();
  const words: { w: WordEntry; ef: number; reps: number; lapses: number }[] = [];
  Object.keys(srsData).forEach((key) => {
    const d = (srsData as Record<string, { ef?: number; reps?: number; lapses?: number }>)[key];
    if (d?.ef !== undefined && d.ef < 2.5) {
      const wi = wordIdx.get(key);
      if (wi !== undefined)
        words.push({
          w: (W as unknown as WordEntry[])[wi],
          ef: d.ef,
          reps: d.reps!,
          lapses: d.lapses ?? 0,
        });
    }
  });
  words.sort((a, b) => b.lapses - a.lapses || a.ef - b.ef);
  const top = words.slice(0, 10);
  if (!top.length) {
    el.textContent = t('stats.noSrsData');
    return;
  }
  el.innerHTML = top
    .map(
      (item, i) =>
        `<div class="flex items-center justify-between border-b border-[var(--border)] py-1">` +
        `<span>${i + 1}. <b>${_esc(item.w[0])}</b> — ${_esc(item.w[1])}</span>` +
        `<span class="ml-2 whitespace-nowrap text-[.72rem] text-[var(--danger)]">EF ${item.ef.toFixed(2)} · ✗${item.lapses}</span></div>`,
    )
    .join('');
}

export function CatPairsWiringInit(): ReactElement | null {
  useEffect(() => {
    // full-react-migration-roadmap.md Phase 5a: catpairs.tsx is one of the 4
    // modes mounted directly in AppRoot (not behind <LazyMode/>), so its
    // module evaluates as part of app-root.tsx's static import graph —
    // before React's first commit (see the Phase 3 audit finding on
    // sel-mode/sel-range's same-timing hazard). bindOverlayOpenClose used to
    // run at module-eval time too, which only worked because #btn-catpairs
    // was static HTML present at that point; moving it here (this component
    // only ever mounts once, so this is a one-time effect exactly like the
    // module-eval call it replaces) makes it safe once #btn-catpairs is
    // React-rendered.
    bindOverlayOpenClose('btn-catpairs', 'catpairs-overlay', openCatpairs, closeCatpairs);

    const statsOverlay = document.getElementById('stats-overlay');
    const onStatsOverlayClick = () => {
      try {
        renderWeakWords();
      } catch (e) {}
    };
    statsOverlay?.addEventListener('click', onStatsOverlayClick);

    const statsBtn = document.getElementById('btn-stats');
    const onStatsBtnClick = () => {
      setTimeout(() => {
        try {
          renderWeakWords();
        } catch (e) {}
      }, 50);
    };
    statsBtn?.addEventListener('click', onStatsBtnClick);

    return () => {
      statsOverlay?.removeEventListener('click', onStatsOverlayClick);
      statsBtn?.removeEventListener('click', onStatsBtnClick);
    };
  }, []);

  return null;
}
