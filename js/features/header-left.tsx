// Vymova — js/features/header-left.tsx
// full-react-migration-roadmap.md Phase 3 (safe half — the header's
// `.controls` <select> trio, sel-mode/sel-tag/sel-range, stays static; an
// audit found several pre-mount reads of them via card-engine.ts's boot-time
// render() and app-root.tsx's own static import graph that would silently
// misbehave if those elements didn't exist until React's first commit — the
// same class of boot-order hazard already documented for #card. `.header-left`
// has no such dependency, so it's safe to convert).
//
// title-sw-toggle/title-hp-toggle are wired by FandomThemeRowsController's
// useEffect (fandom-theme-rows.tsx), profile-btn by ProfileSwitcher's
// useEffect (profile-switcher.tsx) — both strictly post-mount, unaffected by
// this move. #cidx-mount/#cknown-mount's separate <Portal> wrappers in
// app-root.tsx are removed — nothing else referenced those wrapper ids (no
// CSS, no other .ts/.tsx file), so CardIdx/CardKnownCount now render
// directly as children here instead.
import type { ReactElement } from 'react';
import { CardIdx, CardKnownCount } from './card-progress.tsx';
import { useLangVersion } from '../../src/store.ts';
import { t } from './i18n.ts';

export function HeaderLeft(): ReactElement {
  useLangVersion();
  return (
    <>
      <div className="title-row">
        <div className="title">Vymova</div>
        <button
          id="title-sw-toggle"
          className="title-sw-toggle"
          title="Зоряні Війни — швидке перемикання теми"
        >
          ⚔️
        </button>
        <button
          id="title-hp-toggle"
          className="title-hp-toggle"
          title="Гаррі Поттер — швидке перемикання теми"
        >
          🦁
        </button>
      </div>
      <div className="subtitle">
        <span data-i18n="cards.cardLabel">{t('cards.cardLabel')}</span> <CardIdx /> ·{' '}
        <span data-i18n="cards.learnedLabel">{t('cards.learnedLabel')}</span>: <CardKnownCount />
      </div>
      <button id="profile-btn" className="profile-btn" style={{ display: 'none' }}>
        🧑 <span>Гравець 1</span> ▾
      </button>
    </>
  );
}
