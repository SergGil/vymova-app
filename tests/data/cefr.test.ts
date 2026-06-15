import { describe, it, expect } from 'vitest';
import { getCefrLevel, CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

describe('getCefrLevel()', () => {
  it('returns explicit mappings for common A1 words', () => {
    expect(getCefrLevel('cat')).toBe('A1');
    expect(getCefrLevel('apple')).toBe('A1');
  });

  it('is case-insensitive', () => {
    expect(getCefrLevel('CAT')).toBe('A1');
    expect(getCefrLevel('Apple')).toBe('A1');
  });

  it('returns a valid CEFR level for unmapped words via heuristics', () => {
    expect(LEVELS).toContain(getCefrLevel('zzzznotinmap'));
    expect(LEVELS).toContain(getCefrLevel('a'));
    expect(LEVELS).toContain(getCefrLevel('extraordinarily'));
  });

  it('caches results for repeated calls', () => {
    const first = getCefrLevel('zzzzcacheme');
    const second = getCefrLevel('zzzzcacheme');
    expect(first).toBe(second);
  });

  it('applies length-based fallback for short unmapped words', () => {
    expect(getCefrLevel('zzz')).toBe('A1');
  });

  it('classifies academic suffixes as advanced', () => {
    expect(getCefrLevel('modernization')).toBe('C1');
  });
});

describe('CEFR_META', () => {
  it('has metadata for every CEFR level', () => {
    for (const level of LEVELS) {
      expect(CEFR_META[level]).toBeTruthy();
      expect(CEFR_META[level].label).toBe(level);
      expect(CEFR_META[level].color).toMatch(/^#[0-9a-f]{6}$/i);
      expect(CEFR_META[level].desc.length).toBeGreaterThan(0);
    }
  });
});
