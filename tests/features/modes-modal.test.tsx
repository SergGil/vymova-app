import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { openModesModal } from '../../js/features/modes-modal.tsx';
import { dispatchClosePage, getActivePage } from '../../src/nav-store.tsx';

// full-react-migration-roadmap.md Phase 5b: the overlay itself (markup,
// visibility, close wiring, mode-card--active highlighting) moved to
// modes-overlay-shell.tsx's <ModesOverlayShell/>, owned by the same
// <PageOverlayVisibility page="modes" .../> mechanism every other page uses
// — see tests/features/modes-overlay-shell.test.tsx for that coverage.
// openModesModal() is now a thin, stable public API that just opens the
// "modes" nav-store page.
describe('modes-modal.tsx (openModesModal)', () => {
  beforeEach(() => {
    dispatchClosePage();
  });

  afterEach(() => {
    dispatchClosePage();
  });

  it('opens the "modes" page in nav-store', () => {
    expect(getActivePage()).toBeNull();
    openModesModal();
    expect(getActivePage()).toBe('modes');
  });
});
