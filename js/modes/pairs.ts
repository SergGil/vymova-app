// English Words App — js/modes/pairs.ts
// 🔗 PAIRS MODE
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const N = 6;
let pDeck: WordEntry[] = [];
let pSel: { el: HTMLElement; id: number; side: string } | null = null;
let pMatched = 0;
let pStart: number | null = null;
let pTick: ReturnType<typeof setInterval> | null = null;

const pOverlay = document.getElementById('pairs-overlay')!;
const pBoard   = document.getElementById('pairs-board')!;
const pTimer   = document.getElementById('pairs-timer')!;
const pFinal   = document.getElementById('pairs-final')!;
const pBest    = document.getElementById('pairs-best-label')!;

function getBest(): number { return parseFloat(localStorage.getItem('ew_pairs_best') ?? '0'); }
function setBest(t: number): void { const b = getBest(); if (!b || t < b) localStorage.setItem('ew_pairs_best', t.toFixed(1)); }
function fmt(ms: number): string { return (ms / 1000).toFixed(1) + 'с'; }

function open(): void {
  const pool = _shuf((state.deck?.length >= N ? state.deck : W).slice() as WordEntry[]);
  pDeck = pool.slice(0, N);
  pSel = null; pMatched = 0; pStart = null;
  if (pTick) clearInterval(pTick);
  pTimer.textContent = '0.0с'; pTimer.style.color = 'var(--accent)';
  pFinal.style.display = 'none'; pBoard.style.display = '';
  const b = getBest();
  pBest.textContent = b ? '🏆 Рекорд: ' + fmt(b * 1000) : '';
  renderBoard();
  pOverlay.style.display = 'flex';
}
function close(): void {
  if (pTick) clearInterval(pTick);
  pOverlay.style.display = 'none';
}

function startTimer(): void {
  if (pStart) return;
  pStart = Date.now();
  pTick = setInterval(() => { pTimer.textContent = fmt(Date.now() - pStart!); }, 100);
}

function renderBoard(): void {
  const en = _shuf(pDeck.map((w, i) => ({ text: w[0], id: i })));
  const ua = _shuf(pDeck.map((w, i) => ({ text: w[1], id: i })));
  pBoard.innerHTML = '<div id="pairs-col-en" style="display:flex;flex-direction:column;gap:8px;"></div>' +
                     '<div id="pairs-col-ua" style="display:flex;flex-direction:column;gap:8px;"></div>';
  Object.assign(pBoard.style, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' });
  const colEn = document.getElementById('pairs-col-en')!;
  const colUa = document.getElementById('pairs-col-ua')!;
  en.forEach(item => colEn.appendChild(makeBtn(item, 'en')));
  ua.forEach(item => colUa.appendChild(makeBtn(item, 'ua')));
}

function makeBtn(item: { text: string; id: number }, side: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'pair-btn';
  btn.textContent = item.text;
  btn.dataset.id = String(item.id);
  btn.dataset.side = side;
  btn.addEventListener('click', () => onClick(btn, item, side));
  return btn;
}

function onClick(btn: HTMLElement, item: { text: string; id: number }, side: string): void {
  if (btn.classList.contains('matched')) return;
  startTimer();
  if (!pSel) {
    pSel = { el: btn, id: item.id, side };
    btn.classList.add('selected');
  } else if (pSel.el === btn) {
    btn.classList.remove('selected'); pSel = null;
  } else if (pSel.side === side) {
    pSel.el.classList.remove('selected');
    pSel = { el: btn, id: item.id, side };
    btn.classList.add('selected');
  } else if (pSel.id === item.id) {
    pSel.el.classList.remove('selected');
    pSel.el.classList.add('matched');
    btn.classList.add('matched');
    pSel = null; pMatched++;
    try { (window.playSound as ((s: string) => void) | undefined)?.('know'); } catch (e) {}
    if (pMatched === N) setTimeout(finish, 350);
  } else {
    const wrongA = pSel.el;
    wrongA.classList.remove('selected');
    wrongA.classList.add('wrong'); btn.classList.add('wrong');
    pSel = null;
    try { (window.playSound as ((s: string) => void) | undefined)?.('next'); } catch (e) {}
    setTimeout(() => { wrongA.classList.remove('wrong'); btn.classList.remove('wrong'); }, 420);
  }
}

function finish(): void {
  if (pTick) clearInterval(pTick);
  const ms = Date.now() - pStart!;
  const t  = ms / 1000;
  const b  = getBest(), isNew = !b || t < b;
  setBest(t);
  pBoard.style.display = 'none'; pFinal.style.display = 'block';
  (window.recordModeComplete as ((mode: string) => void) | undefined)?.('pairs');
  pTimer.textContent = fmt(ms); pTimer.style.color = isNew ? '#e67e22' : 'var(--accent)';
  document.getElementById('pf-emoji')!.textContent = isNew ? '🏆' : '🎉';
  document.getElementById('pf-time')!.textContent  = fmt(ms);
  document.getElementById('pf-best')!.textContent  = isNew ? '🌟 Новий рекорд!' : ('🏆 Рекорд: ' + fmt(getBest() * 1000));
  pBest.textContent = '🏆 Рекорд: ' + fmt(getBest() * 1000);
}

document.getElementById('btn-pairs')?.addEventListener('click', open);
document.getElementById('pairs-close')?.addEventListener('click', close);
document.getElementById('pairs-again')?.addEventListener('click', open);
document.getElementById('pairs-exit')?.addEventListener('click', close);
pOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === pOverlay) close(); });
document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape' && pOverlay.style.display === 'flex') close(); });
