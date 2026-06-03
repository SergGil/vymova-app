// English Words App — js/modes/listening.ts
// 🔊 LISTENING MODE
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
let lDeck: WordEntry[] = [], lIdx = 0, lOk = 0, lFail = 0;
let lAnswered = false, lWord: WordEntry | null = null;

const oOverlay   = document.getElementById('listen-overlay')!;
const elSub      = document.getElementById('listen-subtitle')!;
const elPbar     = document.getElementById('listen-pbar')!    as HTMLElement;
const elOk       = document.getElementById('listen-ok')!;
const elFail     = document.getElementById('listen-fail')!;
const elOpts     = document.getElementById('listen-options')!;
const elResult   = document.getElementById('listen-result')!;
const elNext     = document.getElementById('listen-next')!    as HTMLElement;
const elFinal    = document.getElementById('listen-final')!   as HTMLElement;
const elScRow    = document.getElementById('listen-score-row')! as HTMLElement;
const elPlayBtn  = document.getElementById('listen-play-btn')!;

type Speak = (text: string, btn: HTMLElement) => void;
type PlaySound = (sound: string) => void;

function build(): void {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as WordEntry[]);
  lDeck = pool.slice(0, SIZE);
  lIdx = lOk = lFail = 0;
  lAnswered = false;
}

function playWord(): void {
  if (!lWord) return;
  elPlayBtn.classList.add('speaking');
  try { (window.speak as Speak | undefined)?.(lWord[0], elPlayBtn as HTMLElement); }
  catch (e) { elPlayBtn.classList.remove('speaking'); }
}

function open(): void { build(); elFinal.style.display = 'none'; elScRow.style.display = 'flex'; oOverlay.style.display = 'flex'; renderQ(); }
function close(): void {
  oOverlay.style.display = 'none';
  try { window.speechSynthesis?.cancel(); } catch (e) {}
}

function renderQ(): void {
  if (lIdx >= lDeck.length) { showFinal(); return; }
  lWord = lDeck[lIdx]; lAnswered = false;
  elResult.textContent = ''; elNext.style.display = 'none';
  elSub.textContent = 'Слово ' + (lIdx + 1) + ' з ' + lDeck.length;
  elPbar.style.width = (lIdx / lDeck.length * 100) + '%';
  elOk.textContent = String(lOk); elFail.textContent = String(lFail);

  const correct = lWord[1];
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [lWord[0].toLowerCase()]: true };
  for (let i = 0; i < pool.length && wrongs.length < 3; i++) {
    const k = pool[i][0].toLowerCase();
    if (used[k]) continue; used[k] = true; wrongs.push(pool[i][1]);
  }
  const allOpts = _shuf([correct, ...wrongs]);
  elOpts.innerHTML = '';
  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.dataset.answer = opt;
    btn.innerHTML = `<span class="opt-num">${i + 1}</span> ${opt}`;
    btn.addEventListener('click', () => {
      if (lAnswered) return;
      lAnswered = true; lIdx++;
      elOpts.querySelectorAll('.quiz-option').forEach(b => (b as HTMLButtonElement).disabled = true);
      if (opt === correct) {
        btn.classList.add('correct'); lOk++;
        elResult.innerHTML = `<span style="color:#27ae60">✓ Правильно! — <b>${lWord![0]}</b></span>`;
        try { addCombo(); (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
        recordModeAnswer('listen', true);
      } else {
        btn.classList.add('wrong'); lFail++;
        elResult.innerHTML = `<span style="color:#e74c3c">✗ Це <b>${lWord![0]}</b> — «${correct}»</span>`;
        elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => { if (b.dataset.answer === correct) b.classList.add('reveal'); });
        try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
        recordMistake(lWord![0]);
        recordModeAnswer('listen', false);
      }
      elOk.textContent = String(lOk); elFail.textContent = String(lFail);
      elNext.textContent = (lIdx >= lDeck.length - 1) ? '🏆 Фініш!' : 'Далі →';
      elNext.style.display = 'inline-block';
    });
    elOpts.appendChild(btn);
  });
  setTimeout(playWord, 400);
}

function showFinal(): void {
  elScRow.style.display = 'none'; elFinal.style.display = 'block';
  recordModeComplete('listen');
  const pct = Math.round(lOk / lDeck.length * 100);
  const em = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  document.getElementById('listen-final-emoji')!.textContent = em;
  document.getElementById('listen-final-title')!.textContent = pct === 100 ? 'Ідеально!' : pct >= 80 ? 'Чудово!' : pct >= 60 ? 'Непогано!' : 'Продовжуй!';
  document.getElementById('listen-final-desc')!.textContent = `${lOk} з ${lDeck.length} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = 'Завершено';
}

elPlayBtn.addEventListener('click', playWord);
document.getElementById('btn-listen')?.addEventListener('click', open);
document.getElementById('listen-close')?.addEventListener('click', close);
document.getElementById('listen-exit')?.addEventListener('click', close);
oOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === oOverlay) close(); });
elNext.addEventListener('click', () => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; renderQ(); });
document.getElementById('listen-restart')?.addEventListener('click', () => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; build(); renderQ(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (oOverlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
  if (e.key === ' ' && !lAnswered) { e.preventDefault(); playWord(); }
  if (e.key === 'ArrowRight' && lAnswered) { e.preventDefault(); elFinal.style.display = 'none'; elScRow.style.display = 'flex'; renderQ(); }
  if (['1','2','3','4'].includes(e.key) && !lAnswered) {
    const btns = elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option:not(:disabled)');
    btns[parseInt(e.key) - 1]?.click();
  }
});
