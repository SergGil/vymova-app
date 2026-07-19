// Vymova — js/features/quiz-overlay-shell.tsx
// full-react-migration-roadmap.md Phase 8: 19 quiz-mode modal overlays
// (`#bee-overlay`, `#scr-overlay`, ... `#write-overlay`) previously
// hand-authored as near-byte-identical static blocks in index.html — each
// `display:none; position:fixed; inset:0; background:rgba(0,0,0,.55);
// z-index:9100; align-items:center; justify-content:center;
// padding:16px 12px` wrapping a `.quiz-panel > #X-page-mount`. This
// component replaces all 19 with one data-driven render, the same
// consolidation ModeCardGrid already did for the 27 `.mode-card` buttons.
//
// Every entry here is `<LazyMode/>`-driven (see src/app-root.tsx) — LazyMode
// only calls getMountPoint(mountId) inside a click-triggered useEffect,
// never at module-eval or render time, so unlike sel-mode/sel-range (roadmap
// item 9) or catpairs.tsx/quiz.tsx (Phase 5a finding) there is no boot-order
// risk: the mount div just needs to exist by the time the user clicks,
// which is guaranteed once this component's own initial commit lands.
//
// Deliberately NOT included (see Phase 8 section of the roadmap doc):
// - catpairs-overlay / quiz-overlay: mounted eagerly via <Portal> in the
//   same tree — Portal's getMountPoint() runs in the render phase, before
//   anything commits, so a sibling shell creating the div in the same pass
//   wouldn't be visible to it yet (the exact lesson documented in Phase 3).
// - aq-overlay: LazyMode-driven but has no inline display:none wrapper at
//   all (CSS-selector-driven instead) — doesn't fit this shape.
// - tempo-overlay / story-mode-overlay: already-documented bespoke
//   exceptions (roadmap "what NOT to touch" item 4), structurally distinct
//   (different background/z-index/panel sizing).
import type { CSSProperties, ReactElement } from 'react';
import { createPortal } from 'react-dom';

type QuizOverlayEntry = {
  overlayId: string;
  mountId: string;
  zIndex?: number; // default 9100 — lesson-overlay alone uses 9200
  mountStyle?: CSSProperties; // cmp-page-mount alone carries flex layout
};

const ENTRIES: QuizOverlayEntry[] = [
  { overlayId: 'bee-overlay', mountId: 'bee-page-mount' },
  { overlayId: 'scr-overlay', mountId: 'scr-page-mount' },
  { overlayId: 'wl-overlay', mountId: 'wl-page-mount' },
  { overlayId: 'ctx-overlay', mountId: 'ctx-page-mount' },
  { overlayId: 'fib-overlay', mountId: 'fib-page-mount' },
  { overlayId: 'dict-overlay', mountId: 'dict-page-mount' },
  { overlayId: 'idq-overlay', mountId: 'idq-page-mount' },
  { overlayId: 'grq-overlay', mountId: 'grq-page-mount' },
  {
    overlayId: 'cmp-overlay',
    mountId: 'cmp-page-mount',
    mountStyle: { flex: 1, minHeight: 0, display: 'flex' },
  },
  { overlayId: 'listen-overlay', mountId: 'listen-page-mount' },
  { overlayId: 'oo-overlay', mountId: 'oo-page-mount' },
  { overlayId: 'sb-overlay', mountId: 'sb-page-mount' },
  { overlayId: 'eh-overlay', mountId: 'eh-page-mount' },
  { overlayId: 'assoc-overlay', mountId: 'assoc-page-mount' },
  { overlayId: 'hint-overlay', mountId: 'hint-page-mount' },
  { overlayId: 'shadow-overlay', mountId: 'shadow-page-mount' },
  { overlayId: 'ghost-overlay', mountId: 'ghost-page-mount' },
  { overlayId: 'lesson-overlay', mountId: 'lesson-page-mount', zIndex: 9200 },
  { overlayId: 'write-overlay', mountId: 'write-page-mount' },
];

export function QuizOverlayShell(): ReactElement | null {
  // #app-root (the real React root — see src/app-root.tsx) is `display:
  // none` in index.html by design (every other page's content mounts into
  // its own pre-existing, visible static container instead) — rendered as
  // a plain direct child, this component's 19 overlay divs would be literal
  // DOM descendants of that invisible root and never paint, no matter that
  // they're `position:fixed` (fixed positioning does not escape a
  // display:none ancestor — the whole subtree is skipped). Portaling to
  // <body> escapes that, same fix as modes-overlay-shell.tsx/sidebar-nav.tsx.
  if (typeof document === 'undefined') return null;
  return createPortal(
    <>
      {ENTRIES.map(({ overlayId, mountId, zIndex = 9100, mountStyle }) => (
        <div
          key={overlayId}
          id={overlayId}
          className={`fixed inset-0 flex items-center justify-center bg-black/55 px-3 py-4 ${
            zIndex === 9200 ? 'z-[9200]' : 'z-[9100]'
          }`}
          style={{ display: 'none' }}
        >
          <div className="quiz-panel">
            <div id={mountId} style={mountStyle} />
          </div>
        </div>
      ))}
    </>,
    document.body,
  );
}
