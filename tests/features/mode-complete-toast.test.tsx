import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ModeCompleteToast, showModeCompleteToast } from '../../js/features/mode-complete-toast.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => { _store[k] = v; },
  removeItem: (k: string) => { delete _store[k]; },
  clear: () => { Object.keys(_store).forEach((k) => delete _store[k]); },
  get length() { return Object.keys(_store).length; },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

let activeRoot: Root | null = null;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ModeCompleteToast />); });
  activeRoot = root;
  return { container, root };
}

function rafTick(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

beforeEach(() => {
  lsMock.clear();
  vi.stubGlobal('localStorage', lsMock);
  document.body.innerHTML = '';
});

afterEach(() => {
  if (activeRoot) {
    act(() => { activeRoot!.unmount(); });
    activeRoot = null;
  }
  vi.unstubAllGlobals();
});

describe('ModeCompleteToast', () => {
  it('renders hidden initially', () => {
    const { container } = mount();
    const el = container.querySelector('.mode-complete-toast') as HTMLElement;
    expect(el).toBeTruthy();
    expect(el.className).toBe('mode-complete-toast');
  });

  it('shows toast when showModeCompleteToast is called', async () => {
    const { container } = mount();
    await act(async () => {
      showModeCompleteToast('quiz');
      await rafTick();
    });
    const el = container.querySelector('.mode-complete-toast') as HTMLElement;
    expect(el.className).toBe('mode-complete-toast show');
  });

  it('renders today progress text after show', async () => {
    const { container } = mount();
    await act(async () => {
      showModeCompleteToast('write');
      await rafTick();
    });
    const el = container.querySelector('.mode-complete-toast') as HTMLElement;
    expect(el.querySelector('.mct-today')).toBeTruthy();
  });

  it('renders the mode icon span', async () => {
    const { container } = mount();
    await act(async () => {
      showModeCompleteToast('listen');
      await rafTick();
    });
    const icon = container.querySelector('.mct-icon') as HTMLElement;
    expect(icon).toBeTruthy();
    expect(icon.textContent).toBe('🔊');
  });

  it('uses fallback icon for unknown modes', async () => {
    const { container } = mount();
    await act(async () => {
      showModeCompleteToast('unknown-mode-xyz');
      await rafTick();
    });
    const icon = container.querySelector('.mct-icon') as HTMLElement;
    expect(icon.textContent).toBe('🎮');
  });

  it('does not throw when called after unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });
    activeRoot = null;
    expect(() => showModeCompleteToast('quiz')).not.toThrow();
  });
});
