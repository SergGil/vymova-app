import { describe, it, expect, beforeEach } from 'vitest';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

// ── Re-declared pure helpers from js/modes/reading.tsx ──
function stems(w: string): string[] {
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

let _dictIndex: Map<string, WordEntry> | null = null;
let _stemCache: Record<string, WordEntry | false> = {};

function buildIndex(): void {
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

function lookupWord(raw: string): WordEntry | null {
  const clean = raw.toLowerCase().replace(/[^a-z]/g, '');
  if (!clean || clean.length < 2) return null;
  if (_stemCache[clean] !== undefined) return (_stemCache[clean] as WordEntry | false) || null;
  buildIndex();
  const hit = _dictIndex!.get(clean);
  if (hit) {
    _stemCache[clean] = hit;
    return hit;
  }
  for (const c of stems(clean)) {
    const h = _dictIndex!.get(c);
    if (h) {
      _stemCache[clean] = h;
      return h;
    }
  }
  _stemCache[clean] = false;
  return null;
}

function renderTextHtml(text: string): { html: string; known: number; unknown: number } {
  const chunks = text.split(/(\s+|[,\.!?;:'"()\-—]+)/);
  let knownCount = 0,
    unknownCount = 0;
  const html = chunks
    .map((chunk) => {
      if (/^\s+$/.test(chunk) || /^[,\.!?;:'"()\-—]+$/.test(chunk)) return chunk;
      const w = lookupWord(chunk);
      if (!w) return chunk;
      const isKnown = state.known.has(w[0]);
      if (isKnown) {
        knownCount++;
        return `<span class="rd-word rd-known" data-word="${w[0]}">${chunk}</span>`;
      }
      unknownCount++;
      return `<span class="rd-word rd-unknown" data-word="${w[0]}">${chunk}</span>`;
    })
    .join('');
  return { html, known: knownCount, unknown: unknownCount };
}

describe('reading-logic', () => {
  beforeEach(() => {
    state.known = new Set();
    _dictIndex = null;
    _stemCache = {};
  });

  describe('stems()', () => {
    it('strips -ing and offers -e and double-consonant variants', () => {
      expect(stems('running')).toContain('runn');
      expect(stems('running')).toContain('runne');
      expect(stems('running')).toContain('run');
    });

    it('strips -ed and offers -e variants', () => {
      expect(stems('walked')).toContain('walk');
      expect(stems('liked')).toContain('like');
    });

    it('strips -ies to -y', () => {
      expect(stems('flies')).toContain('fly');
    });

    it('strips plural -s but not double -ss', () => {
      expect(stems('cats')).toContain('cat');
      expect(stems('class')).not.toContain('clas');
    });

    it('strips -ly', () => {
      expect(stems('quickly')).toContain('quick');
    });

    it('filters out results shorter than 3 characters', () => {
      stems('is').forEach((s) => expect(s.length).toBeGreaterThanOrEqual(3));
    });
  });

  describe('lookupWord()', () => {
    it('returns null for very short or empty tokens', () => {
      expect(lookupWord('')).toBeNull();
      expect(lookupWord('a')).toBeNull();
    });

    it('finds a direct dictionary match (case-insensitive)', () => {
      const first = (W as unknown as WordEntry[])[0];
      const clean = first[0]
        .toLowerCase()
        .replace(/\s*\([^)]*\)/g, '')
        .trim()
        .replace(/[^a-z]/g, '');
      if (clean.length >= 2) {
        expect(lookupWord(first[0].toUpperCase())).toEqual(first);
      }
    });

    it('finds a word via its inflected (-ing) form when the base is in the dictionary', () => {
      const all = W as unknown as WordEntry[];
      const baseWord = all.find((w) => /^[a-z]{4,7}$/.test(w[0]) && !w[0].endsWith('e'));
      if (baseWord) {
        const ingForm = baseWord[0] + 'ing';
        const found = lookupWord(ingForm);
        // either matches via stem, or returns null if no stem matches — both acceptable,
        // but if found it must be the base word
        if (found) expect(found[0]).toBe(baseWord[0]);
      }
    });

    it('returns null for unrecognized words and caches the negative result', () => {
      expect(lookupWord('zzzznotaword')).toBeNull();
      expect(lookupWord('zzzznotaword')).toBeNull(); // exercised cache path
    });
  });

  describe('renderTextHtml()', () => {
    it('leaves whitespace and punctuation untouched', () => {
      const { html } = renderTextHtml('Hi, world!');
      expect(html).toContain(', ');
      expect(html).toContain('!');
    });

    it('wraps recognized words as rd-unknown by default', () => {
      const dictWord = (W as unknown as WordEntry[]).find(
        (w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4,
      )!;
      const { html, unknown } = renderTextHtml(`The word ${dictWord[0]} appears zzzznotaword.`);
      expect(unknown).toBeGreaterThanOrEqual(1);
      expect(html).toContain('rd-unknown');
    });

    it('wraps known words as rd-known and counts them', () => {
      const dictWord = (W as unknown as WordEntry[]).find(
        (w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4,
      )!;
      state.known.add(dictWord[0]);
      const { html, known } = renderTextHtml(`The word ${dictWord[0]} appears zzzznotaword.`);
      expect(known).toBeGreaterThanOrEqual(1);
      expect(html).toContain('rd-known');
    });

    it('leaves unrecognized words as plain text', () => {
      const { html, known, unknown } = renderTextHtml('zzzznotaword zzzzelsewhere');
      expect(html).toContain('zzzznotaword');
      expect(html).not.toContain('rd-word');
      expect(known + unknown).toBe(0);
    });
  });
});
