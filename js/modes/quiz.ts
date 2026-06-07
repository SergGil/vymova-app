// English Words App — js/modes/quiz.ts
// 🧠 QUIZ MODE
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { speakBtn, decodeIpa } from '../core/ui-helpers.ts';
import type { WordEntry } from '../../src/types.js';

const QUIZ_SIZE = 10, QUICK_SIZE = 5, NUM_OPTIONS = 4;
let quizDeck: WordEntry[] = [], quizIdx = 0, quizCorrect = 0, quizWrong = 0;
let quizAnswered = false, quizWrongWords: WordEntry[] = [];

const overlay      = document.getElementById('quiz-overlay')!;
const panel        = document.getElementById('quiz-panel')!;
const btnOpen      = document.getElementById('btn-quiz')!;
const btnClose     = document.getElementById('quiz-close')!;
const btnNext      = document.getElementById('quiz-next')!       as HTMLElement;
const btnRestart   = document.getElementById('quiz-restart')!;
const btnRestartWrong = document.getElementById('quiz-restart-wrong')! as HTMLElement;
const btnExit      = document.getElementById('quiz-exit')!;
const elSubtitle   = document.getElementById('quiz-subtitle')!;
const elPbar       = document.getElementById('quiz-pbar')!       as HTMLElement;
const elCorrect    = document.getElementById('quiz-correct')!;
const elWrong      = document.getElementById('quiz-wrong')!;
const elDirLabel   = document.getElementById('quiz-dir-label')!;
const elWord       = document.getElementById('quiz-word')!;
const elIpa        = document.getElementById('quiz-ipa')!;
const elExample    = document.getElementById('quiz-example')!    as HTMLElement;
const elOptions    = document.getElementById('quiz-options')!    as HTMLElement;
const elResult     = document.getElementById('quiz-result-msg')!;
const elFinal      = document.getElementById('quiz-final')!      as HTMLElement;
const elScoreRow   = document.getElementById('quiz-score-row')!  as HTMLElement;
const elFinalEmoji = document.getElementById('quiz-final-emoji')!;
const elFinalTitle = document.getElementById('quiz-final-title')!;
const elFinalDesc  = document.getElementById('quiz-final-desc')!;

function buildDeck(sourceWords?: WordEntry[] | null, maxSize = QUIZ_SIZE): void {
  const src = sourceWords?.length ? sourceWords : (state.deck.length ? state.deck : W as unknown as WordEntry[]);
  quizDeck = _shuf(src.slice()).slice(0, Math.min(maxSize, src.length));
  quizIdx = 0; quizCorrect = 0; quizWrong = 0; quizWrongWords = []; quizAnswered = false;
}

function getWrongOptions(correctWord: WordEntry, answer: string, isEnToUa: boolean): string[] {
  const shuffled = _shuf(W.slice() as unknown as WordEntry[]);
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= NUM_OPTIONS - 1) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    const opt = isEnToUa ? w[1] : w[0];
    if (opt === answer) continue;
    options.push(opt);
  }
  return options;
}


function renderQuestion(): void {
  if (quizIdx >= quizDeck.length) { showFinal(); return; }
  const w = quizDeck[quizIdx];
  const isEnToUa = Math.random() < 0.5;
  const question = isEnToUa ? w[0] : w[1];
  const answer   = isEnToUa ? w[1] : w[0];
  quizAnswered = false; elResult.textContent = ''; btnNext.style.display = 'none';
  elSubtitle.textContent = `Питання ${quizIdx + 1} з ${quizDeck.length}`;
  elPbar.style.width = (quizIdx / quizDeck.length * 100) + '%';
  elCorrect.textContent = String(quizCorrect); elWrong.textContent = String(quizWrong);
  elDirLabel.textContent = isEnToUa ? 'Англійська → Українська' : 'Українська → Англійська';
  // Word: speak button only for EN words (inline, at end)
  elWord.textContent = question;
  if (isEnToUa) elWord.appendChild(speakBtn(question, 'en-US'));
  const rawIpa = w[4] ?? '';
  elIpa.textContent = isEnToUa ? decodeIpa(rawIpa) : '';
  const enEx = w[2] ?? '';
  const uaEx = w[3] ?? '';
  const uaExEl = document.getElementById('quiz-ua-ex') as (HTMLElement & { dataset: DOMStringMap }) | null;
  if (uaExEl) {
    uaExEl.textContent = '';
    (uaExEl as HTMLElement & { _enEx?: string; _uaEx?: string })._enEx = enEx;
    (uaExEl as HTMLElement & { _enEx?: string; _uaEx?: string })._uaEx = uaEx;
  }
  elExample.style.display = 'none';
  const allOpts = _shuf([answer, ...getWrongOptions(w, answer, isEnToUa)]);
  elOptions.innerHTML = '';
  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option'; btn.dataset.answer = opt;
    btn.innerHTML = `<span class="opt-num">${i + 1}</span> ${opt}`;
    btn.addEventListener('click', () => checkAnswer(btn, opt, answer, w));
    elOptions.appendChild(btn);
  });
  elOptions.dataset.answer = answer; elOptions.dataset.word = w[0];
}

function checkAnswer(btn: HTMLButtonElement, chosen: string, correct: string, wordObj: WordEntry): void {
  if (quizAnswered) return;
  quizAnswered = true;
  if (chosen === correct) {
    quizCorrect++; btn.classList.add('correct'); btn.innerHTML = '✓ ' + chosen;
    elResult.innerHTML = '<span style="color:#27ae60">✓ Правильно!</span>';
    try { addCombo(); } catch (e) {}
    recordModeAnswer('quiz', true);
  } else {
    quizWrong++; btn.classList.add('wrong'); btn.innerHTML = '✗ ' + chosen;
    elResult.innerHTML = '<span style="color:#e74c3c">✗ Неправильно</span>';
    try { breakCombo(); } catch (e) {}
    quizWrongWords.push(wordObj);
    recordMistake(wordObj[0]);
    recordModeAnswer('quiz', false);
    elOptions.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => {
      if (b.dataset.answer === correct && !b.classList.contains('wrong')) b.classList.add('reveal');
    });
  }
  elOptions.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => b.disabled = true);
  // Show BOTH examples after answering; EN gets 🔊 at end
  const uaEl = document.getElementById('quiz-ua-ex') as (HTMLElement & { _enEx?: string; _uaEx?: string }) | null;
  if (uaEl) {
    const enEx = uaEl._enEx ?? '';
    const uaEx = uaEl._uaEx ?? '';
    uaEl.innerHTML = '';
    if (enEx) {
      const enDiv = document.createElement('div');
      enDiv.style.cssText = 'font-size:.8rem;color:var(--text2);font-style:italic;margin-bottom:2px;';
      enDiv.textContent = enEx;
      enDiv.appendChild(speakBtn(enEx, 'en-US'));
      uaEl.appendChild(enDiv);
    }
    if (uaEx) {
      const uaDiv = document.createElement('div');
      uaDiv.style.cssText = 'font-size:.8rem;color:var(--text3);';
      uaDiv.textContent = uaEx; // no button for UA
      uaEl.appendChild(uaDiv);
    }
  }
  elCorrect.textContent = String(quizCorrect); elWrong.textContent = String(quizWrong);
  // Bug fix: last question → "Фініш 🏆"
  btnNext.textContent = (quizIdx >= quizDeck.length - 1) ? '🏆 Фініш!' : 'Наступне →';
  btnNext.style.display = 'inline-block';
}

// Ukrainian plural for "відповідь"
function _answersUa(n: number): string {
  if (n === 1) return '1 відповідь';
  if (n >= 2 && n <= 4) return `${n} відповіді`;
  return `${n} відповідей`;
}

// Check if this is a "retry wrong answers" session
let _isRetrySession = false;

function showFinal(): void {
  elOptions.innerHTML = ''; elResult.textContent = ''; btnNext.style.display = 'none';
  elScoreRow.style.display = 'none';
  const total = quizDeck.length, pct = Math.round(quizCorrect / total * 100);

  let emoji: string, title: string, desc: string;

  if (_isRetrySession && pct === 100) {
    // Special message for perfect retry session
    emoji = '🎯'; title = 'Помилки виправлено!';
    desc = total === 1
      ? 'Слово засвоєно — чудова робота!'
      : `Всі ${_answersUa(total)} в роботі над помилками — відмінно!`;
  } else if (pct === 100) {
    emoji = '🏆'; title = 'Ідеально!';
    desc = total === 1 ? '1 відповідь — і одразу правильно!' : `Всі ${_answersUa(total)} правильно!`;
  } else if (pct >= 80) {
    emoji = '🎉'; title = 'Чудово!';
    desc = `${_answersUa(quizCorrect)} з ${total} (${pct}%)`;
  } else if (pct >= 60) {
    emoji = '👍'; title = 'Непогано!';
    desc = `${_answersUa(quizCorrect)} з ${total} (${pct}%)`;
  } else if (pct >= 40) {
    emoji = '📚'; title = 'Ще попрацюємо!';
    desc = `${_answersUa(quizCorrect)} з ${total} (${pct}%). Повтори слова.`;
  } else {
    emoji = '💪'; title = 'Продовжуй вчити!';
    desc = `${_answersUa(quizCorrect)} з ${total} (${pct}%). Не здавайся!`;
  }

  elFinalEmoji.textContent = emoji; elFinalTitle.textContent = title; elFinalDesc.textContent = desc;
  btnRestartWrong.style.display = quizWrongWords.length ? 'inline-block' : 'none';
  if (quizWrongWords.length) {
    const wn = quizWrongWords.length;
    btnRestartWrong.textContent = `✗ Повторити ${wn === 1 ? '1 помилку' : wn < 5 ? wn + ' помилки' : wn + ' помилок'}`;
  }
  elFinal.style.display = 'block'; elPbar.style.width = '100%'; elSubtitle.textContent = 'Тест завершено';
  _isRetrySession = false;
  recordModeComplete('quiz');
}

function openQuiz(src?: WordEntry[] | null, maxSize?: number): void {
  _isRetrySession = false; // reset on every new session
  buildDeck(src, maxSize); elFinal.style.display = 'none'; elScoreRow.style.display = 'flex';
  overlay.className = 'open'; (panel as HTMLElement).scrollTop = 0; renderQuestion();
}

export function openQuickQuiz(): void {
  openQuiz(null, QUICK_SIZE);
}
function closeQuiz(): void { overlay.className = ''; }

btnOpen.addEventListener('click', () => openQuiz(null));
btnClose.addEventListener('click', closeQuiz);
btnExit.addEventListener('click', closeQuiz);
btnNext.addEventListener('click', () => { quizIdx++; renderQuestion(); });
btnRestart.addEventListener('click', () => { elFinal.style.display = 'none'; elScoreRow.style.display = 'flex'; buildDeck(null); renderQuestion(); });
btnRestartWrong.addEventListener('click', () => { const wc = quizWrongWords.slice(); _isRetrySession = true; elFinal.style.display = 'none'; elScoreRow.style.display = 'flex'; buildDeck(wc); renderQuestion(); });
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) closeQuiz(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && overlay.className === 'open') closeQuiz();
  if ((e.key === 'ArrowRight' || e.key === ' ') && overlay.className === 'open' && quizAnswered) { e.preventDefault(); quizIdx++; renderQuestion(); }
  if (overlay.className === 'open' && !quizAnswered && ['1','2','3','4'].includes(e.key)) {
    e.preventDefault();
    elOptions.querySelectorAll<HTMLButtonElement>('.quiz-option:not(:disabled)')[parseInt(e.key) - 1]?.click();
  }
});
