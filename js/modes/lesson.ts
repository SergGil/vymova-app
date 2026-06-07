// English Words App — js/modes/lesson.ts
// 📚 LESSON MODE
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo, flashCard, getComboMult } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { speakBtn, decodeIpa } from '../core/ui-helpers.ts';
import type { WordEntry } from '../../src/types.js';

const N = 5;
const PHASE_LABELS = ['Флешкарти', 'Тест', 'Письмо'];

let lWords: WordEntry[] = [], lPhase = 0, lStep = 0, lScores = [0, 0, 0];
let lAnswered = false, lFlipped = false;

const oOverlay  = document.getElementById('lesson-overlay')!;
const elSub     = document.getElementById('lesson-subtitle')!;
const elMbar    = document.getElementById('lesson-mbar')!   as HTMLElement;
const elDir     = document.getElementById('lesson-dir')!;
const elWord    = document.getElementById('lesson-word')!;
const elIpa     = document.getElementById('lesson-ipa')!;
const elReveal  = document.getElementById('lesson-reveal')! as HTMLElement;
const elTransl  = document.getElementById('lesson-transl')!;
const elOpts    = document.getElementById('lesson-opts')!   as HTMLElement;
const elInput   = document.getElementById('lesson-input')!  as HTMLInputElement;
const elResult  = document.getElementById('lesson-result')!;
const elFinal   = document.getElementById('lesson-final')!  as HTMLElement;
const elPhTag   = document.getElementById('lesson-phase-tag')!;
const btnReveal = document.getElementById('lb-reveal')!     as HTMLElement;
const btnKnow   = document.getElementById('lb-know')!       as HTMLElement;
const btnSkip   = document.getElementById('lb-skip')!       as HTMLElement;
const btnSubmit = document.getElementById('lb-submit')!     as HTMLElement;
const btnNext   = document.getElementById('lb-next')!       as HTMLElement;

type PlaySound = (s: string) => void;

function open(): void {
  const pool = _shuf((state.deck.length >= N ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  lWords = pool.slice(0, N);
  lPhase = 0; lStep = 0; lScores = [0, 0, 0]; lAnswered = false; lFlipped = false;
  elFinal.style.display = 'none'; oOverlay.style.display = 'flex'; renderStep();
}
function close(): void { oOverlay.style.display = 'none'; }

function updateMeta(): void {
  const total = lPhase * N + lStep;
  elSub.textContent = `Крок ${total + 1} з ${PHASE_LABELS.length * N}`;
  elMbar.style.width = (total / (PHASE_LABELS.length * N) * 100) + '%';
  elPhTag.textContent = PHASE_LABELS[lPhase] ?? '';
}

function resetUI(): void {
  lAnswered = false; lFlipped = false;
  elResult.textContent = ''; elReveal.style.display = 'none';
  elOpts.innerHTML = ''; elOpts.style.display = 'none';
  elInput.style.display = 'none'; elInput.value = ''; elInput.style.borderColor = '';
  [btnReveal, btnKnow, btnSkip, btnSubmit, btnNext].forEach(b => b.style.display = 'none');
}

function renderStep(): void {
  if (lPhase >= PHASE_LABELS.length) { showFinal(); return; }
  const w = lWords[lStep];
  resetUI(); updateMeta();
  if (lPhase === 0) renderFlash(w);
  else if (lPhase === 1) renderQuiz(w);
  else renderWrite(w);
}

function renderFlash(w: WordEntry): void {
  elDir.textContent = 'Що означає це слово?';
  elWord.textContent = w[0];
  elWord.appendChild(speakBtn(w[0], 'en-US'));
  elIpa.textContent = decodeIpa(w[4] ?? '');
  elTransl.textContent = w[1];
  document.getElementById('lesson-ua-ex')!.textContent = '';
  document.getElementById('lesson-en-ex')!.innerHTML = '';
  btnReveal.style.display = 'inline-block';
}

btnReveal.addEventListener('click', () => {
  if (lPhase !== 0 || lFlipped) return;
  lFlipped = true;
  const w = lWords[lStep];
  const enExSrc = w[2] ?? '';
  const enExEl = document.getElementById('lesson-en-ex')!;
  if (enExSrc.includes('<b>')) {
    enExEl.innerHTML = enExSrc;
  } else {
    const ew = w[0].replace(/\s*\([^)]*\)/g, '').replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
    const parts = ew.split(/\s+/).filter(Boolean).map(p => p + '\\w*');
    enExEl.innerHTML = enExSrc.replace(new RegExp('(' + parts.join('\\s+') + ')', 'i'), '<b>$1</b>');
  }
  document.getElementById('lesson-ua-ex')!.textContent = w[3] ?? '';
  elReveal.style.display = 'block';
  btnReveal.style.display = 'none';
  btnKnow.style.display = 'inline-block'; btnSkip.style.display = 'inline-block';
});

btnKnow.addEventListener('click', () => {
  if (lPhase !== 0) return;
  lScores[0]++;
  try { addCombo(); flashCard(true); (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
  advance();
});
btnSkip.addEventListener('click', () => {
  if (lPhase !== 0) return;
  try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
  advance();
});

function renderQuiz(w: WordEntry): void {
  elDir.textContent = 'Оберіть переклад:';
  elWord.textContent = w[1]; elIpa.textContent = '';
  // No speak for UA word
  const correct = w[0];
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  const wrongs: string[] = [];
  const used: Record<string, boolean> = { [w[0].toLowerCase()]: true };
  for (const pw of pool) {
    if (wrongs.length >= 3) break;
    const k = pw[0].toLowerCase();
    if (used[k]) continue; used[k] = true; wrongs.push(pw[0]);
  }
  const allOpts = _shuf([correct, ...wrongs]);
  elOpts.style.display = 'flex';
  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option'; btn.dataset.answer = opt;
    btn.innerHTML = `<span class="opt-num">${i + 1}</span> ${opt}`;
    btn.addEventListener('click', () => {
      if (lAnswered) return;
      lAnswered = true;
      elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => b.disabled = true);
      if (opt === correct) {
        btn.classList.add('correct'); lScores[1]++;
        elResult.innerHTML = '<span style="color:#27ae60">✓ Правильно!</span>';
        try { addCombo(); (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
        recordModeAnswer('lesson', true);
      } else {
        btn.classList.add('wrong');
        elResult.innerHTML = `<span style="color:#e74c3c">✗ Правильно: <b>${correct}</b></span>`;
        elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => { if (b.dataset.answer === correct) b.classList.add('reveal'); });
        try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
        recordMistake(lWords[lStep][0]);
        recordModeAnswer('lesson', false);
      }
      btnNext.textContent = (lPhase === PHASE_LABELS.length-1 && lStep === N-1) ? '🏆 Фініш!' : 'Наступне →'; btnNext.style.display = 'inline-block';
    });
    elOpts.appendChild(btn);
  });
}

function renderWrite(w: WordEntry): void {
  elDir.textContent = 'Введіть переклад англійською:';
  elWord.textContent = w[1]; elIpa.textContent = '';
  elInput.style.display = 'block'; btnSubmit.style.display = 'inline-block';
  setTimeout(() => { try { elInput.focus(); } catch (e) {} }, 60);
}

function submitLesson(): void {
  if (lPhase !== 2 || lAnswered) return;
  const w = lWords[lStep];
  const inp = elInput.value.trim().toLowerCase();
  const correct = w[0].toLowerCase();
  const ok = inp === correct || (correct.length > 3 && lev(inp, correct) <= 1);
  lAnswered = true;
  if (ok) {
    lScores[2]++; elInput.style.borderColor = '#27ae60';
    elResult.innerHTML = '<span style="color:#27ae60">✓ Правильно!</span>';
    try { addCombo(); (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
    recordModeAnswer('lesson', true);
  } else {
    elInput.style.borderColor = '#e74c3c';
    elResult.innerHTML = `<span style="color:#e74c3c">✗ Правильно: <b>${w[0]}</b></span>`;
    try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
    recordMistake(w[0]);
    recordModeAnswer('lesson', false);
  }
  btnSubmit.style.display = 'none'; btnNext.textContent = (lPhase === PHASE_LABELS.length-1 && lStep === N-1) ? '🏆 Фініш!' : 'Наступне →'; btnNext.style.display = 'inline-block';
}

btnSubmit.addEventListener('click', submitLesson);
elInput.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') { if (!lAnswered) submitLesson(); else advance(); }
});
btnNext.addEventListener('click', advance);

function advance(): void {
  lStep++;
  if (lStep >= N) { lPhase++; lStep = 0; }
  renderStep();
}

function showFinal(): void {
  const total = lScores[0] + lScores[1] + lScores[2];
  const max = N * PHASE_LABELS.length, pct = Math.round(total / max * 100);
  elMbar.style.width = '100%'; elSub.textContent = 'Завершено!';
  elOpts.style.display = 'none'; elInput.style.display = 'none';
  elResult.textContent = ''; elReveal.style.display = 'none';
  [btnReveal, btnKnow, btnSkip, btnSubmit, btnNext].forEach(b => b.style.display = 'none');
  elFinal.style.display = 'block';
  recordModeComplete('lesson');
  document.getElementById('lf-stars')!.textContent = pct >= 95 ? '⭐⭐⭐' : pct >= 65 ? '⭐⭐' : '⭐';
  const emoji = pct === 100 ? '🏆' : pct >= 65 ? '🎉' : '💪';
  document.getElementById('lf-title')!.textContent = emoji + (pct===100?' Ідеально!':pct>=65?' Чудово!':" Ще попрацюємо!");
  document.getElementById('lf-score')!.textContent = `${total} з ${max} правильно (${pct}%)`;
  const mult = getComboMult(), xp = total * 5 * mult;
  document.getElementById('lf-xp')!.textContent = `+${xp} XP${mult > 1 ? ` (×${mult} COMBO!)` : ''}`;
  if (pct >= 80) try { (window.playSound as PlaySound | undefined)?.('goal'); } catch (e) {}
}

document.getElementById('btn-lesson')?.addEventListener('click', open);
document.getElementById('lesson-close')?.addEventListener('click', close);
document.getElementById('lesson-done')?.addEventListener('click', close);
oOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === oOverlay) close(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (oOverlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
  if ((e.key === 'ArrowRight' || e.key === ' ') && lAnswered && lPhase > 0 && document.activeElement !== elInput) {
    e.preventDefault(); advance();
  }
});
