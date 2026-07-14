import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { swVersionPlugin } from '../../vite.config.js';

// public/sw.js's whole cache-invalidation strategy hinges on its CACHE
// version string changing between deploys — the browser's SW-update check
// only reacts to sw.js's *bytes* differing, so a forgotten manual bump means
// no update is ever detected and an already-active SW keeps serving its
// stale cache indefinitely. This plugin replaces that manual bump with a
// hash of the build's own output filenames. Exercised directly against a
// scratch directory here (not just via a full `vite build`, which never
// asserts on the resulting version string at all).
function fakeErrorPluginContext(): { error: (msg: string) => never; calls: string[] } {
  const calls: string[] = [];
  return {
    calls,
    error(msg: string): never {
      calls.push(msg);
      throw new Error(msg);
    },
  };
}

describe('swVersionPlugin() — sw.js CACHE version from build output hash', () => {
  let dir: string;

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), 'sw-version-test-'));
    writeFileSync(join(dir, 'sw.js'), "var CACHE = 'ew-placeholder';\nconsole.log('rest of file');\n");
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it('replaces the CACHE literal with a new ew-<hash> value', () => {
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();
    plugin.writeBundle.call(ctx, { dir }, { 'chunk-a.js': {}, 'chunk-b.css': {} });
    const out = readFileSync(join(dir, 'sw.js'), 'utf8');
    expect(out).toMatch(/var CACHE = 'ew-[0-9a-f]{12}';/);
    expect(out).not.toContain('ew-placeholder');
    expect(ctx.calls).toEqual([]);
  });

  it('preserves the rest of sw.js untouched', () => {
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();
    plugin.writeBundle.call(ctx, { dir }, { 'chunk-a.js': {} });
    const out = readFileSync(join(dir, 'sw.js'), 'utf8');
    expect(out).toContain("console.log('rest of file');");
  });

  it('is deterministic: the same bundle filenames produce the same hash', () => {
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();
    const bundle = { 'chunk-a.js': {}, 'chunk-b.css': {}, 'words-base-XYZ.js': {} };

    plugin.writeBundle.call(ctx, { dir }, bundle);
    const first = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    writeFileSync(join(dir, 'sw.js'), "var CACHE = 'ew-placeholder';\n");
    plugin.writeBundle.call(ctx, { dir }, bundle);
    const second = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    expect(first).toBeTruthy();
    expect(second).toBe(first);
  });

  it('is order-independent: bundle key iteration order does not change the hash', () => {
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();

    plugin.writeBundle.call(ctx, { dir }, { 'a.js': {}, 'b.js': {}, 'c.js': {} });
    const first = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    writeFileSync(join(dir, 'sw.js'), "var CACHE = 'ew-placeholder';\n");
    plugin.writeBundle.call(ctx, { dir }, { 'c.js': {}, 'a.js': {}, 'b.js': {} });
    const second = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    expect(second).toBe(first);
  });

  it('produces a different hash when the set of filenames changes — this is the actual bug fix: a content/output change now forces a new SW version with no human bump required', () => {
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();

    plugin.writeBundle.call(ctx, { dir }, { 'words-base-AAA111.js': {}, 'app-XXX.js': {} });
    const before = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    // Simulates a data change: words-base's Rollup content hash changes.
    writeFileSync(join(dir, 'sw.js'), "var CACHE = 'ew-placeholder';\n");
    plugin.writeBundle.call(ctx, { dir }, { 'words-base-BBB222.js': {}, 'app-XXX.js': {} });
    const after = readFileSync(join(dir, 'sw.js'), 'utf8').match(/ew-[0-9a-f]{12}/)?.[0];

    expect(after).not.toBe(before);
  });

  it('errors loudly instead of silently no-op-ing when the CACHE line is missing/reshaped', () => {
    writeFileSync(join(dir, 'sw.js'), "// no CACHE line here at all\nconsole.log('hi');\n");
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();
    expect(() => plugin.writeBundle.call(ctx, { dir }, { 'a.js': {} })).toThrow();
    expect(ctx.calls.length).toBe(1);
  });

  it('no-ops (does not throw) when sw.js was not copied to the output dir at all', () => {
    rmSync(join(dir, 'sw.js'));
    const plugin = swVersionPlugin();
    const ctx = fakeErrorPluginContext();
    expect(() => plugin.writeBundle.call(ctx, { dir }, { 'a.js': {} })).not.toThrow();
  });

  it('only applies to production builds, not vite dev/serve', () => {
    const plugin = swVersionPlugin();
    expect(plugin.name).toBe('sw-version');
    expect(plugin.apply).toBe('build');
  });
});
