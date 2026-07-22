// Vymova — js/features/card-actions.ts
// All flashcard interaction event listeners
import { useEffect, type ReactElement } from 'react';
import { sm2Update, buildSRSDeck, buildUnlearnedDeck, _shuf, updateSrsUI } from '../core/srs.ts';
import { saveKnown, saveSRS } from '../core/storage.ts';
import { getGameData, saveGameData, resetAllLangProgress, recordMistake } from './game.ts';
import { getSrsDataSnapshot, clearSrsData } from '../../src/srs-store.ts';
import { getBaseWordsSnapshot } from '../../src/deck-filter-store.ts';
import { today } from '../core/today.ts';
import { addCombo, breakCombo, flashCard } from './combo.ts';
import { openNoteModal } from './note-modal.tsx';
import { toggleBookmark } from './bookmarks.ts';
import { startPronunciationCheck } from './voice/pronunciation.ts';
import { showPronuncResult } from './voice/pronunciation-toast.tsx';
import { checkMilestones } from './milestones.ts';
import {
  getMode,
  getRawMode,
  getActiveTargetLang,
  isTargetLang,
  langConfig,
  parsePair,
  entryFor,
  ALL_TARGET_LANGS,
} from './mode-utils.ts';
import {
  getKnownSnapshot,
  markKnown,
  clearAllKnown,
  type KnownLang,
} from '../../src/known-words-store.ts';
import { speakForCode } from './voice/speak-lang.ts';
import { playSound } from '../core/audio.ts';
import { launchConfetti } from '../core/confetti.tsx';
import { openResetConfirm } from './reset-confirm-dialog.tsx';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import {
  render,
  setIdx,
  setDeck,
  setFlipped,
  animCard,
  stopAuto,
  startAuto,
  isAutoRunning,
  onWordLearned,
  incrementGoalProgress,
} from '../core/card-engine.ts';
import {
  getDeckSnapshot,
  getIdxSnapshot,
  getCwSnapshot,
  getFlippedSnapshot,
} from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.js';

function _safe(fn: () => void): void {
  try {
    fn();
  } catch (e) {
    console.warn('[safe]', (e as Error).message ?? e);
  }
}

function _activeKnownLang(): KnownLang {
  return getActiveTargetLang(getMode()) ?? 'en';
}

export function CardActionsInit(): ReactElement | null {
  useEffect(() => {
    // ── Card flip ─────────────────────────────────────────────────
    const cardEl = document.getElementById('card')!;
    const onCardClick = () => {
      if (!getFlippedSnapshot()) {
        setFlipped(true);
      }
    };
    cardEl.addEventListener('click', onCardClick);

    // ── Speak buttons ─────────────────────────────────────────────
    const speakWordBtn = document.getElementById('speak-word')!;
    const onSpeakWordClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (!cw) return;
      const modeVal = getRawMode();
      const front = parsePair(modeVal).front;
      const entry = entryFor(front, cw);
      speakForCode(front, entry.word, cw[0], speakWordBtn, entry.translit);
    };
    speakWordBtn.addEventListener('click', onSpeakWordClick);

    const speakExBtn = document.getElementById('speak-ex')!;
    const onSpeakExClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (!cw) return;
      const exEn = cw[2] || '';
      const modeVal = getRawMode();
      const front = parsePair(modeVal).front;
      // Speak the example in whichever language is on the card front: a
      // target language's example (if a voice is available), the Ukrainian
      // example (front === 'ua'), or fall back to the English example.
      // speakForCode() already encodes this per-front-language fallback
      // logic (and 'en'/'ua' handling) — no example transliteration exists,
      // so no translit param here.
      speakForCode(front, entryFor(front, cw).ex, exEn, speakExBtn);
    };
    speakExBtn.addEventListener('click', onSpeakExClick);

    // ── Utility buttons ───────────────────────────────────────────
    const noteBtn = document.getElementById('btn-note')!;
    const onNoteClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (cw) openNoteModal(cw[0]);
    };
    noteBtn.addEventListener('click', onNoteClick);

    const bookmarkBtn = document.getElementById('btn-bookmark')!;
    const onBookmarkClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (!cw) return;
      const isNow = toggleBookmark(cw[0]);
      bookmarkBtn.textContent = isNow ? '★' : '☆';
      bookmarkBtn.style.color = isNow ? 'var(--accent2)' : '';
    };
    bookmarkBtn.addEventListener('click', onBookmarkClick);

    const micBtn = document.getElementById('btn-mic')!;
    const onMicClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (!cw) return;
      // Whichever language is on the card front — not always cw[0] (the
      // English headword) — same front resolution as onSpeakWordClick above.
      // Previously this always checked pronunciation of the English word
      // with the recognizer hardcoded to 'en-US', regardless of what
      // language the card was actually showing/learning: a Spanish learner
      // saying the Spanish word perfectly still got compared against the
      // English text using an English-tuned recognizer, guaranteeing a poor
      // score no matter how correct the pronunciation actually was.
      const modeVal = getRawMode();
      const front = parsePair(modeVal).front;
      const entry = entryFor(front, cw);
      const word = entry.word || cw[0];
      const locale =
        front === 'ua' ? 'uk-UA' : isTargetLang(front) ? langConfig(front).voiceLocale : 'en-US';
      startPronunciationCheck(word, locale, micBtn, (status, score, spoken, target) => {
        // A poor attempt counts as a mistake too, so mispronounced words
        // start surfacing via mistake-review the same way typing/quiz
        // mistakes already do — not just a one-off toast the user forgets.
        // Always keyed by the English headword (cw[0]) — mistake tracking is
        // word-identity based, independent of which language was displayed.
        if (status === 'try_again') recordMistake(cw[0]);
        showPronuncResult(status, score, spoken ?? '', target ?? '');
      });
    };
    micBtn.addEventListener('click', onMicClick);

    // ── Navigation buttons ────────────────────────────────────────
    const prevBtn = document.getElementById('btn-prev')!;
    const onPrevClick = (e: MouseEvent) => {
      e.stopPropagation();
      stopAuto();
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      setIdx((getIdxSnapshot() - 1 + deckLen) % deckLen);
      animCard('prev');
      render();
    };
    prevBtn.addEventListener('click', onPrevClick);

    // Shared by onKnowClick/onHardClick/onDontknowClick/onEasyClick: apply an
    // SM-2 grade, then only rebuild the deck when the active filter's
    // membership can actually change from that grade — 'srs' reorders around
    // the due date every sm2Update() call touches, everything else (incl.
    // 'unlearned', whose membership only moves on a markKnown()) just
    // advances to the next card in place.
    function _afterGrade(rebuildUnlearned: boolean): void {
      saveSRS(getSrsDataSnapshot());
      _safe(() => updateSrsUI(getBaseWordsSnapshot() as unknown as WordEntry[]));
      const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
      if (rangeVal === 'srs') {
        setDeck(buildSRSDeck(getBaseWordsSnapshot() as unknown as WordEntry[]));
        setIdx(0);
        render();
        return;
      }
      if (rangeVal === 'unlearned' && rebuildUnlearned) {
        const newDeck = buildUnlearnedDeck(getBaseWordsSnapshot() as unknown as WordEntry[]);
        setDeck(newDeck);
        const dl = getDeckSnapshot().length;
        if (!dl) {
          render();
          return;
        }
        setIdx(getIdxSnapshot() % dl);
        animCard('fade');
        render();
        return;
      }
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      animCard('next');
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    }

    const knowBtn = document.getElementById('btn-know')!;
    const onKnowClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (cw) {
        // Quality 4 — recalled correctly, no special difficulty and no
        // "trivially easy" either (that's #btn-easy's job, quality 5). Doesn't
        // touch the known-words set at all: mastery is now #btn-easy's signal
        // only, so a plain "Знаю" leaves the word in its filter's rotation and
        // simply lets its SRS interval grow.
        sm2Update(cw[0], 4);
        _safe(() => playSound('know'));
        _safe(() => {
          addCombo();
          flashCard(true);
        });
        // "Ціль на сьогодні" tracks words practiced this session, not just
        // brand-new ones — otherwise the ring stops moving for the rest of a
        // review-heavy session once the day's new words run out.
        _safe(() => incrementGoalProgress());
        _safe(() => {
          const gd = getGameData();
          if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
            gd.confettiShown = today();
            saveGameData(gd);
            launchConfetti();
            _safe(() => playSound('goal'));
          }
        });
        _afterGrade(false);
        return;
      }
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      animCard('next');
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    };
    knowBtn.addEventListener('click', onKnowClick);

    // ── Easy (mastery signal — the only button that still marks "known") ──
    const easyBtn = document.getElementById('btn-easy')!;
    const onEasyClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (cw) {
        const _lang = _activeKnownLang();
        const isNewlyKnown = !getKnownSnapshot(_lang).has(cw[0]);
        markKnown(_lang, cw[0]);
        // Quality 5 ("perfect, trivial recall") — the one grade that also
        // grows EF (see srs.ts's sm2Update comment), matching this button's
        // "so easy it's basically mastered" meaning.
        sm2Update(cw[0], 5);
        if (isTargetLang(_lang)) {
          const cfg = langConfig(_lang);
          cfg.saveKnown(cfg.known());
        } else {
          saveKnown(getKnownSnapshot('en'));
        }
        _safe(() => playSound('know'));
        _safe(() => {
          addCombo();
          flashCard(true);
        });
        _safe(() => incrementGoalProgress());
        _safe(() => {
          const gd = getGameData();
          if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
            gd.confettiShown = today();
            saveGameData(gd);
            launchConfetti();
            _safe(() => playSound('goal'));
          }
        });
        if (isNewlyKnown) {
          onWordLearned();
          _safe(() => checkMilestones());
        }
        _afterGrade(true);
        return;
      }
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      animCard('next');
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    };
    easyBtn.addEventListener('click', onEasyClick);

    // ── Hard ──────────────────────────────────────────────────────
    const hardBtn = document.getElementById('btn-hard')!;
    const onHardClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
      if (cw) {
        // Deliberately NOT markKnown(): "Hard" means "recalled it, but with
        // real difficulty" — a review-continuation signal, not "I know this
        // now, stop showing it to me" (that's #btn-easy's job). Quality 3 —
        // SM-2's lowest passing grade: still grows the interval, just by less
        // than "Знаю"/"Легко" would.
        sm2Update(cw[0], 3);
        _safe(() => playSound('know'));
        _safe(() => {
          addCombo();
          flashCard(true);
        });
        _safe(() => incrementGoalProgress());
        _safe(() => {
          const gd = getGameData();
          if (gd.goalCur >= gd.goalMax && !gd.confettiShown) {
            gd.confettiShown = today();
            saveGameData(gd);
            launchConfetti();
            _safe(() => playSound('goal'));
          }
        });
        _afterGrade(false);
        return;
      }
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      animCard('next');
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    };
    hardBtn.addEventListener('click', onHardClick);

    const nextBtn = document.getElementById('btn-next')!;
    const onNextClick = (e: MouseEvent) => {
      e.stopPropagation();
      _safe(() => playSound('next'));
      _safe(() => breakCombo());
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    };
    nextBtn.addEventListener('click', onNextClick);

    const dontknowBtn = document.getElementById('btn-dontknow')!;
    const onDontknowClick = (e: MouseEvent) => {
      e.stopPropagation();
      const cw = getCwSnapshot();
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
      const deckLen = getDeckSnapshot().length;
      if (!deckLen) {
        render();
        return;
      }
      setIdx((getIdxSnapshot() + 1) % deckLen);
      render();
    };
    dontknowBtn.addEventListener('click', onDontknowClick);

    const autoBtn = document.getElementById('btn-auto')!;
    const onAutoClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (isAutoRunning()) {
        stopAuto();
      } else {
        startAuto();
      }
    };
    autoBtn.addEventListener('click', onAutoClick);

    const shufBtn = document.getElementById('btn-shuf')!;
    const onShufClick = (e: MouseEvent) => {
      e.stopPropagation();
      stopAuto();
      // Shuffle a copy and swap it into the store — mutating the live
      // deck array in place would silently corrupt any other reference
      // to it (e.g. deck-mode.tsx's _preSpecialDeck restore snapshot)
      // without notifying subscribers via a new array identity.
      setDeck(_shuf(getDeckSnapshot() as WordEntry[]));
      setIdx(0);
      render();
    };
    shufBtn.addEventListener('click', onShufClick);

    const resetBtn = document.getElementById('btn-reset')!;
    const runReset = () => {
      clearAllKnown();
      clearSrsData();
      saveKnown(getKnownSnapshot('en'));
      for (const lang of ALL_TARGET_LANGS) langConfig(lang).saveKnown(getKnownSnapshot(lang));
      saveSRS(getSrsDataSnapshot());
      // Wipes game/daily/achievement/mistake/mode-accuracy/SRS data for
      // EVERY learn language, not just whichever one is currently active —
      // see resetAllLangProgress()'s own comment for why the plain
      // removeItem('ew_game') this replaced wasn't enough for anyone who'd
      // ever practiced more than one target language.
      _safe(() => resetAllLangProgress());
      // Clears the stale 'is-known' class before render() (below) triggers a
      // deck-store dispatch that CardKnownVisuals (card-known-visuals.tsx)
      // recomputes from — that component is the actual per-render owner of
      // this class, this is just a one-off pre-clear so there's no flash of
      // the old state.
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
      _safe(() => render());
    };
    const onResetClick = (e: MouseEvent) => {
      e.stopPropagation();
      const modesOverlay = document.getElementById('modes-overlay');
      if (modesOverlay) modesOverlay.classList.remove('open');
      openResetConfirm(runReset);
    };
    resetBtn.addEventListener('click', onResetClick);

    return () => {
      cardEl.removeEventListener('click', onCardClick);
      speakWordBtn.removeEventListener('click', onSpeakWordClick);
      speakExBtn.removeEventListener('click', onSpeakExClick);
      noteBtn.removeEventListener('click', onNoteClick);
      bookmarkBtn.removeEventListener('click', onBookmarkClick);
      micBtn.removeEventListener('click', onMicClick);
      prevBtn.removeEventListener('click', onPrevClick);
      knowBtn.removeEventListener('click', onKnowClick);
      easyBtn.removeEventListener('click', onEasyClick);
      hardBtn.removeEventListener('click', onHardClick);
      nextBtn.removeEventListener('click', onNextClick);
      dontknowBtn.removeEventListener('click', onDontknowClick);
      autoBtn.removeEventListener('click', onAutoClick);
      shufBtn.removeEventListener('click', onShufClick);
      resetBtn.removeEventListener('click', onResetClick);
    };
  }, []);

  return null;
}
