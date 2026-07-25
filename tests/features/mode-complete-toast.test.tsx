import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { ModeCompleteToast, showModeCompleteToast } from '../../js/features/mode/mode-complete-toast.tsx';

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

function rafTick(): Promise<void> {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

beforeEach(() => {
  lsMock.clear();
  vi.stubGlobal('localStorage', lsMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ModeCompleteToast', () => {
  it('renders hidden initially', () => {
    render(<ModeCompleteToast />);
    const el = document.querySelector('.mode-complete-toast') as HTMLElement;
    expect(el).toBeTruthy();
    expect(el.classList.contains('show')).toBe(false);
  });

  it('shows toast when showModeCompleteToast is called', async () => {
    render(<ModeCompleteToast />);
    await act(async () => {
      showModeCompleteToast('quiz');
      await rafTick();
    });
    const el = document.querySelector('.mode-complete-toast') as HTMLElement;
    expect(el.classList.contains('show')).toBe(true);
  });

  it('renders today progress text after show', async () => {
    render(<ModeCompleteToast />);
    await act(async () => {
      showModeCompleteToast('write');
      await rafTick();
    });
    expect(document.querySelector('.mct-today')).toBeTruthy();
  });

  it('renders the mode icon span', async () => {
    render(<ModeCompleteToast />);
    await act(async () => {
      showModeCompleteToast('listen');
      await rafTick();
    });
    const icon = document.querySelector('.mct-icon') as HTMLElement;
    expect(icon).toBeTruthy();
    expect(icon.textContent).toBe('🔊');
  });

  it('uses fallback icon for unknown modes', async () => {
    render(<ModeCompleteToast />);
    await act(async () => {
      showModeCompleteToast('unknown-mode-xyz');
      await rafTick();
    });
    const icon = document.querySelector('.mct-icon') as HTMLElement;
    expect(icon.textContent).toBe('🎮');
  });

  it('does not throw when called after unmount', () => {
    const { unmount } = render(<ModeCompleteToast />);
    unmount();
    expect(() => showModeCompleteToast('quiz')).not.toThrow();
  });
});
