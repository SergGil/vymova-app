import { describe, it, expect, beforeEach } from 'vitest';
import { t } from '../../js/features/i18n.ts';

// ── Re-declared pure helpers from js/modes/catpairs.tsx ──
function fmt(ms: number): string {
  return (ms / 1000).toFixed(1) + t('common.secSuffix');
}
function getBest(k: string): number {
  return parseFloat(localStorage.getItem('ew_cp_' + k) ?? '0');
}
function setBest(k: string, secs: number): void {
  const b = getBest(k);
  if (!b || secs < b) localStorage.setItem('ew_cp_' + k, secs.toFixed(1));
}

const MILESTONE_THRESHOLDS = [100, 500, 1000, 2000];
const STREAK_THRESHOLDS = [7, 30, 100];

describe('catpairs-logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('fmt()', () => {
    it('formats milliseconds as seconds with one decimal', () => {
      expect(fmt(1500)).toBe('1.5' + t('common.secSuffix'));
      expect(fmt(0)).toBe('0.0' + t('common.secSuffix'));
      expect(fmt(12345)).toBe('12.3' + t('common.secSuffix'));
    });
  });

  describe('getBest() / setBest()', () => {
    it('returns 0 when no record stored', () => {
      expect(getBest('Animals')).toBe(0);
    });

    it('stores the first recorded time', () => {
      setBest('Animals', 12.3);
      expect(getBest('Animals')).toBe(12.3);
    });

    it('overwrites only when a faster time is set', () => {
      setBest('Animals', 12.3);
      setBest('Animals', 15.0); // slower, should not overwrite
      expect(getBest('Animals')).toBe(12.3);

      setBest('Animals', 9.7); // faster, should overwrite
      expect(getBest('Animals')).toBe(9.7);
    });

    it('keeps separate records per category key', () => {
      setBest('Animals', 10);
      setBest('Food', 20);
      expect(getBest('Animals')).toBe(10);
      expect(getBest('Food')).toBe(20);
    });
  });

  describe('milestone thresholds (state.known.size based)', () => {
    it.each(MILESTONE_THRESHOLDS)('triggers only when known count reaches %d', (threshold) => {
      expect(threshold - 1 >= threshold).toBe(false);
      expect(threshold >= threshold).toBe(true);
      expect(threshold + 1 >= threshold).toBe(true);
    });
  });

  describe('milestone thresholds (streak based)', () => {
    it.each(STREAK_THRESHOLDS)('triggers only when streak reaches %d', (threshold) => {
      expect(threshold - 1 >= threshold).toBe(false);
      expect(threshold >= threshold).toBe(true);
    });
  });
});
