// Vymova — js/features/stats-page.tsx
// Statistics overlay: progress, daily chart, heatmap, calendar, SRS forecast,
// mode accuracy, CEFR progress, leaderboard.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { today as todayDateStr } from '../core/today.ts';
import { getDailyStats, getGameData, getModeStats, getModeAccuracy, getMistakes, getWeeklyTotal } from './game.ts';
import { loadSRS } from '../core/storage.ts';
import { t, getLang, wordsLabel, pluralLabel, monthNames, dowNames } from './i18n.ts';
import { W } from '../../data/words.js';
import { getCefrLevel } from '../../data/cefr.ts';
import { Leaderboard } from './leaderboard.tsx';
import { refreshAchievementsPage as renderAchievements } from './achievements-page.tsx';
import { closePage } from './sidebar.tsx';
import { getKnownInLang, getActiveKnownByLang, getWordsForLang } from './mode-utils.ts';
import type { WordEntry } from '../../src/types.js';
import { InfoIcon, InfoNote } from './info-icon.tsx';
import { MistakeReview } from './mistake-review.tsx';

const _p2 = (n: number): string => (n < 10 ? '0' + n : '' + n);

function getBlockColor(pct: number): string {
  if (pct >= 80) return '#27ae60';
  if (pct >= 50) return '#f39c12';
  if (pct >= 20) return '#3498db';
  return '#bdc3c7';
}

// ── Heatmap ──────────────────────────────────────────────────────
type HeatDay = { ds: string; n: number; lvl: number };

function computeHeatmap(): HeatDay[][] {
  const daily = getDailyStats();
  const today = new Date();
  const weeks: { ds: string; n: number }[][] = [];
  for (let w = 51; w >= 0; w--) {
    const week: { ds: string; n: number }[] = [];
    for (let d = 0; d <= 6; d++) {
      const dt = new Date(today);
      dt.setDate(dt.getDate() - (w * 7 + (6 - d)));
      const ds = dt.toISOString().slice(0, 10);
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
    const color = isNight ? '#5d6d7e' : isMorning ? '#f39c12' : 'var(--accent)';
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

// ── Daily chart ──────────────────────────────────────────────────
type ChartDay = { date: string; label: string; val: number; isToday: boolean };

function computeChartDays(chartDays: number): ChartDay[] {
  const daily = getDailyStats();
  const today = todayDateStr();
  const days: ChartDay[] = [];
  for (let i = chartDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
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
    const dateStr = d.toISOString().slice(0, 10);
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
  ];
  const rows: ModeRow[] = [];
  modes.forEach((m) => {
    const a = acc[m.key];
    const sessions = mStats[m.key] ?? 0;
    if (!a && sessions === 0) return;
    const total = (a?.ok ?? 0) + (a?.err ?? 0);
    const pct = total > 0 ? Math.round((a!.ok / total) * 100) : null;
    const barColor =
      pct === null ? 'var(--border)' : pct >= 80 ? '#27ae60' : pct >= 60 ? '#f39c12' : '#e74c3c';
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

function computeCefrStats(): CefrRow[] {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
  const colors = {
    A1: '#27ae60',
    A2: '#2ecc71',
    B1: '#d4ac0d',
    B2: '#e67e22',
    C1: '#e74c3c',
    C2: '#8e44ad',
  };
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

// ── Refresh hook (re-render trigger from outside) ───────────────
let _bumpTick: (() => void) | null = null;

export function refreshStatsPage(): void {
  _bumpTick?.();
}

export function openStats(): void {
  refreshStatsPage();
  const overlay = document.getElementById('stats-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    const panel = overlay.querySelector<HTMLElement>('.stats-panel');
    if (panel) {
      panel.classList.remove('slide-up');
      void panel.offsetWidth;
      panel.classList.add('slide-up');
    }
  }
}

export function closeStats(): void {
  const overlay = document.getElementById('stats-overlay');
  if (overlay && overlay.classList.contains('as-page')) {
    closePage();
    return;
  }
  if (overlay) overlay.style.display = 'none';
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
    _bumpTick = () => {
      setTick((x) => x + 1);
      try {
        renderAchievements();
      } catch (e) {}
    };
    return () => {
      _bumpTick = null;
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
  const mistakeCount = Object.keys(getMistakes()).length;
  const knownCount = getKnownInLang();
  const totalWords = getWordsForLang(W as unknown as WordEntry[]).length;
  const pctKnown = Math.round((knownCount / totalWords) * 100);

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
    <div className="stats-panel" ref={panelRef}>
      {pulling && <div className="stats-pull-indicator">↻</div>}
      <div className="stats-header">
        <div className="stats-title" data-i18n="stats.title">
          {t('stats.title')}
        </div>
        <button className="stats-close" id="stats-close" onClick={closeStats}>
          ✕
        </button>
      </div>

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.overallProgress">
          {t('stats.overallProgress')}
        </div>
        <div className="stats-summary">
          <div className="stat-card">
            <div className="sv" id="st-known">
              {knownCount}
            </div>
            <div className="sl" data-i18n="stats.wordsLearned">
              {t('stats.wordsLearned')}
            </div>
          </div>
          <div className="stat-card">
            <div className="sv" id="st-pct">
              {pctKnown}%
            </div>
            <div className="sl" data-i18n="stats.ofAllWords">
              {t('stats.ofAllWords')}
            </div>
          </div>
          <div className="stat-card">
            <div className="sv" id="st-streak">
              {gd.streak || 0}
            </div>
            <div className="sl" data-i18n="stats.daysStreak">
              {t('stats.daysStreak')}
            </div>
            {(gd.maxStreak ?? 0) > 0 && (
              <div className="stat-card-sub">
                {t('stats.personalBest', { n: gd.maxStreak ?? 0 })}
              </div>
            )}
          </div>
          <div className="stat-card">
            <div className="sv" id="st-week">
              {weeklyTotal}
            </div>
            <div className="sl" data-i18n="stats.weekWordsLabel">
              {t('stats.weekWordsLabel')}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-section-title">
          <span data-i18n="stats.perDayTitle">{t('stats.perDayTitle')}</span>{' '}
          <span id="chart-period-label">
            {t('stats.perDayCount', { n: chartDays, unit: pluralLabel('common_day', chartDays) })}
          </span>
        </div>
        <div className="chart-period-btns" id="chart-period-btns">
          {[14, 30, 90].map((d) => (
            <button
              key={d}
              className={'chart-period-btn' + (chartDays === d ? ' active' : '')}
              data-days={d}
              onClick={() => setChartDays(d)}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="chart-wrap">
          <div className="chart-bars" id="chart-bars">
            {!hasChartData ? (
              <div
                className="chart-empty"
                dangerouslySetInnerHTML={{ __html: t('stats.noData') }}
              />
            ) : (
              chartData.map((d) => {
                const h = Math.round((d.val / maxVal) * barH);
                const showLabel =
                  !sm ||
                  d.isToday ||
                  d.date.endsWith('-01') ||
                  new Date(d.date).getDate() % (chartDays <= 30 ? 5 : 15) === 0;
                return (
                  <div className={'chart-col' + (sm ? ' chart-col-sm' : '')} key={d.date}>
                    {d.val > 0 ? (
                      <div className="chart-val">{d.val}</div>
                    ) : (
                      <div className="chart-val" style={{ visibility: 'hidden' }}>
                        0
                      </div>
                    )}
                    <div className="chart-bar-wrap">
                      <div
                        className={'chart-bar' + (d.isToday ? ' today' : '')}
                        style={{ height: h }}
                      />
                    </div>
                    <div className="chart-label">
                      {d.isToday && !sm ? t('stats.today') : showLabel ? d.label : ''}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.yearActivity">
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
              <div className="hm-week" key={wi}>
                {wk.map((day, di) => (
                  <div
                    key={di}
                    className={`hm-day hm-l${day.lvl}`}
                    title={`${day.ds}: ${day.n} ${wordsLabel(day.n)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div
            className="stats-section-title"
            style={{ marginBottom: 0 }}
            data-i18n="stats.monthlyView"
          >
            {t('stats.monthlyView')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              id="cal-prev"
              className="btn"
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
              className="btn"
              style={{ padding: '3px 10px', fontSize: 13 }}
              onClick={() => changeMonth(1)}
            >
              →
            </button>
          </div>
        </div>
        <div className="cal-header-grid" id="cal-headers">
          {dowNames().map((d, i) => (
            <div className="cal-dow" key={i}>
              {d}
            </div>
          ))}
        </div>
        <div className="cal-day-grid" id="cal-grid">
          {calData.cells.map((c, i) =>
            c === null ? (
              <div className="cal-day cal-empty" key={i} />
            ) : (
              <div
                className={`cal-day hm-l${c.lvl}${c.isToday ? ' cal-today' : ''}`}
                title={`${c.ds}: ${c.n} ${wordsLabel(c.n)}`}
                key={i}
              >
                <span className="cal-day-num">{c.d}</span>
                {c.n > 0 && <span className="cal-day-cnt">{c.n}</span>}
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

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.bestTimeTitle">
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

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.blockProgress">
          {t('stats.blockProgress')}
        </div>
        <div className="blocks-list" id="blocks-list">
          {blocks.map((b) => (
            <div className="block-row" key={b.label}>
              <div className="block-label">{b.label}</div>
              <div className="block-track">
                <div className="block-fill" style={{ width: `${b.pct}%`, background: b.color }} />
              </div>
              <div className="block-pct" style={{ color: b.color }}>
                {b.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.srsForecastTitle">
          {t('stats.srsForecastTitle')}
        </div>
        <div id="srs-forecast" className="srs-forecast">
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 8 }}>
            {t('stats.totalScheduled')}: {srsFc.totalDue} {t('stats.reviews')}
          </div>
          <div className="srs-fc-bars">
            {srsFc.bars.map((c) => (
              <div className="srs-fc-col" key={c.date}>
                <div className="srs-fc-bar-wrap">
                  <div
                    className={'srs-fc-bar' + (c.isToday ? ' srs-fc-today' : '')}
                    style={{ height: `${c.pct}%` }}
                  />
                </div>
                <div className="srs-fc-cnt">{c.cnt || ''}</div>
                <div className="srs-fc-lbl">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div
            className="stats-section-title"
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
        {mistakeReviewOpen && <MistakeReview onClose={() => setMistakeReviewOpen(false)} />}
      </div>

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.modeAccuracyTitle">
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

      <div className="stats-section">
        <div className="stats-section-title" data-i18n="stats.cefrProgressTitle">
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
                      background: `${r.color}22`,
                      color: r.color,
                      border: `1.5px solid ${r.color}44`,
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

      <div className="stats-section">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div
            className="stats-section-title"
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
