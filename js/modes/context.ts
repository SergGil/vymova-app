// English Words App — js/modes/context.ts
// 🔍 Context Mode: guess word meaning from context sentence
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 8, NUM_OPTS = 4;

let ctxDeck:  WordEntry[] = [];
let ctxIdx    = 0, ctxOk = 0, ctxFail = 0;
let ctxAnswered = false;

// ── DOM refs ──────────────────────────────────────────────────
const overlay  = document.getElementById('ctx-overlay')!  as HTMLElement;
const elSub    = document.getElementById('ctx-subtitle')!;
const elPbar   = document.getElementById('ctx-pbar')!     as HTMLElement;
const elOk     = document.getElementById('ctx-ok')!;
const elFail   = document.getElementById('ctx-fail')!;
const elSent   = document.getElementById('ctx-sentence')! as HTMLElement;
const elHint   = document.getElementById('ctx-hint')!     as HTMLElement;
const elOpts   = document.getElementById('ctx-options')!  as HTMLElement;
const elResult = document.getElementById('ctx-result')!;
const elNext   = document.getElementById('ctx-next')!     as HTMLElement;
const elFinal  = document.getElementById('ctx-final')!    as HTMLElement;
const elScRow  = document.getElementById('ctx-score-row')! as HTMLElement;

function _getExample(w: WordEntry): string {
  return w[2] ?? '';
}

function _hasGoodExample(w: WordEntry): boolean {
  const ex = _getExample(w);
  return ex.length >= 15 && ex.toLowerCase().includes(w[0].toLowerCase().split(' ')[0]);
}

function build(): void {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  ctxDeck = pool.filter(_hasGoodExample).slice(0, SIZE);
  if (ctxDeck.length < 4) {
    // fallback: take any words with examples
    ctxDeck = _shuf((W as unknown as WordEntry[]).filter(w => _getExample(w).length >= 15)).slice(0, SIZE);
  }
  ctxIdx = ctxOk = ctxFail = 0; ctxAnswered = false;
}

function open(): void {
  build();
  if (!ctxDeck.length) {
    elSent.innerHTML = `<div style="text-align:center;color:var(--text3);padding:16px;">${t('ctx.noWords')}</div>`;
    overlay.style.display = 'flex'; return;
  }
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  overlay.style.display = 'flex';
  renderQ();
}
function close(): void { overlay.style.display = 'none'; }

function renderQ(): void {
  if (ctxIdx >= ctxDeck.length) { showFinal(); return; }
  const w = ctxDeck[ctxIdx];
  ctxAnswered = false;
  elResult.textContent = ''; elNext.style.display = 'none';
  elSub.textContent = `${t('ctx.contextWord')} ${ctxIdx+1} ${t('common.of')} ${ctxDeck.length}`;
  elPbar.style.width = (ctxIdx / ctxDeck.length * 100) + '%';
  elOk.textContent = String(ctxOk); elFail.textContent = String(ctxFail);

  // Build sentence with word HIDDEN as ___
  const ex = _getExample(w);
  const wordBase = w[0].split(' ')[0].toLowerCase();
  const hiddenEx = ex.replace(new RegExp(wordBase + '\\w*', 'gi'), '___');
  elSent.innerHTML = `<div style="font-style:italic;font-size:.95rem;color:var(--text);line-height:1.6;">"${hiddenEx}"</div>`;

  // IPA hint (hidden initially)
  const ipaRaw = w[4] ?? '';
  elHint.style.display = 'none';
  elHint.textContent = ipaRaw ? `${t('ctx.hintColon')} ${ipaRaw}` : `${t('ctx.firstLetterColon')} ${w[0][0].toUpperCase()}`;

  // Build 4 options (1 correct + 3 wrong)
  const correct = w[1];
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS-1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase()); wrongs.push(pw[1]);
  }
  const allOpts = _shuf([correct, ...wrongs]);
  elOpts.innerHTML = '';
  allOpts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.dataset.translation = opt;
    btn.innerHTML = `<span class="opt-num">${i+1}</span> ${opt}`;
    btn.addEventListener('click', () => checkAnswer(btn, opt, correct, w));
    elOpts.appendChild(btn);
  });
}

function checkAnswer(btn: HTMLButtonElement, chosen: string, correct: string, w: WordEntry): void {
  if (ctxAnswered) return;
  ctxAnswered = true;
  elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => b.disabled = true);
  const ok = chosen === correct;
  btn.classList.add(ok ? 'correct' : 'wrong');
  if (!ok) {
    elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b => {
      if (b.dataset.translation === correct) b.classList.add('reveal');
    });
    recordMistake(w[0]);
  }
  if (ok) ctxOk++; else ctxFail++;
  elOk.textContent = String(ctxOk); elFail.textContent = String(ctxFail);
  // Reveal the full sentence with word highlighted
  const ex = _getExample(w);
  const wordBase = w[0].split(' ')[0].toLowerCase();
  const revealedEx = ex.replace(new RegExp(`(${wordBase}\\w*)`, 'gi'),
    `<b style="color:var(--accent);">$1</b>`);
  elSent.innerHTML =
    `<div style="font-style:italic;font-size:.9rem;color:var(--text);line-height:1.6;margin-bottom:8px;">"${revealedEx}"</div>` +
    `<div style="font-size:.82rem;font-weight:700;color:var(--text);">${w[0]}</div>` +
    `<div style="font-size:.78rem;color:var(--text2);">${w[1]}</div>`;
  elResult.innerHTML = ok ? `<span style="color:#27ae60">${t('quiz.correctMsg')}</span>` : `<span style="color:#e74c3c">✗ ${correct}</span>`;
  try { ok ? addCombo() : breakCombo(); } catch (e) {}
  recordModeAnswer('context', ok);
  elNext.textContent = ctxIdx >= ctxDeck.length-1 ? t('quiz.finish') : t('quiz.next');
  elNext.style.display = 'inline-block';
}

function showFinal(): void {
  elScRow.style.display = 'none'; elFinal.style.display = 'block';
  const pct = Math.round(ctxOk / ctxDeck.length * 100);
  document.getElementById('ctx-final-emoji')!.textContent = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  document.getElementById('ctx-final-title')!.textContent = pct===100?t('quiz.perfectTitle'):pct>=80?t('quiz.greatTitle'):pct>=60?t('quiz.goodTitle'):t('listen.keepGoingTitle');
  document.getElementById('ctx-final-desc')!.textContent  = `${ctxOk} ${t('common.of')} ${ctxDeck.length} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = t('write.completed');
  recordModeComplete('context');
}

// Hint button
document.getElementById('ctx-hint-btn')?.addEventListener('click', () => {
  if (!ctxAnswered) elHint.style.display = 'block';
});

document.getElementById('btn-context')?.addEventListener('click', open);
document.getElementById('ctx-close')?.addEventListener('click', close);
document.getElementById('ctx-exit')?.addEventListener('click', close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
elNext.addEventListener('click', () => { ctxIdx++; renderQ(); });
document.getElementById('ctx-restart')?.addEventListener('click', () => { build(); renderQ(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
  if (['1','2','3','4'].includes(e.key) && !ctxAnswered) {
    e.preventDefault();
    elOpts.querySelectorAll<HTMLButtonElement>('.quiz-option:not(:disabled)')[parseInt(e.key)-1]?.click();
  }
  if ((e.key === 'ArrowRight' || e.key === ' ') && ctxAnswered) { e.preventDefault(); ctxIdx++; renderQ(); }
});
