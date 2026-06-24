import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import { createElement, act } from 'react';
import { createRoot } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { setKnownWords, getKnownSnapshot, markKnown } from '../../src/known-words-store.ts';
import { loadKnown, loadSRS } from '../../js/core/storage.ts';
import type { WordEntry } from '../../src/types.js';

// card-actions.ts wires up real button click handlers for the flashcard UI.
// It pulls in many feature modules (audio, voice, speech, pronunciation,
// similar-words, word-context, ...) that aren't relevant to the
// know/don't-know/reset logic under test, so they're stubbed out.
const gameData = {
  streak: 0, streakDate: null, shields: 0, goalMax: 20, goalCur: 0,
  goalDate: '', goalDays: 0, confettiShown: null as string | null,
  sessionWords: 0, xp: 0, maxCombo: 0,
};
const saveGameData = vi.fn();

vi.mock('../../js/features/game.ts', () => ({
  getGameData: () => gameData,
  saveGameData,
  getLevel: () => ({ name: '⭐ Test', min: 0, color: '#000', bg: '#fff' }),
  getNextLevel: () => null,
  registerCheckAchievements: vi.fn(),
  recordDailyWord: vi.fn(),
  updateStreak: (d: unknown) => d,
  _idle: (fn: () => void) => fn(),
  getSrsNewRemaining: () => 10,
  recordSrsNewCard: vi.fn(),
}));
vi.mock('../../js/features/combo.ts', () => ({
  addCombo: vi.fn(), breakCombo: vi.fn(), flashCard: vi.fn(),
}));
vi.mock('../../js/features/notes.ts', () => ({
  openNoteModal: vi.fn(), hasNote: vi.fn(() => false),
}));
vi.mock('../../js/features/bookmarks.ts', () => ({
  toggleBookmark: vi.fn(() => true),
}));
vi.mock('../../js/features/pronunciation.ts', () => ({
  isPronuncSupported: vi.fn(() => false),
  showPronuncResult: vi.fn(),
  startPronunciationCheck: vi.fn(),
}));
vi.mock('../../js/features/voice.ts', () => ({
  getSelectedUkVoice: vi.fn(() => null),
  getSelectedEsVoice: vi.fn(() => null),
}));
vi.mock('../../js/features/speech.ts', () => ({
  speak: vi.fn(), _speakWithLang: vi.fn(),
}));
vi.mock('../../js/features/similar-words.tsx', () => ({
  updateSimilarWords: vi.fn(),
}));
vi.mock('../../js/core/audio.ts', () => ({
  playSound: vi.fn(),
}));
vi.mock('../../js/core/confetti.tsx', () => ({
  launchConfetti: vi.fn(),
}));
vi.mock('../../js/features/i18n.ts', () => ({
  t: (k: string) => k,
}));

const engineSetIdx = vi.fn((i: number) => { state.idx = i; });
const engineSetDeck = vi.fn((d: WordEntry[]) => { state.deck = d; });
const engineSetFlipped = vi.fn((v: boolean) => { state.flipped = v; });
const engineRender = vi.fn();
const engineAnimCard = vi.fn();
const engineStopAuto = vi.fn();
const engineStartAuto = vi.fn();
const engineIsAutoRunning = vi.fn(() => false);
const engineOnWordLearned = vi.fn();
vi.mock('../../js/core/card-engine.ts', () => ({
  setIdx: engineSetIdx,
  setDeck: engineSetDeck,
  setFlipped: engineSetFlipped,
  render: engineRender,
  animCard: engineAnimCard,
  stopAuto: engineStopAuto,
  startAuto: engineStartAuto,
  isAutoRunning: engineIsAutoRunning,
  onWordLearned: engineOnWordLearned,
}));

const W: WordEntry[] = [
  ['apple',  'яблуко',  'I eat an apple.',   'Я їм яблуко.'],
  ['banana', 'банан',   'The banana is yellow.', 'Банан жовтий.'],
  ['cat',    'кіт',     'The cat sleeps.',   'Кіт спить.'],
];

beforeAll(async () => {
  document.body.innerHTML = `
    <div id="card">
      <div id="card-front"></div>
      <div id="wtransl"></div>
      <div id="exua"></div>
    </div>
    <button id="speak-word"></button>
    <button id="speak-ex"></button>
    <button id="btn-note"></button>
    <button id="btn-bookmark"></button>
    <button id="btn-mic"></button>
    <button id="btn-prev"></button>
    <button id="btn-know"></button>
    <button id="btn-next"></button>
    <button id="btn-dontknow"></button>
    <button id="btn-auto"></button>
    <button id="btn-shuf"></button>
    <button id="btn-reset"></button>
    <div id="modal-overlay" style="display:none">
      <button id="modal-cancel"></button>
      <button id="modal-confirm"></button>
    </div>
    <select id="sel-mode"><option value="en" selected>en</option></select>
    <select id="sel-range">
      <option value="all">all</option>
      <option value="srs" selected>srs</option>
      <option value="unlearned">unlearned</option>
    </select>
  `;

  (globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

  const { CardActionsInit } = await import('../../js/features/card-actions.ts');
  const mountEl = document.createElement('div');
  document.body.appendChild(mountEl);
  act(() => { createRoot(mountEl).render(createElement(CardActionsInit)); });
});

function setRange(v: string): void {
  (document.getElementById('sel-range') as HTMLSelectElement).value = v;
}

beforeEach(() => {
  setKnownWords('en', new Set<string>());
  state.srsData = {};
  state._baseWords = W as unknown as WordEntry[];
  state._activeTagSet = null;
  state._srsStatsDirty = false;
  state.TODAY = '2024-06-01';
  localStorage.clear();

  state.cw = W[0];
  state.flipped = false;
  state.deck = W.slice() as unknown as WordEntry[];
  state.idx = 0;
  engineSetIdx.mockClear();
  engineSetDeck.mockClear();
  engineSetFlipped.mockClear();
  engineRender.mockClear();
  engineAnimCard.mockClear();
  engineStopAuto.mockClear();
  engineStartAuto.mockClear();
  engineIsAutoRunning.mockClear();
  engineOnWordLearned.mockClear();

  gameData.goalCur = 0;
  gameData.goalMax = 20;
  gameData.confettiShown = null;
  saveGameData.mockClear();

  setRange('srs');
});

// ── btn-know ──────────────────────────────────────────────────
describe('btn-know', () => {
  it('marks the current word as known and applies a correct SM-2 update (srs range)', () => {
    document.getElementById('btn-know')!.click();

    expect(getKnownSnapshot('en').has('apple')).toBe(true);
    expect(state.srsData['apple']).toBeDefined();
    expect(state.srsData['apple'].reps).toBe(1);
    expect(state.srsData['apple'].interval).toBe(1);
    expect(state.srsData['apple'].due).toBe('2024-06-02');
  });

  it('persists known + SRS state to localStorage', () => {
    document.getElementById('btn-know')!.click();

    expect(loadKnown().has('apple')).toBe(true);
    expect(loadSRS()['apple']).toBeDefined();
  });

  it('rebuilds the SRS deck and resets index when range = srs', () => {
    document.getElementById('btn-know')!.click();

    expect(engineSetDeck).toHaveBeenCalled();
    expect(engineSetIdx).toHaveBeenCalledWith(0);
    expect(engineRender).toHaveBeenCalled();
  });

  it('drops stale SRS progress when marking known outside the SRS range', () => {
    state.srsData['apple'] = { ef: 2.0, reps: 3, interval: 10, due: '2024-05-01', lapses: 1 };
    setRange('all');

    document.getElementById('btn-know')!.click();

    expect(getKnownSnapshot('en').has('apple')).toBe(true);
    expect(state.srsData['apple']).toBeUndefined();
  });

  it('advances to the next card when range = all', () => {
    setRange('all');
    state.idx = 0;

    document.getElementById('btn-know')!.click();

    expect(engineSetIdx).toHaveBeenCalledWith(1);
    expect(engineRender).toHaveBeenCalled();
  });

  it('calls onWordLearned only the first time a word becomes known', () => {
    setRange('all');
    document.getElementById('btn-know')!.click();
    expect(engineOnWordLearned).toHaveBeenCalledTimes(1);

    state.cw = W[0]; // already known now
    document.getElementById('btn-know')!.click();
    expect(engineOnWordLearned).toHaveBeenCalledTimes(1);
  });

  it('launches confetti once the daily goal is reached for the first time', async () => {
    const { launchConfetti } = await import('../../js/core/confetti.tsx');
    setRange('all');
    gameData.goalCur = 20;
    gameData.goalMax = 20;

    document.getElementById('btn-know')!.click();

    expect(launchConfetti).toHaveBeenCalled();
    expect(gameData.confettiShown).toBe('2024-06-01');
    expect(saveGameData).toHaveBeenCalled();
  });

  it('does nothing when there is no current word', () => {
    state.cw = null;
    state.deck = [] as unknown as WordEntry[];

    document.getElementById('btn-know')!.click();

    expect(getKnownSnapshot('en').size).toBe(0);
    expect(engineRender).toHaveBeenCalled();
  });
});

// ── btn-dontknow ──────────────────────────────────────────────
describe('btn-dontknow', () => {
  it('applies a "wrong" SM-2 update and resets the interval/reps', () => {
    state.srsData['apple'] = { ef: 2.5, reps: 3, interval: 10, due: '2024-05-01', lapses: 0 };

    document.getElementById('btn-dontknow')!.click();

    expect(state.srsData['apple'].reps).toBe(0);
    expect(state.srsData['apple'].interval).toBe(1);
    expect(state.srsData['apple'].lapses).toBe(1);
    expect(state.srsData['apple'].due).toBe('2024-06-02');
  });

  it('persists SRS state and rebuilds the deck when range = srs', () => {
    document.getElementById('btn-dontknow')!.click();

    expect(loadSRS()['apple']).toBeDefined();
    expect(engineSetDeck).toHaveBeenCalled();
    expect(engineSetIdx).toHaveBeenCalledWith(0);
  });

  it('advances to the next card without rebuilding the deck when range != srs', () => {
    setRange('all');
    state.idx = 0;

    document.getElementById('btn-dontknow')!.click();

    expect(engineSetDeck).not.toHaveBeenCalled();
    expect(engineSetIdx).toHaveBeenCalledWith(1);
  });
});

// ── modal-confirm (reset progress) ─────────────────────────────
describe('modal-confirm (reset progress)', () => {
  it('clears known words and SRS data, both in memory and storage', () => {
    markKnown('en', 'apple');
    state.srsData['apple'] = { ef: 2.5, reps: 1, interval: 1, due: '2024-06-02' };
    state._gameCache = { ...gameData };
    state._dailyCache = { foo: 1 };

    document.getElementById('modal-confirm')!.click();

    expect(getKnownSnapshot('en').size).toBe(0);
    expect(state.srsData).toEqual({});
    expect(loadKnown().size).toBe(0);
    expect(loadSRS()).toEqual({});
    expect(state._gameCache).toBeNull();
    expect(state._dailyCache).toBeNull();
  });

  it('removes cached gamification keys from localStorage', () => {
    localStorage.setItem('ew_game', '{}');
    localStorage.setItem('ew_daily', '{}');
    localStorage.setItem('ew_ach', '{}');

    document.getElementById('modal-confirm')!.click();

    expect(localStorage.getItem('ew_game')).toBeNull();
    expect(localStorage.getItem('ew_daily')).toBeNull();
    expect(localStorage.getItem('ew_ach')).toBeNull();
  });

  it('hides the reset confirmation modal afterwards', () => {
    const overlay = document.getElementById('modal-overlay')!;
    overlay.style.display = 'flex';

    document.getElementById('modal-confirm')!.click();

    expect(overlay.style.display).toBe('none');
  });
});

// ── modal-cancel ────────────────────────────────────────────────
describe('modal-cancel', () => {
  it('hides the reset confirmation modal without clearing progress', () => {
    const overlay = document.getElementById('modal-overlay')!;
    overlay.style.display = 'flex';
    markKnown('en', 'apple');

    document.getElementById('modal-cancel')!.click();

    expect(overlay.style.display).toBe('none');
    expect(getKnownSnapshot('en').has('apple')).toBe(true);
  });
});

// ── btn-shuf / btn-prev / btn-next ──────────────────────────────
describe('navigation buttons', () => {
  it('btn-shuf shuffles the deck, resets index and re-renders', () => {
    document.getElementById('btn-shuf')!.click();

    expect(engineStopAuto).toHaveBeenCalled();
    expect(engineSetIdx).toHaveBeenCalledWith(0);
    expect(engineRender).toHaveBeenCalled();
  });

  it('btn-prev wraps around to the last card', () => {
    state.idx = 0;
    document.getElementById('btn-prev')!.click();

    expect(engineSetIdx).toHaveBeenCalledWith(W.length - 1);
    expect(engineAnimCard).toHaveBeenCalledWith('prev');
  });

  it('btn-next advances the index and breaks the combo', async () => {
    const { breakCombo } = await import('../../js/features/combo.ts');
    state.idx = 0;
    document.getElementById('btn-next')!.click();

    expect(engineSetIdx).toHaveBeenCalledWith(1);
    expect(breakCombo).toHaveBeenCalled();
  });
});
