import { describe, it, expect, beforeEach } from 'vitest';
import { decodeIpa } from '../../js/core/ui-helpers.ts';

// speakBtn requires DOM — mock window globals
beforeEach(() => {
  (globalThis as any).window = globalThis;
});

describe('decodeIpa()', () => {
  it('empty string → empty string', () => {
    expect(decodeIpa('')).toBe('');
  });

  it('already formatted with brackets → returns as-is', () => {
    expect(decodeIpa('[ˈæktɪv]')).toBe('[ˈæktɪv]');
    expect(decodeIpa('/ˈwɜːrk/')).toBe('/ˈwɜːrk/');
  });

  it('escaped unicode → decoded and wrapped in brackets', () => {
    // \\u0259 = ə, \\u02c8 = ˈ, \\u026at = t (ɪ)
    const raw = '\\u0259\\u02c8be\\u026at';
    const result = decodeIpa(raw);
    expect(result).toContain('ə');
    expect(result).toContain('ˈ');
    expect(result.startsWith('[')).toBe(true);
    expect(result.endsWith(']')).toBe(true);
  });

  it('plain text without brackets → wraps in [...]', () => {
    const result = decodeIpa('helou');
    expect(result).toBe('[helou]');
  });

  it('handles null-ish gracefully', () => {
    expect(decodeIpa('')).toBe('');
  });
});
