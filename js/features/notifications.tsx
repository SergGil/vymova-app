// Vymova — js/features/notifications.tsx
import { useEffect, useState, type ReactElement } from 'react';
import { t, pluralLabel } from './i18n.ts';
import { today as localToday, yesterday as localYesterday } from '../core/today.ts';
import { getDailyStats, getGameData, registerDailyStatsChanged } from './game/game.ts';
import { loadSRS } from '../core/storage.ts';
import { Switch } from '../../src/components/ui/switch.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/components/ui/select.tsx';

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
    daily = getDailyStats();
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

// Registered once at module load, not inside NotificationsInit's effect, so
// the IndexedDB snapshot stays current even across a session where the
// notifications settings panel itself is never opened.
registerDailyStatsChanged(() => {
  void _syncNotifSnapshot();
});

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

// Registration-hook so app-root.tsx's settings onActivate and i18n.ts's
// language-switch handler can force a re-render — NotificationsSection is
// always mounted (Portal into a static node), so opening the settings
// overlay only toggles CSS visibility, not mount/unmount; without this,
// Notification.permission changing outside the app (browser settings) or
// the UI language changing would never show up until some unrelated state
// update happened to re-render the component. Same pattern as
// cloud-sync.tsx's _bumpLastLabel/_refreshCloudSyncUI.
let _bumpNotifUI: (() => void) | null = null;

export function _updateUI(): void {
  _bumpNotifUI?.();
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
    const daily = getDailyStats();
    return (daily[today] ?? 0) > 0;
  } catch (e) {
    return false;
  }
}

function _checkAndNotify(): void {
  if (!isEnabled() || Notification.permission !== 'granted') return;

  // Bug fix 4: skip if tab is in focus — user is already in the app
  if (!document.hidden) return;

  const today = localToday();
  const lastShown = localStorage.getItem(KEY_SHOWN) ?? '';
  if (lastShown === today) return; // already showed today
  if (_studiedToday(today)) return; // already studied today — no need to remind

  const [hh, mm] = getTime().split(':').map(Number);
  const now = new Date();
  if (now.getHours() < hh || (now.getHours() === hh && now.getMinutes() < mm)) return; // not yet time

  // Choose most relevant message; mark shown only after a successful notification
  let shown: boolean;

  try {
    const gd = getGameData();
    if ((gd.streak ?? 0) > 1 && gd.streakDate === localYesterday()) {
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
    const srs = loadSRS();
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
    };
  }, []);

  return null;
}

const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, '0'));
const MINUTES = Array.from({ length: 60 }, (_, m) => String(m).padStart(2, '0'));

// full-react-migration-roadmap.md Phase 6: the settings-page notifications
// block's static markup — previously in index.html. #notif-toggle/
// #notif-time-h/#notif-time-m are now a real controlled Switch/Select pair
// (this used to be documented as "kept uncontrolled on purpose, same as
// tag-filter-select.tsx" — that reasoning no longer applies now that
// tag-filter-select.tsx itself moved off the DOM-node-as-source-of-truth
// pattern; NotificationsSection owning real state here closes the same gap).
// One real fix from an earlier pass, still true: the permission button used
// to be `id`-less with an inline
// `onclick="window.requestNotifPermission && ..."`, but nothing in the
// codebase ever assigned `window.requestNotifPermission` — clicking it was a
// silent no-op. `id="notif-allow-btn"` + a real onClick fixed that.
export function NotificationsSection(): ReactElement {
  const [, bump] = useState(0);

  useEffect(() => {
    _bumpNotifUI = () => bump((n) => n + 1);
    return () => {
      _bumpNotifUI = null;
    };
  }, []);

  const supported = typeof Notification !== 'undefined';
  const granted = supported && Notification.permission === 'granted';
  const denied = supported && Notification.permission === 'denied';
  const on = isEnabled() && granted;
  const [hh, mm] = getTime().split(':');

  const statusText = !supported
    ? t('settings.notifNotSupported')
    : denied
      ? t('settings.notifBlocked')
      : on
        ? `${t('settings.notifReminderAt')} ${getTime()}`
        : granted
          ? t('settings.notifGrantedOff')
          : t('settings.notifPromptToEnable');

  const handleToggleChange = (checked: boolean): void => {
    if (checked) requestNotifPermission();
    else setEnabled(false);
  };

  const handleHourChange = (h: string): void => {
    setTime(`${h}:${mm}`);
    _updateUI();
    void _syncNotifSnapshot();
  };
  const handleMinuteChange = (m: string): void => {
    setTime(`${hh}:${m}`);
    _updateUI();
    void _syncNotifSnapshot();
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
        <Switch id="notif-toggle" checked={on} onCheckedChange={handleToggleChange} disabled={!supported} />
        <span id="notif-status" style={{ fontSize: '0.78rem', color: 'var(--text2)' }}>
          {statusText}
        </span>
        {!granted && (
          <button
            id="notif-allow-btn"
            className="backup-btn"
            style={{
              padding: '5px 12px',
              fontSize: '0.75rem',
              marginLeft: 'auto',
              opacity: denied ? 0.5 : undefined,
            }}
            disabled={denied}
            onClick={requestNotifPermission}
          >
            {denied ? t('settings.notifBlockedShort') : t('settings.notifAllow')}
          </button>
        )}
      </div>
      {on && (
        <div
          id="notif-time-row"
          style={{ display: 'flex', marginTop: 10, alignItems: 'center', gap: 10, flexWrap: 'wrap' }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>
            {t('settings.notifTimeLabel')}
          </span>
          <div className="time-picker border-[var(--time-picker-border)]">
            <Select value={hh} onValueChange={(v) => handleHourChange(v as string)}>
              <SelectTrigger
                id="notif-time-h"
                size="sm"
                className="time-select h-auto border-none bg-transparent hover:bg-[var(--time-select-hover-bg)] focus:bg-[var(--time-select-hover-bg)]"
              >
                <SelectValue>{(v: string) => v}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {HOURS.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="time-sep">:</span>
            <Select value={mm} onValueChange={(v) => handleMinuteChange(v as string)}>
              <SelectTrigger
                id="notif-time-m"
                size="sm"
                className="time-select h-auto border-none bg-transparent hover:bg-[var(--time-select-hover-bg)] focus:bg-[var(--time-select-hover-bg)]"
              >
                <SelectValue>{(v: string) => v}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {MINUTES.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>
            {t('settings.notifTimeSuffix')}
          </span>
        </div>
      )}
    </>
  );
}
