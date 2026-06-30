import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createElement, act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const openStats = vi.fn();
const closeStats = vi.fn();
vi.mock('../../js/features/stats-page.tsx', () => ({
  openStats: (...a: unknown[]) => openStats(...a),
  closeStats: (...a: unknown[]) => closeStats(...a),
}));

import { StatsInit } from '../../js/features/stats.ts';

describe('stats.ts StatsInit', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    document.body.innerHTML = `<button id="btn-stats"></button><div id="stats-overlay"><div id="inner"></div></div>`;
    container = document.createElement('div');
    document.body.appendChild(container);
    openStats.mockReset();
    closeStats.mockReset();
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
  });

  it('opens stats when the stats button is clicked', () => {
    root = createRoot(container);
    act(() => {
      root.render(createElement(StatsInit));
    });

    act(() => {
      document
        .getElementById('btn-stats')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(openStats).toHaveBeenCalledTimes(1);
    expect(closeStats).not.toHaveBeenCalled();
  });

  it('closes stats when clicking the overlay background but not its children', () => {
    root = createRoot(container);
    act(() => {
      root.render(createElement(StatsInit));
    });

    act(() => {
      document.getElementById('inner')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(closeStats).not.toHaveBeenCalled();

    act(() => {
      document
        .getElementById('stats-overlay')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(closeStats).toHaveBeenCalledTimes(1);
  });

  it('removes its listeners on unmount', () => {
    root = createRoot(container);
    act(() => {
      root.render(createElement(StatsInit));
    });
    act(() => {
      root.unmount();
    });

    act(() => {
      document
        .getElementById('btn-stats')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(openStats).not.toHaveBeenCalled();
  });

  it('renders nothing', () => {
    root = createRoot(container);
    act(() => {
      root.render(createElement(StatsInit));
    });
    expect(container.innerHTML).toBe('');
  });
});
