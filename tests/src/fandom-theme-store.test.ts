import { describe, it, expect, beforeEach, vi } from 'vitest';
import type * as FandomThemeStoreModule from '../../src/fandom-theme-store.ts';

// Module-init self-heals from localStorage and applies the body class/CSS
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
  });

  it('starts with no active theme when nothing is saved', async () => {
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBeNull();
    expect(document.body.classList.length).toBe(0);
  });

  it('restores a saved theme on module init, applying the body class', async () => {
    localStorage.setItem('ew_sw', '1');
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.body.classList.contains('sw')).toBe(true);
  });

  it('self-heals stale state where two keys were both saved as "1" — first wins, rest cleared', async () => {
    // FANDOM_THEME_KEYS order: sw, hp, ... — sw comes first.
    localStorage.setItem('ew_hp', '1');
    localStorage.setItem('ew_sw', '1');
    const { getActiveFandomTheme } = await freshModule();
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.body.classList.contains('sw')).toBe(true);
    expect(document.body.classList.contains('hp')).toBe(false);
    expect(localStorage.getItem('ew_hp')).toBe('0');
  });

  it('toggleFandomTheme() turns a theme on: body class + localStorage + store', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBe('hp');
    expect(document.body.classList.contains('hp')).toBe(true);
    expect(localStorage.getItem('ew_hp')).toBe('1');
  });

  it('toggleFandomTheme() on the already-active key turns it off', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('hp');
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBeNull();
    expect(document.body.classList.contains('hp')).toBe(false);
    expect(localStorage.getItem('ew_hp')).toBe('0');
  });

  it('toggleFandomTheme() enforces mutual exclusivity — switching clears the previous one', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    toggleFandomTheme('sw');
    toggleFandomTheme('hp');
    expect(getActiveFandomTheme()).toBe('hp');
    expect(document.body.classList.contains('sw')).toBe(false);
    expect(document.body.classList.contains('hp')).toBe(true);
    expect(localStorage.getItem('ew_sw')).toBe('0');
    expect(localStorage.getItem('ew_hp')).toBe('1');
  });

  it('toggleFandomTheme() with an unknown key is a silent no-op', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    expect(() => toggleFandomTheme('not-a-real-theme')).not.toThrow();
    expect(getActiveFandomTheme()).toBeNull();
  });

  // Regression: theme CSS is split out of styles.css into per-theme files
  // (css/themes/<key>.css), loaded only for the theme actually in use — see
  // legacy-modernization-roadmap.md item 2. Toggling a theme without an
  // extracted file yet (any key besides 'sw' today) must be a silent no-op
  // for the CSS-loading step specifically, not throw.
  it('toggling a theme with no extracted CSS file yet does not throw', async () => {
    const { toggleFandomTheme, getActiveFandomTheme } = await freshModule();
    expect(() => toggleFandomTheme('hp')).not.toThrow();
    expect(getActiveFandomTheme()).toBe('hp');
  });
});
