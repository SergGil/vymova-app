// Vymova — js/modes/reading-lookup.ts
// English-keyed dictionary lookup with light stemming — split out of
// reading.tsx so it can stay a small, eager, dependency-light module. Three
// callers need it: reading.tsx's own epub-import path, and youtube-player.tsx/
// video-player.tsx's subtitle click-to-translate — the latter two are still
// eagerly bundled into app-root, so as long as this function lived inside
// reading.tsx itself, importing it from there dragged the whole (much
// heavier) ReadingPage component and its JSX along too, silently defeating
// reading.tsx's own LazyMode conversion (nothing was actually saved, since
// Rollup keeps a module in the eager graph if ANY eager entry point reaches
// it, dynamic-import elsewhere or not). Only depends on data/words.js,
// which is already eager everywhere regardless.
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

let _dictIndex: Map<string, WordEntry> | null = null;
let _stemCache: Record<string, WordEntry | false> = {};

function _buildIndex(): void {
  if (_dictIndex) return;
  _dictIndex = new Map();
  (W as unknown as WordEntry[]).forEach((entry) => {
    const key = entry[0]
      .toLowerCase()
      .replace(/\s*\([^)]*\)/g, '')
      .trim()
      .replace(/[^a-z]/g, '');
    if (key) _dictIndex!.set(key, entry);
  });
}

export function invalidateReadingIndex(): void {
  _dictIndex = null;
  _stemCache = {};
}

function _stems(w: string): string[] {
  const n = w.length,
    s: string[] = [];
  if (n > 5 && w.endsWith('ing')) {
    s.push(w.slice(0, -3));
    s.push(w.slice(0, -3) + 'e');
    if (n > 6 && w[n - 4] === w[n - 5]) s.push(w.slice(0, -4));
  }
  if (n > 4 && w.endsWith('ed')) {
    s.push(w.slice(0, -1));
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'e');
    if (n > 5 && w[n - 3] === w[n - 4]) s.push(w.slice(0, -3));
  }
  if (n > 3 && w.endsWith('ies')) s.push(w.slice(0, -3) + 'y');
  if (n > 4 && w.endsWith('es')) s.push(w.slice(0, -2));
  if (n > 3 && w.endsWith('s') && !w.endsWith('ss')) s.push(w.slice(0, -1));
  if (n > 4 && w.endsWith('er')) {
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'e');
  }
  if (n > 5 && w.endsWith('est')) {
    s.push(w.slice(0, -3));
    s.push(w.slice(0, -3) + 'e');
  }
  if (n > 4 && w.endsWith('ly')) {
    s.push(w.slice(0, -2));
    s.push(w.slice(0, -2) + 'le');
  }
  if (n > 6 && w.endsWith('ness')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('less')) s.push(w.slice(0, -4));
  if (n > 5 && w.endsWith('ful')) s.push(w.slice(0, -3));
  if (n > 6 && w.endsWith('ment')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'e');
  }
  if (n > 6 && w.endsWith('able')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'e');
  }
  if (n > 6 && w.endsWith('ible')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('tion')) s.push(w.slice(0, -4));
  if (n > 6 && w.endsWith('sion')) {
    s.push(w.slice(0, -4));
    s.push(w.slice(0, -4) + 'd');
  }
  if (n > 5 && w.endsWith('ity')) s.push(w.slice(0, -3));
  if (n > 5 && w.endsWith('al')) s.push(w.slice(0, -2));
  return s.filter((x) => x.length >= 3);
}

// English-keyed dictionary lookup with light stemming. Reused by any feature
// that needs to match arbitrary English text against the app's vocab
// (reading.tsx's epub-import path, video-player.tsx's/youtube-player.tsx's
// subtitles).
export function lookupEnglishWord(raw: string): WordEntry | null {
  const clean = raw.toLowerCase().replace(/[^a-z]/g, '');
  if (!clean || clean.length < 2) return null;
  if (_stemCache[clean] !== undefined) return (_stemCache[clean] as WordEntry | false) || null;
  _buildIndex();
  const hit = _dictIndex!.get(clean);
  if (hit) {
    _stemCache[clean] = hit;
    return hit;
  }
  for (const c of _stems(clean)) {
    const h = _dictIndex!.get(c);
    if (h) {
      _stemCache[clean] = h;
      return h;
    }
  }
  _stemCache[clean] = false;
  return null;
}
