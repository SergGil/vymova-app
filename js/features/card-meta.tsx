// English Words App — js/features/card-meta.tsx
// Бейджі картки: #wnum, known-badge/#btn-unmark, #wcefr, #wcategory, #wlang.
// Частина item 28a (Фаза 4) — заміна статичного блоку .card-meta з render().
import { createRoot } from 'react-dom/client';
import { useAppState } from '../../src/store.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { getCategoriesForWord } from '../../data/categories.js';
import { categoryName } from './i18n.ts';
import { getMode, getFrontLang } from './mode-utils.ts';

function CardMeta() {
  const state = useAppState();
  const { deck, idx, cw } = state;
  if (!cw) return null;

  const wordIdx = (window as unknown as { _wordIdx?: Map<string, number> })._wordIdx;
  const realIdx = wordIdx?.has(cw[0]) ? wordIdx.get(cw[0])! : -1;
  const num = realIdx >= 0 ? realIdx + 1 : (deck.length ? (idx % deck.length) + 1 : 1);
  const frontLang = getFrontLang(getMode());
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
          onClick={(e) => e.stopPropagation()}
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

export function mountCardMeta(): void {
  const mountEl = document.getElementById('card-meta-mount');
  if (!mountEl) return;
  createRoot(mountEl).render(<CardMeta />);
}
