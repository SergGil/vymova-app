// Vymova — js/features/word-data/grammar-page.tsx
// Grammar reference page: renders structured rules from data/grammar.ts
import { useEffect, useState, type ReactElement, type MouseEvent } from 'react';
import { ensureGrammarLoaded, getGrammarForLang } from './grammar-loader.ts';
import type { GrammarRule, GSection } from '../../../data/grammar.ts';
import { getLang, t } from '../i18n.ts';
import { getLearnLang } from '../lang-pair-select.tsx';
import { _speakWithLang } from '../voice/speech.ts';
import { useLangVersion } from '../../../src/store.ts';
import { speechLangFor } from '../voice/speech-lang.ts';

function _localizeSection(s: GSection): GSection {
  if (getLang() === 'en' && s.en) return { ...s, ...s.en };
  return s;
}

// ── Level sort ────────────────────────────────────────────────
function _levelOrder(title: string): number {
  const m = title.match(/—\s*(A1|A2|B1|B2|C1|C2)/);
  if (!m) return 99;
  return ({ A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 } as Record<string, number>)[m[1]] ?? 99;
}

// ── Content renderer (HTML strings, mirrors original markup) ────
// Shared by every <td>/<th> across the 3 table types below — mirrors the
// original combined `.gr-formula-table td, .gr-data-table td, .gr-data-table
// th, .gr-ex-table td` selector.
const GR_TD =
  'border border-[var(--border)] px-2.5 py-[7px] align-top leading-[1.4] [.gr-plus_&]:bg-[var(--gr-plus-bg)] [.gr-minus_&]:bg-[var(--gr-minus-bg)] [.gr-ques_&]:bg-[var(--gr-ques-bg)]';
const GR_TABLE = 'w-full border-collapse text-[.84rem]';

function _renderSection(s: GSection): string {
  switch (s.type) {
    case 'intro':
      return `<div class="gr-intro mb-[18px] rounded-[10px] border-l-[3px] border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-[.9rem] leading-[1.65] text-[var(--text2)]">${s.text ?? ''}</div>`;

    case 'subtitle':
      return `<div class="gr-subtitle mt-[18px] mb-2 text-[1.1rem] font-bold text-[var(--text)]">${s.title ?? ''}</div>`;

    case 'formula': {
      const title = s.title
        ? `<div class="gr-section-title mt-5 mb-2 text-[.78rem] font-bold uppercase tracking-[0.06em] text-[var(--text3)]">📐 ${s.title}</div>`
        : '';
      const rows = (s.rows ?? [])
        .map((r) => {
          const cls = r[0].startsWith('✅')
            ? 'gr-plus'
            : r[0].startsWith('❌')
              ? 'gr-minus'
              : r[0].startsWith('❓')
                ? 'gr-ques'
                : '';
          return `<tr class="${cls}">
          <td class="gr-fm-tag ${GR_TD} text-[.8rem] font-bold whitespace-nowrap">${r[0]}</td>
          <td class="gr-fm-subj ${GR_TD} text-[.8rem] text-[var(--text2)] max-[640px]:hidden">${r[1]}</td>
          <td class="gr-fm-form ${GR_TD} font-['Courier_New',monospace] font-bold text-[var(--accent)]">${r[2]}</td>
          <td class="gr-fm-ex ${GR_TD} text-[var(--text2)] italic max-[640px]:hidden">${r[3] ?? ''}</td>
        </tr>`;
        })
        .join('');
      return `${title}<div class="gr-table-wrap mb-1 overflow-x-auto"><table class="gr-formula-table ${GR_TABLE} max-[640px]:text-[.75rem]"><tbody>${rows}</tbody></table></div>`;
    }

    case 'table': {
      const title = s.title
        ? `<div class="gr-section-title mt-5 mb-2 text-[.78rem] font-bold uppercase tracking-[0.06em] text-[var(--text3)]">📊 ${s.title}</div>`
        : '';
      const rows = (s.rows ?? [])
        .map((r, i) => {
          const tag = i === 0 ? 'th' : 'td';
          const cls =
            i === 0
              ? `${GR_TD} bg-[var(--bg)] text-[.8rem] font-bold text-[var(--text)]`
              : GR_TD;
          return `<tr>${r.map((c) => `<${tag} class="${cls}">${c}</${tag}>`).join('')}</tr>`;
        })
        .join('');
      return `${title}<div class="gr-table-wrap mb-1 overflow-x-auto"><table class="gr-data-table ${GR_TABLE}"><tbody>${rows}</tbody></table></div>`;
    }

    case 'examples': {
      const title = s.title
        ? `<div class="gr-section-title mt-5 mb-2 text-[.78rem] font-bold uppercase tracking-[0.06em] text-[var(--text3)]">💬 ${s.title}</div>`
        : '';
      const rows = (s.rows ?? [])
        .map(
          (r) =>
            `<tr><td class="gr-ex-en ${GR_TD} font-semibold text-[var(--text)]"><span class="gr-ex-text">${r[0]}</span><button class="speak-btn gr-ex-speak ml-1 align-middle text-[14px]" title="🔊">🔊</button></td><td class="gr-ex-ua ${GR_TD} text-[var(--text2)]">${r[1]}</td></tr>`,
        )
        .join('');
      return `${title}<div class="gr-table-wrap mb-1 overflow-x-auto"><table class="gr-ex-table ${GR_TABLE}"><tbody>${rows}</tbody></table></div>`;
    }

    case 'markers': {
      const title = s.title
        ? `<div class="gr-section-title mt-5 mb-2 text-[.78rem] font-bold uppercase tracking-[0.06em] text-[var(--text3)]">⏰ ${s.title}</div>`
        : '';
      const chips = (s.items ?? [])
        .map(
          (m) =>
            `<span class="gr-chip inline-block rounded-[20px] border border-[var(--accent)] bg-[var(--gr-chip-bg)] px-2.5 py-[3px] text-[.78rem] font-medium text-[var(--accent)]">${m}</span>`,
        )
        .join('');
      return `${title}<div class="gr-chips mb-1 flex flex-wrap gap-1.5">${chips}</div>`;
    }

    case 'note':
      return `<div class="gr-note rounded-[10px] border-l-[3px] border-l-[#e74c3c] bg-[var(--gr-note-bg)] px-3.5 py-3 mb-1 text-[.84rem] leading-[1.55] text-[var(--text2)]">
        ${s.title ? `<div class="gr-note-title mb-[5px] text-[.86rem] font-bold text-[var(--text)]">📌 ${s.title}</div>` : ''}
        <div>${(s.text ?? '').replace(/\n/g, '<br>')}</div>
      </div>`;

    case 'tip':
      return `<div class="gr-tip rounded-[10px] border-l-[3px] border-l-[#f39c12] bg-[var(--gr-tip-bg)] px-3.5 py-3 mb-1 text-[.84rem] leading-[1.55] text-[var(--text2)]">
        ${s.title ? `<div class="gr-tip-title mb-[5px] text-[.86rem] font-bold text-[var(--text)]">💡 ${s.title}</div>` : ''}
        <div>${(s.text ?? '').replace(/\n/g, '<br>')}</div>
      </div>`;

    default:
      return '';
  }
}

function _renderRuleHtml(rule: GrammarRule): string {
  return `
    <div class="gr-rule-title mb-[18px] border-b-2 border-[var(--border)] pb-2.5 font-['DM_Serif_Display',serif] text-[1.6rem] text-[var(--text)] max-[640px]:text-[1.25rem]">${rule.emoji} ${getLang() === 'en' && rule.titleEn ? rule.titleEn : rule.title}</div>
    ${rule.sections.map((s) => _renderSection(_localizeSection(s))).join('')}
  `;
}

// ── Speak button (event delegation over the dangerouslySetInnerHTML content) ──
function _onContentClick(e: MouseEvent<HTMLDivElement>): void {
  const btn = (e.target as HTMLElement).closest('.gr-ex-speak') as HTMLElement | null;
  if (!btn) return;
  const text = btn.previousElementSibling?.textContent ?? '';
  _speakWithLang(text, speechLangFor(getLearnLang()), btn);
}

// ── External hooks (sidebar openPage, learning-path jump, i18n refresh) ──
let _setActiveId: ((id: string) => void) | null = null;
let _bumpTick: (() => void) | null = null;

/** Called by sidebar openPage('grammar') to initialize/refresh content */
export function openGrammarContent(): void {
  _bumpTick?.();
}

function openGrammar(): void {
  // Динамічний імпорт: sidebar.tsx статично імпортує цей файл
  // (openGrammarContent) — зворотний статичний імпорт створив би цикл.
  import('../sidebar/sidebar.tsx').then((m) => m.openPage('grammar'));
}

export function jumpToGrammarRule(id: string): void {
  _setActiveId?.(id);
  openGrammar();
}

export function GrammarPage(): ReactElement {
  useLangVersion();
  const [activeId, setActiveId] = useState('');
  const [, setTick] = useState(0);

  useEffect(() => {
    _setActiveId = setActiveId;
    _bumpTick = () => setTick((x) => x + 1);
    return () => {
      _setActiveId = null;
      _bumpTick = null;
    };
  }, []);

  const learnLang = getLearnLang();
  // Grammar data loads lazily per learn-language (js/features/grammar-loader.ts)
  // instead of shipping every language's rules to every user. This page is
  // itself only opened on demand (see openGrammar()'s dynamic import below),
  // so the brief load gap here reuses the same "not available" empty state
  // the page already shows for a language with no grammar data at all.
  useEffect(() => {
    let cancelled = false;
    ensureGrammarLoaded(learnLang).then(() => {
      if (!cancelled) setTick((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [learnLang]);

  const grammar = getGrammarForLang(learnLang) ?? [];

  if (!grammar.length) {
    return (
      <div
        id="grammar-content"
        className="grammar-content min-w-0 flex-1 overflow-y-auto px-6 pt-5 pb-8 max-[640px]:px-3.5 max-[640px]:pt-3.5 max-[640px]:pb-6"
      >
        <div className="gr-empty mt-[60px] text-center text-base text-[var(--text3)]">
          {t('grammar.notAvailable')}
        </div>
      </div>
    );
  }

  const effectiveId = activeId || grammar[0]?.rules[0]?.id || '';

  let activeRule: GrammarRule | undefined;
  for (const cat of grammar) {
    activeRule = cat.rules.find((r) => r.id === effectiveId);
    if (activeRule) break;
  }

  return (
    <>
      <div
        id="grammar-nav"
        className="grammar-nav w-[210px] shrink-0 overflow-y-auto border-r-[1.5px] border-[var(--border)] bg-[var(--bg)] px-2 py-3 max-[640px]:w-full max-[640px]:max-h-[160px] max-[640px]:border-r-0 max-[640px]:border-b-[1.5px] max-[640px]:px-2 max-[640px]:py-2 [@media(max-width:480px)]:!max-h-[140px]"
      >
        {grammar.map((cat) => {
          const sorted = [...cat.rules].sort((a, b) => _levelOrder(a.title) - _levelOrder(b.title));
          return (
            <div className="gr-cat mb-3.5" key={cat.title}>
              <div className="gr-cat-title mb-1 px-2 text-[.68rem] font-extrabold uppercase tracking-[0.07em] text-[var(--text3)]">
                {cat.emoji} {getLang() === 'en' && cat.titleEn ? cat.titleEn : cat.title}
              </div>
              <div className="gr-cat-rules flex flex-col gap-0.5 max-[640px]:flex-row max-[640px]:flex-wrap">
                {sorted.map((r) => (
                  <button
                    key={r.id}
                    className={'gr-nav-btn' + (r.id === effectiveId ? ' gr-nav-active' : '')}
                    data-id={r.id}
                    onClick={() => {
                      setActiveId(r.id);
                      if (window.innerWidth < 700) {
                        document
                          .getElementById('grammar-content')
                          ?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {r.emoji} {getLang() === 'en' && r.titleEn ? r.titleEn : r.title}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="grammar-content"
        className="grammar-content min-w-0 flex-1 overflow-y-auto px-6 pt-5 pb-8 max-[640px]:px-3.5 max-[640px]:pt-3.5 max-[640px]:pb-6"
        onClick={_onContentClick}
      >
        {activeRule ? (
          <div dangerouslySetInnerHTML={{ __html: _renderRuleHtml(activeRule) }} />
        ) : (
          <div className="gr-empty mt-[60px] text-center text-base text-[var(--text3)]">
            {t('grammar.selectTopic')}
          </div>
        )}
      </div>
    </>
  );
}

import { bindOverlayDismiss } from '../overlay-utils.ts';
bindOverlayDismiss('grammar-overlay', 'grammar-close');
