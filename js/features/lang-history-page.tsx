// Vymova — js/features/lang-history-page.tsx
// "Історія мови" page: origin story + interesting facts about the language
// currently being learned, from data/lang-history.ts. Static content (no
// AI/network dependency) — languages without a hand-written entry yet show
// a "coming soon" placeholder.
import { createPortal } from 'react-dom';
import type { ReactElement } from 'react';
import { LANG_HISTORY } from '../../data/lang-history.ts';
import { getLang, t } from './i18n.ts';
import { getLearnLang } from './lang-pair-select.tsx';
import { LANG_META } from './profile-page.tsx';
import { flagUrl } from '../core/flags.ts';
import { useStateVersion } from '../../src/store.ts';

export function LangHistoryPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('lang-history-content');
  if (!target) return null;

  const lang = getLearnLang();
  const entry = LANG_HISTORY[lang];
  const meta = LANG_META[lang];
  const useEn = getLang() === 'en';
  const flag = meta ? flagUrl(meta.country) : null;

  return createPortal(
    <div className="langhist-panel">
      <div className="langhist-header">
        {flag && <img className="langhist-flag" src={flag} alt="" />}
        <div className="langhist-name">{meta?.name ?? lang}</div>
      </div>
      {entry ? (
        <>
          <div className="langhist-intro">
            {useEn && entry.introEn ? entry.introEn : entry.intro}
          </div>
          <ul className="langhist-facts">
            {(useEn && entry.factsEn ? entry.factsEn : entry.facts).map((fact, i) => (
              <li key={i} className="langhist-fact">
                {fact}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="langhist-empty">{t('langHistory.notAvailable')}</div>
      )}
    </div>,
    target,
  );
}

import { bindOverlayDismiss } from './overlay-utils.ts';
bindOverlayDismiss('lang-history-overlay', 'lang-history-close');
