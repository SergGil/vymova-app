// Vymova — js/features/card-legend.tsx
// "?" help modal explaining every icon/section on the flashcard
// (badges, action buttons, similar/family words, etymology, collocations...).
import { useEffect, useState, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { t } from './i18n.ts';

const ITEMS: { icon: string; key: string }[] = [
  { icon: '#123', key: 'num' },
  { icon: '✓', key: 'known' },
  { icon: 'B2', key: 'cefr' },
  { icon: '🏷️', key: 'category' },
  { icon: 'EN', key: 'lang' },
  { icon: '🔊', key: 'speak' },
  { icon: '🎤', key: 'mic' },
  { icon: '📝', key: 'note' },
  { icon: '☆', key: 'bookmark' },
  { icon: '🔀', key: 'senses' },
  { icon: '🪄', key: 'etymology' },
  { icon: '🧩', key: 'similar' },
  { icon: '🌱', key: 'family' },
  { icon: '🔄', key: 'synonyms' },
  { icon: '🔗', key: 'collocations' },
];

export function CardLegendModal(): ReactElement | null {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Delegated on document: #btn-card-legend is rendered by CardMeta only
    // once the active word loads, so it may not exist yet on mount.
    // Capture phase (not bubble): the card's own flip-on-click handler is
    // bound directly on #card, so a bubble-phase document listener fires
    // only *after* the flip already ran — stopPropagation() there is too
    // late. Capture fires top-down, before #card's handler, so it can
    // actually intercept the click.
    const onOpen = (e: Event) => {
      if (!(e.target as HTMLElement).closest('#btn-card-legend')) return;
      e.stopPropagation();
      setOpen(true);
    };
    document.addEventListener('click', onOpen, true);
    return () => document.removeEventListener('click', onOpen, true);
  }, []);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        className="modal-inner"
        style={{
          background: 'var(--modal-bg,var(--card))',
          borderRadius: 16,
          padding: '22px 20px',
          maxWidth: 380,
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(0,0,0,.2)',
        }}
      >
        <div
          style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 4, color: 'var(--text)' }}
        >
          {t('cardLegend.title')}
        </div>
        <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginBottom: 14 }}>
          {t('cardLegend.desc')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ITEMS.map(({ icon, key }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span
                style={{
                  fontSize: '.85rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  minWidth: 28,
                  textAlign: 'center',
                  flexShrink: 0,
                }}
              >
                {icon}
              </span>
              <span style={{ fontSize: '.83rem', color: 'var(--text)', lineHeight: 1.35 }}>
                {t(`cardLegend.items.${key}`)}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setOpen(false)}
          style={{
            marginTop: 18,
            width: '100%',
            padding: 9,
            border: 'none',
            borderRadius: 8,
            background: 'var(--accent)',
            color: '#fff',
            fontSize: '.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {t('common.close')}
        </button>
      </div>
    </div>,
    document.body,
  );
}
