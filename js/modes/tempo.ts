// English Words App — js/modes/tempo.ts
// ⚡ TEMPO MODE
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { speakBtn, decodeIpa } from '../core/ui-helpers.ts';
import type { WordEntry } from '../../src/types.js';

const tOverlay  = document.getElementById('tempo-overlay')!;
const tStart    = document.getElementById('tempo-start')!    as HTMLElement;
const tGame     = document.getElementById('tempo-game')!     as HTMLElement;
const tResult   = document.getElementById('tempo-result')!   as HTMLElement;
const tScore    = document.getElementById('tempo-score')!;
const tMiss     = document.getElementById('tempo-miss')!;
const tTimer    = document.getElementById('tempo-timer')!;
const tBar      = document.getElementById('tempo-tbar')!     as HTMLElement;
const tDir      = document.getElementById('tempo-dir')!;
const tWord     = document.getElementById('tempo-word')!;
const tIpa      = document.getElementById('tempo-ipa')!;
const tOpts     = document.getElementById('tempo-opts')!;
const tFeedback = document.getElementById('tempo-feedback')!;
const tBest     = document.getElementById('tempo-best')!;
const tResEmoji = document.getElementById('tempo-res-emoji')!;
const tResTitle = document.getElementById('tempo-res-title')!;
const tResScore = document.getElementById('tempo-res-score')!;
const tResBest  = document.getElementById('tempo-res-best')!;

let selectedSec = 60;
let score = 0, miss = 0;
let timerInterval: ReturnType<typeof setInterval> | null = null;
let timeLeft = 60;
let tempoDeck: WordEntry[] = [];
let tempoIdx = 0, isRunning = false;

function getBest(sec: number): number { return parseInt(localStorage.getItem(`tempo_best_${sec}`) ?? '0'); }
function setBest(sec: number, val: number): void { if (val > getBest(sec)) localStorage.setItem(`tempo_best_${sec}`, String(val)); }

document.querySelectorAll<HTMLButtonElement>('.tempo-time-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tempo-time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSec = parseInt(btn.dataset.sec ?? '60');
    updateBestLabel();
  });
});

function updateBestLabel(): void {
  const b = getBest(selectedSec);
  tBest.textContent = b > 0 ? `🏆 Рекорд: ${b} слів за ${selectedSec}с` : '';
}

document.getElementById('btn-tempo')?.addEventListener('click', () => {
  tStart.style.display = 'block'; tGame.style.display = 'none'; tResult.style.display = 'none';
  updateBestLabel(); tOverlay.style.display = 'flex';
});

function closeTempo(): void {
  if (timerInterval) clearInterval(timerInterval);
  isRunning = false; tOverlay.style.display = 'none';
}

document.getElementById('tempo-close-start')?.addEventListener('click', closeTempo);
document.getElementById('tempo-close-res')?.addEventListener('click', closeTempo);
tOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === tOverlay) closeTempo(); });

document.getElementById('tempo-go')?.addEventListener('click', startTempo);
document.getElementById('tempo-again')?.addEventListener('click', () => {
  tResult.style.display = 'none'; tStart.style.display = 'block'; updateBestLabel();
});

function startTempo(): void {
  score = 0; miss = 0; timeLeft = selectedSec;
  tempoDeck = _shuf(W.slice() as unknown as WordEntry[]); tempoIdx = 0; isRunning = true;
  tStart.style.display = 'none'; tResult.style.display = 'none'; tGame.style.display = 'block';
  tScore.textContent = '0'; tMiss.textContent = '0'; tTimer.textContent = String(timeLeft);
  tBar.style.transition = 'none'; tBar.style.width = '100%'; tFeedback.textContent = '';
  if (timerInterval) clearInterval(timerInterval);
  setTimeout(() => { tBar.style.transition = `width ${selectedSec}s linear`; tBar.style.width = '0%'; }, 50);
  timerInterval = setInterval(() => {
    timeLeft--;
    tTimer.textContent = String(timeLeft);
    tTimer.style.color = timeLeft <= 10 ? '#e74c3c' : 'var(--accent)';
    if (timeLeft <= 0) endTempo();
  }, 1000);
  showTempoQuestion();
}

function showTempoQuestion(): void {
  if (!isRunning) return;
  if (tempoIdx >= tempoDeck.length) { tempoDeck = _shuf(W.slice() as unknown as WordEntry[]); tempoIdx = 0; }
  const w = tempoDeck[tempoIdx];
  const isEnToUa = Math.random() < 0.5;
  const question = isEnToUa ? w[0] : w[1];
  const answer   = isEnToUa ? w[1] : w[0];
  tDir.textContent = isEnToUa ? 'Англійська → Українська' : 'Українська → Англійська';
  tWord.textContent = question;
  tIpa.textContent  = isEnToUa ? decodeIpa(w[2] ?? '') : '';
  if (isEnToUa) tWord.appendChild(speakBtn(question, 'en-US')); // only EN
  tFeedback.textContent = '';

  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const opt = isEnToUa ? pw[1] : pw[0];
    if (opt === answer) continue;
    wrongs.push(opt);
  }
  const allOpts = _shuf([answer, ...wrongs]);
  tOpts.innerHTML = '';
  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'tempo-opt'; btn.dataset.answer = opt;
    btn.innerHTML = `<span class="opt-num">${i + 1}</span> ${opt}`;
    btn.addEventListener('click', () => {
      if (!isRunning) return;
      tOpts.querySelectorAll<HTMLButtonElement>('.tempo-opt').forEach(b => b.disabled = true);
      if (opt === answer) {
        btn.classList.add('correct'); score++;
        tScore.textContent = String(score);
        tFeedback.innerHTML = '<span style="color:#27ae60">✓ Правильно!</span>';
        recordModeAnswer('tempo', true);
      } else {
        btn.classList.add('wrong'); miss++;
        tMiss.textContent = String(miss);
        tFeedback.innerHTML = `<span style="color:#e74c3c">✗ ${answer}</span>`;
        tOpts.querySelectorAll<HTMLButtonElement>('.tempo-opt').forEach(b => { if (b.dataset.answer === answer) b.classList.add('reveal'); });
        recordMistake(tempoDeck[tempoIdx][0]);
        recordModeAnswer('tempo', false);
      }
      tempoIdx++;
      setTimeout(() => { if (isRunning) showTempoQuestion(); }, opt === answer ? 400 : 900);
    });
    tOpts.appendChild(btn);
  });
}

function endTempo(): void {
  if (timerInterval) clearInterval(timerInterval);
  isRunning = false; tGame.style.display = 'none'; tResult.style.display = 'block';
  const total = score + miss, pct = total > 0 ? Math.round(score / total * 100) : 0;
  const best = getBest(selectedSec), isNew = score > best;
  setBest(selectedSec, score);
  const emoji = score===0?'😅':pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  const title = score===0?'Наступного разу!':pct===100?'Ідеально!':pct>=80?'Відмінно!':pct>=60?'Непогано!':'Тренуйся!';
  tResEmoji.textContent = emoji; tResTitle.textContent = title;
  recordModeComplete('tempo');
  tResScore.textContent = `✓ ${score} правильно  ✗ ${miss} помилок  (${pct}%)`;
  tResBest.textContent = isNew && score > 0 ? `🌟 Новий рекорд: ${score} слів!` : (getBest(selectedSec) > 0 ? `🏆 Рекорд: ${getBest(selectedSec)} слів` : '');
}

document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && tOverlay.style.display === 'flex') { closeTempo(); return; }
  if (isRunning && ['1','2','3','4'].includes(e.key)) {
    e.preventDefault();
    tOpts.querySelectorAll<HTMLButtonElement>('.tempo-opt:not(:disabled)')[parseInt(e.key) - 1]?.click();
  }
});
