// English Words App — js/modes/scramble.ts
// 🔀 Scramble: rearrange shuffled letter tiles to build the word
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import type { SpeakFn } from '../core/ui-helpers.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
let scrDeck: WordEntry[] = [];
let scrIdx = 0, scrOk = 0, scrFail = 0;
let scrAnswered = false;
let scrHintsLeft = 3;
let scrFailedThis = false;

interface Tile { ch: string; used: boolean; }
let scrLetters: Tile[] = [];
let scrAnswer: number[] = [];
let scrTileOrder: number[] = [];

// ── DOM ───────────────────────────────────────────────────────
const overlay   = document.getElementById('scr-overlay')!  as HTMLElement;
const elSub     = document.getElementById('scr-subtitle')!;
const elPbar    = document.getElementById('scr-pbar')!     as HTMLElement;
const elOk      = document.getElementById('scr-ok')!;
const elFail    = document.getElementById('scr-fail')!;
const elTransl  = document.getElementById('scr-transl')!;
const elIpa     = document.getElementById('scr-ipa')!;
const elAnswer  = document.getElementById('scr-answer')!;
const elLetters = document.getElementById('scr-letters')!;
const elResult  = document.getElementById('scr-result')!;
const elNext    = document.getElementById('scr-next')!     as HTMLElement;
const elFinal   = document.getElementById('scr-final')!    as HTMLElement;
const elScRow   = document.getElementById('scr-score-row')! as HTMLElement;
const elClueBox = document.getElementById('scr-clue-box')!  as HTMLElement;
const elActionsRow = document.getElementById('scr-actions-row')! as HTMLElement;
const elHintText = document.getElementById('scr-hint-text')!;
const elHintBtn   = document.getElementById('scr-hint-btn')! as HTMLButtonElement;
const elShuffleBtn = document.getElementById('scr-shuffle-btn')! as HTMLButtonElement;
const elClearBtn   = document.getElementById('scr-clear-btn')! as HTMLButtonElement;
const elSpeakBtn   = document.getElementById('scr-speak-btn')! as HTMLButtonElement;

function _speak(word: string): void {
  (window.speak as SpeakFn | undefined)?.(word, elSpeakBtn);
}

function build(): void {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  const filtered = pool.filter(w => /^[A-Za-z]+$/.test(w[0]) && w[0].length >= 4 && w[0].length <= 9);
  const fallback = pool.filter(w => /^[A-Za-z]+$/.test(w[0]));
  scrDeck = (filtered.length >= SIZE ? filtered : fallback.length >= SIZE ? fallback : pool).slice(0, SIZE);
  scrIdx = scrOk = scrFail = 0; scrAnswered = false;
}

function open(): void {
  build();
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  overlay.style.display = 'flex';
  renderQ();
}
function close(): void { overlay.style.display = 'none'; }

function shuffleWord(word: string): string[] {
  const chars = word.toLowerCase().split('');
  if (chars.length <= 1) return chars;
  let shuffled = _shuf(chars);
  let tries = 0;
  while (shuffled.join('') === chars.join('') && tries < 10) {
    shuffled = _shuf(chars);
    tries++;
  }
  return shuffled;
}

function renderQ(): void {
  if (scrIdx >= scrDeck.length) { showFinal(); return; }
  elClueBox.style.display = ''; elActionsRow.style.display = '';
  elAnswer.style.display = ''; elLetters.style.display = '';
  const w = scrDeck[scrIdx];
  scrAnswered = false; scrHintsLeft = 3; scrFailedThis = false;
  elResult.textContent = ''; elNext.style.display = 'none';
  elHintText.textContent = ''; elHintText.style.display = 'none';
  elSub.textContent = `${t('scramble.word')} ${scrIdx+1} ${t('common.of')} ${SIZE}`;
  elPbar.style.width = (scrIdx / SIZE * 100) + '%';
  elOk.textContent = String(scrOk); elFail.textContent = String(scrFail);
  elHintBtn.disabled = false;
  elHintBtn.textContent = t('scramble.hintBtn').replace('{n}', String(scrHintsLeft));
  elShuffleBtn.disabled = false; elClearBtn.disabled = false;

  elTransl.textContent = w[1];
  const ipaRaw = w[4] ?? '';
  elIpa.textContent = decodeIpa(ipaRaw);
  elSpeakBtn.onclick = () => _speak(w[0]);

  const chars = shuffleWord(w[0]);
  scrLetters = chars.map(ch => ({ ch, used: false }));
  scrAnswer = [];
  scrTileOrder = scrLetters.map((_, i) => i);

  renderTiles();
  elNext.textContent = scrIdx >= scrDeck.length-1 ? t('quiz.finish') : t('quiz.next');
}

function renderTiles(): void {
  elAnswer.innerHTML = '';
  scrAnswer.forEach((idx, pos) => {
    const btn = document.createElement('button');
    btn.textContent = scrLetters[idx].ch.toUpperCase();
    btn.className = 'scr-tile scr-tile-placed';
    btn.disabled = scrAnswered;
    btn.addEventListener('click', () => deselect(pos));
    elAnswer.appendChild(btn);
  });
  // Empty slots for remaining letters
  for (let i = scrAnswer.length; i < scrLetters.length; i++) {
    const span = document.createElement('span');
    span.className = 'scr-tile scr-tile-empty';
    elAnswer.appendChild(span);
  }

  elLetters.innerHTML = '';
  scrTileOrder.forEach(idx => {
    if (scrLetters[idx].used) return;
    const btn = document.createElement('button');
    btn.textContent = scrLetters[idx].ch.toUpperCase();
    btn.className = 'scr-tile';
    btn.disabled = scrAnswered;
    btn.addEventListener('click', () => select(idx));
    elLetters.appendChild(btn);
  });
}

function select(idx: number): void {
  if (scrAnswered || scrLetters[idx].used) return;
  scrLetters[idx].used = true;
  scrAnswer.push(idx);
  renderTiles();
  if (scrAnswer.length === scrLetters.length) check();
}

function deselect(pos: number): void {
  if (scrAnswered) return;
  const idx = scrAnswer[pos];
  scrLetters[idx].used = false;
  scrAnswer.splice(pos, 1);
  renderTiles();
}

function clearAnswer(): void {
  if (scrAnswered) return;
  scrAnswer.forEach(idx => { scrLetters[idx].used = false; });
  scrAnswer = [];
  renderTiles();
}

function removeLastLetter(): void {
  if (scrAnswered || !scrAnswer.length) return;
  deselect(scrAnswer.length - 1);
}

function shuffleTiles(): void {
  if (scrAnswered) return;
  scrTileOrder = _shuf(scrTileOrder);
  renderTiles();
}

function check(): void {
  const w = scrDeck[scrIdx];
  const answer = scrAnswer.map(idx => scrLetters[idx].ch).join('');
  const target  = w[0].toLowerCase();

  if (answer === target) {
    scrAnswered = true;
    elHintBtn.disabled = true; elShuffleBtn.disabled = true; elClearBtn.disabled = true;
    renderTiles();
    if (scrFailedThis) {
      scrFail++;
      elResult.innerHTML = `<span style="color:#e74c3c">${t('quiz.correctMsg')}</span>`;
    } else {
      scrOk++;
      elResult.innerHTML = `<span style="color:#27ae60">${t('quiz.correctMsg')}</span>`;
      try { addCombo(); } catch(e){}
    }
    if (scrFailedThis) {
      try { breakCombo(); } catch(e){}
      recordMistake(w[0]);
    }
    recordModeAnswer('scramble', !scrFailedThis);
    elOk.textContent = String(scrOk); elFail.textContent = String(scrFail);
    elNext.style.display = 'inline-block';
  } else {
    scrFailedThis = true;
    elResult.innerHTML = `<span style="color:#e74c3c">${t('scramble.wrongMsg')}</span>`;
    setTimeout(() => {
      elResult.textContent = '';
      clearAnswer();
    }, 700);
  }
}

function showFinal(): void {
  elScRow.style.display = 'none'; elFinal.style.display = 'block';
  elClueBox.style.display = 'none'; elActionsRow.style.display = 'none';
  elAnswer.style.display = 'none'; elLetters.style.display = 'none';
  const pct = Math.round(scrOk / SIZE * 100);
  document.getElementById('scr-final-emoji')!.textContent = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  document.getElementById('scr-final-title')!.textContent = pct===100?t('quiz.perfectTitle'):pct>=80?t('quiz.greatTitle'):pct>=60?t('quiz.goodTitle'):t('tempo.practiceTitle');
  document.getElementById('scr-final-desc')!.textContent  = `${scrOk} ${t('common.of')} ${SIZE} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = t('write.completed');
  recordModeComplete('scramble');
}

// Hint: auto-place the next correct letter
elHintBtn.addEventListener('click', () => {
  if (scrAnswered || scrHintsLeft <= 0) return;
  const w = scrDeck[scrIdx];
  const target = w[0].toLowerCase();
  const nextCh = target[scrAnswer.length];
  const idx = scrLetters.findIndex(tile => !tile.used && tile.ch === nextCh);
  if (idx === -1) return;
  scrHintsLeft--;
  select(idx);
  elHintBtn.textContent = scrHintsLeft > 0 ? t('scramble.hintBtn').replace('{n}', String(scrHintsLeft)) : t('scramble.hintNone');
  elHintBtn.disabled = scrHintsLeft <= 0 || scrAnswered;
});

elShuffleBtn.addEventListener('click', shuffleTiles);
elClearBtn.addEventListener('click', removeLastLetter);
elNext.addEventListener('click', () => { scrIdx++; renderQ(); });
document.getElementById('btn-scramble')?.addEventListener('click', open);
document.getElementById('scr-close')?.addEventListener('click', close);
document.getElementById('scr-exit')?.addEventListener('click', close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
document.getElementById('scr-restart')?.addEventListener('click', () => {
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  build(); renderQ();
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
});
