// English Words App — js/modes/catpairs.ts
// 📦 CATEGORY PAIRS MODE + WOTD + MILESTONES + WEAK WORDS
import { state } from '../../src/state.ts';
import { _shuf } from '../core/srs.ts';
import { saveKnown, saveSRS } from '../core/storage.ts';
import { loadWikiImage } from '../core/images.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { getGameData } from '../features/game.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { t, wordsLabel, categoryName } from '../features/i18n.ts';

const CP = 6;
const RANDOM_KEY = '🎲 Випадково';
type PairItem = { text: string; id: number };
type PairSel  = { el: HTMLElement; id: number; side: string } | null;

let cpDeck: WordEntry[] = [], cpSel: PairSel = null, cpMatched = 0;
let cpStart: number | null = null, cpTick: ReturnType<typeof setInterval> | null = null, cpCatKey = '';

const oOverlay   = document.getElementById('catpairs-overlay')!;
const elTitle    = document.getElementById('catpairs-title')!;
const elBest     = document.getElementById('catpairs-best-label')!;
const elTimer    = document.getElementById('catpairs-timer')! as HTMLElement;
const elBoard    = document.getElementById('catpairs-board')! as HTMLElement;
const elFinal    = document.getElementById('catpairs-final')! as HTMLElement;
const selScreen  = document.getElementById('cat-select-screen')! as HTMLElement;
const gameScreen = document.getElementById('cat-game-screen')!   as HTMLElement;
const elGrid     = document.getElementById('cat-select-grid')!;

type PlaySound = (s: string) => void;

function fmt(ms: number): string { return (ms / 1000).toFixed(1) + t('common.secSuffix'); }
function getBest(k: string): number { return parseFloat(localStorage.getItem('ew_cp_' + k) ?? '0'); }
function setBest(k: string, secs: number): void { const b = getBest(k); if (!b || secs < b) localStorage.setItem('ew_cp_' + k, secs.toFixed(1)); }

let _catCache: Record<string, WordEntry[]> = {};
export function invalidateCatCache(): void { _catCache = {}; }
window.invalidateCatCache = invalidateCatCache;

function getCatWords(catName: string, catWords: string[]): WordEntry[] {
  if (_catCache[catName]) return _catCache[catName];
  const wordIdx = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
  if (!wordIdx) return [];
  const result = catWords.filter(w => wordIdx.has(w)).map(w => (W as unknown as WordEntry[])[wordIdx.get(w)!]).filter(Boolean);
  _catCache[catName] = result;
  return result;
}

function open(): void {
  buildSelectGrid(); selScreen.style.display = ''; gameScreen.style.display = 'none';
  elTimer.style.display = 'none'; elTitle.textContent = t('catpairs.themes'); oOverlay.style.display = 'flex';
}
function close(): void { if (cpTick) clearInterval(cpTick); oOverlay.style.display = 'none'; }

function buildSelectGrid(): void {
  elGrid.innerHTML = '';
  CATEGORY_LIST.forEach(cat => {
    const words = getCatWords(cat, WORD_CATEGORIES[cat] ?? []);
    const btn = document.createElement('button');
    btn.className = 'cat-select-btn';
    const b = getBest(cat);
    btn.innerHTML = `${categoryName(cat)}<span class="cat-count">${words.length} ${wordsLabel(words.length)}${b ? ` · 🏆${fmt(b * 1000)}` : ''}</span>`;
    if (words.length < 4) { btn.disabled = true; btn.style.opacity = '.4'; }
    btn.addEventListener('click', () => { if (words.length >= 4) startCatGame(cat, words); });
    elGrid.appendChild(btn);
  });
  const rnd = document.createElement('button');
  rnd.className = 'cat-select-btn';
  rnd.innerHTML = `${t('catpairs.random')}<span class="cat-count">${t('catpairs.randomDesc')}</span>`;
  rnd.addEventListener('click', () => {
    const wordIdx = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
    if (!wordIdx) return;
    const all: WordEntry[] = [], seen = new Set<string>();
    Object.values(WORD_CATEGORIES).flat().forEach(w => {
      if (wordIdx.has(w) && !seen.has(w)) { seen.add(w); all.push((W as unknown as WordEntry[])[wordIdx.get(w)!]); }
    });
    startCatGame(RANDOM_KEY, all);
  });
  elGrid.appendChild(rnd);
}

function startCatGame(catName: string, words: WordEntry[]): void {
  cpCatKey = catName; cpSel = null; cpMatched = 0; cpStart = null;
  if (cpTick) clearInterval(cpTick);
  cpDeck = _shuf(words.slice()).slice(0, Math.min(CP, words.length));
  elTitle.textContent = catName === RANDOM_KEY ? t('catpairs.random') : categoryName(catName);
  elBest.textContent = getBest(catName) ? t('pairs.record').replace('{t}', fmt(getBest(catName) * 1000)) : '';
  elTimer.textContent = '0.0' + t('common.secSuffix'); elTimer.style.display = 'block'; elTimer.style.color = 'var(--accent)';
  elFinal.style.display = 'none'; elBoard.style.display = '';
  selScreen.style.display = 'none'; gameScreen.style.display = ''; renderBoard();
}

function renderBoard(): void {
  const en = _shuf(cpDeck.map((w, i) => ({ text: w[0], id: i })));
  const ua = _shuf(cpDeck.map((w, i) => ({ text: w[1], id: i })));
  elBoard.innerHTML = '<div id="cpb-en" style="display:flex;flex-direction:column;gap:8px;"></div><div id="cpb-ua" style="display:flex;flex-direction:column;gap:8px;"></div>';
  Object.assign(elBoard.style, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' });
  const cEn = document.getElementById('cpb-en')!, cUa = document.getElementById('cpb-ua')!;
  en.forEach(it => cEn.appendChild(makeBtn(it, 'en')));
  ua.forEach(it => cUa.appendChild(makeBtn(it, 'ua')));
}

function makeBtn(item: PairItem, side: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'pair-btn'; btn.textContent = item.text;
  btn.dataset.id = String(item.id); btn.dataset.side = side;
  btn.addEventListener('click', () => onClick(btn, item, side));
  return btn;
}

function onClick(btn: HTMLElement, item: PairItem, side: string): void {
  if (btn.classList.contains('matched')) return;
  if (!cpStart) { cpStart = Date.now(); cpTick = setInterval(() => { elTimer.textContent = fmt(Date.now() - cpStart!); }, 100); }
  if (!cpSel) { cpSel = { el: btn, id: item.id, side }; btn.classList.add('selected'); }
  else if (cpSel.el === btn) { btn.classList.remove('selected'); cpSel = null; }
  else if (cpSel.side === side) { cpSel.el.classList.remove('selected'); cpSel = { el: btn, id: item.id, side }; btn.classList.add('selected'); }
  else if (cpSel.id === item.id) {
    cpSel.el.classList.remove('selected'); cpSel.el.classList.add('matched');
    btn.classList.add('matched'); cpSel = null; cpMatched++;
    try { (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
    if (cpMatched === cpDeck.length) setTimeout(finish, 350);
  } else {
    const a = cpSel.el; a.classList.remove('selected'); a.classList.add('wrong'); btn.classList.add('wrong'); cpSel = null;
    try { (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
    setTimeout(() => { a.classList.remove('wrong'); btn.classList.remove('wrong'); }, 420);
  }
}

function finish(): void {
  if (cpTick) clearInterval(cpTick);
  const ms = Date.now() - cpStart!, secs = ms / 1000;
  const b = getBest(cpCatKey), isNew = !b || secs < b;
  setBest(cpCatKey, secs);
  elBoard.style.display = 'none'; elFinal.style.display = 'block';
  elTimer.textContent = fmt(ms); elTimer.style.color = isNew ? '#e67e22' : 'var(--accent)';
  document.getElementById('cpf-emoji')!.textContent = isNew ? '🏆' : '🎉';
  document.getElementById('cpf-time')!.textContent  = fmt(ms);
  document.getElementById('cpf-best')!.textContent  = isNew ? t('pairs.newRecord') : t('pairs.record').replace('{t}', fmt(getBest(cpCatKey) * 1000));
  elBest.textContent = t('pairs.record').replace('{t}', fmt(getBest(cpCatKey) * 1000));
}

document.getElementById('btn-catpairs')?.addEventListener('click', open);
document.getElementById('catpairs-close')?.addEventListener('click', close);
document.getElementById('catpairs-again')?.addEventListener('click', () => {
  const wordIdx = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
  let words: WordEntry[];
  if (cpCatKey === '🎲 Випадково') {
    words = []; const seen = new Set<string>();
    if (wordIdx) Object.values(WORD_CATEGORIES).flat().forEach(w => { if (wordIdx.has(w) && !seen.has(w)) { seen.add(w); words.push((W as unknown as WordEntry[])[wordIdx.get(w)!]); } });
  } else words = getCatWords(cpCatKey, WORD_CATEGORIES[cpCatKey] ?? []);
  startCatGame(cpCatKey, words);
});
document.getElementById('catpairs-change')?.addEventListener('click', () => {
  if (cpTick) clearInterval(cpTick);
  selScreen.style.display = ''; gameScreen.style.display = 'none';
  elTimer.style.display = 'none'; elTitle.textContent = t('catpairs.themes'); buildSelectGrid();
});
oOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === oOverlay) close(); });
document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape' && oOverlay.style.display === 'flex') close(); });

// ════ WORD OF THE DAY ════════════════════════════════════════
const todayNum = state.TODAY.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
const wotdIdx  = Math.abs(todayNum) % W.length;
const wotd     = (W as unknown as WordEntry[])[wotdIdx];
const wotdBox  = document.getElementById('wotd-box') as HTMLElement | null;
if (wotdBox && wotd) {
  document.getElementById('wotd-word')!.textContent = wotd[0];
  document.getElementById('wotd-tr')!.textContent   = wotd[1];
  wotdBox.style.display = '';
  wotdBox.addEventListener('click', () => {
    const deck = state.deck as WordEntry[];
    let di = deck.findIndex(w => w[0] === wotd[0]);
    if (di === -1) { deck.push(wotd); di = deck.length - 1; }
    (window.setIdx as ((i: number) => void) | undefined)?.(di);
    (window.closePage as (() => void) | undefined)?.();
    (window.render as (() => void) | undefined)?.();
  });
  const imgWrap = document.getElementById('wotd-img-wrap');
  if (imgWrap) {
    loadWikiImage(wotd[0], (_w: string, url: string | null) => {
      if (!imgWrap) return;
      if (url) {
        const img = Object.assign(document.createElement('img'), { src: url, alt: wotd[0] });
        img.onerror = () => imgWrap.classList.add('wotd-no-img');
        imgWrap.innerHTML = ''; imgWrap.appendChild(img);
      } else { imgWrap.classList.add('wotd-no-img'); }
    });
  }
}

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
window._checkMilestones = checkMilestones;

function showMilestone(text: string): void {
  const t = document.getElementById('milestone-toast');
  if (!t) return;
  t.textContent = text; t.className = 'milestone-toast';
  void t.offsetWidth; t.className = 'milestone-toast show';
  setTimeout(() => { t.className = 'milestone-toast'; }, 3500);
}

// ════ UNMARK ══════════════════════════════════════════════════
document.getElementById('btn-unmark')?.addEventListener('click', (e: MouseEvent) => {
  e.stopPropagation();
  const cw = (window as Window & { cw?: WordEntry | null }).cw;
  if (!cw) return;
  state.known.delete(cw[0]); delete (state.srsData as Record<string, unknown>)[cw[0]];
  saveKnown(state.known); saveSRS(state.srsData);
  document.getElementById('card')?.classList.remove('is-known');
  try { (window.renderGameBar as (() => void) | undefined)?.(); } catch (e) {}
  checkMilestones();
});

// ════ WEAK WORDS ══════════════════════════════════════════════
export function renderWeakWords(): void {
  const el = document.getElementById('weak-words-list');
  if (!el) return;
  const wordIdx = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
  if (!wordIdx) return;
  const words: { w: WordEntry; ef: number; reps: number; lapses: number }[] = [];
  Object.keys(state.srsData).forEach(key => {
    const d = (state.srsData as Record<string, { ef?: number; reps?: number; lapses?: number }>)[key];
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
window._renderWeakWords = renderWeakWords;

document.getElementById('stats-overlay')?.addEventListener('click', () => { try { renderWeakWords(); } catch (e) {} });
document.getElementById('btn-stats')?.addEventListener('click', () => { setTimeout(() => { try { renderWeakWords(); } catch (e) {} }, 50); });
