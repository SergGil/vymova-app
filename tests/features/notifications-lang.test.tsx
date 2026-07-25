import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

// Regression test for the daily reminder reading raw 'ew_daily'/'ew_srs'/
// 'ew_game' instead of the per-learn-language-aware getters — meaning the
// reminder checked English progress even while the active learn language
// was, say, Spanish. Verifies notifications.tsx now goes through
// getDailyStats()/getGameData()/loadSRS() (which already resolve the
// correct ew_*_<lang> key) instead of reading localStorage directly.
const { getDailyStats, getGameData, loadSRS, registerDailyStatsChanged } = vi.hoisted(() => ({
  getDailyStats: vi.fn(() => ({}) as Record<string, number>),
  getGameData: vi.fn(() => ({ streak: 0, streakDate: null }) as any),
  loadSRS: vi.fn(() => ({}) as Record<string, { due?: string }>),
  registerDailyStatsChanged: vi.fn(),
}));
vi.mock('../../js/features/game/game.ts', () => ({
  getDailyStats,
  getGameData,
  registerDailyStatsChanged,
}));
vi.mock('../../js/core/storage.ts', () => ({ loadSRS }));
vi.mock('../../js/features/i18n.ts', () => ({ t: (k: string) => k, pluralLabel: () => '' }));

import { NotificationsInit } from '../../js/features/notifications.tsx';

class FakeNotification {
  static permission: NotificationPermission = 'granted';
  constructor(
    public title: string,
    public opts: unknown,
  ) {}
}

describe('notifications.tsx uses language-aware data sources', () => {
  let root: Root;

  beforeEach(() => {
    localStorage.clear();
    getDailyStats.mockClear().mockReturnValue({});
    getGameData.mockClear().mockReturnValue({ streak: 0, streakDate: null });
    loadSRS.mockClear().mockReturnValue({});
    vi.useFakeTimers();
    // Fixed, well after the default 20:00 reminder time — avoids flakiness
    // from the real clock's time-of-day gating out the notification.
    vi.setSystemTime(new Date('2026-07-03T21:30:00'));
    vi.stubGlobal('Notification', FakeNotification);
    Object.defineProperty(document, 'hidden', { value: true, configurable: true });
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("reads today's progress via getDailyStats()/getGameData()/loadSRS(), not raw ew_daily/ew_game/ew_srs", async () => {
    localStorage.setItem('ew_notif_enabled', '1');
    // Stale data under the plain English keys the old code read directly —
    // if the fix regresses, the reminder would use these instead.
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem('ew_daily', JSON.stringify({ [today]: 999 }));
    localStorage.setItem('ew_game', JSON.stringify({ streak: 999, streakDate: today }));
    localStorage.setItem('ew_srs', JSON.stringify({ x: { due: today } }));

    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<NotificationsInit />);
    });
    await act(async () => {
      vi.advanceTimersByTime(3000);
    });

    expect(getDailyStats).toHaveBeenCalled();
    expect(getGameData).toHaveBeenCalled();
    expect(loadSRS).toHaveBeenCalled();
  });
});

// Regression test: the IndexedDB snapshot public/sw.js's periodicsync
// handler reads used to only refresh on settings changes or a fired
// notification, never when actual study progress happened — so a user who
// hit their daily goal and closed the tab could still get a spurious
// background reminder. Fixed via game.ts's registerDailyStatsChanged()
// hook, registered once when notifications.tsx itself loads.
describe('notifications.tsx registers a daily-stats-changed hook on module load', () => {
  it('calls registerDailyStatsChanged() with a function (module already imported at file top)', () => {
    expect(registerDailyStatsChanged).toHaveBeenCalledTimes(1);
    expect(registerDailyStatsChanged).toHaveBeenCalledWith(expect.any(Function));
  });

  it('invoking the registered hook does not throw even without a real IndexedDB', () => {
    const hook = registerDailyStatsChanged.mock.calls[0][0] as () => void;
    expect(() => hook()).not.toThrow();
  });
});
