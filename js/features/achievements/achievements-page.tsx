// Vymova — js/features/achievements/achievements-page.tsx
// Achievements page: levels roadmap, achievements grid, achievement detail popup.
// Re-rendered on demand via refreshAchievementsPage() / notifyAchievementsChange().
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import {
  notifyAchievementsChange,
  useAchievementsVersion,
  useLangVersion,
} from '../../../src/store.ts';
import { ACHIEVEMENTS } from '../../../data/achievements.ts';
import {
  getGameData,
  getModeStats,
  loadUnlocked,
  loadUnlockedTimestamps,
  LEVELS,
} from '../game/game.ts';
import { t, achName, achHint, achCatName, levelName, wordsLabel } from '../i18n.ts';
import { getKnownInLang } from '../mode/mode-utils.ts';
import type { Achievement } from '../../../src/types.js';

function LevelsRoadmap(): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const n = getKnownInLang();
  const wu = wordsLabel(2);

  // Scroll the current level into view when the page opens — with 10 levels,
  // an advanced learner would otherwise land at the top and have to scroll
  // past everything they've already unlocked.
  useEffect(() => {
    const cur = ref.current?.querySelector('.level-current');
    cur?.scrollIntoView({ block: 'center', behavior: 'auto' });
  }, []);

  return (
    <div ref={ref} className="levels-roadmap">
      {LEVELS.map((lv, i) => {
        const next = LEVELS[i + 1];
        const isDone = next ? n >= next.min : n >= lv.min;
        const isCurrent = n >= lv.min && (!next || n < next.min);
        const pct = next
          ? Math.min(100, Math.round((Math.max(0, n - lv.min) / (next.min - lv.min)) * 100))
          : 100;
        const fillPct = isCurrent ? pct : isDone ? 100 : 0;
        return (
          <div
            key={lv.name}
            className={
              'level-row bg-[var(--level-row-bg)] border-[var(--level-row-border-color)]' +
              (isCurrent ? ' level-current' : '') +
              (isDone && !isCurrent ? ' level-done' : '')
            }
          >
            <div
              className="level-row-fill"
              style={{ width: fillPct + '%', background: lv.color }}
            />
            <div
              className="level-row-icon"
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '.72rem',
                fontWeight: 800,
                flexShrink: 0,
                border: '2px solid ' + lv.color,
                color: lv.color,
              }}
            >
              {i + 1}
            </div>
            <div className="level-row-info">
              <div
                className="level-row-name font-[family-name:var(--level-row-name-font)] text-[length:var(--level-row-name-size)]"
                style={{ color: isCurrent ? lv.color : '' }}
              >
                {levelName(lv.name)}
              </div>
              <div className="level-row-range">
                {lv.min}
                {next ? `–${next.min - 1}` : '+'} {wu}
                {isCurrent ? ` · ${n} ${t('levels.learned')} (${pct}%)` : ''}
              </div>
            </div>
            <div
              className="level-row-badge"
              style={{ color: lv.color, borderColor: lv.color + '66' }}
            >
              {isDone && !isCurrent ? '✓' : isCurrent ? '▶' : '🔒'}
            </div>
          </div>
        );
      })}
    </div>
  );
}

type AchFilter = 'all' | 'unlocked' | 'locked';

// How close to completion a still-locked achievement needs to be to get the
// "almost there" nudge — high enough that it stays a rare, meaningful signal.
const ALMOST_THERE_PCT = 70;

// Keep a sliver of the progress bar visible even at 0% so the track reads
// as an active tracker rather than a rendering glitch.
const MIN_PROG_FILL_PCT = 4;

// How long an unlocked achievement keeps its "NEW" badge.
const NEW_BADGE_MS = 24 * 60 * 60 * 1000;

function AchievementsSummaryBar({
  unlockedCount,
  total,
  filter,
  onFilterChange,
}: {
  unlockedCount: number;
  total: number;
  filter: AchFilter;
  onFilterChange: (f: AchFilter) => void;
}): ReactElement {
  const tabs: { id: AchFilter; label: string }[] = [
    { id: 'all', label: t('ach.filterAll') },
    { id: 'unlocked', label: t('ach.filterUnlocked') },
    { id: 'locked', label: t('ach.filterLocked') },
  ];
  return (
    <div className="ach-summary-bar mb-[14px] flex flex-wrap items-center justify-between gap-2">
      <div className="ach-summary-count text-[0.85rem] font-bold text-text2">
        {t('ach.summary', { unlocked: unlockedCount, total })}
      </div>
      <div className="ach-summary-tabs flex gap-1.5">
        {tabs.map((tb) => (
          <button
            key={tb.id}
            type="button"
            className={
              'ach-filter-tab cursor-pointer rounded-[20px] border-[1.5px] border-border bg-transparent px-3 py-[5px] text-[0.75rem] font-semibold text-text2 transition-all duration-150 hover:border-accent' +
              (filter === tb.id
                ? ' active border-accent bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-accent'
                : '')
            }
            onClick={() => onFilterChange(tb.id)}
          >
            {tb.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function AchievementsGrid({
  filter,
  onSelect,
}: {
  filter: AchFilter;
  onSelect: (a: Achievement) => void;
}): ReactElement {
  const unlocked = new Set(loadUnlocked());
  const unlockedTs = loadUnlockedTimestamps();
  const k = getKnownInLang();
  const g = getGameData();
  const m = getModeStats();

  // True per-category totals, independent of the active filter, so the
  // header still reads e.g. "5/8" while a "Locked"-only view hides the rest.
  const catStats: Record<string, { unlocked: number; total: number }> = {};
  ACHIEVEMENTS.forEach(function (a) {
    const s = (catStats[a.cat] ??= { unlocked: 0, total: 0 });
    s.total++;
    if (unlocked.has(a.id)) s.unlocked++;
  });

  const cats: Record<string, Achievement[]> = {};
  ACHIEVEMENTS.forEach(function (a) {
    const isUnlocked = unlocked.has(a.id);
    if (filter === 'unlocked' && !isUnlocked) return;
    if (filter === 'locked' && isUnlocked) return;
    if (!cats[a.cat]) cats[a.cat] = [];
    cats[a.cat].push(a);
  });

  // Surface "almost there" achievements first within each category — they're
  // the ones most likely to make the player click and finish the job.
  function isAlmostThere(a: Achievement): boolean {
    if (unlocked.has(a.id)) return false;
    const prog = a.progress(k, g, m);
    return Math.round((prog.cur / prog.max) * 100) >= ALMOST_THERE_PCT;
  }
  Object.values(cats).forEach((list) =>
    list.sort((x, y) => Number(isAlmostThere(y)) - Number(isAlmostThere(x))),
  );

  if (Object.keys(cats).length === 0) {
    return (
      <div className="ach-empty-state px-4 py-8 text-center text-[0.9rem] text-text3">
        {t('ach.emptyState')}
      </div>
    );
  }

  return (
    <>
      {Object.keys(cats).map((cat) => (
        <div className="ach-category mb-[18px]" key={cat}>
          <div className="ach-cat-title mb-2 pl-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-text3">
            {achCatName(cat)}
            <span className="ach-cat-count font-normal text-text3">
              {' '}
              · {catStats[cat].unlocked}/{catStats[cat].total}
            </span>
          </div>
          <div className="ach-grid-inner grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2">
            {cats[cat].map((a) => {
              const isUnlocked = unlocked.has(a.id);
              const prog = a.progress(k, g, m);
              const pct = Math.round((prog.cur / prog.max) * 100);
              const fillPct = isUnlocked ? pct : Math.max(pct, MIN_PROG_FILL_PCT);
              const almostThere = !isUnlocked && pct >= ALMOST_THERE_PCT;
              const isNew = isUnlocked && Date.now() - (unlockedTs[a.id] ?? 0) < NEW_BADGE_MS;
              return (
                <div
                  key={a.id}
                  className={
                    'ach-card relative cursor-pointer overflow-hidden rounded-[12px] border-[1.5px] bg-[var(--ach-card-bg)] pb-2.5 pl-2.5 pr-2.5 pt-3 text-center transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] ' +
                    (isUnlocked
                      ? "unlocked border-[var(--ach-card-unlocked-border)] shadow-[var(--ach-card-unlocked-shadow)] after:absolute after:right-[7px] after:top-[5px] after:text-[0.62rem] after:font-bold after:text-accent after:content-['✓']"
                      : 'locked border-[var(--ach-card-border)] opacity-50 grayscale-[50%]')
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(a);
                  }}
                >
                  {almostThere && (
                    <span className="ach-almost-badge absolute left-[7px] top-[5px] rounded-[20px] bg-[color-mix(in_srgb,var(--accent2,var(--accent))_14%,transparent)] px-1.5 py-px text-[0.56rem] font-bold text-[var(--accent2,var(--accent))]">
                      {t('ach.almostThere')}
                    </span>
                  )}
                  {isNew && (
                    <span className="ach-new-badge absolute left-[7px] top-[5px] rounded-[20px] bg-[color-mix(in_srgb,var(--success)_14%,transparent)] px-1.5 py-px text-[0.56rem] font-bold text-success">
                      {t('ach.new')}
                    </span>
                  )}
                  <span
                    className={
                      'ach-icon mb-1 block text-[1.8rem]' +
                      (isUnlocked ? ' [text-shadow:var(--ach-card-unlocked-icon-shadow)]' : '')
                    }
                  >
                    {a.icon}
                  </span>
                  <div className="ach-name mb-0.5 text-[0.75rem] font-bold text-text">
                    {achName(a)}
                  </div>
                  <div className="ach-progress-track mt-[7px] h-1 overflow-hidden rounded-[4px] bg-border">
                    <div
                      className="ach-progress-fill h-full rounded-[4px] [background:var(--ach-progress-fill-bg)] transition-[width] duration-[400ms]"
                      style={{ width: fillPct + '%', background: isUnlocked ? 'var(--success)' : undefined }}
                    />
                  </div>
                  <div className="ach-progress-label mt-[3px] text-[0.6rem] text-text3">
                    {isUnlocked ? t('ach.done') : `${prog.cur} / ${prog.max}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function AchievementPopup({
  ach,
  onClose,
}: {
  ach: Achievement | null;
  onClose: () => void;
}): ReactElement | null {
  const target = document.getElementById('ach-popup-overlay');

  useEffect(() => {
    if (!target) return;
    target.classList.toggle('open', !!ach);
    function onOverlayClick(e: MouseEvent) {
      if (e.target === target) onClose();
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    target.addEventListener('click', onOverlayClick);
    if (ach) document.addEventListener('keydown', onKeyDown);
    return () => {
      target.removeEventListener('click', onOverlayClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [ach, target, onClose]);

  if (!target || !ach) return null;

  const unlocked = new Set(loadUnlocked());
  const isUnlocked = unlocked.has(ach.id);
  const k = getKnownInLang();
  const g = getGameData();
  const m = getModeStats();
  const prog = ach.progress(k, g, m);
  const pct = Math.min(Math.round((prog.cur / prog.max) * 100), 100);
  const fillPct = isUnlocked ? pct : Math.max(pct, MIN_PROG_FILL_PCT);

  return createPortal(
    <div className="ach-popup relative w-full max-w-[320px] rounded-[20px] bg-[var(--ach-popup-bg)] px-6 pb-7 pt-7 text-center shadow-[var(--ach-popup-shadow)] [border:var(--ach-popup-border)]">
      <span className="ach-popup-icon mb-2 block text-5xl [text-shadow:var(--ach-popup-icon-shadow)]">
        {ach.icon}
      </span>
      <div className="ach-popup-name mb-1 text-[1.15rem] font-bold text-[var(--ach-popup-name-color)]">
        {achName(ach)}
      </div>
      <div className="ach-popup-cat mb-3 text-[0.72rem] text-text3">{achCatName(ach.cat)}</div>
      <div className="ach-popup-hint mb-[14px] rounded-[10px] bg-[var(--ach-popup-hint-bg)] px-[14px] py-3 text-[0.85rem] leading-[1.5] text-text2">
        {achHint(ach)}
      </div>
      <div className="ach-popup-progress mb-4">
        <div className="ach-popup-prog-row mb-[5px] flex justify-between text-[0.75rem] text-text2">
          <span>{t('ach.progress')}</span>
          <span>
            {prog.cur} / {prog.max}
          </span>
        </div>
        <div className="ach-popup-prog-track h-2 overflow-hidden rounded-[8px] bg-border">
          <div
            className="ach-popup-prog-fill h-full rounded-[8px] [background:var(--ach-popup-prog-fill-bg)] shadow-[var(--ach-popup-prog-fill-shadow)] transition-[width] duration-500 ease-in-out"
            style={{ width: fillPct + '%', background: isUnlocked ? 'var(--success)' : undefined }}
          />
        </div>
      </div>
      <div
        className={
          'ach-popup-status mb-4 inline-block rounded-[20px] px-4 py-[5px] text-[0.8rem] font-semibold ' +
          (isUnlocked
            ? 'done bg-[rgba(39,174,96,0.15)] text-[#27ae60]'
            : 'todo bg-[rgba(189,195,199,0.15)] text-text2')
        }
      >
        {isUnlocked ? t('ach.unlocked') : t('ach.notYet')}
      </div>
      <br />
      <button
        className="ach-popup-close w-full cursor-pointer rounded-[10px] border-[1.5px] border-border bg-transparent p-2.5 text-[0.9rem] text-text hover:bg-border"
        onClick={onClose}
      >
        {t('ach.close')}
      </button>
    </div>,
    target,
  );
}

export function AchievementsPage(): ReactElement {
  useAchievementsVersion();
  useLangVersion();
  const [selected, setSelected] = useState<Achievement | null>(null);
  const [filter, setFilter] = useState<AchFilter>('all');
  const unlockedCount = loadUnlocked().length;
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <div
          className="stats-section-title text-[0.72rem] font-semibold uppercase [letter-spacing:var(--stats-section-title-tracking)] text-[var(--section-title-color,var(--text3))]"
          style={{ marginBottom: 12 }}
          data-i18n="ach.roadmapTitle"
        >
          {t('ach.roadmapTitle')}
        </div>
        <LevelsRoadmap />
      </div>

      <div
        className="stats-section-title text-[0.72rem] font-semibold uppercase [letter-spacing:var(--stats-section-title-tracking)] text-[var(--section-title-color,var(--text3))]"
        style={{ marginBottom: 12 }}
        data-i18n="ach.awardsTitle"
      >
        {t('ach.awardsTitle')}
      </div>
      <AchievementsSummaryBar
        unlockedCount={unlockedCount}
        total={ACHIEVEMENTS.length}
        filter={filter}
        onFilterChange={setFilter}
      />
      <AchievementsGrid filter={filter} onSelect={setSelected} />
      <AchievementPopup ach={selected} onClose={() => setSelected(null)} />
    </>
  );
}

export function refreshAchievementsPage(): void {
  notifyAchievementsChange();
}
