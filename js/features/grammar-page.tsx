// Vymova — js/features/grammar-page.tsx
// Grammar reference page: renders structured rules from data/grammar.ts
import { useEffect, useState, type ReactElement, type MouseEvent } from 'react';
import { GRAMMAR_BY_LANG } from '../../data/grammar.ts';
import type { GrammarRule, GSection, GrammarCategory } from '../../data/grammar.ts';
import { getLang, t } from './i18n.ts';
import { getLearnLang, type LangCode } from './lang-pair-select.tsx';
import { _speakWithLang } from './speech.ts';
import { useStateVersion } from '../../src/store.ts';

function _localizeSection(s: GSection): GSection {
  if (getLang() === 'en' && s.en) return { ...s, ...s.en };
  return s;
}

const SPEECH_LANG: Record<LangCode, string> = {
  en: 'en-US', ua: 'uk-UA', es: 'es-ES', fr: 'fr-FR', it: 'it-IT', pt: 'pt-PT', de: 'de-DE', he: 'he-IL', ar: 'ar-SA',
  pl: 'pl-PL', zh: 'zh-CN', el: 'el-GR', ja: 'ja-JP', tr: 'tr-TR', nl: 'nl-NL',
};

// ── Level sort ────────────────────────────────────────────────
function _levelOrder(title: string): number {
  const m = title.match(/—\s*(A1|A2|B1|B2|C1|C2)/);
  if (!m) return 99;
  return ({ A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 } as Record<string, number>)[m[1]] ?? 99;
}

// ── Content renderer (HTML strings, mirrors original markup) ────
function _renderSection(s: GSection): string {
  switch (s.type) {
    case 'intro':
      return `<div class="gr-intro">${s.text ?? ''}</div>`;

    case 'subtitle':
      return `<div class="gr-subtitle">${s.title ?? ''}</div>`;

    case 'formula': {
      const title = s.title ? `<div class="gr-section-title">📐 ${s.title}</div>` : '';
      const rows  = (s.rows ?? []).map(r => {
        const cls = r[0].startsWith('✅') ? 'gr-plus'
                  : r[0].startsWith('❌') ? 'gr-minus'
                  : r[0].startsWith('❓') ? 'gr-ques' : '';
        return `<tr class="${cls}">
          <td class="gr-fm-tag">${r[0]}</td>
          <td class="gr-fm-subj">${r[1]}</td>
          <td class="gr-fm-form">${r[2]}</td>
          <td class="gr-fm-ex">${r[3] ?? ''}</td>
        </tr>`;
      }).join('');
      return `${title}<div class="gr-table-wrap"><table class="gr-formula-table"><tbody>${rows}</tbody></table></div>`;
    }

    case 'table': {
      const title = s.title ? `<div class="gr-section-title">📊 ${s.title}</div>` : '';
      const rows  = (s.rows ?? []).map((r, i) => {
        const tag = i === 0 ? 'th' : 'td';
        const cls = i === 0 ? 'gr-thead' : '';
        return `<tr class="${cls}">${r.map(c => `<${tag}>${c}</${tag}>`).join('')}</tr>`;
      }).join('');
      return `${title}<div class="gr-table-wrap"><table class="gr-data-table"><tbody>${rows}</tbody></table></div>`;
    }

    case 'examples': {
      const title = s.title ? `<div class="gr-section-title">💬 ${s.title}</div>` : '';
      const rows  = (s.rows ?? []).map(r =>
        `<tr><td class="gr-ex-en"><span class="gr-ex-text">${r[0]}</span><button class="speak-btn gr-ex-speak" title="🔊">🔊</button></td><td class="gr-ex-ua">${r[1]}</td></tr>`
      ).join('');
      return `${title}<div class="gr-table-wrap"><table class="gr-ex-table"><tbody>${rows}</tbody></table></div>`;
    }

    case 'markers': {
      const title = s.title ? `<div class="gr-section-title">⏰ ${s.title}</div>` : '';
      const chips = (s.items ?? []).map(m => `<span class="gr-chip">${m}</span>`).join('');
      return `${title}<div class="gr-chips">${chips}</div>`;
    }

    case 'note':
      return `<div class="gr-note">
        ${s.title ? `<div class="gr-note-title">📌 ${s.title}</div>` : ''}
        <div>${(s.text ?? '').replace(/\n/g, '<br>')}</div>
      </div>`;

    case 'tip':
      return `<div class="gr-tip">
        ${s.title ? `<div class="gr-tip-title">💡 ${s.title}</div>` : ''}
        <div>${(s.text ?? '').replace(/\n/g, '<br>')}</div>
      </div>`;

    default:
      return '';
  }
}

function _renderRuleHtml(rule: GrammarRule): string {
  return `
    <div class="gr-rule-title">${rule.emoji} ${getLang() === 'en' && rule.titleEn ? rule.titleEn : rule.title}</div>
    ${rule.sections.map(s => _renderSection(_localizeSection(s))).join('')}
  `;
}

// ── Speak button (event delegation over the dangerouslySetInnerHTML content) ──
function _onContentClick(e: MouseEvent<HTMLDivElement>): void {
  const btn = (e.target as HTMLElement).closest('.gr-ex-speak') as HTMLElement | null;
  if (!btn) return;
  const text = btn.previousElementSibling?.textContent ?? '';
  _speakWithLang(text, SPEECH_LANG[getLearnLang()] ?? 'en-US', btn);
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
  import('./sidebar.tsx').then(m => m.openPage('grammar'));
}

export function jumpToGrammarRule(id: string): void {
  _setActiveId?.(id);
  openGrammar();
}

export function GrammarPage(): ReactElement {
  useStateVersion();
  const [activeId, setActiveId] = useState('');
  const [, setTick] = useState(0);

  useEffect(() => {
    _setActiveId = setActiveId;
    _bumpTick = () => setTick(x => x + 1);
    return () => { _setActiveId = null; _bumpTick = null; };
  }, []);

  const grammar = (GRAMMAR_BY_LANG as Record<string, GrammarCategory[]>)[getLearnLang()] ?? [];

  if (!grammar.length) {
    return (
      <div id="grammar-content" className="grammar-content">
        <div className="gr-empty">{t('grammar.notAvailable')}</div>
      </div>
    );
  }

  const effectiveId = activeId || grammar[0]?.rules[0]?.id || '';

  let activeRule: GrammarRule | undefined;
  for (const cat of grammar) {
    activeRule = cat.rules.find(r => r.id === effectiveId);
    if (activeRule) break;
  }

  return (
    <>
      <div id="grammar-nav" className="grammar-nav">
        {grammar.map(cat => {
          const sorted = [...cat.rules].sort((a, b) => _levelOrder(a.title) - _levelOrder(b.title));
          return (
            <div className="gr-cat" key={cat.title}>
              <div className="gr-cat-title">{cat.emoji} {getLang() === 'en' && cat.titleEn ? cat.titleEn : cat.title}</div>
              <div className="gr-cat-rules">
                {sorted.map(r => (
                  <button
                    key={r.id}
                    className={'gr-nav-btn' + (r.id === effectiveId ? ' gr-nav-active' : '')}
                    data-id={r.id}
                    onClick={() => {
                      setActiveId(r.id);
                      if (window.innerWidth < 700) {
                        document.getElementById('grammar-content')?.scrollIntoView({ behavior: 'smooth' });
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
      <div id="grammar-content" className="grammar-content" onClick={_onContentClick}>
        {activeRule
          ? <div dangerouslySetInnerHTML={{ __html: _renderRuleHtml(activeRule) }} />
          : <div className="gr-empty">{t('grammar.selectTopic')}</div>}
      </div>
    </>
  );
}

import { bindOverlayDismiss } from './overlay-utils.ts';
bindOverlayDismiss('grammar-overlay', 'grammar-close');
