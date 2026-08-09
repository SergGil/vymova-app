import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { FandomThemeRowsController } from '../../js/features/fandom-theme-rows.tsx';
import { getActiveFandomTheme, toggleFandomTheme } from '../../src/fandom-theme-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root;

function mount(): void {
  const container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(<FandomThemeRowsController />);
  });
}

describe('fandom-theme-rows.tsx (FandomThemeRowsController)', () => {
  beforeEach(() => {
    // The store is a module-scope singleton shared across this whole test
    // file — reset it to "no theme active" before each test regardless of
    // what a previous test left it as.
    const active = getActiveFandomTheme();
    if (active) toggleFandomTheme(active);
    localStorage.clear();
    document.body.className = '';

    // full-react-migration-roadmap.md Phase 6: the 14 rows/pills/extra-wrap/
    // toggle-button are rendered by the component itself now — only
    // title-sw-toggle (header-left.tsx's quick-toggle button, a sibling
    // component's output) still needs a fixture.
    document.body.innerHTML = `
      <button id="title-sw-toggle"></button>
    `;
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    const active = getActiveFandomTheme();
    if (active) toggleFandomTheme(active);
    document.body.innerHTML = '';
  });

  it('clicking a set-<key> row activates that theme and updates its pill', () => {
    mount();
    act(() => {
      document
        .getElementById('set-sw')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.getElementById('set-sw-pill')!.classList.contains('on')).toBe(true);
  });

  it('activating one theme turns the previously-active pill off', () => {
    mount();
    act(() => {
      document
        .getElementById('set-sw')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    act(() => {
      document
        .getElementById('set-hp')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActiveFandomTheme()).toBe('hp');
    expect(document.getElementById('set-sw-pill')!.classList.contains('on')).toBe(false);
    expect(document.getElementById('set-hp-pill')!.classList.contains('on')).toBe(true);
  });

  it('clicking the header quick-toggle (title-<key>-toggle) also activates the theme', () => {
    mount();
    act(() => {
      document
        .getElementById('title-sw-toggle')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActiveFandomTheme()).toBe('sw');
    expect(document.getElementById('set-sw-pill')!.classList.contains('on')).toBe(true);
  });

  it('clicking an already-active row turns it back off', () => {
    mount();
    act(() => {
      document
        .getElementById('set-sw')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    act(() => {
      document
        .getElementById('set-sw')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActiveFandomTheme()).toBeNull();
    expect(document.getElementById('set-sw-pill')!.classList.contains('on')).toBe(false);
  });

  it('the extra-themes row stays collapsed by default when no extra theme is active', () => {
    mount();
    expect(document.getElementById('theme-rows-extra')!.hidden).toBe(true);
    expect(document.getElementById('theme-rows-toggle')!.textContent).toBe('Показати більше тем ▾');
  });

  it('starts expanded when an "extra" theme (e.g. cp) is already active on mount', () => {
    toggleFandomTheme('cp');
    mount();
    expect(document.getElementById('theme-rows-extra')!.hidden).toBe(false);
    expect(document.getElementById('theme-rows-toggle')!.textContent).toBe('Згорнути ▴');
  });

  it('the show-more/less button toggles the extra rows and its own label', () => {
    mount();
    const btn = document.getElementById('theme-rows-toggle')!;
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('theme-rows-extra')!.hidden).toBe(false);
    expect(btn.textContent).toBe('Згорнути ▴');

    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('theme-rows-extra')!.hidden).toBe(true);
    expect(btn.textContent).toBe('Показати більше тем ▾');
  });

  it('renders all 14 rows (2 base + 12 extra) with unique set-<key>/set-<key>-pill ids', () => {
    mount();
    const keys = [
      'sw',
      'hp',
      'cp',
      'lotr',
      'mcu',
      'witcher',
      'mc',
      'dc',
      'got',
      'dw',
      'dune',
      'hg',
      'avt',
      'dt',
    ];
    for (const key of keys) {
      expect(document.getElementById(`set-${key}`)).not.toBeNull();
      expect(document.getElementById(`set-${key}-pill`)).not.toBeNull();
    }
  });

  it('removes the title-toggle click listener on unmount', () => {
    mount();
    act(() => {
      root.unmount();
    });
    act(() => {
      document
        .getElementById('title-sw-toggle')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActiveFandomTheme()).toBeNull();
  });
});
