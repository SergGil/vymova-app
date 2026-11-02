// Example-sentence fidelity checks for data/words-data/words_<code>.js.
//
// Every example (tuple element [1]) must be a translation of the English
// master example W[i][2] in words.js. In 2026 several batches were found to
// contain *invented* sentences instead: ko 2112+, bn 1062-2111, es 0-2759
// (plus ~250 scattered entries), it 0-419, de 0-439, and the 160-word starter
// range 40-159 in a dozen languages. The words-all-langs structural test can't
// see that — an invented sentence is still a non-empty string. These checks
// are statistical tripwires that each of those batches would have failed:
//
// 1. Length stability. A faithful translation tracks the English sentence's
//    length at a roughly constant, language-specific ratio. Invented sentences
//    drift: shorter (ko's dropped to 0.25 of its 0.48 baseline) or longer
//    (es's rose to 1.4x). Every 250-entry bucket must stay near the language's
//    own median ratio.
// 2. Sibling agreement. Close languages translating the *same* English
//    sentence share word stems (es "adquisición"/pt "aquisição"); an invented
//    sentence shares nothing beyond the headword itself. With the headword's
//    own gloss tokens removed, the share of entries with zero stem overlap
//    against every sibling must stay low in every 120-entry bucket. This is
//    what catches small invented ranges the length check averages away.
//    Caveat learned the hard way: siblings that copied the same bad source
//    agree with each other (cs/sk and da/no shared one invented starter set),
//    so a pass here is evidence, not proof — read the sentences before
//    concluding either way.
// 3. Small banks (< 1000 entries) get a floor on their median length ratio;
//    the invented 160-word starters sat at 0.28-0.5.
import { describe, it, expect, beforeAll } from 'vitest';
import { W } from '../../data/words-data/words.js';
import { ALL_TARGET_LANGS } from '../../src/types.js';
import type { WordEntry } from '../../src/types.js';

type Bank = Record<string, readonly unknown[]>;

const entries = W as unknown as WordEntry[];

function loadWordTable(code: string): Promise<Bank> {
  return import(`../../data/words-data/words_${code}.js`).then(
    (m) => (m as Record<string, unknown>)[`W_${code.toUpperCase()}`] as Bank,
  );
}

function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)] ?? 0;
}

// Stems for the overlap check: accents stripped, lowercase, words of 4+
// letters cut to their first 4 (cheap stand-in for cognate matching).
function stems(text: string): string[] {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((w) => w.length >= 4)
    .map((w) => w.slice(0, 4));
}

function contextStems(example: string, gloss: string): Set<string> {
  const own = new Set(stems(gloss));
  return new Set(stems(example).filter((s) => !own.has(s)));
}

const banks = new Map<string, Bank>();

// ~120 modules, several of them 10k entries: give the import headroom on a
// loaded machine (the full suite runs files in parallel).
beforeAll(async () => {
  await Promise.all(
    ALL_TARGET_LANGS.map(async (code) => {
      banks.set(code, await loadWordTable(code));
    }),
  );
}, 60_000);

function exampleOf(bank: Bank, word: string): { gloss: string; example: string } | null {
  const t = bank[word];
  if (!t || typeof t[0] !== 'string' || typeof t[1] !== 'string' || !t[1]) return null;
  return { gloss: t[0], example: t[1] };
}

describe('example sentences track the English master example', () => {
  it('full banks: every 250-entry bucket keeps the language\'s length ratio', () => {
    const BUCKET = 250;
    const offenders: string[] = [];
    for (const [code, bank] of banks) {
      if (Object.keys(bank).length < 5000) continue;
      const buckets = new Map<number, number[]>();
      entries.forEach((e, i) => {
        const t = exampleOf(bank, e[0]);
        if (!t) return;
        const k = Math.floor(i / BUCKET);
        if (!buckets.has(k)) buckets.set(k, []);
        buckets.get(k)!.push(t.example.length / e[2].length);
      });
      const meds = [...buckets.entries()]
        .filter(([, rs]) => rs.length >= 50)
        .map(([k, rs]) => [k, median(rs)] as const);
      const base = median(meds.map(([, m]) => m));
      for (const [k, m] of meds) {
        const rel = m / base;
        if (rel < 0.9 || rel > 1.2) {
          offenders.push(
            `${code} ${k * BUCKET}-${k * BUCKET + BUCKET - 1}: ratio ${m.toFixed(2)} vs median ${base.toFixed(2)}`,
          );
        }
      }
    }
    expect(
      offenders,
      'Example length drifted from the language baseline — likely invented sentences ' +
        'rather than translations of words.js W[i][2]:\n' +
        offenders.join('\n'),
    ).toEqual([]);
  });

  // [language, siblings, max share of zero-overlap entries per bucket]. Only
  // pairs close enough that faithful translations reliably share stems;
  // de/nl, pl/cs, fr, ro are too far apart for this to be meaningful.
  const SIBLINGS: [string, string[], number][] = [
    ['es', ['pt', 'it', 'fr'], 0.2],
    ['pt', ['es', 'it', 'fr'], 0.2],
    ['cs', ['sk', 'pl'], 0.2],
    ['sk', ['cs', 'pl'], 0.2],
    ['da', ['no', 'sv'], 0.2],
    ['no', ['da', 'sv'], 0.2],
    ['hr', ['bs'], 0.2],
    ['bs', ['hr'], 0.2],
    ['id', ['ms'], 0.2],
    ['ms', ['id'], 0.2],
    ['it', ['es', 'pt', 'fr'], 0.35],
    ['sv', ['da', 'no'], 0.35],
  ];

  it.each(SIBLINGS)('%s: examples share stems with %j in every 120-entry bucket', (code, sibs, cap) => {
    const BUCKET = 120;
    const bank = banks.get(code)!;
    const sibBanks = sibs.map((s) => banks.get(s)!);
    const counts = new Map<number, [number, number]>();
    entries.forEach((e, i) => {
      const t = exampleOf(bank, e[0]);
      if (!t) return;
      const own = contextStems(t.example, t.gloss);
      if (own.size < 3) return;
      let compared = false;
      let shared = false;
      for (const sb of sibBanks) {
        const s = exampleOf(sb, e[0]);
        if (!s) continue;
        const theirs = contextStems(s.example, s.gloss);
        if (!theirs.size) continue;
        compared = true;
        if ([...own].some((x) => theirs.has(x))) {
          shared = true;
          break;
        }
      }
      if (!compared) return;
      const k = Math.floor(i / BUCKET);
      const c = counts.get(k) ?? [0, 0];
      c[1]++;
      if (!shared) c[0]++;
      counts.set(k, c);
    });
    const offenders = [...counts.entries()]
      .filter(([, [zero, n]]) => n >= 30 && zero / n > cap)
      .map(([k, [zero, n]]) => `${code} ${k * BUCKET}-${k * BUCKET + BUCKET - 1}: ${zero}/${n} share nothing with ${sibs.join('/')}`);
    expect(
      offenders,
      'Examples in these ranges share no stems with any sibling language — check them ' +
        'against words.js W[i][2] (scratch tools: scripts/translit/merge-ex.cjs):\n' +
        offenders.join('\n'),
    ).toEqual([]);
  });

  // 160-word banks whose examples are still known to be invented (short,
  // generic sentences unrelated to W[i][2]). Remove a code from this list once
  // its examples are redone — the floor below then applies to it too.
  const PENDING_SMALL_BANK_REDO = new Set([
    'ch', 'dth', 'mh', 'nah', 'nv',
    'pau', 'qya', 'sjn', 'tlh', 'val',
  ]);

  it('small banks: median example length is not collapsed', () => {
    const offenders: string[] = [];
    for (const [code, bank] of banks) {
      if (Object.keys(bank).length >= 1000 || PENDING_SMALL_BANK_REDO.has(code)) continue;
      const ratios: number[] = [];
      for (const e of entries) {
        const t = exampleOf(bank, e[0]);
        if (t) ratios.push(t.example.length / e[2].length);
      }
      const m = median(ratios);
      if (m < 0.55) offenders.push(`${code}: median ratio ${m.toFixed(2)}`);
    }
    expect(
      offenders,
      'These small banks have examples far shorter than the English — likely invented ' +
        'short sentences instead of translations of W[i][2]:\n' +
        offenders.join('\n'),
    ).toEqual([]);
  });
});
