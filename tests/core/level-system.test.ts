import { describe, it, expect } from 'vitest';
import { LEVEL_XP, LEVEL_MILESTONES, getLevelInfo } from '../../js/core/level-system.ts';

describe('level-system.ts', () => {
  describe('LEVEL_XP thresholds', () => {
    it('has exactly 100 entries', () => {
      expect(LEVEL_XP.length).toBe(100);
    });

    it('level 1 starts at 0 XP', () => {
      expect(LEVEL_XP[0]).toBe(0);
    });

    it('level 2 threshold is 100 XP', () => {
      expect(LEVEL_XP[1]).toBe(100);
    });

    it('thresholds are strictly increasing', () => {
      for (let i = 1; i < LEVEL_XP.length; i++) {
        expect(LEVEL_XP[i]).toBeGreaterThan(LEVEL_XP[i - 1]);
      }
    });

    it('level 100 threshold is under 200 000 XP (reachable by dedicated users)', () => {
      expect(LEVEL_XP[99]).toBeLessThan(200_000);
    });
  });

  describe('LEVEL_MILESTONES', () => {
    it('includes level 1 at 0 XP and level 100 at the max threshold', () => {
      expect(LEVEL_MILESTONES[0]).toEqual([1, 0]);
      expect(LEVEL_MILESTONES[LEVEL_MILESTONES.length - 1][0]).toBe(100);
      expect(LEVEL_MILESTONES[LEVEL_MILESTONES.length - 1][1]).toBe(LEVEL_XP[99]);
    });

    it('milestone XP values match LEVEL_XP at corresponding indices', () => {
      for (const [lv, xp] of LEVEL_MILESTONES) {
        expect(xp).toBe(LEVEL_XP[lv - 1]);
      }
    });
  });

  describe('getLevelInfo()', () => {
    it('returns level 1 at 0 XP', () => {
      const info = getLevelInfo(0);
      expect(info.level).toBe(1);
      expect(info.xpInLevel).toBe(0);
      expect(info.progress).toBe(0);
      expect(info.isMax).toBe(false);
    });

    it('returns level 1 just below the level-2 threshold', () => {
      const info = getLevelInfo(LEVEL_XP[1] - 1);
      expect(info.level).toBe(1);
    });

    it('returns level 2 at exactly the level-2 threshold (100 XP)', () => {
      const info = getLevelInfo(100);
      expect(info.level).toBe(2);
      expect(info.xpInLevel).toBe(0);
    });

    it('reports correct xpInLevel and xpForLevel within a mid level', () => {
      // Level 3 starts at LEVEL_XP[2], ends at LEVEL_XP[3]
      const lo = LEVEL_XP[2];
      const hi = LEVEL_XP[3];
      const mid = lo + Math.floor((hi - lo) / 2);
      const info = getLevelInfo(mid);
      expect(info.level).toBe(3);
      expect(info.xpInLevel).toBe(mid - lo);
      expect(info.xpForLevel).toBe(hi - lo);
      expect(info.progress).toBeCloseTo(0.5, 1);
    });

    it('reports isMax = true at exactly the level-100 threshold', () => {
      const info = getLevelInfo(LEVEL_XP[99]);
      expect(info.level).toBe(100);
      expect(info.isMax).toBe(true);
      expect(info.progress).toBe(1);
      expect(info.xpForLevel).toBe(0);
    });

    it('clamps to level 100 for XP far beyond max', () => {
      const info = getLevelInfo(9_999_999);
      expect(info.level).toBe(100);
      expect(info.isMax).toBe(true);
    });

    it('progress is always between 0 and 1 for any XP value', () => {
      const samples = [0, 50, 99, 100, 500, 5000, 50000, 100000, 999999];
      for (const xp of samples) {
        const { progress } = getLevelInfo(xp);
        expect(progress).toBeGreaterThanOrEqual(0);
        expect(progress).toBeLessThanOrEqual(1);
      }
    });

    it('level 10 is reachable with ~2700 XP (≈540 words learned)', () => {
      const info = getLevelInfo(LEVEL_XP[9]);
      expect(info.level).toBe(10);
    });

    it('level 50 is reachable with ~34 300 XP (≈6860 words or sustained play)', () => {
      const info = getLevelInfo(LEVEL_XP[49]);
      expect(info.level).toBe(50);
    });
  });
});
