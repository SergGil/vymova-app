// Vymova — js/features/sidebar/sidebar-nav.tsx
// full-react-migration-roadmap.md, Phase 1: the sidebar's logo, nav-link
// list, and language switcher — previously hand-authored <a>/<button>
// markup in index.html that sidebar.tsx's SidebarInit only reached into via
// getElementById (the NAV_LINKS loop) — now rendered directly as JSX,
// portaled into the same container elements. href/onClick wiring and
// active-link highlighting (formerly _setSidebarActive's classList loop)
// move here as real props/derived state; sidebar.tsx keeps everything that
// isn't nav-link markup (hamburger, escape, theme-pill, page restore).
import { createPortal } from 'react-dom';
import { useEffect, useState, type MouseEvent, type ReactElement, type ReactNode } from 'react';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { AI_TUTOR_ENABLED } from '../../config.ts';
import { useActivePage } from '../../../src/nav-store.tsx';
import { useLangVersion } from '../../../src/store.ts';
import { t } from '../i18n.ts';
import { openPage, closePage, closeSidebar } from './sidebar.tsx';
import { flagUrl } from '../../core/flags.ts';

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

// Nav-group flyouts (hover- or click-revealed submenus, e.g. "🎬 Відео
// навчання") are Menu (base-ui). Menu.Portal renders into document.body via
// a real React portal — unlike the old sidebar-nav-flyout.tsx, which used a
// raw document.body.appendChild() to reparent the already-mounted flyout
// DOM node itself, detaching it from the React root's own subtree and
// breaking the anchors' synthetic onClick (React delegates at the root
// container) along the way. A React portal keeps portaled children fully
// part of the same component tree/event system no matter where in the DOM
// they render, so every link below just uses its own normal onClick like
// every other nav link — no FLYOUT_ID_TO_PAGE lookup or manual click
// interception needed anymore.
const NARROW_SIDEBAR_PX = 900;

function useIsNarrowSidebar(): boolean {
  const [narrow, setNarrow] = useState(() => window.innerWidth <= NARROW_SIDEBAR_PX);
  useEffect(() => {
    function onResize(): void {
      setNarrow(window.innerWidth <= NARROW_SIDEBAR_PX);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return narrow;
}

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
      className={SB_BTN_BASE + (isActive ? SB_ACTIVE : '')}
      id={item.id}
      href={BASE + item.route}
      onClick={navClick(() => openPage(item.page))}
    >
      <span className="sb-icon w-[22px] shrink-0 text-center text-base">{item.icon}</span>
      <span className="sb-label flex-1" data-i18n={item.labelKey}>
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
  open,
  onOpenChange,
}: {
  groupId: string;
  triggerId: string;
  flyoutId: string;
  icon: string;
  labelKey: string;
  items: NavItem[];
  activePage: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}): ReactElement {
  const narrow = useIsNarrowSidebar();
  return (
    <MenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {/* .open stays a real class (not just Menu's own internal state) — the
          CSS ancestor variant driving .sb-caret's rotate ([.sb-group.open_&])
          still reads it directly, same as every fandom theme's own .sb-group
          overrides. React now drives it instead of the deleted
          sidebar-nav-flyout.tsx's classList.toggle(). */}
      <div className={'sb-group relative' + (open ? ' open' : '')} id={groupId}>
        <MenuPrimitive.Trigger
          className={SB_BTN_BASE + ' sb-group-trigger'}
          id={triggerId}
          openOnHover={!narrow}
          delay={0}
          closeDelay={150}
        >
          <span className="sb-icon w-[22px] shrink-0 text-center text-base">{icon}</span>
          <span className="sb-label flex-1" data-i18n={labelKey}>
            {t(labelKey)}
          </span>
          <span className="sb-caret text-xs text-text3 shrink-0 [@media(max-width:900px)]:[transition:transform_0.15s] [.sb-group.open_&]:[@media(max-width:900px)]:rotate-90">
            ›
          </span>
        </MenuPrimitive.Trigger>
        <MenuPrimitive.Portal>
          <MenuPrimitive.Positioner
            side={narrow ? 'bottom' : 'right'}
            align="start"
            sideOffset={narrow ? 2 : 4}
            className={'isolate z-[700]' + (narrow ? ' w-(--anchor-width)' : '')}
          >
            <MenuPrimitive.Popup
              className="sb-flyout flex min-w-[210px] flex-col gap-[3px] rounded-[10px] border bg-[var(--sb-flyout-bg)] border-[var(--sb-flyout-border)] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.28)] outline-none"
              id={flyoutId}
            >
              {items.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <MenuPrimitive.Item
                    key={item.id}
                    render={<a id={item.id} href={BASE + item.route} />}
                    className={SB_BTN_BASE + (isActive ? SB_ACTIVE : '')}
                    onClick={navClick(() => openPage(item.page))}
                  >
                    <span className="sb-icon w-[22px] shrink-0 text-center text-base">
                      {item.icon}
                    </span>
                    <span className="sb-label flex-1" data-i18n={item.labelKey}>
                      {t(item.labelKey)}
                    </span>
                  </MenuPrimitive.Item>
                );
              })}
            </MenuPrimitive.Popup>
          </MenuPrimitive.Positioner>
        </MenuPrimitive.Portal>
      </div>
    </MenuPrimitive.Root>
  );
}

// .sb-btn/.sb-group/.sb-group-trigger/.sb-flyout class-name tokens are kept
// literally in every className below alongside their new Tailwind utilities
// — every fandom theme's own CSS still targets them directly (see
// css/styles.css's comment above .sb-flyout), independent of which
// primitive renders the underlying element. .sb-active is NOT queried
// anywhere, so it's fully replaced by conditional Tailwind classes below
// instead.
const SB_BTN_BASE =
  'sb-btn flex items-center gap-2.5 w-full py-2.5 px-3 border-0 rounded-[10px] [font-family:inherit] text-[0.85rem] font-medium cursor-pointer text-left no-underline transition-all duration-150 bg-transparent text-[var(--text2)] hover:bg-[var(--sb-btn-hover-bg)] hover:text-[var(--sb-btn-hover-color)]';
const SB_ACTIVE = ' bg-[rgba(var(--accent-rgb),0.12)] text-[var(--accent)] font-semibold';

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
  // Lifted above both NavGroups (rather than each owning its own open
  // state) so opening one can close the other — matches the deleted
  // sidebar-nav-flyout.tsx's closeOtherFlyouts().
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  return (
    <>
      <Portal id="sidebar-logo-mount">
        <div
          className="sidebar-logo border-b-[var(--sidebar-logo-border)] flex items-center gap-2.5 px-[18px] pt-5 pb-4 [@media(max-width:900px)]:!pl-[60px]"
          id="sb-home"
          title="На головну — картки"
          style={{ cursor: 'pointer' }}
          onClick={goHome}
        >
          <span className="font-['Orbitron',monospace] text-base font-black text-[var(--accent)] tracking-[0.1em]">
            Vymova
          </span>
        </div>
      </Portal>
      <Portal id="sidebar-nav-mount">
        <a
          className={SB_BTN_BASE + (cardsActive ? SB_ACTIVE : '')}
          id="sb-cards"
          href={BASE + '/'}
          onClick={navClick(goHome)}
        >
          <span className="sb-icon w-[22px] shrink-0 text-center text-base">🃏</span>
          <span className="sb-label flex-1" data-i18n="nav.cards">
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
            open={openGroupId === 'sb-group-ai'}
            onOpenChange={(o) => setOpenGroupId(o ? 'sb-group-ai' : null)}
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
          open={openGroupId === 'sb-group-video'}
          onOpenChange={(o) => setOpenGroupId(o ? 'sb-group-video' : null)}
        />
        {TAIL_ITEMS.map((item) => (
          <NavLink key={item.id} item={item} activePage={activePage} />
        ))}
      </Portal>
      <Portal id="sb-lang-section-mount">
        <div
          className="sb-lang-label mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.07em] text-text3"
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
              className="lang-opt inline-flex flex-1 cursor-pointer items-center gap-1 border-none bg-transparent px-1 py-[7px] text-center text-[0.75rem] font-bold tracking-[0.03em] leading-none text-text3 opacity-[0.55] transition-all duration-150 hover:opacity-[0.85] hover:text-text [&.lang-active]:bg-[rgba(var(--accent-rgb),0.12)] [&.lang-active]:font-extrabold [&.lang-active]:text-accent [&.lang-active]:opacity-100"
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
