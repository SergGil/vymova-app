// English Words App — js/features/card-actions.ts
// All flashcard interaction event listeners
import { state } from '../../src/state.ts';
import { sm2Update, buildSRSDeck, buildUnlearnedDeck, shuffle, updateSrsUI } from '../core/srs.ts';
import { saveKnown, saveKnownEs, saveKnownFr, saveSRS } from '../core/storage.ts';
import { getGameData, saveGameData } from './game.ts';
import { addCombo, breakCombo, flashCard } from './combo.ts';
import { openNoteModal, hasNote } from './notes.ts';
import { toggleBookmark } from './bookmarks.ts';
import { isPronuncSupported, showPronuncResult, startPronunciationCheck } from './pronunciation.ts';
import { getSelectedUkVoice, getSelectedEsVoice, getSelectedFrVoice } from './voice.ts';
import { speak, _speakWithLang } from './speech.ts';
import { updateSimilarWords } from './similar-words.tsx';
import { updateCollocations, updateWordFamilies } from './word-context.ts';
import { ES_MODES, FR_MODES, getMode, esEntry as _esEntry, frEntry as _frEntry } from './mode-utils.ts';
import { playSound } from '../core/audio.ts';
import { launchConfetti } from '../core/confetti.ts';
import { t } from './i18n.ts';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { updateRing } from './ring.ts';
import type { WordEntry } from '../../src/types.js';

// Typed view of the globals exposed by app.ts (setter/action functions —
// avoids scattering `(window as any)` casts below). Read-only values
// (cw/deck/idx/flipped/TODAY) are mirrored into state by app.ts on every
// mutation, so they're read directly from `state` instead.
const win = window as unknown as {
  setIdx(i: number): void;
  setDeck(d: WordEntry[]): void;
  setFlipped(v: boolean): void;
  render?: () => void;
  animCard?: (dir: string) => void;
  stopAuto?: () => void;
  startAuto?: () => void;
  isAutoRunning?: () => boolean;
  onWordLearned?: () => void;
};

function _safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

function _activeKnown(): Set<string> {
  const mode = getMode();
  if (ES_MODES.has(mode)) return state.knownEs ?? state.known;
  if (FR_MODES.has(mode)) return state.knownFr ?? state.known;
  return state.known;
}

// ── Card flip ─────────────────────────────────────────────────
document.getElementById('card')!.addEventListener('click', function() {
  if (!state.flipped) {
    win.setFlipped(true);
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
  const cw = state.cw;
  if (!cw) return;
  const modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
  if (modeVal === 'es-en' || modeVal === 'es-ua') {
    const es = _esEntry(cw[0]);
    if (es && getSelectedEsVoice()) { _speakWithLang(es[0], 'es-ES', this); return; }
  }
  if (modeVal === 'fr-en' || modeVal === 'fr-ua') {
    const fr = _frEntry(cw[0]);
    if (fr && getSelectedFrVoice()) { _speakWithLang(fr[0], 'fr-FR', this); return; }
  }
  speak(cw[0], this);
});

document.getElementById('speak-ex')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = state.cw;
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
  if (FR_MODES.has(modeVal)) {
    const fr        = _frEntry(cw[0]);
    const exFr      = fr ? fr[1] : '';
    const hasFrVoice = !!getSelectedFrVoice();
    if (modeVal === 'fr-en' || modeVal === 'fr-ua') {
      if (hasFrVoice && exFr) _speakWithLang(exFr, 'fr-FR', this);
      else speak(exEn, this);
    } else if (modeVal === 'ua-fr') {
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
  const cw = state.cw;
  if (cw) openNoteModal(cw[0]);
});

document.getElementById('btn-bookmark')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = state.cw;
  if (!cw) return;
  const isNow = toggleBookmark(cw[0]);
  this.textContent  = isNow ? '★' : '☆';
  this.style.color  = isNow ? '#f1c40f' : '';
});

document.getElementById('btn-mic')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = state.cw;
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
  win.stopAuto?.();
  const deckLen = state.deck.length;
  if (!deckLen) { win.render?.(); return; }
  win.setIdx((state.idx - 1 + deckLen) % deckLen);
  win.animCard?.('prev');
  win.render?.();
});

document.getElementById('btn-know')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = state.cw;
  if (cw) {
    const _ak         = _activeKnown();
    const isNewlyKnown = !_ak.has(cw[0]);
    _ak.add(cw[0]);
    const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (rangeVal === 'srs') {
      sm2Update(cw[0], 4);
    } else {
      // Marking "know" outside the SRS deck means the user already masters this
      // word — drop any prior SRS progress (ef/reps/lapses) so it doesn't
      // re-enter the SRS queue with stale data.
      delete (state.srsData as any)[cw[0]];
    }
    const _modeNow = getMode();
    if (ES_MODES.has(_modeNow)) { if (state.knownEs) saveKnownEs(state.knownEs); }
    else if (FR_MODES.has(_modeNow)) { if (state.knownFr) saveKnownFr(state.knownFr); }
    else { saveKnown(state.known); }
    saveSRS(state.srsData);
    state._srsStatsDirty = true;
    _safe(() => updateSrsUI(state._baseWords as unknown as WordEntry[]));
    _safe(() => playSound('know'));
    _safe(() => { addCombo(); flashCard(true); });
    if (isNewlyKnown) {
      win.onWordLearned?.();
      _safe(() => {
        const gd = getGameData();
        if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
          gd.confettiShown = state.TODAY;
          saveGameData(gd);
          launchConfetti();
          _safe(() => playSound('goal'));
        }
      });
    }
    if (rangeVal === 'srs') {
      win.setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
      win.setIdx(0);
      win.render?.();
      return;
    }
    if (rangeVal === 'unlearned') {
      const newDeck = buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]);
      win.setDeck(newDeck);
      const dl = state.deck.length;
      if (!dl) { win.render?.(); return; }
      win.setIdx(state.idx % dl);
      win.animCard?.('fade');
      win.render?.();
      return;
    }
  }
  const deckLen = state.deck.length;
  if (!deckLen) { win.render?.(); return; }
  win.animCard?.('next');
  win.setIdx((state.idx + 1) % deckLen);
  win.render?.();
});

document.getElementById('btn-next')!.addEventListener('click', function(e) {
  e.stopPropagation();
  _safe(() => playSound('next'));
  _safe(() => breakCombo());
  const deckLen = state.deck.length;
  if (!deckLen) { win.render?.(); return; }
  win.setIdx((state.idx + 1) % deckLen);
  win.render?.();
});

document.getElementById('btn-dontknow')!.addEventListener('click', function(e) {
  e.stopPropagation();
  const cw = state.cw;
  if (cw) {
    sm2Update(cw[0], 1);
    saveSRS(state.srsData);
    state._srsStatsDirty = true;
    _safe(() => updateSrsUI(state._baseWords as unknown as WordEntry[]));
    _safe(() => playSound('next'));
    _safe(() => breakCombo());
    const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
    if (rangeVal === 'srs') {
      win.setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
      win.setIdx(0);
      win.render?.();
      return;
    }
  }
  const deckLen = state.deck.length;
  if (!deckLen) { win.render?.(); return; }
  win.setIdx((state.idx + 1) % deckLen);
  win.render?.();
});

document.getElementById('btn-auto')!.addEventListener('click', function(e) {
  e.stopPropagation();
  if (win.isAutoRunning?.()) {
    win.stopAuto?.();
  } else {
    this.textContent = t('cards.stop');
    win.startAuto?.();
  }
});

document.getElementById('btn-shuf')!.addEventListener('click', function(e) {
  e.stopPropagation();
  win.stopAuto?.();
  shuffle(state.deck as WordEntry[]);
  win.setIdx(0);
  win.render?.();
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
  state.knownEs?.clear();
  state.knownFr?.clear();
  state.srsData = {};
  state._srsStatsDirty = true;
  saveKnown(state.known);
  if (state.knownEs) saveKnownEs(state.knownEs);
  if (state.knownFr) saveKnownFr(state.knownFr);
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
    win.setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
  } else if (rangeVal === 'unlearned') {
    win.setDeck(buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]));
  }
  _safe(() => renderGameBar());
  _safe(() => refreshGameBarLevel());
  _safe(() => updateRing());
  _safe(() => win.render?.());
  document.getElementById('modal-overlay')!.style.display = 'none';
});
