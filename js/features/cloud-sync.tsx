// Vymova — js/features/cloud-sync.tsx
// Firebase Realtime Database sync via REST API (no SDK)
import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react';
import * as LZString from 'lz-string';
import { z } from 'zod';
import { t } from './i18n.ts';
import { DYNAMIC_KEY_PREFIXES } from './profile/profile-switcher.tsx';
import { _lzSave, _lzLoad } from '../core/storage.ts';
import { getAppCheckHeaders } from '../core/app-check.ts';
import type { SRSData } from '../../src/types.js';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/components/ui/select.tsx';

// Every value under /sync/<key> is a JSON-stringified string (saveToCloud()
// writes `String(Date.now())`/JSON.stringify(...) for every key, never a
// nested object/number) — this is a REST response from a database anyone can
// write to (see database.rules.json's wide-open `sync` node), so a `Record<
// string, string>` type-cast alone was trust, not verification. Runtime-check
// the shape before merging it into local progress; a malformed response
// (unexpected type from a tampered or corrupted entry) is treated the same
// as "no remote data" rather than risking a crash partway through the merge.
const SyncPayloadSchema = z.record(z.string(), z.string()).nullable();

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
  'ew_tempo_best_30',
  'ew_tempo_best_60',
  'ew_tempo_best_90',
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

// ── Merge (known words / SRS / achievements / daily activity) ──
// Everything else in BACKUP_KEYS (settings, duel history, mistakes, notes,
// ew_game, ...) is a plain "whichever sync happened last wins" overwrite —
// fine for prefs, but for these four categories that used to mean syncing
// from a second device could silently discard earned progress the first
// device had that the second didn't (see the module-level bug this fixes).
// These are merged (union) instead, both on push and on pull, so progress
// only ever grows across devices sharing a sync key.
type MergeKind = 'known' | 'srs' | 'ach' | 'daily' | 'lz-flag' | 'plain';

function _mergeKind(rawKey: string): MergeKind {
  const key = rawKey.replace(/^ew_p_[^_]+__/, ''); // strip an optional profile-snapshot prefix
  if (key.endsWith('_lz')) return 'lz-flag'; // companion flag, handled alongside its data key
  if (key === 'ew_known' || /^ew_known_[a-z]+$/.test(key)) return 'known';
  if (key === 'ew_srs' || /^ew_srs_[a-z]+$/.test(key)) return 'srs';
  if (key === 'ew_ach' || /^ew_ach_[a-z]+$/.test(key)) return 'ach';
  if (key === 'ew_daily' || /^ew_daily_[a-z]+$/.test(key)) return 'daily';
  return 'plain';
}

function _decodeRemoteJson(raw: unknown, lz: boolean): unknown {
  if (typeof raw !== 'string') return undefined;
  try {
    const json = lz ? LZString.decompress(raw) : raw;
    return json ? JSON.parse(json) : undefined;
  } catch (e) {
    return undefined;
  }
}

function _unionStrings(local: string[] | undefined, remote: unknown): string[] {
  const r = Array.isArray(remote) ? (remote as string[]) : [];
  return [...new Set([...(local ?? []), ...r])];
}

function _mergeDaily(
  local: Record<string, number> | undefined,
  remote: unknown,
): Record<string, number> {
  const r = (remote ?? {}) as Record<string, number>;
  const merged: Record<string, number> = { ...(local ?? {}) };
  for (const k of Object.keys(r)) merged[k] = Math.max(merged[k] ?? 0, r[k] ?? 0);
  return merged;
}

// Prefers whichever side of each word was actually reviewed more recently
// (by updatedAt) when both entries carry that timestamp — sm2Update() resets
// reps/interval to a low value on a failed review, so a fresher lapse must
// win over a stale, higher-reps entry from before that lapse happened, or
// the lapse silently disappears on merge (the word stays "mastered" and
// never comes back up for review). Falls back to the old
// higher-reps/longer-interval heuristic when either side predates the
// updatedAt field (data synced before this migration).
function _mergeSrs(local: SRSData | undefined, remote: unknown): SRSData {
  const r = (remote ?? {}) as SRSData;
  const merged: SRSData = { ...(local ?? {}) };
  for (const w of Object.keys(r)) {
    const a = merged[w];
    const b = r[w];
    if (!b) continue;
    if (!a) {
      merged[w] = b;
    } else if (typeof a.updatedAt === 'number' && typeof b.updatedAt === 'number') {
      merged[w] = b.updatedAt > a.updatedAt ? b : a;
    } else {
      merged[w] = b.reps > a.reps || (b.reps === a.reps && b.interval > a.interval) ? b : a;
    }
  }
  return merged;
}

// Merges every known/srs/ach/daily key present in `remote` against this
// device's current local value, writing the merged result back to local
// storage. Pure side effect — callers re-read localStorage afterward to
// build whatever payload (push body / restored state) they need.
function _mergeProgressKeys(remote: Record<string, string>): void {
  for (const rawKey of Object.keys(remote)) {
    if (rawKey === '_ts' || rawKey === '_v') continue;
    const kind = _mergeKind(rawKey);
    if (kind === 'lz-flag' || kind === 'plain') continue;
    const isLz = kind === 'known' || kind === 'srs';
    const remoteVal = _decodeRemoteJson(remote[rawKey], remote[rawKey + '_lz'] === '1');
    if (remoteVal === undefined) continue; // nothing usable to merge from this side
    if (kind === 'known' || kind === 'ach') {
      const local = isLz
        ? (_lzLoad<string[]>(rawKey, []) as string[])
        : ((): string[] => {
            try {
              return JSON.parse(localStorage.getItem(rawKey) ?? '[]') as string[];
            } catch (e) {
              return [];
            }
          })();
      const merged = _unionStrings(local, remoteVal);
      if (isLz) _lzSave(rawKey, merged);
      else localStorage.setItem(rawKey, JSON.stringify(merged));
    } else {
      // 'srs' | 'daily'
      const local = isLz
        ? _lzLoad<SRSData>(rawKey, {})
        : ((): Record<string, number> => {
            try {
              return JSON.parse(localStorage.getItem(rawKey) ?? '{}') as Record<string, number>;
            } catch (e) {
              return {};
            }
          })();
      const merged =
        kind === 'srs'
          ? _mergeSrs(local as SRSData, remoteVal)
          : _mergeDaily(local as Record<string, number>, remoteVal);
      if (isLz) _lzSave(rawKey, merged);
      else localStorage.setItem(rawKey, JSON.stringify(merged));
    }
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
  const appCheckHeaders = await getAppCheckHeaders();
  // Merge against whatever's already on the cloud before overwriting it —
  // without this, this device's auto-push could silently discard progress
  // a second device already pushed under the same key (the two devices'
  // known-words/SRS/achievements/daily-activity unions, not whichever
  // pushed most recently). No-ops on the first-ever sync or while offline.
  try {
    const res = await fetch(DB_URL + '/sync/' + key + '.json', { headers: appCheckHeaders });
    if (res.ok) {
      const parsed = SyncPayloadSchema.safeParse(await res.json());
      const remote = parsed.success ? parsed.data : null;
      if (remote && remote._ts) _mergeProgressKeys(remote);
    }
  } catch (e) {}
  const data: Record<string, string> = { _ts: String(Date.now()), _v: '3' };
  const allKeys = [...BACKUP_KEYS, ..._dynamicBackupKeys()];
  for (const k of allKeys) {
    const v = localStorage.getItem(k);
    if (v) data[k] = v;
  }
  const res = await fetch(DB_URL + '/sync/' + key + '.json', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...appCheckHeaders },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
}

export async function loadFromCloud(raw: string): Promise<void> {
  const key = raw.replace(/[-\s]/g, '').toUpperCase();
  if (key.length < 12) throw new Error(t('settings.cloudKeyTooShort'));
  const res = await fetch(DB_URL + '/sync/' + key + '.json', { headers: await getAppCheckHeaders() });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const parsed = SyncPayloadSchema.safeParse(await res.json());
  const data = parsed.success ? parsed.data : null;
  if (!data || !data._ts) throw new Error(t('settings.cloudDataNotFound'));
  // Known words / SRS / achievements / daily activity: merge (union) with
  // what's already on this device, so restoring a backup — even one from a
  // different device — never discards progress made locally since the last
  // sync. Everything else (settings, duel history, mistakes, notes, ...)
  // doesn't have a safe generic merge rule; Restore is the one explicit,
  // user-confirmed action where "replace with the backup's value" is
  // actually what's intended, so those still overwrite wholesale below.
  _mergeProgressKeys(data);
  for (const k of Object.keys(data)) {
    if (k === '_ts' || k === '_v') continue;
    if (!k.startsWith('ew_')) continue; // ignore unexpected keys from server response
    if (_mergeKind(k) !== 'plain') continue; // already merged above
    localStorage.setItem(k, data[k]);
  }
  localStorage.setItem(KEY_LS, key);
  // Push the merged result back up so the cloud reflects it too — otherwise
  // a third device (or this device's next auto-push) could still pull the
  // pre-merge snapshot and the merge wouldn't actually stick.
  try {
    await saveToCloud();
  } catch (e) {}
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

// Auto-save runs from timers outside any component (interval, debounced
// progress-push), so its result can't go through component state directly —
// this flag is read by CloudSyncSection's render, and _bumpLastLabel (set
// by the component's own effect) forces the re-render that picks it up.
let _lastAutoSaveError = false;

async function _autoSave(): Promise<void> {
  try {
    await saveToCloud();
    localStorage.setItem(LAST_LS, String(Date.now()));
    _lastAutoSaveError = false;
  } catch (err) {
    _lastAutoSaveError = true;
    console.warn('[cloud-sync] auto-save failed:', err);
  }
  _bumpLastLabel?.();
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

// Registration-hook so the settings page's onActivate (app-root.tsx) can
// force a re-render of the "last synced" label — CloudSyncSection is always
// mounted (Portal into a static index.html node), so opening the settings
// overlay only toggles CSS visibility, not mount/unmount; without this the
// relative "X min ago" label would go stale for as long as the page stays
// open. Same registration-hook pattern as stats-trigger.ts's _bumpTick.
let _bumpLastLabel: (() => void) | null = null;

export function _refreshCloudSyncUI(): void {
  _bumpLastLabel?.();
}

const _rowStyle: CSSProperties = { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 };
const _sectionLabelStyle: CSSProperties = { fontSize: '0.74rem', color: 'var(--text3)', marginBottom: 7 };
const _dividerStyle: CSSProperties = { borderTop: '1px solid var(--border)', paddingTop: 10 };

export function CloudSyncSection(): ReactElement {
  const [, bump] = useState(0);
  const [copied, setCopied] = useState(false);
  const [interval_, setInterval_] = useState(() => _getIntervalMin());
  const [restoreKey, setRestoreKey] = useState('');
  const [restoreBusy, setRestoreBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; color: string }>({ text: '', color: '' });
  const [saving, setSaving] = useState(false);

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const msgClearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    _bumpLastLabel = () => bump((n) => n + 1);
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
      _bumpLastLabel = null;
      if (_autoTimer) {
        clearInterval(_autoTimer);
        _autoTimer = null;
      }
      if (progressPushTimer) clearTimeout(progressPushTimer);
      window.removeEventListener('ew-progress-saved', onProgressSaved);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      if (msgClearTimerRef.current) clearTimeout(msgClearTimerRef.current);
    };
  }, []);

  function showMsg(text: string, color: string, autoClearMs?: number): void {
    if (msgClearTimerRef.current) clearTimeout(msgClearTimerRef.current);
    setMsg({ text, color });
    if (autoClearMs) msgClearTimerRef.current = setTimeout(() => setMsg({ text: '', color: '' }), autoClearMs);
  }

  const key = _fmt(_getKey());
  const lastLabel = _fmtLast();

  function onCopy(): void {
    navigator.clipboard
      .writeText(key)
      .then(() => {
        setCopied(true);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => prompt(t('settings.cloudYourKey'), key));
  }

  async function onSave(): Promise<void> {
    setSaving(true);
    showMsg(t('settings.cloudSaving'), 'var(--text3)');
    try {
      await saveToCloud();
      localStorage.setItem(LAST_LS, String(Date.now()));
      _lastAutoSaveError = false;
      showMsg(t('settings.cloudSaved'), 'var(--success)');
    } catch (e) {
      showMsg('❌ ' + (e as Error).message, 'var(--danger)');
    } finally {
      setSaving(false);
    }
  }

  function onIntervalChange(next: number): void {
    setInterval_(next);
    localStorage.setItem(INTERVAL_LS, String(next));
    _startAutoSync();
    showMsg(
      next ? t('settings.cloudAutoOn') : t('settings.cloudAutoOff'),
      next ? 'var(--success)' : 'var(--text3)',
      2500,
    );
  }

  function onRestoreInputChange(raw: string): void {
    let v = raw.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (v.length > 4) v = v.slice(0, 4) + '-' + v.slice(4);
    if (v.length > 9) v = v.slice(0, 9) + '-' + v.slice(9);
    setRestoreKey(v.slice(0, 14));
  }

  async function onRestore(): Promise<void> {
    if (!restoreKey.trim()) {
      showMsg(t('settings.cloudEnterKey'), 'var(--danger)');
      return;
    }
    if (!confirm(t('settings.cloudRestoreConfirm'))) return;
    setRestoreBusy(true);
    showMsg(t('settings.cloudLoading'), 'var(--text3)');
    try {
      await loadFromCloud(restoreKey);
      // A successful restore means this device is now actively using cloud
      // sync, even though it never pushed before — without this, the
      // post-word-saved auto-push (gated on LAST_LS) would stay dormant on
      // this device forever, silently discarding all progress made after
      // the restore until someone happens to open Settings and hit Save.
      localStorage.setItem(LAST_LS, String(Date.now()));
      showMsg(t('settings.cloudRestoreSuccess'), 'var(--success)');
      setTimeout(() => location.reload(), 1200);
    } catch (e) {
      showMsg('❌ ' + (e as Error).message, 'var(--danger)');
      setRestoreBusy(false);
    }
  }

  return (
    <>
      <div style={_rowStyle}>
        <div
          id="cs-code"
          style={{
            flex: 1,
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--accent)',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1.5px solid var(--border)',
            borderRadius: 10,
            padding: '8px 12px',
            letterSpacing: '0.1em',
            textAlign: 'center',
          }}
        >
          {key}
        </div>
        <button
          id="cs-copy"
          style={{
            padding: '8px 12px',
            borderRadius: 10,
            border: '1.5px solid var(--border)',
            background: 'none',
            color: 'var(--text2)',
            cursor: 'pointer',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
          }}
          onClick={onCopy}
        >
          {copied ? t('settings.cloudCopied') : t('settings.cloudCopy')}
        </button>
      </div>

      <button
        id="cs-save"
        disabled={saving}
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 12,
          border: 'none',
          background: 'var(--accent)',
          color: '#0a1628',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '0.88rem',
          fontWeight: 600,
          marginBottom: 10,
        }}
        onClick={onSave}
      >
        {t('settings.cloudSave')}
      </button>

      <div style={{ ..._dividerStyle, margin: '8px 0' }}>
        <div style={_sectionLabelStyle}>{t('settings.cloudAutoLabel')}</div>
        <div style={_rowStyle}>
          <Select
            value={String(interval_)}
            onValueChange={(v) => onIntervalChange(parseInt(v as string))}
          >
            <SelectTrigger
              id="cs-interval"
              className="h-auto flex-1 rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-[10px] py-[9px] font-[inherit] text-[.85rem] text-[var(--text)]"
            >
              <SelectValue>
                {(v: string) =>
                  ({
                    '0': t('settings.intervalOff'),
                    '30': t('settings.interval30'),
                    '60': t('settings.interval60'),
                    '360': t('settings.interval360'),
                    '1440': t('settings.intervalDaily'),
                  })[v] ?? v
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">{t('settings.intervalOff')}</SelectItem>
              <SelectItem value="30">{t('settings.interval30')}</SelectItem>
              <SelectItem value="60">{t('settings.interval60')}</SelectItem>
              <SelectItem value="360">{t('settings.interval360')}</SelectItem>
              <SelectItem value="1440">{t('settings.intervalDaily')}</SelectItem>
            </SelectContent>
          </Select>
          <span id="cs-last" style={{ fontSize: '0.7rem', color: 'var(--text3)', whiteSpace: 'nowrap' }}>
            {_lastAutoSaveError
              ? t('settings.cloudSyncError')
              : lastLabel
                ? `${t('settings.cloudAutoPrefix')} ${lastLabel}`
                : ''}
          </span>
        </div>
      </div>

      <div style={{ ..._dividerStyle, margin: '4px 0 10px' }}>
        <div style={_sectionLabelStyle}>{t('settings.cloudRestoreLabel')}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            id="cs-inp"
            placeholder="XXXX-XXXX-XXXX"
            maxLength={14}
            value={restoreKey}
            disabled={restoreBusy}
            onChange={(e) => onRestoreInputChange(e.target.value)}
            style={{
              flex: 1,
              fontFamily: 'monospace',
              fontSize: '0.88rem',
              padding: '10px 12px',
              border: '1.5px solid var(--border)',
              borderRadius: 10,
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              textTransform: 'uppercase',
            }}
          />
          <button
            id="cs-restore"
            disabled={restoreBusy}
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1.5px solid var(--border)',
              background: 'none',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
            onClick={onRestore}
          >
            {t('settings.cloudRestore')}
          </button>
        </div>
      </div>

      <div id="cs-msg" style={{ fontSize: '0.75rem', minHeight: 16, textAlign: 'center', marginTop: 4, color: msg.color }}>
        {msg.text}
      </div>
      <div
        style={{
          fontSize: '0.7rem',
          color: 'var(--text3)',
          marginTop: 8,
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        <span>{t('settings.cloudHintLine1')}</span>
        <br />
        <span>{t('settings.cloudHintLine2')}</span>
      </div>
    </>
  );
}
