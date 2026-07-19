// Vymova — js/features/sidebar-nav.tsx
// full-react-migration-roadmap.md, Phase 1: the sidebar's logo, nav-link
// list, and language switcher — previously hand-authored <a>/<button>
// markup in index.html that sidebar.tsx's SidebarInit only reached into via
// getElementById (the NAV_LINKS loop) — now rendered directly as JSX,
// portaled into the same container elements. href/onClick wiring and
// active-link highlighting (formerly _setSidebarActive's classList loop)
// move here as real props/derived state; sidebar.tsx keeps everything that
// isn't nav-link markup (hamburger, escape, theme-pill, page restore).
import { createPortal } from 'react-dom';
import type { MouseEvent, ReactElement, ReactNode } from 'react';
import { AI_TUTOR_ENABLED } from '../config.ts';
import { useActivePage } from '../../src/nav-store.tsx';
import { useLangVersion } from '../../src/store.ts';
import { t } from './i18n.ts';
import { openPage, closePage, closeSidebar } from './sidebar.tsx';
import { flagUrl } from '../core/flags.ts';

function Portal({ id, children }: { id: string; children: ReactNode }): ReactElement | null {
  const el = document.getElementById(id);
  return el ? createPortal(children, el) : null;
}

// Base path for hrefs ('' locally, '/vymova-app' on GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

// Prevents default navigation for plain left-clicks (openPage() handles it)
// but allows Ctrl/Cmd/Shift/middle-click to fall through to native anchor
// navigation (e.g. open in a new tab).
function navClick(action: () => void) {
  return (e: MouseEvent) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    action();
  };
}

function goHome(): void {
  closePage();
  if (window.innerWidth <= 900) closeSidebar();
}

type NavItem = {
  id: string;
  page: string;
  route: string;
  icon: string;
  labelKey: string;
  requiresAiTutor?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'sb-stats', page: 'stats', route: '/stats', icon: '📊', labelKey: 'nav.stats' },
  {
    id: 'sb-achievements',
    page: 'ach',
    route: '/achievements',
    icon: '🏆',
    labelKey: 'nav.achievements',
  },
  { id: 'sb-modes', page: 'modes', route: '/modes', icon: '🎮', labelKey: 'nav.modes' },
  {
    id: 'sb-learning-path',
    page: 'learning-path',
    route: '/learning-path',
    icon: '🎯',
    labelKey: 'nav.learningPath',
  },
  { id: 'sb-grammar', page: 'grammar', route: '/grammar', icon: '📖', labelKey: 'nav.grammar' },
  { id: 'sb-idioms', page: 'idioms', route: '/idioms', icon: '💬', labelKey: 'nav.idioms' },
  {
    id: 'sb-translate',
    page: 'translate',
    route: '/translate',
    icon: '🌐',
    labelKey: 'nav.translate',
    requiresAiTutor: true,
  },
  {
    id: 'sb-lang-history',
    page: 'lang-history',
    route: '/lang-history',
    icon: '📜',
    labelKey: 'nav.langHistory',
  },
];

const AI_GROUP_ITEMS: NavItem[] = [
  { id: 'sb-ai-tutor', page: 'ai-tutor', route: '/ai-tutor', icon: '🤖', labelKey: 'nav.aiTutor' },
  {
    id: 'sb-voice-roleplay',
    page: 'voice-roleplay',
    route: '/voice-roleplay',
    icon: '🎤',
    labelKey: 'nav.voiceRoleplay',
  },
];

const VIDEO_GROUP_ITEMS: NavItem[] = [
  {
    id: 'sb-youtube-player',
    page: 'youtube-player',
    route: '/youtube',
    icon: '📺',
    labelKey: 'nav.ytPlayer',
  },
  {
    id: 'sb-video-player',
    page: 'video-player',
    route: '/video-player',
    icon: '🎬',
    labelKey: 'nav.videoPlayer',
  },
];

const TAIL_ITEMS: NavItem[] = [
  { id: 'sb-duel', page: 'duel', route: '/duel', icon: '⚔️', labelKey: 'nav.duel' },
  { id: 'sb-profile', page: 'profile', route: '/profile', icon: '👤', labelKey: 'nav.profile' },
  {
    id: 'sb-settings',
    page: 'settings',
    route: '/settings',
    icon: '⚙️',
    labelKey: 'nav.settings',
  },
];

// Every page a sidebar link can activate — mirrors the old
// _setSidebarActive's PAGE_TO_SIDEBAR keys. Anything outside this set (or
// null) highlights "sb-cards", matching that function's `?? 'sb-cards'`
// fallback.
const NAV_PAGES = new Set([
  ...NAV_ITEMS.map((i) => i.page),
  ...AI_GROUP_ITEMS.map((i) => i.page),
  ...VIDEO_GROUP_ITEMS.map((i) => i.page),
  ...TAIL_ITEMS.map((i) => i.page),
]);

// sidebar-nav-flyout.tsx reparents .sb-flyout panels to <body> to escape
// .sidebar's stacking context, which detaches them from the React root's DOM
// subtree — React's synthetic onClick (delegated at the root container)
// never fires for clicks inside a detached flyout, so that controller falls
// back to native <a> navigation and needs this id→page map to call
// openPage() itself instead of following href (which would full-reload the
// app). Exported so that map can't drift from the real nav item list.
export const FLYOUT_ID_TO_PAGE: Record<string, string> = Object.fromEntries(
  [...AI_GROUP_ITEMS, ...VIDEO_GROUP_ITEMS].map((item) => [item.id, item.page]),
);

function NavLink({
  item,
  activePage,
}: {
  item: NavItem;
  activePage: string | null;
}): ReactElement {
  const isActive = activePage === item.page;
  return (
    <a
      className={isActive ? 'sb-btn sb-active' : 'sb-btn'}
      id={item.id}
      href={BASE + item.route}
      onClick={navClick(() => openPage(item.page))}
    >
      <span className="sb-icon">{item.icon}</span>
      <span className="sb-label" data-i18n={item.labelKey}>
        {t(item.labelKey)}
      </span>
    </a>
  );
}

function NavGroup({
  groupId,
  triggerId,
  flyoutId,
  icon,
  labelKey,
  items,
  activePage,
}: {
  groupId: string;
  triggerId: string;
  flyoutId: string;
  icon: string;
  labelKey: string;
  items: NavItem[];
  activePage: string | null;
}): ReactElement {
  return (
    <div className="sb-group" id={groupId}>
      <button type="button" className="sb-btn sb-group-trigger" id={triggerId}>
        <span className="sb-icon">{icon}</span>
        <span className="sb-label" data-i18n={labelKey}>
          {t(labelKey)}
        </span>
        <span className="sb-caret">›</span>
      </button>
      <div className="sb-flyout" id={flyoutId}>
        {items.map((item) => (
          <NavLink key={item.id} item={item} activePage={activePage} />
        ))}
      </div>
    </div>
  );
}

const LANG_OPTS: { code: string; flag: string; title: string }[] = [
  { code: 'ua', flag: 'ua', title: 'Українська' },
  { code: 'en', flag: 'gb', title: 'English' },
  { code: 'es', flag: 'es', title: 'Español' },
  { code: 'fr', flag: 'fr', title: 'Français' },
  { code: 'it', flag: 'it', title: 'Italiano' },
  { code: 'pt', flag: 'pt', title: 'Português' },
  { code: 'de', flag: 'de', title: 'Deutsch' },
];

export function SidebarNav(): ReactElement {
  const activePage = useActivePage();
  useLangVersion();
  const cardsActive = activePage === null || !NAV_PAGES.has(activePage);

  return (
    <>
      <Portal id="sidebar-logo-mount">
        <div
          className="sidebar-logo"
          id="sb-home"
          title="На головну — картки"
          style={{ cursor: 'pointer' }}
          onClick={goHome}
        >
          <span className="sidebar-logo-text">Vymova</span>
        </div>
      </Portal>
      <Portal id="sidebar-nav-mount">
        <a
          className={cardsActive ? 'sb-btn sb-active' : 'sb-btn'}
          id="sb-cards"
          href={BASE + '/'}
          onClick={navClick(goHome)}
        >
          <span className="sb-icon">🃏</span>
          <span className="sb-label" data-i18n="nav.cards">
            {t('nav.cards')}
          </span>
        </a>
        {NAV_ITEMS.filter((item) => !item.requiresAiTutor || AI_TUTOR_ENABLED).map((item) => (
          <NavLink key={item.id} item={item} activePage={activePage} />
        ))}
        {AI_TUTOR_ENABLED && (
          <NavGroup
            groupId="sb-group-ai"
            triggerId="sb-group-ai-trigger"
            flyoutId="sb-group-ai-flyout"
            icon="🤖"
            labelKey="nav.aiGroup"
            items={AI_GROUP_ITEMS}
            activePage={activePage}
          />
        )}
        <NavGroup
          groupId="sb-group-video"
          triggerId="sb-group-video-trigger"
          flyoutId="sb-group-video-flyout"
          icon="🎬"
          labelKey="nav.videoGroup"
          items={VIDEO_GROUP_ITEMS}
          activePage={activePage}
        />
        {TAIL_ITEMS.map((item) => (
          <NavLink key={item.id} item={item} activePage={activePage} />
        ))}
      </Portal>
      <Portal id="sb-lang-section-mount">
        <div
          className="sb-lang-label !mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.07em] text-text3"
          data-i18n="nav.language"
        >
          {t('nav.language')}
        </div>
        <div
          className="lang-toggle flex w-full shrink-0 items-stretch overflow-hidden rounded-[8px] border-[1.5px] border-border"
          title="Мова меню / Menu language / Idioma del menú"
        >
          {LANG_OPTS.map((opt) => (
            <button
              key={opt.code}
              className="lang-opt inline-flex flex-1 cursor-pointer items-center gap-1 border-none bg-transparent !px-1 !py-[7px] text-center text-[0.75rem] font-bold tracking-[0.03em] leading-none text-text3 opacity-[0.55] transition-all duration-150 hover:opacity-[0.85] hover:text-text [&.lang-active]:bg-[rgba(45,90,61,0.12)] [&.lang-active]:font-extrabold [&.lang-active]:text-accent [&.lang-active]:opacity-100"
              data-lang={opt.code}
              title={opt.title}
            >
              <img
                src={flagUrl(opt.flag) ?? ''}
                alt={opt.code.toUpperCase()}
                width={13}
                height={13}
                className="h-[13px] w-[13px] shrink-0 rounded-full"
              />
            </button>
          ))}
        </div>
      </Portal>
    </>
  );
}
