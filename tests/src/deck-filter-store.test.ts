import { describe, it, expect, beforeEach } from 'vitest';
import {
  getBaseWordsSnapshot,
  getActiveTagSetSnapshot,
  setBaseWords,
  setActiveTagSet,
  setDeckFilter,
} from '../../src/deck-filter-store.ts';
import type { WordEntry } from '../../src/types.ts';

const cw1: WordEntry = ['apple', 'яблуко', '', ''];
const cw2: WordEntry = ['dog', 'собака', '', ''];

describe('deck-filter-store.ts', () => {
  beforeEach(() => {
    setDeckFilter([], null);
  });

  it('starts empty', () => {
    expect(getBaseWordsSnapshot()).toEqual([]);
    expect(getActiveTagSetSnapshot()).toBeNull();
  });

  it('setBaseWords only touches baseWords', () => {
    setActiveTagSet(new Set(['animals']));
    setBaseWords([cw1]);
    expect(getBaseWordsSnapshot()).toEqual([cw1]);
    expect(getActiveTagSetSnapshot()).toEqual(new Set(['animals']));
  });

  it('setActiveTagSet only touches activeTagSet', () => {
    setBaseWords([cw1, cw2]);
    setActiveTagSet(new Set(['food']));
    expect(getBaseWordsSnapshot()).toEqual([cw1, cw2]);
    expect(getActiveTagSetSnapshot()).toEqual(new Set(['food']));
  });

  it('setActiveTagSet accepts null to clear the filter', () => {
    setActiveTagSet(new Set(['food']));
    setActiveTagSet(null);
    expect(getActiveTagSetSnapshot()).toBeNull();
  });

  it('setDeckFilter replaces both fields atomically', () => {
    setBaseWords([cw1]);
    setActiveTagSet(new Set(['food']));
    setDeckFilter([cw2], new Set(['animals']));
    expect(getBaseWordsSnapshot()).toEqual([cw2]);
    expect(getActiveTagSetSnapshot()).toEqual(new Set(['animals']));
  });
});
