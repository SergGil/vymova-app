import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  useDeckState,
  getDeckSnapshot,
  getIdxSnapshot,
  getFlippedSnapshot,
  getCwSnapshot,
  getModeSnapshot,
  setDeckState,
  setIdxState,
  setFlippedState,
  setCwState,
  setModeState,
  renderCardState,
} from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(el: React.ReactElement): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(el);
  });
  return { container, root };
}

const cw1: WordEntry = ['apple', 'яблуко', 'An apple a day.', 'Яблуко на день.'];
const cw2: WordEntry = ['dog', 'собака', '', ''];

describe('deck-store.ts', () => {
  beforeEach(() => {
    setDeckState([]);
    setIdxState(0);
    setFlippedState(false);
    setCwState(null);
    setModeState('en');
  });

  it('setDeckState / getDeckSnapshot round-trip', () => {
    setDeckState([cw1, cw2]);
    expect(getDeckSnapshot()).toEqual([cw1, cw2]);
  });

  it('setIdxState / getIdxSnapshot round-trip', () => {
    setIdxState(3);
    expect(getIdxSnapshot()).toBe(3);
  });

  it('setFlippedState / getFlippedSnapshot round-trip', () => {
    expect(getFlippedSnapshot()).toBe(false);
    setFlippedState(true);
    expect(getFlippedSnapshot()).toBe(true);
  });

  it('setCwState / getCwSnapshot round-trip', () => {
    setCwState(cw1);
    expect(getCwSnapshot()).toEqual(cw1);
    setCwState(null);
    expect(getCwSnapshot()).toBeNull();
  });

  it('setModeState / getModeSnapshot round-trip', () => {
    setModeState('es-fr');
    expect(getModeSnapshot()).toBe('es-fr');
  });

  it('renderCardState sets cw + mode and always resets flipped to false', () => {
    setFlippedState(true);
    renderCardState(cw2, 'ua');
    expect(getCwSnapshot()).toEqual(cw2);
    expect(getModeSnapshot()).toBe('ua');
    expect(getFlippedSnapshot()).toBe(false);
  });

  it('other fields are untouched by unrelated setters (no cross-field clobbering)', () => {
    setDeckState([cw1]);
    setIdxState(1);
    setModeState('en');
    setFlippedState(true);
    expect(getDeckSnapshot()).toEqual([cw1]);
    expect(getIdxSnapshot()).toBe(1);
  });

  it('useDeckState re-renders subscribers on any field change', () => {
    const seen: ReturnType<typeof getDeckSnapshot>[] = [];
    function Probe() {
      const s = useDeckState();
      seen.push(s.deck);
      return null;
    }
    const { root } = mount(<Probe />);
    act(() => {
      setDeckState([cw1]);
    });
    expect(seen[seen.length - 1]).toEqual([cw1]);

    act(() => {
      root.unmount();
    });
  });
});
