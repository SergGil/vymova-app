import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  useActivePage,
  getActivePage,
  dispatchOpenPage,
  dispatchClosePage,
} from '../../src/nav-store.tsx';

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

describe('nav-store.tsx', () => {
  beforeEach(() => {
    dispatchClosePage();
  });

  it('starts with no active page', () => {
    expect(getActivePage()).toBeNull();
  });

  it('dispatchOpenPage sets the active page, dispatchClosePage clears it', () => {
    dispatchOpenPage('stats');
    expect(getActivePage()).toBe('stats');
    dispatchClosePage();
    expect(getActivePage()).toBeNull();
  });

  it('opening a different page replaces the previous one', () => {
    dispatchOpenPage('stats');
    dispatchOpenPage('grammar');
    expect(getActivePage()).toBe('grammar');
  });

  it('useActivePage reflects store changes and re-renders subscribers', () => {
    const seen: (string | null)[] = [];
    function Probe() {
      seen.push(useActivePage());
      return null;
    }
    const { root } = mount(<Probe />);
    expect(seen[seen.length - 1]).toBeNull();

    act(() => {
      dispatchOpenPage('idioms');
    });
    expect(seen[seen.length - 1]).toBe('idioms');

    act(() => {
      dispatchClosePage();
    });
    expect(seen[seen.length - 1]).toBeNull();

    act(() => {
      root.unmount();
    });
  });
});
