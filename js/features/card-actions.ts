// English Words App — js/features/card-actions.ts
// All flashcard interaction event listeners
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { sm2Update, buildSRSDeck, buildUnlearnedDeck, shuffle, updateSrsUI } from '../core/srs.ts';
import { saveKnown, saveKnownEs, saveKnownFr, saveKnownIt, saveKnownPt, saveKnownDe, saveKnownHe, saveKnownAr, saveSRS } from '../core/storage.ts';
import { getGameData, saveGameData } from './game.ts';
import { addCombo, breakCombo, flashCard } from './combo.ts';
import { hasNote } from './notes.ts';
import { openNoteModal } from './note-modal.tsx';
import { toggleBookmark } from './bookmarks.ts';
import { isPronuncSupported, startPronunciationCheck } from './pronunciation.ts';
import { showPronuncResult } from './pronunciation-toast.tsx';
import { getSelectedUkVoice, getSelectedEsVoice, getSelectedFrVoice, getSelectedItVoice, getSelectedPtVoice, getSelectedDeVoice, getSelectedHeVoice, getSelectedArVoice } from './voice.tsx';
import { speak, _speakWithLang } from './speech.ts';
import { updateSimilarWords } from './similar-words.tsx';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, getMode, esEntry as _esEntry, frEntry as _frEntry, itEntry as _itEntry, ptEntry as _ptEntry, deEntry as _deEntry, heEntry as _heEntry, arEntry as _arEntry } from './mode-utils.ts';
import { playSound } from '../core/audio.ts';
import { launchConfetti } from '../core/confetti.tsx';
import { t } from './i18n.ts';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { updateRing } from './ring.tsx';
import { render, setIdx, setDeck, setFlipped, animCard, stopAuto, startAuto,
         isAutoRunning, onWordLearned } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

function _safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

function _activeKnown(): Set<string> {
  const mode = getMode();
  if (ES_MODES.has(mode)) return state.knownEs ?? state.known;
  if (FR_MODES.has(mode)) return state.knownFr ?? state.known;
  if (IT_MODES.has(mode)) return state.knownIt ?? state.known;
  if (PT_MODES.has(mode)) return state.knownPt ?? state.known;
  if (DE_MODES.has(mode)) return state.knownDe ?? state.known;
  if (HE_MODES.has(mode)) return state.knownHe ?? state.known;
  if (AR_MODES.has(mode)) return state.knownAr ?? state.known;
  return state.known;
}

export function CardActionsInit(): ReactElement | null {
  useEffect(() => {
    // ── Card flip ─────────────────────────────────────────────────
    const cardEl = document.getElementById('card')!;
    const onCardClick = () => {
      if (!state.flipped) {
        setFlipped(true);
        document.getElementById('wtransl')!.className = 'transl show';
        document.getElementById('exua')!.className    = 'ex-ua show';
        _safe(() => updateSimilarWords());
      }
    };
    cardEl.addEventListener('click', onCardClick);

    // ── Speak buttons ─────────────────────────────────────────────
    const speakWordBtn = document.getElementById('speak-word')!;
    const onSpeakWordClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = state.cw;
      if (!cw) return;
      const modeVal = (document.getElementById('sel-mode') as HTMLSelectElement)!.value;
      if (modeVal === 'es-en' || modeVal === 'es-ua') {
        const es = _esEntry(cw[0]);
        if (es && getSelectedEsVoice()) { _speakWithLang(es[0], 'es-ES', speakWordBtn); return; }
      }
      if (modeVal === 'fr-en' || modeVal === 'fr-ua') {
        const fr = _frEntry(cw[0]);
        if (fr && getSelectedFrVoice()) { _speakWithLang(fr[0], 'fr-FR', speakWordBtn); return; }
      }
      if (modeVal === 'it-en' || modeVal === 'it-ua') {
        const it = _itEntry(cw[0]);
        if (it && getSelectedItVoice()) { _speakWithLang(it[0], 'it-IT', speakWordBtn); return; }
      }
      if (modeVal === 'pt-en' || modeVal === 'pt-ua') {
        const pt = _ptEntry(cw[0]);
        if (pt && getSelectedPtVoice()) { _speakWithLang(pt[0], 'pt-PT', speakWordBtn); return; }
      }
      if (modeVal === 'de-en' || modeVal === 'de-ua') {
        const de = _deEntry(cw[0]);
        if (de && getSelectedDeVoice()) { _speakWithLang(de[0], 'de-DE', speakWordBtn); return; }
      }
      if (modeVal === 'he-en' || modeVal === 'he-ua') {
        const he = _heEntry(cw[0]);
        if (he && getSelectedHeVoice()) { _speakWithLang(he[0], 'he-IL', speakWordBtn); return; }
      }
      if (modeVal === 'ar-en' || modeVal === 'ar-ua') {
        const ar = _arEntry(cw[0]);
        if (ar && getSelectedArVoice()) { _speakWithLang(ar[0], 'ar-SA', speakWordBtn); return; }
      }
      speak(cw[0], speakWordBtn);
    };
    speakWordBtn.addEventListener('click', onSpeakWordClick);

    const speakExBtn = document.getElementById('speak-ex')!;
    const onSpeakExClick = (e: MouseEvent) => {
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
          if (hasEsVoice && exEs) _speakWithLang(exEs, 'es-ES', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-es') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (FR_MODES.has(modeVal)) {
        const fr        = _frEntry(cw[0]);
        const exFr      = fr ? fr[1] : '';
        const hasFrVoice = !!getSelectedFrVoice();
        if (modeVal === 'fr-en' || modeVal === 'fr-ua') {
          if (hasFrVoice && exFr) _speakWithLang(exFr, 'fr-FR', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-fr') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (IT_MODES.has(modeVal)) {
        const it        = _itEntry(cw[0]);
        const exIt      = it ? it[1] : '';
        const hasItVoice = !!getSelectedItVoice();
        if (modeVal === 'it-en' || modeVal === 'it-ua') {
          if (hasItVoice && exIt) _speakWithLang(exIt, 'it-IT', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-it') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (PT_MODES.has(modeVal)) {
        const pt        = _ptEntry(cw[0]);
        const exPt      = pt ? pt[1] : '';
        const hasPtVoice = !!getSelectedPtVoice();
        if (modeVal === 'pt-en' || modeVal === 'pt-ua') {
          if (hasPtVoice && exPt) _speakWithLang(exPt, 'pt-PT', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-pt') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (DE_MODES.has(modeVal)) {
        const de        = _deEntry(cw[0]);
        const exDe      = de ? de[1] : '';
        const hasDeVoice = !!getSelectedDeVoice();
        if (modeVal === 'de-en' || modeVal === 'de-ua') {
          if (hasDeVoice && exDe) _speakWithLang(exDe, 'de-DE', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-de') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (HE_MODES.has(modeVal)) {
        const he        = _heEntry(cw[0]);
        const exHe      = he ? he[1] : '';
        const hasHeVoice = !!getSelectedHeVoice();
        if (modeVal === 'he-en' || modeVal === 'he-ua') {
          if (hasHeVoice && exHe) _speakWithLang(exHe, 'he-IL', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-he') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (AR_MODES.has(modeVal)) {
        const ar        = _arEntry(cw[0]);
        const exAr      = ar ? ar[1] : '';
        const hasArVoice = !!getSelectedArVoice();
        if (modeVal === 'ar-en' || modeVal === 'ar-ua') {
          if (hasArVoice && exAr) _speakWithLang(exAr, 'ar-SA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else if (modeVal === 'ua-ar') {
          const hasUkVoice = !!getSelectedUkVoice();
          if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
          else speak(exEn, speakExBtn);
        } else {
          speak(exEn, speakExBtn);
        }
        return;
      }
      if (modeVal === 'ua') {
        const hasUkVoice = !!getSelectedUkVoice();
        if (hasUkVoice && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
        else speak(exEn, speakExBtn);
      } else {
        speak(exEn, speakExBtn);
      }
    };
    speakExBtn.addEventListener('click', onSpeakExClick);

    // ── Utility buttons ───────────────────────────────────────────
    const noteBtn = document.getElementById('btn-note')!;
    const onNoteClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = state.cw;
      if (cw) openNoteModal(cw[0]);
    };
    noteBtn.addEventListener('click', onNoteClick);

    const bookmarkBtn = document.getElementById('btn-bookmark')!;
    const onBookmarkClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = state.cw;
      if (!cw) return;
      const isNow = toggleBookmark(cw[0]);
      bookmarkBtn.textContent = isNow ? '★' : '☆';
      bookmarkBtn.style.color = isNow ? '#f1c40f' : '';
    };
    bookmarkBtn.addEventListener('click', onBookmarkClick);

    const micBtn = document.getElementById('btn-mic')!;
    const onMicClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = state.cw;
      if (!cw) return;
      startPronunciationCheck(cw[0], micBtn, (status, score, spoken, target) => {
        showPronuncResult(status, score, spoken ?? '', target ?? '');
      });
    };
    micBtn.addEventListener('click', onMicClick);
    if (isPronuncSupported()) {
      micBtn.style.display = '';
    }

    // ── Navigation buttons ────────────────────────────────────────
    const prevBtn = document.getElementById('btn-prev')!;
    const onPrevClick = (e: MouseEvent) => {
      e.stopPropagation();
      stopAuto();
      const deckLen = state.deck.length;
      if (!deckLen) { render(); return; }
      setIdx((state.idx - 1 + deckLen) % deckLen);
      animCard('prev');
      render();
    };
    prevBtn.addEventListener('click', onPrevClick);

    const knowBtn = document.getElementById('btn-know')!;
    const onKnowClick = (e: MouseEvent) => {
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
        else if (IT_MODES.has(_modeNow)) { if (state.knownIt) saveKnownIt(state.knownIt); }
        else if (PT_MODES.has(_modeNow)) { if (state.knownPt) saveKnownPt(state.knownPt); }
        else if (DE_MODES.has(_modeNow)) { if (state.knownDe) saveKnownDe(state.knownDe); }
        else if (HE_MODES.has(_modeNow)) { if (state.knownHe) saveKnownHe(state.knownHe); }
        else if (AR_MODES.has(_modeNow)) { if (state.knownAr) saveKnownAr(state.knownAr); }
        else { saveKnown(state.known); }
        saveSRS(state.srsData);
        state._srsStatsDirty = true;
        _safe(() => updateSrsUI(state._baseWords as unknown as WordEntry[]));
        _safe(() => playSound('know'));
        _safe(() => { addCombo(); flashCard(true); });
        if (isNewlyKnown) {
          onWordLearned();
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
          setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
          setIdx(0);
          render();
          return;
        }
        if (rangeVal === 'unlearned') {
          const newDeck = buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]);
          setDeck(newDeck);
          const dl = state.deck.length;
          if (!dl) { render(); return; }
          setIdx(state.idx % dl);
          animCard('fade');
          render();
          return;
        }
      }
      const deckLen = state.deck.length;
      if (!deckLen) { render(); return; }
      animCard('next');
      setIdx((state.idx + 1) % deckLen);
      render();
    };
    knowBtn.addEventListener('click', onKnowClick);

    const nextBtn = document.getElementById('btn-next')!;
    const onNextClick = (e: MouseEvent) => {
      e.stopPropagation();
      _safe(() => playSound('next'));
      _safe(() => breakCombo());
      const deckLen = state.deck.length;
      if (!deckLen) { render(); return; }
      setIdx((state.idx + 1) % deckLen);
      render();
    };
    nextBtn.addEventListener('click', onNextClick);

    const dontknowBtn = document.getElementById('btn-dontknow')!;
    const onDontknowClick = (e: MouseEvent) => {
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
          setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
          setIdx(0);
          render();
          return;
        }
      }
      const deckLen = state.deck.length;
      if (!deckLen) { render(); return; }
      setIdx((state.idx + 1) % deckLen);
      render();
    };
    dontknowBtn.addEventListener('click', onDontknowClick);

    const autoBtn = document.getElementById('btn-auto')!;
    const onAutoClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (isAutoRunning()) {
        stopAuto();
      } else {
        autoBtn.textContent = t('cards.stop');
        startAuto();
      }
    };
    autoBtn.addEventListener('click', onAutoClick);

    const shufBtn = document.getElementById('btn-shuf')!;
    const onShufClick = (e: MouseEvent) => {
      e.stopPropagation();
      stopAuto();
      shuffle(state.deck as WordEntry[]);
      setIdx(0);
      render();
    };
    shufBtn.addEventListener('click', onShufClick);

    const resetBtn = document.getElementById('btn-reset')!;
    const onResetClick = (e: MouseEvent) => {
      e.stopPropagation();
      const modesOverlay = document.getElementById('modes-overlay');
      if (modesOverlay) modesOverlay.classList.remove('open');
      document.getElementById('modal-overlay')!.style.display = 'flex';
    };
    resetBtn.addEventListener('click', onResetClick);

    const modalCancel = document.getElementById('modal-cancel')!;
    const onModalCancelClick = () => {
      document.getElementById('modal-overlay')!.style.display = 'none';
    };
    modalCancel.addEventListener('click', onModalCancelClick);

    const modalConfirm = document.getElementById('modal-confirm')!;
    const onModalConfirmClick = () => {
      state.known.clear();
      state.knownEs?.clear();
      state.knownFr?.clear();
      state.knownIt?.clear();
      state.knownPt?.clear();
      state.knownDe?.clear();
      state.knownHe?.clear();
      state.knownAr?.clear();
      state.srsData = {};
      state._srsStatsDirty = true;
      saveKnown(state.known);
      if (state.knownEs) saveKnownEs(state.knownEs);
      if (state.knownFr) saveKnownFr(state.knownFr);
      if (state.knownIt) saveKnownIt(state.knownIt);
      if (state.knownPt) saveKnownPt(state.knownPt);
      if (state.knownDe) saveKnownDe(state.knownDe);
      if (state.knownHe) saveKnownHe(state.knownHe);
      if (state.knownAr) saveKnownAr(state.knownAr);
      saveSRS(state.srsData);
      _safe(() => localStorage.removeItem('ew_game'));
      _safe(() => localStorage.removeItem('ew_daily'));
      _safe(() => localStorage.removeItem('ew_ach'));
      state._gameCache  = null;
      state._dailyCache = null;
      const cardEl2 = document.getElementById('card');
      if (cardEl2) cardEl2.classList.remove('is-known');
      const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
      if (rangeVal === 'srs') {
        setDeck(buildSRSDeck(state._baseWords as unknown as WordEntry[]));
      } else if (rangeVal === 'unlearned') {
        setDeck(buildUnlearnedDeck(state._baseWords as unknown as WordEntry[]));
      }
      _safe(() => renderGameBar());
      _safe(() => refreshGameBarLevel());
      _safe(() => updateRing());
      _safe(() => render());
      document.getElementById('modal-overlay')!.style.display = 'none';
    };
    modalConfirm.addEventListener('click', onModalConfirmClick);

    return () => {
      cardEl.removeEventListener('click', onCardClick);
      speakWordBtn.removeEventListener('click', onSpeakWordClick);
      speakExBtn.removeEventListener('click', onSpeakExClick);
      noteBtn.removeEventListener('click', onNoteClick);
      bookmarkBtn.removeEventListener('click', onBookmarkClick);
      micBtn.removeEventListener('click', onMicClick);
      prevBtn.removeEventListener('click', onPrevClick);
      knowBtn.removeEventListener('click', onKnowClick);
      nextBtn.removeEventListener('click', onNextClick);
      dontknowBtn.removeEventListener('click', onDontknowClick);
      autoBtn.removeEventListener('click', onAutoClick);
      shufBtn.removeEventListener('click', onShufClick);
      resetBtn.removeEventListener('click', onResetClick);
      modalCancel.removeEventListener('click', onModalCancelClick);
      modalConfirm.removeEventListener('click', onModalConfirmClick);
    };
  }, []);

  return null;
}
