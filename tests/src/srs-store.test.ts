import { describe, it, expect, beforeEach } from 'vitest';
import {
  getSrsDataSnapshot,
  getSrsDirtySnapshot,
  loadSrsData,
  setSrsEntry,
  deleteSrsEntry,
  clearSrsData,
  markSrsStatsClean,
} from '../../src/srs-store.ts';
import type { SRSEntry } from '../../src/types.ts';

const entry1: SRSEntry = { ef: 2.5, reps: 1, interval: 1, due: '2026-01-01' };
const entry2: SRSEntry = { ef: 2.6, reps: 2, interval: 3, due: '2026-01-04' };

describe('srs-store.ts', () => {
  beforeEach(() => {
    clearSrsData();
    markSrsStatsClean();
  });

  it('starts empty and clean after clearSrsData + markSrsStatsClean', () => {
    expect(getSrsDataSnapshot()).toEqual({});
    expect(getSrsDirtySnapshot()).toBe(false);
  });

  it('setSrsEntry adds/updates an entry and marks dirty', () => {
    setSrsEntry('apple', entry1);
    expect(getSrsDataSnapshot()).toEqual({ apple: entry1 });
    expect(getSrsDirtySnapshot()).toBe(true);
  });

  it('setSrsEntry does not clobber other words', () => {
    setSrsEntry('apple', entry1);
    setSrsEntry('dog', entry2);
    expect(getSrsDataSnapshot()).toEqual({ apple: entry1, dog: entry2 });
  });

  it('deleteSrsEntry removes only the targeted word and marks dirty', () => {
    setSrsEntry('apple', entry1);
    setSrsEntry('dog', entry2);
    markSrsStatsClean();
    deleteSrsEntry('apple');
    expect(getSrsDataSnapshot()).toEqual({ dog: entry2 });
    expect(getSrsDirtySnapshot()).toBe(true);
  });

  it('loadSrsData replaces the entire dataset and marks dirty', () => {
    setSrsEntry('apple', entry1);
    loadSrsData({ dog: entry2 });
    expect(getSrsDataSnapshot()).toEqual({ dog: entry2 });
    expect(getSrsDirtySnapshot()).toBe(true);
  });

  it('clearSrsData empties the dataset and marks dirty', () => {
    setSrsEntry('apple', entry1);
    markSrsStatsClean();
    clearSrsData();
    expect(getSrsDataSnapshot()).toEqual({});
    expect(getSrsDirtySnapshot()).toBe(true);
  });

  it('markSrsStatsClean clears the dirty flag without touching data', () => {
    setSrsEntry('apple', entry1);
    expect(getSrsDirtySnapshot()).toBe(true);
    markSrsStatsClean();
    expect(getSrsDirtySnapshot()).toBe(false);
    expect(getSrsDataSnapshot()).toEqual({ apple: entry1 });
  });
});
