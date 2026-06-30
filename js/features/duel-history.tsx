// Vymova — js/features/duel-history.tsx
// Історія останніх дуелей з пагінацією (#duel-history-list).
// Частина item 30 (Фаза 5).
import { useState } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { t } from './i18n.ts';
import { _getHistory } from './duel.ts';

const HIST_PAGE_SIZE = 10;

export function DuelHistory() {
  useStateVersion();
  const [page, setPage] = useState(0);
  const h = _getHistory();
  if (!h.length) {
    return (
      <div style={{ color: 'var(--text3)', fontSize: '.8rem', textAlign: 'center', padding: 8 }}>
        {t('duel.noHistory')}
      </div>
    );
  }
  const pages = Math.ceil(h.length / HIST_PAGE_SIZE);
  const curPage = Math.min(Math.max(page, 0), pages - 1);
  const start = curPage * HIST_PAGE_SIZE;
  const rows = h.slice(start, start + HIST_PAGE_SIZE);
  return (
    <>
      {rows.map((e, i) => {
        const icon = e.won ? '🏆' : e.myScore === e.oppScore ? '🤝' : '💀';
        const cat = e.category ? ` · ${e.category.split(' ')[0]}` : '';
        const langTag =
          e.knowLang && e.lang ? ` · ${e.knowLang.toUpperCase()}↔${e.lang.toUpperCase()}` : '';
        const color = e.won ? '#27ae60' : e.myScore === e.oppScore ? 'var(--text3)' : '#e74c3c';
        return (
          <div
            key={start + i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '6px 0',
              borderBottom: '1px solid var(--border)',
              fontSize: '.78rem',
            }}
          >
            <span style={{ color: 'var(--text2)' }}>
              {icon} vs <b>{e.oppName}</b>
              {cat}
              <span style={{ color: 'var(--text3)' }}>
                {langTag} · {e.date}
              </span>
            </span>
            <span style={{ fontWeight: 700, color }}>
              {e.myScore}:{e.oppScore}
            </span>
          </div>
        );
      })}
      {pages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            paddingTop: 8,
            fontSize: '.78rem',
            color: 'var(--text2)',
          }}
        >
          <button
            type="button"
            disabled={curPage === 0}
            onClick={() => setPage(curPage - 1)}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'inherit',
              padding: '2px 8px',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>
          <span>
            {curPage + 1} / {pages}
          </span>
          <button
            type="button"
            disabled={curPage >= pages - 1}
            onClick={() => setPage(curPage + 1)}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'inherit',
              padding: '2px 8px',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
