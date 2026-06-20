// English Words App — js/features/card-meta.tsx
// Бейджі картки: #wnum, known-badge/#btn-unmark, #wcefr, #wcategory, #wlang.
// Частина item 28a (Фаза 4) — заміна статичного блоку .card-meta з render().
import { useAppState } from '../../src/store.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { getCategoriesForWord } from '../../data/categories.js';
import { categoryName } from './i18n.ts';
import {
  getFrontLang, getResolvedMode, getMode,
  ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES,
  PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES,
} from './mode-utils.ts';
import {
  saveKnown, saveKnownEs, saveKnownFr, saveKnownIt, saveKnownPt, saveKnownDe,
  saveKnownHe, saveKnownAr, saveKnownPl, saveKnownZh, saveKnownEl, saveKnownJa,
  saveKnownTr, saveKnownNl,
} from '../core/storage.ts';
import { state as appState } from '../../src/state.ts';
import { render } from '../core/card-engine.ts';

function _activeKnownAndSave(): { known: Set<string>; save: () => void } {
  const mode = getMode();
  if (ES_MODES.has(mode)) return { known: appState.knownEs, save: () => saveKnownEs(appState.knownEs) };
  if (FR_MODES.has(mode)) return { known: appState.knownFr, save: () => saveKnownFr(appState.knownFr) };
  if (IT_MODES.has(mode)) return { known: appState.knownIt, save: () => saveKnownIt(appState.knownIt) };
  if (PT_MODES.has(mode)) return { known: appState.knownPt, save: () => saveKnownPt(appState.knownPt) };
  if (DE_MODES.has(mode)) return { known: appState.knownDe, save: () => saveKnownDe(appState.knownDe) };
  if (HE_MODES.has(mode)) return { known: appState.knownHe, save: () => saveKnownHe(appState.knownHe) };
  if (AR_MODES.has(mode)) return { known: appState.knownAr, save: () => saveKnownAr(appState.knownAr) };
  if (PL_MODES.has(mode)) return { known: appState.knownPl, save: () => saveKnownPl(appState.knownPl) };
  if (ZH_MODES.has(mode)) return { known: appState.knownZh, save: () => saveKnownZh(appState.knownZh) };
  if (EL_MODES.has(mode)) return { known: appState.knownEl, save: () => saveKnownEl(appState.knownEl) };
  if (JA_MODES.has(mode)) return { known: appState.knownJa, save: () => saveKnownJa(appState.knownJa) };
  if (TR_MODES.has(mode)) return { known: appState.knownTr, save: () => saveKnownTr(appState.knownTr) };
  if (NL_MODES.has(mode)) return { known: appState.knownNl, save: () => saveKnownNl(appState.knownNl) };
  return { known: appState.known, save: () => saveKnown(appState.known) };
}

export function CardMeta() {
  const state = useAppState();
  const { deck, idx, cw, _wordIdx: wordIdx } = state;
  if (!cw) return null;

  const realIdx = wordIdx?.has(cw[0]) ? wordIdx.get(cw[0])! : -1;
  const num = realIdx >= 0 ? realIdx + 1 : (deck.length ? (idx % deck.length) + 1 : 1);
  const frontLang = getFrontLang(getResolvedMode());
  const level = getCefrLevel(cw[0]);
  const cats = getCategoriesForWord(cw[0]);

  return (
    <div className="card-meta">
      <span className="card-num" id="wnum">{'#' + num}</span>
      <span className="known-badge">
        <span>✓ Знаю</span>{' '}
        <button
          className="unmark-btn"
          id="btn-unmark"
          title="Прибрати з вивчених"
          onClick={(e) => {
            e.stopPropagation();
            const { known, save } = _activeKnownAndSave();
            known.delete(cw[0]);
            save();
            render();
          }}
        >✕</button>
      </span>
      <span className={'cefr-badge cefr-' + level} id="wcefr">{level}</span>
      {cats[0] && (
        <span className="category-badge" id="wcategory" title={cats.map(categoryName).join(', ')}>
          {categoryName(cats[0])}
        </span>
      )}
      <span className="card-tag" id="wlang">{frontLang}</span>
    </div>
  );
}

