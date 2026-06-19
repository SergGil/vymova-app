// English Words App — js/features/achievements-page.tsx
// Achievements page: levels roadmap, achievements grid, achievement detail popup.
// Re-rendered on demand via refreshAchievementsPage() / notifyStateChange().
import { createPortal } from 'react-dom';
import { useEffect, useState, type ReactElement } from 'react';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import { getGameData, getModeStats, loadUnlocked, LEVELS } from './game.ts';
import { t, achName, achHint, achCatName, levelName, wordsLabel } from './i18n.ts';
import { getKnownInLang } from './mode-utils.ts';
import type { Achievement } from '../../src/types.js';

function LevelsRoadmap(): ReactElement | null {
  const target = document.getElementById('levels-roadmap');
  if (!target) return null;
  const n = getKnownInLang();
  const wu = wordsLabel(2);

  return createPortal(
    <>
      {LEVELS.map((lv, i) => {
        const next      = LEVELS[i + 1];
        const isDone    = next ? n >= next.min : n >= lv.min;
        const isCurrent = n >= lv.min && (!next || n < next.min);
        const pct       = next
          ? Math.min(100, Math.round(Math.max(0, n - lv.min) / (next.min - lv.min) * 100))
          : 100;
        const fillPct   = isCurrent ? pct : isDone ? 100 : 0;
        return (
          <div key={lv.name} className={'level-row' + (isCurrent ? ' level-current' : '') + (isDone && !isCurrent ? ' level-done' : '')}>
            <div className="level-row-fill" style={{ width: fillPct + '%', background: lv.color }} />
            <div className="level-row-icon" style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem', fontWeight: 800, flexShrink: 0, border: '2px solid ' + lv.color, color: lv.color }}>{i + 1}</div>
            <div className="level-row-info">
              <div className="level-row-name" style={{ color: isCurrent ? lv.color : '' }}>{levelName(lv.name)}</div>
              <div className="level-row-range">
                {lv.min}{next ? `–${next.min - 1}` : '+'} {wu}
                {isCurrent ? ` · ${n} ${t('levels.learned')} (${pct}%)` : ''}
              </div>
            </div>
            <div className="level-row-badge" style={{ color: lv.color, borderColor: lv.color + '66' }}>{isDone && !isCurrent ? '✓' : isCurrent ? '▶' : '🔒'}</div>
          </div>
        );
      })}
    </>,
    target
  );
}

function AchievementsGrid({ onSelect }: { onSelect: (a: Achievement) => void }): ReactElement {
  const unlocked = new Set(loadUnlocked());
  const k = getKnownInLang();
  const g = getGameData();
  const m = getModeStats();

  const cats: Record<string, Achievement[]> = {};
  ACHIEVEMENTS.forEach(function(a) {
    if (!cats[a.cat]) cats[a.cat] = [];
    cats[a.cat].push(a);
  });

  return (
    <>
      {Object.keys(cats).map(cat => (
        <div className="ach-category" key={cat}>
          <div className="ach-cat-title">{achCatName(cat)}</div>
          <div className="ach-grid-inner">
            {cats[cat].map(a => {
              const isUnlocked = unlocked.has(a.id);
              const prog = a.progress(k, g, m);
              const pct  = Math.round(prog.cur / prog.max * 100);
              return (
                <div
                  key={a.id}
                  className={'ach-card ' + (isUnlocked ? 'unlocked' : 'locked')}
                  onClick={(e) => { e.stopPropagation(); onSelect(a); }}
                >
                  <span className="ach-icon">{a.icon}</span>
                  <div className="ach-name">{achName(a)}</div>
                  <div className="ach-progress-track">
                    <div className="ach-progress-fill" style={{ width: pct + '%', background: isUnlocked ? '#27ae60' : undefined }} />
                  </div>
                  <div className="ach-progress-label">{isUnlocked ? t('ach.done') : `${prog.cur} / ${prog.max}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function AchievementPopup({ ach, onClose }: { ach: Achievement | null; onClose: () => void }): ReactElement | null {
  const target = document.getElementById('ach-popup-overlay');

  useEffect(() => {
    if (!target) return;
    target.className = ach ? 'open' : '';
    function onOverlayClick(e: MouseEvent) {
      if (e.target === target) onClose();
    }
    target.addEventListener('click', onOverlayClick);
    return () => target.removeEventListener('click', onOverlayClick);
  }, [ach, target, onClose]);

  if (!target || !ach) return null;

  const unlocked   = new Set(loadUnlocked());
  const isUnlocked = unlocked.has(ach.id);
  const k = getKnownInLang();
  const g = getGameData();
  const m = getModeStats();
  const prog = ach.progress(k, g, m);
  const pct  = Math.min(Math.round(prog.cur / prog.max * 100), 100);

  return createPortal(
    <div className="ach-popup">
      <span className="ach-popup-icon">{ach.icon}</span>
      <div className="ach-popup-name">{achName(ach)}</div>
      <div className="ach-popup-cat">{achCatName(ach.cat)}</div>
      <div className="ach-popup-hint">{achHint(ach)}</div>
      <div className="ach-popup-progress">
        <div className="ach-popup-prog-row">
          <span>Прогрес</span>
          <span>{prog.cur} / {prog.max}</span>
        </div>
        <div className="ach-popup-prog-track">
          <div className="ach-popup-prog-fill" style={{ width: pct + '%', background: isUnlocked ? '#27ae60' : undefined }} />
        </div>
      </div>
      <div className={'ach-popup-status ' + (isUnlocked ? 'done' : 'todo')}>{isUnlocked ? t('ach.unlocked') : t('ach.notYet')}</div>
      <br />
      <button className="ach-popup-close" onClick={onClose}>{t('ach.close')}</button>
    </div>,
    target
  );
}

export function AchievementsPage(): ReactElement {
  useStateVersion();
  const [selected, setSelected] = useState<Achievement | null>(null);
  return (
    <>
      <AchievementsGrid onSelect={setSelected} />
      <LevelsRoadmap />
      <AchievementPopup ach={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export function refreshAchievementsPage(): void {
  notifyStateChange();
}
