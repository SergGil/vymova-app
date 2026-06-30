import { describe, it, expect } from 'vitest';
import { GRAMMAR } from '../../data/grammar.ts';

describe('GRAMMAR data structure', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(GRAMMAR)).toBe(true);
    expect(GRAMMAR.length).toBeGreaterThan(0);
  });

  it('every category has required fields', () => {
    for (const cat of GRAMMAR) {
      expect(cat.id, `category missing id`).toBeTruthy();
      expect(cat.title, `category ${cat.id} missing title`).toBeTruthy();
      expect(cat.emoji, `category ${cat.id} missing emoji`).toBeTruthy();
      expect(Array.isArray(cat.rules), `category ${cat.id} rules must be array`).toBe(true);
      expect(cat.rules.length, `category ${cat.id} has no rules`).toBeGreaterThan(0);
    }
  });

  it('every rule has required fields', () => {
    for (const cat of GRAMMAR) {
      for (const rule of cat.rules) {
        expect(rule.id, `rule missing id in ${cat.id}`).toBeTruthy();
        expect(rule.title, `rule ${rule.id} missing title`).toBeTruthy();
        expect(rule.emoji, `rule ${rule.id} missing emoji`).toBeTruthy();
        expect(Array.isArray(rule.sections), `rule ${rule.id} sections must be array`).toBe(true);
        expect(rule.sections.length, `rule ${rule.id} has no sections`).toBeGreaterThan(0);
      }
    }
  });

  it('all rule IDs are unique across categories', () => {
    const ids = GRAMMAR.flatMap((c) => c.rules.map((r) => r.id));
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('all category IDs are unique', () => {
    const ids = GRAMMAR.map((c) => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('formula sections have rows with at least 3 columns', () => {
    for (const cat of GRAMMAR) {
      for (const rule of cat.rules) {
        for (const s of rule.sections) {
          if (s.type === 'formula') {
            expect(s.rows, `rule ${rule.id} formula missing rows`).toBeTruthy();
            for (const row of s.rows!) {
              expect(row.length, `rule ${rule.id} formula row too short`).toBeGreaterThanOrEqual(3);
            }
          }
        }
      }
    }
  });

  it('table sections have rows', () => {
    for (const cat of GRAMMAR) {
      for (const rule of cat.rules) {
        for (const s of rule.sections) {
          if (s.type === 'table') {
            expect(s.rows?.length, `rule ${rule.id} table has no rows`).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it('examples sections have EN and UA columns', () => {
    for (const cat of GRAMMAR) {
      for (const rule of cat.rules) {
        for (const s of rule.sections) {
          if (s.type === 'examples') {
            for (const row of s.rows ?? []) {
              expect(row[0], `rule ${rule.id} example missing EN`).toBeTruthy();
              expect(row[1], `rule ${rule.id} example missing UA`).toBeTruthy();
            }
          }
        }
      }
    }
  });

  it('irregular verbs table has header + data rows', () => {
    const irregRule = GRAMMAR.flatMap((c) => c.rules).find((r) => r.id === 'irregular-verbs');
    expect(irregRule).toBeDefined();
    const table = irregRule!.sections.find((s) => s.type === 'table');
    expect(table?.rows?.length).toBeGreaterThan(50); // 60+ verbs + header
  });

  it('contains core tenses', () => {
    const ids = new Set(GRAMMAR.flatMap((c) => c.rules.map((r) => r.id)));
    const required = ['present-simple', 'past-simple', 'present-perfect', 'future-simple'];
    for (const id of required) {
      expect(ids.has(id), `missing tense: ${id}`).toBe(true);
    }
  });
});
