// Vymova — js/features/learning-path.ts
// 🎯 Learning Path: structured CEFR-based curriculum with daily goals
import { state } from '../../src/state.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import { W } from '../../data/words.js';
import { getLevel } from '../features/game.ts';
import { openPage, closePage } from '../features/sidebar.tsx';
import { jumpToGrammarRule } from '../features/grammar-page.tsx';
import type { WordEntry } from '../../src/types.js';
import type { PaceSnapshot } from './learning-path-logic.ts';
import {
  computeCefrStats,
  findCurrentLevel,
  filterDailyWords,
  computePersonalPace,
  estimateDays,
  updateCompletionDates,
} from './learning-path-logic.ts';
import { t, getLang, skillName, levelName } from './i18n.ts';
import {
  esEntry,
  frEntry,
  itEntry,
  ptEntry,
  deEntry,
  heEntry,
  arEntry,
  plEntry,
  zhEntry,
  elEntry,
  jaEntry,
  trEntry,
  nlEntry,
  isTargetLang,
} from './mode-utils.ts';

// ── Language helpers ──────────────────────────────────────────

function _learnLang(): string {
  return localStorage.getItem('ew_learn_lang') ?? 'en';
}

function _activeKnownSet(): Set<string> {
  const lang = _learnLang();
  return getKnownSnapshot(isTargetLang(lang) ? lang : 'en');
}

function _getTranslation(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'es':
      return esEntry(w[0])?.[0] ?? w[1];
    case 'fr':
      return frEntry(w[0])?.[0] ?? w[1];
    case 'it':
      return itEntry(w[0])?.[0] ?? w[1];
    case 'pt':
      return ptEntry(w[0])?.[0] ?? w[1];
    case 'de':
      return deEntry(w[0])?.[0] ?? w[1];
    case 'he':
      return heEntry(w[0])?.[0] ?? w[1];
    case 'ar':
      return arEntry(w[0])?.[0] ?? w[1];
    case 'pl':
      return plEntry(w[0])?.[0] ?? w[1];
    case 'zh':
      return zhEntry(w[0])?.[0] ?? w[1];
    case 'el':
      return elEntry(w[0])?.[0] ?? w[1];
    case 'ja':
      return jaEntry(w[0])?.[0] ?? w[1];
    case 'tr':
      return trEntry(w[0])?.[0] ?? w[1];
    case 'nl':
      return nlEntry(w[0])?.[0] ?? w[1];
    default:
      return w[1];
  }
}

function _filterWordsForLang(words: WordEntry[], lang: string): WordEntry[] {
  switch (lang) {
    case 'es':
      return words.filter((w) => esEntry(w[0]) !== null);
    case 'fr':
      return words.filter((w) => frEntry(w[0]) !== null);
    case 'it':
      return words.filter((w) => itEntry(w[0]) !== null);
    case 'pt':
      return words.filter((w) => ptEntry(w[0]) !== null);
    case 'de':
      return words.filter((w) => deEntry(w[0]) !== null);
    case 'he':
      return words.filter((w) => heEntry(w[0]) !== null);
    case 'ar':
      return words.filter((w) => arEntry(w[0]) !== null);
    case 'pl':
      return words.filter((w) => plEntry(w[0]) !== null);
    case 'zh':
      return words.filter((w) => zhEntry(w[0]) !== null);
    case 'el':
      return words.filter((w) => elEntry(w[0]) !== null);
    case 'ja':
      return words.filter((w) => jaEntry(w[0]) !== null);
    case 'tr':
      return words.filter((w) => trEntry(w[0]) !== null);
    case 'nl':
      return words.filter((w) => nlEntry(w[0]) !== null);
    default:
      return words;
  }
}

// ── Plan definition ───────────────────────────────────────────
interface LevelPlan {
  level: CefrLevel;
  wordsGoal: number;
  skills: string[];
  grammarLinks: Partial<Record<string, string>>; // skill label → grammar rule id
}

const PLANS: LevelPlan[] = [
  {
    level: 'A1',
    wordsGoal: 283,
    skills: ['Базове вітання', 'Числа і кольори', "Сім'я та тіло", 'Повсякденні дії'],
    grammarLinks: {
      'Базове вітання': 'greetings-intro',
      'Числа і кольори': 'numbers-determiners',
      "Сім'я та тіло": 'family-body',
      'Повсякденні дії': 'present-simple',
    },
  },
  {
    level: 'A2',
    wordsGoal: 883,
    skills: ['Опис людей/місць', 'Магазини і ціни', 'Подорожі', 'Минулі події'],
    grammarLinks: {
      'Опис людей/місць': 'comparatives',
      'Магазини і ціни': 'countable-uncountable',
      Подорожі: 'prepositions',
      'Минулі події': 'past-simple',
    },
  },
  {
    level: 'B1',
    wordsGoal: 1917,
    skills: ['Розмова про роботу', 'Новини та медіа', 'Вирішення проблем', 'Плани на майбутнє'],
    grammarLinks: {
      'Розмова про роботу': 'modal-verbs',
      'Новини та медіа': 'reported-speech',
      'Вирішення проблем': 'advice-suggestions',
      'Плани на майбутнє': 'future-forms',
    },
  },
  {
    level: 'B2',
    wordsGoal: 1512,
    skills: [
      'Академічні тексти',
      'Бізнес комунікація',
      'Складні аргументи',
      'Фільми без субтитрів',
    ],
    grammarLinks: {
      'Академічні тексти': 'passive-voice',
      'Бізнес комунікація': 'business-english',
      'Складні аргументи': 'conditionals',
      // 'Фільми без субтитрів' — навичка слухання, не граматика
    },
  },
  {
    level: 'C1',
    wordsGoal: 817,
    skills: ['Наукові статті', 'Переговори', 'Нюанси та ідіоми', 'Публічні виступи'],
    grammarLinks: {
      'Наукові статті': 'nominalisation',
      Переговори: 'negotiation-language',
      'Нюанси та ідіоми': 'idioms',
      'Публічні виступи': 'register',
    },
  },
  {
    level: 'C2',
    wordsGoal: 230,
    skills: ['Художня проза', 'Академічний стиль', 'Повне розуміння', 'Рівень носія'],
    grammarLinks: {
      'Академічний стиль': 'register',
      // 'Художня проза', 'Повне розуміння', 'Рівень носія' — профіційні мілстоуни
    },
  },
];

// ── LocalStorage helpers ──────────────────────────────────────

function _lsKey(base: string): string {
  const lang = _learnLang();
  return lang === 'en' || lang === 'ua' ? base : `${base}_${lang}`;
}

function _loadSnapshots(): PaceSnapshot[] {
  try {
    return JSON.parse(localStorage.getItem(_lsKey('lp_pace_snapshots')) ?? '[]');
  } catch {
    return [];
  }
}

function _saveSnapshot(knownCount: number): void {
  const today = new Date().toISOString().slice(0, 10);
  const snaps = _loadSnapshots().filter((s) => s.date !== today);
  snaps.push({ date: today, count: knownCount });
  const kept = snaps.sort((a, b) => a.date.localeCompare(b.date)).slice(-14);
  try {
    localStorage.setItem(_lsKey('lp_pace_snapshots'), JSON.stringify(kept));
  } catch {
    /* quota */
  }
}

function _loadCompletionDates(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(_lsKey('lp_completion_dates')) ?? '{}');
  } catch {
    return {};
  }
}

function _saveCompletionDates(dates: Record<string, string>): void {
  try {
    localStorage.setItem(_lsKey('lp_completion_dates'), JSON.stringify(dates));
  } catch {
    /* quota */
  }
}

function _formatDate(iso: string): string {
  const d = new Date(iso);
  const locale = getLang() === 'en' ? 'en-US' : getLang() === 'es' ? 'es-ES' : 'uk-UA';
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Navigate to CEFR level ────────────────────────────────────

function _navigateToLevel(level: CefrLevel): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (sel) {
    sel.value = `cefr-${level}`;
    sel.dispatchEvent(new Event('change'));
  }
  openPage('cards' as Parameters<typeof openPage>[0]);
  closePage();
}

// ── Render ────────────────────────────────────────────────────

export function renderLearningPath(): void {
  const el = document.getElementById('lp-content') as HTMLElement | null;
  if (!el) return;

  const lang = _learnLang();
  const knownSet = _activeKnownSet();
  const allWords = W as unknown as WordEntry[];
  const words = _filterWordsForLang(allWords, lang);

  // Track daily pace snapshot
  _saveSnapshot(knownSet.size);

  const stats = computeCefrStats(knownSet, words);
  const currentLevel = findCurrentLevel(stats);
  const snapshots = _loadSnapshots();
  const pace = computePersonalPace(snapshots);
  const todayStr = new Date().toISOString().slice(0, 10);
  const lv = getLevel(knownSet.size);
  const todayWords = filterDailyWords(currentLevel, knownSet, words);

  // Save completion dates for newly-completed levels
  const prevDates = _loadCompletionDates();
  const newDates = updateCompletionDates(stats, prevDates, todayStr);
  if (JSON.stringify(newDates) !== JSON.stringify(prevDates)) _saveCompletionDates(newDates);

  // Daily challenge section
  const dailyChallengeHtml =
    todayWords.length > 0
      ? `
    <div class="lp-section">
      <div class="lp-section-title">📅 ${t('lp.todayPlan')} ${currentLevel}</div>
      <div class="lp-day-words">
        ${todayWords
          .map(
            (w) => `
          <div class="lp-word-chip">
            <span class="lp-word">${w[0]}</span>
            <span class="lp-transl">${_getTranslation(w, lang)}</span>
          </div>
        `,
          )
          .join('')}
      </div>
      <button class="lp-start-btn" data-lp-level="${currentLevel}">
        📚 ${t('lp.learnWordsNow')} ${currentLevel} ${t('lp.now')}
      </button>
    </div>
  `
      : `
    <div class="lp-section lp-complete">
      <div class="lp-section-title">🏆 ${t('lp.levelWord')} ${currentLevel} ${t('lp.completedExcl')}</div>
      <p>${t('lp.allLearned')}</p>
    </div>
  `;

  // CEFR progress rows
  const progressHtml = PLANS.map((plan) => {
    const s = stats[plan.level];
    const meta = CEFR_META[plan.level];
    const isCurrent = plan.level === currentLevel;
    const isComplete = s.pct >= 90;
    const compDate = newDates[plan.level];
    const remaining = s.total - s.known;
    const days = estimateDays(remaining, pace);
    const paceLabel =
      pace !== null && pace > 0
        ? `${t('lp.yourPace')} ${pace} ${t('lp.wordsPerDay')}`
        : t('lp.defaultPace');

    const skillsHtml = plan.skills
      .map((sk) => {
        const gid = plan.grammarLinks[sk];
        if (gid) {
          return `<span class="lp-skill-tag lp-skill-link" data-grammar="${gid}" title="${t('lp.openGrammar')}">✓ ${skillName(sk)} ↗</span>`;
        }
        return `<span class="lp-skill-tag">✓ ${skillName(sk)}</span>`;
      })
      .join('');

    const milestones = [25, 50, 75]
      .map((m) => `<div class="lp-milestone" style="left:${m}%"></div>`)
      .join('');

    const completionHtml =
      isComplete && compDate
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
  const totalWords = Object.values(stats).reduce((s, v) => s + v.total, 0);
  const overallPct = Math.round((totalKnown / totalWords) * 100);
  const paceDisplay =
    pace !== null && pace > 0
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
  el.querySelectorAll<HTMLButtonElement>('[data-lp-level]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lvl = btn.dataset.lpLevel as CefrLevel;
      _navigateToLevel(lvl);
    });
  });

  // Wire up grammar skill links
  el.querySelectorAll<HTMLElement>('.lp-skill-link').forEach((tag) => {
    tag.addEventListener('click', () => {
      const gid = tag.dataset.grammar!;
      jumpToGrammarRule(gid);
    });
  });
}

// ── Page open/close ───────────────────────────────────────────
export function openLearningPath(retriesLeft = 2): void {
  try {
    renderLearningPath();
  } catch (e) {
    console.error('[learning-path] render failed', e);
    // App state (e.g. state.known) may not be wired up yet right after a
    // page reload — retry shortly instead of leaving the overlay empty.
    if (retriesLeft > 0) setTimeout(() => openLearningPath(retriesLeft - 1), 200);
  }
}
