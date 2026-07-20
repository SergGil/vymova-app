// tests/main-boot-order.test.ts
// docs/card-shell-migration-roadmap.md, Phase 1: src/main.ts now calls
// mountAppRoot() before importing js/app.ts (previously the reverse), so
// app.ts's module-eval-time getElementById('sel-mode')/render() calls
// always find a DOM React already committed, instead of racing it.
//
// This is a plain source-text check (not a rendered-boot one) on purpose,
// the same approach tests/app-root-mount-points.test.ts already uses for a
// different hand-synced-order bug class: actually booting the full app
// (mountAppRoot() + importing js/app.ts, which eagerly pulls in
// data/words.js and ~40 other modules) in a single vitest run is real,
// first-time module-init work that took ~170s and tripped vitest's global
// `retry: 1` into calling createRoot() twice on a torn-down container
// (React's "already passed to createRoot()" warning) — not something worth
// paying in the regular suite. The runtime behavior this guards is instead
// verified by hand in the browser (npm run dev) once per change here.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('src/main.ts boot order', () => {
  it('calls mountAppRoot() before importing js/app.ts', () => {
    const src = readFileSync(join(__dirname, '..', 'src', 'main.ts'), 'utf8');
    const mountCallIdx = src.indexOf('mountAppRoot();');
    const appImportIdx = src.indexOf("await import('../js/app.ts');");
    expect(mountCallIdx).toBeGreaterThan(-1);
    expect(appImportIdx).toBeGreaterThan(-1);
    expect(mountCallIdx).toBeLessThan(appImportIdx);
  });
});
