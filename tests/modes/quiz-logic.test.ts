import { describe, it, expect } from 'vitest';
import type { WordEntry } from '../../src/types.js';

// ── Pure logic extracted from js/modes/quiz.ts ────────────────
// These functions are module-private in quiz.ts which has top-level DOM
// access; we re-declare them here to test the business logic in isolation.

// Ukrainian pluralization (mirrors _pluralUa in quiz.ts)
function _pluralUa(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10,
    mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

// Option generator (mirrors getWrongOptions in quiz.ts)
const NUM_OPTIONS = 4;
function getWrongOptions(
  correctWord: WordEntry,
  answer: string,
  isEnToUa: boolean,
  pool: WordEntry[],
): string[] {
  const shuffled = pool.slice(); // deterministic for tests (no shuffle)
  const options: string[] = [];
  const used = new Set([correctWord[0].toLowerCase()]);
  for (const w of shuffled) {
    if (options.length >= NUM_OPTIONS - 1) break;
    if (used.has(w[0].toLowerCase())) continue;
    used.add(w[0].toLowerCase());
    const opt = isEnToUa ? w[1] : w[0];
    if (opt === answer) continue;
    options.push(opt);
  }
  return options;
}

// Score percentage helper (mirrors quiz showFinal logic)
function scorePct(correct: number, total: number): number {
  return Math.round((correct / total) * 100);
}

// ── _pluralUa() ────────────────────────────────────────────────
describe('_pluralUa() — Ukrainian pluralization', () => {
  it('n=1 → "one" form', () => {
    expect(_pluralUa(1, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідь');
  });

  it('n=2 → "few" form', () => {
    expect(_pluralUa(2, 'відповідь', 'відповіді', 'відповідей')).toBe('відповіді');
  });

  it('n=3,4 → "few" form', () => {
    expect(_pluralUa(3, 'відповідь', 'відповіді', 'відповідей')).toBe('відповіді');
    expect(_pluralUa(4, 'відповідь', 'відповіді', 'відповідей')).toBe('відповіді');
  });

  it('n=5…20 → "many" form', () => {
    for (const n of [5, 6, 10, 11, 12, 13, 14, 15, 19, 20]) {
      expect(_pluralUa(n, 'відповідь', 'відповіді', 'відповідей'), `n=${n}`).toBe('відповідей');
    }
  });

  it('n=21 → "one" form (21 mod 10 = 1, mod 100 ≠ 11)', () => {
    expect(_pluralUa(21, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідь');
  });

  it('n=11 → "many" form (exception: 11 ends in 1 but mod100=11)', () => {
    expect(_pluralUa(11, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
  });

  it('n=12,13,14 → "many" form (exceptions mod100=12-14)', () => {
    expect(_pluralUa(12, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
    expect(_pluralUa(13, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
    expect(_pluralUa(14, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
  });

  it('n=22 → "few" form', () => {
    expect(_pluralUa(22, 'відповідь', 'відповіді', 'відповідей')).toBe('відповіді');
  });

  it('n=100 → "many" form', () => {
    expect(_pluralUa(100, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
  });

  it('n=0 → "many" form', () => {
    expect(_pluralUa(0, 'відповідь', 'відповіді', 'відповідей')).toBe('відповідей');
  });
});

// ── getWrongOptions() ─────────────────────────────────────────
const POOL: WordEntry[] = [
  ['run', 'бігти', 'He runs.', 'Він бігає.', '/rʌn/'],
  ['swim', 'плавати', 'She swims.', 'Вона плаває.', '/swɪm/'],
  ['jump', 'стрибати', 'Jump!', 'Стрибай!', '/dʒʌmp/'],
  ['walk', 'ходити', "Let's walk.", 'Ходімо.', '/wɔːk/'],
  ['eat', 'їсти', 'I eat.', 'Я їм.', '/iːt/'],
  ['drink', 'пити', 'Drink up.', 'Пий.', '/drɪŋk/'],
];

describe('getWrongOptions() — distractor generation', () => {
  it('returns exactly 3 wrong options (NUM_OPTIONS - 1)', () => {
    const correct = POOL[0]; // 'run'
    const opts = getWrongOptions(correct, 'бігти', true, POOL);
    expect(opts.length).toBe(3);
  });

  it('does not include the correct answer', () => {
    const correct = POOL[0];
    const opts = getWrongOptions(correct, 'бігти', true, POOL);
    expect(opts).not.toContain('бігти');
  });

  it('does not include the correct word itself in EN→UA mode', () => {
    const correct = POOL[0];
    const opts = getWrongOptions(correct, 'бігти', true, POOL);
    expect(opts).not.toContain('run');
  });

  it('all options are unique', () => {
    const correct = POOL[0];
    const opts = getWrongOptions(correct, 'бігти', true, POOL);
    expect(new Set(opts).size).toBe(opts.length);
  });

  it('UA→EN mode uses English words as options', () => {
    const correct = POOL[0]; // 'run'
    const opts = getWrongOptions(correct, 'run', false, POOL);
    // Options should be English words (not Ukrainian translations)
    opts.forEach((o) => expect(o).not.toMatch(/[а-яіїєґ]/i));
  });

  it('returns fewer options when pool is small', () => {
    const small: WordEntry[] = [
      ['run', 'бігти', '', '', ''],
      ['swim', 'плавати', '', '', ''],
    ];
    const opts = getWrongOptions(small[0], 'бігти', true, small);
    expect(opts.length).toBeLessThan(3);
  });

  it('excludes the correct word from options even in UA→EN mode', () => {
    const correct = POOL[0]; // 'run'
    const opts = getWrongOptions(correct, 'run', false, POOL);
    expect(opts).not.toContain('run');
  });
});

// ── scorePct() ────────────────────────────────────────────────
describe('scorePct() — quiz score percentage', () => {
  it('10/10 = 100%', () => expect(scorePct(10, 10)).toBe(100));
  it('0/10 = 0%', () => expect(scorePct(0, 10)).toBe(0));
  it('5/10 = 50%', () => expect(scorePct(5, 10)).toBe(50));
  it('7/10 = 70%', () => expect(scorePct(7, 10)).toBe(70));
  it('1/3 = 33%', () => expect(scorePct(1, 3)).toBe(33));
  it('2/3 = 67%', () => expect(scorePct(2, 3)).toBe(67));
  it('rounds to nearest integer', () => {
    expect(scorePct(1, 6)).toBe(17); // 16.666… → 17
    expect(scorePct(5, 6)).toBe(83); // 83.333… → 83
  });
});
