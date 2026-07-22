import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import {
  getDeckSnapshot,
  getIdxSnapshot,
  getFlippedSnapshot,
  getCwSnapshot,
} from '../../src/deck-store.ts';
import { getCardAnimSnapshot } from '../../js/core/card-anim-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { setMode } from '../../src/mode-store.ts';
import type { WordEntry } from '../../src/types.js';

const { getComboMult, awardXP } = vi.hoisted(() => ({
  getComboMult: vi.fn(() => 1),
  awardXP: vi.fn(() => 10),
}));
vi.mock('../../js/features/combo.ts', () => ({ getComboMult, awardXP }));

const { getGameData, saveGameData, recordDailyWord, updateStreak, idleFn } = vi.hoisted(() => ({
  getGameData: vi.fn(() => ({ goalCur: 0, goalMax: 20, goalDays: 0, sessionWords: 0, xp: 0 })),
  saveGameData: vi.fn(),
  recordDailyWord: vi.fn(),
  updateStreak: vi.fn((d: any) => d),
  idleFn: vi.fn((fn: () => void) => fn()),
}));
vi.mock('../../js/features/game.ts', () => ({
  getGameData,
  saveGameData,
  recordDailyWord,
  updateStreak,
  _idle: idleFn,
}));

vi.mock('../../js/features/i18n.ts', () => ({ t: (k: string) => k }));

const { renderGameBar } = vi.hoisted(() => ({ renderGameBar: vi.fn() }));
vi.mock('../../js/features/render-game-bar.ts', () => ({ renderGameBar }));

const { refreshGameBarLevel } = vi.hoisted(() => ({ refreshGameBarLevel: vi.fn() }));
vi.mock('../../js/features/game-bar-level.tsx', () => ({ refreshGameBarLevel }));

const { checkAchievements } = vi.hoisted(() => ({ checkAchievements: vi.fn() }));
vi.mock('../../js/features/render-achievements.ts', () => ({ checkAchievements }));

const { maybeSubmitScore } = vi.hoisted(() => ({ maybeSubmitScore: vi.fn() }));
vi.mock('../../js/features/leaderboard.tsx', () => ({ maybeSubmitScore }));

const { loadWikiImage } = vi.hoisted(() => ({ loadWikiImage: vi.fn() }));
vi.mock('../../js/core/images.ts', () => ({
  loadWikiImage,
  _imgCache: {} as Record<string, string | null>,
  _idb: null,
}));

const word1: WordEntry = [
  'hello',
  'привіт',
  'Hello there.',
  'Привіт.',
  '/heˈloʊ/',
  'greeting',
] as unknown as WordEntry;
const word2: WordEntry = [
  'world',
  'світ',
  'The world.',
  'Світ.',
  '/wɜːrld/',
  'noun',
] as unknown as WordEntry;

let engine: typeof import('../../js/core/card-engine.ts');

beforeAll(async () => {
  document.body.innerHTML = `
    <div id="card"><div class="card-face"></div></div>
    <button id="btn-dontknow"></button>
    <select id="sel-range"><option value="srs" selected>srs</option></select>
    <button id="btn-auto"></button>
  `;
  setMode('en-ua');
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  );
  engine = await import('../../js/core/card-engine.ts');
});

describe('card-engine.ts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setKnownWords('en', new Set());
    setKnownWords('es', new Set());
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('setDeck / setIdx / setFlipped', () => {
    it('updates the deck store', () => {
      engine.setDeck([word1, word2]);
      expect(getDeckSnapshot()).toEqual([word1, word2]);

      engine.setIdx(1);
      expect(getIdxSnapshot()).toBe(1);

      engine.setFlipped(true);
      expect(getFlippedSnapshot()).toBe(true);
    });
  });

  describe('stopAuto / isAutoRunning / startAuto', () => {
    it('starts and stops the auto-play timer', () => {
      vi.useFakeTimers();
      expect(engine.isAutoRunning()).toBe(false);

      engine.startAuto();
      expect(engine.isAutoRunning()).toBe(true);

      engine.stopAuto();
      expect(engine.isAutoRunning()).toBe(false);
      expect(getCardAnimSnapshot().autoRunning).toBe(false);
    });
  });

  describe('animCard', () => {
    // The actual '.card-face' classList/reflow-restart DOM work moved to
    // js/features/card-face-anim.tsx's CardFaceAnim (a mounted React
    // component elsewhere in the tree) — animCard() itself now only
    // dispatches to card-anim-store; see tests/features/card-face-anim.test.tsx
    // for the DOM-effect side.
    it('dispatches an animRequest with a fresh seq each call, even for the same dir twice', () => {
      engine.animCard('next');
      const first = getCardAnimSnapshot().animRequest;
      expect(first?.dir).toBe('next');
      engine.animCard('next');
      const second = getCardAnimSnapshot().animRequest;
      expect(second?.dir).toBe('next');
      expect(second?.seq).not.toBe(first?.seq);
    });
  });

  describe('render()', () => {
    beforeEach(() => {
      engine.setDeck([word1, word2]);
      engine.setIdx(0);
    });

    it('resets flipped and picks the current word from the deck', () => {
      engine.setFlipped(true);
      engine.render();

      expect(getFlippedSnapshot()).toBe(false);
      expect(getCwSnapshot()).toEqual(word1);
    });

  });

  describe('onWordLearned()', () => {
    it('updates game data, records progress, and schedules idle work', () => {
      getGameData.mockReturnValue({ goalCur: 0, goalMax: 20, goalDays: 0, sessionWords: 0, xp: 0 });
      engine.onWordLearned();

      expect(saveGameData).toHaveBeenCalled();
      expect(renderGameBar).toHaveBeenCalled();
      expect(recordDailyWord).toHaveBeenCalled();
      expect(maybeSubmitScore).toHaveBeenCalled();
      expect(updateStreak).toHaveBeenCalled();
      expect(refreshGameBarLevel).toHaveBeenCalled();
      expect(checkAchievements).toHaveBeenCalled();
      expect(awardXP).toHaveBeenCalledWith(10);

      const secondCallArg = saveGameData.mock.calls[1][0];
      expect(secondCallArg.sessionWords).toBe(1);
    });
  });

  // "Ціль на сьогодні" (today's goal) — split out from onWordLearned() so it
  // advances on every "Знаю" press (card-actions.ts's onKnowClick calls this
  // unconditionally), not just genuinely-new words, otherwise the ring stops
  // moving for the rest of a review-heavy session once the day's new words
  // run out.
  describe('incrementGoalProgress()', () => {
    it('increments goalCur and saves/re-renders the game bar', () => {
      getGameData.mockReturnValue({ goalCur: 0, goalMax: 20, goalDays: 0, sessionWords: 0, xp: 0 });
      engine.incrementGoalProgress();

      expect(saveGameData).toHaveBeenCalled();
      expect(renderGameBar).toHaveBeenCalled();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(1);
    });

    it('increments goalDays when goalCur reaches goalMax', () => {
      getGameData.mockReturnValue({
        goalCur: 19,
        goalMax: 20,
        goalDays: 0,
        sessionWords: 0,
        xp: 0,
      });
      engine.incrementGoalProgress();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(20);
      expect(firstCallArg.goalDays).toBe(1);
    });

    it('still credits goalDays when the goal was lowered mid-day, past an exact match', () => {
      // goalCur already exceeds goalMax without ever landing exactly on it —
      // regression test for the old `===` check, which would silently never
      // increment goalDays for the rest of the day in this case.
      getGameData.mockReturnValue({
        goalCur: 15,
        goalMax: 10,
        goalDays: 0,
        goalCounted: false,
        sessionWords: 0,
        xp: 0,
      });
      engine.incrementGoalProgress();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(16);
      expect(firstCallArg.goalDays).toBe(1);
      expect(firstCallArg.goalCounted).toBe(true);
    });

    it('does not double-count goalDays for further words learned after the goal is already met', () => {
      getGameData.mockReturnValue({
        goalCur: 20,
        goalMax: 20,
        goalDays: 1,
        goalCounted: true,
        sessionWords: 0,
        xp: 0,
      });
      engine.incrementGoalProgress();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(21);
      expect(firstCallArg.goalDays).toBe(1);
    });
  });
});
