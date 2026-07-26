// Vymova — js/features/header-left.tsx
// full-react-migration-roadmap.md Phase 3 (safe half — the header's
// `.controls` <select> trio originally stayed static: an audit found several
// pre-mount reads of them via card-engine.ts's boot-time render() and
// app-root.tsx's own static import graph that would silently misbehave if
// those elements didn't exist until React's first commit — the same class
// of boot-order hazard already documented for #card. sel-tag/sel-range were
// converted to JSX in card-shell-migration-roadmap.md's Phase 3; sel-mode
// was later replaced entirely by src/mode-store.ts (no DOM element left at
// all — see the roadmap's "sel-mode" exception). `.header-left` has no such
// dependency, so it was safe to convert from the start).
//
// title-sw-toggle/title-hp-toggle are wired by FandomThemeRowsController's
// useEffect (fandom-theme-rows.tsx), profile-btn by ProfileSwitcher's
// useEffect (profile-switcher.tsx) — both strictly post-mount, unaffected by
// this move. #cidx-mount/#cknown-mount's separate <Portal> wrappers in
// app-root.tsx are removed — nothing else referenced those wrapper ids (no
// CSS, no other .ts/.tsx file), so CardIdx/CardKnownCount now render
// directly as children here instead.
import type { ReactElement } from 'react';
import { CardIdx, CardKnownCount } from './card/card-progress.tsx';
import { useLangVersion } from '../../src/store.ts';
import { t } from './i18n.ts';

export function HeaderLeft(): ReactElement {
  useLangVersion();
  return (
    <>
      <div className="title-row flex items-center gap-2">
        <div className="title font-['DM_Serif_Display',serif] text-[1.3rem] leading-[1.2] text-text">
          Vymova
        </div>
        <button
          id="title-sw-toggle"
          className="title-sw-toggle shrink-0 cursor-pointer rounded-[8px] border-[1.5px] border-border bg-transparent px-[7px] py-1 text-[0.85rem] leading-none text-text3 opacity-[0.55] transition-all duration-150 hover:border-accent hover:text-text hover:opacity-100 focus-visible:border-accent focus-visible:text-text focus-visible:opacity-100 focus-visible:outline-none"
          title="Зоряні Війни — швидке перемикання теми"
        >
          ⚔️
        </button>
        <button
          id="title-hp-toggle"
          className="title-hp-toggle shrink-0 cursor-pointer rounded-[8px] border-[1.5px] border-border bg-transparent px-[7px] py-1 text-[0.85rem] leading-none text-text3 opacity-[0.55] transition-all duration-150 hover:border-accent hover:text-text hover:opacity-100 focus-visible:border-accent focus-visible:text-text focus-visible:opacity-100 focus-visible:outline-none"
          title="Гаррі Поттер — швидке перемикання теми"
        >
          🦁
        </button>
      </div>
      <div className="subtitle mt-0.5 text-xs text-text3">
        <span data-i18n="cards.cardLabel">{t('cards.cardLabel')}</span> <CardIdx /> ·{' '}
        <span data-i18n="cards.learnedLabel">{t('cards.learnedLabel')}</span>: <CardKnownCount />
      </div>
      <button
        id="profile-btn"
        className="profile-btn hover:text-[var(--profile-hover-color)]"
        style={{ display: 'none' }}
      >
        🧑 <span>Гравець 1</span> ▾
      </button>
    </>
  );
}
