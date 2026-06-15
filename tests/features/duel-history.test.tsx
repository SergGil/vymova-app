import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelHistory } from '../../js/features/duel-history.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

interface HistEntry { date: string; mode: string; myScore: number; oppScore: number; oppName: string; won: boolean; category: string; }

const { getHistory } = vi.hoisted(() => ({
  getHistory: vi.fn(() => [] as HistEntry[]),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getHistory: getHistory }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelHistory />); });
  return { container, root };
}

function makeEntry(over: Partial<HistEntry> = {}): HistEntry {
  return { date: '2026-06-01', mode: 'quiz', myScore: 8, oppScore: 5, oppName: 'Bot', won: true, category: 'Animals', ...over };
}

describe('duel-history.tsx DuelHistory', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getHistory.mockClear().mockReturnValue([]);
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('shows the empty-history message when there is no history', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Ще немає зіграних дуелей');
  });

  it('renders a history row with win/loss/tie icons and scores', () => {
    getHistory.mockReturnValue([
      makeEntry({ won: true, myScore: 8, oppScore: 5 }),
      makeEntry({ won: false, myScore: 4, oppScore: 7, oppName: 'Foxy' }),
      makeEntry({ won: false, myScore: 5, oppScore: 5, oppName: 'Draw' }),
    ]);
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('🏆');
    expect(container.textContent).toContain('💀');
    expect(container.textContent).toContain('🤝');
    expect(container.textContent).toContain('8:5');
    expect(container.textContent).toContain('Bot');
  });

  it('does not show pagination controls when there is only one page', () => {
    getHistory.mockReturnValue(Array.from({ length: 5 }, (_, i) => makeEntry({ oppName: `Bot${i}` })));
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('button')).toBeNull();
  });

  it('paginates when there are more than 10 entries', () => {
    getHistory.mockReturnValue(Array.from({ length: 15 }, (_, i) => makeEntry({ oppName: `Bot${i}` })));
    const { container, root } = mount();
    roots.push(root);

    const rows = () => container.querySelectorAll('span > b');
    expect(rows().length).toBe(10);
    expect(container.textContent).toContain('1 / 2');

    const nextBtn = Array.from(container.querySelectorAll('button')).find(b => b.textContent === '›') as HTMLButtonElement;
    act(() => { nextBtn.click(); });
    expect(rows().length).toBe(5);
    expect(container.textContent).toContain('2 / 2');
    expect(nextBtn.disabled).toBe(true);
  });
});
