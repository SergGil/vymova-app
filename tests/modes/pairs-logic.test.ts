import { describe, it, expect, beforeEach } from 'vitest';
import { t } from '../../js/features/i18n.ts';

// ── Re-declared pure helpers from js/modes/pairs.tsx ──
function getBest(): number { return parseFloat(localStorage.getItem('ew_pairs_best') ?? '0'); }
function setBest(secs: number): void { const b = getBest(); if (!b || secs < b) localStorage.setItem('ew_pairs_best', secs.toFixed(1)); }
function fmt(ms: number): string { return (ms / 1000).toFixed(1) + t('common.secSuffix'); }

describe('pairs-logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('fmt()', () => {
    it('formats milliseconds as seconds with one decimal', () => {
      expect(fmt(2500)).toBe('2.5' + t('common.secSuffix'));
      expect(fmt(0)).toBe('0.0' + t('common.secSuffix'));
    });
  });

  describe('getBest() / setBest()', () => {
    it('returns 0 when nothing stored', () => {
      expect(getBest()).toBe(0);
    });

    it('stores the first time recorded', () => {
      setBest(8.4);
      expect(getBest()).toBe(8.4);
    });

    it('only overwrites when the new time is faster (lower)', () => {
      setBest(8.4);
      setBest(10.0);
      expect(getBest()).toBe(8.4);

      setBest(5.1);
      expect(getBest()).toBe(5.1);
    });

    it('treats a stored 0 as "no record" and accepts any new time', () => {
      localStorage.setItem('ew_pairs_best', '0.0');
      setBest(99.9);
      expect(getBest()).toBe(99.9);
    });
  });
});
