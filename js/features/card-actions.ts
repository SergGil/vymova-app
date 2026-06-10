// English Words App — js/features/card-actions.ts
// All flashcard interaction event listeners
import { state } from '../../src/state.ts';
import { sm2Update, buildSRSDeck, buildUnlearnedDeck, shuffle, updateSrsUI } from '../core/srs.ts';
import { saveKnown, saveKnownEs, saveSRS } from '../core/storage.ts';
import { getGameData, saveGameData } from './game.ts';
import { addCombo, breakCombo, flashCard } from './combo.ts';
import { openNoteModal, hasNote } from './notes.ts';
import { toggleBookmark } from './bookmarks.ts';
import { isPronuncSupported, showPronuncResult, startPronunciationCheck } from './pronunciation.ts';
import { getSelectedUkVoice, getSelectedEsVoice } from './voice.ts';
import { speak, _speakWithLang } from './speech.ts';
import { updateSimilarWords } from './similar-words.ts';
import { updateCollocations, updateWordFamilies } from './word-context.ts';
import { ES_MODES, getMode, esEntry as _esEntry } from './mode-utils.ts';
import { playSound } from '../core/audio.ts';
import { launchConfetti } from '../core/confetti.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

function _safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

function _activeKnown(): Set<string> {
  return ES_MODES.has(getMode())
    ? ((window as any).knownEs as Set<string>) ?? state.known
    : state.known;
}

// ── Card flip ─────────────────────────────────────────────────
document.getElementById('card')!.addEventListener('click', function() {
  if (!(window as any).flipped) {
    (window as any).flipped = true;
    document.getElementById('wtransl')!.className = 'transl show';
    document.getElementById('exua')!.className    = 'ex-ua show';
    _safe(() => updateSimilarWords());
    _safe(() => updateWordFamilies());
    _safe(() => updateCollocations());
  }
});

// ── Speak buttons ─────────────────────────────────────────────
document.getElementById('speak-word')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (!cw) return;
  const modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  if (modeVal === 'es-en' || modeVal === 'es-ua') {
    const es = _esEntry(cw[0]);
    if (es && getSelectedEsVoice()) { _speakWithLang(es[0], 'es-ES', this); return; }
  }
  speak(cw[0], this);
});

document.getElementById('speak-ex')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (!cw) return;
  const exEn    = cw[2] || '';
  const exUa    = cw[3] || '';
  const modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  if (ES_MODES.has(modeVal)) {
    const es        = _esEntry(cw[0]);
    const exEs      = es ? es[1] : '';
    const hasEsVoice = !!getSelectedEsVoice();
    if (modeVal === 'es-en' || modeVal === 'es-ua') {
      if (hasEsVoice && exEs) _speakWithLang(exEs, 'es-ES', this);
      else speak(exEn, this);
    } else if (modeVal === 'ua-es') {
      const hasUkVoice = !!getSelectedUkVoice();
      if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', this);
      else speak(exEn, this);
    } else {
      speak(exEn, this);
    }
    return;
  }
  if (modeVal === 'ua') {
    const hasUkVoice = !!getSelectedUkVoice();
    if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', this);
    else speak(exEn, this);
  } else {
    speak(exEn, this);
  }
});

// ── Utility buttons ───────────────────────────────────────────
document.getElementById('btn-note')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (cw) openNoteModal(cw[0]);
});

document.getElementById('btn-bookmark')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (!cw) return;
  const isNow = toggleBookmark(cw[0]);
  this.textContent  = isNow ? '★' : '☆';
  this.style.color  = isNow ? '#f1c40f' : '';
});

document.getElementById('btn-mic')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (!cw) return;
  startPronunciationCheck(cw[0], this, (status, score, spoken, target) => {
    showPronuncResult(status, score, spoken ?? '', target ?? '');
  });
});
if (isPronuncSupported()) {
  document.getElementById('btn-mic')!.style.display = '';
}

// ── Navigation buttons ────────────────────────────────────────
document.getElementById('btn-prev')!.addEventListener('click', function(e) {
  e.stopPropagation();
  (window as any).stopAuto?.();
  const deckLen = ((window as any).deck as WordEntry[]).length;
  (window as any).setIdx(((window as any).idx - 1 + deckLen) % deckLen);
  (window as any).animCard('prev');
  (window as any).render?.();
});

document.getElementById('btn-know')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (cw) {
    const _ak         = _activeKnown();
    const isNewlyKnown = !_ak.has(cw[0]);
    _ak.add(cw[0]);
    const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (rangeVal === 'srs') { sm2Update(cw[0], 4); } else { delete (state.srsData as any)[cw[0]]; }
    if (ES_MODES.has(getMode())) { saveKnownEs((window as any).knownEs); } else { saveKnown(state.known); }
    saveSRS(state.srsData);
    state._srsStatsDirty = true;
    _safe(() => updateSrsUI(state._baseWords as unknown as WordEntry[]));
    _safe(() => playSound('know'));
    _safe(() => { addCombo(); flashCard(true); });
    if (isNewlyKnown) {
      (window as any).onWordLearned?.();
      _safe(() => {
        const gd = getGameData();
        if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
          gd.confettiShown = (window as any).TODAY;
          saveGameData(gd);
          launchConfetti();
          _safe(() => playSound('goal'));
        }
      });
    }
    if (rangeVal === 'srs') {
      (window as any).setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
      (window as any).setIdx(0);
      (window as any).render?.();
      return;
    }
    if (rangeVal === 'unlearned') {
      const newDeck = buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]);
      (window as any).setDeck(newDeck);
      const dl = ((window as any).deck as WordEntry[]).length;
      if (!dl) { (window as any).render?.(); return; }
      (window as any).setIdx((window as any).idx % dl);
      (window as any).animCard('fade');
      (window as any).render?.();
      return;
    }
  }
  const deckLen = ((window as any).deck as WordEntry[]).length;
  (window as any).animCard('next');
  (window as any).setIdx(((window as any).idx + 1) % deckLen);
  (window as any).render?.();
});

document.getElementById('btn-next')!.addEventListener('click', function(e) {
  e.stopPropagation();
  _safe(() => playSound('next'));
  _safe(() => breakCombo());
  const deckLen = ((window as any).deck as WordEntry[]).length;
  (window as any).setIdx(((window as any).idx + 1) % deckLen);
  (window as any).render?.();
});

document.getElementById('btn-dontknow')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = (window as any).cw as WordEntry | null;
  if (cw) {
    sm2Update(cw[0], 1);
    saveSRS(state.srsData);
    state._srsStatsDirty = true;
    _safe(() => updateSrsUI(state._baseWords as unknown as WordEntry[]));
    _safe(() => playSound('next'));
    _safe(() => breakCombo());
    (window as any).setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
    (window as any).setIdx(0);
    (window as any).render?.();
    return;
  }
  const deckLen = ((window as any).deck as WordEntry[]).length;
  (window as any).setIdx(((window as any).idx + 1) % deckLen);
  (window as any).render?.();
});

document.getElementById('btn-auto')!.addEventListener('click', function(e) {
  e.stopPropagation();
  if ((window as any).isAutoRunning()) {
    (window as any).stopAuto();
  } else {
    this.textContent = t('cards.stop');
    (window as any).startAuto();
  }
});

document.getElementById('btn-shuf')!.addEventListener('click', function(e) {
  e.stopPropagation();
  (window as any).stopAuto?.();
  shuffle((window as any).deck);
  (window as any).setIdx(0);
  (window as any).render?.();
});

document.getElementById('btn-reset')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const modesOverlay = document.getElementById('modes-overlay');
  if (modesOverlay) modesOverlay.classList.remove('open');
  document.getElementById('modal-overlay')!.style.display = 'flex';
});

document.getElementById('modal-cancel')!.addEventListener('click', function() {
  document.getElementById('modal-overlay')!.style.display = 'none';
});

document.getElementById('modal-confirm')!.addEventListener('click', function() {
  state.known.clear();
  ((window as any).knownEs as Set<string>).clear();
  (window as any).setSrsData({});
  state._srsStatsDirty = true;
  saveKnown(state.known);
  saveKnownEs((window as any).knownEs);
  saveSRS(state.srsData);
  _safe(() => localStorage.removeItem('ew_game'));
  _safe(() => localStorage.removeItem('ew_daily'));
  _safe(() => localStorage.removeItem('ew_ach'));
  state._gameCache  = null;
  state._dailyCache = null;
  const cardEl = document.getElementById('card');
  if (cardEl) cardEl.classList.remove('is-known');
  const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
  if (rangeVal === 'srs') {
    (window as any).setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
  } else if (rangeVal === 'unlearned') {
    (window as any).setDeck(buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]));
  }
  _safe(() => (window as any).renderGameBar?.());
  _safe(() => (window as any).renderLevelBadge?.());
  _safe(() => (window as any).updateRing?.(0, getGameData().goalMax || 20));
  _safe(() => (window as any).render?.());
  document.getElementById('modal-overlay')!.style.display = 'none';
});
