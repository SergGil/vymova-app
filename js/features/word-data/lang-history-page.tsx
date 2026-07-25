// Vymova — js/features/word-data/lang-history-page.tsx
// "Історія мови" page: origin story + interesting facts about the language
// currently being learned, from data/lang-history.ts. Static content (no
// AI/network dependency) — languages without a hand-written entry yet show
// a "coming soon" placeholder.
import { createPortal } from 'react-dom';
import { useEffect, useState, type ReactElement } from 'react';
import { ensureLangHistoryLoaded, getLangHistoryForLang } from './lang-history-loader.ts';
import { getLang, t } from '../i18n.ts';
import { getLearnLang } from '../lang-pair-select.tsx';
import { LANG_META } from '../profile/profile-page.tsx';
import { flagUrl } from '../../core/flags.ts';
import { useLangVersion } from '../../../src/store.ts';

export function LangHistoryPage(): ReactElement | null {
  // Only reactive dependencies are the learn-language switch (getLearnLang())
  // and t()'s UI-language string — the lang channel covers both, narrower
  // than the global bus's per-card/combo/duel-poll churn this static
  // content page has no actual dependency on.
  useLangVersion();
  const lang = getLearnLang();
  // History data loads lazily per language (js/features/lang-history-loader.ts)
  // — this page is itself only opened on demand, so the brief load gap here
  // reuses the same "not available" empty state already shown for a
  // language with no history entry at all.
  const [, setTick] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureLangHistoryLoaded(lang).then(() => {
      if (!cancelled) setTick((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const target = document.getElementById('lang-history-content');
  if (!target) return null;

  const entry = getLangHistoryForLang(lang);
  const meta = LANG_META[lang];
  const useEn = getLang() === 'en';
  const flag = meta ? flagUrl(meta.country) : null;

  return createPortal(
    <div className="langhist-panel flex flex-col gap-3.5">
      <div className="langhist-header flex items-center gap-2.5">
        {flag && <img className="langhist-flag h-8 w-8 rounded-full" src={flag} alt="" />}
        <div className="langhist-name text-[1.1rem] font-bold text-[var(--text)]">
          {meta?.name ?? lang}
        </div>
      </div>
      {entry ? (
        <>
          <div className="langhist-intro text-[.92rem] leading-[1.55] text-[var(--text)]">
            {useEn && entry.introEn ? entry.introEn : entry.intro}
          </div>
          <ul className="langhist-facts m-0 flex flex-col gap-2 pl-5">
            {(useEn && entry.factsEn ? entry.factsEn : entry.facts).map((fact, i) => (
              <li
                key={i}
                className="langhist-fact text-[.88rem] leading-[1.5] text-[var(--text2)]"
              >
                {fact}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="langhist-empty mt-6 text-center text-[.9rem] text-[var(--text3)]">
          {t('langHistory.notAvailable')}
        </div>
      )}
    </div>,
    target,
  );
}

import { bindOverlayDismiss } from '../overlay-utils.ts';
bindOverlayDismiss('lang-history-overlay', 'lang-history-close');
