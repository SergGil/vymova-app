// Vymova — js/core/card-engine.ts
// Ядро картки: deck/idx/flipped/cw/autoTimer + render()/анімації/auto-play/onWordLearned.
// Перенесено з js/app.ts (Фаза 7.5, Під-фаза D).
import type { WordEntry } from '../../src/types.js';
import { W } from '../../data/words.js';
import { loadWikiImage, _imgCache } from './images.ts';
import { notifyStateChange } from '../../src/store.ts';
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
import { updateRing } from '../features/ring.tsx';
import { getMode, getActiveKnownSet } from '../features/mode-utils.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
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

function _activeKnown(): Set<string> {
  return getActiveKnownSet(getMode(), getKnownSnapshot('en'));
}

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

// Helper: get cached element with null safety
function $e(id: string): HTMLElement {
  return $el[id] as HTMLElement;
}

// Кеш DOM-елементів: уникаємо getElementById на кожен render()
const $el: Record<string, HTMLElement | null> = {};
['card'].forEach(function (id: string) {
  $el[id] = document.getElementById(id);
});

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
    if (!deck || !deck.length) {
      console.error('render: deck empty');
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
    const mode = getMode();
    renderCardState(cw, mode);
    const cardEl = $e('card');
    if (cardEl) {
      if (_activeKnown().has(cw[0])) {
        cardEl.classList.add('is-known');
      } else {
        cardEl.classList.remove('is-known');
      }
    }
    _safe(() => {
      const dontKnowEl = document.getElementById('btn-dontknow') as HTMLElement | null;
      if (dontKnowEl) {
        const rangeVal = (document.getElementById('sel-range') as HTMLSelectElement)!.value;
        dontKnowEl.style.display = rangeVal === 'srs' ? '' : 'none';
      }
    });
    _safe(() => {
      updateRing();
    });
    notifyStateChange();
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

export function onWordLearned(): void {
  let d = getGameData();
  d.goalCur = (d.goalCur || 0) + 1;
  // >= (not ===) so lowering the daily goal mid-session — after goalCur had
  // already passed the new, lower value — still credits the day; goalCounted
  // (reset alongside goalCur on the next new day) stops this from
  // re-incrementing goalDays on every word learned after the goal is hit.
  if (d.goalCur >= d.goalMax && !d.goalCounted) {
    d.goalDays = (d.goalDays || 0) + 1;
    d.goalCounted = true;
  }
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
