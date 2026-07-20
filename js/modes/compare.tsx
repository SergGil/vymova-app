// Vymova — js/modes/compare.tsx
// 🌍 Compare: type a word in any language, see it translated across a set of
// languages side by side — the user's active learn/know pair by default
// (usually just 0-2 dictionaries, loaded on open), plus any the user adds
// via the "+" picker for the current session. Used to eagerly Promise.all
// the first 15 target languages (~8.6MB of dictionaries) on every open
// regardless of what the user actually studies — the "+" picker already
// loaded extras lazily on demand, this just applies the same discipline to
// the starting set.
import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import {
  ALL_TARGET_LANGS,
  ensureLangTableLoaded,
  headwordFor,
  isTargetLang,
  langConfig,
  type Code,
  type TargetLang,
} from '../features/mode-utils.ts';
import { FLAG_CODE } from '../core/flag-codes.ts';
import { flagUrl } from '../core/flags.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { speakForCode } from '../features/voice/speak-lang.ts';
import { t } from '../features/i18n.ts';
import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
import { useModeSession } from '../features/use-mode-session.ts';

const MAX_SUGGESTIONS = 12;

// The target-language side(s) of the user's current learn/know pair (empty
// for the common case of a plain en/ua pair, since neither is a TargetLang)
// — recomputed on every open so switching pairs elsewhere in the app is
// picked up next time Compare opens.
function _pairDefaultLangs(): TargetLang[] {
  const learn = localStorage.getItem('ew_learn_lang') ?? 'en';
  const know = localStorage.getItem('ew_know_lang') ?? 'ua';
  const out: TargetLang[] = [];
  if (isTargetLang(learn)) out.push(learn);
  if (isTargetLang(know) && know !== learn) out.push(know);
  return out;
}

function rtlFor(code: Code): boolean {
  return isTargetLang(code) ? langConfig(code).rtl : false;
}

function transcriptionFor(code: Code, w: WordEntry): string {
  if (code === 'en') return decodeIpa(w[4] ?? '');
  if (!isTargetLang(code)) return '';
  const local = langConfig(code).entry(w[0])?.[2];
  return local ? decodeIpa(local) : '';
}

function searchEntries(q: string, codes: Code[]): WordEntry[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const primary: WordEntry[] = [];
  const contains: WordEntry[] = [];
  for (const w of W as unknown as WordEntry[]) {
    let hitPrimary = false;
    let hitContains = false;
    for (const c of codes) {
      const word = headwordFor(c, w).toLowerCase();
      if (!word) continue;
      if (word.startsWith(query)) {
        hitPrimary = true;
        break;
      }
      if (word.includes(query)) hitContains = true;
    }
    if (hitPrimary) primary.push(w);
    else if (hitContains) contains.push(w);
    if (primary.length >= MAX_SUGGESTIONS) break;
  }
  return [...primary, ...contains].slice(0, MAX_SUGGESTIONS);
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

export function openCompare(): void {
  _open?.();
}
function closeCompare(): void {
  _close?.();
}

function SpeakBtn({ text, code, fallback }: { text: string; code: Code; fallback: string }) {
  if (!text) return null;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speakForCode(code, text, fallback, e.currentTarget);
      }}
      title="🔊"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '.95rem',
        color: 'var(--text3)',
        padding: '2px 4px',
        flexShrink: 0,
      }}
    >
      🔊
    </button>
  );
}

export function ComparePage(): ReactElement {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<WordEntry[]>([]);
  const [selected, setSelected] = useState<WordEntry | null>(null);
  const [defaultLangs, setDefaultLangs] = useState<TargetLang[]>([]);
  const [extraLangs, setExtraLangs] = useState<TargetLang[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerQuery, setPickerQuery] = useState('');
  const [tablesReady, setTablesReady] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchCodes = useMemo<Code[]>(
    () => ['en', 'ua', ...defaultLangs, ...extraLangs],
    [defaultLangs, extraLangs],
  );

  const session = useModeSession({
    overlayId: 'cmp-overlay',
    modeId: 'compare',
    isFinal: false,
    closeOnEscape: false,
    onOpen: () => {
      setQuery('');
      setSuggestions([]);
      setSelected(null);
      setExtraLangs([]);
      setPickerOpen(false);
      setPickerQuery('');
      setTablesReady(false);
      const langs = _pairDefaultLangs();
      setDefaultLangs(langs);
      Promise.all(langs.map(ensureLangTableLoaded)).then(() => setTablesReady(true));
      setTimeout(() => inputRef.current?.focus(), 60);
    },
    bindExternal: (open, close) => {
      _open = open;
      _close = close;
      return () => {
        _open = null;
        _close = null;
      };
    },
  });
  const { isOpen, close: sessionClose } = session;

  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (pickerOpen) setPickerOpen(false);
        else sessionClose();
      }
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [isOpen, pickerOpen, sessionClose]);

  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      if (pickerOpen && pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [pickerOpen]);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!tablesReady) return;
    const q = query.trim();
    if (!q) {
      setSuggestions([]);
      return;
    }
    timerRef.current = setTimeout(() => setSuggestions(searchEntries(q, searchCodes)), 120);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, searchCodes, tablesReady]);

  function pick(w: WordEntry): void {
    setSelected(w);
    setQuery('');
    setSuggestions([]);
  }

  function clearSelection(): void {
    setSelected(null);
    setQuery('');
    setTimeout(() => inputRef.current?.focus(), 30);
  }

  function addLang(l: TargetLang): void {
    setExtraLangs((cur) => (cur.includes(l) ? cur : [...cur, l]));
    ensureLangTableLoaded(l);
    setPickerOpen(false);
    setPickerQuery('');
  }

  function removeLang(l: TargetLang): void {
    setExtraLangs((cur) => cur.filter((x) => x !== l));
  }

  if (!isOpen) return <></>;

  const pickerOptions = ALL_TARGET_LANGS.filter((l) => {
    if (defaultLangs.includes(l) || extraLangs.includes(l)) return false;
    if (!pickerQuery) return true;
    const q = pickerQuery.toLowerCase();
    return t(`lang.${l}`).toLowerCase().includes(q) || l.includes(q);
  });

  const displayCodes: Code[] = ['en', 'ua', ...defaultLangs, ...extraLangs];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
          {t('compare.title')}
        </div>
        <button
          onClick={closeCompare}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.3rem',
            cursor: 'pointer',
            color: 'var(--text3)',
          }}
          aria-label={t('common.close')}
        >
          ✕
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: 10, flexShrink: 0 }}>
        {selected ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 12px',
              borderRadius: 10,
              border: '1.5px solid var(--border)',
              background: 'var(--bg)',
            }}
          >
            <span style={{ fontWeight: 600, color: 'var(--text)', flex: 1 }}>{selected[0]}</span>
            <button
              onClick={clearSelection}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text3)',
                fontSize: '.95rem',
              }}
            >
              ✕
            </button>
          </div>
        ) : (
          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder={tablesReady ? t('compare.placeholder') : '…'}
            disabled={!tablesReady}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && suggestions.length) pick(suggestions[0]);
            }}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 12px',
              borderRadius: 10,
              border: '1.5px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: '.92rem',
              fontFamily: 'inherit',
              outline: 'none',
            }}
          />
        )}
        {!selected && suggestions.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: 4,
              background: 'var(--card)',
              border: '1.5px solid var(--border)',
              borderRadius: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,.2)',
              maxHeight: 220,
              overflowY: 'auto',
              zIndex: 10,
            }}
          >
            {suggestions.map((w) => (
              <div
                key={w[0]}
                onClick={() => pick(w)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '.88rem',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg2)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '';
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>{w[0]}</span>
                <span style={{ color: 'var(--text3)', marginLeft: 8 }}>{w[1]}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        {!selected && (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--text3)',
              fontSize: '.85rem',
              padding: '24px 12px',
            }}
          >
            {tablesReady ? t('compare.hint') : '…'}
          </div>
        )}

        {selected && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {displayCodes.map((code) => {
              const word = headwordFor(code, selected) || '—';
              const trans = transcriptionFor(code, selected);
              const isExtra = isTargetLang(code) && (extraLangs as string[]).includes(code);
              return (
                <div
                  key={code}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 10,
                    background: 'var(--bg)',
                  }}
                >
                  {flagUrl(FLAG_CODE[code]) ? (
                    <img src={flagUrl(FLAG_CODE[code])!} alt="" width={18} height={18} />
                  ) : (
                    <span style={{ fontSize: '.68rem', color: 'var(--text3)', width: 18 }}>
                      {code.toUpperCase()}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '.7rem',
                      color: 'var(--text3)',
                      width: 76,
                      flexShrink: 0,
                    }}
                  >
                    {t(`lang.${code}`)}
                  </span>
                  <span
                    dir={rtlFor(code) ? 'rtl' : undefined}
                    style={{ fontWeight: 600, color: 'var(--text)', flex: 1, minWidth: 0 }}
                  >
                    {word}
                  </span>
                  {trans && (
                    <span
                      style={{
                        fontSize: '.75rem',
                        color: 'var(--text3)',
                        fontStyle: 'italic',
                      }}
                    >
                      {trans}
                    </span>
                  )}
                  <SpeakBtn text={word !== '—' ? word : ''} code={code} fallback={selected[0]} />
                  {isExtra && (
                    <button
                      onClick={() => removeLang(code as TargetLang)}
                      title={t('compare.removeLang')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text3)',
                        fontSize: '.8rem',
                        padding: '2px 4px',
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}

            <div ref={pickerRef} style={{ position: 'relative', marginTop: 4 }}>
              <button
                onClick={() => setPickerOpen((o) => !o)}
                style={{
                  width: '100%',
                  padding: '9px 10px',
                  borderRadius: 10,
                  border: '1.5px dashed var(--border)',
                  background: 'none',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.85rem',
                }}
              >
                {t('compare.addLanguage')}
              </button>
              {pickerOpen && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: 0,
                    right: 0,
                    marginBottom: 4,
                    background: 'var(--card)',
                    border: '1.5px solid var(--border)',
                    borderRadius: 10,
                    boxShadow: '0 8px 24px rgba(0,0,0,.2)',
                    maxHeight: 260,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 10,
                  }}
                >
                  <input
                    autoFocus
                    type="text"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder={t('compare.pickerPlaceholder')}
                    value={pickerQuery}
                    onChange={(e) => setPickerQuery(e.target.value)}
                    style={{
                      padding: '9px 10px',
                      border: 'none',
                      borderBottom: '1.5px solid var(--border)',
                      background: 'transparent',
                      color: 'var(--text)',
                      fontFamily: 'inherit',
                      fontSize: '.85rem',
                      outline: 'none',
                    }}
                  />
                  <div style={{ overflowY: 'auto' }}>
                    {pickerOptions.map((l) => (
                      <div
                        key={l}
                        onClick={() => addLang(l)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '7px 10px',
                          cursor: 'pointer',
                          fontSize: '.85rem',
                        }}
                        onMouseOver={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'var(--bg2)';
                        }}
                        onMouseOut={(e) => {
                          (e.currentTarget as HTMLElement).style.background = '';
                        }}
                      >
                        {flagUrl(FLAG_CODE[l]) ? (
                          <img src={flagUrl(FLAG_CODE[l])!} alt="" width={16} height={16} />
                        ) : (
                          <span style={{ fontSize: '.65rem', width: 16 }}>{l.toUpperCase()}</span>
                        )}
                        <span style={{ color: 'var(--text)' }}>{t(`lang.${l}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

bindOverlayOpenClose('btn-compare', 'cmp-overlay', openCompare, closeCompare);
