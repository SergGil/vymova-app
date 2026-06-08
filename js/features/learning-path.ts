// English Words App — js/features/learning-path.ts
// 🎯 Learning Path: structured CEFR-based curriculum with daily goals
import { state } from '../../src/state.ts';
import { CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import { W } from '../../data/words.js';
import { getLevel } from '../features/game.ts';
import { openPage } from '../features/sidebar.ts';
import type { WordEntry } from '../../src/types.js';
import type { PaceSnapshot } from './learning-path-logic.ts';
import {
  computeCefrStats, findCurrentLevel, filterDailyWords,
  computePersonalPace, estimateDays, updateCompletionDates,
} from './learning-path-logic.ts';
import { t, getLang, skillName, levelName } from './i18n.ts';
export type { CefrStats, CefrStat, PaceSnapshot } from './learning-path-logic.ts';
export {
  computeCefrStats, findCurrentLevel, filterDailyWords,
  computePersonalPace, estimateDays, updateCompletionDates,
} from './learning-path-logic.ts';

// ── Plan definition ───────────────────────────────────────────
interface LevelPlan {
  level:     CefrLevel;
  wordsGoal: number;
  skills:    string[];
  grammarLinks: Partial<Record<string, string>>; // skill label → grammar rule id
}

const PLANS: LevelPlan[] = [
  {
    level: 'A1', wordsGoal: 283,
    skills: ['Базове вітання', 'Числа і кольори', 'Сім\'я та тіло', 'Повсякденні дії'],
    grammarLinks: {
      'Базове вітання':   'greetings-intro',
      'Числа і кольори':  'numbers-determiners',
      'Сім\'я та тіло':   'family-body',
      'Повсякденні дії':  'present-simple',
    },
  },
  {
    level: 'A2', wordsGoal: 883,
    skills: ['Опис людей/місць', 'Магазини і ціни', 'Подорожі', 'Минулі події'],
    grammarLinks: {
      'Опис людей/місць': 'comparatives',
      'Магазини і ціни':  'countable-uncountable',
      'Подорожі':         'prepositions',
      'Минулі події':     'past-simple',
    },
  },
  {
    level: 'B1', wordsGoal: 1917,
    skills: ['Розмова про роботу', 'Новини та медіа', 'Вирішення проблем', 'Плани на майбутнє'],
    grammarLinks: {
      'Розмова про роботу':  'modal-verbs',
      'Новини та медіа':     'reported-speech',
      'Вирішення проблем':   'advice-suggestions',
      'Плани на майбутнє':   'future-forms',
    },
  },
  {
    level: 'B2', wordsGoal: 1512,
    skills: ['Академічні тексти', 'Бізнес комунікація', 'Складні аргументи', 'Фільми без субтитрів'],
    grammarLinks: {
      'Академічні тексти':   'passive-voice',
      'Бізнес комунікація':  'business-english',
      'Складні аргументи':   'conditionals',
      // 'Фільми без субтитрів' — навичка слухання, не граматика
    },
  },
  {
    level: 'C1', wordsGoal: 817,
    skills: ['Наукові статті', 'Переговори', 'Нюанси та ідіоми', 'Публічні виступи'],
    grammarLinks: {
      'Наукові статті':   'nominalisation',
      'Переговори':       'negotiation-language',
      'Нюанси та ідіоми': 'idioms',
      'Публічні виступи': 'register',
    },
  },
  {
    level: 'C2', wordsGoal: 230,
    skills: ['Художня проза', 'Академічний стиль', 'Повне розуміння', 'Рівень носія'],
    grammarLinks: {
      'Академічний стиль': 'register',
      // 'Художня проза', 'Повне розуміння', 'Рівень носія' — профіційні мілстоуни
    },
  },
];

// ── LocalStorage helpers ──────────────────────────────────────

const LS_PACE = 'lp_pace_snapshots';
const LS_COMP = 'lp_completion_dates';

function _loadSnapshots(): PaceSnapshot[] {
  try { return JSON.parse(localStorage.getItem(LS_PACE) ?? '[]'); } catch { return []; }
}

function _saveSnapshot(knownCount: number): void {
  const today = new Date().toISOString().slice(0, 10);
  const snaps = _loadSnapshots().filter(s => s.date !== today);
  snaps.push({ date: today, count: knownCount });
  const kept = snaps.sort((a, b) => a.date.localeCompare(b.date)).slice(-14);
  try { localStorage.setItem(LS_PACE, JSON.stringify(kept)); } catch { /* quota */ }
}

function _loadCompletionDates(): Record<string, string> {
  try { return JSON.parse(localStorage.getItem(LS_COMP) ?? '{}'); } catch { return {}; }
}

function _saveCompletionDates(dates: Record<string, string>): void {
  try { localStorage.setItem(LS_COMP, JSON.stringify(dates)); } catch { /* quota */ }
}

function _formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString(getLang() === 'en' ? 'en-US' : 'uk-UA', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Navigate to CEFR level ────────────────────────────────────

function _navigateToLevel(level: CefrLevel): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (sel) {
    sel.value = `cefr-${level}`;
    sel.dispatchEvent(new Event('change'));
  }
  openPage('cards' as Parameters<typeof openPage>[0]);
  (window.closePage as (() => void) | undefined)?.();
}

// ── Render ────────────────────────────────────────────────────

export function renderLearningPath(): void {
  const el = document.getElementById('lp-content') as HTMLElement | null;
  if (!el) return;

  const words = W as unknown as WordEntry[];

  // Track daily pace snapshot
  _saveSnapshot(state.known.size);

  const stats        = computeCefrStats(state.known, words);
  const currentLevel = findCurrentLevel(stats);
  const snapshots    = _loadSnapshots();
  const pace         = computePersonalPace(snapshots);
  const todayStr     = new Date().toISOString().slice(0, 10);
  const lv           = getLevel(state.known.size);
  const todayWords   = filterDailyWords(currentLevel, state.known, words);

  // Save completion dates for newly-completed levels
  const prevDates = _loadCompletionDates();
  const newDates  = updateCompletionDates(stats, prevDates, todayStr);
  if (JSON.stringify(newDates) !== JSON.stringify(prevDates)) _saveCompletionDates(newDates);

  // Daily challenge section
  const dailyChallengeHtml = todayWords.length > 0 ? `
    <div class="lp-section">
      <div class="lp-section-title">📅 ${t('lp.todayPlan')} ${currentLevel}</div>
      <div class="lp-day-words">
        ${todayWords.map(w => `
          <div class="lp-word-chip">
            <span class="lp-word">${w[0]}</span>
            <span class="lp-transl">${w[1]}</span>
          </div>
        `).join('')}
      </div>
      <button class="lp-start-btn" data-lp-level="${currentLevel}">
        📚 ${t('lp.learnWordsNow')} ${currentLevel} ${t('lp.now')}
      </button>
    </div>
  ` : `
    <div class="lp-section lp-complete">
      <div class="lp-section-title">🏆 ${t('lp.levelWord')} ${currentLevel} ${t('lp.completedExcl')}</div>
      <p>${t('lp.allLearned')}</p>
    </div>
  `;

  // CEFR progress rows
  const progressHtml = PLANS.map(plan => {
    const s         = stats[plan.level];
    const meta      = CEFR_META[plan.level];
    const isCurrent = plan.level === currentLevel;
    const isComplete = s.pct >= 90;
    const compDate  = newDates[plan.level];
    const remaining = s.total - s.known;
    const days      = estimateDays(remaining, pace);
    const paceLabel = pace !== null && pace > 0
      ? `${t('lp.yourPace')} ${pace} ${t('lp.wordsPerDay')}`
      : t('lp.defaultPace');

    const skillsHtml = plan.skills.map(sk => {
      const gid = plan.grammarLinks[sk];
      if (gid) {
        return `<span class="lp-skill-tag lp-skill-link" data-grammar="${gid}" title="${t('lp.openGrammar')}">✓ ${skillName(sk)} ↗</span>`;
      }
      return `<span class="lp-skill-tag">✓ ${skillName(sk)}</span>`;
    }).join('');

    const milestones = [25, 50, 75].map(m =>
      `<div class="lp-milestone" style="left:${m}%"></div>`
    ).join('');

    const completionHtml = isComplete && compDate
      ? `<div class="lp-completion-date">${t('lp.completed')} ${_formatDate(compDate)}</div>`
      : '';

    return `
      <div class="lp-level-row${isCurrent ? ' lp-current' : ''}${isComplete ? ' lp-done' : ''}">
        <div class="lp-level-header">
          <span class="lp-level-badge" style="background:${meta.color}22;color:${meta.color};border:1.5px solid ${meta.color}44;">
            ${isComplete ? '✓' : plan.level}
          </span>
          <div class="lp-level-info">
            <div class="lp-level-name" style="color:${meta.color}">
              ${plan.level} — ${t('cefr.' + plan.level)}
              ${isCurrent ? `<span class="lp-current-badge">${t('lp.currentNow')}</span>` : ''}
            </div>
            <div class="lp-level-skills">${plan.skills.slice(0, 2).map(skillName).join(' · ')}</div>
          </div>
          <div class="lp-level-stat">
            <div class="lp-stat-num" style="color:${meta.color}">${s.known}/${s.total}</div>
            <div class="lp-stat-pct">${s.pct}%</div>
          </div>
          ${!isComplete ? `<button class="lp-learn-btn" data-lp-level="${plan.level}" style="border-color:${meta.color};color:${meta.color}">${t('lp.learnArrow')}</button>` : ''}
        </div>
        <div class="lp-progress-bar">
          <div class="lp-progress-fill" style="width:${s.pct}%;background:${meta.color};"></div>
          ${milestones}
        </div>
        ${completionHtml}
        <div class="lp-level-details">
          ${skillsHtml}
          <span class="lp-days-est">~${days} ${t('lp.daysApprox')} (${paceLabel})</span>
        </div>
      </div>
    `;
  }).join('');

  // Overall stats
  const totalKnown = Object.values(stats).reduce((s, v) => s + v.known, 0);
  const totalWords  = Object.values(stats).reduce((s, v) => s + v.total, 0);
  const overallPct  = Math.round(totalKnown / totalWords * 100);
  const paceDisplay = pace !== null && pace > 0
    ? `⚡ ${pace} ${t('lp.wordsPerDayFull')}`
    : `📈 ${t('lp.startLearning')}`;

  el.innerHTML = `
    <div class="lp-hero">
      <div class="lp-hero-left">
        <div class="lp-hero-level">${levelName(lv.name)}</div>
        <div class="lp-hero-stats">
          <span>📚 ${totalKnown} / ${totalWords} ${t('lp.wordsCount')}</span>
          <span>📊 ${overallPct}% ${t('lp.completedPct')}</span>
          <span class="lp-pace-display">${paceDisplay}</span>
        </div>
        <div class="lp-hero-bar">
          <div class="lp-hero-fill" style="width:${overallPct}%"></div>
        </div>
      </div>
      <div class="lp-hero-focus">
        <div class="lp-focus-label">${t('lp.currentFocus')}</div>
        <div class="lp-focus-level" style="color:${CEFR_META[currentLevel].color}">${currentLevel}</div>
        <div class="lp-focus-desc">${t('cefr.' + currentLevel)}</div>
      </div>
    </div>

    ${dailyChallengeHtml}

    <div class="lp-section">
      <div class="lp-section-title">${t('lp.cefrProgress')}</div>
      <div class="lp-levels-list">${progressHtml}</div>
    </div>
  `;

  // Wire up "Start / Learn" buttons
  el.querySelectorAll<HTMLButtonElement>('[data-lp-level]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lvl = btn.dataset.lpLevel as CefrLevel;
      _navigateToLevel(lvl);
    });
  });

  // Wire up grammar skill links
  el.querySelectorAll<HTMLElement>('.lp-skill-link').forEach(tag => {
    tag.addEventListener('click', () => {
      const gid = tag.dataset.grammar!;
      (window as unknown as { jumpToGrammarRule?: (id: string) => void }).jumpToGrammarRule?.(gid);
    });
  });
}

// ── Page open/close ───────────────────────────────────────────
export function openLearningPath(): void {
  renderLearningPath();
}
window.openLearningPath = openLearningPath;
window.renderLearningPath = renderLearningPath;
