import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  t,
  tLang,
  getLang,
  wordsLabel,
  pluralLabel,
  ensureLocaleLoaded,
  levelName,
  achName,
} from '../../js/features/i18n.ts';

describe('i18n', () => {
  beforeAll(async () => {
    // Tests call tLang(..., 'en'/'es'/'fr') — pre-load those locales.
    await Promise.all(['en', 'es', 'fr'].map(ensureLocaleLoaded));
  });

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

  // fallbackLng used to be 'ua' — confusing for the overwhelming majority of
  // users, since only 7 of the 136 dictionary languages have a matching UI
  // locale, so most users never see Ukrainian anywhere else in the app (an
  // English speaker learning Hindi, with UI language set to English, would
  // see Ukrainian text for any gap in the English locale file). Picks an
  // actual current gap (locales/fr/translation.json is missing a handful of
  // keys locales/en has) instead of a hardcoded key name, so this doesn't
  // silently stop testing anything once that particular gap gets translated.
  it('falls back to English (not Ukrainian) for a key missing from another locale', () => {
    const root = join(__dirname, '../..');
    const en = JSON.parse(readFileSync(join(root, 'locales/en/translation.json'), 'utf8'));
    const fr = JSON.parse(readFileSync(join(root, 'locales/fr/translation.json'), 'utf8'));
    const missingKey = Object.keys(en).find((k) => !(k in fr));
    expect(missingKey, 'expected at least one key present in en but missing from fr').toBeTruthy();
    expect(tLang(missingKey!, 'fr')).toBe(tLang(missingKey!, 'en'));
    expect(tLang(missingKey!, 'fr')).not.toBe(tLang(missingKey!, 'ua'));
  });

  // levels/categories/skills/achievements have no 'ua' resource bundle at
  // all — Ukrainian text for these lives directly in source data (game.ts's
  // LEVELS, data/achievements.ts) and only ever surfaces via i18next.t()'s
  // `defaultValue`. That relied on fallbackLng matching the active 'ua'
  // language so the lookup harmlessly "failed" and defaultValue kicked in.
  // Switching fallbackLng to 'en' above broke this silently: since en DOES
  // have real translations for these namespaces, the lookup started
  // *succeeding* via the fallback chain, pre-empting defaultValue and
  // showing English to a Ukrainian-UI user — caught by
  // achievements-page.test.tsx failing, not by intent, hence this explicit
  // regression test.
  it('levelName/achName show the Ukrainian source text (not an English fallback) when active language is ua', () => {
    expect(getLang()).toBe('ua'); // baseline this test depends on
    expect(levelName('✨ Чутливий до Сили')).toBe('✨ Чутливий до Сили');
    expect(achName({ id: 'words100', name: 'Перший крок' })).toBe('Перший крок');
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
