// English Words App — js/features/render-game-bar.ts
// Game bar, level badge, level progress, levels roadmap
import { state } from '../../src/state.ts';
import { getGameData, getLevel, getNextLevel, LEVELS } from './game.ts';
import { updateRing } from './ring.ts';
import { t, levelName, wordsLabel } from './i18n.ts';

export function renderLevelProgress(): void {
  const n    = state.known.size;
  const lv   = getLevel(n);
  const next = getNextLevel(n);
  const fillEl = document.getElementById('gb-level-fill');
  const xpEl   = document.getElementById('gb-level-xp');
  const nextEl = document.getElementById('gb-level-next');
  if (!fillEl) return;
  if (next) {
    const cur  = n - lv.min;
    const need = next.min - lv.min;
    const pct  = Math.round(cur / need * 100);
    fillEl.style.width = pct + '%';
    fillEl.style.background = 'linear-gradient(90deg,' + lv.color + ',' + (next.color || lv.color) + ')';
    if (xpEl)   xpEl.textContent   = cur + ' / ' + need + ' ' + wordsLabel(need);
    if (nextEl) nextEl.textContent = levelName(next.name);
  } else {
    fillEl.style.width = '100%';
    if (xpEl)   xpEl.textContent   = t('levels.maxReached');
    if (nextEl) nextEl.textContent = '';
  }
  try { updateRing(); } catch (_e) {}
}

export function renderLevelBadge(): void {
  const n     = state.known.size;
  const lv    = getLevel(n);
  const badge = document.getElementById('level-badge');
  if (badge) {
    badge.textContent        = levelName(lv.name);
    badge.style.background   = lv.color + '22';
    badge.style.color        = lv.color;
  }
  const numEl = document.getElementById('gb-level-num');
  const lvIdx = LEVELS.indexOf(lv) + 1;
  if (numEl) { numEl.textContent = String(lvIdx); numEl.style.color = lv.color; }
  renderLevelProgress();
}

export function renderGameBar(): void {
  const d   = getGameData();
  const pct = Math.min(d.goalCur / d.goalMax * 100, 100);
  document.getElementById('streak-num')!.textContent = String(d.streak || 0);
  const shieldsEl = document.getElementById('shields-row');
  if (shieldsEl) {
    const n       = d.shields ?? 0;
    const shLabel = t(n > 1 ? 'gamebar.shields' : 'gamebar.shield');
    shieldsEl.textContent = n > 0 ? '🛡️'.repeat(n) + ' ' + shLabel : '';
    shieldsEl.title = n > 0
      ? `${n} ${shLabel}: ${t('gamebar.shield.desc')}`
      : t('gamebar.shield.none');
  }
  document.getElementById('goal-cur')!.textContent = String(d.goalCur || 0);
  document.getElementById('goal-max')!.textContent = String(d.goalMax);
  const fill  = document.getElementById('goal-fill');
  fill!.style.width   = pct + '%';
  fill!.className     = 'goal-fill' + (d.goalCur >= d.goalMax ? ' done' : '');
  const bdg = document.getElementById('goal-done');
  bdg!.style.display  = d.goalCur >= d.goalMax ? 'inline' : 'none';
  try { renderLevelProgress(); } catch (_e) {}
}

export function renderLevelsRoadmap(): void {
  const container = document.getElementById('levels-roadmap');
  if (!container) return;
  const n = state.known.size;
  container.innerHTML = '';
  LEVELS.forEach(function(lv, i) {
    const next       = LEVELS[i + 1];
    const isDone     = next ? n >= next.min : n >= lv.min;
    const isCurrent  = n >= lv.min && (!next || n < next.min);
    const lvNum      = i + 1;
    const pct        = next
      ? Math.min(100, Math.round(Math.max(0, n - lv.min) / (next.min - lv.min) * 100))
      : 100;

    const row = document.createElement('div');
    row.className = 'level-row'
      + (isCurrent ? ' level-current' : '')
      + (isDone && !isCurrent ? ' level-done' : '');

    const fillBar = document.createElement('div');
    fillBar.className = 'level-row-fill';
    fillBar.style.cssText = 'width:' + (isCurrent ? pct : isDone ? 100 : 0) + '%;background:' + lv.color + ';';

    const icon = document.createElement('div');
    icon.className = 'level-row-icon';
    icon.style.cssText =
      'width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
      'font-size:.72rem;font-weight:800;flex-shrink:0;border:2px solid ' + lv.color + ';color:' + lv.color + ';';
    icon.textContent = String(lvNum);

    const info  = document.createElement('div');
    info.className = 'level-row-info';

    const name = document.createElement('div');
    name.className   = 'level-row-name';
    name.style.color = isCurrent ? lv.color : '';
    name.textContent = levelName(lv.name);

    const range = document.createElement('div');
    range.className  = 'level-row-range';
    const wu = wordsLabel(2);
    range.textContent = lv.min + (next ? '–' + (next.min - 1) : '+') + ' ' + wu
      + (isCurrent ? ' · ' + n + ' ' + t('levels.learned') + ' (' + pct + '%)' : '');

    const badge = document.createElement('div');
    badge.className       = 'level-row-badge';
    badge.style.color     = lv.color;
    badge.style.borderColor = lv.color + '66';
    badge.textContent     = isDone && !isCurrent ? '✓' : isCurrent ? '▶' : '🔒';

    info.appendChild(name);
    info.appendChild(range);
    row.appendChild(fillBar);
    row.appendChild(icon);
    row.appendChild(info);
    row.appendChild(badge);
    container.appendChild(row);
  });
}

window.renderGameBar       = renderGameBar;
window.renderLevelBadge    = renderLevelBadge;
window.renderLevelProgress = renderLevelProgress;
window.renderLevelsRoadmap = renderLevelsRoadmap;
