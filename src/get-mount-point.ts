// src/get-mount-point.ts — shared by app-root.tsx's Portal and
// lazy-mode.tsx/lazy-page.tsx's LazyMode/LazyPage: all three portal a React
// component into a pre-existing DOM node in index.html, looked up by id.
// Before this, a missing/typo'd id (index.html and app-root.tsx are hand-
// synced, nothing enforces they match — see
// tests/app-root-mount-points.test.ts for the build-time guard) meant the
// feature just silently never rendered. This surfaces the same problem
// immediately in a local `npm run dev` session too, instead of only at test
// or CI time.
const _warned = new Set<string>();

export function getMountPoint(id: string): HTMLElement | null {
  const el = document.getElementById(id);
  if (!el && !_warned.has(id)) {
    _warned.add(id);
    console.error(
      `[mount] #${id} not found in the DOM — index.html and app-root.tsx have drifted out of sync.`,
    );
  }
  return el;
}
