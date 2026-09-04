import { describe, it, expect } from 'vitest';
import { GRAMMAR_HE } from '../../data/grammar-data/grammar_he.ts';
import { GRAMMAR_AR } from '../../data/grammar-data/grammar_ar.ts';
import { GRAMMAR_PL } from '../../data/grammar-data/grammar_pl.ts';
import { GRAMMAR_ZH } from '../../data/grammar-data/grammar_zh.ts';
import { GRAMMAR_EL } from '../../data/grammar-data/grammar_el.ts';
import { GRAMMAR_JA } from '../../data/grammar-data/grammar_ja.ts';
import { GRAMMAR_TR } from '../../data/grammar-data/grammar_tr.ts';
import { GRAMMAR_NL } from '../../data/grammar-data/grammar_nl.ts';
import { ensureGrammarLoaded, getGrammarForLang } from '../../js/features/word-data/grammar-loader.ts';
import type { GrammarCategory } from '../../data/grammar.ts';

function checkGrammarShape(categories: GrammarCategory[], name: string, expectedCount = 5) {
  it(`${name} is a non-empty array with required fields`, () => {
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
    for (const cat of categories) {
      expect(cat.id, `${name}: category missing id`).toBeTruthy();
      expect(cat.title, `${name}: category ${cat.id} missing title`).toBeTruthy();
      expect(cat.emoji, `${name}: category ${cat.id} missing emoji`).toBeTruthy();
      expect(Array.isArray(cat.rules), `${name}: category ${cat.id} rules must be array`).toBe(
        true,
      );
    }
  });

  it(`${name} has exactly ${expectedCount} rules`, () => {
    const total = categories.reduce((n, c) => n + c.rules.length, 0);
    expect(total).toBe(expectedCount);
  });

  it(`${name} every rule has required fields and at least one section`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        expect(rule.id, `${name}: rule missing id`).toBeTruthy();
        expect(rule.title, `${name}: rule ${rule.id} missing title`).toBeTruthy();
        expect(rule.emoji, `${name}: rule ${rule.id} missing emoji`).toBeTruthy();
        expect(
          Array.isArray(rule.sections),
          `${name}: rule ${rule.id} sections must be array`,
        ).toBe(true);
        expect(rule.sections.length, `${name}: rule ${rule.id} has no sections`).toBeGreaterThan(0);
      }
    }
  });

  it(`${name} rule titles do not contain raw HTML (plain-text nav buttons would render it literally)`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        expect(rule.title, `${name}: rule ${rule.id} title must be plain text`).not.toContain(
          '<span',
        );
      }
    }
  });

  it(`${name} rule IDs are unique`, () => {
    const ids = categories.flatMap((c) => c.rules.map((r) => r.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it(`${name} formula rows have at least 3 columns (renderer has no fallback for the 3rd column, so a short row literally renders "undefined")`, () => {
    for (const cat of categories) {
      for (const rule of cat.rules) {
        for (const s of rule.sections) {
          if (s.type !== 'formula') continue;
          for (const row of s.rows ?? []) {
            expect(
              row.length,
              `${name}: rule ${rule.id} formula row too short: ${JSON.stringify(row)}`,
            ).toBeGreaterThanOrEqual(3);
          }
        }
      }
    }
  });
}

describe('GRAMMAR_HE', () => {
  checkGrammarShape(GRAMMAR_HE, 'GRAMMAR_HE', 72);
});

describe('GRAMMAR_AR', () => {
  checkGrammarShape(GRAMMAR_AR, 'GRAMMAR_AR', 70);
});

describe('GRAMMAR_PL', () => {
  checkGrammarShape(GRAMMAR_PL, 'GRAMMAR_PL');
});

describe('GRAMMAR_ZH', () => {
  checkGrammarShape(GRAMMAR_ZH, 'GRAMMAR_ZH', 70);
});

describe('GRAMMAR_EL', () => {
  checkGrammarShape(GRAMMAR_EL, 'GRAMMAR_EL', 70);
});

describe('GRAMMAR_JA', () => {
  checkGrammarShape(GRAMMAR_JA, 'GRAMMAR_JA', 70);
});

describe('GRAMMAR_TR', () => {
  checkGrammarShape(GRAMMAR_TR, 'GRAMMAR_TR', 70);
});

describe('GRAMMAR_NL', () => {
  checkGrammarShape(GRAMMAR_NL, 'GRAMMAR_NL', 70);
});

// Former GRAMMAR_BY_LANG aggregation is gone (js/features/grammar-loader.ts
// lazy-imports each language's own file instead — see
// docs/architecture-assessment.md p.6) — this now checks the loader
// resolves the same data these direct imports above see.
describe('grammar-loader', () => {
  it('resolves Hebrew and Arabic to the same data as their direct import', async () => {
    await ensureGrammarLoaded('he');
    await ensureGrammarLoaded('ar');
    expect(getGrammarForLang('he')).toBe(GRAMMAR_HE);
    expect(getGrammarForLang('ar')).toBe(GRAMMAR_AR);
  });

  it('resolves Polish, Chinese, Greek, Japanese, Turkish, and Dutch entries', async () => {
    await Promise.all(
      ['pl', 'zh', 'el', 'ja', 'tr', 'nl'].map((lang) => ensureGrammarLoaded(lang)),
    );
    expect(getGrammarForLang('pl')).toBe(GRAMMAR_PL);
    expect(getGrammarForLang('zh')).toBe(GRAMMAR_ZH);
    expect(getGrammarForLang('el')).toBe(GRAMMAR_EL);
    expect(getGrammarForLang('ja')).toBe(GRAMMAR_JA);
    expect(getGrammarForLang('tr')).toBe(GRAMMAR_TR);
    expect(getGrammarForLang('nl')).toBe(GRAMMAR_NL);
  });
});
