// Vymova — js/core/storage.ts
// Pure storage helpers with TypeScript types

import * as LZString from 'lz-string';
import type { SRSData, CharacterAppearance, TargetLang } from '../../src/types.js';
import { DEFAULT_APPEARANCE } from '../features/character-avatar.tsx';

// ── LZ compress / decompress ──────────────────────────────────

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

// ── Public API ────────────────────────────────────────────────

export function saveKnown(known: Set<string>): void {
  _lzSave('ew_known', [...known]);
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
  _lzSave(`ew_known_${lang}`, [...known]);
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
  _lzSave(_srsLangKey(), srsData);
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
