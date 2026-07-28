import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render, within } from '@testing-library/react';
import { dispatchClosePage, dispatchOpenPage, getActivePage } from '../../src/nav-store.tsx';
import { expectStructuralParity } from '../support/structural-parity.ts';

const configMock = vi.hoisted(() => ({
  AI_PROXY_URL: '',
  AI_TUTOR_ENABLED: false,
}));
vi.mock('../../js/config.ts', () => configMock);

import { SidebarNav } from '../../js/features/sidebar/sidebar-nav.tsx';
import { flagUrl } from '../../js/core/flags.ts';

// The exact static markup sidebar-nav-mount/sidebar-logo-mount/
// sb-lang-section-mount replaced in index.html (Ukrainian is this app's
// default/fallback language — see js/features/i18n.ts's storedLang()).
// hrefs reflect the actual post-hydration value the original NAV_LINKS loop
// set at runtime (base + route), not the pre-hydration static "#" seen in
// index.html's raw source.
const ORIGINAL_LOGO_HTML = `
  <div class="sidebar-logo" id="sb-home" title="На головну — картки" style="cursor: pointer">
    <span class="font-['Orbitron',monospace] text-base font-black text-[var(--accent)] tracking-[0.1em]">Vymova</span>
  </div>
`;

// The AI-tutor-gated nav items (sb-translate, sb-group-ai) are deliberately
// excluded here — full-react-migration-roadmap.md Phase 1 switched their
// visibility from a hidden-by-default + runtime style.display reveal to a
// real conditional render, so they're covered by a separate, explicit
// AI_TUTOR_ENABLED=true test below instead of this base parity fixture.
const ORIGINAL_NAV_HTML = `
  <a class="sb-btn" id="sb-cards" href="/"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">🃏</span
    ><span class="sb-label flex-1" data-i18n="nav.cards">Картки</span></a
  >
  <a class="sb-btn" id="sb-stats" href="/stats"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">📊</span
    ><span class="sb-label flex-1" data-i18n="nav.stats">Статистика</span></a
  >
  <a class="sb-btn" id="sb-achievements" href="/achievements"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">🏆</span
    ><span class="sb-label flex-1" data-i18n="nav.achievements">Досягнення</span></a
  >
  <a class="sb-btn" id="sb-modes" href="/modes"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">🎮</span
    ><span class="sb-label flex-1" data-i18n="nav.modes">Режими</span></a
  >
  <a class="sb-btn" id="sb-learning-path" href="/learning-path"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">🎯</span
    ><span class="sb-label flex-1" data-i18n="nav.learningPath">Шлях навчання</span></a
  >
  <a class="sb-btn" id="sb-grammar" href="/grammar"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">📖</span
    ><span class="sb-label flex-1" data-i18n="nav.grammar">Граматика</span></a
  >
  <a class="sb-btn" id="sb-idioms" href="/idioms"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">💬</span
    ><span class="sb-label flex-1" data-i18n="nav.idioms">Ідіоми</span></a
  >
  <a class="sb-btn" id="sb-lang-history" href="/lang-history"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">📜</span
    ><span class="sb-label flex-1" data-i18n="nav.langHistory">Історія мови</span></a
  >
  <div class="sb-group relative" id="sb-group-video">
    <button type="button" class="sb-btn sb-group-trigger" id="sb-group-video-trigger">
      <span class="sb-icon w-[22px] shrink-0 text-center text-base">🎬</span
      ><span class="sb-label flex-1" data-i18n="nav.videoGroup">Відео навчання</span
      ><span class="sb-caret">›</span>
    </button>
    <div class="sb-flyout" id="sb-group-video-flyout">
      <a class="sb-btn" id="sb-youtube-player" href="/youtube"
        ><span class="sb-icon w-[22px] shrink-0 text-center text-base">📺</span
        ><span class="sb-label flex-1" data-i18n="nav.ytPlayer">YouTube</span></a
      >
      <a class="sb-btn" id="sb-video-player" href="/video-player"
        ><span class="sb-icon w-[22px] shrink-0 text-center text-base">🎬</span
        ><span class="sb-label flex-1" data-i18n="nav.videoPlayer">Відео</span></a
      >
    </div>
  </div>
  <a class="sb-btn" id="sb-duel" href="/duel"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">⚔️</span
    ><span class="sb-label flex-1" data-i18n="nav.duel">Дуель</span></a
  >
  <a class="sb-btn" id="sb-profile" href="/profile"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">👤</span
    ><span class="sb-label flex-1" data-i18n="nav.profile">Профіль</span></a
  >
  <a class="sb-btn" id="sb-settings" href="/settings"
    ><span class="sb-icon w-[22px] shrink-0 text-center text-base">⚙️</span
    ><span class="sb-label flex-1" data-i18n="nav.settings">Налаштування</span></a
  >
`;

function mountFixture(): void {
  document.body.innerHTML = `
    <div id="sidebar-logo-mount"></div>
    <div id="sidebar-nav-mount"></div>
    <div id="sb-lang-section-mount"></div>
    <div id="sidebar"></div>
    <div id="sidebar-overlay"></div>
  `;
}

describe('<SidebarNav/>', () => {
  beforeEach(() => {
    localStorage.clear();
    configMock.AI_TUTOR_ENABLED = false;
    mountFixture();
    dispatchClosePage();
  });

  it('renders the logo and nav links structurally identical to the original static markup (AI-tutor gated items excluded)', () => {
    render(<SidebarNav />);
    // Batch 4 also added .sidebar-logo's border-b-[var(--sidebar-logo-border)]
    // — same stripping approach as sidebar-nav-mount below. Tier 2c added
    // padding/display/align-items/gap + the max-900px padding-left override
    // (docs/full-css-tailwind-migration-roadmap.md), stripped the same way.
    const actualLogoHtml = document
      .getElementById('sidebar-logo-mount')!
      .innerHTML.replace(/ border-b-\[var\(--sidebar-logo-border\)\]/g, '')
      .replace(/ flex items-center gap-2\.5 px-\[18px\] pt-5 pb-4/g, '')
      .replace(/ \[@media\(max-width:900px\)\]:!pl-\[60px\]/g, '');
    expectStructuralParity(actualLogoHtml, ORIGINAL_LOGO_HTML);
    // docs/component-tailwind-conversion-roadmap.md Batch 4 added theme-
    // driven Tailwind classes (.sb-btn's base bg-transparent/text-.../
    // hover:.../.sb-flyout's bg-.../border-...) — a deliberate, later
    // change unrelated to the original static-markup-to-JSX port this test
    // guards. Stripped before comparing, same approach as
    // mode-card-grid.test.tsx. The base bg-transparent/text-[var(--text2)]
    // pair was added during the post-session masking-bug audit (audit
    // issue #1): .sb-btn's own unconditional bare background/color rule
    // was masking the hover: variant even during an actual hover, so the
    // base state had to move to Tailwind too, not just :hover.
    // docs/full-css-tailwind-migration-roadmap.md Batch 3 moved .sb-btn's/
    // .sb-flyout's own (non-theme) bare CSS properties to Tailwind too —
    // same stripping approach, one more layer on top of Batch 4's. .sb-btn's
    // active-state background/color/font-weight (previously the plain
    // .sb-active token, never queried by JS unlike .sb-btn/.sb-group/
    // .sb-flyout) also moved to conditional Tailwind classes, stripped here
    // the same way; verified separately below by the two "marks ... active"
    // tests instead of this structural fixture.
    const actualNavHtml = document
      .getElementById('sidebar-nav-mount')!
      .innerHTML.replace(
        / flex items-center gap-2\.5 w-full py-2\.5 px-3 border-0 rounded-\[10px\] \[font-family:inherit\] text-\[0\.85rem\] font-medium cursor-pointer text-left no-underline transition-all duration-150/g,
        '',
      )
      .replace(
        / bg-\[rgba\(var\(--accent-rgb\),0\.12\)\] text-\[var\(--accent\)\] font-semibold/g,
        '',
      )
      .replace(
        / fixed min-w-\[210px\] border rounded-\[10px\] p-1\.5 flex-col gap-\[3px\] shadow-\[0_10px_30px_rgba\(0,0,0,0\.28\)\] z-\[700\]/g,
        '',
      )
      .replace(/ bg-transparent text-\[var\(--text2\)\]/g, '')
      .replace(
        / (?:hover:bg|hover:text|bg|border)-\[var\(--sb-(?:btn-hover|flyout)-[a-z-]*\)\]/g,
        '',
      )
      // Tier 2c added .sb-caret's own text-xs/text-text3/shrink-0 plus its
      // max-900px transition + ancestor-scoped (.sb-group.open) rotate
      // (docs/full-css-tailwind-migration-roadmap.md), stripped the same
      // way. `&` reads back as `&amp;` via .innerHTML (HTML entity-
      // escaping on serialization, not a real DOM/CSS difference — the
      // element's actual class attribute value/classList still holds a
      // literal `&`, so Tailwind's own selector matching is unaffected).
      .replace(
        / text-xs text-text3 shrink-0 \[@media\(max-width:900px\)\]:\[transition:transform_0\.15s\] \[\.sb-group\.open_&amp;\]:\[@media\(max-width:900px\)\]:rotate-90/g,
        '',
      );
    expectStructuralParity(actualNavHtml, ORIGINAL_NAV_HTML);
  });

  it('does not render the AI-tutor-gated items when AI_TUTOR_ENABLED is false', () => {
    configMock.AI_TUTOR_ENABLED = false;
    render(<SidebarNav />);
    expect(document.getElementById('sb-translate')).toBeNull();
    expect(document.getElementById('sb-group-ai')).toBeNull();
  });

  it('renders the AI-tutor-gated items when AI_TUTOR_ENABLED is true', () => {
    configMock.AI_TUTOR_ENABLED = true;
    render(<SidebarNav />);
    expect(document.getElementById('sb-translate')).not.toBeNull();
    expect(document.getElementById('sb-group-ai')).not.toBeNull();
    expect(document.getElementById('sb-ai-tutor')).not.toBeNull();
    expect(document.getElementById('sb-voice-roleplay')).not.toBeNull();
  });

  it('marks "sb-cards" active when no page is open', () => {
    render(<SidebarNav />);
    expect(document.getElementById('sb-cards')!.classList.contains('font-semibold')).toBe(true);
    expect(document.getElementById('sb-stats')!.classList.contains('font-semibold')).toBe(false);
  });

  it('marks the matching link active and "sb-cards" inactive once a page opens', () => {
    render(<SidebarNav />);
    act(() => {
      dispatchOpenPage('stats');
    });
    expect(document.getElementById('sb-stats')!.classList.contains('font-semibold')).toBe(true);
    expect(document.getElementById('sb-cards')!.classList.contains('font-semibold')).toBe(false);
  });

  it('clicking a nav link opens the corresponding page', () => {
    render(<SidebarNav />);
    act(() => {
      document
        .getElementById('sb-achievements')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    expect(getActivePage()).toBe('ach');
  });

  it('clicking "sb-cards" while a page is open closes it', () => {
    render(<SidebarNav />);
    act(() => {
      dispatchOpenPage('stats');
    });
    act(() => {
      document
        .getElementById('sb-cards')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    expect(getActivePage()).toBeNull();
  });

  it('clicking the logo closes the currently open page', () => {
    render(<SidebarNav />);
    act(() => {
      dispatchOpenPage('stats');
    });
    act(() => {
      document.getElementById('sb-home')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActivePage()).toBeNull();
  });

  it('does not navigate on a modified click (Ctrl/Cmd/Shift/middle-click) — lets it fall through', () => {
    render(<SidebarNav />);
    const evt = new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true });
    act(() => {
      document.getElementById('sb-achievements')!.dispatchEvent(evt);
    });
    expect(getActivePage()).toBeNull();
    expect(evt.defaultPrevented).toBe(false);
  });

  it('renders 7 language-switcher buttons with the expected data-lang/flag/alt/title', () => {
    render(<SidebarNav />);
    const section = within(document.getElementById('sb-lang-section-mount')!);
    const label = section.getByText('🌐 Мова');
    expect(label).toHaveAttribute('data-i18n', 'nav.language');
    const toggle = label.nextElementSibling as HTMLElement;
    expect(toggle).toHaveAttribute('title', 'Мова меню / Menu language / Idioma del menú');
    const btns = within(toggle).getAllByRole('button');
    expect(btns.map((b) => b.dataset.lang)).toEqual(['ua', 'en', 'es', 'fr', 'it', 'pt', 'de']);
    expect(btns.map((b) => b.title)).toEqual([
      'Українська',
      'English',
      'Español',
      'Français',
      'Italiano',
      'Português',
      'Deutsch',
    ]);
    const img = btns[1].querySelector('img')!;
    expect(img.getAttribute('src')).toBe(flagUrl('gb'));
    expect(img.getAttribute('alt')).toBe('EN');
  });
});
