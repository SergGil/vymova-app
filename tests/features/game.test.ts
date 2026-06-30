import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getMistakes,
  recordMistake,
  clearMistake,
  getHardWords,
  getModeAccuracy,
  recordModeAnswer,
} from '../../js/features/game.ts';

// ── localStorage mock ─────────────────────────────────────────
const _store: Record<string, string> = {};
const localStorageMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => {
    _store[k] = v;
  },
  removeItem: (k: string) => {
    delete _store[k];
  },
  clear: () => {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
  get length() {
    return Object.keys(_store).length;
  },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

beforeEach(() => {
  localStorageMock.clear();
  vi.stubGlobal('localStorage', localStorageMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

// ── Mistakes ──────────────────────────────────────────────────
describe('recordMistake / getMistakes', () => {
  it('records a mistake for a word', () => {
    recordMistake('apple');
    const m = getMistakes();
    expect(m['apple']).toBe(1);
  });

  it('increments count on repeated mistakes', () => {
    recordMistake('apple');
    recordMistake('apple');
    recordMistake('apple');
    expect(getMistakes()['apple']).toBe(3);
  });

  it('tracks multiple words independently', () => {
    recordMistake('apple');
    recordMistake('banana');
    recordMistake('apple');
    const m = getMistakes();
    expect(m['apple']).toBe(2);
    expect(m['banana']).toBe(1);
  });

  it('clearMistake removes the word', () => {
    recordMistake('apple');
    clearMistake('apple');
    expect(getMistakes()['apple']).toBeUndefined();
  });

  it('clearMistake on non-existent word does not throw', () => {
    expect(() => clearMistake('nonexistent')).not.toThrow();
  });
});

describe('getHardWords()', () => {
  it('returns words sorted by mistake count descending', () => {
    recordMistake('cat');
    recordMistake('cat');
    recordMistake('cat');
    recordMistake('dog');
    recordMistake('dog');
    recordMistake('bird');
    const hard = getHardWords(10);
    expect(hard[0]).toBe('cat');
    expect(hard[1]).toBe('dog');
    expect(hard[2]).toBe('bird');
  });

  it('respects limit parameter', () => {
    for (let i = 0; i < 20; i++) recordMistake(`word${i}`);
    const hard = getHardWords(5);
    expect(hard.length).toBe(5);
  });

  it('returns empty array when no mistakes', () => {
    expect(getHardWords(10)).toEqual([]);
  });
});

// ── Mode accuracy ─────────────────────────────────────────────
describe('recordModeAnswer / getModeAccuracy', () => {
  it('records correct answer', () => {
    recordModeAnswer('quiz', true);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(1);
    expect(acc['quiz']?.err).toBe(0);
  });

  it('records wrong answer', () => {
    recordModeAnswer('quiz', false);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(0);
    expect(acc['quiz']?.err).toBe(1);
  });

  it('accumulates correctly across multiple answers', () => {
    recordModeAnswer('write', true);
    recordModeAnswer('write', true);
    recordModeAnswer('write', false);
    const acc = getModeAccuracy();
    expect(acc['write']?.ok).toBe(2);
    expect(acc['write']?.err).toBe(1);
  });

  it('tracks different modes independently', () => {
    recordModeAnswer('quiz', true);
    recordModeAnswer('tempo', false);
    const acc = getModeAccuracy();
    expect(acc['quiz']?.ok).toBe(1);
    expect(acc['tempo']?.err).toBe(1);
  });
});
