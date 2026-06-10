// English Words App — js/modes/word-letters.ts
// 🔤 Letters: from a set of letters, find as many valid words as possible
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const ROUNDS = 5;

// Dictionary of single-word entries usable for the letters game
const DICT: string[] = (W as unknown as WordEntry[])
  .filter(w => /^[a-z]+$/i.test(w[0]) && w[0].length >= 3 && w[0].length <= 9)
  .map(w => w[0].toLowerCase());

interface RoundData { base: string; possible: string[]; }
interface Tile { ch: string; used: boolean; }

let wlRounds: RoundData[] = [];
let wlIdx = 0;
let wlFoundTotal = 0, wlPossibleTotal = 0;
let wlFound: Set<string> = new Set();
let wlTiles: Tile[] = [];
let wlGuess: number[] = [];
let wlTileOrder: number[] = [];
let wlHintsLeft = 3;

// ── DOM ───────────────────────────────────────────────────────
const overlay    = document.getElementById('wl-overlay')!  as HTMLElement;
const elSub      = document.getElementById('wl-subtitle')!;
const elPbar     = document.getElementById('wl-pbar')!     as HTMLElement;
const elFoundCnt = document.getElementById('wl-found-count')!;
const elTotal    = document.getElementById('wl-total')!;
const elLetters  = document.getElementById('wl-letters')!;
const elGuess    = document.getElementById('wl-guess')!;
const elResult   = document.getElementById('wl-result')!;
const elFoundList = document.getElementById('wl-found-list')!;
const elHintText = document.getElementById('wl-hint-text')!;
const elHintBtn  = document.getElementById('wl-hint-btn')! as HTMLButtonElement;
const elClearBtn = document.getElementById('wl-clear-btn')! as HTMLButtonElement;
const elSubmit   = document.getElementById('wl-submit')!   as HTMLButtonElement;
const elDone     = document.getElementById('wl-done')!     as HTMLElement;
const elFinal    = document.getElementById('wl-final')!    as HTMLElement;
const elScoreRow = document.getElementById('wl-score-row')! as HTMLElement;

function letterCounts(word: string): Record<string, number> {
  const c: Record<string, number> = {};
  for (const ch of word) c[ch] = (c[ch] ?? 0) + 1;
  return c;
}

function canForm(word: string, base: Record<string, number>): boolean {
  const c: Record<string, number> = {};
  for (const ch of word) {
    c[ch] = (c[ch] ?? 0) + 1;
    if (c[ch] > (base[ch] ?? 0)) return false;
  }
  return true;
}

function pickBase(exclude: Set<string>): RoundData {
  const candidates = _shuf(DICT.filter(w => w.length >= 6 && w.length <= 8 && !exclude.has(w)));
  let best: RoundData | null = null;
  for (let i = 0; i < Math.min(candidates.length, 60); i++) {
    const base   = candidates[i];
    const counts = letterCounts(base);
    const possible = DICT.filter(w => w !== base && w.length < base.length && canForm(w, counts));
    if (possible.length >= 5) return { base, possible };
    if (!best || possible.length > best.possible.length) best = { base, possible };
  }
  return best ?? { base: candidates[0] ?? 'letters', possible: [] };
}

function build(): void {
  wlRounds = [];
  const used = new Set<string>();
  for (let i = 0; i < ROUNDS; i++) {
    const r = pickBase(used);
    wlRounds.push(r);
    used.add(r.base);
  }
  wlIdx = 0; wlFoundTotal = 0;
  wlPossibleTotal = wlRounds.reduce((s, r) => s + r.possible.length, 0);
}

function open(): void {
  build();
  elFinal.style.display = 'none'; elScoreRow.style.display = 'flex';
  overlay.style.display = 'flex';
  renderRound();
}
function close(): void { overlay.style.display = 'none'; }

function renderRound(): void {
  if (wlIdx >= wlRounds.length) { showFinal(); return; }
  const r = wlRounds[wlIdx];
  wlFound = new Set();
  wlGuess = [];
  wlHintsLeft = 3;
  wlTiles = r.base.split('').map(ch => ({ ch, used: false }));
  wlTileOrder = _shuf(wlTiles.map((_, i) => i));

  elSub.textContent = `${t('letters.round')} ${wlIdx+1} ${t('common.of')} ${ROUNDS}`;
  elPbar.style.width = (wlIdx / ROUNDS * 100) + '%';
  elTotal.textContent = String(r.possible.length);
  elFoundCnt.textContent = '0';
  elResult.textContent = '';
  elHintText.textContent = ''; elHintText.style.display = 'none';
  elDone.textContent = wlIdx >= wlRounds.length-1 ? t('quiz.finish') : t('letters.doneBtn');
  elHintBtn.disabled = false;
  elHintBtn.textContent = t('letters.hintBtn').replace('{n}', String(wlHintsLeft));

  renderTiles();
  renderFound();
}

function renderTiles(): void {
  elGuess.innerHTML = '';
  wlGuess.forEach((idx, pos) => {
    const btn = document.createElement('button');
    btn.textContent = wlTiles[idx].ch.toUpperCase();
    btn.className = 'scr-tile scr-tile-placed';
    btn.addEventListener('click', () => deselect(pos));
    elGuess.appendChild(btn);
  });
  if (!wlGuess.length) {
    const span = document.createElement('span');
    span.className = 'scr-tile scr-tile-empty';
    elGuess.appendChild(span);
  }

  elLetters.innerHTML = '';
  wlTileOrder.forEach(idx => {
    if (wlTiles[idx].used) return;
    const btn = document.createElement('button');
    btn.textContent = wlTiles[idx].ch.toUpperCase();
    btn.className = 'scr-tile';
    btn.addEventListener('click', () => select(idx));
    elLetters.appendChild(btn);
  });
}

function renderFound(): void {
  elFoundList.innerHTML = '';
  Array.from(wlFound).sort().forEach(word => {
    const span = document.createElement('span');
    span.textContent = word.toUpperCase();
    span.style.cssText = 'background:var(--accent);color:#fff;border-radius:8px;padding:4px 10px;font-size:.78rem;font-weight:700;';
    elFoundList.appendChild(span);
  });
}

function select(idx: number): void {
  if (wlTiles[idx].used) return;
  wlTiles[idx].used = true;
  wlGuess.push(idx);
  renderTiles();
}

function deselect(pos: number): void {
  const idx = wlGuess[pos];
  wlTiles[idx].used = false;
  wlGuess.splice(pos, 1);
  renderTiles();
}

function clearGuess(): void {
  wlGuess.forEach(idx => { wlTiles[idx].used = false; });
  wlGuess = [];
  renderTiles();
}

function submitGuess(): void {
  const r = wlRounds[wlIdx];
  const word = wlGuess.map(idx => wlTiles[idx].ch).join('');
  if (word.length < 3) {
    elResult.innerHTML = `<span style="color:#e74c3c">${t('letters.tooShort')}</span>`;
    return;
  }
  if (wlFound.has(word)) {
    elResult.innerHTML = `<span style="color:#f39c12">${t('letters.alreadyMsg')}</span>`;
    return;
  }
  if (r.possible.includes(word)) {
    wlFound.add(word);
    wlFoundTotal++;
    elFoundCnt.textContent = String(wlFound.size);
    elResult.innerHTML = `<span style="color:#27ae60">${t('letters.foundMsg')}</span>`;
    try { addCombo(); } catch(e){}
    recordModeAnswer('letters', true);
    renderFound();
  } else {
    elResult.innerHTML = `<span style="color:#e74c3c">${t('letters.wrongMsg')}</span>`;
    try { breakCombo(); } catch(e){}
    recordModeAnswer('letters', false);
  }
  clearGuess();
}

function hint(): void {
  if (wlHintsLeft <= 0) return;
  const r = wlRounds[wlIdx];
  const remaining = r.possible.filter(w => !wlFound.has(w)).sort((a, b) => a.length - b.length);
  if (!remaining.length) return;
  wlHintsLeft--;
  elHintText.textContent = `💡 ${remaining[0].toUpperCase()}`;
  elHintText.style.display = 'block';
  elHintBtn.textContent = wlHintsLeft > 0 ? t('letters.hintBtn').replace('{n}', String(wlHintsLeft)) : t('letters.hintNone');
  elHintBtn.disabled = wlHintsLeft <= 0;
}

function showFinal(): void {
  elScoreRow.style.display = 'none'; elFinal.style.display = 'block';
  const pct = wlPossibleTotal > 0 ? Math.round(wlFoundTotal / wlPossibleTotal * 100) : 0;
  document.getElementById('wl-final-emoji')!.textContent = pct===100?'🏆':pct>=70?'🎉':pct>=40?'👍':'💪';
  document.getElementById('wl-final-title')!.textContent = pct===100?t('quiz.perfectTitle'):pct>=70?t('quiz.greatTitle'):pct>=40?t('quiz.goodTitle'):t('tempo.practiceTitle');
  document.getElementById('wl-final-desc')!.textContent  = `${wlFoundTotal} ${t('common.of')} ${wlPossibleTotal} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = t('write.completed');
  recordModeComplete('letters');
}

elHintBtn.addEventListener('click', hint);
elClearBtn.addEventListener('click', clearGuess);
elSubmit.addEventListener('click', submitGuess);
elDone.addEventListener('click', () => { wlIdx++; renderRound(); });
document.getElementById('btn-letters')?.addEventListener('click', open);
document.getElementById('wl-close')?.addEventListener('click', close);
document.getElementById('wl-exit')?.addEventListener('click', close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
document.getElementById('wl-restart')?.addEventListener('click', () => { build(); renderRound(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
  if (e.key === 'Enter') submitGuess();
});
