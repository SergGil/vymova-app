import { describe, it, expect, vi } from 'vitest';
import { safe, boldEn, boldUa, boldHead, srsStatusInfo } from '../../js/core/card-helpers.ts';
import type { WordEntry } from '../../src/types.js';

// ── Helpers ────────────────────────────────────────────────────
const w = (en: string, ua: string): WordEntry =>
  [en, ua, '', '', ''] as unknown as WordEntry;

// ══════════════════════════════════════════════════════════════
describe('safe()', () => {
  it('calls the function normally', () => {
    const fn = vi.fn();
    safe(fn);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('swallows errors instead of throwing', () => {
    expect(() => safe(() => { throw new Error('boom'); })).not.toThrow();
  });

  it('warns to console on error', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    safe(() => { throw new Error('oops'); });
    expect(spy).toHaveBeenCalledWith('[safe]', 'oops');
    spy.mockRestore();
  });
});

// ══════════════════════════════════════════════════════════════
describe('boldEn()', () => {
  it('returns empty string for empty src', () => {
    expect(boldEn('', w('rob', 'грабувати'))).toBe('');
  });

  it('returns src unchanged when already contains <b>', () => {
    const src = 'The bank was <b>robbed</b>.';
    expect(boldEn(src, w('rob', 'грабувати'))).toBe(src);
  });

  it('wraps a simple word form with <b>', () => {
    expect(boldEn('The bank was robbed by a gang.', w('rob', 'грабувати')))
      .toBe('The bank was <b>robbed</b> by a gang.');
  });

  it('matches the exact headword', () => {
    expect(boldEn('She must abandon the plan.', w('abandon', 'покидати')))
      .toBe('She must <b>abandon</b> the plan.');
  });

  it('is case-insensitive', () => {
    expect(boldEn('ABANDON all hope.', w('abandon', 'покидати')))
      .toBe('<b>ABANDON</b> all hope.');
  });

  it('strips parenthesised notes before matching', () => {
    // w[0] = "go (somewhere)" → cleans to "go"
    expect(boldEn('Where did you go last night?', w('go (somewhere)', 'йти')))
      .toBe('Where did you <b>go</b> last night?');
  });

  it('handles multi-word headword (phrase)', () => {
    // "give up" → regex `give\w*\s+up\w*`
    expect(boldEn('She decided to give up smoking.', w('give up', 'кидати')))
      .toBe('She decided to <b>give up</b> smoking.');
  });

  it('escapes regex special characters in headword', () => {
    // headword "c++" → should not throw; src without match → returned unchanged
    const result = boldEn('Learn c++ programming.', w('c++', 'мова'));
    expect(result).toContain('c++');
  });

  it('returns src unchanged when headword is not found', () => {
    const src = 'The sun is shining brightly.';
    expect(boldEn(src, w('abandon', 'покидати'))).toBe(src);
  });

  it('only wraps the FIRST occurrence', () => {
    const result = boldEn('rob rob rob', w('rob', 'грабувати'));
    const count = (result.match(/<b>/g) || []).length;
    expect(count).toBe(1);
  });
});

// ══════════════════════════════════════════════════════════════
describe('boldUa()', () => {
  it('returns src unchanged (not empty string) for empty src', () => {
    expect(boldUa('', w('rob', 'грабувати'))).toBe('');
  });

  it('returns src unchanged when already contains <b>', () => {
    const src = 'Банк <b>пограбували</b>.';
    expect(boldUa(src, w('rob', 'грабувати'))).toBe(src);
  });

  it('uses only the first segment of w[1] (before ; or ,)', () => {
    // w[1] = "покидати; залишати" → uses "покидати"
    expect(boldUa('Він вирішив покидати місто.', w('abandon', 'покидати; залишати')))
      .toBe('Він вирішив <b>покидати</b> місто.');
  });

  it('is case-insensitive for latin characters', () => {
    expect(boldUa('LEARN english.', w('learn', 'LEARN')))
      .toBe('<b>LEARN</b> english.');
  });

  it('returns src unchanged when UA word is not found', () => {
    const src = 'Зовсім інший текст.';
    expect(boldUa(src, w('abandon', 'покидати'))).toBe(src);
  });
});

// ══════════════════════════════════════════════════════════════
describe('boldHead()', () => {
  it('returns empty string for empty src', () => {
    expect(boldHead('', 'abandon')).toBe('');
  });

  it('returns src unchanged for empty word', () => {
    const src = 'Some sentence.';
    expect(boldHead(src, '')).toBe(src);
  });

  it('returns src unchanged when already contains <b>', () => {
    const src = 'She <b>abandoned</b> the plan.';
    expect(boldHead(src, 'abandon')).toBe(src);
  });

  it('wraps the matching word', () => {
    expect(boldHead('She must abandon the plan.', 'abandon'))
      .toBe('She must <b>abandon</b> the plan.');
  });

  it('is case-insensitive', () => {
    expect(boldHead('ABANDON all hope.', 'abandon'))
      .toBe('<b>ABANDON</b> all hope.');
  });

  it('uses only the first segment when word contains ; or /', () => {
    expect(boldHead('She must abandon the plan.', 'abandon; forsake'))
      .toBe('She must <b>abandon</b> the plan.');
    expect(boldHead('She must abandon the plan.', 'abandon/forsake'))
      .toBe('She must <b>abandon</b> the plan.');
  });

  it('strips parenthesised notes before matching', () => {
    expect(boldHead('Let go of the rope.', 'go (somewhere)'))
      .toBe('Let <b>go</b> of the rope.');
  });

  it('returns src unchanged when word not found', () => {
    const src = 'The sun is shining.';
    expect(boldHead(src, 'abandon')).toBe(src);
  });

  it('handles word that cleans to empty string', () => {
    // "(note)" → cleans to "" → returns src unchanged
    const src = 'Some sentence.';
    expect(boldHead(src, '(note)')).toBe(src);
  });
});

// ══════════════════════════════════════════════════════════════
describe('srsStatusInfo()', () => {
  const TODAY = '2025-01-15';

  describe('no SRS record', () => {
    it('returns null for range "all"', () => {
      expect(srsStatusInfo(undefined, TODAY, 'all')).toBeNull();
    });

    it('returns null for range "bookmarks"', () => {
      expect(srsStatusInfo(undefined, TODAY, 'bookmarks')).toBeNull();
    });

    it('returns "new" badge for range "srs"', () => {
      const r = srsStatusInfo(undefined, TODAY, 'srs');
      expect(r).not.toBeNull();
      expect(r!.text).toBe('🆕 Нове');
      expect(r!.className).toBe('srs-next new');
      expect(r!.show).toBe(true);
    });

    it('returns "new" badge for range "weak"', () => {
      const r = srsStatusInfo(undefined, TODAY, 'weak');
      expect(r!.text).toBe('🆕 Нове');
    });

    it('returns null when sd exists but has no due date', () => {
      expect(srsStatusInfo({ ef: 2.5, reps: 1 }, TODAY, 'all')).toBeNull();
    });
  });

  describe('overdue', () => {
    it('1 day overdue → "день"', () => {
      const r = srsStatusInfo({ due: '2025-01-14' }, TODAY, 'all');
      expect(r!.text).toBe('🔴 Прострочено 1 день');
      expect(r!.className).toBe('srs-next over');
    });

    it('2 days overdue → "дні"', () => {
      const r = srsStatusInfo({ due: '2025-01-13' }, TODAY, 'all');
      expect(r!.text).toBe('🔴 Прострочено 2 дні');
    });

    it('5 days overdue → "днів"', () => {
      const r = srsStatusInfo({ due: '2025-01-10' }, TODAY, 'all');
      expect(r!.text).toBe('🔴 Прострочено 5 днів');
    });
  });

  describe('due today', () => {
    it('same day → "Повторити сьогодні"', () => {
      const r = srsStatusInfo({ due: TODAY }, TODAY, 'all');
      expect(r!.text).toBe('🟡 Повторити сьогодні');
      expect(r!.className).toBe('srs-next today');
    });
  });

  describe('due soon (1-3 days)', () => {
    it('1 day ahead → "Через 1 день"', () => {
      const r = srsStatusInfo({ due: '2025-01-16' }, TODAY, 'all');
      expect(r!.text).toBe('⏰ Через 1 день');
      expect(r!.className).toBe('srs-next soon');
    });

    it('2 days ahead → "Через 2 дні"', () => {
      const r = srsStatusInfo({ due: '2025-01-17' }, TODAY, 'all');
      expect(r!.text).toBe('⏰ Через 2 дні');
    });

    it('3 days ahead → "Через 3 дні"', () => {
      const r = srsStatusInfo({ due: '2025-01-18' }, TODAY, 'all');
      expect(r!.text).toBe('⏰ Через 3 дні');
    });
  });

  describe('due later (4+ days)', () => {
    it('4 days ahead → "Через 4 дні"', () => {
      const r = srsStatusInfo({ due: '2025-01-19' }, TODAY, 'all');
      expect(r!.text).toBe('✅ Через 4 дні');
      expect(r!.className).toBe('srs-next ok');
    });

    it('5 days ahead → "Через 5 днів"', () => {
      const r = srsStatusInfo({ due: '2025-01-20' }, TODAY, 'all');
      expect(r!.text).toBe('✅ Через 5 днів');
    });

    it('30 days ahead → "Через 30 днів"', () => {
      const r = srsStatusInfo({ due: '2025-02-14' }, TODAY, 'all');
      expect(r!.text).toBe('✅ Через 30 днів');
    });
  });
});
