// Vymova — js/features/notifications.tsx
import { useEffect, type ReactElement } from 'react';
import { t, pluralLabel } from './i18n.ts';

const KEY_ENABLED = 'ew_notif_enabled';
const KEY_TIME = 'ew_notif_time'; // "HH:MM"
const KEY_SHOWN = 'ew_notif_shown'; // last date shown "YYYY-MM-DD"

const NOTIF_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230a1628'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black,sans-serif' font-weight='900' font-size='28' fill='%2300c8ff'%3EEW%3C/text%3E%3C/svg%3E";

// ── IndexedDB snapshot — lets the service worker fire a fallback reminder
// via Periodic Background Sync when the app itself isn't open/visible ──
const NOTIF_DB_NAME = 'ew-notif-v1';
const NOTIF_STORE = 'kv';

function _notifIdbOpen(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (!('indexedDB' in window)) {
      resolve(null);
      return;
    }
    try {
      const req = indexedDB.open(NOTIF_DB_NAME, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(NOTIF_STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

async function _syncNotifSnapshot(): Promise<void> {
  const db = await _notifIdbOpen();
  if (!db) return;
  let daily: Record<string, number> = {};
  try {
    daily = JSON.parse(localStorage.getItem('ew_daily') ?? '{}');
  } catch (e) {}
  const snapshot = {
    enabled: isEnabled(),
    time: getTime(),
    lastShown: localStorage.getItem(KEY_SHOWN) ?? '',
    daily,
    titleDaily: t('notif.daily.title'),
    bodyDaily: t('notif.daily.body'),
    icon: NOTIF_ICON,
  };
  try {
    db.transaction(NOTIF_STORE, 'readwrite').objectStore(NOTIF_STORE).put(snapshot, 'snapshot');
  } catch (e) {}
}

async function _registerPeriodicSync(): Promise<void> {
  try {
    if (!('serviceWorker' in navigator)) return;
    const reg = await navigator.serviceWorker.ready;
    if (!('periodicSync' in reg)) return;
    const perms = (navigator as any).permissions;
    if (perms?.query) {
      const status = await perms.query({ name: 'periodic-background-sync' }).catch(() => null);
      if (status && status.state !== 'granted') return;
    }
    await (reg as any).periodicSync.register('ew-daily-reminder', {
      minInterval: 12 * 60 * 60 * 1000,
    });
  } catch (e) {}
}

async function _unregisterPeriodicSync(): Promise<void> {
  try {
    if (!('serviceWorker' in navigator)) return;
    const reg = await navigator.serviceWorker.ready;
    if (!('periodicSync' in reg)) return;
    await (reg as any).periodicSync.unregister('ew-daily-reminder');
  } catch (e) {}
}

const isEnabled = (): boolean => localStorage.getItem(KEY_ENABLED) === '1';
const setEnabled = (v: boolean): void => {
  localStorage.setItem(KEY_ENABLED, v ? '1' : '0');
  _updateUI();
  void _syncNotifSnapshot();
  if (v) void _registerPeriodicSync();
  else void _unregisterPeriodicSync();
};
const getTime = (): string => localStorage.getItem(KEY_TIME) ?? '20:00';
// Bug fix 1: renamed param from `t` to `val` to avoid shadowing the i18n `t` import
const setTime = (val: string): void => {
  localStorage.setItem(KEY_TIME, val);
};

export function _updateUI(): void {
  const tog = document.getElementById('notif-toggle') as HTMLInputElement | null;
  const status = document.getElementById('notif-status') as HTMLElement | null;
  const permBtn = document.querySelector<HTMLButtonElement>('[onclick*="requestNotifPermission"]');
  const timeRow = document.getElementById('notif-time-row') as HTMLElement | null;
  const timeH = document.getElementById('notif-time-h') as HTMLSelectElement | null;
  const timeM = document.getElementById('notif-time-m') as HTMLSelectElement | null;

  const granted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  const denied = typeof Notification !== 'undefined' && Notification.permission === 'denied';
  const on = isEnabled() && granted;

  if (tog) {
    tog.checked = on;
    tog.disabled = !('Notification' in window);
  }
  if (timeRow) timeRow.style.display = on ? 'flex' : 'none';
  const [hh, mm] = getTime().split(':');
  if (timeH) timeH.value = hh;
  if (timeM) timeM.value = mm;

  if (permBtn) {
    if (granted) {
      permBtn.style.display = 'none';
    } else if (denied) {
      permBtn.textContent = t('settings.notifBlockedShort');
      permBtn.disabled = true;
      permBtn.style.opacity = '.5';
    } else {
      permBtn.style.display = '';
      permBtn.textContent = t('settings.notifAllow');
      permBtn.disabled = false;
      permBtn.style.opacity = '';
    }
  }
  if (!status) return;
  if (!('Notification' in window)) {
    status.textContent = t('settings.notifNotSupported');
  } else if (denied) {
    status.textContent = t('settings.notifBlocked');
  } else if (on) {
    status.textContent = `${t('settings.notifReminderAt')} ${getTime()}`;
  } else if (granted) {
    status.textContent = t('settings.notifGrantedOff');
  } else {
    status.textContent = t('settings.notifPromptToEnable');
  }
}

function requestNotifPermission(): void {
  if (!('Notification' in window)) return;
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted') setEnabled(true);
    _updateUI();
  });
}

// Bug fix 2: returns true if notification was actually fired
function _notify(title: string, body: string): boolean {
  if (!isEnabled() || Notification.permission !== 'granted') return false;
  try {
    new Notification(title, {
      body,
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230a1628'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial Black,sans-serif' font-weight='900' font-size='28' fill='%2300c8ff'%3EEW%3C/text%3E%3C/svg%3E",
    });
    return true;
  } catch (e) {
    return false;
  }
}

// Bug fix 3: accept today as param so it's always consistent with the caller's value
function _studiedToday(today: string): boolean {
  try {
    const daily = JSON.parse(localStorage.getItem('ew_daily') ?? '{}') as Record<string, number>;
    return (daily[today] ?? 0) > 0;
  } catch (e) {
    return false;
  }
}

function _checkAndNotify(): void {
  if (!isEnabled() || Notification.permission !== 'granted') return;

  // Bug fix 4: skip if tab is in focus — user is already in the app
  if (!document.hidden) return;

  const today = new Date().toISOString().slice(0, 10);
  const lastShown = localStorage.getItem(KEY_SHOWN) ?? '';
  if (lastShown === today) return; // already showed today
  if (_studiedToday(today)) return; // already studied today — no need to remind

  const [hh, mm] = getTime().split(':').map(Number);
  const now = new Date();
  if (now.getHours() < hh || (now.getHours() === hh && now.getMinutes() < mm)) return; // not yet time

  // Choose most relevant message; mark shown only after a successful notification
  let shown: boolean;

  try {
    const gd = JSON.parse(localStorage.getItem('ew_game') ?? '{}') as {
      streak?: number;
      streakDate?: string;
    };
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    if ((gd.streak ?? 0) > 1 && gd.streakDate === yesterday) {
      shown = _notify(
        t('notif.streak.title'),
        t('notif.streak.body', {
          n: gd.streak ?? 0,
          unit: pluralLabel('common_day', gd.streak ?? 0),
        }),
      );
      if (shown) {
        localStorage.setItem(KEY_SHOWN, today);
        void _syncNotifSnapshot();
        return;
      }
    }
  } catch (e) {}

  try {
    const srs = JSON.parse(localStorage.getItem('ew_srs') ?? '{}') as Record<
      string,
      { due?: string }
    >;
    const due = Object.values(srs).filter((s) => s.due && s.due <= today).length;
    if (due >= 3) {
      shown = _notify(t('notif.due.title', { n: due }), t('notif.due.body'));
      if (shown) {
        localStorage.setItem(KEY_SHOWN, today);
        void _syncNotifSnapshot();
        return;
      }
    }
  } catch (e) {}

  shown = _notify(t('notif.daily.title'), t('notif.daily.body'));
  // Bug fix 2: KEY_SHOWN set only if notification actually fired
  if (shown) {
    localStorage.setItem(KEY_SHOWN, today);
    void _syncNotifSnapshot();
  }
}

export function NotificationsInit(): ReactElement | null {
  useEffect(() => {
    // Check on startup (with small delay to let state initialize)
    const startupTimer = setTimeout(_checkAndNotify, 3000);
    // Also schedule a check every 15 min while app is open
    const interval = setInterval(_checkAndNotify, 15 * 60 * 1000);

    // UI bindings
    const toggle = document.getElementById('notif-toggle') as HTMLInputElement | null;
    const onToggleChange = () => {
      if (toggle!.checked) requestNotifPermission();
      else setEnabled(false);
    };
    if (toggle) toggle.addEventListener('change', onToggleChange);

    const timeH = document.getElementById('notif-time-h') as HTMLSelectElement | null;
    const timeM = document.getElementById('notif-time-m') as HTMLSelectElement | null;
    let onTimeChange: (() => void) | null = null;
    if (timeH && timeM) {
      for (let h = 0; h < 24; h++) {
        const opt = document.createElement('option');
        opt.value = opt.textContent = String(h).padStart(2, '0');
        timeH.appendChild(opt);
      }
      for (let m = 0; m < 60; m++) {
        const opt = document.createElement('option');
        opt.value = opt.textContent = String(m).padStart(2, '0');
        timeM.appendChild(opt);
      }
      onTimeChange = (): void => {
        setTime(`${timeH.value}:${timeM.value}`);
        _updateUI();
        void _syncNotifSnapshot();
      };
      timeH.addEventListener('change', onTimeChange);
      timeM.addEventListener('change', onTimeChange);
    }

    _updateUI();
    void _syncNotifSnapshot();
    if (
      isEnabled() &&
      typeof Notification !== 'undefined' &&
      Notification.permission === 'granted'
    ) {
      void _registerPeriodicSync();
    }

    return () => {
      clearTimeout(startupTimer);
      clearInterval(interval);
      if (toggle) toggle.removeEventListener('change', onToggleChange);
      if (timeH && timeM && onTimeChange) {
        timeH.removeEventListener('change', onTimeChange);
        timeM.removeEventListener('change', onTimeChange);
      }
    };
  }, []);

  return null;
}
