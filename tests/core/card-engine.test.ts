import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.js';

const { getComboMult, awardXP } = vi.hoisted(() => ({ getComboMult: vi.fn(() => 1), awardXP: vi.fn(() => 10) }));
vi.mock('../../js/features/combo.ts', () => ({ getComboMult, awardXP }));

const {
  getGameData, saveGameData, recordDailyWord, updateStreak, idleFn,
} = vi.hoisted(() => ({
  getGameData: vi.fn(() => ({ goalCur: 0, goalMax: 20, goalDays: 0, sessionWords: 0, xp: 0 })),
  saveGameData: vi.fn(),
  recordDailyWord: vi.fn(),
  updateStreak: vi.fn((d: any) => d),
  idleFn: vi.fn((fn: () => void) => fn()),
}));
vi.mock('../../js/features/game.ts', () => ({
  getGameData, saveGameData, recordDailyWord, updateStreak, _idle: idleFn,
}));

const { isBookmarked } = vi.hoisted(() => ({ isBookmarked: vi.fn(() => false) }));
vi.mock('../../js/features/bookmarks.ts', () => ({ isBookmarked }));

const { getNoteForWord, hasNote } = vi.hoisted(() => ({
  getNoteForWord: vi.fn(() => ''),
  hasNote: vi.fn(() => false),
}));
vi.mock('../../js/features/notes.ts', () => ({ getNoteForWord, hasNote }));

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

const { isOnlineCheck, offlineSvg } = vi.hoisted(() => ({
  isOnlineCheck: vi.fn(() => true),
  offlineSvg: vi.fn(() => ''),
}));
vi.mock('../../js/features/offline.ts', () => ({ _isOnlineCheck: isOnlineCheck, _offlineSvg: offlineSvg }));

const { loadWikiImage } = vi.hoisted(() => ({ loadWikiImage: vi.fn() }));
vi.mock('../../js/core/images.ts', () => ({
  loadWikiImage,
  _imgCache: {} as Record<string, string | null>,
  _idb: null,
}));

const { getIllus } = vi.hoisted(() => ({ getIllus: vi.fn(() => '') }));
vi.mock('../../data/illustrations.js', () => ({ getIllus }));

const { notifyStateChange } = vi.hoisted(() => ({ notifyStateChange: vi.fn() }));
vi.mock('../../src/store.ts', () => ({ notifyStateChange }));

const word1: WordEntry = ['hello', 'привіт', 'Hello there.', 'Привіт.', '/heˈloʊ/', 'greeting'] as unknown as WordEntry;
const word2: WordEntry = ['world', 'світ', 'The world.', 'Світ.', '/wɜːrld/', 'noun'] as unknown as WordEntry;

let engine: typeof import('../../js/core/card-engine.ts');

beforeAll(async () => {
  document.body.innerHTML = `
    <div id="illus"></div>
    <div id="card"><div class="card-face"></div></div>
    <button id="btn-note"></button>
    <button id="btn-bookmark"></button>
    <div id="card-note-display"></div>
    <button id="btn-dontknow"></button>
    <select id="sel-range"><option value="srs" selected>srs</option></select>
    <select id="sel-mode"><option value="en-ua" selected>en-ua</option></select>
    <button id="btn-auto"></button>
  `;
  vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
  engine = await import('../../js/core/card-engine.ts');
});

describe('card-engine.ts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    state.known = new Set();
    state.knownEs = new Set();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('setDeck / setIdx / setFlipped', () => {
    it('updates module + shared state', () => {
      engine.setDeck([word1, word2]);
      expect(state.deck).toEqual([word1, word2]);

      engine.setIdx(1);
      expect(state.idx).toBe(1);

      engine.setFlipped(true);
      expect(state.flipped).toBe(true);
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
      vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
      const face = document.querySelector('.card-face') as HTMLElement;
      face.classList.remove('anim-fade');
      engine.animCard('fade');
      expect(face.classList.contains('anim-fade')).toBe(false);
      vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
    });
  });

  describe('render()', () => {
    beforeEach(() => {
      engine.setDeck([word1, word2]);
      engine.setIdx(0);
    });

    it('renders the current word and refreshes indicators', () => {
      isBookmarked.mockReturnValue(true);
      hasNote.mockReturnValue(true);
      getNoteForWord.mockReturnValue('my note');

      engine.render();

      expect(state.flipped).toBe(false);
      expect(state.cw).toEqual(word1);

      const bmBtn = document.getElementById('btn-bookmark')!;
      expect(bmBtn.textContent).toBe('★');

      const noteDisp = document.getElementById('card-note-display')!;
      expect(noteDisp.textContent).toBe('📝 my note');
      expect(noteDisp.style.display).toBe('');

      expect(notifyStateChange).toHaveBeenCalled();
      expect(updateRing).toHaveBeenCalled();
    });

    it('marks the card as known when the word is in the active known set', () => {
      state.known.add(word1[0]);
      engine.render();
      expect(document.getElementById('card')!.classList.contains('is-known')).toBe(true);

      state.known.delete(word1[0]);
      engine.render();
      expect(document.getElementById('card')!.classList.contains('is-known')).toBe(false);
    });

    it('shows the local illustration fallback when no cached image exists', () => {
      getIllus.mockReturnValue('<svg>icon</svg>');
      engine.render();
      const illus = document.getElementById('illus')!;
      expect(illus.innerHTML).toBe('<svg>icon</svg>');
      expect(illus.style.display).toBe('');
    });

    it('shows the offline placeholder when offline and no illustration exists', () => {
      getIllus.mockReturnValue('');
      isOnlineCheck.mockReturnValue(false);
      offlineSvg.mockReturnValue('<svg>offline</svg>');
      engine.render();
      const illus = document.getElementById('illus')!;
      expect(illus.innerHTML).toBe('<svg>offline</svg>');
    });

    it('toggles the don\'t-know button based on sel-range value', () => {
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
      getGameData.mockReturnValue({ goalCur: 19, goalMax: 20, goalDays: 0, sessionWords: 0, xp: 0 });
      engine.onWordLearned();
      const firstCallArg = saveGameData.mock.calls[0][0];
      expect(firstCallArg.goalCur).toBe(20);
      expect(firstCallArg.goalDays).toBe(1);
    });
  });
});
