import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ComboToast, showComboToast } from '../../js/features/game/combo-toast.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let activeRoot: Root | null = null;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ComboToast />);
  });
  activeRoot = root;
  return { container, root };
}

function rafTick(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

describe('combo-toast.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    if (activeRoot) {
      act(() => {
        activeRoot!.unmount();
      });
      activeRoot = null;
    }
  });

  it('renders an empty hidden toast initially', () => {
    const { container } = mount();
    const el = container.querySelector('#combo-toast') as HTMLElement;
    expect(el.textContent).toBe('');
    // docs/component-tailwind-conversion-roadmap.md post-project audit
    // follow-up added theme-driven Tailwind classes alongside the base
    // "combo-toast"/"show" ones this test cares about — checked via
    // classList rather than an exact className string match.
    expect(el.classList.contains('combo-toast')).toBe(true);
    expect(el.classList.contains('show')).toBe(false);
  });

  it('shows the toast text when showComboToast is called', async () => {
    const { container } = mount();
    await act(async () => {
      showComboToast('×2 COMBO!');
      await rafTick();
    });
    const el = container.querySelector('#combo-toast') as HTMLElement;
    expect(el.textContent).toBe('×2 COMBO!');
    expect(el.classList.contains('combo-toast')).toBe(true);
    expect(el.classList.contains('show')).toBe(true);
  });

  it('hides the toast after 1700ms', async () => {
    const { container } = mount();
    await act(async () => {
      showComboToast('×3 MEGA!');
      await rafTick();
    });
    const shownEl = container.querySelector('#combo-toast') as HTMLElement;
    expect(shownEl.classList.contains('show')).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1700));
    });
    const hiddenEl = container.querySelector('#combo-toast') as HTMLElement;
    expect(hiddenEl.classList.contains('combo-toast')).toBe(true);
    expect(hiddenEl.classList.contains('show')).toBe(false);
  }, 10000);

  it('does not throw when showComboToast is called after unmount', () => {
    const { root } = mount();
    act(() => {
      root.unmount();
    });
    activeRoot = null;
    expect(() => showComboToast('JEDI FLOW!')).not.toThrow();
  });
});
