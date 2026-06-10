// English Words App — js/modes/spelling-bee.ts
// 🐝 Spelling Bee: hear the word via TTS → type its spelling
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { lev } from '../core/distance.ts';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordModeAnswer, recordMistake } from '../features/game.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import type { SpeakFn } from '../core/ui-helpers.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
let beeDeck:  WordEntry[] = [];
let beeIdx    = 0, beeOk = 0, beeFail = 0;
let beeAnswered = false;
let beeHintsLeft = 3;

// ── DOM ───────────────────────────────────────────────────────
const overlay  = document.getElementById('bee-overlay')!  as HTMLElement;
const elSub    = document.getElementById('bee-subtitle')!;
const elPbar   = document.getElementById('bee-pbar')!     as HTMLElement;
const elOk     = document.getElementById('bee-ok')!;
const elFail   = document.getElementById('bee-fail')!;
const elTransl = document.getElementById('bee-transl')!;
const elIpa    = document.getElementById('bee-ipa')!;
const elInput  = document.getElementById('bee-input')!    as HTMLInputElement;
const elResult = document.getElementById('bee-result')!;
const elNext   = document.getElementById('bee-next')!     as HTMLElement;
const elFinal  = document.getElementById('bee-final')!    as HTMLElement;
const elScRow  = document.getElementById('bee-score-row')! as HTMLElement;
const elHintText = document.getElementById('bee-hint-text')!;
const elHintBtn  = document.getElementById('bee-hint-btn')! as HTMLButtonElement;
const elSpeakBtn = document.getElementById('bee-speak-btn')! as HTMLButtonElement;

function _speak(word: string): void {
  (window.speak as SpeakFn | undefined)?.(word, elSpeakBtn);
}

function build(): void {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  // Prefer words that are A2+ (not trivially short)
  const filtered = pool.filter(w => w[0].length >= 4);
  beeDeck = (filtered.length >= SIZE ? filtered : pool).slice(0, SIZE);
  beeIdx = beeOk = beeFail = 0; beeAnswered = false; beeHintsLeft = 3;
}

function open(): void {
  build();
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  overlay.style.display = 'flex';
  renderQ();
}
function close(): void { overlay.style.display = 'none'; }

function renderQ(): void {
  if (beeIdx >= beeDeck.length) { showFinal(); return; }
  const w = beeDeck[beeIdx];
  beeAnswered = false; beeHintsLeft = 3;
  elResult.textContent = ''; elNext.style.display = 'none';
  elHintText.textContent = ''; elHintText.style.display = 'none';
  elSub.textContent = `${t('bee.word')} ${beeIdx+1} ${t('common.of')} ${SIZE}`;
  elPbar.style.width = (beeIdx / SIZE * 100) + '%';
  elOk.textContent = String(beeOk); elFail.textContent = String(beeFail);
  elInput.value = ''; elInput.style.borderColor = ''; elInput.disabled = false;
  elHintBtn.disabled = false;
  elHintBtn.textContent = t('bee.hintBtn').replace('{n}', String(beeHintsLeft));

  // Show translation and IPA (the clues)
  elTransl.textContent = w[1];
  const ipaRaw = w[4] ?? '';
  elIpa.textContent = decodeIpa(ipaRaw);

  // Auto-speak the word
  setTimeout(() => _speak(w[0]), 300);
  setTimeout(() => { try { elInput.focus(); } catch (e) {} }, 400);

  // Update speak button
  elSpeakBtn.onclick = () => _speak(w[0]);
  elNext.textContent = beeIdx >= beeDeck.length-1 ? t('quiz.finish') : t('quiz.next');
}

function submit(): void {
  if (beeAnswered) return;
  const w = beeDeck[beeIdx];
  const answer = w[0].toLowerCase().trim();
  const input  = elInput.value.toLowerCase().trim();
  // Guard: never accept empty input
  if (!input) {
    elInput.style.borderColor = '#e74c3c';
    elInput.placeholder = t('bee.emptyInput');
    setTimeout(() => { elInput.placeholder = t('bee.inputPlaceholder'); elInput.style.borderColor = ''; }, 1500);
    return;
  }
  const ok = input === answer || lev(input, answer) === 0;
  const close1 = input.length >= 3 && lev(input, answer) === 1; // near-miss only for non-trivial input

  beeAnswered = true;
  elInput.disabled = true;
  elHintBtn.disabled = true;
  elInput.style.borderColor = ok ? '#27ae60' : close1 ? '#f39c12' : '#e74c3c';

  if (ok) {
    beeOk++;
    elResult.innerHTML = `<span style="color:#27ae60">${t('quiz.correctMsg')}</span>`;
    try { addCombo(); } catch(e){}
  } else if (close1) {
    // Accept near-miss with minor penalty
    beeOk++;
    elResult.innerHTML = `<span style="color:#f39c12">${t('bee.almostMsg').replace('{w}', `<b>${w[0]}</b>`)}</span>`;
    try { addCombo(); } catch(e){}
  } else {
    beeFail++;
    elResult.innerHTML = `<span style="color:#e74c3c">${t('bee.wrongMsg').replace('{w}', `<b>${w[0]}</b>`)}</span>`;
    recordMistake(w[0]);
    try { breakCombo(); } catch(e){}
  }
  recordModeAnswer('spelling', ok || close1);
  elOk.textContent = String(beeOk); elFail.textContent = String(beeFail);
  elNext.style.display = 'inline-block';
  // Speak correct word after wrong answer
  if (!ok) setTimeout(() => _speak(w[0]), 600);
}

function showFinal(): void {
  elScRow.style.display = 'none'; elFinal.style.display = 'block';
  const pct = Math.round(beeOk / SIZE * 100);
  document.getElementById('bee-final-emoji')!.textContent = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  document.getElementById('bee-final-title')!.textContent = pct===100?t('quiz.perfectTitle'):pct>=80?t('quiz.greatTitle'):pct>=60?t('quiz.goodTitle'):t('tempo.practiceTitle');
  document.getElementById('bee-final-desc')!.textContent  = `${beeOk} ${t('common.of')} ${SIZE} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = t('write.completed');
  recordModeComplete('spelling');
}

// Hint: reveal letters progressively
elHintBtn.addEventListener('click', () => {
  if (beeAnswered || beeHintsLeft <= 0) return;
  const w = beeDeck[beeIdx];
  beeHintsLeft--;
  const revealCount = Math.ceil(w[0].length * (3 - beeHintsLeft) / 3);
  const hint = w[0].slice(0, revealCount) + '_'.repeat(Math.max(0, w[0].length - revealCount));
  elHintText.textContent = `💡 ${hint}`;
  elHintText.style.display = 'block';
  elHintBtn.textContent = beeHintsLeft > 0 ? t('bee.hintBtn').replace('{n}', String(beeHintsLeft)) : t('bee.hintNone');
  elHintBtn.disabled = beeHintsLeft <= 0;
});

elInput.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') { if (!beeAnswered) submit(); else { beeIdx++; renderQ(); } }
});
document.getElementById('bee-submit')?.addEventListener('click', submit);
elNext.addEventListener('click', () => { beeIdx++; renderQ(); });
document.getElementById('btn-spelling-bee')?.addEventListener('click', open);
document.getElementById('bee-close')?.addEventListener('click', close);
document.getElementById('bee-exit')?.addEventListener('click', close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
document.getElementById('bee-restart')?.addEventListener('click', () => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; build(); renderQ(); });
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (overlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
});
