import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { getActivePage, dispatchClosePage } from '../../src/nav-store.tsx';
import { SidebarInit, openPage, closePage } from '../../js/features/sidebar.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SidebarInit />);
  });
  return { container, root };
}

async function wait(ms: number): Promise<void> {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms));
  });
}

describe('sidebar.tsx', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="hamburger"></button>
      <div id="sidebar"></div>
      <div id="sidebar-overlay"></div>
      <button id="sb-cards"></button>
      <button id="sb-home"></button>
      <button id="sb-stats" class="sb-active"></button>
      <button id="sb-achievements"></button>
      <button id="sb-modes"></button>
      <button id="sb-settings"></button>
      <button id="sb-duel"></button>
      <button id="sb-grammar"></button>
      <button id="sb-idioms"></button>
      <button id="sb-learning-path"></button>
      <div id="stats-overlay"></div>
      <div id="ach-overlay"></div>
      <div id="modes-overlay"></div>
      <div id="settings-overlay"></div>
      <div id="duel-overlay"></div>
      <div id="grammar-overlay"></div>
      <div id="idioms-overlay"></div>
      <div id="lp-overlay"></div>
      <div id="write-mode-desc"></div>
      <button id="btn-stats"></button>
      <button id="stats-close"></button>
      <button id="modes-close"></button>
      <button id="set-theme"></button>
      <button id="btn-theme"></button>
      <span id="set-theme-pill"></span>
    `;
    document.body.classList.remove('dark', 'sw');
    dispatchClosePage();
    localStorage.clear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
    closePage();
  });

  it('renders nothing', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('toggles the sidebar open/closed via the hamburger button', () => {
    const { root } = mount();
    roots.push(root);
    const sidebar = document.getElementById('sidebar')!;
    const overlay = document.getElementById('sidebar-overlay')!;

    act(() => {
      document
        .getElementById('hamburger')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(sidebar.classList.contains('open')).toBe(true);
    expect(overlay.classList.contains('open')).toBe(true);

    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(sidebar.classList.contains('open')).toBe(false);
    expect(overlay.classList.contains('open')).toBe(false);
  });

  // The stats overlay's "as-page" class / #btn-stats synthetic click are no
  // longer set directly by openPage() — they're owned reactively by
  // <PageOverlayVisibility/> (see page-overlay-visibility.test.tsx's
  // dedicated "stats" describe block), which isn't mounted in this test
  // file. Sidebar active-link highlighting is likewise owned reactively by
  // <SidebarNav/>'s <NavLink/> now (see sidebar-nav.test.tsx) — only the
  // shared nav-state side is exercised here.
  it('openPage("stats") activates the stats overlay state', () => {
    const { root } = mount();
    roots.push(root);

    act(() => {
      openPage('stats');
    });

    expect(getActivePage()).toBe('stats');
    expect(document.body.style.overflow).toBe('hidden');
    expect(localStorage.getItem('ew_active_page')).toBe('stats');
  });

  // updateModesPageDesc() used to be called directly inside openPage()'s
  // 'modes' branch too — that direct call was dropped as redundant when
  // 'modes' overlay-visibility moved to <PageOverlayVisibility/>, because
  // SidebarInit already has its own independent
  // useEffect(() => { if (activePage === 'modes') updateModesPageDesc(); })
  // reacting to the same activePage change. This confirms that reactive
  // path alone is enough — dropping the direct call wasn't a regression.
  it('updates the modes page language-pair label reactively when navigating to "modes"', () => {
    const { root } = mount();
    roots.push(root);
    act(() => {
      openPage('modes');
    });
    expect(document.getElementById('write-mode-desc')!.textContent).toMatch(/→/);
  });

  // 'modes'/'ach'/'settings'/'duel'/'learning-path'/'profile'/'grammar'/
  // 'idioms'/'translate'/'lang-history'/'ai-tutor'/'voice-roleplay'/
  // 'youtube-player'/'video-player' — overlay-visibility (and any
  // content-refresh call) all moved out of openPage()/closePage() into
  // <PageOverlayVisibility/> (page-overlay-visibility.tsx, its own
  // dedicated tests, including one per page's exact wiring in
  // app-root.tsx). 'stats' joins them here on the open side (its
  // "as-page" class add / #btn-stats dispatch are also reactive now) —
  // but closePage() still directly force-clears it too, unconditionally,
  // for the quick-view-modal case (see the dedicated test above).
  it('openPage()/closePage() drive the shared nav state for pages whose overlay is handled elsewhere', () => {
    const { root } = mount();
    roots.push(root);
    for (const page of ['modes', 'profile', 'ach', 'settings', 'duel', 'grammar', 'idioms', 'stats']) {
      act(() => {
        openPage(page);
      });
      expect(getActivePage()).toBe(page);
    }
    act(() => {
      closePage();
    });
    expect(getActivePage()).toBeNull();
  });

  it('closePage clears active page state', () => {
    const { root } = mount();
    roots.push(root);
    act(() => {
      openPage('stats');
    });
    expect(getActivePage()).toBe('stats');

    act(() => {
      closePage();
    });
    expect(getActivePage()).toBeNull();
    expect(document.body.style.overflow).toBe('');
    expect(localStorage.getItem('ew_active_page')).toBeNull();
  });

  // closePage() force-clears the stats overlay's "as-page" class / display
  // unconditionally — even when stats wasn't the page nav-store had open —
  // because stats can also be showing as an independent floating quick-view
  // modal (opened by clicking #btn-stats directly, entirely outside
  // nav-store) that must not visually linger above whatever page is opened
  // next. <PageOverlayVisibility/> only reacts to 'stats' itself
  // becoming/leaving the active page, so it can't express this — this stays
  // directly in closePage() by design (see the comment there).
  it('closePage force-clears a stats quick-view overlay even when stats was never the active nav page', () => {
    const { root } = mount();
    roots.push(root);
    const so = document.getElementById('stats-overlay')!;
    so.classList.add('as-page');
    so.style.display = 'flex';
    expect(getActivePage()).toBeNull();

    act(() => {
      closePage();
    });
    expect(so.classList.contains('as-page')).toBe(false);
    expect(so.style.display).toBe('none');
  });

  it('Escape closes whichever page is currently open', () => {
    const { root } = mount();
    roots.push(root);
    act(() => {
      openPage('stats');
    });
    expect(getActivePage()).toBe('stats');

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(getActivePage()).toBeNull();
  });

  it('Escape does nothing when no page is open', () => {
    const { root } = mount();
    roots.push(root);
    expect(getActivePage()).toBeNull();

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(getActivePage()).toBeNull();
  });

  // Sidebar nav-link click wiring itself (href/onClick) moved to
  // <SidebarNav/> — see sidebar-nav.test.tsx's "opens the corresponding
  // page on click" coverage.

  it('toggles the theme pill when the theme toggle is clicked', async () => {
    const { root } = mount();
    roots.push(root);
    let themeClicked = false;
    document.getElementById('btn-theme')!.addEventListener('click', () => {
      themeClicked = true;
      localStorage.setItem('ew_theme', 'dark');
    });

    act(() => {
      document
        .getElementById('set-theme')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(themeClicked).toBe(true);

    await wait(60);
    expect(document.getElementById('set-theme-pill')!.classList.contains('on')).toBe(true);
  });

  it('shows the theme pill as on when body.dark is set without an explicit ew_theme preference', async () => {
    // settings.tsx applies body.dark from prefers-color-scheme before the
    // user ever sets ew_theme explicitly — the pill should reflect that
    // actual state instead of defaulting to "off" and contradicting what's
    // on screen.
    document.body.classList.add('dark');
    const { root } = mount();
    roots.push(root);

    await wait(10);
    expect(document.getElementById('set-theme-pill')!.classList.contains('on')).toBe(true);
  });

  it('restores the last open page from localStorage on mount', async () => {
    localStorage.setItem('ew_active_page', 'stats');
    const { root } = mount();
    roots.push(root);

    await wait(10);
    expect(getActivePage()).toBe('stats');
  });

  it('removes listeners on unmount', () => {
    const { root } = mount();
    act(() => {
      root.unmount();
    });

    const sidebar = document.getElementById('sidebar')!;
    act(() => {
      document
        .getElementById('hamburger')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(sidebar.classList.contains('open')).toBe(false);
  });
});
