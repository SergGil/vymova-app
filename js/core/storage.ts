// English Words App — js/core/storage.ts
// Pure storage helpers with TypeScript types

import * as LZString from 'lz-string';
import type { SRSData, CharacterAppearance } from '../../src/types.js';
import { DEFAULT_APPEARANCE } from '../features/character-avatar.tsx';

// ── LZ compress / decompress ──────────────────────────────────

export function _lzSave(key: string, data: unknown): void {
  try {
    const json       = JSON.stringify(data);
    const compressed = LZString.compress(json);
    localStorage.setItem(key,          compressed);
    localStorage.setItem(key + '_lz', '1');
  } catch (e) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e2) {}
  }
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

export function saveKnownEs(known: Set<string>): void {
  _lzSave('ew_known_es', [...known]);
}

export function loadKnownEs(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_es', []);
  return new Set(arr);
}

export function saveKnownFr(known: Set<string>): void {
  _lzSave('ew_known_fr', [...known]);
}

export function loadKnownFr(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_fr', []);
  return new Set(arr);
}

export function saveKnownIt(known: Set<string>): void {
  _lzSave('ew_known_it', [...known]);
}

export function loadKnownIt(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_it', []);
  return new Set(arr);
}

export function saveKnownPt(known: Set<string>): void {
  _lzSave('ew_known_pt', [...known]);
}

export function loadKnownPt(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_pt', []);
  return new Set(arr);
}

export function saveKnownDe(known: Set<string>): void {
  _lzSave('ew_known_de', [...known]);
}

export function loadKnownDe(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_de', []);
  return new Set(arr);
}

export function saveKnownHe(known: Set<string>): void {
  _lzSave('ew_known_he', [...known]);
}

export function loadKnownHe(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_he', []);
  return new Set(arr);
}

export function saveKnownAr(known: Set<string>): void {
  _lzSave('ew_known_ar', [...known]);
}

export function loadKnownAr(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_ar', []);
  return new Set(arr);
}

export function saveKnownPl(known: Set<string>): void {
  _lzSave('ew_known_pl', [...known]);
}

export function loadKnownPl(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_pl', []);
  return new Set(arr);
}

export function saveKnownZh(known: Set<string>): void {
  _lzSave('ew_known_zh', [...known]);
}

export function loadKnownZh(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_zh', []);
  return new Set(arr);
}

export function saveKnownEl(known: Set<string>): void {
  _lzSave('ew_known_el', [...known]);
}

export function loadKnownEl(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_el', []);
  return new Set(arr);
}

export function saveKnownJa(known: Set<string>): void {
  _lzSave('ew_known_ja', [...known]);
}

export function loadKnownJa(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_ja', []);
  return new Set(arr);
}

export function saveKnownTr(known: Set<string>): void {
  _lzSave('ew_known_tr', [...known]);
}

export function loadKnownTr(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_tr', []);
  return new Set(arr);
}

export function saveKnownNl(known: Set<string>): void {
  _lzSave('ew_known_nl', [...known]);
}

export function loadKnownNl(): Set<string> {
  const arr = _lzLoad<string[]>('ew_known_nl', []);
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

interface ProfileLike { id: string; appearance?: Partial<CharacterAppearance>; }

export function appearanceOf(p: ProfileLike): CharacterAppearance {
  return { ...DEFAULT_APPEARANCE, ...(p.appearance ?? {}) };
}

export function loadCharacter(): CharacterAppearance {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') ?? '[]') as ProfileLike[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const p = profiles.find(p => p.id === activeId);
    return p ? appearanceOf(p) : { ...DEFAULT_APPEARANCE };
  } catch (e) {
    return { ...DEFAULT_APPEARANCE };
  }
}

export function saveCharacter(appearance: CharacterAppearance): void {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') ?? '[]') as ProfileLike[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    const next = profiles.map(p => p.id === activeId ? { ...p, appearance } : p);
    localStorage.setItem('ew_profiles', JSON.stringify(next));
  } catch (e) {}
}
