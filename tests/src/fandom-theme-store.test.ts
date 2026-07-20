import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FANDOM_THEME_KEYS } from '../../src/fandom-theme-store.ts';
import type * as FandomThemeStoreModule from '../../src/fandom-theme-store.ts';

// Module-init self-heals from localStorage and applies body[data-theme]/CSS
// for whichever theme wins — needs a fresh module instance per test (via
// vi.resetModules() + dynamic import) to control the starting conditions,
// same pattern used elsewhere in this repo for module-init-driven stores.
async function freshModule(): Promise<typeof FandomThemeStoreModule> {
  vi.resetModules();
  return import('../../src/fandom-theme-store.ts');
}

describe('fandom-theme-store.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
    delete document.body.dataset.theme;
  });

  it('starts with no active theme when nothing is saved', async () => {
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBeNull();
    expect(document.body.dataset.theme).toBeUndefined();
  });

  it('restores a saved theme on module init, applying body[data-theme]', async () => {
    localStorage.setItem('ew_sw', '1');
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.body.dataset.theme).toBe('sw');
  });

  it('self-heals stale state where two keys were both saved as "1" — first wins, rest cleared', async () => {
    // FANDOM_THEME_KEYS order: sw, hp, ... — sw comes first.
    localStorage.setItem('ew_hp', '1');
    localStorage.setItem('ew_sw', '1');
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.body.dataset.theme).toBe('sw');
    expect(localStorage.getItem('ew_hp')).toBe('0');
  });

  it('toggleFandomTheme() turns a theme on: body[data-theme] + localStorage + store', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBe('hp');
    expect(document.body.dataset.theme).toBe('hp');
    expect(localStorage.getItem('ew_hp')).toBe('1');
  });

  it('toggleFandomTheme() on the already-active key turns it off', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('hp');
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBeNull();
    expect(document.body.dataset.theme).toBeUndefined();
    expect(localStorage.getItem('ew_hp')).toBe('0');
  });

  it('toggleFandomTheme() enforces mutual exclusivity — switching clears the previous one', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('sw');
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBe('hp');
    expect(document.body.dataset.theme).toBe('hp');
    expect(localStorage.getItem('ew_sw')).toBe('0');
    expect(localStorage.getItem('ew_hp')).toBe('1');
  });

  it('toggleFandomTheme() with an unknown key is a silent no-op', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    expect(() => toggleFandomTheme('not-a-real-theme')).not.toThrow();
    expect(getActiveFandomTheme()).toBeNull();
  });

  // Theme CSS is split out of styles.css into per-theme files
  // (css/themes/<key>.css), loaded only for the theme actually in use — see
  // legacy-modernization-roadmap.md item 2. All 14 keys have an extracted
  // file today, but _loadThemeCss()'s glob-miss guard stays in place for
  // whenever a 15th theme is added before its CSS is split out — this
  // exercises every real key end to end as a regression net either way.
  it('toggles every fandom theme key without throwing', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    for (const key of FANDOM_THEME_KEYS) {
      expect(() => toggleFandomTheme(key)).not.toThrow();
      expect(getActiveFandomTheme()).toBe(key);
      toggleFandomTheme(key); // turn it back off before the next key
    }
  });
});
