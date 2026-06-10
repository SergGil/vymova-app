// English Words App — js/features/stats.ts
// ════════ HEATMAP + HOURLY STATS + CHART + RENDER STATS ════════
import { state } from '../../src/state.ts';
import { getDailyStats, getGameData, getModeStats, getModeAccuracy } from './game.ts';
import { t, getLang, wordsLabel, monthNames, dowNames } from './i18n.ts';
import { W } from '../../data/words.js';
import { getCefrLevel } from '../../data/cefr.ts';
import { renderLeaderboard } from './leaderboard.ts';
import { renderAchievements } from './render-achievements.ts';
import type { WordEntry } from '../../src/types.js';

function renderHeatmap(): void {
  const el = document.getElementById('heatmap');
  if (!el) return;
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
  weeks.forEach(wk => wk.forEach(day => { if (day.n > maxN) maxN = day.n; }));
  const frag = document.createDocumentFragment();
  weeks.forEach(wk => {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'hm-week';
    wk.forEach(day => {
      const lvl = day.n === 0 ? 0 : day.n < maxN * 0.25 ? 1 : day.n < maxN * 0.5 ? 2 : day.n < maxN * 0.75 ? 3 : 4;
      const d = document.createElement('div');
      d.className = `hm-day hm-l${lvl}`; d.title = `${day.ds}: ${day.n} ${wordsLabel(day.n)}`;
      weekDiv.appendChild(d);
    });
    frag.appendChild(weekDiv);
  });
  el.innerHTML = ''; el.appendChild(frag);
}

function renderHourly(): void {
  const el = document.getElementById('hourly-chart');
  const bestEl = document.getElementById('best-hour');
  if (!el) return;
  const daily = getDailyStats();
  const hours = Array.from({ length: 24 }, (_, h) => daily['h' + h] ?? 0);
  const maxH = Math.max(...hours) || 1;
  const bestH = hours.indexOf(Math.max(...hours));
  el.innerHTML = hours.map((n, h) => {
    const pct = Math.round(n / maxH * 100);
    const isNight = h >= 22 || h < 6, isMorning = h >= 6 && h < 12;
    const color = isNight ? '#5d6d7e' : isMorning ? '#f39c12' : 'var(--accent)';
    return `<div style="flex:1;background:${color};height:${pct}%;border-radius:2px 2px 0 0;opacity:${n ? 1 : 0.2}" title="${h}:00 — ${n} ${wordsLabel(n)}"></div>`;
  }).join('');
  if (bestEl && hours[bestH] > 0) {
    const parts = [t('stats.night'), t('stats.morning'), t('stats.day'), t('stats.evening')];
    const tod = bestH >= 22 || bestH < 6 ? parts[0] : bestH < 12 ? parts[1] : bestH < 18 ? parts[2] : parts[3];
    bestEl.textContent = `${t('stats.bestTimeLabel')}: ${bestH}:00 (${tod})`;
  }
}

let _calYear  = new Date().getFullYear();
let _calMonth = new Date().getMonth();
const _p2 = (n: number): string => n < 10 ? '0' + n : '' + n;

function renderMonthCal(): void {
  const hEl = document.getElementById('cal-headers');
  const gEl = document.getElementById('cal-grid');
  const lEl = document.getElementById('cal-month-label');
  const sEl = document.getElementById('cal-summary');
  if (!hEl || !gEl) return;
  if (lEl) lEl.textContent = monthNames()[_calMonth] + ' ' + _calYear;
  hEl.innerHTML = dowNames().map(d => `<div class="cal-dow">${d}</div>`).join('');
  const daily = getDailyStats();
  const todayStr = state.TODAY;
  const daysInMonth = new Date(_calYear, _calMonth + 1, 0).getDate();
  const startDow = (new Date(_calYear, _calMonth, 1).getDay() + 6) % 7;
  const cells: ({ d: number; ds: string; n: number } | null)[] = Array(startDow).fill(null);
  let monthTotal = 0, maxN = 1;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${_calYear}-${_p2(_calMonth + 1)}-${_p2(d)}`;
    const n = daily[ds] ?? 0;
    if (n > maxN) maxN = n; monthTotal += n; cells.push({ d, ds, n });
  }
  gEl.innerHTML = cells.map(c => {
    if (!c) return '<div class="cal-day cal-empty"></div>';
    const lvl = c.n === 0 ? 0 : c.n < maxN * .25 ? 1 : c.n < maxN * .5 ? 2 : c.n < maxN * .75 ? 3 : 4;
    const isToday = c.ds === todayStr;
    return `<div class="cal-day hm-l${lvl}${isToday ? ' cal-today' : ''}" title="${c.ds}: ${c.n} ${wordsLabel(c.n)}"><span class="cal-day-num">${c.d}</span>${c.n > 0 ? `<span class="cal-day-cnt">${c.n}</span>` : ''}</div>`;
  }).join('');
  if (sEl) sEl.textContent = monthTotal > 0 ? `${t('stats.totalForMonth')}: ${monthTotal} ${wordsLabel(monthTotal)}` : t('stats.noWordsThisMonth');
}

document.getElementById('cal-prev')?.addEventListener('click', (e: MouseEvent) => {
  e.stopPropagation();
  _calMonth--; if (_calMonth < 0) { _calMonth = 11; _calYear--; } renderMonthCal();
});
document.getElementById('cal-next')?.addEventListener('click', (e: MouseEvent) => {
  e.stopPropagation();
  _calMonth++; if (_calMonth > 11) { _calMonth = 0; _calYear++; } renderMonthCal();
});

function renderForgettingCurve(): void {
  const el = document.getElementById('srs-next');
  const cw = (window as Window & { cw?: string[] | null }).cw;
  if (!el || !cw) return;
  const d = state.srsData[cw[0] as string] as { due?: string; ef?: number; interval?: number } | undefined;
  if (!d?.due || !d.ef) return;
  let ef = d.ef, interval = d.interval ?? 1;
  const future = [interval];
  for (let i = 0; i < 4; i++) { interval = Math.round(interval * ef); future.push(interval); }
  const dayUnit = getLang() === 'en' ? 'd' : 'д';
  el.title = t('stats.intervals') + ': ' + future.map(v => v + dayUnit).join(' → ');
}

function refreshStatsExtras(): void {
  try { renderHeatmap(); } catch (e) {}
  try { renderHourly(); } catch (e) {}
  try { renderMonthCal(); } catch (e) {}
}

function onStatsOpen(): void {
  setTimeout(refreshStatsExtras, 60);
}

window._refreshStatsExtras = refreshStatsExtras;

document.getElementById('stats-overlay')?.addEventListener('click', onStatsOpen);
document.getElementById('btn-stats')?.addEventListener('click', onStatsOpen);
document.getElementById('card')?.addEventListener('click', () => {
  setTimeout(() => { try { renderForgettingCurve(); } catch (e) {} }, 100);
});

// ════════════════════════════════════════════════════════════
// RENDER STATS — daily chart, blocks, SRS forecast, etc.
// ════════════════════════════════════════════════════════════

function _getBlockColor(pct: number): string {
  if (pct >= 80) return '#27ae60';
  if (pct >= 50) return '#f39c12';
  if (pct >= 20) return '#3498db';
  return '#bdc3c7';
}

let _statsRenderKey = '';
export let _chartDays = 14;

export function _renderChartBars(): void {
  const daily = getDailyStats();
  const today = state.TODAY;
  const days: { date: string; label: string; val: number; isToday: boolean }[] = [];
  for (let i = _chartDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds  = d.toISOString().slice(0, 10);
    const lbl = d.getDate() + '/' + (d.getMonth() + 1);
    days.push({ date: ds, label: lbl, val: daily[ds] || 0, isToday: ds === today });
  }
  const maxVal = Math.max(...days.map(d => d.val)) || 1;
  const labelEl = document.getElementById('chart-period-label');
  if (labelEl) labelEl.textContent = t('stats.perDayCount').replace('{n}', String(_chartDays));
  const chartEl = document.getElementById('chart-bars');
  const hasData = days.some(d => d.val > 0);
  if (!hasData) {
    chartEl!.innerHTML = '<div class="chart-empty">' + t('stats.noData') + '</div>';
    return;
  }
  const barH = _chartDays <= 14 ? 60 : _chartDays <= 30 ? 40 : 24;
  chartEl!.innerHTML = days.map(function(d) {
    const h = Math.round((d.val / maxVal) * barH);
    const sm = _chartDays > 14;
    const showLabel = !sm || d.isToday || d.date.endsWith('-01')
      || new Date(d.date).getDate() % (_chartDays <= 30 ? 5 : 15) === 0;
    return '<div class="chart-col' + (sm ? ' chart-col-sm' : '') + '">' +
      (d.val > 0 ? '<div class="chart-val">' + d.val + '</div>'
                 : '<div class="chart-val" style="visibility:hidden">0</div>') +
      '<div class="chart-bar-wrap"><div class="chart-bar' + (d.isToday ? ' today' : '') + '" style="height:' + h + 'px"></div></div>' +
      '<div class="chart-label">' + (d.isToday && !sm ? t('stats.today') : showLabel ? d.label : '') + '</div>' +
    '</div>';
  }).join('');
}

function _renderStatsCore(): void {
  const gd = getGameData();
  const newKey = state.known.size + '|' + (gd.streak ?? 0) + '|' + (gd.goalCur ?? 0) + '|' + state.TODAY + '|' + _chartDays;
  if (newKey === _statsRenderKey) return;
  _statsRenderKey = newKey;
  document.getElementById('st-known')!.textContent = String(state.known.size);
  document.getElementById('st-pct')!.textContent   = Math.round(state.known.size / (W as unknown as WordEntry[]).length * 100) + '%';
  document.getElementById('st-streak')!.textContent = String(gd.streak || 0);
  _renderChartBars();

  const blockSize = 500;
  const wArr = W as unknown as WordEntry[];
  const blocks: { label: string; total: number; known: number; pct: number }[] = [];
  for (let s = 0; s < wArr.length; s += blockSize) {
    let end = s + blockSize;
    if (end < wArr.length && wArr.length - end < blockSize) end = wArr.length;
    const slice = wArr.slice(s, end);
    const knownInBlock = slice.filter(w => state.known.has(w[0])).length;
    blocks.push({
      label: (s + 1) + '–' + Math.min(end, wArr.length),
      total: slice.length,
      known: knownInBlock,
      pct:   Math.round(knownInBlock / slice.length * 100),
    });
    if (end >= wArr.length) break;
  }
  const blocksEl = document.getElementById('blocks-list');
  blocksEl!.innerHTML = blocks.map(function(b) {
    const color = _getBlockColor(b.pct);
    return '<div class="block-row">' +
      '<div class="block-label">' + b.label + '</div>' +
      '<div class="block-track"><div class="block-fill" style="width:' + b.pct + '%;background:' + color + ';"></div></div>' +
      '<div class="block-pct" style="color:' + color + '">' + b.pct + '%</div>' +
    '</div>';
  }).join('');
}

export function renderSRSForecast(): void {
  const container = document.getElementById('srs-forecast');
  if (!container) return;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const counts: { date: string; cnt: number; label: string }[] = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(today); d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().slice(0, 10);
    const cnt = Object.values(state.srsData).filter((s: any) => s.due === dateStr).length;
    counts.push({
      date: dateStr, cnt,
      label: i === 0 ? t('stats.todayCap')
           : i === 1 ? t('stats.tomorrow')
           : d.toLocaleDateString(getLang() === 'en' ? 'en' : 'uk', { day: 'numeric', month: 'short' }),
    });
  }
  const maxCnt  = Math.max(...counts.map(c => c.cnt)) || 1;
  const totalDue = counts.reduce((a, c) => a + c.cnt, 0);
  let html = '<div style="font-size:.72rem;color:var(--text3);margin-bottom:8px;">'
    + t('stats.totalScheduled') + ': ' + totalDue + ' ' + t('stats.reviews') + '</div>';
  html += '<div class="srs-fc-bars">';
  counts.forEach(function(c) {
    const pct     = Math.round(c.cnt / maxCnt * 100);
    const isToday = c.label === t('stats.todayCap');
    html += '<div class="srs-fc-col">' +
      '<div class="srs-fc-bar-wrap"><div class="srs-fc-bar' + (isToday ? ' srs-fc-today' : '') + '" style="height:' + Math.max(pct, 2) + '%"></div></div>' +
      '<div class="srs-fc-cnt">' + (c.cnt || '') + '</div>' +
      '<div class="srs-fc-lbl">' + c.label + '</div>' +
    '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

function _renderModeAccuracy(): void {
  const el = document.getElementById('mode-accuracy-list');
  if (!el) return;
  const acc    = getModeAccuracy();
  const mStats = getModeStats();
  const modes  = [
    { key: 'quiz',   label: t('mode.quiz'),   icon: '🧠' },
    { key: 'write',  label: t('mode.write'),  icon: '✍️' },
    { key: 'listen', label: t('mode.listen'), icon: '🔊' },
    { key: 'fib',    label: t('mode.fib'),    icon: '✏️' },
    { key: 'lesson', label: t('mode.lesson'), icon: '📚' },
    { key: 'tempo',  label: t('mode.tempo'),  icon: '⚡' },
  ];
  const rows = modes.map(m => {
    const a        = acc[m.key];
    const sessions = mStats[m.key] ?? 0;
    if (!a && sessions === 0) return '';
    const total    = (a?.ok ?? 0) + (a?.err ?? 0);
    const pct      = total > 0 ? Math.round((a!.ok / total) * 100) : null;
    const barColor = pct === null ? 'var(--border)' : pct >= 80 ? '#27ae60' : pct >= 60 ? '#f39c12' : '#e74c3c';
    const pctText  = pct !== null ? `${pct}%` : '—';
    const totText  = total > 0 ? `${a?.ok ?? 0}✓ ${a?.err ?? 0}✗` : '';
    return `<div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:.82rem;font-weight:600;color:var(--text);">${m.icon} ${m.label}</span>
        <span style="font-size:.75rem;color:var(--text2);">${totText}${sessions ? ` · ${sessions} ${t('stats.sessionsAbbr')}` : ''}</span>
        <span style="font-size:.82rem;font-weight:700;color:${barColor};min-width:36px;text-align:right;">${pctText}</span>
      </div>
      <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct ?? 0}%;background:${barColor};border-radius:3px;transition:width .4s;"></div>
      </div>
    </div>`;
  }).filter(Boolean);
  el.innerHTML = rows.length
    ? rows.join('')
    : `<div style="font-size:.8rem;color:var(--text3);text-align:center;padding:8px 0;">${t('stats.noModeData')}</div>`;
}

function _renderCefrStats(): void {
  const el = document.getElementById('cefr-stats-list');
  if (!el) return;
  const levels  = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
  const colors  = { A1: '#27ae60', A2: '#2ecc71', B1: '#d4ac0d', B2: '#e67e22', C1: '#e74c3c', C2: '#8e44ad' };
  const descs   = { A1: t('cefr.A1'), A2: t('cefr.A2'), B1: t('cefr.B1'), B2: t('cefr.B2'), C1: t('cefr.C1'), C2: t('cefr.C2') };
  const stats: Record<string, { known: number; total: number }> = {};
  levels.forEach(l => { stats[l] = { known: 0, total: 0 }; });
  (W as unknown as WordEntry[]).forEach(w => {
    const lvl = getCefrLevel(w[0]);
    stats[lvl].total++;
    if (state.known.has(w[0])) stats[lvl].known++;
  });
  el.innerHTML = levels.map(l => {
    const s   = stats[l];
    const pct = s.total > 0 ? Math.round(s.known / s.total * 100) : 0;
    const c   = colors[l];
    return `<div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:.8rem;font-weight:700;">
          <span style="background:${c}22;color:${c};border:1.5px solid ${c}44;border-radius:6px;padding:1px 6px;font-size:.72rem;margin-right:6px;">${l}</span>
          ${descs[l]}
        </span>
        <span style="font-size:.75rem;color:var(--text2);">${s.known} / ${s.total} (${pct}%)</span>
      </div>
      <div style="height:5px;background:var(--border);border-radius:3px;overflow:hidden;">
        <div style="height:100%;width:${pct}%;background:${c};border-radius:3px;transition:width .5s;"></div>
      </div>
    </div>`;
  }).join('');
}

export function openStats(): void {
  renderStats();
  document.getElementById('stats-overlay')!.style.display = 'flex';
}

export function closeStats(): void {
  document.getElementById('stats-overlay')!.style.display = 'none';
}

export function renderStats(): void {
  try { _renderStatsCore(); }     catch (e) { console.error('renderStatsCore:', e); }
  try { renderAchievements(); }   catch (e) { console.error('renderAchievements:', e); }
  try { renderSRSForecast(); }    catch (e) { console.error('renderSRSForecast:', e); }
  try { _renderModeAccuracy(); }  catch (e) { console.error('renderModeAccuracy:', e); }
  try { _renderCefrStats(); }     catch (e) { console.error('renderCefrStats:', e); }
  const lbEl = document.getElementById('lb-container');
  if (lbEl && !lbEl.dataset.loaded) {
    lbEl.dataset.loaded = '1';
    renderLeaderboard(lbEl).catch(() => {});
  }
}

// ── Period buttons ────────────────────────────────────────────
document.getElementById('chart-period-btns')?.addEventListener('click', function(e) {
  const btn = (e.target as HTMLElement).closest('[data-days]') as HTMLElement | null;
  if (!btn) return;
  _chartDays = parseInt(btn.dataset.days ?? '14') || 14;
  this.querySelectorAll('.chart-period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _statsRenderKey = '';
  _renderChartBars();
});

// ── Stats open/close buttons ──────────────────────────────────
document.getElementById('btn-stats')?.addEventListener('click', function(e) {
  e.stopPropagation();
  openStats();
  setTimeout(function() { try { (window as any).updateUI?.(); } catch (_e) {} }, 50);
});
document.getElementById('stats-close')?.addEventListener('click', closeStats);
document.getElementById('stats-overlay')?.addEventListener('click', function(e) {
  if (e.target === this) closeStats();
});

document.getElementById('lb-refresh-btn')?.addEventListener('click', () => {
  const lbEl = document.getElementById('lb-container');
  if (lbEl) { lbEl.removeAttribute('data-loaded'); renderLeaderboard(lbEl).catch(() => {}); }
});

window.renderStats       = renderStats;
window.renderSRSForecast = renderSRSForecast;
window.openStats         = openStats;
window.closeStats        = closeStats;
