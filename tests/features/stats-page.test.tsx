import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { setKnownWords, getKnownSnapshot } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import { StatsPage, refreshStatsPage, openStats, closeStats } from '../../js/features/stats-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getDailyStats, getGameData, getModeStats, getModeAccuracy, refreshAchievementsPage, closePage } = vi.hoisted(() => ({
  getDailyStats: vi.fn(() => ({} as Record<string, number>)),
  getGameData: vi.fn(() => ({ streak: 0, xp: 0 })),
  getModeStats: vi.fn(() => ({} as Record<string, number>)),
  getModeAccuracy: vi.fn(() => ({} as Record<string, { ok: number; err: number }>)),
  refreshAchievementsPage: vi.fn(),
  closePage: vi.fn(),
}));
vi.mock('../../js/features/game.ts', () => ({ getDailyStats, getGameData, getModeStats, getModeAccuracy }));
vi.mock('../../js/features/achievements-page.tsx', () => ({ refreshAchievementsPage }));
vi.mock('../../js/features/sidebar.tsx', () => ({ closePage }));
vi.mock('../../js/features/leaderboard.tsx', () => ({
  Leaderboard: ({ refreshKey }: { refreshKey: number }) => <div data-testid="leaderboard" data-refresh-key={refreshKey} />,
}));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<StatsPage />); });
  return { container, root };
}

describe('stats-page.tsx StatsPage', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '<div id="stats-overlay"></div>';
    setKnownWords('en', new Set());
    state.srsData = {};
    state.TODAY = new Date().toISOString().slice(0, 10);
    roots = [];
    getDailyStats.mockClear().mockReturnValue({});
    getGameData.mockClear().mockReturnValue({ streak: 0, xp: 0 });
    getModeStats.mockClear().mockReturnValue({});
    getModeAccuracy.mockClear().mockReturnValue({});
    refreshAchievementsPage.mockClear();
    closePage.mockClear();
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders the overall progress summary', () => {
    setKnownWords('en', new Set([(W as unknown as string[][])[0][0], (W as unknown as string[][])[1][0]]));
    getGameData.mockReturnValue({ streak: 5, xp: 100 });
    const { container, root } = mount();
    roots.push(root);

    expect(container.querySelector('#st-known')!.textContent).toBe('2');
    expect(container.querySelector('#st-streak')!.textContent).toBe('5');
    const expectedPct = Math.round(2 / (W as unknown as string[][]).length * 100);
    expect(container.querySelector('#st-pct')!.textContent).toBe(`${expectedPct}%`);
  });

  it('shows "no data" in the daily chart when there is no activity', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('.chart-empty')).not.toBeNull();
  });

  it('renders chart bars when daily activity exists and switches the period', () => {
    const today = state.TODAY;
    getDailyStats.mockReturnValue({ [today]: 5 });
    const { container, root } = mount();
    roots.push(root);

    expect(container.querySelector('.chart-empty')).toBeNull();
    expect(container.querySelectorAll('.chart-col').length).toBe(14);

    const btn30 = Array.from(container.querySelectorAll('.chart-period-btn')).find(b => b.textContent === '30') as HTMLButtonElement;
    act(() => { btn30.click(); });
    expect(btn30.className).toContain('active');
    expect(container.querySelectorAll('.chart-col').length).toBe(30);
  });

  it('navigates the monthly calendar with prev/next buttons', () => {
    const { container, root } = mount();
    roots.push(root);
    const now = new Date();
    const label = container.querySelector('#cal-month-label')!.textContent!;
    expect(label).toContain(String(now.getFullYear()));

    act(() => { (container.querySelector('#cal-prev') as HTMLButtonElement).click(); });
    const prevLabel = container.querySelector('#cal-month-label')!.textContent!;
    expect(prevLabel).not.toBe(label);

    act(() => { (container.querySelector('#cal-next') as HTMLButtonElement).click(); });
    expect(container.querySelector('#cal-month-label')!.textContent).toBe(label);
  });

  it('shows "no mode data" when there is no mode accuracy/stats', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#mode-accuracy-list')!.textContent).toContain('Ще немає даних');
  });

  it('renders mode accuracy rows when data is available', () => {
    getModeAccuracy.mockReturnValue({ quiz: { ok: 8, err: 2 } });
    getModeStats.mockReturnValue({ quiz: 3 });
    const { container, root } = mount();
    roots.push(root);

    const list = container.querySelector('#mode-accuracy-list')!;
    expect(list.textContent).toContain('80%');
    expect(list.textContent).toContain('8✓ 2✗');
    expect(list.textContent).toContain('3');
  });

  it('renders all 6 CEFR level rows', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelectorAll('#cefr-stats-list > div').length).toBe(6);
    expect(container.querySelector('#cefr-stats-list')!.textContent).toContain('A1');
    expect(container.querySelector('#cefr-stats-list')!.textContent).toContain('C2');
  });

  it('refreshLeaderboard increments the leaderboard refresh key', () => {
    const { container, root } = mount();
    roots.push(root);
    const lb = container.querySelector('[data-testid="leaderboard"]')!;
    expect(lb.getAttribute('data-refresh-key')).toBe('0');

    act(() => { (container.querySelector('#lb-refresh-btn') as HTMLButtonElement).click(); });
    expect(container.querySelector('[data-testid="leaderboard"]')!.getAttribute('data-refresh-key')).toBe('1');
  });

  it('refreshStatsPage triggers a re-render and refreshes achievements', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { refreshStatsPage(); });
    expect(refreshAchievementsPage).toHaveBeenCalled();
  });

  it('refreshStatsPage does nothing when no StatsPage is mounted', () => {
    expect(() => refreshStatsPage()).not.toThrow();
  });

  it('openStats refreshes and shows the overlay', () => {
    const { root } = mount();
    roots.push(root);
    const overlay = document.getElementById('stats-overlay') as HTMLElement;
    overlay.style.display = 'none';

    act(() => { openStats(); });
    expect(overlay.style.display).toBe('flex');
  });

  it('closeStats hides the overlay when not shown as a page', () => {
    const overlay = document.getElementById('stats-overlay') as HTMLElement;
    overlay.style.display = 'flex';
    closeStats();
    expect(overlay.style.display).toBe('none');
  });

  it('closeStats delegates to closePage when shown as a page', () => {
    const overlay = document.getElementById('stats-overlay') as HTMLElement;
    overlay.classList.add('as-page');
    closeStats();
    expect(closePage).toHaveBeenCalled();
  });

  it('the close button calls closeStats', () => {
    const overlay = document.getElementById('stats-overlay') as HTMLElement;
    overlay.style.display = 'flex';
    const { container, root } = mount();
    roots.push(root);

    act(() => { (container.querySelector('#stats-close') as HTMLButtonElement).click(); });
    expect(overlay.style.display).toBe('none');
  });
});
