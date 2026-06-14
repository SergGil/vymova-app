// English Words App — js/core/storage.ts
// Pure storage helpers with TypeScript types

import * as LZString from 'lz-string';
import type { SRSData } from '../../src/types.js';

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

export function saveSRS(srsData: SRSData): void {
  _lzSave('ew_srs', srsData);
}

export function loadSRS(): SRSData {
  return _lzLoad<SRSData>('ew_srs', {});
}
