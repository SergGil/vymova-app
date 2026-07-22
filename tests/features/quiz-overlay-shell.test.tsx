import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { QuizOverlayShell } from '../../js/features/quiz-overlay-shell.tsx';
import { LazyMode } from '../../src/lazy-mode.tsx';

// The 19 `#X-overlay` ids this component renders — one `.quiz-panel`
// wrapper each, `cmp-overlay` carrying an extra flex mount style and
// `lesson-overlay` a different (9200 vs 9100) z-index.
const OVERLAY_IDS = [
  'bee-overlay',
  'scr-overlay',
  'wl-overlay',
  'ctx-overlay',
  'fib-overlay',
  'dict-overlay',
  'idq-overlay',
  'grq-overlay',
  'cmp-overlay',
  'listen-overlay',
  'oo-overlay',
  'sb-overlay',
  'eh-overlay',
  'assoc-overlay',
  'hint-overlay',
  'shadow-overlay',
  'ghost-overlay',
  'lesson-overlay',
  'write-overlay',
];

describe('<QuizOverlayShell/>', () => {
  it('renders 19 quiz-mode overlay wrappers, each hidden by default with a .quiz-panel mount', () => {
    render(<QuizOverlayShell />);
    expect(document.querySelectorAll('.quiz-panel')).toHaveLength(20); // 19 + aq-overlay
    for (const id of OVERLAY_IDS) {
      const overlay = document.getElementById(id)!;
      expect(overlay).not.toBeNull();
      expect(overlay.style.display).toBe('none');
      expect(overlay.className).toContain('fixed');
      expect(overlay.querySelector(':scope > .quiz-panel')).not.toBeNull();
    }
  });

  // aq-overlay is a 20th, structurally distinct entry (the `bare` flag):
  // no Tailwind className/inline style at all — visibility comes entirely
  // from #aq-overlay/#aq-overlay.open rules already in css/styles.css, and
  // its .quiz-panel wrapper carries an id ("aq-panel") the other 19 don't.
  it('renders aq-overlay bare (no className/inline style) with its panel id preserved', () => {
    render(<QuizOverlayShell />);
    const overlay = document.getElementById('aq-overlay')!;
    expect(overlay).not.toBeNull();
    expect(overlay.getAttribute('class')).toBeNull();
    expect(overlay.getAttribute('style')).toBeNull();
    const panel = overlay.querySelector(':scope > .quiz-panel')!;
    expect(panel.id).toBe('aq-panel');
    expect(panel.querySelector('#aq-page-mount')).not.toBeNull();
  });

  it('gives lesson-overlay a higher z-index (9200) than the other 18 overlays (9100)', () => {
    render(<QuizOverlayShell />);
    expect(document.getElementById('lesson-overlay')!.className).toContain('z-[9200]');
    expect(document.getElementById('bee-overlay')!.className).toContain('z-[9100]');
  });

  it("carries cmp-page-mount's flex layout style", () => {
    render(<QuizOverlayShell />);
    const mount = document.getElementById('cmp-page-mount')!;
    expect(mount.style.display).toBe('flex');
    expect(mount.style.flex).toBe('1 1 0%');
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
