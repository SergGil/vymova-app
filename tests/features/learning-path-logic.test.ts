import { describe, it, expect } from 'vitest';
import {
  computeCefrStats,
  findCurrentLevel,
  filterDailyWords,
  computePersonalPace,
  estimateDays,
  updateCompletionDates,
  type PaceSnapshot,
} from '../../js/features/learning-path-logic.ts';
import type { WordEntry } from '../../src/types.ts';

function makeWord(en: string): WordEntry {
  return [en, 'тест', '', '', ''] as unknown as WordEntry;
}

describe('learning-path-logic.ts', () => {
  describe('computeCefrStats', () => {
    it('counts total and known words per CEFR level', () => {
      const words = [makeWord('able'), makeWord('about'), makeWord('above')];
      const known = new Set(['able']);
      const stats = computeCefrStats(known, words);
      expect(stats.A1.total).toBe(3);
      expect(stats.A1.known).toBe(1);
      expect(stats.A1.pct).toBe(Math.round(1 / 3 * 100));
    });

    it('returns 0% for levels with no words', () => {
      const stats = computeCefrStats(new Set(), []);
      expect(stats.A1).toEqual({ total: 0, known: 0, pct: 0 });
      expect(stats.C2).toEqual({ total: 0, known: 0, pct: 0 });
    });
  });

  describe('findCurrentLevel', () => {
    it('returns the first level below 70% known', () => {
      const stats = computeCefrStats(new Set(), [makeWord('able')]);
      expect(findCurrentLevel(stats)).toBe('A1');
    });

    it('returns C2 when all levels are at or above 70%', () => {
      const stats = computeCefrStats(new Set(), []);
      (['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).forEach(l => { stats[l].pct = 100; });
      expect(findCurrentLevel(stats)).toBe('C2');
    });
  });

  describe('filterDailyWords', () => {
    it('filters words by level, excludes known words, and limits results', () => {
      const words = [makeWord('able'), makeWord('about'), makeWord('above'), makeWord('after')];
      const known = new Set(['able']);
      const result = filterDailyWords('A1', known, words, 2);
      expect(result.length).toBe(2);
      result.forEach(w => expect(w[0]).not.toBe('able'));
    });
  });

  describe('computePersonalPace', () => {
    it('returns null with fewer than two snapshots', () => {
      expect(computePersonalPace([])).toBeNull();
      expect(computePersonalPace([{ date: '2026-01-01', count: 5 }])).toBeNull();
    });

    it('returns null when all snapshots share the same date', () => {
      const snaps: PaceSnapshot[] = [
        { date: '2026-01-01', count: 5 },
        { date: '2026-01-01', count: 10 },
      ];
      expect(computePersonalPace(snaps)).toBeNull();
    });

    it('computes words-per-day pace between oldest and newest snapshots', () => {
      const snaps: PaceSnapshot[] = [
        { date: '2026-01-01', count: 0 },
        { date: '2026-01-05', count: 40 },
      ];
      expect(computePersonalPace(snaps)).toBe(10);
    });

    it('clamps negative pace to 0', () => {
      const snaps: PaceSnapshot[] = [
        { date: '2026-01-01', count: 40 },
        { date: '2026-01-05', count: 0 },
      ];
      expect(computePersonalPace(snaps)).toBe(0);
    });
  });

  describe('estimateDays', () => {
    it('uses the given pace to estimate days remaining', () => {
      expect(estimateDays(100, 10)).toBe(10);
      expect(estimateDays(95, 10)).toBe(10);
    });

    it('falls back to a pace of 20 when pace is null or zero', () => {
      expect(estimateDays(40, null)).toBe(2);
      expect(estimateDays(40, 0)).toBe(2);
    });

    it('never returns less than 1', () => {
      expect(estimateDays(0, 10)).toBe(1);
    });
  });

  describe('updateCompletionDates', () => {
    it('records today for levels that newly reach 90%', () => {
      const stats = computeCefrStats(new Set(['able']), [makeWord('able')]);
      const updated = updateCompletionDates(stats, {}, '2026-06-15');
      expect(updated.A1).toBe('2026-06-15');
    });

    it('does not overwrite an existing completion date', () => {
      const stats = computeCefrStats(new Set(['able']), [makeWord('able')]);
      const updated = updateCompletionDates(stats, { A1: '2026-01-01' }, '2026-06-15');
      expect(updated.A1).toBe('2026-01-01');
    });

    it('does not record dates for levels below 90%', () => {
      const stats = computeCefrStats(new Set(), [makeWord('able'), makeWord('about')]);
      const updated = updateCompletionDates(stats, {}, '2026-06-15');
      expect(updated.A1).toBeUndefined();
    });
  });
});
