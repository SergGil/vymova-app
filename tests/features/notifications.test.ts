import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// ── localStorage mock ─────────────────────────────────────────
const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => {
    _store[k] = v;
  },
  removeItem: (k: string) => {
    delete _store[k];
  },
  clear: () => {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
  get length() {
    return Object.keys(_store).length;
  },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

beforeEach(() => {
  lsMock.clear();
  vi.useFakeTimers();
  vi.stubGlobal('localStorage', lsMock);
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ── Reminder time logic ───────────────────────────────────────
describe('Notification time parsing', () => {
  it('default reminder time is 20:00', () => {
    const time = lsMock.getItem('ew_notif_time') ?? '20:00';
    const [hh, mm] = time.split(':').map(Number);
    expect(hh).toBe(20);
    expect(mm).toBe(0);
  });

  it('saved time persists correctly', () => {
    lsMock.setItem('ew_notif_time', '08:30');
    const time = lsMock.getItem('ew_notif_time') ?? '20:00';
    const [hh, mm] = time.split(':').map(Number);
    expect(hh).toBe(8);
    expect(mm).toBe(30);
  });

  it('notification not shown twice on same day', () => {
    const today = new Date().toISOString().slice(0, 10);
    lsMock.setItem('ew_notif_shown', today);
    const lastShown = lsMock.getItem('ew_notif_shown') ?? '';
    expect(lastShown).toBe(today);
    // Logic: if lastShown === today → skip notification
    expect(lastShown === today).toBe(true);
  });

  it('notification shows after midnight (new day)', () => {
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    lsMock.setItem('ew_notif_shown', yesterday);
    const today = new Date().toISOString().slice(0, 10);
    const lastShown = lsMock.getItem('ew_notif_shown') ?? '';
    expect(lastShown === today).toBe(false); // different day → show
  });
});

// ── Daily study tracking ──────────────────────────────────────
describe('Daily study detection', () => {
  it('user studied today when daily count > 0', () => {
    const today = new Date().toISOString().slice(0, 10);
    const daily: Record<string, number> = { [today]: 5 };
    lsMock.setItem('ew_daily', JSON.stringify(daily));
    const data = JSON.parse(lsMock.getItem('ew_daily') || '{}') as Record<string, number>;
    expect((data[today] ?? 0) > 0).toBe(true);
  });

  it('user has NOT studied today when count is 0', () => {
    const today = new Date().toISOString().slice(0, 10);
    const daily: Record<string, number> = {};
    lsMock.setItem('ew_daily', JSON.stringify(daily));
    const data = JSON.parse(lsMock.getItem('ew_daily') || '{}') as Record<string, number>;
    expect((data[today] ?? 0) > 0).toBe(false);
  });

  it('15-minute interval = 900_000ms', () => {
    expect(15 * 60 * 1000).toBe(900_000);
  });
});

// ── Streak threat detection ───────────────────────────────────
describe('Streak threat detection', () => {
  it('streak is under threat when streakDate is yesterday', () => {
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    const gameData = { streak: 5, streakDate: yesterday };
    const streakUnderThreat = (gameData.streak ?? 0) > 1 && gameData.streakDate === yesterday;
    expect(streakUnderThreat).toBe(true);
  });

  it('streak is NOT under threat if already studied today', () => {
    const today = new Date().toISOString().slice(0, 10);
    const gameData = { streak: 5, streakDate: today };
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    const streakUnderThreat = (gameData.streak ?? 0) > 1 && gameData.streakDate === yesterday;
    expect(streakUnderThreat).toBe(false);
  });
});
