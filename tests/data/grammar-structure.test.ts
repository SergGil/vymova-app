import { describe, it, expect } from 'vitest';
import { GRAMMAR } from '../../data/grammar.ts';

// ── Category structure ────────────────────────────────────────
describe('GRAMMAR — category structure', () => {
  it('has exactly 3 top-level categories', () => {
    expect(GRAMMAR.length).toBe(3);
  });

  it('categories have correct IDs in correct order', () => {
    expect(GRAMMAR[0].id).toBe('tenses');
    expect(GRAMMAR[1].id).toBe('grammar');
    expect(GRAMMAR[2].id).toBe('exceptions');
  });

  it('all category IDs are unique', () => {
    const ids = GRAMMAR.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ── Tenses category ───────────────────────────────────────────
describe('GRAMMAR — tenses category', () => {
  const tenses = GRAMMAR.find(c => c.id === 'tenses')!;

  it('exists', () => expect(tenses).toBeDefined());

  it('has 13 tenses', () => {
    expect(tenses.rules.length).toBe(13);
  });

  it('contains all 6 basic tenses', () => {
    const ids = tenses.rules.map(r => r.id);
    ['present-simple','present-continuous','past-simple',
     'past-continuous','present-perfect','future-simple'].forEach(id => {
      expect(ids, `missing: ${id}`).toContain(id);
    });
  });

  it('contains all 5 additional tenses', () => {
    const ids = tenses.rules.map(r => r.id);
    ['past-perfect','present-perfect-cont','future-going-to',
     'future-continuous','future-perfect'].forEach(id => {
      expect(ids, `missing: ${id}`).toContain(id);
    });
  });

  it('does NOT contain non-tense rules', () => {
    const ids = tenses.rules.map(r => r.id);
    ['articles','irregular-verbs','reported-speech','phrasal-verbs'].forEach(id => {
      expect(ids, `should not have: ${id}`).not.toContain(id);
    });
  });
});

// ── Grammar category ──────────────────────────────────────────
describe('GRAMMAR — grammar category', () => {
  const grammar = GRAMMAR.find(c => c.id === 'grammar')!;

  it('exists', () => expect(grammar).toBeDefined());

  it('has at least 10 rules', () => {
    expect(grammar.rules.length).toBeGreaterThanOrEqual(10);
  });

  it('contains core grammar topics', () => {
    const ids = grammar.rules.map(r => r.id);
    ['articles','modal-verbs','conditionals','passive-voice',
     'reported-speech','gerunds-infinitives','comparatives'].forEach(id => {
      expect(ids, `missing: ${id}`).toContain(id);
    });
  });

  it('does NOT contain tenses', () => {
    const ids = grammar.rules.map(r => r.id);
    ['present-simple','past-perfect','future-continuous'].forEach(id => {
      expect(ids, `should not have tense: ${id}`).not.toContain(id);
    });
  });

  it('does NOT contain irregular verbs', () => {
    const ids = grammar.rules.map(r => r.id);
    expect(ids).not.toContain('irregular-verbs');
    expect(ids).not.toContain('spelling-rules');
  });
});

// ── Exceptions category ───────────────────────────────────────
describe('GRAMMAR — exceptions category', () => {
  const exceptions = GRAMMAR.find(c => c.id === 'exceptions')!;

  it('exists', () => expect(exceptions).toBeDefined());

  it('contains irregular verbs', () => {
    const ids = exceptions.rules.map(r => r.id);
    expect(ids).toContain('irregular-verbs');
  });

  it('contains spelling rules', () => {
    const ids = exceptions.rules.map(r => r.id);
    expect(ids).toContain('spelling-rules');
  });

  it('does NOT contain tenses or pure grammar rules', () => {
    const ids = exceptions.rules.map(r => r.id);
    ['present-simple','articles','modal-verbs'].forEach(id => {
      expect(ids, `should not have: ${id}`).not.toContain(id);
    });
  });
});

// ── No duplicate rule IDs across all categories ───────────────
describe('GRAMMAR — no duplicate rule IDs', () => {
  it('all rule IDs are unique globally', () => {
    const allIds = GRAMMAR.flatMap(c => c.rules.map(r => r.id));
    expect(new Set(allIds).size).toBe(allIds.length);
  });
});
