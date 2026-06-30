import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import {
  getDeckSnapshot,
  getIdxSnapshot,
  getFlippedSnapshot,
  getCwSnapshot,
} from '../../src/deck-store.ts';
import { setKnownWords, markKnown, unmarkKnown } from '../../src/known-words-store.ts';
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

const { updateRing } = vi.hoisted(() => ({ updateRing: vi.fn() }));
vi.mock('../../js/features/ring.tsx', () => ({ updateRing }));

const { loadWikiImage } = vi.hoisted(() => ({ loadWikiImage: vi.fn() }));
vi.mock('../../js/core/images.ts', () => ({
  loadWikiImage,
  _imgCache: {} as Record<string, string | null>,
  _idb: null,
}));

const { notifyStateChange } = vi.hoisted(() => ({ notifyStateChange: vi.fn() }));
vi.mock('../../src/store.ts', () => ({ notifyStateChange }));

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
    <select id="sel-mode"><option value="en-ua" selected>en-ua</option></select>
    <button id="btn-auto"></button>
  `;
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
      expect(document.getElementById('btn-auto')!.textContent).toBe('cards.auto');
    });
  });

  describe('animCard', () => {
    it('adds and then removes the animation class', () => {
      vi.useFakeTimers();
      const face = document.querySelector('.card-face') as HTMLElement;
      engine.animCard('next');
      expect(face.classList.contains('anim-next')).toBe(true);
      vi.advanceTimersByTime(250);
      expect(face.classList.contains('anim-next')).toBe(false);
    });

    it('does nothing when reduced motion is preferred', () => {
      vi.stubGlobal(
        'matchMedia',
        vi.fn(() => ({ matches: true })),
      );
      const face = document.querySelector('.card-face') as HTMLElement;
      face.classList.remove('anim-fade');
      engine.animCard('fade');
      expect(face.classList.contains('anim-fade')).toBe(false);
      vi.stubGlobal(
        'matchMedia',
        vi.fn(() => ({ matches: false })),
      );
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
      expect(notifyStateChange).toHaveBeenCalled();
      expect(updateRing).toHaveBeenCalled();
    });

    it('marks the card as known when the word is in the active known set', () => {
      markKnown('en', word1[0]);
      engine.render();
      expect(document.getElementById('card')!.classList.contains('is-known')).toBe(true);

      unmarkKnown('en', word1[0]);
      engine.render();
      expect(document.getElementById('card')!.classList.contains('is-known')).toBe(false);
    });

    it("toggles the don't-know button based on sel-range value", () => {
      (document.getElementById('sel-range') as HTMLSelectElement).value = 'srs';
      engine.render();
      expect(document.getElementById('btn-dontknow')!.style.display).toBe('');

      (document.getElementById('sel-range') as HTMLSelectElement).value = 'all';
      engine.render();
      expect(document.getElementById('btn-dontknow')!.style.display).toBe('none');
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

    it('increments goalDays when goalCur reaches goalMax', () => {
      getGameData.mockReturnValue({
        goalCur: 19,
        goalMax: 20,
        goalDays: 0,
        sessionWords: 0,
        xp: 0,
      });
      engine.onWordLearned();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(20);
      expect(firstCallArg.goalDays).toBe(1);
    });
  });
});
