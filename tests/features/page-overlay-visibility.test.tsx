// @testing-library/react (legacy-modernization-roadmap.md item 4/3g).
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { PageOverlayVisibility } from '../../js/features/page-overlay-visibility.tsx';
import { dispatchOpenPage, dispatchClosePage } from '../../src/nav-store.tsx';

beforeEach(() => {
  dispatchClosePage();
  document.body.innerHTML = '<div id="profile-overlay" class="page-overlay"></div>';
});

afterEach(() => {
  dispatchClosePage();
  document.body.innerHTML = '';
});

describe('<PageOverlayVisibility/>', () => {
  it('renders no DOM output of its own', () => {
    const { container } = render(
      <PageOverlayVisibility page="profile" overlayId="profile-overlay" />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('does not add "open" when its page is not the active one', () => {
    render(<PageOverlayVisibility page="profile" overlayId="profile-overlay" />);
    expect(document.getElementById('profile-overlay')!.classList.contains('open')).toBe(false);
  });

  it('adds "open" once its page becomes the active one', () => {
    render(<PageOverlayVisibility page="profile" overlayId="profile-overlay" />);
    act(() => {
      dispatchOpenPage('profile');
    });
    expect(document.getElementById('profile-overlay')!.classList.contains('open')).toBe(true);
  });

  it('removes "open" once the page closes', () => {
    render(<PageOverlayVisibility page="profile" overlayId="profile-overlay" />);
    act(() => {
      dispatchOpenPage('profile');
    });
    act(() => {
      dispatchClosePage();
    });
    expect(document.getElementById('profile-overlay')!.classList.contains('open')).toBe(false);
  });

  it('ignores a different page becoming active (stays closed)', () => {
    render(<PageOverlayVisibility page="profile" overlayId="profile-overlay" />);
    act(() => {
      dispatchOpenPage('settings');
    });
    expect(document.getElementById('profile-overlay')!.classList.contains('open')).toBe(false);
  });

  it('reflects an already-active page at mount time (not just on later changes)', () => {
    act(() => {
      dispatchOpenPage('profile');
    });
    render(<PageOverlayVisibility page="profile" overlayId="profile-overlay" />);
    expect(document.getElementById('profile-overlay')!.classList.contains('open')).toBe(true);
  });
});

// The exact (page, overlayId) pairs wired in src/app-root.tsx for the 7
// pages that self-manage this way today — a smoke test per real pairing to
// catch a copy-paste id mismatch between the two (the actual risk of
// hand-writing 6 near-identical <PageOverlayVisibility/> lines), not just
// the component's own logic (already covered above via 'profile').
describe('<PageOverlayVisibility/> — every page wired in app-root.tsx', () => {
  const wiredPages: Array<{ page: string; overlayId: string }> = [
    { page: 'profile', overlayId: 'profile-overlay' },
    { page: 'translate', overlayId: 'translate-overlay' },
    { page: 'lang-history', overlayId: 'lang-history-overlay' },
    { page: 'ai-tutor', overlayId: 'ai-tutor-overlay' },
    { page: 'voice-roleplay', overlayId: 'voice-roleplay-overlay' },
    { page: 'youtube-player', overlayId: 'youtube-player-overlay' },
    { page: 'video-player', overlayId: 'video-player-overlay' },
    { page: 'grammar', overlayId: 'grammar-overlay' },
    { page: 'idioms', overlayId: 'idioms-overlay' },
    { page: 'ach', overlayId: 'ach-overlay' },
    { page: 'duel', overlayId: 'duel-overlay' },
    { page: 'learning-path', overlayId: 'lp-overlay' },
    { page: 'settings', overlayId: 'settings-overlay' },
  ];

  for (const { page, overlayId } of wiredPages) {
    it(`${page} <-> #${overlayId}`, () => {
      document.body.innerHTML = `<div id="${overlayId}" class="page-overlay"></div>`;
      render(<PageOverlayVisibility page={page} overlayId={overlayId} />);
      const el = document.getElementById(overlayId)!;

      act(() => {
        dispatchOpenPage(page);
      });
      expect(el.classList.contains('open')).toBe(true);

      act(() => {
        dispatchClosePage();
      });
      expect(el.classList.contains('open')).toBe(false);
    });
  }
});

// grammar/idioms are wired with an `onActivate` (content-refresh) callback
// in app-root.tsx, unlike the 7 plain pages above.
describe('<PageOverlayVisibility/> onActivate (grammar/idioms in app-root.tsx)', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="grammar-overlay" class="page-overlay"></div>';
  });

  it('fires onActivate when the page becomes active', () => {
    const onActivate = vi.fn();
    render(<PageOverlayVisibility page="grammar" overlayId="grammar-overlay" onActivate={onActivate} />);
    expect(onActivate).not.toHaveBeenCalled();

    act(() => {
      dispatchOpenPage('grammar');
    });
    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it('fires onActivate again on re-activation (navigate away and back)', () => {
    const onActivate = vi.fn();
    render(<PageOverlayVisibility page="grammar" overlayId="grammar-overlay" onActivate={onActivate} />);
    act(() => {
      dispatchOpenPage('grammar');
    });
    act(() => {
      dispatchClosePage();
    });
    act(() => {
      dispatchOpenPage('grammar');
    });
    expect(onActivate).toHaveBeenCalledTimes(2);
  });

  // The whole reason onActivate is excluded from the effect's dependency
  // array (see the component's own comment) — a real caller
  // (app-root.tsx) passes a fresh inline closure on every render, and that
  // must NOT re-trigger the activation side effect on its own.
  it('does not re-fire onActivate on a re-render with a new onActivate reference while still active', () => {
    const firstFn = vi.fn();
    const { rerender } = render(
      <PageOverlayVisibility page="grammar" overlayId="grammar-overlay" onActivate={firstFn} />,
    );
    act(() => {
      dispatchOpenPage('grammar');
    });
    expect(firstFn).toHaveBeenCalledTimes(1);

    const secondFn = vi.fn();
    rerender(<PageOverlayVisibility page="grammar" overlayId="grammar-overlay" onActivate={secondFn} />);
    expect(secondFn).not.toHaveBeenCalled();
  });
});

// 'settings' in app-root.tsx wires 4 separate calls (_renderVoices,
// _refreshNotifUI, notifySettingsChange, _refreshCloudSyncUI) into one
// onActivate — unlike grammar/idioms/ach/duel/learning-path's single call.
describe('<PageOverlayVisibility/> onActivate with multiple calls (settings in app-root.tsx)', () => {
  it('runs every call bundled into onActivate exactly once per activation', () => {
    document.body.innerHTML = '<div id="settings-overlay" class="page-overlay"></div>';
    const renderVoices = vi.fn();
    const refreshNotifUI = vi.fn();
    const notifySettingsChange = vi.fn();
    const refreshCloudSyncUI = vi.fn();
    const onActivate = (): void => {
      renderVoices();
      refreshNotifUI();
      notifySettingsChange();
      refreshCloudSyncUI();
    };

    render(<PageOverlayVisibility page="settings" overlayId="settings-overlay" onActivate={onActivate} />);
    act(() => {
      dispatchOpenPage('settings');
    });

    expect(renderVoices).toHaveBeenCalledTimes(1);
    expect(refreshNotifUI).toHaveBeenCalledTimes(1);
    expect(notifySettingsChange).toHaveBeenCalledTimes(1);
    expect(refreshCloudSyncUI).toHaveBeenCalledTimes(1);
  });
});

// 'modes' in app-root.tsx passes extraClass="as-page" — the only page that
// needs a second class beyond "open" (modes-overlay is also shared with
// modes-modal.tsx's own quick-open path, which does its own thing to the
// same element independently of this component).
describe('<PageOverlayVisibility/> extraClass (modes in app-root.tsx)', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="modes-overlay" class="modes-overlay"></div>';
  });

  it('toggles both "open" and the extra class together on activation', () => {
    render(<PageOverlayVisibility page="modes" overlayId="modes-overlay" extraClass="as-page" />);
    const el = document.getElementById('modes-overlay')!;
    expect(el.classList.contains('open')).toBe(false);
    expect(el.classList.contains('as-page')).toBe(false);

    act(() => {
      dispatchOpenPage('modes');
    });
    expect(el.classList.contains('open')).toBe(true);
    expect(el.classList.contains('as-page')).toBe(true);

    act(() => {
      dispatchClosePage();
    });
    expect(el.classList.contains('open')).toBe(false);
    expect(el.classList.contains('as-page')).toBe(false);
  });
});

// 'stats' in app-root.tsx combines extraClass="as-page" (CSS has
// `#stats-overlay.as-page { display: flex !important }`, so the class alone
// drives visibility — no separate display prop needed) with an onActivate
// that dispatches a synthetic click on #btn-stats, rather than calling
// openStats() (stats-trigger.ts) directly — that click is independently
// listened to by CatPairsWiringInit (js/modes/catpairs.tsx) to refresh its
// weak-words widget, so calling openStats() directly would silently drop
// that second listener's effect. closePage()'s own unconditional stats
// clearing (sidebar.tsx, for the quick-view-modal case) is covered in
// sidebar.test.tsx, not here.
describe('<PageOverlayVisibility/> stats (app-root.tsx exact wiring)', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="stats-overlay" class="page-overlay"></div><button id="btn-stats"></button>';
  });

  function renderStatsWiring(): void {
    render(
      <PageOverlayVisibility
        page="stats"
        overlayId="stats-overlay"
        extraClass="as-page"
        onActivate={() => {
          document.getElementById('btn-stats')?.dispatchEvent(new Event('click'));
        }}
      />,
    );
  }

  it('adds "as-page" and dispatches a click on #btn-stats when stats becomes active', () => {
    let statsBtnClicked = false;
    document.getElementById('btn-stats')!.addEventListener('click', () => {
      statsBtnClicked = true;
    });
    renderStatsWiring();
    const el = document.getElementById('stats-overlay')!;
    expect(el.classList.contains('as-page')).toBe(false);

    act(() => {
      dispatchOpenPage('stats');
    });
    expect(el.classList.contains('as-page')).toBe(true);
    expect(statsBtnClicked).toBe(true);
  });

  it('removes "as-page" (CSS reverts to display:none) when stats closes, without re-clicking #btn-stats', () => {
    let clickCount = 0;
    document.getElementById('btn-stats')!.addEventListener('click', () => {
      clickCount += 1;
    });
    renderStatsWiring();
    act(() => {
      dispatchOpenPage('stats');
    });
    expect(clickCount).toBe(1);

    act(() => {
      dispatchClosePage();
    });
    expect(document.getElementById('stats-overlay')!.classList.contains('as-page')).toBe(false);
    expect(clickCount).toBe(1);
  });
});
