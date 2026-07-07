import { describe, it, expect } from 'vitest';
import {
  saveGhostIfBetter,
  ghostFraction,
  fmt,
  loadGhost,
  ghostKey,
  type GhostData,
} from '../../js/modes/ghost-race.tsx';

describe('ghost-race-logic', () => {
  describe('saveGhostIfBetter()', () => {
    // Regression guard: the original scoring only compared elapsed time, so
    // racing through wrong answers as fast as possible could "beat" an
    // accurate, slower run. Accuracy must win first; time is only the
    // tiebreaker between equally-accurate runs.
    it('a more accurate run replaces the ghost even if it took longer', () => {
      const prev: GhostData = { checkpoints: [1000], total: 1000, ok: 3 };
      const current: GhostData = { checkpoints: [5000], total: 5000, ok: 8 };
      expect(saveGhostIfBetter(current, prev)).toBe(true);
    });

    it('a faster but less accurate run does NOT replace the ghost', () => {
      const prev: GhostData = { checkpoints: [5000], total: 5000, ok: 8 };
      const current: GhostData = { checkpoints: [1000], total: 1000, ok: 3 };
      expect(saveGhostIfBetter(current, prev)).toBe(false);
    });

    it('among equally-accurate runs, the faster one wins', () => {
      const prev: GhostData = { checkpoints: [5000], total: 5000, ok: 8 };
      const faster: GhostData = { checkpoints: [3000], total: 3000, ok: 8 };
      const slower: GhostData = { checkpoints: [9000], total: 9000, ok: 8 };
      expect(saveGhostIfBetter(faster, prev)).toBe(true);
      expect(saveGhostIfBetter(slower, prev)).toBe(false);
    });

    it('always saves when there is no previous ghost', () => {
      const current: GhostData = { checkpoints: [1000], total: 1000, ok: 1 };
      expect(saveGhostIfBetter(current, null)).toBe(true);
    });
  });

  describe('ghostFraction()', () => {
    it('returns 0 for an empty checkpoint list', () => {
      expect(ghostFraction([], 500)).toBe(0);
    });

    it('returns 1 once elapsed time reaches the final checkpoint', () => {
      expect(ghostFraction([1000, 2000, 3000], 3000)).toBe(1);
      expect(ghostFraction([1000, 2000, 3000], 5000)).toBe(1);
    });

    it('returns 0 exactly at the start', () => {
      expect(ghostFraction([1000, 2000], 0)).toBe(0);
    });

    it('interpolates linearly between two checkpoints', () => {
      // Halfway between checkpoint 0 (at 1000ms) and checkpoint 1 (at 2000ms)
      // should read as halfway through the second of two questions.
      const frac = ghostFraction([1000, 2000], 1500);
      expect(frac).toBeCloseTo(1.5 / 2, 5);
    });

    it('is monotonically non-decreasing as elapsed time grows', () => {
      const checkpoints = [800, 1900, 2600, 4100];
      let prev = 0;
      for (let ms = 0; ms <= 5000; ms += 250) {
        const frac = ghostFraction(checkpoints, ms);
        expect(frac).toBeGreaterThanOrEqual(prev);
        prev = frac;
      }
    });
  });

  describe('fmt()', () => {
    it('formats milliseconds as seconds with one decimal place', () => {
      expect(fmt(1500)).toContain('1.5');
      expect(fmt(12340)).toContain('12.3');
    });
  });

  describe('loadGhost()', () => {
    it('returns null when nothing is stored', () => {
      localStorage.removeItem(ghostKey());
      expect(loadGhost()).toBeNull();
    });

    it('returns null for corrupt JSON instead of throwing', () => {
      localStorage.setItem(ghostKey(), '{not json');
      expect(loadGhost()).toBeNull();
    });

    it('returns null for a validly-parsed but shape-mismatched value', () => {
      localStorage.setItem(ghostKey(), JSON.stringify({ foo: 'bar' }));
      expect(loadGhost()).toBeNull();
    });

    it('round-trips a saved GhostData, defaulting ok to checkpoints.length if missing', () => {
      localStorage.setItem(
        ghostKey(),
        JSON.stringify({ checkpoints: [100, 200, 300], total: 300 }),
      );
      const loaded = loadGhost();
      expect(loaded).toEqual({ checkpoints: [100, 200, 300], total: 300, ok: 3 });
    });

    it('preserves an explicit ok value when present', () => {
      localStorage.setItem(
        ghostKey(),
        JSON.stringify({ checkpoints: [100, 200, 300], total: 300, ok: 1 }),
      );
      expect(loadGhost()?.ok).toBe(1);
    });
  });
});
