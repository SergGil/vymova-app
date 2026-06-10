// English Words App — js/features/notifications.ts
import { state } from '../../src/state.ts';
import { t } from './i18n.ts';

const KEY_ENABLED = 'ew_notif_enabled';
const KEY_TIME    = 'ew_notif_time';    // "HH:MM"
const KEY_SHOWN   = 'ew_notif_shown';   // last date shown "YYYY-MM-DD"

const isEnabled  = (): boolean => localStorage.getItem(KEY_ENABLED) === '1';
const setEnabled = (v: boolean): void => { localStorage.setItem(KEY_ENABLED, v ? '1' : '0'); _updateUI(); };
const getTime    = (): string => localStorage.getItem(KEY_TIME) ?? '20:00';
// Bug fix 1: renamed param from `t` to `val` to avoid shadowing the i18n `t` import
const setTime    = (val: string): void => { localStorage.setItem(KEY_TIME, val); };

function _updateUI(): void {
  const tog      = document.getElementById('notif-toggle')   as HTMLInputElement | null;
  const status   = document.getElementById('notif-status')   as HTMLElement | null;
  const permBtn  = document.querySelector<HTMLButtonElement>('[onclick*="requestNotifPermission"]');
  const timeRow  = document.getElementById('notif-time-row') as HTMLElement | null;
  const timeH    = document.getElementById('notif-time-h')   as HTMLSelectElement | null;
  const timeM    = document.getElementById('notif-time-m')   as HTMLSelectElement | null;

  const granted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  const denied  = typeof Notification !== 'undefined' && Notification.permission === 'denied';
  const on      = isEnabled() && granted;

  if (tog) tog.checked = on;
  if (timeRow) timeRow.style.display = on ? 'flex' : 'none';
  const [hh, mm] = getTime().split(':');
  if (timeH) timeH.value = hh;
  if (timeM) timeM.value = mm;

  if (permBtn) {
    if (granted)     { permBtn.style.display = 'none'; }
    else if (denied) { permBtn.textContent = t('settings.notifBlockedShort'); permBtn.disabled = true; permBtn.style.opacity = '.5'; }
    else             { permBtn.style.display = ''; permBtn.textContent = t('settings.notifAllow'); permBtn.disabled = false; permBtn.style.opacity = ''; }
  }
  if (!status) return;
  if (!('Notification' in window))    { status.textContent = t('settings.notifNotSupported'); }
  else if (denied)                    { status.textContent = t('settings.notifBlocked'); }
  else if (on)                        { status.textContent = `${t('settings.notifReminderAt')} ${getTime()}`; }
  else if (granted)                   { status.textContent = t('settings.notifGrantedOff'); }
  else                                { status.textContent = t('settings.notifPromptToEnable'); }
}
window._refreshNotifUI = _updateUI;

window.requestNotifPermission = (): void => {
  if (!('Notification' in window)) return;
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') setEnabled(true);
    _updateUI();
  });
};
window.isNotifEnabled = isEnabled;

// Bug fix 2: returns true if notification was actually fired
function _notify(title: string, body: string): boolean {
  if (!isEnabled() || Notification.permission !== 'granted') return false;
  try {
    new Notification(title, { body, icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' rx=\'14\' fill=\'%230a1628\'/%3E%3Ctext x=\'50%25\' y=\'54%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'Arial Black,sans-serif\' font-weight=\'900\' font-size=\'28\' fill=\'%2300c8ff\'%3EEW%3C/text%3E%3C/svg%3E' });
    return true;
  } catch (e) { return false; }
}

// Bug fix 3: accept today as param so it's always consistent with the caller's value
function _studiedToday(today: string): boolean {
  try {
    const daily = JSON.parse(localStorage.getItem('ew_daily') ?? '{}') as Record<string, number>;
    return (daily[today] ?? 0) > 0;
  } catch (e) { return false; }
}

function _checkAndNotify(): void {
  if (!isEnabled() || Notification.permission !== 'granted') return;

  // Bug fix 4: skip if tab is in focus — user is already in the app
  if (!document.hidden) return;

  const today = new Date().toISOString().slice(0, 10);
  const lastShown = localStorage.getItem(KEY_SHOWN) ?? '';
  if (lastShown === today) return;       // already showed today
  if (_studiedToday(today)) return;      // already studied today — no need to remind

  const [hh, mm] = getTime().split(':').map(Number);
  const now = new Date();
  if (now.getHours() < hh || (now.getHours() === hh && now.getMinutes() < mm)) return; // not yet time

  // Choose most relevant message; mark shown only after a successful notification
  let shown = false;

  try {
    const gd = JSON.parse(localStorage.getItem('ew_game') ?? '{}') as { streak?: number; streakDate?: string };
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    if ((gd.streak ?? 0) > 1 && gd.streakDate === yesterday) {
      shown = _notify('🔥 Серія під загрозою!', `${gd.streak} днів підряд — не зупиняйся сьогодні!`);
      if (shown) { localStorage.setItem(KEY_SHOWN, today); return; }
    }
  } catch (e) {}

  try {
    const srs = JSON.parse(localStorage.getItem('ew_srs') ?? '{}') as Record<string, { due?: string }>;
    const due = Object.values(srs).filter(s => s.due && s.due <= today).length;
    if (due >= 3) {
      shown = _notify(`📚 ${due} слів чекають повторення`, 'Відкрий English Words і повтори їх!');
      if (shown) { localStorage.setItem(KEY_SHOWN, today); return; }
    }
  } catch (e) {}

  shown = _notify('📖 Час вчити слова!', 'Відкрий English Words — пара хвилин на слова і готово!');
  // Bug fix 2: KEY_SHOWN set only if notification actually fired
  if (shown) localStorage.setItem(KEY_SHOWN, today);
}

// Check on startup (with small delay to let state initialize)
setTimeout(_checkAndNotify, 3000);

// Also schedule a check every 15 min while app is open
setInterval(_checkAndNotify, 15 * 60 * 1000);

// UI bindings
const toggle = document.getElementById('notif-toggle') as HTMLInputElement | null;
if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) (window.requestNotifPermission as (() => void) | undefined)?.();
    else setEnabled(false);
  });
}

const timeH = document.getElementById('notif-time-h') as HTMLSelectElement | null;
const timeM = document.getElementById('notif-time-m') as HTMLSelectElement | null;
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
  const onChange = (): void => {
    setTime(`${timeH.value}:${timeM.value}`);
    _updateUI();
  };
  timeH.addEventListener('change', onChange);
  timeM.addEventListener('change', onChange);
}

_updateUI();
