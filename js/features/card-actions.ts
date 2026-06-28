// Vymova — js/features/card-actions.ts
// All flashcard interaction event listeners
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { sm2Update, buildSRSDeck, buildUnlearnedDeck, shuffle, updateSrsUI } from '../core/srs.ts';
import { saveKnown, saveSRS } from '../core/storage.ts';
import { getGameData, saveGameData, invalidateGameCaches } from './game.ts';
import { getSrsDataSnapshot, deleteSrsEntry, clearSrsData } from '../../src/srs-store.ts';
import { getBaseWordsSnapshot } from '../../src/deck-filter-store.ts';
import { today } from '../core/today.ts';
import { addCombo, breakCombo, flashCard } from './combo.ts';
import { hasNote } from './notes.ts';
import { openNoteModal } from './note-modal.tsx';
import { toggleBookmark } from './bookmarks.ts';
import { isPronuncSupported, startPronunciationCheck } from './pronunciation.ts';
import { showPronuncResult } from './pronunciation-toast.tsx';
import { getSelectedUkVoice } from './voice.tsx';
import { speak, _speakWithLang } from './speech.ts';
import { updateSimilarWords } from './similar-words.tsx';
import { getMode, getActiveTargetLang, isTargetLang, langConfig, parsePair, ALL_TARGET_LANGS } from './mode-utils.ts';
import { getKnownSnapshot, markKnown, clearAllKnown, type KnownLang } from '../../src/known-words-store.ts';
import { VOICE_GETTERS } from './speak-lang.ts';
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

function _activeKnownLang(): KnownLang {
  return getActiveTargetLang(getMode()) ?? 'en';
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
      const front = parsePair(modeVal).front;
      if (isTargetLang(front)) {
        const cfg = langConfig(front);
        const entry = cfg.entry(cw[0]);
        if (entry && VOICE_GETTERS[front]()) { _speakWithLang(entry[0], cfg.voiceLocale, speakWordBtn); return; }
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
      const front   = parsePair(modeVal).front;
      // Speak the example in whichever language is on the card front: a
      // target language's example (if a voice is available), the Ukrainian
      // example (front === 'ua'), or fall back to the English example.
      if (isTargetLang(front)) {
        const cfg = langConfig(front);
        const entry = cfg.entry(cw[0]);
        const ex = entry ? entry[1] : '';
        if (VOICE_GETTERS[front]() && ex) _speakWithLang(ex, cfg.voiceLocale, speakExBtn);
        else speak(exEn, speakExBtn);
        return;
      }
      if (front === 'ua') {
        if (getSelectedUkVoice() && exUa) _speakWithLang(exUa, 'uk-UA', speakExBtn);
        else speak(exEn, speakExBtn);
        return;
      }
      speak(exEn, speakExBtn);
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
        const _lang         = _activeKnownLang();
        const isNewlyKnown = !getKnownSnapshot(_lang).has(cw[0]);
        markKnown(_lang, cw[0]);
        const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        if (rangeVal === 'srs') {
          // Quality 5 ("perfect recall") — the binary Know/Don't-know UI has no
          // hesitation signal, and quality 4 nets a zero EF delta under SM-2,
          // so EF could drop on a miss but never recover on repeated correct
          // answers. Know should actually grow the interval over time.
          sm2Update(cw[0], 5);
        } else {
          // Marking "know" outside the SRS deck means the user already masters this
          // word — drop any prior SRS progress (ef/reps/lapses) so it doesn't
          // re-enter the SRS queue with stale data.
          deleteSrsEntry(cw[0]);
        }
        if (isTargetLang(_lang)) { const cfg = langConfig(_lang); cfg.saveKnown(cfg.known()); }
        else { saveKnown(getKnownSnapshot('en')); }
        saveSRS(getSrsDataSnapshot());
        _safe(() => updateSrsUI(getBaseWordsSnapshot() as unknown as WordEntry[]));
        _safe(() => playSound('know'));
        _safe(() => { addCombo(); flashCard(true); });
        if (isNewlyKnown) {
          onWordLearned();
          _safe(() => {
            const gd = getGameData();
            if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
              gd.confettiShown = today();
              saveGameData(gd);
              launchConfetti();
              _safe(() => playSound('goal'));
            }
          });
        }
        if (rangeVal === 'srs') {
          setDeck(buildSRSDeck(getBaseWordsSnapshot() as unknown as WordEntry[]));
          setIdx(0);
          render();
          return;
        }
        if (rangeVal === 'unlearned') {
          const newDeck = buildUnlearnedDeck(getBaseWordsSnapshot() as unknown as WordEntry[]);
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
        saveSRS(getSrsDataSnapshot());
        _safe(() => updateSrsUI(getBaseWordsSnapshot() as unknown as WordEntry[]));
        _safe(() => playSound('next'));
        _safe(() => breakCombo());
        const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        if (rangeVal === 'srs') {
          setDeck(buildSRSDeck(getBaseWordsSnapshot() as unknown as WordEntry[]));
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
      clearAllKnown();
      clearSrsData();
      saveKnown(getKnownSnapshot('en'));
      for (const lang of ALL_TARGET_LANGS) langConfig(lang).saveKnown(getKnownSnapshot(lang));
      saveSRS(getSrsDataSnapshot());
      _safe(() => localStorage.removeItem('ew_game'));
      _safe(() => localStorage.removeItem('ew_daily'));
      _safe(() => localStorage.removeItem('ew_ach'));
      invalidateGameCaches();
      const cardEl2 = document.getElementById('card');
      if (cardEl2) cardEl2.classList.remove('is-known');
      const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
      if (rangeVal === 'srs') {
        setDeck(buildSRSDeck(getBaseWordsSnapshot() as unknown as WordEntry[]));
      } else if (rangeVal === 'unlearned') {
        setDeck(buildUnlearnedDeck(getBaseWordsSnapshot() as unknown as WordEntry[]));
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
