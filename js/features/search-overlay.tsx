// Vymova — js/features/search-overlay.tsx
// 🔍 Dictionary search overlay: find any EN or UA word, jump to card or open detail.
// Opened via #btn-search or Ctrl/Cmd+F.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { useStateVersion } from '../../src/store.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { openWordDetail } from './word-detail.tsx';
import { t } from './i18n.ts';
import { render, setIdx } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

const MAX_RESULTS = 40;

function ipa(w: WordEntry): string {
  return decodeIpa(w[4] ?? '');
}

function inDeck(word: string): boolean {
  return getDeckSnapshot().some((w) => w[0] === word);
}

function search(q: string): WordEntry[] {
  const en: WordEntry[] = [],
    ua: WordEntry[] = [],
    enContains: WordEntry[] = [],
    uaContains: WordEntry[] = [];
  for (const w of W as unknown as WordEntry[]) {
    const enLow = w[0].toLowerCase(),
      uaLow = w[1].toLowerCase();
    if (enLow.startsWith(q)) {
      en.push(w);
      continue;
    }
    if (uaLow.startsWith(q)) {
      ua.push(w);
      continue;
    }
    if (enLow.includes(q)) {
      enContains.push(w);
      continue;
    }
    if (uaLow.includes(q)) {
      uaContains.push(w);
    }
  }
  return [...en, ...ua, ...enContains, ...uaContains].slice(0, MAX_RESULTS);
}

function jumpTo(w: WordEntry, close: () => void): void {
  close();
  // If word is in current deck — navigate to it
  const di = getDeckSnapshot().findIndex((d) => d[0] === w[0]);
  if (di !== -1) {
    setIdx(di);
    render();
    return;
  }
  // Word not in deck — switch to all-words range, find it there
  const selRange = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (selRange && selRange.value !== '0') {
    selRange.value = '0';
    selRange.dispatchEvent(new Event('change'));
    setTimeout(() => {
      const di2 = getDeckSnapshot().findIndex((d) => d[0] === w[0]);
      if (di2 !== -1) {
        setIdx(di2);
        render();
      }
    }, 80);
  }
}

export function SearchOverlay(): ReactElement | null {
  useStateVersion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<WordEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function close(): void {
    setOpen(false);
  }

  useEffect(() => {
    const openBtn = document.getElementById('btn-search');
    const onOpenClick = () => {
      setQuery('');
      setHits([]);
      setOpen(true);
    };
    openBtn?.addEventListener('click', onOpenClick);
    return () => openBtn?.removeEventListener('click', onOpenClick);
  }, []);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        const tag = (document.activeElement as HTMLElement)?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
          e.preventDefault();
          setQuery('');
          setHits([]);
          setOpen(true);
        } else if (open) {
          e.preventDefault();
        }
      }
      if (e.key === 'Escape' && open) close();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [open]);

  useEffect(() => {
    if (open)
      setTimeout(() => {
        try {
          inputRef.current?.focus();
        } catch (_e) {}
      }, 60);
  }, [open]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const q = query.trim().toLowerCase();
    if (!q) {
      setHits([]);
      return;
    }
    timerRef.current = setTimeout(() => setHits(search(q)), 120);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  if (!open) return null;

  return (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.6)',
        zIndex: 19000,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '48px 16px 16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        style={{
          background: 'var(--bg)',
          borderRadius: 18,
          width: '100%',
          maxWidth: 520,
          boxShadow: '0 8px 40px rgba(0,0,0,.35)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 16px',
            borderBottom: '1.5px solid var(--border)',
          }}
        >
          <span style={{ fontSize: '1.2rem', color: 'var(--text3)' }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Пошук по словнику EN або UA..."
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') close();
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                resultsRef.current?.querySelector<HTMLElement>('.search-row')?.focus();
              }
              if (e.key === 'Enter') {
                resultsRef.current?.querySelector<HTMLElement>('.search-row')?.click();
              }
            }}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1rem',
              fontFamily: 'inherit',
              color: 'var(--text)',
            }}
          />
          <button
            onClick={close}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              color: 'var(--text3)',
              padding: 4,
            }}
          >
            ✕
          </button>
        </div>
        <div
          ref={resultsRef}
          style={{ maxHeight: '60vh', overflowY: 'auto', padding: '6px 0' }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') close();
            const rows = [
              ...(resultsRef.current?.querySelectorAll<HTMLElement>('.search-row') ?? []),
            ];
            const cur = document.activeElement as HTMLElement;
            const idx = rows.indexOf(cur);
            if (e.key === 'ArrowDown' && idx < rows.length - 1) {
              e.preventDefault();
              rows[idx + 1].focus();
            }
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              if (idx <= 0) inputRef.current?.focus();
              else rows[idx - 1].focus();
            }
            if (e.key === 'Enter' && idx !== -1) rows[idx].click();
          }}
        >
          {hits.map((w) => {
            const isInDeck = inDeck(w[0]);
            return (
              <div
                key={w[0]}
                className="search-row"
                tabIndex={0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 16px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border)',
                  transition: 'background .15s',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg2)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '';
                }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.classList.contains('sr-goto-badge')) {
                    jumpTo(w, close);
                    return;
                  }
                  if (target.classList.contains('sr-detail-btn')) {
                    openWordDetail(w);
                    close();
                    return;
                  }
                  openWordDetail(w);
                  close();
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}
                  >
                    <span style={{ fontWeight: 600, fontSize: '.97rem', color: 'var(--text)' }}>
                      {w[0]}
                    </span>
                    <span
                      style={{ fontSize: '.75rem', color: 'var(--text3)', fontStyle: 'italic' }}
                    >
                      {ipa(w)}
                    </span>
                  </div>
                  <div style={{ fontSize: '.85rem', color: 'var(--text2)', marginTop: 2 }}>
                    {w[1]}
                  </div>
                </div>
                <button
                  className="sr-detail-btn"
                  title={t('search.detailCard')}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    color: 'var(--text3)',
                    padding: '4px 6px',
                    flexShrink: 0,
                  }}
                >
                  📋
                </button>
                <span
                  className="sr-goto-badge"
                  style={{
                    fontSize: '.7rem',
                    padding: '2px 7px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    background: isInDeck ? 'rgba(var(--accent-rgb,0,200,255),.12)' : 'var(--bg2)',
                    color: isInDeck ? 'var(--accent)' : 'var(--text3)',
                  }}
                >
                  {isInDeck ? t('search.inDeck') : t('search.goToCard')}
                </span>
              </div>
            );
          })}
        </div>
        {query.trim() !== '' && hits.length === 0 && (
          <div
            style={{ padding: 24, textAlign: 'center', color: 'var(--text3)', fontSize: '.9rem' }}
          >
            Нічого не знайдено
          </div>
        )}
      </div>
    </div>
  );
}
