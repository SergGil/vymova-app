import { describe, it, expect } from 'vitest';
import { GRAMMAR_HE, GRAMMAR_AR, GRAMMAR_BY_LANG } from '../../data/grammar.ts';
import type { GrammarCategory } from '../../data/grammar.ts';

function checkGrammarShape(categories: GrammarCategory[], name: string) {
  it(`${name} is a non-empty array with required fields`, () => {
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    for (const cat of categories) {
      expect(cat.id, `${name}: category missing id`).toBeTruthy();
      expect(cat.title, `${name}: category ${cat.id} missing title`).toBeTruthy();
      expect(cat.emoji, `${name}: category ${cat.id} missing emoji`).toBeTruthy();
      expect(Array.isArray(cat.rules), `${name}: category ${cat.id} rules must be array`).toBe(true);
    }
  });

  it(`${name} has exactly 5 rules`, () => {
    const total = categories.reduce((n, c) => n + c.rules.length, 0);
    expect(total).toBe(5);
  });

  it(`${name} every rule has required fields and at least one section`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        expect(rule.id, `${name}: rule missing id`).toBeTruthy();
        expect(rule.title, `${name}: rule ${rule.id} missing title`).toBeTruthy();
        expect(rule.emoji, `${name}: rule ${rule.id} missing emoji`).toBeTruthy();
        expect(Array.isArray(rule.sections), `${name}: rule ${rule.id} sections must be array`).toBe(true);
        expect(rule.sections.length, `${name}: rule ${rule.id} has no sections`).toBeGreaterThan(0);
      }
    }
  });

  it(`${name} rule titles do not contain raw HTML (plain-text nav buttons would render it literally)`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        expect(rule.title, `${name}: rule ${rule.id} title must be plain text`).not.toContain('<span');
      }
    }
  });

  it(`${name} rule IDs are unique`, () => {
    const ids = categories.flatMap(c => c.rules.map(r => r.id));
    expect(new Set(ids).size).toBe(ids.length);
  });
}

describe('GRAMMAR_HE', () => {
  checkGrammarShape(GRAMMAR_HE, 'GRAMMAR_HE');
});

describe('GRAMMAR_AR', () => {
  checkGrammarShape(GRAMMAR_AR, 'GRAMMAR_AR');
});

describe('GRAMMAR_BY_LANG', () => {
  it('includes Hebrew and Arabic entries', () => {
    expect(GRAMMAR_BY_LANG.he).toBe(GRAMMAR_HE);
    expect(GRAMMAR_BY_LANG.ar).toBe(GRAMMAR_AR);
  });
});
