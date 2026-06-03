// English Words App — js/features/notifications.ts
import { state } from '../../src/state.ts';

const KEY_ENABLED = 'ew_notif_enabled';
const KEY_TIME    = 'ew_notif_time';    // "HH:MM"
const KEY_SHOWN   = 'ew_notif_shown';   // last date shown "YYYY-MM-DD"

const isEnabled  = (): boolean => localStorage.getItem(KEY_ENABLED) === '1';
const setEnabled = (v: boolean): void => { localStorage.setItem(KEY_ENABLED, v ? '1' : '0'); _updateUI(); };
const getTime    = (): string => localStorage.getItem(KEY_TIME) ?? '20:00';
const setTime    = (t: string): void => { localStorage.setItem(KEY_TIME, t); };

function _updateUI(): void {
  const tog      = document.getElementById('notif-toggle')   as HTMLInputElement | null;
  const status   = document.getElementById('notif-status')   as HTMLElement | null;
  const permBtn  = document.querySelector<HTMLButtonElement>('[onclick*="requestNotifPermission"]');
  const timeRow  = document.getElementById('notif-time-row') as HTMLElement | null;
  const timeInp  = document.getElementById('notif-time')     as HTMLInputElement | null;

  const granted = typeof Notification !== 'undefined' && Notification.permission === 'granted';
  const denied  = typeof Notification !== 'undefined' && Notification.permission === 'denied';
  const on      = isEnabled() && granted;

  if (tog) tog.checked = on;
  if (timeRow) timeRow.style.display = on ? 'flex' : 'none';
  if (timeInp) timeInp.value = getTime();

  if (permBtn) {
    if (granted)     { permBtn.style.display = 'none'; }
    else if (denied) { permBtn.textContent = '🔒 Заблоковано'; permBtn.disabled = true; permBtn.style.opacity = '.5'; }
    else             { permBtn.style.display = ''; permBtn.textContent = 'Дозволити'; permBtn.disabled = false; permBtn.style.opacity = ''; }
  }
  if (!status) return;
  if (!('Notification' in window))    { status.textContent = 'Браузер не підтримує сповіщення'; }
  else if (denied)                    { status.textContent = '❌ Заблоковано — дозволь в браузері'; }
  else if (on)                        { status.textContent = `✅ Нагадування о ${getTime()}`; }
  else if (granted)                   { status.textContent = 'Дозвіл є, але сповіщення вимкнено'; }
  else                                { status.textContent = 'Натисни "Дозволити" щоб отримувати нагадування'; }
}

window.requestNotifPermission = (): void => {
  if (!('Notification' in window)) return;
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') setEnabled(true);
    _updateUI();
  });
};
window.isNotifEnabled = isEnabled;

function _notify(title: string, body: string): void {
  if (!isEnabled() || Notification.permission !== 'granted') return;
  try { new Notification(title, { body, icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 64 64\'%3E%3Crect width=\'64\' height=\'64\' rx=\'14\' fill=\'%230a1628\'/%3E%3Ctext x=\'50%25\' y=\'54%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'Arial Black,sans-serif\' font-weight=\'900\' font-size=\'28\' fill=\'%2300c8ff\'%3EEW%3C/text%3E%3C/svg%3E' }); } catch (e) {}
}

function _studiedToday(): boolean {
  try {
    const daily = JSON.parse(localStorage.getItem('ew_daily') ?? '{}') as Record<string, number>;
    return (daily[state.TODAY] ?? 0) > 0;
  } catch (e) { return false; }
}

function _checkAndNotify(): void {
  if (!isEnabled() || Notification.permission !== 'granted') return;
  const today = new Date().toISOString().slice(0, 10);
  const lastShown = localStorage.getItem(KEY_SHOWN) ?? '';
  if (lastShown === today) return; // already showed today
  if (_studiedToday()) return;     // already studied today — no need to remind

  const [hh, mm] = getTime().split(':').map(Number);
  const now = new Date();
  if (now.getHours() < hh || (now.getHours() === hh && now.getMinutes() < mm)) return; // not yet time

  localStorage.setItem(KEY_SHOWN, today);

  // Choose most relevant message
  try {
    const gd = JSON.parse(localStorage.getItem('ew_game') ?? '{}') as { streak?: number; streakDate?: string };
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
    if ((gd.streak ?? 0) > 1 && gd.streakDate === yesterday) {
      _notify('🔥 Серія під загрозою!', `${gd.streak} днів підряд — не зупиняйся сьогодні!`);
      return;
    }
  } catch (e) {}

  try {
    const srs = JSON.parse(localStorage.getItem('ew_srs') ?? '{}') as Record<string, { due?: string }>;
    const due = Object.values(srs).filter(s => s.due && s.due <= today).length;
    if (due >= 3) {
      _notify(`📚 ${due} слів чекають повторення`, 'Відкрий English Words і повтори їх!');
      return;
    }
  } catch (e) {}

  _notify('📖 Час вчити слова!', 'Відкрий English Words — пара хвилин на слова і готово!');
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

const timeInput = document.getElementById('notif-time') as HTMLInputElement | null;
if (timeInput) {
  timeInput.addEventListener('change', () => {
    setTime(timeInput.value);
    _updateUI();
  });
}

_updateUI();
