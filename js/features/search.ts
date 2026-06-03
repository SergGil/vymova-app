// English Words App — js/features/search.ts
// 🔍 Dictionary search: find any EN or UA word, jump to card
import { W } from '../../data/words.js';
import { state } from '../../src/state.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { openWordDetail } from './word-detail.ts';
import type { WordEntry } from '../../src/types.js';

const overlay   = document.getElementById('search-overlay')!    as HTMLElement;
const panel     = document.getElementById('search-panel')!      as HTMLElement;
const input     = document.getElementById('search-input')!      as HTMLInputElement;
const results   = document.getElementById('search-results')!    as HTMLElement;
const emptyEl   = document.getElementById('search-empty')!      as HTMLElement;
const closeBtn  = document.getElementById('search-close')!;
const openBtn   = document.getElementById('btn-search')!;

const MAX_RESULTS = 40;

function openSearch(): void {
  overlay.style.display = 'flex';
  input.value = '';
  results.innerHTML = '';
  emptyEl.style.display = 'none';
  setTimeout(() => { try { input.focus(); } catch (e) {} }, 60);
}

export function closeSearch(): void {
  overlay.style.display = 'none';
}

function _ipa(w: WordEntry): string {
  const isFmtB = w[2]?.[0] === '/' || w[2]?.[0] === '[';
  return decodeIpa(isFmtB ? w[2] : (w[4] ?? ''));
}

function _inDeck(word: string): boolean {
  return state.deck.some(w => w[0] === word);
}

function _render(hits: WordEntry[]): void {
  results.innerHTML = '';
  if (!hits.length) {
    emptyEl.style.display = 'block';
    return;
  }
  emptyEl.style.display = 'none';

  const frag = document.createDocumentFragment();
  hits.forEach(w => {
    const inDeck = _inDeck(w[0]);
    const row = document.createElement('div');
    row.className = 'search-row';
    row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;border-bottom:1px solid var(--border);transition:background .15s;';
    row.innerHTML =
      `<div style="flex:1;min-width:0;">` +
        `<div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;">` +
          `<span style="font-weight:600;font-size:.97rem;color:var(--text);">${w[0]}</span>` +
          `<span style="font-size:.75rem;color:var(--text3);font-style:italic;">${_ipa(w)}</span>` +
        `</div>` +
        `<div style="font-size:.85rem;color:var(--text2);margin-top:2px;">${w[1]}</div>` +
      `</div>` +
      `<button class="sr-detail-btn" title="Детальна картка" style="background:none;border:none;font-size:1.1rem;cursor:pointer;color:var(--text3);padding:4px 6px;flex-shrink:0;">📋</button>` +
      `<span class="sr-goto-badge" style="font-size:.7rem;padding:2px 7px;border-radius:20px;white-space:nowrap;cursor:pointer;` +
        (inDeck
          ? `background:rgba(var(--accent-rgb,0,200,255),.12);color:var(--accent);`
          : `background:var(--bg2);color:var(--text3);`) +
        `">${inDeck ? '✓ у колоді' : '→ до картки'}</span>`;

    row.addEventListener('mouseover', () => { row.style.background = 'var(--bg2)'; });
    row.addEventListener('mouseout', () => { row.style.background = ''; });
    // Main row click → open word detail
    row.addEventListener('click', (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('sr-goto-badge')) { closeSearch(); _jumpTo(w); return; }
      if ((e.target as HTMLElement).classList.contains('sr-detail-btn')) { openWordDetail(w); closeSearch(); return; }
      openWordDetail(w); closeSearch();
    });
    frag.appendChild(row);
  });
  results.appendChild(frag);
}

function _jumpTo(w: WordEntry): void {
  closeSearch();
  // If word is in current deck — navigate to it
  const di = state.deck.findIndex(d => d[0] === w[0]);
  if (di !== -1) {
    (window.setIdx as ((i: number) => void) | undefined)?.(di);
    (window.render as (() => void) | undefined)?.();
    return;
  }
  // Word not in deck — switch to all-words range, find it there
  const selRange = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (selRange && selRange.value !== '0') {
    selRange.value = '0';
    selRange.dispatchEvent(new Event('change'));
    // After deck rebuild, navigate
    setTimeout(() => {
      const di2 = state.deck.findIndex(d => d[0] === w[0]);
      if (di2 !== -1) {
        (window.setIdx as ((i: number) => void) | undefined)?.(di2);
        (window.render as (() => void) | undefined)?.();
      }
    }, 80);
  }
}

let _timer: ReturnType<typeof setTimeout> | null = null;

input.addEventListener('input', () => {
  if (_timer) clearTimeout(_timer);
  const q = input.value.trim().toLowerCase();
  if (!q || q.length < 1) {
    results.innerHTML = '';
    emptyEl.style.display = 'none';
    return;
  }
  _timer = setTimeout(() => {
    const hits: WordEntry[] = [];
    const en: WordEntry[] = [], ua: WordEntry[] = [], enContains: WordEntry[] = [], uaContains: WordEntry[] = [];
    for (const w of W as unknown as WordEntry[]) {
      const enLow = w[0].toLowerCase(), uaLow = w[1].toLowerCase();
      if (enLow.startsWith(q)) { en.push(w); continue; }
      if (uaLow.startsWith(q)) { ua.push(w); continue; }
      if (enLow.includes(q))   { enContains.push(w); continue; }
      if (uaLow.includes(q))   { uaContains.push(w); }
    }
    hits.push(...en, ...ua, ...enContains, ...uaContains);
    _render(hits.slice(0, MAX_RESULTS));
  }, 120);
});

input.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeSearch();
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    (results.querySelector<HTMLElement>('.search-row'))?.focus();
  }
  if (e.key === 'Enter') {
    const first = results.querySelector<HTMLElement>('.search-row');
    if (first) first.click();
  }
});

results.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeSearch();
  const rows = [...results.querySelectorAll<HTMLElement>('.search-row')];
  const cur = document.activeElement as HTMLElement;
  const idx = rows.indexOf(cur);
  if (e.key === 'ArrowDown' && idx < rows.length - 1) { e.preventDefault(); rows[idx + 1].focus(); }
  if (e.key === 'ArrowUp')   {
    e.preventDefault();
    if (idx <= 0) input.focus();
    else rows[idx - 1].focus();
  }
  if (e.key === 'Enter' && idx !== -1) rows[idx].click();
});

results.querySelectorAll<HTMLElement>('.search-row').forEach(r => { r.tabIndex = 0; });

openBtn.addEventListener('click', openSearch);
closeBtn.addEventListener('click', closeSearch);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) closeSearch(); });

document.addEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    // Only intercept if not in a text input (except our own)
    const tag = (document.activeElement as HTMLElement)?.tagName;
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    } else if (overlay.style.display === 'flex') {
      e.preventDefault();
    }
  }
  if (e.key === 'Escape' && overlay.style.display === 'flex') closeSearch();
});
