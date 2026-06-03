// English Words App — js/features/stats.ts
// ════════ HEATMAP + HOURLY STATS + FORGETTING CURVE ════════
import { state } from '../../src/state.ts';
import { getDailyStats } from './game.ts';

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
      d.className = `hm-day hm-l${lvl}`; d.title = `${day.ds}: ${day.n} слів`;
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
    return `<div style="flex:1;background:${color};height:${pct}%;border-radius:2px 2px 0 0;opacity:${n ? 1 : 0.2}" title="${h}:00 — ${n} слів"></div>`;
  }).join('');
  if (bestEl && hours[bestH] > 0) {
    const parts = ['🌙 ніч', '🌅 ранок', '☀️ день', '🌆 вечір'];
    const tod = bestH >= 22 || bestH < 6 ? parts[0] : bestH < 12 ? parts[1] : bestH < 18 ? parts[2] : parts[3];
    bestEl.textContent = `Найкращий час: ${bestH}:00 (${tod})`;
  }
}

let _calYear  = new Date().getFullYear();
let _calMonth = new Date().getMonth();
const _MONTHS = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const _DOWS   = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
const _p2 = (n: number): string => n < 10 ? '0' + n : '' + n;

function renderMonthCal(): void {
  const hEl = document.getElementById('cal-headers');
  const gEl = document.getElementById('cal-grid');
  const lEl = document.getElementById('cal-month-label');
  const sEl = document.getElementById('cal-summary');
  if (!hEl || !gEl) return;
  if (lEl) lEl.textContent = _MONTHS[_calMonth] + ' ' + _calYear;
  hEl.innerHTML = _DOWS.map(d => `<div class="cal-dow">${d}</div>`).join('');
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
    return `<div class="cal-day hm-l${lvl}${isToday ? ' cal-today' : ''}" title="${c.ds}: ${c.n} слів"><span class="cal-day-num">${c.d}</span>${c.n > 0 ? `<span class="cal-day-cnt">${c.n}</span>` : ''}</div>`;
  }).join('');
  if (sEl) sEl.textContent = monthTotal > 0 ? `Всього за місяць: ${monthTotal} слів` : 'Слів у цьому місяці немає';
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
  el.title = 'Інтервали: ' + future.map(v => v + 'д').join(' → ');
}

function onStatsOpen(): void {
  setTimeout(() => {
    try { renderHeatmap(); } catch (e) {}
    try { renderHourly(); } catch (e) {}
    try { renderMonthCal(); } catch (e) {}
  }, 60);
}

document.getElementById('stats-overlay')?.addEventListener('click', onStatsOpen);
document.getElementById('btn-stats')?.addEventListener('click', onStatsOpen);
document.getElementById('card')?.addEventListener('click', () => {
  setTimeout(() => { try { renderForgettingCurve(); } catch (e) {} }, 100);
});
