// Vymova — js/features/stats/stats-page.tsx
// Statistics overlay: progress, daily chart, heatmap, calendar, SRS forecast,
// mode accuracy, CEFR progress, leaderboard.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { today as todayDateStr, localDateStr } from '../../core/today.ts';
import {
  getDailyStats,
  getGameData,
  getModeStats,
  getModeAccuracy,
  getMistakes,
  getWeeklyTotal,
} from '../game/game.ts';
import { loadSRS } from '../../core/storage.ts';
import { t, getLang, wordsLabel, pluralLabel, monthNames, dowNames } from '../i18n.ts';
import { W } from '../../../data/words-data/words.js';
import { getCefrLevel } from '../../../data/cefr.ts';
import { Leaderboard } from '../leaderboard.tsx';
import { notifyAchievementsChange } from '../../../src/store.ts';
import { getKnownInLang, getActiveKnownByLang, getWordsForLang } from '../mode/mode-utils.ts';
import type { WordEntry } from '../../../src/types.js';
import { InfoIcon, InfoNote } from '../info-icon.tsx';
import { MistakeReview } from '../mistake-review.tsx';
import { renderWeakWords } from '../../modes/catpairs.tsx';
import { setStatsBumpTick, refreshStatsPage, openStats, closeStats } from './stats-trigger.ts';

export { refreshStatsPage, openStats, closeStats };

const _p2 = (n: number): string => (n < 10 ? '0' + n : '' + n);

const statsSectionCls = 'stats-section mb-[22px] [border-bottom:var(--stats-section-border)]';
const statsSectionTitleCls =
  'stats-section-title mb-2.5 text-[0.72rem] font-semibold uppercase [letter-spacing:var(--stats-section-title-tracking)] text-[var(--section-title-color,var(--text3))] [@media(max-width:480px)]:!text-[0.82rem]';
const statsSectionTitleClsNoMb =
  'stats-section-title text-[0.72rem] font-semibold uppercase [letter-spacing:var(--stats-section-title-tracking)] text-[var(--section-title-color,var(--text3))] [@media(max-width:480px)]:!text-[0.82rem]';

function getBlockColor(pct: number): string {
  if (pct >= 80) return 'var(--success)';
  if (pct >= 50) return 'var(--accent2)';
  if (pct >= 20) return 'var(--accent)';
  return 'var(--text3)';
}

// One hue (the active theme's accent), ramped light→dark by activity level
// — same technique as the CEFR badges — instead of a hardcoded GitHub-green
// scale that only had a body.dark override and looked pasted-on under all
// 14 custom themes. Self-adapts to light/dark since it's mixed with --bg.
// Shared by the heatmap (below) and the monthly calendar, which reuses the
// same hm-l0..hm-l4 level vocabulary for its own day cells.
const HM_LEVEL_BG = [
  'bg-border',
  'bg-[color-mix(in_srgb,var(--accent)_30%,var(--bg))]',
  'bg-[color-mix(in_srgb,var(--accent)_55%,var(--bg))]',
  'bg-[color-mix(in_srgb,var(--accent)_78%,var(--bg))]',
  'bg-accent',
];

// ── Heatmap ──────────────────────────────────────────────────────
type HeatDay = { ds: string; n: number; lvl: number };

// Cap the heatmap at how far back the user actually has activity, instead
// of always drawing the full 52-week grid — a 3-week-old account otherwise
// shows 49 weeks of empty cells before any real data appears.
const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;

function computeHeatmap(): HeatDay[][] {
  const daily = getDailyStats();
  const today = new Date();
  const activeDates = Object.keys(daily).filter((k) => DATE_KEY_RE.test(k) && daily[k] > 0);
  let weeksBack = 51;
  if (activeDates.length > 0) {
    const earliest = activeDates.reduce((a, b) => (a < b ? a : b));
    const daysSince = Math.floor(
      (today.getTime() - new Date(earliest).getTime()) / (24 * 60 * 60 * 1000),
    );
    weeksBack = Math.min(51, Math.max(3, Math.ceil(daysSince / 7)));
  }
  const weeks: { ds: string; n: number }[][] = [];
  for (let w = weeksBack; w >= 0; w--) {
    const week: { ds: string; n: number }[] = [];
    for (let d = 0; d <= 6; d++) {
      const dt = new Date(today);
      dt.setDate(dt.getDate() - (w * 7 + (6 - d)));
      const ds = localDateStr(dt);
      week.push({ ds, n: daily[ds] ?? 0 });
    }
    weeks.push(week);
  }
  let maxN = 1;
  weeks.forEach((wk) =>
    wk.forEach((day) => {
      if (day.n > maxN) maxN = day.n;
    }),
  );
  return weeks.map((wk) =>
    wk.map((day) => ({
      ...day,
      lvl:
        day.n === 0
          ? 0
          : day.n < maxN * 0.25
            ? 1
            : day.n < maxN * 0.5
              ? 2
              : day.n < maxN * 0.75
                ? 3
                : 4,
    })),
  );
}

// ── Hourly ───────────────────────────────────────────────────────
type HourBar = { h: number; n: number; pct: number; color: string };

function computeHourly(): { bars: HourBar[]; bestLabel: string } {
  const daily = getDailyStats();
  const hours = Array.from({ length: 24 }, (_, h) => daily['h' + h] ?? 0);
  const maxH = Math.max(...hours) || 1;
  const bestH = hours.indexOf(Math.max(...hours));
  const bars = hours.map((n, h) => {
    const pct = Math.round((n / maxH) * 100);
    const isNight = h >= 22 || h < 6,
      isMorning = h >= 6 && h < 12;
    const color = isNight ? 'var(--text3)' : isMorning ? 'var(--accent2)' : 'var(--accent)';
    return { h, n, pct, color };
  });
  let bestLabel = '';
  if (hours[bestH] > 0) {
    const parts = [t('stats.night'), t('stats.morning'), t('stats.day'), t('stats.evening')];
    const tod =
      bestH >= 22 || bestH < 6
        ? parts[0]
        : bestH < 12
          ? parts[1]
          : bestH < 18
            ? parts[2]
            : parts[3];
    bestLabel = `${t('stats.bestTimeLabel')}: ${bestH}:00 (${tod})`;
  }
  return { bars, bestLabel };
}

// ── Monthly calendar ─────────────────────────────────────────────
type CalCell = { d: number; ds: string; n: number; lvl: number; isToday: boolean } | null;

function computeMonthCal(year: number, month: number): { cells: CalCell[]; summary: string } {
  const daily = getDailyStats();
  const todayStr = todayDateStr();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const cells: CalCell[] = Array(startDow).fill(null);
  let monthTotal = 0,
    maxN = 1;
  const raw: { d: number; ds: string; n: number }[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${year}-${_p2(month + 1)}-${_p2(d)}`;
    const n = daily[ds] ?? 0;
    if (n > maxN) maxN = n;
    monthTotal += n;
    raw.push({ d, ds, n });
  }
  raw.forEach((c) => {
    const lvl =
      c.n === 0 ? 0 : c.n < maxN * 0.25 ? 1 : c.n < maxN * 0.5 ? 2 : c.n < maxN * 0.75 ? 3 : 4;
    cells.push({ ...c, lvl, isToday: c.ds === todayStr });
  });
  const summary =
    monthTotal > 0
      ? `${t('stats.totalForMonth')}: ${monthTotal} ${wordsLabel(monthTotal)}`
      : t('stats.noWordsThisMonth');
  return { cells, summary };
}

// ── Week-over-week comparison ─────────────────────────────────
function computeWeekComparisonPct(): number | null {
  const daily = getDailyStats();
  const now = new Date();
  let thisWeek = 0,
    lastWeek = 0;
  for (let i = 0; i < 14; i++) {
    const dt = new Date(now);
    dt.setDate(dt.getDate() - i);
    const n = daily[localDateStr(dt)] ?? 0;
    if (i < 7) thisWeek += n;
    else lastWeek += n;
  }
  if (lastWeek === 0) return null;
  return Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
}

// ── Daily chart ──────────────────────────────────────────────────
type ChartDay = { date: string; label: string; val: number; isToday: boolean };

function computeChartDays(chartDays: number): ChartDay[] {
  const daily = getDailyStats();
  const today = todayDateStr();
  const days: ChartDay[] = [];
  for (let i = chartDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = localDateStr(d);
    const lbl = d.getDate() + '/' + (d.getMonth() + 1);
    days.push({ date: ds, label: lbl, val: daily[ds] || 0, isToday: ds === today });
  }
  return days;
}

// ── SRS forecast ───────────────────────────────────────────────
type SrsBar = { date: string; cnt: number; label: string; pct: number; isToday: boolean };

function computeSrsForecast(): { totalDue: number; bars: SrsBar[] } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const srsData = loadSRS();
  const counts: { date: string; cnt: number; label: string }[] = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const dateStr = localDateStr(d);
    const cnt = Object.values(srsData).filter((s: any) => s.due === dateStr).length;
    counts.push({
      date: dateStr,
      cnt,
      label:
        i === 0
          ? t('stats.todayCap')
          : i === 1
            ? t('stats.tomorrow')
            : d.toLocaleDateString(getLang() === 'en' ? 'en' : getLang() === 'es' ? 'es' : 'uk', {
                day: 'numeric',
                month: 'short',
              }),
    });
  }
  const maxCnt = Math.max(...counts.map((c) => c.cnt)) || 1;
  const totalDue = counts.reduce((a, c) => a + c.cnt, 0);
  const bars = counts.map((c) => ({
    ...c,
    pct: Math.max(Math.round((c.cnt / maxCnt) * 100), 2),
    isToday: c.label === t('stats.todayCap'),
  }));
  return { totalDue, bars };
}

// ── Mode accuracy ─────────────────────────────────────────────
type ModeRow = {
  key: string;
  icon: string;
  label: string;
  pct: number | null;
  totText: string;
  sessions: number;
  barColor: string;
};

function computeModeAccuracy(): ModeRow[] {
  const acc = getModeAccuracy();
  const mStats = getModeStats();
  const modes = [
    { key: 'quiz', label: t('mode.quiz'), icon: '🧠' },
    { key: 'write', label: t('mode.write'), icon: '✍️' },
    { key: 'listen', label: t('mode.listen'), icon: '🔊' },
    { key: 'fib', label: t('mode.fib'), icon: '✏️' },
    { key: 'lesson', label: t('mode.lesson'), icon: '📚' },
    { key: 'tempo', label: t('mode.tempo'), icon: '⚡' },
    { key: 'scramble', label: t('mode.scramble'), icon: '🔀' },
    { key: 'letters', label: t('mode.letters'), icon: '🔤' },
    { key: 'adaptive-quiz', label: t('mode.adaptiveQuiz'), icon: '🎯' },
    { key: 'oddone', label: t('mode.oddone'), icon: '🧐' },
    { key: 'sentbuild', label: t('mode.sentbuild'), icon: '🧱' },
    { key: 'errorhunt', label: t('mode.errorhunt'), icon: '🕵️' },
    { key: 'assoc', label: t('mode.assoc'), icon: '🔗' },
    { key: 'wordhint', label: t('mode.wordhint'), icon: '💡' },
    { key: 'shadow', label: t('mode.shadow'), icon: '🎙️' },
    { key: 'ghost', label: t('mode.ghost'), icon: '👻' },
    { key: 'dictation', label: t('mode.dictation'), icon: '🎧' },
    { key: 'idiom-quiz', label: t('mode.idiomQuiz'), icon: '💬' },
    { key: 'grammar-quiz', label: t('mode.grammarQuiz'), icon: '📐' },
  ];
  const rows: ModeRow[] = [];
  modes.forEach((m) => {
    const a = acc[m.key];
    const sessions = mStats[m.key] ?? 0;
    if (!a && sessions === 0) return;
    const total = (a?.ok ?? 0) + (a?.err ?? 0);
    const pct = total > 0 ? Math.round((a!.ok / total) * 100) : null;
    const barColor =
      pct === null
        ? 'var(--border)'
        : pct >= 80
          ? 'var(--success)'
          : pct >= 60
            ? 'var(--accent2)'
            : 'var(--danger)';
    const totText = total > 0 ? `${a?.ok ?? 0}✓ ${a?.err ?? 0}✗` : '';
    rows.push({ key: m.key, icon: m.icon, label: m.label, pct, totText, sessions, barColor });
  });
  return rows;
}

// ── CEFR stats ─────────────────────────────────────────────────
type CefrRow = {
  level: string;
  desc: string;
  color: string;
  known: number;
  total: number;
  pct: number;
};

// One hue (the theme's accent), ramped light→dark by CEFR difficulty — a
// sequential encoding instead of six unrelated hardcoded hex colors, so it
// stays legible and on-brand across every custom theme.
const CEFR_RAMP: Record<'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2', string> = {
  A1: 'color-mix(in srgb, var(--accent) 35%, var(--text3))',
  A2: 'color-mix(in srgb, var(--accent) 50%, var(--text3))',
  B1: 'color-mix(in srgb, var(--accent) 65%, var(--text3))',
  B2: 'color-mix(in srgb, var(--accent) 80%, var(--text3))',
  C1: 'color-mix(in srgb, var(--accent) 92%, var(--text3))',
  C2: 'var(--accent)',
};

function computeCefrStats(): CefrRow[] {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
  const colors = CEFR_RAMP;
  const descs = {
    A1: t('cefr.A1'),
    A2: t('cefr.A2'),
    B1: t('cefr.B1'),
    B2: t('cefr.B2'),
    C1: t('cefr.C1'),
    C2: t('cefr.C2'),
  };
  const knownSet = getActiveKnownByLang();
  const words = getWordsForLang(W as unknown as WordEntry[]);
  const stats: Record<string, { known: number; total: number }> = {};
  levels.forEach((l) => {
    stats[l] = { known: 0, total: 0 };
  });
  words.forEach((w) => {
    const lvl = getCefrLevel(w[0]);
    stats[lvl].total++;
    if (knownSet.has(w[0])) stats[lvl].known++;
  });
  return levels.map((l) => {
    const s = stats[l];
    const pct = s.total > 0 ? Math.round((s.known / s.total) * 100) : 0;
    return { level: l, desc: descs[l], color: colors[l], known: s.known, total: s.total, pct };
  });
}

// ── Blocks ─────────────────────────────────────────────────────
type BlockRow = { label: string; pct: number; color: string };

function computeBlocks(): BlockRow[] {
  const blockSize = 500;
  const wArr = getWordsForLang(W as unknown as WordEntry[]);
  const knownSet = getActiveKnownByLang();
  const blocks: BlockRow[] = [];
  for (let s = 0; s < wArr.length; s += blockSize) {
    let end = s + blockSize;
    if (end < wArr.length && wArr.length - end < blockSize) end = wArr.length;
    const slice = wArr.slice(s, end);
    const knownInBlock = slice.filter((w) => knownSet.has(w[0])).length;
    const pct = Math.round((knownInBlock / slice.length) * 100);
    blocks.push({
      label: s + 1 + '–' + Math.min(end, wArr.length),
      pct,
      color: getBlockColor(pct),
    });
    if (end >= wArr.length) break;
  }
  return blocks;
}

export function StatsPage(): ReactElement {
  const [chartDays, setChartDays] = useState(14);
  const [calYear, setCalYear] = useState(() => new Date().getFullYear());
  const [calMonth, setCalMonth] = useState(() => new Date().getMonth());
  const [, setTick] = useState(0);
  const [weakWordsInfoOpen, setWeakWordsInfoOpen] = useState(false);
  const [mistakeReviewOpen, setMistakeReviewOpen] = useState(false);
  const [pulling, setPulling] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStatsBumpTick(() => {
      setTick((x) => x + 1);
      try {
        notifyAchievementsChange();
      } catch (e) {}
      // Weak words is rendered via legacy imperative DOM writes (catpairs.tsx),
      // not React state, so it wouldn't otherwise pick up changes made
      // elsewhere on the page (e.g. clearing mistakes in Mistake Review)
      // until the whole panel was closed and reopened.
      try {
        renderWeakWords();
      } catch (e) {}
    });
    return () => {
      setStatsBumpTick(null);
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    let startY = 0;
    const onTouchStart = (e: TouchEvent): void => {
      startY = panel.scrollTop === 0 ? e.touches[0].clientY : 0;
    };
    const onTouchEnd = (e: TouchEvent): void => {
      if (!startY) return;
      const dy = e.changedTouches[0].clientY - startY;
      if (dy > 60) {
        refreshStatsPage();
        setPulling(true);
        setTimeout(() => setPulling(false), 700);
      }
      startY = 0;
    };
    panel.addEventListener('touchstart', onTouchStart, { passive: true });
    panel.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      panel.removeEventListener('touchstart', onTouchStart);
      panel.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  const [lbKey, setLbKey] = useState(0);

  const gd = getGameData();
  const weeklyTotal = getWeeklyTotal();
  const weekCmpPct = computeWeekComparisonPct();
  const mistakeCount = Object.keys(getMistakes()).length;
  const knownCount = getKnownInLang();
  const totalWords = getWordsForLang(W as unknown as WordEntry[]).length;
  // knownCount counts every known word in the learn language regardless of
  // the know-language pairing, but totalWords is pair-filtered (learn ∩
  // know) — if the know-language's table is smaller (e.g. a partially
  // translated language), totalWords can shrink below knownCount and this
  // would otherwise show over 100%.
  const pctKnown = Math.min(100, Math.round((knownCount / totalWords) * 100));

  const chartData = computeChartDays(chartDays);
  const maxVal = Math.max(...chartData.map((d) => d.val)) || 1;
  const hasChartData = chartData.some((d) => d.val > 0);
  const sm = chartDays > 14;
  const barH = chartDays <= 14 ? 60 : chartDays <= 30 ? 40 : 24;

  const heatmap = computeHeatmap();
  const hourly = computeHourly();
  const calData = computeMonthCal(calYear, calMonth);
  const srsFc = computeSrsForecast();
  const modeRows = computeModeAccuracy();
  const cefrRows = computeCefrStats();
  const blocks = computeBlocks();

  function changeMonth(delta: number): void {
    let y = calYear,
      m = calMonth + delta;
    if (m < 0) {
      m = 11;
      y--;
    } else if (m > 11) {
      m = 0;
      y++;
    }
    setCalYear(y);
    setCalMonth(m);
  }

  function refreshLeaderboard(): void {
    setLbKey((k) => k + 1);
  }

  return (
    <div
      className="stats-panel m-auto max-h-[calc(100vh-32px)] w-full max-w-[560px] overflow-y-auto overflow-x-hidden rounded-[16px] bg-[var(--stats-panel-bg)] px-5 pb-6 pt-[22px] shadow-[var(--stats-panel-shadow)] [border:var(--stats-panel-border)] [@media(max-width:480px)]:![padding:16px_14px]"
      ref={panelRef}
    >
      {pulling && (
        <div className="stats-pull-indicator animate-[spinOnce_0.6s_ease] pt-1.5 text-center text-[1.2rem] text-accent">
          ↻
        </div>
      )}
      <div className="stats-header mb-[18px] flex items-center justify-between">
        <div
          className="stats-title text-[1.05rem] font-semibold text-[var(--stats-title-color)] [font-family:var(--stats-title-font)] [@media(max-width:480px)]:!text-[1rem]"
          data-i18n="stats.title"
        >
          {t('stats.title')}
        </div>
        <button
          className="stats-close cursor-pointer border-none bg-transparent text-[20px] leading-none text-text3 hover:text-text"
          id="stats-close"
          onClick={closeStats}
          aria-label={t('common.close')}
        >
          ✕
        </button>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.overallProgress"
        >
          {t('stats.overallProgress')}
        </div>
        <div className="stats-summary grid grid-cols-4 gap-2.5 [@media(max-width:480px)]:!grid-cols-2 [@media(max-width:480px)]:!gap-2">
          <div className="stat-card flex flex-col items-center justify-center rounded-[var(--stat-card-radius)] border border-[var(--stat-card-border)] bg-[var(--stat-card-bg)] px-2.5 pb-3 pt-3.5 text-center [@media(max-width:480px)]:![padding:10px_8px]">
            <span className="stat-card-icon ic-accent mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[0.86rem]">
              📖
            </span>
            <div className="sv text-2xl font-bold leading-[1.15] text-[var(--sv-color)] [@media(max-width:480px)]:!text-[1.4rem]" id="st-known">
              {knownCount}
            </div>
            <div className="sl mt-0.5 text-[0.7rem] text-text2" data-i18n="stats.wordsLearned">
              {t('stats.wordsLearned')}
            </div>
          </div>
          <div className="stat-card flex flex-col items-center justify-center rounded-[var(--stat-card-radius)] border border-[var(--stat-card-border)] bg-[var(--stat-card-bg)] px-2.5 pb-3 pt-3.5 text-center [@media(max-width:480px)]:![padding:10px_8px]">
            <span className="stat-card-icon ic-success mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--success)_15%,transparent)] text-[0.86rem]">
              🎯
            </span>
            <div className="sv text-2xl font-bold leading-[1.15] text-[var(--sv-color)] [@media(max-width:480px)]:!text-[1.4rem]" id="st-pct">
              {pctKnown}%
            </div>
            <div className="sl mt-0.5 text-[0.7rem] text-text2" data-i18n="stats.ofAllWords">
              {t('stats.ofAllWords')}
            </div>
          </div>
          <div className="stat-card flex flex-col items-center justify-center rounded-[var(--stat-card-radius)] border border-[var(--stat-card-border)] bg-[var(--stat-card-bg)] px-2.5 pb-3 pt-3.5 text-center [@media(max-width:480px)]:![padding:10px_8px]">
            <div className="sv text-2xl font-bold leading-[1.15] text-[var(--sv-color)] [@media(max-width:480px)]:!text-[1.4rem]" id="st-streak">
              {gd.streak || 0}
            </div>
            <div className="sl mt-0.5 text-[0.7rem] text-text2" data-i18n="stats.daysStreak">
              {t('stats.daysStreak')}
            </div>
            {(gd.maxStreak ?? 0) > 0 && (
              <div className="stat-card-sub mt-0.5 text-[0.7rem] leading-[1.3] text-text3">
                {t('stats.personalBest', { n: gd.maxStreak ?? 0 })}
              </div>
            )}
          </div>
          <div className="stat-card flex flex-col items-center justify-center rounded-[var(--stat-card-radius)] border border-[var(--stat-card-border)] bg-[var(--stat-card-bg)] px-2.5 pb-3 pt-3.5 text-center [@media(max-width:480px)]:![padding:10px_8px]">
            <div className="sv text-2xl font-bold leading-[1.15] text-[var(--sv-color)] [@media(max-width:480px)]:!text-[1.4rem]" id="st-week">
              {weeklyTotal}
            </div>
            <div className="sl mt-0.5 text-[0.7rem] text-text2" data-i18n="stats.weekWordsLabel">
              {t('stats.weekWordsLabel')}
            </div>
            {weekCmpPct !== null && (
              <div className="stat-card-sub mt-0.5 text-[0.7rem] leading-[1.3] text-text3">
                {t('stats.vsLastWeek', { pct: (weekCmpPct >= 0 ? '+' : '') + weekCmpPct + '%' })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={statsSectionCls}>
        <div className={statsSectionTitleCls}>
          <span data-i18n="stats.perDayTitle">{t('stats.perDayTitle')}</span>{' '}
          <span id="chart-period-label">
            {t('stats.perDayCount', { n: chartDays, unit: pluralLabel('common_day', chartDays) })}
          </span>
        </div>
        <div className="chart-period-btns mb-2.5 mt-2 flex w-full gap-1.5" id="chart-period-btns">
          {[14, 30, 90].map((d) => (
            <button
              key={d}
              className={
                'chart-period-btn flex-1 cursor-pointer rounded-[10px] border border-border bg-[var(--card-bg)] px-2 py-1.5 text-[0.8rem] text-text2 transition-[background,color] duration-150' +
                (chartDays === d ? ' active border-accent bg-accent text-white' : '')
              }
              data-days={d}
              onClick={() => setChartDays(d)}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="chart-wrap rounded-[10px] bg-bg px-2.5 pb-2 pt-3.5">
          <div
            className="chart-bars flex h-20 items-end justify-stretch gap-1"
            id="chart-bars"
          >
            {!hasChartData ? (
              <div
                className="chart-empty w-full self-center px-0 py-5 text-center text-[0.82rem] text-text3"
                dangerouslySetInnerHTML={{ __html: t('stats.noData') }}
              />
            ) : (
              chartData.map((d) => {
                const h = Math.round((d.val / maxVal) * barH);
                // Read the day-of-month straight from the YYYY-MM-DD string
                // instead of `new Date(d.date).getDate()` — d.date is a
                // local calendar date, but re-parsing it with `new Date()`
                // treats it as UTC midnight, which can read back as the
                // wrong day depending on the browser's timezone.
                const showLabel =
                  !sm ||
                  d.isToday ||
                  d.date.endsWith('-01') ||
                  Number(d.date.slice(8, 10)) % (chartDays <= 30 ? 5 : 15) === 0;
                const smallText = sm ? 'text-[7px]' : 'text-[9px]';
                return (
                  <div
                    className={
                      'chart-col flex min-w-0 flex-1 flex-col items-center' +
                      (sm ? ' chart-col-sm gap-px' : ' gap-[3px]')
                    }
                    key={d.date}
                  >
                    {d.val > 0 ? (
                      <div className={'chart-val font-semibold text-text2 ' + smallText}>
                        {d.val}
                      </div>
                    ) : (
                      <div
                        className={'chart-val font-semibold text-text2 ' + smallText}
                        style={{ visibility: 'hidden' }}
                      >
                        0
                      </div>
                    )}
                    <div className="chart-bar-wrap flex h-16 w-full items-end">
                      <div
                        className={
                          'chart-bar min-h-[2px] w-full rounded-t-[3px] bg-accent opacity-85 transition-[height] duration-300' +
                          (d.isToday ? ' today bg-accent2 opacity-100' : '')
                        }
                        style={{ height: h }}
                      />
                    </div>
                    <div className={'chart-label whitespace-nowrap text-center text-text3 ' + smallText}>
                      {d.isToday && !sm ? t('stats.today') : showLabel ? d.label : ''}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.yearActivity"
        >
          {t('stats.yearActivity')}
        </div>
        <div
          style={{ fontSize: '.68rem', color: 'var(--text3)', marginBottom: 6 }}
          data-i18n="stats.yearActivityDesc"
        >
          {t('stats.yearActivityDesc')}
        </div>
        <div id="heatmap-wrap" style={{ overflowX: 'auto', paddingBottom: 4 }}>
          <div id="heatmap" style={{ display: 'flex', gap: 2, minWidth: 'max-content' }}>
            {heatmap.map((wk, wi) => (
              <div className="hm-week flex flex-col gap-0.5" key={wi}>
                {wk.map((day, di) => (
                  <div
                    key={di}
                    className={`hm-day hm-l${day.lvl} h-[11px] w-[11px] cursor-default rounded-[2px] hover:opacity-70 ${HM_LEVEL_BG[day.lvl]}`}
                    title={`${day.ds}: ${day.n} ${wordsLabel(day.n)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div
            className={statsSectionTitleClsNoMb}
            style={{ marginBottom: 0 }}
            data-i18n="stats.monthlyView"
          >
            {t('stats.monthlyView')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              id="cal-prev"
              className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
              style={{ padding: '3px 10px', fontSize: 13 }}
              onClick={() => changeMonth(-1)}
            >
              ←
            </button>
            <span
              id="cal-month-label"
              style={{
                fontSize: '.82rem',
                fontWeight: 600,
                color: 'var(--text)',
                minWidth: 110,
                textAlign: 'center',
              }}
            >
              {monthNames()[calMonth]} {calYear}
            </span>
            <button
              id="cal-next"
              className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
              style={{ padding: '3px 10px', fontSize: 13 }}
              onClick={() => changeMonth(1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          className="cal-header-grid mb-1 grid grid-cols-[repeat(7,minmax(0,48px))] justify-center gap-0.5"
          id="cal-headers"
        >
          {dowNames().map((d, i) => (
            <div
              className="cal-dow px-0 py-0.5 text-center text-[0.6rem] font-bold tracking-[0.04em] text-text3"
              key={i}
            >
              {d}
            </div>
          ))}
        </div>
        <div
          className="cal-day-grid grid grid-cols-[repeat(7,minmax(0,48px))] justify-center gap-[3px]"
          id="cal-grid"
        >
          {calData.cells.map((c, i) =>
            c === null ? (
              <div
                className="cal-day cal-empty invisible relative flex aspect-square max-h-12 max-w-12 flex-col items-center justify-center pointer-events-none rounded-[6px] text-[0.7rem]"
                key={i}
              />
            ) : (
              <div
                className={`cal-day hm-l${c.lvl}${c.isToday ? ' cal-today !shadow-[0_0_0_2px_var(--accent)]' : ''} relative flex aspect-square max-h-12 max-w-12 cursor-default flex-col items-center justify-center rounded-[6px] text-[0.7rem] transition-transform duration-100 hover:z-[1] hover:scale-[1.15] ${HM_LEVEL_BG[c.lvl]}`}
                title={`${c.ds}: ${c.n} ${wordsLabel(c.n)}`}
                key={i}
              >
                <span className="cal-day-num font-semibold leading-none">{c.d}</span>
                {c.n > 0 && (
                  <span className="cal-day-cnt mt-px text-[0.52rem] leading-none opacity-85">
                    {c.n}
                  </span>
                )}
              </div>
            ),
          )}
        </div>
        <div
          id="cal-summary"
          style={{ fontSize: '.75rem', color: 'var(--text2)', marginTop: 8, textAlign: 'right' }}
        >
          {calData.summary}
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.bestTimeTitle"
        >
          {t('stats.bestTimeTitle')}
        </div>
        <div
          id="hourly-chart"
          style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 48, marginBottom: 4 }}
        >
          {hourly.bars.map((b) => (
            <div
              key={b.h}
              style={{
                flex: 1,
                background: b.color,
                height: `${b.pct}%`,
                borderRadius: '2px 2px 0 0',
                opacity: b.n ? 1 : 0.2,
              }}
              title={`${b.h}:00 — ${b.n} ${wordsLabel(b.n)}`}
            />
          ))}
        </div>
        <div id="best-hour" style={{ fontSize: '.75rem', color: 'var(--text2)' }}>
          {hourly.bestLabel}
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.blockProgress"
        >
          {t('stats.blockProgress')}
        </div>
        <div className="blocks-list flex flex-col gap-[7px]" id="blocks-list">
          {blocks.map((b) => (
            <div className="block-row flex items-center gap-2" key={b.label}>
              <div className="block-label w-20 shrink-0 text-[0.75rem] text-text2">{b.label}</div>
              <div className="block-track h-2 flex-1 overflow-hidden rounded-[10px] bg-border">
                <div
                  className="block-fill h-full rounded-[10px] transition-[width] duration-[400ms]"
                  style={{ width: `${b.pct}%`, background: b.color }}
                />
              </div>
              <div
                className="block-pct w-9 shrink-0 text-right text-[0.72rem] font-semibold text-text2"
                style={{ color: b.color }}
              >
                {b.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.srsForecastTitle"
        >
          {t('stats.srsForecastTitle')}
        </div>
        <div id="srs-forecast" className="srs-forecast mt-1.5">
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 8 }}>
            {t('stats.totalScheduled')}: {srsFc.totalDue} {t('stats.reviews')}
          </div>
          <div className="srs-fc-bars flex h-20 items-end gap-[3px]">
            {srsFc.bars.map((c) => (
              <div className="srs-fc-col flex min-w-0 flex-1 flex-col items-center" key={c.date}>
                <div className="srs-fc-bar-wrap flex w-full flex-1 items-end">
                  <div
                    className={
                      'srs-fc-bar min-h-[2px] w-full rounded-t-[3px] bg-[var(--srs-fc-bar-bg)] transition-[height] duration-[400ms]' +
                      (c.isToday
                        ? ' srs-fc-today !bg-accent shadow-[var(--srs-fc-today-shadow)]'
                        : '')
                    }
                    style={{ height: `${c.pct}%` }}
                  />
                </div>
                <div className="srs-fc-cnt mt-0.5 min-h-[10px] text-[0.6rem] text-text3">
                  {c.cnt || ''}
                </div>
                <div className="srs-fc-lbl mt-px max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[0.55rem] text-text3">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={statsSectionCls}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div
            className={statsSectionTitleClsNoMb}
            style={{ marginBottom: 0 }}
            data-i18n="stats.weakWordsTitle"
          >
            {t('stats.weakWordsTitle')}
          </div>
          <InfoIcon
            open={weakWordsInfoOpen}
            onToggle={() => setWeakWordsInfoOpen((o) => !o)}
            label={t('stats.weakWordsInfo')}
          />
        </div>
        {weakWordsInfoOpen && <InfoNote>{t('stats.weakWordsInfoText')}</InfoNote>}
        <div
          id="weak-words-list"
          style={{ fontSize: '.8rem', color: 'var(--text2)', marginTop: 8 }}
        />
        {mistakeCount > 0 && (
          <button
            className="backup-btn"
            style={{ marginTop: 10 }}
            onClick={() => setMistakeReviewOpen(true)}
          >
            {t('mistakes.reviewBtn', { n: mistakeCount })}
          </button>
        )}
        {mistakeReviewOpen && (
          <MistakeReview
            onClose={() => {
              setMistakeReviewOpen(false);
              // Words cleared during review affect both the mistake count
              // above and the weak-words list below — refresh so neither
              // shows stale data now that the modal is gone.
              refreshStatsPage();
            }}
          />
        )}
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.modeAccuracyTitle"
        >
          {t('stats.modeAccuracyTitle')}
        </div>
        <div id="mode-accuracy-list">
          {modeRows.length === 0 ? (
            <div
              style={{
                fontSize: '.8rem',
                color: 'var(--text3)',
                textAlign: 'center',
                padding: '8px 0',
              }}
            >
              {t('stats.noModeData')}
            </div>
          ) : (
            modeRows.map((m) => (
              <div style={{ marginBottom: 10 }} key={m.key}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--text)' }}>
                    {m.icon} {m.label}
                  </span>
                  <span style={{ fontSize: '.75rem', color: 'var(--text2)' }}>
                    {m.totText}
                    {m.sessions ? ` · ${m.sessions} ${t('stats.sessionsAbbr')}` : ''}
                  </span>
                  <span
                    style={{
                      fontSize: '.82rem',
                      fontWeight: 700,
                      color: m.barColor,
                      minWidth: 36,
                      textAlign: 'right',
                    }}
                  >
                    {m.pct !== null ? `${m.pct}%` : '—'}
                  </span>
                </div>
                <div
                  style={{
                    height: 6,
                    background: 'var(--border)',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${m.pct ?? 0}%`,
                      background: m.barColor,
                      borderRadius: 3,
                      transition: 'width .4s',
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          className={statsSectionTitleCls}
          data-i18n="stats.cefrProgressTitle"
        >
          {t('stats.cefrProgressTitle')}
        </div>
        <div id="cefr-stats-list">
          {cefrRows.map((r) => (
            <div style={{ marginBottom: 10 }} key={r.level}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: '.8rem', fontWeight: 700 }}>
                  <span
                    style={{
                      background: `color-mix(in srgb, ${r.color} 15%, transparent)`,
                      color: r.color,
                      border: `1.5px solid color-mix(in srgb, ${r.color} 35%, transparent)`,
                      borderRadius: 6,
                      padding: '1px 6px',
                      fontSize: '.72rem',
                      marginRight: 6,
                    }}
                  >
                    {r.level}
                  </span>
                  {r.desc}
                </span>
                <span style={{ fontSize: '.75rem', color: 'var(--text2)' }}>
                  {r.known} / {r.total} ({r.pct}%)
                </span>
              </div>
              <div
                style={{
                  height: 5,
                  background: 'var(--border)',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${r.pct}%`,
                    background: r.color,
                    borderRadius: 3,
                    transition: 'width .5s',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={statsSectionCls}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div
            className={statsSectionTitleClsNoMb}
            style={{ margin: 0 }}
            data-i18n="stats.leaderboardTitle"
          >
            {t('stats.leaderboardTitle')}
          </div>
          <button
            id="lb-refresh-btn"
            style={{
              padding: '4px 10px',
              borderRadius: 8,
              border: '1.5px solid var(--border)',
              background: 'none',
              color: 'var(--text3)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.72rem',
            }}
            onClick={refreshLeaderboard}
          >
            {t('stats.refresh')}
          </button>
        </div>
        <div id="lb-container">
          <Leaderboard refreshKey={lbKey} />
        </div>
      </div>
    </div>
  );
}
