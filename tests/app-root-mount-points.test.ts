import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// src/app-root.tsx portals ~80 React components into pre-existing DOM nodes
// in index.html (<Portal id="xxx-mount">, <LazyMode mountId="..." btnId="...">,
// <LazyPage mountId="...">) instead of index.html and app-root.tsx being
// generated from one shared source of truth — see that file's header comment
// ("вёрстка та CSS не змінюються"). Portal/LazyMode/LazyPage all resolve their
// target via a plain document.getElementById() and silently render nothing
// (no error, no warning) when it's missing, so a typo'd or removed id on
// either side doesn't fail loudly — the feature just quietly stops
// appearing. This is a plain source-text check (not a rendered-DOM one) on
// purpose: it needs to catch the drift at the exact two places a human edits
// by hand, the same way vi-language-parity.test.ts guards a different
// hand-synced-list bug class.
//
// full-react-migration-roadmap.md Phase 5a: the 27 mode-card buttons'
// btnId="btn-X" targets are no longer hand-authored in index.html — they're
// now data-driven JSX in mode-card-grid.tsx — so this guard checks btnId/
// mountId/Portal-id refs against the union of both files' ids now.
//
// Phase 8: 19 quiz-mode overlay/mount id pairs moved the same way, into
// quiz-overlay-shell.tsx's data-driven ENTRIES — included below too.

const root = join(__dirname, '..');
const read = (rel: string): string => readFileSync(join(root, rel), 'utf8');

function extractHtmlIds(html: string): Set<string> {
  return new Set([...html.matchAll(/\bid="([a-zA-Z0-9_-]+)"/g)].map((m) => m[1]));
}

// full-react-migration-roadmap.md Phase 5a: the 27 mode-card buttons'
// btnId="btn-X" targets moved out of index.html into mode-card-grid.tsx's
// data-driven GROUPS (each `id: '...'` field renders as `id={'btn-' + id}`)
// — this guard's hand-synced-list check needs to look there too now, not
// just index.html, for those 27 btnId refs specifically.
function extractModeCardGridIds(src: string): Set<string> {
  return new Set([...src.matchAll(/\bid: '([a-zA-Z0-9_-]+)'/g)].map((m) => `btn-${m[1]}`));
}

// full-react-migration-roadmap.md Phase 8: the 19 quiz-mode overlay/mount id
// pairs moved out of index.html into quiz-overlay-shell.tsx's data-driven
// ENTRIES (each `overlayId: '...'`/`mountId: '...'` field renders as
// `id={overlayId}`/`id={mountId}`) — this guard's hand-synced-list check
// needs to look there too now, not just index.html, for those ids.
function extractQuizOverlayShellIds(src: string): Set<string> {
  const ids = new Set<string>();
  for (const m of src.matchAll(/\boverlayId: '([a-zA-Z0-9_-]+)'/g)) ids.add(m[1]);
  for (const m of src.matchAll(/\bmountId: '([a-zA-Z0-9_-]+)'/g)) ids.add(m[1]);
  return ids;
}

// Every id app-root.tsx expects to find already present in index.html:
// <Portal id="...">'s target, plus <LazyMode>/<LazyPage>'s mountId (their
// portal target once loaded) and <LazyMode>'s btnId (the sidebar button
// whose click triggers the lazy import in the first place).
function extractAppRootRefs(src: string): { id: string; kind: string }[] {
  const refs: { id: string; kind: string }[] = [];
  for (const m of src.matchAll(/<Portal\s+id="([^"]+)"/g)) refs.push({ id: m[1], kind: 'Portal id' });
  for (const m of src.matchAll(/\bmountId="([^"]+)"/g)) refs.push({ id: m[1], kind: 'mountId' });
  for (const m of src.matchAll(/\bbtnId="([^"]+)"/g)) refs.push({ id: m[1], kind: 'btnId' });
  return refs;
}

describe('src/app-root.tsx mount points exist in index.html', () => {
  const html = read('index.html');
  const appRoot = read('src/app-root.tsx');
  const modeCardGrid = read('js/features/mode/mode-card-grid.tsx');
  const quizOverlayShell = read('js/features/mode/quiz-overlay-shell.tsx');
  // docs/card-shell-migration-roadmap.md Phase 2: .card-scene's ~24
  // mount-point ids (card-meta-mount, illus-mount, etymology-mount, ...)
  // moved out of index.html into card-shell.tsx's JSX — same
  // `id="..."` attribute syntax, so extractHtmlIds' regex works unchanged.
  const cardShell = read('js/features/card/card-shell.tsx');
  const validIds = new Set([
    ...extractHtmlIds(html),
    ...extractModeCardGridIds(modeCardGrid),
    ...extractQuizOverlayShellIds(quizOverlayShell),
    ...extractHtmlIds(cardShell),
  ]);
  const refs = extractAppRootRefs(appRoot);

  it('found a substantial number of references (guards against the regexes silently matching nothing)', () => {
    // Settings/achievements/game-bar page-shell consolidations (each folded
    // several separate Portal ids into one owning component) have brought
    // this down from ~93 over time — the exact number isn't meaningful, only
    // that it's nowhere near 0 (a broken regex).
    expect(refs.length).toBeGreaterThan(80);
  });

  it.each(refs.map(({ id, kind }): [string, string] => [`${kind}="${id}"`, id]))(
    '%s has a matching id in index.html, mode-card-grid.tsx, quiz-overlay-shell.tsx, or card-shell.tsx',
    (_label, id) => {
      expect(
        validIds.has(id),
        `id="${id}" referenced from app-root.tsx but not found in index.html, mode-card-grid.tsx, quiz-overlay-shell.tsx, or card-shell.tsx`,
      ).toBe(true);
    },
  );
});
