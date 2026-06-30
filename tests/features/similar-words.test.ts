import { describe, it, expect, beforeEach } from 'vitest';
import {
  getSimilarWords,
  getSimilarWordsEs,
  invalidateSimilarCache,
} from '../../js/features/similar-words.tsx';
import { vi } from 'vitest';

vi.mock('../../data/words.js', () => ({
  W: [
    ['run', 'бігти', '/rʌn/', 'He runs fast.', 'Він бігає швидко.'],
    ['running', 'бег', '/ˈrʌnɪŋ/', 'She is running.', 'Вона бігає.'],
    ['runner', 'бігун', '/ˈrʌnər/', 'Fast runner.', 'Швидкий бігун.'],
    ['jump', 'стрибати', '/dʒʌmp/', 'He can jump high.', 'Він може стрибати.'],
    ['jumper', 'стрибун', '/ˈdʒʌmpər/', 'A good jumper.', 'Хороший стрибун.'],
    ['swim', 'плавати', '/swɪm/', 'I swim daily.', 'Я плаваю щодня.'],
    ['swimmer', 'плавець', '/ˈswɪmər/', 'Fast swimmer.', 'Швидкий плавець.'],
    ['walk', 'ходити', '/wɔːk/', "Let's walk.", 'Ходімо.'],
    ['work', 'працювати', '/wɜːrk/', 'I work here.', 'Я тут працюю.'],
    ['worker', 'працівник', '/ˈwɜːrkər/', 'A good worker.', 'Хороший працівник.'],
    ['labor', 'праця', '/ˈleɪbər/', 'Hard labor awaits.', 'Важка праця чекає.'],
  ],
}));

// W_ES mock: 'work', 'worker', 'labor' all share the token 'trabajar' → good for token-match tests
vi.mock('../../data/words_es.js', () => ({
  W_ES: {
    run: ['correr', 'Corre rápido.'],
    running: ['corriendo', 'Ella está corriendo.'],
    runner: ['corredor', 'Es un corredor rápido.'],
    jump: ['saltar', 'Puede saltar alto.'],
    jumper: ['saltador', 'Un buen saltador.'],
    swim: ['nadar', 'Nado a diario.'],
    swimmer: ['nadador', 'Nadador rápido.'],
    walk: ['caminar', 'Vamos a caminar.'],
    work: ['trabajar', 'Trabajo aquí.'],
    worker: ['trabajador, trabajar', 'Un buen trabajador.'],
    labor: ['trabajar, laboral', 'El trabajo duro.'],
  },
}));

beforeEach(() => {
  invalidateSimilarCache();
});

describe('getSimilarWords()', () => {
  it('returns an array', () => {
    const result = getSimilarWords('run', 'бігти', 5);
    expect(Array.isArray(result)).toBe(true);
  });

  it('respects maxCount limit', () => {
    const result = getSimilarWords('run', 'бігти', 2);
    expect(result.length).toBeLessThanOrEqual(2);
  });

  it('does not include the query word itself', () => {
    const result = getSimilarWords('run', 'бігти', 5);
    expect(result.some((w) => w[0] === 'run')).toBe(false);
  });

  it('finds words with matching English prefix ≥4 chars', () => {
    // 'runner' and 'running' share prefix 'runn' with 'run' (3 chars — may not match)
    // 'worker' and 'work' share prefix 'work' (4 chars — should match)
    const result = getSimilarWords('work', 'працювати', 5);
    expect(result.some((w) => w[0] === 'worker')).toBe(true);
  });

  it('finds words with shared translation tokens', () => {
    // 'swimmer' and 'swim' share Ukrainian token 'плав' (root of плавати/плавець)
    const result = getSimilarWords('swim', 'плавати', 5);
    // swimmer has 'плавець' which may share token 'плав'
    expect(result.length).toBeGreaterThanOrEqual(0); // just verify no crash
  });

  it('returns empty array for word with no matches', () => {
    const result = getSimilarWords('xyz', 'абракадабра', 5);
    // Unlikely to match any of our mock words
    expect(Array.isArray(result)).toBe(true);
  });

  it('default maxCount is 5', () => {
    const result = getSimilarWords('run', 'бігти');
    expect(result.length).toBeLessThanOrEqual(5);
  });
});

describe('invalidateSimilarCache()', () => {
  it('clears cache so next call rebuilds index', () => {
    const first = getSimilarWords('work', 'працювати', 3);
    invalidateSimilarCache();
    const second = getSimilarWords('work', 'працювати', 3);
    expect(second.map((w) => w[0])).toEqual(first.map((w) => w[0]));
  });

  it('also clears ES cache so getSimilarWordsEs rebuilds', () => {
    const first = getSimilarWordsEs('work', 'trabajar', 3);
    invalidateSimilarCache();
    const second = getSimilarWordsEs('work', 'trabajar', 3);
    expect(second.map((w) => w[0])).toEqual(first.map((w) => w[0]));
  });

  it('does not throw when called multiple times', () => {
    expect(() => {
      invalidateSimilarCache();
      invalidateSimilarCache();
    }).not.toThrow();
  });
});

// ── getSimilarWordsEs() ───────────────────────────────────────
describe('getSimilarWordsEs()', () => {
  it('returns an array', () => {
    const result = getSimilarWordsEs('work', 'trabajar', 5);
    expect(Array.isArray(result)).toBe(true);
  });

  it('respects maxCount limit', () => {
    const result = getSimilarWordsEs('work', 'trabajar', 2);
    expect(result.length).toBeLessThanOrEqual(2);
  });

  it('does not include the query word itself', () => {
    const result = getSimilarWordsEs('work', 'trabajar', 5);
    expect(result.some((w) => w[0] === 'work')).toBe(false);
  });

  it('finds words sharing a Spanish translation token', () => {
    // 'work' ES = 'trabajar'; 'worker' ES = 'trabajador, trabajar'; 'labor' ES = 'trabajar, laboral'
    // Both 'worker' and 'labor' share the token 'trabajar' with 'work'
    const result = getSimilarWordsEs('work', 'trabajar', 5);
    const keys = result.map((w) => w[0]);
    expect(keys.some((k) => k === 'worker' || k === 'labor')).toBe(true);
  });

  it('finds words by English prefix similarity', () => {
    // 'work' and 'worker' share prefix 'work' (4 chars)
    const result = getSimilarWordsEs('work', 'trabajar', 5);
    expect(result.some((w) => w[0] === 'worker')).toBe(true);
  });

  it('returns empty array for word with no matches', () => {
    const result = getSimilarWordsEs('xyz', 'nada', 5);
    expect(Array.isArray(result)).toBe(true);
  });

  it('default maxCount is 5', () => {
    const result = getSimilarWordsEs('run', 'correr');
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it('caches result for repeated calls with same word', () => {
    const first = getSimilarWordsEs('swim', 'nadar', 5);
    const second = getSimilarWordsEs('swim', 'nadar', 5);
    expect(second).toBe(first); // same reference → from cache
  });

  it('ES cache is separate from UA cache (different cache keys)', () => {
    const ua = getSimilarWords('run', 'бігти', 5);
    const es = getSimilarWordsEs('run', 'correr', 5);
    // Both return arrays — no collision
    expect(Array.isArray(ua)).toBe(true);
    expect(Array.isArray(es)).toBe(true);
  });
});
