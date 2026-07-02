// Vymova — js/features/cloud-sync.tsx
// Firebase Realtime Database sync via REST API (no SDK)
import { useEffect, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { DYNAMIC_KEY_PREFIXES } from './profile-switcher.tsx';

const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const KEY_LS = 'ew_sync_key';
const INTERVAL_LS = 'ew_sync_interval'; // minutes, 0 = off
const LAST_LS = 'ew_sync_last';
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export const BACKUP_KEYS = [
  'ew_known',
  'ew_known_lz',
  'ew_srs',
  'ew_srs_lz',
  'ew_game',
  'ew_daily',
  'ew_ach',
  'ew_fontsize',
  'ew_theme',
  'ew_sw',
  'ew_hp',
  'ew_cp',
  'ew_lotr',
  'ew_mcu',
  'ew_witcher',
  'ew_mc',
  'ew_dc',
  'ew_got',
  'ew_dw',
  'ew_dune',
  'ew_hg',
  'ew_avt',
  'ew_dt',
  'ew_ws_voice',
  'ew_ws_uk_voice',
  'ew_notif_enabled',
  'ew_notes',
  'ew_bookmarks',
  'ew_milestones',
  'ew_mode_acc',
  'ew_mistakes',
  // Duel history & rating
  'ew_duel_history',
  'ew_duel_rating',
  'ew_duel_sessions',
  // Game mode best scores
  'ew_pairs_best',
  // Language pair selection
  'ew_learn_lang',
  'ew_know_lang',
  // Notification schedule
  'ew_notif_time',
  // User-provided API key
  'ew_pixabay_key',
  // Leaderboard identity
  'ew_lb_uid',
  'ew_lb_registered',
  // Profile metadata — names & avatars
  'ew_profiles',
  'ew_active_profile',
  // Interface language
  'ew_lang',
  // Selected pair's forward/reverse direction — goes with ew_learn_lang/ew_know_lang
  'ew_direction',
  // Haptic feedback toggle
  'ew_haptic',
  // Recently watched YouTube videos (immersion mode)
  'ew_yt_history',
];

// Dynamically collect every key that isn't already in BACKUP_KEYS but
// matters for backup: per-profile snapshots (ew_p_{id}__{key}) and
// per-target-language progress (ew_known_es, ew_srs_fr, ew_ach_de, ...) —
// the same DYNAMIC_KEY_PREFIXES profile-switcher.tsx uses to snapshot a
// profile's progress per language, reused here so the cloud backup doesn't
// silently miss progress in any learn language other than English.
function _dynamicBackupKeys(): string[] {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || BACKUP_KEYS.includes(k)) continue;
      if (k.startsWith('ew_p_') || DYNAMIC_KEY_PREFIXES.some((p) => k.startsWith(p))) keys.push(k);
    }
    return keys;
  } catch (e) {
    return [];
  }
}

// ── Key ───────────────────────────────────────────────────────
function _getKey(): string {
  let k = localStorage.getItem(KEY_LS);
  if (!k) {
    const b = crypto.getRandomValues(new Uint8Array(12));
    k = Array.from(b)
      .map((v) => CHARS[v % CHARS.length])
      .join('');
    localStorage.setItem(KEY_LS, k);
  }
  return k;
}

function _fmt(k: string): string {
  return k.slice(0, 4) + '-' + k.slice(4, 8) + '-' + k.slice(8, 12);
}

// ── Firebase ──────────────────────────────────────────────────
export async function saveToCloud(): Promise<void> {
  const key = _getKey();
  const data: Record<string, string> = { _ts: String(Date.now()), _v: '3' };
  const allKeys = [...BACKUP_KEYS, ..._dynamicBackupKeys()];
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

export async function loadFromCloud(raw: string): Promise<void> {
  const key = raw.replace(/[-\s]/g, '').toUpperCase();
  if (key.length < 12) throw new Error(t('settings.cloudKeyTooShort'));
  // Restoring into the same key you'd save to (the common "just re-sync my
  // own progress" case) would otherwise silently overwrite any local
  // progress made since the last save/auto-push — push it first so nothing
  // gets lost.
  if (key === _getKey()) {
    try {
      await saveToCloud();
    } catch (e) {}
  }
  const res = await fetch(DB_URL + '/sync/' + key + '.json');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = (await res.json()) as Record<string, string> | null;
  if (!data || !data._ts) throw new Error(t('settings.cloudDataNotFound'));
  // Restore every key the backup actually contains, not just a fixed
  // allow-list — keeps this symmetric with whatever saveToCloud() wrote
  // (BACKUP_KEYS + per-profile snapshots + per-language progress), so the
  // two can't silently drift apart again.
  for (const k of Object.keys(data)) {
    if (k === '_ts' || k === '_v') continue;
    if (!k.startsWith('ew_')) continue; // ignore unexpected keys from server response
    localStorage.setItem(k, data[k]);
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
  if (mins < 1) return t('settings.cloudJustNow');
  if (mins < 60) return mins + ' ' + t('settings.cloudMinAgo');
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + ' ' + t('settings.cloudHourAgo');
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
  if (_autoTimer) {
    clearInterval(_autoTimer);
    _autoTimer = null;
  }
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
      navigator.clipboard
        .writeText(_fmt(_getKey()))
        .then(() => {
          const btn = document.getElementById('cs-copy')!;
          const orig = btn.textContent;
          btn.textContent = t('settings.cloudCopied');
          setTimeout(() => {
            btn.textContent = orig ?? t('settings.cloudCopy');
          }, 2000);
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
        setMsg(t('settings.cloudSaved'), 'var(--success)');
      } catch (e) {
        setMsg('❌ ' + (e as Error).message, 'var(--danger)');
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
      setMsg(
        min ? t('settings.cloudAutoOn') : t('settings.cloudAutoOff'),
        min ? 'var(--success)' : 'var(--text3)',
      );
      setTimeout(() => setMsg('', ''), 2500);
    };
    sel?.addEventListener('change', onIntervalChange);

    // Input auto-format
    const inp = document.getElementById('cs-inp') as HTMLInputElement | null;
    const onInpInput = () => {
      let v = inp!.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      if (v.length > 4) v = v.slice(0, 4) + '-' + v.slice(4);
      if (v.length > 9) v = v.slice(0, 9) + '-' + v.slice(9);
      inp!.value = v.slice(0, 14);
    };
    inp?.addEventListener('input', onInpInput);

    // Restore button
    const restoreBtn = document.getElementById('cs-restore') as HTMLButtonElement | null;
    const onRestore = async () => {
      if (!inp?.value.trim()) {
        setMsg(t('settings.cloudEnterKey'), 'var(--danger)');
        return;
      }
      if (!confirm(t('settings.cloudRestoreConfirm'))) return;
      if (restoreBtn) restoreBtn.disabled = true;
      if (inp) inp.disabled = true;
      setMsg(t('settings.cloudLoading'), 'var(--text3)');
      try {
        await loadFromCloud(inp.value);
        // A successful restore means this device is now actively using cloud
        // sync, even though it never pushed before — without this, the
        // post-word-saved auto-push (gated on LAST_LS) would stay dormant on
        // this device forever, silently discarding all progress made after
        // the restore until someone happens to open Settings and hit Save.
        localStorage.setItem(LAST_LS, String(Date.now()));
        setMsg(t('settings.cloudRestoreSuccess'), 'var(--success)');
        setTimeout(() => location.reload(), 1200);
      } catch (e) {
        setMsg('❌ ' + (e as Error).message, 'var(--danger)');
        if (restoreBtn) restoreBtn.disabled = false;
        if (inp) inp.disabled = false;
      }
    };
    restoreBtn?.addEventListener('click', onRestore);

    // Start auto-sync
    _startAutoSync();

    // Push to the cloud shortly after every known-word/SRS write (debounced,
    // so a study session doesn't fire one request per card) — relying only
    // on the auto-sync interval meant progress could sit unbacked-up for as
    // long as that interval, or forever if the user never set one. Gated on
    // LAST_LS so this only kicks in for people who've already used cloud
    // sync at least once (no point pushing for everyone by default).
    let progressPushTimer: ReturnType<typeof setTimeout> | null = null;
    const onProgressSaved = () => {
      if (!localStorage.getItem(LAST_LS)) return;
      if (progressPushTimer) clearTimeout(progressPushTimer);
      progressPushTimer = setTimeout(_autoSave, 3000);
    };
    window.addEventListener('ew-progress-saved', onProgressSaved);

    return () => {
      if (_autoTimer) {
        clearInterval(_autoTimer);
        _autoTimer = null;
      }
      if (progressPushTimer) clearTimeout(progressPushTimer);
      window.removeEventListener('ew-progress-saved', onProgressSaved);
      copyBtn?.removeEventListener('click', onCopy);
      saveBtn?.removeEventListener('click', onSave);
      sel?.removeEventListener('change', onIntervalChange);
      inp?.removeEventListener('input', onInpInput);
      restoreBtn?.removeEventListener('click', onRestore);
    };
  }, []);

  return null;
}
