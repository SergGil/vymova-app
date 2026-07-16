// Vymova — js/core/storage.ts
// Pure storage helpers with TypeScript types

import * as LZString from 'lz-string';
import type { SRSData, CharacterAppearance, TargetLang } from '../../src/types.js';
import { DEFAULT_APPEARANCE } from '../features/character-avatar.tsx';

// ── LZ compress / decompress ──────────────────────────────────

// Written by _lzSaveDebounced() (below saveKnown()/saveKnownLang()/saveSRS())
// before their actual localStorage write lands — _lzLoad() checks this first
// so a read immediately after one of those save calls still sees its data,
// even though the disk write itself is still debounced.
const _pendingWrites = new Map<string, unknown>();

export function _lzSave(key: string, data: unknown): void {
  try {
    const json = JSON.stringify(data);
    const compressed = LZString.compress(json);
    localStorage.setItem(key, compressed);
    localStorage.setItem(key + '_lz', '1');
  } catch (e) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e2) {}
  }
  // Lets cloud-sync.tsx debounce a backup push after known-words/SRS writes,
  // so progress isn't only as fresh as the last manual save or sync interval.
  window.dispatchEvent(new Event('ew-progress-saved'));
}

export function _lzLoad<T>(key: string, fallback: T): T {
  if (_pendingWrites.has(key)) return _pendingWrites.get(key) as T;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;

    const isLz = localStorage.getItem(key + '_lz') === '1';
    let json: string;

    if (isLz) {
      const dec = LZString.decompress(raw);
      if (!dec) {
        console.warn(`[LZ] Corrupted data for "${key}" — clearing.`);
        localStorage.removeItem(key);
        localStorage.removeItem(key + '_lz');
        return fallback;
      }
      json = dec;
    } else {
      json = raw;
    }

    const parsed = JSON.parse(json) as T;
    if (parsed === null || parsed === undefined) return fallback;
    if (Array.isArray(fallback) !== Array.isArray(parsed)) {
      console.warn(`[LZ] Type mismatch for "${key}"`);
      return fallback;
    }
    return parsed;
  } catch (e) {
    console.warn(`[LZ] Load failed for "${key}":`, (e as Error).message);
    return fallback;
  }
}

// ── Plain (uncompressed) JSON load/save ─────────────────────────
// Same corruption guard as _lzLoad, for the many localStorage keys that
// store plain JSON without LZ compression (game stats, caches, ...). A bare
// try/catch around JSON.parse alone does NOT catch every corruption case:
// JSON.parse succeeds (no throw) on a stored value like the literal string
// "null" or "5", returning `null`/`5` instead of the expected object/array —
// callers that then do `parsed.someField` or `parsed.some(...)` crash on
// that, not on the parse itself. This checks the parsed shape too.
export function _jsonLoad<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return fallback;
    if (Array.isArray(fallback) !== Array.isArray(parsed)) return fallback;
    return parsed as T;
  } catch (e) {
    return fallback;
  }
}

export function _jsonSave(key: string, data: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

// ── Debounced writes ─────────────────────────────────────────
// saveKnown()/saveKnownLang()/saveSRS() are called on every single "Know"/
// "Don't know" tap — the most frequent interaction in the app — and each
// does a full JSON.stringify + LZ-compress + localStorage.setItem of the
// ENTIRE known-words set or SRS object, not a delta. Debouncing the actual
// write lets a burst of taps (auto-play, quick review) coalesce into one
// write per key instead of one per tap; the pagehide/visibilitychange flush
// below guarantees nothing is lost if the tab closes mid-debounce. Scoped to
// just these three functions (not the shared _lzSave primitive) so
// lower-frequency, less tap-adjacent callers — cloud-sync's merge writer,
// progress-io's import/restore — keep their existing synchronous behavior.
const _DEBOUNCE_MS = 400;
const _debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

function _lzSaveDebounced(key: string, data: unknown): void {
  _pendingWrites.set(key, data);
  const existing = _debounceTimers.get(key);
  if (existing) clearTimeout(existing);
  _debounceTimers.set(
    key,
    setTimeout(() => {
      _debounceTimers.delete(key);
      _pendingWrites.delete(key);
      _lzSave(key, data);
    }, _DEBOUNCE_MS),
  );
}

// Exported so tests can force-settle debounced writes between cases instead
// of leaking pending state (and fake/real timers) across test boundaries —
// the same function pagehide/visibilitychange call in production, below.
export function _flushPendingWrites(): void {
  for (const timer of _debounceTimers.values()) clearTimeout(timer);
  _debounceTimers.clear();
  for (const [key, data] of _pendingWrites) _lzSave(key, data);
  _pendingWrites.clear();
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') _flushPendingWrites();
  });
  window.addEventListener('pagehide', _flushPendingWrites);
}

// ── Public API ────────────────────────────────────────────────

export function saveKnown(known: Set<string>): void {
  _lzSaveDebounced('ew_known', [...known]);
}

export function loadKnown(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known', []);
  return new Set(arr);
}

// Generic per-target-language known-words persistence. One key per
// language (`ew_known_<code>`) — replaces what used to be 39 hand-written
// saveKnownXx/loadKnownXx pairs, one per TargetLang. The `en`/`ua` base
// vocabulary keeps its own saveKnown()/loadKnown() above (key `ew_known`,
// no suffix) since it isn't a TargetLang.
export function saveKnownLang(lang: TargetLang, known: Set<string>): void {
  _lzSaveDebounced(`ew_known_${lang}`, [...known]);
}

export function loadKnownLang(lang: TargetLang): Set<string> {
  const arr = _lzLoad<string[]>(`ew_known_${lang}`, []);
  return new Set(arr);
}

function _srsLangKey(): string {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  return lang === 'en' ? 'ew_srs' : `ew_srs_${lang}`;
}

export function saveSRS(srsData: SRSData): void {
  _lzSaveDebounced(_srsLangKey(), srsData);
}

export function loadSRS(): SRSData {
  return _lzLoad<SRSData>(_srsLangKey(), {});
}

// ── Character avatar (profile page) ─────────────────────────────
// Appearance lives directly on the active profile object inside
// 'ew_profiles' (alongside its legacy `avatar` emoji), so every
// profile keeps its own look without needing a separate snapshot key.

interface ProfileLike {
  id: string;
  appearance?: Partial<CharacterAppearance>;
  avatarMode?: 'preset' | 'character';
}

export function appearanceOf(p: ProfileLike): CharacterAppearance {
  return { ...DEFAULT_APPEARANCE, ...(p.appearance ?? {}) };
}

export function loadCharacter(): CharacterAppearance {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') ?? '[]') as ProfileLike[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const p = profiles.find((p) => p.id === activeId);
    return p ? appearanceOf(p) : { ...DEFAULT_APPEARANCE };
  } catch (e) {
    return { ...DEFAULT_APPEARANCE };
  }
}

// Saving a custom appearance makes it the displayed avatar again, overriding
// whatever preset emoji might have been picked in the profile editor.
export function saveCharacter(appearance: CharacterAppearance): void {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') ?? '[]') as ProfileLike[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const next = profiles.map((p) =>
      p.id === activeId ? { ...p, appearance, avatarMode: 'character' as const } : p,
    );
    localStorage.setItem('ew_profiles', JSON.stringify(next));
    window.dispatchEvent(new Event('ew:profiles-changed'));
  } catch (e) {}
}
