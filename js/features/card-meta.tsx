// Vymova — js/features/card-meta.tsx
// Бейджі картки: #wnum, known-badge/#btn-unmark, #wcefr, #wcategory, #wlang.
// Частина item 28a (Фаза 4) — заміна статичного блоку .card-meta з render().
import { useDeckState } from '../../src/deck-store.ts';
import { getWordIndex } from '../core/word-index.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { getCategoriesForWord } from '../../data/categories.js';
import { categoryName } from './i18n.ts';
import {
  getFrontLang,
  getResolvedMode,
  getMode,
  getActiveTargetLang,
  langConfig,
} from './mode-utils.ts';
import { saveKnown } from '../core/storage.ts';
import { unmarkKnown, getKnownSnapshot, type KnownLang } from '../../src/known-words-store.ts';
import { render } from '../core/card-engine.ts';
import { t } from './i18n.ts';
import { flagUrl } from '../core/flags.ts';
import { FLAG_CODE, type LangCode } from './lang-pair-select.tsx';

function _flagCode(v: string): LangCode | null {
  const l = v.toLowerCase();
  return l in FLAG_CODE ? (l as LangCode) : null;
}

function _unmarkActiveKnownAndSave(word: string): void {
  const lang: KnownLang = getActiveTargetLang(getMode()) ?? 'en';
  unmarkKnown(lang, word);
  if (lang === 'en') saveKnown(getKnownSnapshot('en'));
  else langConfig(lang).saveKnown(getKnownSnapshot(lang));
}

export function CardMeta() {
  const { deck, idx, cw } = useDeckState();
  const wordIdx = getWordIndex();
  if (!cw) return null;

  const realIdx = wordIdx?.has(cw[0]) ? wordIdx.get(cw[0])! : -1;
  const num = realIdx >= 0 ? realIdx + 1 : deck.length ? (idx % deck.length) + 1 : 1;
  const frontLang = getFrontLang(getResolvedMode());
  const frontFlagUrl = (() => {
    const code = _flagCode(frontLang);
    return code ? flagUrl(FLAG_CODE[code]) : null;
  })();
  const level = getCefrLevel(cw[0]);
  const cats = getCategoriesForWord(cw[0]);

  return (
    <div className="card-meta">
      <span className="card-num" id="wnum">
        {'#' + num}
      </span>
      <span className="known-badge">
        <span>✓ Знаю</span>{' '}
        <button
          className="unmark-btn"
          id="btn-unmark"
          title="Прибрати з вивчених"
          onClick={(e) => {
            e.stopPropagation();
            _unmarkActiveKnownAndSave(cw[0]);
            render();
          }}
        >
          ✕
        </button>
      </span>
      <span className={'cefr-badge cefr-' + level} id="wcefr">
        {level}
      </span>
      {cats[0] && (
        <span className="category-badge" id="wcategory" title={cats.map(categoryName).join(', ')}>
          {categoryName(cats[0])}
        </span>
      )}
      <span className="card-tag" id="wlang">
        {frontFlagUrl ? (
          <img src={frontFlagUrl} alt={frontLang} width={14} height={14} />
        ) : (
          frontLang
        )}
      </span>
      <button className="card-legend-btn" id="btn-card-legend" title={t('cardLegend.btnTitle')}>
        ?
      </button>
    </div>
  );
}
