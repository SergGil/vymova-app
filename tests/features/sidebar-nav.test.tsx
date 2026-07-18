import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { dispatchClosePage, dispatchOpenPage, getActivePage } from '../../src/nav-store.tsx';
import { expectStructuralParity } from '../support/structural-parity.ts';

const configMock = vi.hoisted(() => ({
  AI_PROXY_URL: '',
  AI_TUTOR_ENABLED: false,
}));
vi.mock('../../js/config.ts', () => configMock);

import { SidebarNav } from '../../js/features/sidebar-nav.tsx';
import { flagUrl } from '../../js/core/flags.ts';

// The exact static markup sidebar-nav-mount/sidebar-logo-mount/
// sb-lang-section-mount replaced in index.html (Ukrainian is this app's
// default/fallback language — see js/features/i18n.ts's storedLang()).
// hrefs reflect the actual post-hydration value the original NAV_LINKS loop
// set at runtime (base + route), not the pre-hydration static "#" seen in
// index.html's raw source.
const ORIGINAL_LOGO_HTML = `
  <div class="sidebar-logo" id="sb-home" title="На головну — картки" style="cursor: pointer">
    <span class="sidebar-logo-text">Vymova</span>
  </div>
`;

// The AI-tutor-gated nav items (sb-translate, sb-group-ai) are deliberately
// excluded here — full-react-migration-roadmap.md Phase 1 switched their
// visibility from a hidden-by-default + runtime style.display reveal to a
// real conditional render, so they're covered by a separate, explicit
// AI_TUTOR_ENABLED=true test below instead of this base parity fixture.
const ORIGINAL_NAV_HTML = `
  <a class="sb-btn sb-active" id="sb-cards" href="/"
    ><span class="sb-icon">🃏</span
    ><span class="sb-label" data-i18n="nav.cards">Картки</span></a
  >
  <a class="sb-btn" id="sb-stats" href="/stats"
    ><span class="sb-icon">📊</span
    ><span class="sb-label" data-i18n="nav.stats">Статистика</span></a
  >
  <a class="sb-btn" id="sb-achievements" href="/achievements"
    ><span class="sb-icon">🏆</span
    ><span class="sb-label" data-i18n="nav.achievements">Досягнення</span></a
  >
  <a class="sb-btn" id="sb-modes" href="/modes"
    ><span class="sb-icon">🎮</span
    ><span class="sb-label" data-i18n="nav.modes">Режими</span></a
  >
  <a class="sb-btn" id="sb-learning-path" href="/learning-path"
    ><span class="sb-icon">🎯</span
    ><span class="sb-label" data-i18n="nav.learningPath">Шлях навчання</span></a
  >
  <a class="sb-btn" id="sb-grammar" href="/grammar"
    ><span class="sb-icon">📖</span
    ><span class="sb-label" data-i18n="nav.grammar">Граматика</span></a
  >
  <a class="sb-btn" id="sb-idioms" href="/idioms"
    ><span class="sb-icon">💬</span
    ><span class="sb-label" data-i18n="nav.idioms">Ідіоми</span></a
  >
  <a class="sb-btn" id="sb-lang-history" href="/lang-history"
    ><span class="sb-icon">📜</span
    ><span class="sb-label" data-i18n="nav.langHistory">Історія мови</span></a
  >
  <div class="sb-group" id="sb-group-video">
    <button type="button" class="sb-btn sb-group-trigger" id="sb-group-video-trigger">
      <span class="sb-icon">🎬</span
      ><span class="sb-label" data-i18n="nav.videoGroup">Відео навчання</span
      ><span class="sb-caret">›</span>
    </button>
    <div class="sb-flyout" id="sb-group-video-flyout">
      <a class="sb-btn" id="sb-youtube-player" href="/youtube"
        ><span class="sb-icon">📺</span
        ><span class="sb-label" data-i18n="nav.ytPlayer">YouTube</span></a
      >
      <a class="sb-btn" id="sb-video-player" href="/video-player"
        ><span class="sb-icon">🎬</span
        ><span class="sb-label" data-i18n="nav.videoPlayer">Відео</span></a
      >
    </div>
  </div>
  <a class="sb-btn" id="sb-duel" href="/duel"
    ><span class="sb-icon">⚔️</span
    ><span class="sb-label" data-i18n="nav.duel">Дуель</span></a
  >
  <a class="sb-btn" id="sb-profile" href="/profile"
    ><span class="sb-icon">👤</span
    ><span class="sb-label" data-i18n="nav.profile">Профіль</span></a
  >
  <a class="sb-btn" id="sb-settings" href="/settings"
    ><span class="sb-icon">⚙️</span
    ><span class="sb-label" data-i18n="nav.settings">Налаштування</span></a
  >
`;

// img src values are stripped before comparison (see stripImgSrc below) —
// flags now resolve through flagUrl()'s bundler-processed, base-aware URL
// (js/core/flags.ts) instead of the original hand-written relative path, so
// they're covered by the dedicated flagUrl() assertion in the test below
// instead of this structural fixture.
const ORIGINAL_LANG_SECTION_HTML = `
  <div class="sb-lang-label" data-i18n="nav.language">🌐 Мова</div>
  <div class="lang-toggle" title="Мова меню / Menu language / Idioma del menú">
    <button class="lang-opt" data-lang="ua" title="Українська">
      <img src="data/countries/ua.svg" alt="UA" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="en" title="English">
      <img src="data/countries/gb.svg" alt="EN" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="es" title="Español">
      <img src="data/countries/es.svg" alt="ES" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="fr" title="Français">
      <img src="data/countries/fr.svg" alt="FR" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="it" title="Italiano">
      <img src="data/countries/it.svg" alt="IT" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="pt" title="Português">
      <img src="data/countries/pt.svg" alt="PT" width="13" height="13" />
    </button>
    <button class="lang-opt" data-lang="de" title="Deutsch">
      <img src="data/countries/de.svg" alt="DE" width="13" height="13" />
    </button>
  </div>
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

  it('renders the logo, nav links, and language switcher structurally identical to the original static markup (AI-tutor gated items excluded)', () => {
    render(<SidebarNav />);
    expectStructuralParity(
      document.getElementById('sidebar-logo-mount')!.innerHTML,
      ORIGINAL_LOGO_HTML,
    );
    expectStructuralParity(
      document.getElementById('sidebar-nav-mount')!.innerHTML,
      ORIGINAL_NAV_HTML,
    );
    const stripImgSrc = (html: string) => html.replace(/\ssrc="[^"]*"/g, '');
    expectStructuralParity(
      stripImgSrc(document.getElementById('sb-lang-section-mount')!.innerHTML),
      stripImgSrc(ORIGINAL_LANG_SECTION_HTML),
    );
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
    expect(document.getElementById('sb-cards')!.classList.contains('sb-active')).toBe(true);
    expect(document.getElementById('sb-stats')!.classList.contains('sb-active')).toBe(false);
  });

  it('marks the matching link active and "sb-cards" inactive once a page opens', () => {
    render(<SidebarNav />);
    act(() => {
      dispatchOpenPage('stats');
    });
    expect(document.getElementById('sb-stats')!.classList.contains('sb-active')).toBe(true);
    expect(document.getElementById('sb-cards')!.classList.contains('sb-active')).toBe(false);
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

  it('renders 7 language-switcher buttons with the expected data-lang/flag/alt', () => {
    render(<SidebarNav />);
    const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('.lang-opt'));
    expect(btns.map((b) => b.dataset.lang)).toEqual(['ua', 'en', 'es', 'fr', 'it', 'pt', 'de']);
    const img = btns[1].querySelector('img')!;
    expect(img.getAttribute('src')).toBe(flagUrl('gb'));
    expect(img.getAttribute('alt')).toBe('EN');
  });
});
