import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { QuizOverlayShell } from '../../js/features/quiz-overlay-shell.tsx';
import { LazyMode } from '../../src/lazy-mode.tsx';
import { expectStructuralParity } from '../support/structural-parity.ts';

// The exact static markup the 19 `#X-overlay` blocks in index.html were
// replaced by (Phase 8) — same wrapper repeated 19 times, `cmp-page-mount`
// carrying an extra flex style and `lesson-overlay` a different z-index.
const wrapperStyle = (zIndex = 9100): string =>
  `display:none;position:fixed;inset:0;background:rgba(0, 0, 0, 0.55);z-index:${zIndex};align-items:center;justify-content:center;padding:16px 12px;`;

// cmp-page-mount's style is written in the normalized longhand React's own
// inline-style serialization produces for the "flex: 1" shorthand
// (flex-grow/flex-shrink/flex-basis) — same declarations, same visual
// result as the original "flex: 1; min-height: 0; display: flex", see
// structural-parity.ts's header comment on this exact class of difference.
const ORIGINAL_HTML = `
  <div id="bee-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="bee-page-mount"></div></div></div>
  <div id="scr-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="scr-page-mount"></div></div></div>
  <div id="wl-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="wl-page-mount"></div></div></div>
  <div id="ctx-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="ctx-page-mount"></div></div></div>
  <div id="fib-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="fib-page-mount"></div></div></div>
  <div id="dict-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="dict-page-mount"></div></div></div>
  <div id="idq-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="idq-page-mount"></div></div></div>
  <div id="grq-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="grq-page-mount"></div></div></div>
  <div id="cmp-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="cmp-page-mount" style="display: flex; flex-grow: 1; flex-shrink: 1; flex-basis: 0%; min-height: 0"></div></div></div>
  <div id="listen-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="listen-page-mount"></div></div></div>
  <div id="oo-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="oo-page-mount"></div></div></div>
  <div id="sb-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="sb-page-mount"></div></div></div>
  <div id="eh-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="eh-page-mount"></div></div></div>
  <div id="assoc-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="assoc-page-mount"></div></div></div>
  <div id="hint-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="hint-page-mount"></div></div></div>
  <div id="shadow-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="shadow-page-mount"></div></div></div>
  <div id="ghost-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="ghost-page-mount"></div></div></div>
  <div id="lesson-overlay" style="${wrapperStyle(9200)}"><div class="quiz-panel"><div id="lesson-page-mount"></div></div></div>
  <div id="write-overlay" style="${wrapperStyle()}"><div class="quiz-panel"><div id="write-page-mount"></div></div></div>
`;

// happy-dom (20.10.6, this project's test environment) silently drops
// `style.inset = '0'` — the JS CSSOM property path React uses to apply
// inline styles — while parsing the exact same `inset: 0` correctly when
// it appears in a raw HTML string's `style="..."` attribute (verified with
// a direct happy-dom repro). Real browsers apply `.style.inset` correctly
// (baseline since 2021), so this is a test-environment gap, not a
// production difference — stripped from both sides before comparing so the
// parity check still verifies everything else byte-for-byte.
const stripInset = (html: string): string => html.replace(/inset:\s*0;?\s*/g, '');

describe('<QuizOverlayShell/>', () => {
  it('renders 19 quiz-mode overlay wrappers, structurally identical to the original static markup', () => {
    const { container } = render(<QuizOverlayShell />);
    expect(container.querySelectorAll('.quiz-panel')).toHaveLength(19);
    expectStructuralParity(stripInset(container.innerHTML), stripInset(ORIGINAL_HTML));
  });

  it('nests each mount div under its overlay ("[id$=\'-overlay\']" ancestor lookup in lazy-mode.tsx relies on this)', () => {
    render(<QuizOverlayShell />);
    const mount = document.getElementById('bee-page-mount')!;
    expect(mount.closest('[id$="-overlay"]')!.id).toBe('bee-overlay');
  });

  // Regression test for the timing reasoning in full-react-migration-
  // roadmap.md Phase 8: <QuizOverlayShell/> and <LazyMode/> are siblings in
  // the same React tree (both direct children of AppRoot) — LazyMode only
  // calls getMountPoint() inside a click-triggered useEffect, never at
  // render time, so a real user click reaches it correctly even though the
  // mount div no longer exists in static HTML before React mounts.
  it('a mount QuizOverlayShell renders is usable by a sibling <LazyMode/> once both commit', async () => {
    const open = vi.fn();
    const loader = vi.fn().mockResolvedValue({ Page: () => null, open });

    render(
      <>
        <QuizOverlayShell />
        <button id="btn-fib" />
        <LazyMode btnId="btn-fib" mountId="fib-page-mount" loader={loader} />
      </>,
    );

    expect(loader).not.toHaveBeenCalled();
    act(() => {
      document.getElementById('btn-fib')!.click();
    });
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(loader).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledTimes(1);
  });
});
