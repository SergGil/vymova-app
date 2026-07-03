import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ThemeToggle } from '../../js/core/theme.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ThemeToggle />);
  });
  return { container, root };
}

describe('theme.tsx ThemeToggle', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    document.body.classList.remove('dark');
    localStorage.clear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders the moon icon when no theme is saved', () => {
    const { container, root } = mount();
    roots.push(root);
    const btn = container.querySelector('#btn-theme') as HTMLButtonElement;
    expect(btn.textContent).toBe('🌙');
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('applies the dark theme on mount when saved as dark', () => {
    localStorage.setItem('ew_theme', 'dark');
    const { container, root } = mount();
    roots.push(root);
    const btn = container.querySelector('#btn-theme') as HTMLButtonElement;
    expect(btn.textContent).toBe('☀️');
    expect(document.body.classList.contains('dark')).toBe(true);
  });

  it('toggles the theme on click and persists to localStorage', () => {
    const { container, root } = mount();
    roots.push(root);
    const btn = container.querySelector('#btn-theme') as HTMLButtonElement;

    act(() => {
      btn.click();
    });
    expect(btn.textContent).toBe('☀️');
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('ew_theme')).toBe('dark');

    act(() => {
      btn.click();
    });
    expect(btn.textContent).toBe('🌙');
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('ew_theme')).toBe('light');
  });

  it('matches the sun icon and toggles off on the first click when body.dark was applied by system auto-detection (no saved preference)', () => {
    // settings.tsx adds body.dark from prefers-color-scheme before ew_theme
    // is ever set. Without reading that, the toggle showed the "currently
    // light" moon icon while the app was actually dark, and the first click
    // would set ew_theme='dark' instead of actually turning it off.
    document.body.classList.add('dark');
    const { container, root } = mount();
    roots.push(root);
    const btn = container.querySelector('#btn-theme') as HTMLButtonElement;
    expect(btn.textContent).toBe('☀️');

    act(() => {
      btn.click();
    });
    expect(btn.textContent).toBe('🌙');
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('ew_theme')).toBe('light');
  });
});
