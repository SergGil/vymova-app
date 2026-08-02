import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Regression guard for database.rules.json — RTDB has no schema/compiler
// check beyond "is this valid JSON" (see deploy-database-rules.yml's
// "Validate rules JSON" step), so a rule like `"leaderboard": { ".write":
// true }` at a collection root — which lets anyone wipe or bulk-overwrite
// the entire collection in one request, since RTDB has no Auth here (see
// docs/legacy-modernization-roadmap.md §5a for the full model) — would
// deploy silently. This test pins the specific invariants that fix relied
// on, so a future edit that reintroduces a collection-root write (or drops
// the leaderboard name/avatar immutability guard) fails CI instead of prod.

type RuleNode = Record<string, unknown>;

function loadRules(): RuleNode {
  const path = resolve(process.cwd(), 'database.rules.json');
  const parsed = JSON.parse(readFileSync(path, 'utf8')) as { rules: RuleNode };
  return parsed.rules;
}

describe('database.rules.json', () => {
  const rules = loadRules();

  it.each(['sync', 'duel_rooms', 'leaderboard', 'tournaments', 'duel_async'])(
    '%s has no collection-root ".write" — writes must be scoped to a specific record',
    (collection) => {
      const node = rules[collection] as RuleNode;
      expect(node).toBeDefined();
      expect(node['.write']).toBeUndefined();
    },
  );

  it('leaderboard keeps a collection-root ".read" for the public orderBy="xp" query', () => {
    const leaderboard = rules.leaderboard as RuleNode;
    expect(leaderboard['.read']).toBe(true);
  });

  it.each(['duel_rooms', 'tournaments', 'duel_async'])(
    '%s grants read/write only at the per-record ($id) level',
    (collection) => {
      const node = rules[collection] as RuleNode;
      const wildcardKey = Object.keys(node).find((k) => k.startsWith('$'));
      expect(wildcardKey, `expected a $-wildcard child under "${collection}"`).toBeDefined();
      const record = node[wildcardKey as string] as RuleNode;
      expect(record['.read']).toBe(true);
      expect(record['.write']).toBe(true);
    },
  );

  it('sync/$syncKey grants read/write at the per-key level, since the collection root no longer does', () => {
    const sync = rules.sync as RuleNode;
    const syncKey = sync.$syncKey as RuleNode;
    expect(syncKey['.read']).toBe(true);
    expect(syncKey['.write']).toBe(true);
  });

  it('leaderboard/$uid grants write at the per-uid level, since the collection root no longer does', () => {
    const leaderboard = rules.leaderboard as RuleNode;
    const uid = leaderboard.$uid as RuleNode;
    expect(uid['.write']).toBe(true);
  });

  it.each(['name', 'avatar'])(
    'leaderboard/$uid/%s is immutable after creation (uids are enumerable via the public read, so this blocks defacement)',
    (field) => {
      const leaderboard = rules.leaderboard as RuleNode;
      const uid = leaderboard.$uid as RuleNode;
      const rule = uid[field] as RuleNode;
      expect(rule['.validate']).toContain('data.exists()');
    },
  );

  it.each(['duel_rooms', 'tournaments', 'duel_async', 'leaderboard'])(
    '%s rejects unlisted fields via a $other catch-all',
    (collection) => {
      const node = rules[collection] as RuleNode;
      const wildcardKey = Object.keys(node).find((k) => k.startsWith('$'));
      const record = node[wildcardKey as string] as RuleNode;
      const other = record.$other as RuleNode | undefined;
      expect(other?.['.validate']).toBe(false);
    },
  );
});
