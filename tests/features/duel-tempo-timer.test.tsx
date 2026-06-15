import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { notifyStateChange } from '../../src/store.ts';
import { DuelTempoTimer } from '../../js/features/duel-tempo-timer.tsx';
import { TEMPO_SEC } from '../../js/features/duel.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getTempoData } = vi.hoisted(() => ({
  getTempoData: vi.fn(() => ({ visible: false, num: 4 })),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return { ...orig, _getTempoData: getTempoData };
});

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelTempoTimer />); });
  return { container, root };
}

describe('duel-tempo-timer.tsx DuelTempoTimer', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    state.duelTempo = { visible: false, num: TEMPO_SEC };
    roots = [];
    getTempoData.mockClear().mockImplementation(() => state.duelTempo);
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders nothing when not visible', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders the timer number when visible', () => {
    state.duelTempo = { visible: true, num: 3 };
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('3');
    expect(container.textContent).toContain('Час:');
  });

  it('resets the progress bar to full width when num equals TEMPO_SEC', () => {
    state.duelTempo = { visible: true, num: TEMPO_SEC };
    const { container, root } = mount();
    roots.push(root);

    const bar = container.querySelector('div[style*="background: var(--accent2)"]') as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });

  it('re-renders when state changes and notifyStateChange is called', () => {
    state.duelTempo = { visible: false, num: 4 };
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');

    state.duelTempo = { visible: true, num: 2 };
    act(() => { notifyStateChange(); });

    expect(container.textContent).toContain('2');
  });
});
