// Vymova — js/modes/catpairs.tsx
// 📦 CATEGORY PAIRS MODE + WOTD + MILESTONES + WEAK WORDS
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { _shuf } from '../core/srs.ts';
import { loadSRS } from '../core/storage.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { getGameData } from '../features/game.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { t, wordsLabel, categoryName } from '../features/i18n.ts';
import { renderGameBar } from '../features/render-game-bar.ts';
import { playSound } from '../core/audio.ts';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

function getWordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua': return w[1];
    case 'es': return esEntry(w[0])?.[0] ?? '';
    case 'fr': return frEntry(w[0])?.[0] ?? '';
    case 'it': return itEntry(w[0])?.[0] ?? '';
    case 'pt': return ptEntry(w[0])?.[0] ?? '';
    case 'de': return deEntry(w[0])?.[0] ?? '';
    case 'he': return heEntry(w[0])?.[0] ?? '';
    case 'ar': return arEntry(w[0])?.[0] ?? '';
    case 'pl': return plEntry(w[0])?.[0] ?? '';
    case 'zh': return zhEntry(w[0])?.[0] ?? '';
    case 'el': return elEntry(w[0])?.[0] ?? '';
    case 'ja': return jaEntry(w[0])?.[0] ?? '';
    case 'tr': return trEntry(w[0])?.[0] ?? '';
    case 'nl': return nlEntry(w[0])?.[0] ?? '';
    default:   return w[0];
  }
}

const CP = 6;
const RANDOM_KEY = '🎲 Випадково';
type PairItem = { text: string; id: number };

function fmt(ms: number): string { return (ms / 1000).toFixed(1) + t('common.secSuffix'); }
function getBest(k: string): number { return parseFloat(localStorage.getItem('ew_cp_' + k) ?? '0'); }
function setBest(k: string, secs: number): void { const b = getBest(k); if (!b || secs < b) localStorage.setItem('ew_cp_' + k, secs.toFixed(1)); }

let _catCache: Record<string, WordEntry[]> = {};
export function invalidateCatCache(): void { _catCache = {}; }

function getCatWords(catName: string, catWords: string[]): WordEntry[] {
  if (_catCache[catName]) return _catCache[catName];
  const wordIdx = state._wordIdx;
  if (!wordIdx) return [];
  const result = catWords.filter(w => wordIdx.has(w)).map(w => (W as unknown as WordEntry[])[wordIdx.get(w)!]).filter(Boolean);
  _catCache[catName] = result;
  return result;
}

function getRandomWords(): WordEntry[] {
  const wordIdx = state._wordIdx;
  const all: WordEntry[] = [], seen = new Set<string>();
  if (wordIdx) {
    Object.values(WORD_CATEGORIES).flat().forEach(w => {
      if (wordIdx.has(w) && !seen.has(w)) { seen.add(w); all.push((W as unknown as WordEntry[])[wordIdx.get(w)!]); }
    });
  }
  return all;
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openCatpairs(): void { _open?.(); }
function closeCatpairs(): void { _close?.(); }

type Selection = { id: number; side: string } | null;

export function CatPairsPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
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

  const stopTick = (): void => { if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; } };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      setScreen('select');
      setGridTick(x => x + 1);
      const overlay = document.getElementById('catpairs-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      stopTick();
      setIsOpen(false);
      const overlay = document.getElementById('catpairs-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; stopTick(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('catpairs-overlay');
      if (e.key === 'Escape' && overlay?.style.display === 'flex') closeCatpairs();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const startGame = (key: string, words: WordEntry[]): void => {
    stopTick();
    const d = _shuf(words.slice()).slice(0, Math.min(CP, words.length));
    startRef.current = null;
    setCatKey(key);
    setDeck(d);
    setSel(null);
    setMatched(new Set());
    setWrongIds([]);
    setElapsed(0);
    setFinished(null);
    const learnLang = getLearnLang();
    const knowLang  = getKnowLang();
    setEnItems(_shuf(d.map((w, i) => ({ text: getWordInLang(w, learnLang), id: i }))));
    setUaItems(_shuf(d.map((w, i) => ({ text: getWordInLang(w, knowLang), id: i }))));
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
      tickRef.current = setInterval(() => { setElapsed(Date.now() - startRef.current!); }, 100);
    }
    if (!sel) {
      setSel({ id: item.id, side });
    } else if (sel.id === item.id && sel.side === side) {
      setSel(null);
    } else if (sel.side === side) {
      setSel({ id: item.id, side });
    } else if (sel.id === item.id) {
      const newMatched = new Set(matched); newMatched.add(item.id);
      setMatched(newMatched);
      setSel(null);
      try { playSound('know'); } catch (e) {}
      if (newMatched.size === deck.length) setTimeout(() => finish(deck.length), 350);
    } else {
      const a = sel;
      setWrongIds([a, { id: item.id, side }]);
      setSel(null);
      try { playSound('next'); } catch (e) {}
      setTimeout(() => setWrongIds([]), 420);
    }
  };

  if (!isOpen) return <></>;

  const best = getBest(catKey);
  const title = screen === 'select' ? t('catpairs.themes') : (catKey === RANDOM_KEY ? t('catpairs.random') : categoryName(catKey));
  const isWrong = (id: number, side: string): boolean => wrongIds.some(w => w.id === id && w.side === side);
  const isSelected = (id: number, side: string): boolean => !!sel && sel.id === id && sel.side === side;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{title}</div>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 2 }}>
            {screen === 'game' && best ? t('pairs.record', { t: fmt(best * 1000) }) : ''}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {screen === 'game' && !finished && (
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', minWidth: 52, textAlign: 'right' }}>
              {fmt(elapsed)}
            </div>
          )}
          {finished && (
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: finished.isNew ? '#e67e22' : 'var(--accent)', minWidth: 52, textAlign: 'right' }}>
              {fmt(finished.ms)}
            </div>
          )}
          <button onClick={closeCatpairs} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text3)' }}>✕</button>
        </div>
      </div>

      {screen === 'select' && (
        <div>
          <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginBottom: 10, textAlign: 'center' }}>{t('catpairs.selectPrompt')}</div>
          <div className="cat-select-grid">
            {CATEGORY_LIST.map(cat => {
              const words = getCatWords(cat, WORD_CATEGORIES[cat] ?? []);
              const b = getBest(cat);
              const disabled = words.length < 4;
              return (
                <button
                  key={cat}
                  className="cat-select-btn"
                  disabled={disabled}
                  style={disabled ? { opacity: .4 } : undefined}
                  onClick={() => { if (!disabled) startGame(cat, words); }}
                  dangerouslySetInnerHTML={{ __html: `${categoryName(cat)}<span class="cat-count">${words.length} ${wordsLabel(words.length)}${b ? ` · 🏆${fmt(b * 1000)}` : ''}</span>` }}
                />
              );
            })}
            <button
              className="cat-select-btn"
              onClick={() => startGame(RANDOM_KEY, getRandomWords())}
              dangerouslySetInnerHTML={{ __html: `${t('catpairs.random')}<span class="cat-count">${t('catpairs.randomDesc')}</span>` }}
            />
          </div>
        </div>
      )}

      {screen === 'game' && (
        <div>
          {!finished && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {enItems.map(item => (
                  <button
                    key={'en' + item.id}
                    className={'pair-btn' + (matched.has(item.id) ? ' matched' : '') + (isSelected(item.id, 'en') ? ' selected' : '') + (isWrong(item.id, 'en') ? ' wrong' : '')}
                    onClick={() => onClick(item, 'en')}
                  >{item.text}</button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {uaItems.map(item => (
                  <button
                    key={'ua' + item.id}
                    className={'pair-btn' + (matched.has(item.id) ? ' matched' : '') + (isSelected(item.id, 'ua') ? ' selected' : '') + (isWrong(item.id, 'ua') ? ' wrong' : '')}
                    onClick={() => onClick(item, 'ua')}
                  >{item.text}</button>
                ))}
              </div>
            </div>
          )}

          {finished && (
            <div style={{ textAlign: 'center', padding: '8px 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{finished.isNew ? '🏆' : '🎉'}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{fmt(finished.ms)}</div>
              <div style={{ fontSize: '.88rem', color: 'var(--text2)', marginBottom: 18 }}>
                {finished.isNew ? t('pairs.newRecord') : t('pairs.record', { t: fmt(getBest(catKey) * 1000) })}
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => startGame(catKey, catKey === RANDOM_KEY ? getRandomWords() : getCatWords(catKey, WORD_CATEGORIES[catKey] ?? []))}
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', fontWeight: 600, padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--accent)', background: 'none', color: 'var(--accent)', cursor: 'pointer' }}
                  data-i18n="pairs.again"
                >{t('pairs.again')}</button>
                <button
                  onClick={() => setScreen('select')}
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '.88rem', padding: '10px 22px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer' }}
                  data-i18n="catpairs.backToThemes"
                >{t('catpairs.backToThemes')}</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-catpairs', 'catpairs-overlay', openCatpairs, closeCatpairs);

// ════ MILESTONES ═════════════════════════════════════════════
let _shownMilestones: Record<string, number> = {};
try { _shownMilestones = JSON.parse(localStorage.getItem('ew_milestones') ?? '{}'); } catch (e) {}

const MILESTONES = [
  { id: 'w100',  check: () => state.known.size >= 100,           key: 'milestone.w100' },
  { id: 'w500',  check: () => state.known.size >= 500,           key: 'milestone.w500' },
  { id: 'w1000', check: () => state.known.size >= 1000,          key: 'milestone.w1000' },
  { id: 'w2000', check: () => state.known.size >= 2000,          key: 'milestone.w2000' },
  { id: 's7',    check: () => (getGameData().streak ?? 0) >= 7,  key: 'milestone.s7' },
  { id: 's30',   check: () => (getGameData().streak ?? 0) >= 30, key: 'milestone.s30' },
  { id: 's100',  check: () => (getGameData().streak ?? 0) >= 100,key: 'milestone.s100' },
];

function checkMilestones(): void {
  MILESTONES.forEach(m => {
    if (!_shownMilestones[m.id] && m.check()) {
      _shownMilestones[m.id] = 1;
      try { localStorage.setItem('ew_milestones', JSON.stringify(_shownMilestones)); } catch (e) {}
      showMilestone(t(m.key));
    }
  });
}

function showMilestone(text: string): void {
  const el = document.getElementById('milestone-toast');
  if (!el) return;
  el.textContent = text; el.className = 'milestone-toast';
  void el.offsetWidth; el.className = 'milestone-toast show';
  setTimeout(() => { el.className = 'milestone-toast'; }, 3500);
}

// ════ WEAK WORDS ══════════════════════════════════════════════
export function renderWeakWords(): void {
  const el = document.getElementById('weak-words-list');
  if (!el) return;
  const wordIdx = state._wordIdx;
  if (!wordIdx) return;
  const srsData = loadSRS();
  const words: { w: WordEntry; ef: number; reps: number; lapses: number }[] = [];
  Object.keys(srsData).forEach(key => {
    const d = (srsData as Record<string, { ef?: number; reps?: number; lapses?: number }>)[key];
    if (d?.ef !== undefined && d.ef < 2.5) {
      const wi = wordIdx.get(key);
      if (wi !== undefined) words.push({ w: (W as unknown as WordEntry[])[wi], ef: d.ef, reps: d.reps!, lapses: d.lapses ?? 0 });
    }
  });
  words.sort((a, b) => b.lapses - a.lapses || a.ef - b.ef);
  const top = words.slice(0, 10);
  if (!top.length) { el.textContent = t('stats.noSrsData'); return; }
  el.innerHTML = top.map((item, i) =>
    `<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid var(--border);">` +
    `<span>${i+1}. <b>${item.w[0]}</b> — ${item.w[1]}</span>` +
    `<span style="font-size:.72rem;color:#e74c3c;white-space:nowrap;margin-left:8px;">EF ${item.ef.toFixed(2)} · ✗${item.lapses}</span></div>`
  ).join('');
}

export function CatPairsWiringInit(): ReactElement | null {
  useEffect(() => {
    const statsOverlay = document.getElementById('stats-overlay');
    const onStatsOverlayClick = () => { try { renderWeakWords(); } catch (e) {} };
    statsOverlay?.addEventListener('click', onStatsOverlayClick);

    const statsBtn = document.getElementById('btn-stats');
    const onStatsBtnClick = () => { setTimeout(() => { try { renderWeakWords(); } catch (e) {} }, 50); };
    statsBtn?.addEventListener('click', onStatsBtnClick);

    return () => {
      statsOverlay?.removeEventListener('click', onStatsOverlayClick);
      statsBtn?.removeEventListener('click', onStatsBtnClick);
    };
  }, []);

  return null;
}
