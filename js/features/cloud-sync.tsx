// English Words App — js/features/cloud-sync.tsx
// Firebase Realtime Database sync via REST API (no SDK)
import { useEffect, type ReactElement } from 'react';
import { t } from './i18n.ts';

const DB_URL      = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const KEY_LS      = 'ew_sync_key';
const INTERVAL_LS = 'ew_sync_interval'; // minutes, 0 = off
const LAST_LS     = 'ew_sync_last';
const CHARS       = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const BACKUP_KEYS = [
  'ew_known', 'ew_known_lz', 'ew_srs', 'ew_srs_lz',
  'ew_game', 'ew_daily', 'ew_ach',
  'ew_fontsize', 'ew_theme', 'ew_sw',
  'ew_ws_voice', 'ew_ws_uk_voice',
  'ew_notif_enabled', 'ew_notes', 'ew_bookmarks',
  'ew_milestones', 'ew_mode_acc', 'ew_mistakes',
  // Profile metadata — names & avatars
  'ew_profiles', 'ew_active_profile',
];

// Dynamically collect all per-profile snapshot keys (ew_p_{id}__{key})
function _profileSnapKeys(): string[] {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('ew_p_')) keys.push(k);
    }
    return keys;
  } catch (e) { return []; }
}

// ── Key ───────────────────────────────────────────────────────
function _getKey(): string {
  let k = localStorage.getItem(KEY_LS);
  if (!k) {
    const b = crypto.getRandomValues(new Uint8Array(12));
    k = Array.from(b).map(v => CHARS[v % CHARS.length]).join('');
    localStorage.setItem(KEY_LS, k);
  }
  return k;
}

function _fmt(k: string): string {
  return k.slice(0,4) + '-' + k.slice(4,8) + '-' + k.slice(8,12);
}

// ── Firebase ──────────────────────────────────────────────────
async function saveToCloud(): Promise<void> {
  const key = _getKey();
  const data: Record<string, string> = { _ts: String(Date.now()), _v: '3' };
  const allKeys = [...BACKUP_KEYS, ..._profileSnapKeys()];
  for (const k of allKeys) {
    const v = localStorage.getItem(k);
    if (v) data[k] = v;
  }
  const res = await fetch(DB_URL + '/sync/' + key + '.json', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
}

async function loadFromCloud(raw: string): Promise<void> {
  const key = raw.replace(/[-\s]/g, '').toUpperCase();
  if (key.length < 12) throw new Error(t('settings.cloudKeyTooShort'));
  const res = await fetch(DB_URL + '/sync/' + key + '.json');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json() as Record<string, string> | null;
  if (!data || !data._ts) throw new Error(t('settings.cloudDataNotFound'));
  // Restore fixed keys
  for (const k of BACKUP_KEYS) {
    if (data[k]) localStorage.setItem(k, data[k]);
  }
  // Restore all per-profile snapshot keys from backup
  for (const k of Object.keys(data)) {
    if (k.startsWith('ew_p_') && data[k]) localStorage.setItem(k, data[k]);
  }
  localStorage.setItem(KEY_LS, key);
}

// ── Auto-sync ─────────────────────────────────────────────────
let _autoTimer: ReturnType<typeof setInterval> | null = null;

function _getIntervalMin(): number {
  return parseInt(localStorage.getItem(INTERVAL_LS) ?? '0') || 0;
}

function _fmtLast(): string {
  const ts = parseInt(localStorage.getItem(LAST_LS) ?? '0');
  if (!ts) return '';
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1)  return t('settings.cloudJustNow');
  if (mins < 60) return mins + ' ' + t('settings.cloudMinAgo');
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)  return hrs + ' ' + t('settings.cloudHourAgo');
  return Math.floor(hrs / 24) + ' ' + t('settings.cloudDayAgo');
}

async function _autoSave(): Promise<void> {
  try {
    await saveToCloud();
    localStorage.setItem(LAST_LS, String(Date.now()));
    const el = document.getElementById('cs-last');
    if (el) el.textContent = t('settings.cloudAutoPrefix') + ' ' + _fmtLast();
  } catch (err) {
    const el = document.getElementById('cs-last');
    if (el) el.textContent = t('settings.cloudSyncError');
    console.warn('[cloud-sync] auto-save failed:', err);
  }
}

function _startAutoSync(): void {
  if (_autoTimer) { clearInterval(_autoTimer); _autoTimer = null; }
  const min = _getIntervalMin();
  if (!min) return;
  const lastTs = parseInt(localStorage.getItem(LAST_LS) ?? '0');
  const elapsed = lastTs ? (Date.now() - lastTs) / 60000 : Infinity;
  if (elapsed >= min) _autoSave();
  _autoTimer = setInterval(_autoSave, min * 60 * 1000);
}

export function _refreshCloudSyncUI(): void {
  const lastEl = document.getElementById('cs-last');
  if (lastEl && _fmtLast()) lastEl.textContent = t('settings.cloudAutoPrefix') + ' ' + _fmtLast();
}

export function CloudSyncInit(): ReactElement | null {
  useEffect(() => {
    // Show key
    const codeEl = document.getElementById('cs-code');
    if (codeEl) codeEl.textContent = _fmt(_getKey());

    // Last sync label
    const lastEl = document.getElementById('cs-last');
    if (lastEl && _fmtLast()) lastEl.textContent = t('settings.cloudAutoPrefix') + ' ' + _fmtLast();

    // Restore interval dropdown to saved value
    const sel = document.getElementById('cs-interval') as HTMLSelectElement | null;
    if (sel) sel.value = String(_getIntervalMin());

    const msg = document.getElementById('cs-msg');
    function setMsg(text: string, color: string): void {
      if (!msg) return;
      msg.textContent = text;
      msg.style.color = color;
    }

    // Copy key
    const copyBtn = document.getElementById('cs-copy');
    const onCopy = () => {
      navigator.clipboard.writeText(_fmt(_getKey()))
        .then(() => {
          const btn = document.getElementById('cs-copy')!;
          const orig = btn.textContent;
          btn.textContent = t('settings.cloudCopied');
          setTimeout(() => { btn.textContent = orig ?? t('settings.cloudCopy'); }, 2000);
        })
        .catch(() => prompt(t('settings.cloudYourKey'), _fmt(_getKey())));
    };
    copyBtn?.addEventListener('click', onCopy);

    // Save button
    const saveBtn = document.getElementById('cs-save') as HTMLButtonElement | null;
    const onSave = async () => {
      if (saveBtn) saveBtn.disabled = true;
      setMsg(t('settings.cloudSaving'), 'var(--text3)');
      try {
        await saveToCloud();
        localStorage.setItem(LAST_LS, String(Date.now()));
        if (lastEl) lastEl.textContent = t('settings.cloudAutoPrefix') + ' ' + _fmtLast();
        setMsg(t('settings.cloudSaved'), '#27ae60');
      } catch (e) {
        setMsg('❌ ' + (e as Error).message, '#e74c3c');
      } finally {
        if (saveBtn) saveBtn.disabled = false;
      }
    };
    saveBtn?.addEventListener('click', onSave);

    // Interval dropdown
    const onIntervalChange = () => {
      const min = parseInt(sel!.value);
      localStorage.setItem(INTERVAL_LS, String(min));
      _startAutoSync();
      setMsg(min ? t('settings.cloudAutoOn') : t('settings.cloudAutoOff'), min ? '#27ae60' : 'var(--text3)');
      setTimeout(() => setMsg('', ''), 2500);
    };
    sel?.addEventListener('change', onIntervalChange);

    // Input auto-format
    const inp = document.getElementById('cs-inp') as HTMLInputElement | null;
    const onInpInput = () => {
      let v = inp!.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      if (v.length > 4) v = v.slice(0,4) + '-' + v.slice(4);
      if (v.length > 9) v = v.slice(0,9) + '-' + v.slice(9);
      inp!.value = v.slice(0, 14);
    };
    inp?.addEventListener('input', onInpInput);

    // Restore button
    const restoreBtn = document.getElementById('cs-restore') as HTMLButtonElement | null;
    const onRestore = async () => {
      if (!inp?.value.trim()) { setMsg(t('settings.cloudEnterKey'), '#e74c3c'); return; }
      if (!confirm(t('settings.cloudRestoreConfirm'))) return;
      if (restoreBtn) restoreBtn.disabled = true;
      if (inp) inp.disabled = true;
      setMsg(t('settings.cloudLoading'), 'var(--text3)');
      try {
        await loadFromCloud(inp.value);
        setMsg(t('settings.cloudRestoreSuccess'), '#27ae60');
        setTimeout(() => location.reload(), 1200);
      } catch (e) {
        setMsg('❌ ' + (e as Error).message, '#e74c3c');
        if (restoreBtn) restoreBtn.disabled = false;
        if (inp) inp.disabled = false;
      }
    };
    restoreBtn?.addEventListener('click', onRestore);

    // Start auto-sync
    _startAutoSync();

    return () => {
      if (_autoTimer) { clearInterval(_autoTimer); _autoTimer = null; }
      copyBtn?.removeEventListener('click', onCopy);
      saveBtn?.removeEventListener('click', onSave);
      sel?.removeEventListener('change', onIntervalChange);
      inp?.removeEventListener('input', onInpInput);
      restoreBtn?.removeEventListener('click', onRestore);
    };
  }, []);

  return null;
}
