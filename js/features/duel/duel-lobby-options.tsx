// Vymova — js/features/duel/duel-lobby-options.tsx
// Лобі дуелі: вибір режиму (#duel-mode-picker), категорії (#duel-cat-picker)
// і опцій (#duel-options-row). Частина item 29 (Фаза 5).
import { useEffect, useState, type ReactElement } from 'react';
import { useDuelLobby } from '../../../src/duel-lobby-store.ts';
import { CATEGORY_LIST } from '../../../data/categories.js';
import { t, getLang, categoryName } from '../i18n.ts';
import type { Difficulty, BestOf, DuelMode } from './duel.ts';
import { DUEL_MODES, DIFFICULTIES } from './duel.ts';
import { ALL_TARGET_LANGS, type Code } from '../../../src/types.js';
import { FLAG_CODE } from '../../core/flag-codes.ts';
import { FlagDropdown } from '../../core/flag-dropdown.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../src/components/ui/select.tsx';
import { Switch } from '../../../src/components/ui/switch.tsx';
import {
  _showInfoTooltip,
  _getSelMode,
  _setSelMode,
  _getSelCategory,
  _setSelCategory,
  _getSelDifficulty,
  _setSelDifficulty,
  _getSelBestOf,
  _setSelBestOf,
  _getSelMaxHints,
  _setSelMaxHints,
  _getSelPowerups,
  _setSelPowerups,
  _getSelLang,
  _setSelLang,
  _getSelKnowLang,
  _setSelKnowLang,
} from './duel-lobby-logic.ts';

// Derived from the canonical Code union (src/types.ts) — adding a language to
// ALL_TARGET_LANGS is now enough on its own to make it selectable here; no
// separate hardcoded list to remember (see docs/adding-a-language.md 7a.1 for
// the bug class this used to cause: a hand-copied list that neither tsc nor
// the standard grep recipe would catch if it drifted from TargetLang).
const DUEL_LANGS: { id: Code; label: string }[] = (['en', 'ua', ...ALL_TARGET_LANGS] as Code[]).map(
  (id) => ({ id, label: id.toUpperCase() }),
);

// FLAG_CODE itself (js/core/flag-codes.ts) is pure data with no imports, so
// pulling it in statically here doesn't touch core/flags.ts's eager
// import.meta.glob — see LangFlag below for why that matters.

// core/flags.ts does an eager import.meta.glob of ~20 SVGs, which makes it a
// "heavy" static import. Pulling it in statically here adds duel-lobby-options.tsx
// (reachable from duel.ts via duel-game-header.tsx/duel-overlay.tsx's sibling
// imports) to duel.ts's already-cyclic static import graph and non-deterministically
// trips duel.ts's known TDZ fragility (see the sidebar.tsx dynamic-import comment
// near the top of duel.ts) — so load it lazily instead, same fix pattern.
let _flagUrlFn: ((code: string) => string | null) | null = null;
let _flagUrlLoading: Promise<void> | null = null;

function LangFlag({ id, size = 14 }: { id: string; size?: number }) {
  const [, forceRender] = useState(0);
  useEffect(() => {
    if (_flagUrlFn) return;
    (_flagUrlLoading ??= import('../../core/flags.ts').then((m) => {
      _flagUrlFn = m.flagUrl;
    })).then(() => forceRender((n) => n + 1));
  }, []);
  const url = _flagUrlFn?.((FLAG_CODE as Record<string, string>)[id] ?? id);
  return url ? (
    <img src={url} alt="" width={size} height={size} style={{ borderRadius: 2 }} />
  ) : (
    <span style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{id.toUpperCase()}</span>
  );
}

// Sorted by the displayed label, not DUEL_LANGS' fixed declaration order, so
// the (136+ language) list reads alphabetically in the current UI language —
// mirrors lang-pair-select.tsx's sortByLabel for the same reason.
function _sortedDuelLangs(exclude: string): Code[] {
  return DUEL_LANGS.filter((l) => l.id !== exclude)
    .map((l) => l.id)
    .sort((a, b) => t('lang.' + a).localeCompare(t('lang.' + b), getLang()));
}

function _renderLangOption(l: Code): ReactElement {
  return (
    <span className="flagdd-content inline-flex items-center gap-1.5">
      <LangFlag id={l} size={16} />
      <span className="flagdd-label">{t('lang.' + l)}</span>
    </span>
  );
}

// "Я знаю" — the language the user already knows.
export function DuelKnowLangPicker() {
  useDuelLobby();
  const know = _getSelKnowLang() as Code;
  const learn = _getSelLang();
  return (
    <FlagDropdown
      value={know}
      options={_sortedDuelLangs(learn)}
      renderOption={_renderLangOption}
      onChange={_setSelKnowLang}
      ariaLabel={t('langpair.know')}
    />
  );
}

// "Хочу вчити" — the language being practiced (target).
export function DuelLangPicker() {
  useDuelLobby();
  const learn = _getSelLang() as Code;
  const know = _getSelKnowLang();
  return (
    <FlagDropdown
      value={learn}
      options={_sortedDuelLangs(know)}
      renderOption={_renderLangOption}
      onChange={_setSelLang}
      ariaLabel={t('duel.lang')}
    />
  );
}

function _modeDesc(modeId: DuelMode, learnLang: string, knowLang: string): string {
  const desc = t('duel.mode.' + modeId + '.desc');
  // Anagram/letters always work with English words only (scrambled letters),
  // regardless of the selected know/learn languages — flag that explicitly.
  if (modeId === 'anagram' || modeId === 'letters') return `${desc} (EN)`;
  if (modeId !== 'quiz' && modeId !== 'reverse') return desc;
  // Sentinel swap avoids double-replacement when knowLang/learnLang is itself
  // 'ua'/'en' (e.g. knowLang='ua' must not get re-replaced by the UA->learnLang step).
  return desc
    .replace('EN', ' K ')
    .replace('UA', ' L ')
    .replace(' K ', knowLang.toUpperCase())
    .replace(' L ', learnLang.toUpperCase());
}

export function DuelModePicker() {
  useDuelLobby();
  const [selMode, setSelMode] = useState(_getSelMode());
  const selLang = _getSelLang();
  const selKnowLang = _getSelKnowLang();
  return (
    <>
      {DUEL_MODES.map((m) => {
        const active = m.id === selMode;
        return (
          <button
            key={m.id}
            type="button"
            className={'duel-mode-btn' + (active ? ' duel-mode-sel' : '')}
            onClick={() => {
              _setSelMode(m.id);
              setSelMode(m.id);
            }}
            style={{
              flex: 1,
              minWidth: 90,
              padding: '9px 6px',
              borderRadius: 11,
              border: `2px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
              background: active ? 'rgba(0,200,100,.08)' : 'var(--card)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.2rem' }}>{m.icon}</div>
            <div
              style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text)', marginTop: 2 }}
            >
              {t('duel.mode.' + m.id)}
            </div>
            <div style={{ fontSize: '.62rem', color: 'var(--text3)' }}>
              {_modeDesc(m.id, selLang, selKnowLang)}
            </div>
          </button>
        );
      })}
    </>
  );
}

export function DuelCategoryPicker() {
  const [selCategory, setSelCategory] = useState(_getSelCategory());
  const cats = ['', ...CATEGORY_LIST];
  const labelFor = (c: string): string => (c ? categoryName(c) : t('duel.allWords'));
  return (
    <Select
      value={selCategory}
      onValueChange={(v) => {
        const c = v as string;
        _setSelCategory(c);
        setSelCategory(c);
      }}
    >
      <SelectTrigger
        className="h-auto w-full justify-between rounded-[10px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-3 py-2 font-[inherit] text-[.83rem] text-[var(--text)]"
      >
        <SelectValue>{(v: string) => labelFor(v)}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {cats.map((c) => (
          <SelectItem key={c} value={c}>
            {labelFor(c)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function DuelOptionsRow() {
  const [selDifficulty, setSelDifficulty] = useState<Difficulty>(_getSelDifficulty());
  const [selBestOf, setSelBestOf] = useState<BestOf>(_getSelBestOf());
  const [selMaxHints, setSelMaxHints] = useState(_getSelMaxHints());
  const [selPowerups, setSelPowerups] = useState(_getSelPowerups());

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 5 }}>
          {t('duel.difficulty')}
        </div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {DIFFICULTIES.map((d) => {
            const active = d.id === selDifficulty;
            return (
              <button
                key={d.id}
                type="button"
                className={'duel-cefr-btn' + (active ? ' duel-cefr-active' : '')}
                title={t('duel.diff.' + d.id + '.desc')}
                onClick={() => {
                  _setSelDifficulty(d.id);
                  setSelDifficulty(d.id);
                }}
                style={{
                  padding: '5px 9px',
                  borderRadius: 8,
                  border: `1.5px solid ${active ? d.color : 'var(--border)'}`,
                  background: active ? d.color + '22' : 'transparent',
                  color: active ? d.color : 'var(--text3)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '.78rem',
                  fontWeight: active ? 700 : 400,
                  transition: 'all .12s',
                }}
              >
                {d.id === 'mixed' ? t('duel.diff.mixed') : d.label}
              </button>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          alignItems: 'center',
          fontSize: '.8rem',
          color: 'var(--text2)',
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {t('duel.format')}
          <Select
            value={String(selBestOf)}
            onValueChange={(v) => {
              const bestOf = parseInt(v as string) as BestOf;
              _setSelBestOf(bestOf);
              setSelBestOf(bestOf);
            }}
          >
            <SelectTrigger
              size="sm"
              className="h-auto rounded-[8px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-2 py-1 font-[inherit] text-[.8rem] text-[var(--text)]"
            >
              <SelectValue>
                {(v: string) => (v === '1' ? t('duel.oneRound') : t('duel.bestOf3'))}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t('duel.oneRound')}</SelectItem>
              <SelectItem value="3">{t('duel.bestOf3')}</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {t('duel.hints')}
          <button
            type="button"
            className="duel-info-btn"
            title={t('duel.hints')}
            onClick={(e) => {
              e.stopPropagation();
              _showInfoTooltip(e.currentTarget, 'hints');
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '.85rem',
              color: 'var(--text3)',
              padding: '0 2px',
            }}
          >
            ℹ️
          </button>
          :
          <Select
            value={String(selMaxHints)}
            onValueChange={(v) => {
              const hints = parseInt(v as string);
              _setSelMaxHints(hints);
              setSelMaxHints(hints);
            }}
          >
            <SelectTrigger
              size="sm"
              className="h-auto rounded-[8px] border-[1.5px] border-[var(--border)] bg-[var(--bg)] px-2 py-1 font-[inherit] text-[.8rem] text-[var(--text)]"
            >
              <SelectValue>
                {(v: string) =>
                  v === '0'
                    ? t('duel.hintsUnlimited')
                    : v === '3'
                      ? t('duel.hints3')
                      : t('duel.hints1')
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">{t('duel.hintsUnlimited')}</SelectItem>
              <SelectItem value="3">{t('duel.hints3')}</SelectItem>
              <SelectItem value="1">{t('duel.hints1')}</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
          <Switch
            size="sm"
            checked={selPowerups}
            onCheckedChange={(v) => {
              _setSelPowerups(v);
              setSelPowerups(v);
            }}
          />
          <span>🎯 Power-ups</span>
          <button
            type="button"
            className="duel-info-btn"
            title="Power-ups"
            onClick={(e) => {
              e.stopPropagation();
              _showInfoTooltip(e.currentTarget, 'powerups');
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '.85rem',
              color: 'var(--text3)',
              padding: '0 2px',
            }}
          >
            ℹ️
          </button>
        </label>
      </div>
    </>
  );
}
