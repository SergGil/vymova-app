// Vymova — js/features/card-meta.tsx
// Бейджі картки: #wnum, known-badge/#btn-unmark, #wcefr, #wcategory, #wlang.
// Частина item 28a (Фаза 4) — заміна статичного блоку .card-meta з render().
import { useAppState } from '../../src/store.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { getCategoriesForWord } from '../../data/categories.js';
import { categoryName } from './i18n.ts';
import { getFrontLang, getResolvedMode, getMode, getActiveTargetLang, langConfig } from './mode-utils.ts';
import { saveKnown } from '../core/storage.ts';
import { state as appState } from '../../src/state.ts';
import { render } from '../core/card-engine.ts';

function _activeKnownAndSave(): { known: Set<string>; save: () => void } {
  const lang = getActiveTargetLang(getMode());
  if (lang) { const cfg = langConfig(lang); return { known: cfg.known(), save: () => cfg.saveKnown(cfg.known()) }; }
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

