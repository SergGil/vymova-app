// English Words App — js/features/grammar.ts
// Grammar reference page: renders structured rules from data/grammar.ts
import { GRAMMAR } from '../../data/grammar.ts';
import type { GrammarRule, GSection } from '../../data/grammar.ts';
import { getLang } from './i18n.ts';

const overlay  = document.getElementById('grammar-overlay')! as HTMLElement;
const navEl    = document.getElementById('grammar-nav')!      as HTMLElement;
const contentEl= document.getElementById('grammar-content')! as HTMLElement;

let _activeId = '';

function _localizeSection(s: GSection): GSection {
  if (getLang() === 'en' && s.en) return { ...s, ...s.en };
  return s;
}

// ── Level sort ────────────────────────────────────────────────
function _levelOrder(title: string): number {
  const m = title.match(/—\s*(A1|A2|B1|B2|C1|C2)/);
  if (!m) return 99;
  return ({A1:1, A2:2, B1:3, B2:4, C1:5, C2:6} as Record<string,number>)[m[1]] ?? 99;
}

// ── Nav tree ──────────────────────────────────────────────────
function _renderNav(): void {
  navEl.innerHTML = GRAMMAR.map(cat => {
    const sorted = [...cat.rules].sort((a, b) => _levelOrder(a.title) - _levelOrder(b.title));
    return `
    <div class="gr-cat">
      <div class="gr-cat-title">${cat.emoji} ${getLang() === 'en' && cat.titleEn ? cat.titleEn : cat.title}</div>
      <div class="gr-cat-rules">
        ${sorted.map(r => `
          <button class="gr-nav-btn${r.id === _activeId ? ' gr-nav-active' : ''}"
            data-id="${r.id}">${r.emoji} ${getLang() === 'en' && r.titleEn ? r.titleEn : r.title}</button>
        `).join('')}
      </div>
    </div>
  `}).join('');

  navEl.querySelectorAll<HTMLButtonElement>('.gr-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _activeId = btn.dataset.id ?? '';
      _renderNav();
      _renderRule(_activeId);
      // On mobile — scroll to content
      if (window.innerWidth < 700) contentEl.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ── Content renderer ──────────────────────────────────────────
function _renderRule(id: string): void {
  let rule: GrammarRule | undefined;
  for (const cat of GRAMMAR) {
    rule = cat.rules.find(r => r.id === id);
    if (rule) break;
  }
  if (!rule) { contentEl.innerHTML = `<div class="gr-empty">${getLang() === 'en' ? 'Select a topic from the left' : 'Оберіть тему зліва'}</div>`; return; }

  contentEl.innerHTML = `
    <div class="gr-rule-title">${rule.emoji} ${getLang() === 'en' && rule.titleEn ? rule.titleEn : rule.title}</div>
    ${rule.sections.map(s => _renderSection(_localizeSection(s))).join('')}
  `;
  contentEl.scrollTop = 0;
}

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
        `<tr><td class="gr-ex-en">${r[0]}</td><td class="gr-ex-ua">${r[1]}</td></tr>`
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

// ── Open / close ──────────────────────────────────────────────

/** Called by sidebar openPage('grammar') to initialize content */
export function openGrammarContent(): void {
  if (!_activeId) _activeId = GRAMMAR[0]?.rules[0]?.id ?? '';
  _renderNav();
  _renderRule(_activeId);
}
window.openGrammarContent = openGrammarContent;

export function openGrammar(): void {
  (window.openPage as ((p: string) => void) | undefined)?.('grammar');
}

export function jumpToGrammarRule(id: string): void {
  _activeId = id;
  openGrammar();
}
window.jumpToGrammarRule = jumpToGrammarRule;

function closeGrammar(): void {
  (window.closePage as (() => void) | undefined)?.();
}

document.getElementById('grammar-close')?.addEventListener('click', closeGrammar);
overlay.addEventListener('click', (e: MouseEvent) => {
  if (e.target === overlay) closeGrammar();
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeGrammar();
});
