import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import userEvent from '@testing-library/user-event';
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

function getSwitch(container: HTMLElement): HTMLElement {
  return container.querySelector('[role="switch"]') as HTMLElement;
}

// The Switch's onCheckedChange only mutates document.body.classList — it
// doesn't call any local setState directly. useIsDarkMode() only learns
// about that mutation via its MutationObserver callback, which fires as a
// microtask, not synchronously inside the click handler — so every click
// needs an actual act(async...) + microtask flush, not a bare act(() => {}).
async function clickAndFlush(el: HTMLElement): Promise<void> {
  await act(async () => {
    await userEvent.click(el);
  });
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

  it('renders unchecked when no theme is saved', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(getSwitch(container).getAttribute('aria-checked')).toBe('false');
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('renders checked on mount when saved as dark', () => {
    localStorage.setItem('ew_theme', 'dark');
    const { container, root } = mount();
    roots.push(root);
    expect(getSwitch(container).getAttribute('aria-checked')).toBe('true');
  });

  it('toggles the theme on click and persists to localStorage', async () => {
    const { container, root } = mount();
    roots.push(root);
    const sw = getSwitch(container);

    await clickAndFlush(sw);
    expect(sw.getAttribute('aria-checked')).toBe('true');
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('ew_theme')).toBe('dark');

    await clickAndFlush(sw);
    expect(sw.getAttribute('aria-checked')).toBe('false');
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('ew_theme')).toBe('light');
  });

  it('renders checked and toggles off on the first click when body.dark was applied by system auto-detection (no saved preference)', async () => {
    // settings.tsx adds body.dark from prefers-color-scheme before ew_theme
    // is ever set. Without reading that, the toggle showed "currently light"
    // while the app was actually dark, and the first click would set
    // ew_theme='dark' instead of actually turning it off.
    document.body.classList.add('dark');
    const { container, root } = mount();
    roots.push(root);
    const sw = getSwitch(container);
    expect(sw.getAttribute('aria-checked')).toBe('true');

    await clickAndFlush(sw);
    expect(sw.getAttribute('aria-checked')).toBe('false');
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('ew_theme')).toBe('light');
  });

  it("reactively reflects body.dark changing from outside this component (e.g. settings.tsx's system-theme listener)", async () => {
    const { container, root } = mount();
    roots.push(root);
    const sw = getSwitch(container);
    expect(sw.getAttribute('aria-checked')).toBe('false');

    await act(async () => {
      document.body.classList.add('dark');
      await Promise.resolve();
    });
    expect(sw.getAttribute('aria-checked')).toBe('true');

    await act(async () => {
      document.body.classList.remove('dark');
      await Promise.resolve();
    });
    expect(sw.getAttribute('aria-checked')).toBe('false');
  });
});
