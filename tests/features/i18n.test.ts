import { describe, it, expect, beforeEach } from 'vitest';
import { t, tLang, getLang, wordsLabel, pluralLabel } from '../../js/features/i18n.ts';

describe('i18n', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('falls back to Ukrainian by default', () => {
    expect(getLang()).toBe('ua');
  });

  it('translates a known key for the current language', () => {
    expect(t('nav.cards')).toBe('Картки');
  });

  it('returns the key itself for an unknown key', () => {
    expect(t('does.not.exist')).toBe('does.not.exist');
  });

  it('tLang translates a key for an explicit language regardless of current language', () => {
    expect(tLang('nav.cards', 'ua')).toBe('Картки');
    expect(tLang('nav.cards', 'en')).toBe('Cards');
    expect(tLang('nav.cards', 'es')).toBe('Tarjetas');
  });

  it('interpolates {{n}}-style placeholders via params', () => {
    expect(tLang('wd.inDays', 'ua', { n: 3 })).toBe('Через 3 дн.');
    expect(tLang('wd.inDays', 'en', { n: 3 })).toBe('In 3 days');
    expect(tLang('wd.inDays', 'es', { n: 3 })).toBe('En 3 días');
  });

  it('wordsLabel applies Ukrainian one/few/many plural rules (1/2-4/5+)', () => {
    expect(wordsLabel(1)).toBe('слово');
    expect(wordsLabel(2)).toBe('слова');
    expect(wordsLabel(5)).toBe('слів');
    expect(wordsLabel(11)).toBe('слів');
    expect(wordsLabel(21)).toBe('слово');
    expect(wordsLabel(22)).toBe('слова');
    expect(wordsLabel(25)).toBe('слів');
  });

  it('pluralLabel applies Ukrainian one/few/many plural rules for other counters', () => {
    expect(pluralLabel('common_day', 1)).toBe('день');
    expect(pluralLabel('common_day', 2)).toBe('дні');
    expect(pluralLabel('common_day', 5)).toBe('днів');
    expect(pluralLabel('common_rep', 1)).toBe('повторення');
    expect(pluralLabel('common_rep', 2)).toBe('повторення');
    expect(pluralLabel('common_rep', 5)).toBe('повторень');
    expect(pluralLabel('common_chapter', 1)).toBe('розділ');
    expect(pluralLabel('common_chapter', 2)).toBe('розділи');
    expect(pluralLabel('common_chapter', 5)).toBe('розділів');
    expect(pluralLabel('common_fragment', 1)).toBe('фрагмент');
    expect(pluralLabel('common_fragment', 2)).toBe('фрагменти');
    expect(pluralLabel('common_fragment', 5)).toBe('фрагментів');
  });

  it('renders full counter strings via t() with n + unit interpolation', () => {
    expect(t('wd.repsCount', { n: 1, unit: pluralLabel('common_rep', 1) })).toBe('1 повторення');
    expect(t('wd.repsCount', { n: 5, unit: pluralLabel('common_rep', 5) })).toBe('5 повторень');
    expect(
      tLang('stats.perDayCount', 'en', { n: 1, unit: tLang('common_day', 'en', { count: 1 }) }),
    ).toBe('(last 1 day)');
    expect(
      tLang('stats.perDayCount', 'en', { n: 7, unit: tLang('common_day', 'en', { count: 7 }) }),
    ).toBe('(last 7 days)');
  });
});
