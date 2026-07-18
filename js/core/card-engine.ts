// Vymova — js/core/card-engine.ts
// Ядро картки: deck/idx/flipped/cw/autoTimer + render()/анімації/auto-play/onWordLearned.
// Перенесено з js/app.ts (Фаза 7.5, Під-фаза D).
import type { WordEntry } from '../../src/types.js';
import { W } from '../../data/words.js';
import { loadWikiImage, _imgCache } from './images.ts';
import { synth } from './srs.ts';
import { awardXP } from '../features/combo.ts';
import { showComboToast } from '../features/combo-toast.tsx';
import {
  getGameData,
  saveGameData,
  recordDailyWord,
  updateStreak,
  _idle,
} from '../features/game.ts';
import { t } from '../features/i18n.ts';
import { renderGameBar } from '../features/render-game-bar.ts';
import { refreshGameBarLevel as renderLevelBadge } from '../features/game-bar-level.tsx';
import { checkAchievements } from '../features/render-achievements.ts';
import { maybeSubmitScore } from '../features/leaderboard.tsx';
import { getMode } from '../features/mode-utils.ts';
import { safe as _safe } from './card-helpers.ts';
import {
  setDeckState,
  setIdxState,
  setFlippedState,
  renderCardState,
  getDeckSnapshot,
  getIdxSnapshot,
} from '../../src/deck-store.ts';

let autoTimer: ReturnType<typeof setTimeout> | null = null;

setDeckState(W.slice() as unknown as WordEntry[]);

// ── Single-source helpers — call instead of dispatching to the store manually ──
export function setDeck(d: WordEntry[]): void {
  setDeckState(d);
}
export function setIdx(i: number): void {
  setIdxState(i);
}
export function setFlipped(v: boolean): void {
  setFlippedState(v);
}

export function stopAuto(): void {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
  const btnAuto = document.getElementById('btn-auto');
  if (btnAuto) btnAuto.textContent = t('cards.auto');
}

export function isAutoRunning(): boolean {
  return !!autoTimer;
}

export function startAuto(): void {
  autoTimer = setInterval(() => {
    animCard('next');
    const deck = getDeckSnapshot();
    setIdxState((getIdxSnapshot() + 1) % deck.length);
    render();
  }, 4500);
}

// ── Card animation ─────────────────────────────────────────────────────────
export function animCard(dir: 'next' | 'prev' | 'fade'): void {
  const face = document.querySelector<HTMLElement>('.card-face');
  if (!face || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cls = dir === 'next' ? 'anim-next' : dir === 'prev' ? 'anim-prev' : 'anim-fade';
  face.classList.remove('anim-next', 'anim-prev', 'anim-fade');
  void face.offsetWidth; // force reflow
  face.classList.add(cls);
  setTimeout(() => face.classList.remove(cls), 250);
}

// ── Main render ────────────────────────────────────────────────────────────
// Картинка картки (#illus) та індикатори закладки/нотатки рендеряться
// реактивно через CardImage/CardNoteDisplay/CardBookmarkNoteVisuals
// (js/features/card-image.tsx, card-indicators.tsx) — підписані на
// deck-store, оновлюються самі при зміні cw.
export function render(): void {
  try {
    const deck = getDeckSnapshot();
    const mode = getMode();
    if (!deck || !deck.length) {
      // A tag/category filter narrowing the deck to zero words used to leave
      // the previous card frozen on screen with no explanation (only a
      // console.error nobody sees). Pushing cw:null through the store lets
      // WordText render an actual "nothing found" state instead — every
      // other card field already no-ops on cw:null (see card-front-text.tsx).
      renderCardState(null, mode);
      return;
    }
    if (synth) {
      _safe(() => synth.cancel());
    }
    const idx = getIdxSnapshot();
    const cw = deck[idx % deck.length];
    if (!cw) {
      console.error('render: cw is null');
      return;
    }
    renderCardState(cw, mode);
    // #card's 'is-known' class and #btn-dontknow's visibility are owned
    // reactively by CardKnownVisuals (js/features/card-known-visuals.tsx),
    // which re-derives both from the same deck-store this dispatch just
    // updated — see js/core/swipe.tsx's header comment for the full picture
    // of #card's other writers, which touch disjoint classes/style
    // properties and don't conflict with this.
    // Predictive prefetch: наступні картки (без дублів для малих дек)
    _idle(function () {
      _safe(() => {
        const _seen: Record<string, number> = {};
        const _limit = Math.min(4, deck.length - 1);
        for (let _pi = 1; _pi <= _limit; _pi++) {
          const _nw = deck[(idx + _pi) % deck.length];
          if (_nw && !_seen[_nw[0]] && !Object.prototype.hasOwnProperty.call(_imgCache, _nw[0])) {
            _seen[_nw[0]] = 1;
            loadWikiImage(_nw[0], function () {});
          }
        }
      });
    });
  } catch (e) {
    console.error('render FAILED:', (e as Error).message);
  }
}

// "Ціль на сьогодні" (today's goal) tracks words *practiced* this session —
// called on every "Знаю" press, not just genuinely-new words (see
// onWordLearned() below for the latter) — otherwise the ring stops moving
// for the rest of a review-heavy session once the day's new words run out.
export function incrementGoalProgress(): void {
  const d = getGameData();
  d.goalCur = (d.goalCur || 0) + 1;
  // >= (not ===) so lowering the daily goal mid-session — after goalCur had
  // already passed the new, lower value — still credits the day; goalCounted
  // (reset alongside goalCur on the next new day) stops this from
  // re-incrementing goalDays on every word learned after the goal is hit.
  if (d.goalCur >= d.goalMax && !d.goalCounted) {
    d.goalDays = (d.goalDays || 0) + 1;
    d.goalCounted = true;
  }
  saveGameData(d);
  renderGameBar();
}

export function onWordLearned(): void {
  let d = getGameData();
  d = updateStreak(d);
  saveGameData(d);
  renderGameBar();
  recordDailyWord();
  _safe(() => maybeSubmitScore());
  const gd2 = getGameData();
  gd2.sessionWords = (gd2.sessionWords || 0) + 1;
  saveGameData(gd2);
  const xp = awardXP(10); // ×2/×3 з комбо
  _safe(() => showComboToast(`+${xp} XP`));
  _idle(function () {
    _safe(() => renderLevelBadge());
    _safe(() => checkAchievements());
  });
}
