import { describe, it, expect } from 'vitest';
import { GRAMMAR } from '../../data/grammar.ts';

// ── Word detail logic helpers ─────────────────────────────────
// We test the pure logic parts (IPA/example extraction) without
// requiring DOM since openWordDetail uses window.*
// All entries follow a single format: [en, ua, en_example, ua_example, ipa]

type WordEntry = readonly [string, string, string?, string?, string?];

function getIpa(w: WordEntry): string {
  return w[4] ?? '';
}

function getEnExample(w: WordEntry): string {
  return w[2] ?? '';
}

function getUaExample(w: WordEntry): string {
  return w[3] ?? '';
}

describe('IPA extraction', () => {
  it('IPA from index 4', () => {
    const w: WordEntry = ['word', 'слово', 'Example sentence.', 'Приклад.', '[wɜːrd]'];
    expect(getIpa(w)).toBe('[wɜːrd]');
  });

  it('returns empty string when no IPA', () => {
    const w: WordEntry = ['word', 'слово'];
    expect(getIpa(w)).toBe('');
  });
});

describe('Example extraction', () => {
  it('EN example from index 2, UA example from index 3', () => {
    const w: WordEntry = ['run', 'бігти', 'She runs fast.', 'Вона бігає швидко.', '[rʌn]'];
    expect(getEnExample(w)).toBe('She runs fast.');
    expect(getUaExample(w)).toBe('Вона бігає швидко.');
  });

  it('handles missing examples gracefully', () => {
    const w: WordEntry = ['run', 'бігти'];
    expect(getEnExample(w)).toBe('');
    expect(getUaExample(w)).toBe('');
  });
});

// ── Grammar rendering logic (section types) ───────────────────
describe('Grammar section type coverage', () => {
  const allSectionTypes = new Set(
    GRAMMAR.flatMap(c => c.rules.flatMap(r => r.sections.map(s => s.type)))
  );

  it('has intro sections', () => expect(allSectionTypes.has('intro')).toBe(true));
  it('has formula sections', () => expect(allSectionTypes.has('formula')).toBe(true));
  it('has table sections', () => expect(allSectionTypes.has('table')).toBe(true));
  it('has examples sections', () => expect(allSectionTypes.has('examples')).toBe(true));
  it('has markers sections', () => expect(allSectionTypes.has('markers')).toBe(true));
  it('has note sections', () => expect(allSectionTypes.has('note')).toBe(true));
  it('has tip sections', () => expect(allSectionTypes.has('tip')).toBe(true));
});

describe('Grammar content — new rules completeness', () => {
  it('has reported-questions rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'reported-questions')).toBe(true);
  });

  it('has wish-would-rather rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'wish-would-rather')).toBe(true);
  });

  it('has numbers-determiners rule', () => {
    const all = GRAMMAR.flatMap(c => c.rules);
    expect(all.some(r => r.id === 'numbers-determiners')).toBe(true);
  });

  it('grammar category has more rules than initial 4', () => {
    const grammar = GRAMMAR.find(c => c.id === 'grammar')!;
    expect(grammar.rules.length).toBeGreaterThan(10);
  });
});
