import { describe, it, expect } from 'vitest';
import { GRAMMAR_HE, GRAMMAR_AR, GRAMMAR_PL, GRAMMAR_ZH, GRAMMAR_EL, GRAMMAR_JA, GRAMMAR_TR, GRAMMAR_NL, GRAMMAR_BY_LANG } from '../../data/grammar.ts';
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

  it(`${name} formula rows have at least 3 columns (renderer has no fallback for the 3rd column, so a short row literally renders "undefined")`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        for (const s of rule.sections) {
          if (s.type !== 'formula') continue;
          for (const row of s.rows ?? []) {
            expect(row.length, `${name}: rule ${rule.id} formula row too short: ${JSON.stringify(row)}`).toBeGreaterThanOrEqual(3);
          }
        }
      }
    }
  });
}

describe('GRAMMAR_HE', () => {
  checkGrammarShape(GRAMMAR_HE, 'GRAMMAR_HE');
});

describe('GRAMMAR_AR', () => {
  checkGrammarShape(GRAMMAR_AR, 'GRAMMAR_AR');
});

describe('GRAMMAR_PL', () => {
  checkGrammarShape(GRAMMAR_PL, 'GRAMMAR_PL');
});

describe('GRAMMAR_ZH', () => {
  checkGrammarShape(GRAMMAR_ZH, 'GRAMMAR_ZH');
});

describe('GRAMMAR_EL', () => {
  checkGrammarShape(GRAMMAR_EL, 'GRAMMAR_EL');
});

describe('GRAMMAR_JA', () => {
  checkGrammarShape(GRAMMAR_JA, 'GRAMMAR_JA');
});

describe('GRAMMAR_TR', () => {
  checkGrammarShape(GRAMMAR_TR, 'GRAMMAR_TR');
});

describe('GRAMMAR_NL', () => {
  checkGrammarShape(GRAMMAR_NL, 'GRAMMAR_NL');
});

describe('GRAMMAR_BY_LANG', () => {
  it('includes Hebrew and Arabic entries', () => {
    expect(GRAMMAR_BY_LANG.he).toBe(GRAMMAR_HE);
    expect(GRAMMAR_BY_LANG.ar).toBe(GRAMMAR_AR);
  });

  it('includes Polish, Chinese, Greek, Japanese, Turkish, and Dutch entries', () => {
    expect(GRAMMAR_BY_LANG.pl).toBe(GRAMMAR_PL);
    expect(GRAMMAR_BY_LANG.zh).toBe(GRAMMAR_ZH);
    expect(GRAMMAR_BY_LANG.el).toBe(GRAMMAR_EL);
    expect(GRAMMAR_BY_LANG.ja).toBe(GRAMMAR_JA);
    expect(GRAMMAR_BY_LANG.tr).toBe(GRAMMAR_TR);
    expect(GRAMMAR_BY_LANG.nl).toBe(GRAMMAR_NL);
  });
});
