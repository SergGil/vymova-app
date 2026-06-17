// English Words App — js/features/duel-lobby-options.tsx
// Лобі дуелі: вибір режиму (#duel-mode-picker), категорії (#duel-cat-picker)
// і опцій (#duel-options-row). Частина item 29 (Фаза 5).
import { useState } from 'react';
import { CATEGORY_LIST } from '../../data/categories.js';
import { t, categoryName } from './i18n.ts';
import type { Difficulty, BestOf, DuelMode } from './duel.ts';
import {
  DUEL_MODES, DIFFICULTIES, _showInfoTooltip,
  _getSelMode, _setSelMode,
  _getSelCategory, _setSelCategory,
  _getSelDifficulty, _setSelDifficulty,
  _getSelBestOf, _setSelBestOf,
  _getSelMaxHints, _setSelMaxHints,
  _getSelPowerups, _setSelPowerups,
  _getSelLang, _setSelLang,
} from './duel.ts';

const DUEL_LANGS: { id: string; flag: string; label: string }[] = [
  { id: 'ua', flag: '🇺🇦', label: 'UA' },
  { id: 'es', flag: '🇪🇸', label: 'ES' },
  { id: 'fr', flag: '🇫🇷', label: 'FR' },
  { id: 'it', flag: '🇮🇹', label: 'IT' },
  { id: 'pt', flag: '🇵🇹', label: 'PT' },
  { id: 'de', flag: '🇩🇪', label: 'DE' },
];

export function DuelLangPicker() {
  const [selLang, setSelLang] = useState(_getSelLang());
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {DUEL_LANGS.map(l => {
        const active = l.id === selLang;
        return (
          <button key={l.id} type="button"
            onClick={() => { _setSelLang(l.id); setSelLang(l.id); }}
            style={{
              padding: '5px 11px', borderRadius: 8,
              border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
              background: active ? 'rgba(0,200,100,.1)' : 'transparent',
              color: active ? 'var(--accent)' : 'var(--text2)',
              cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem',
              fontWeight: active ? 700 : 400, transition: 'all .12s',
            }}>
            {l.flag} {l.label}
          </button>
        );
      })}
    </div>
  );
}

export function DuelModePicker() {
  const [selMode, setSelMode] = useState(_getSelMode());
  return <>{DUEL_MODES.map(m => {
    const active = m.id === selMode;
    return (
      <button key={m.id} type="button" className={'duel-mode-btn' + (active ? ' duel-mode-sel' : '')}
        onClick={() => { _setSelMode(m.id); setSelMode(m.id); }}
        style={{
          flex: 1, minWidth: 90, padding: '9px 6px', borderRadius: 11,
          border: `2px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
          background: active ? 'rgba(0,200,100,.08)' : 'var(--card)',
          cursor: 'pointer', fontFamily: 'inherit', textAlign: 'center',
        }}>
        <div style={{ fontSize: '1.2rem' }}>{m.icon}</div>
        <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>{t('duel.mode.' + m.id)}</div>
        <div style={{ fontSize: '.62rem', color: 'var(--text3)' }}>{t('duel.mode.' + m.id + '.desc')}</div>
      </button>
    );
  })}</>;
}

export function DuelCategoryPicker() {
  const [selCategory, setSelCategory] = useState(_getSelCategory());
  const cats = ['', ...CATEGORY_LIST];
  return (
    <select value={selCategory} onChange={e => { _setSelCategory(e.target.value); setSelCategory(e.target.value); }}
      style={{ width: '100%', padding: '8px 12px', border: '1.5px solid var(--border)', borderRadius: 10, background: 'var(--bg)', color: 'var(--text)', fontFamily: 'inherit', fontSize: '.83rem', outline: 'none' }}>
      {cats.map(c => <option key={c} value={c}>{c ? categoryName(c) : t('duel.allWords')}</option>)}
    </select>
  );
}

export function DuelOptionsRow() {
  const [selDifficulty, setSelDifficulty] = useState<Difficulty>(_getSelDifficulty());
  const [selBestOf, setSelBestOf] = useState<BestOf>(_getSelBestOf());
  const [selMaxHints, setSelMaxHints] = useState(_getSelMaxHints());
  const [selPowerups, setSelPowerups] = useState(_getSelPowerups());

  return <>
    <div style={{ marginBottom: 8 }}>
      <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 5 }}>{t('duel.difficulty')}</div>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {DIFFICULTIES.map(d => {
          const active = d.id === selDifficulty;
          return (
            <button key={d.id} type="button" className={'duel-cefr-btn' + (active ? ' duel-cefr-active' : '')}
              title={t('duel.diff.' + d.id + '.desc')}
              onClick={() => { _setSelDifficulty(d.id); setSelDifficulty(d.id); }}
              style={{
                padding: '5px 9px', borderRadius: 8,
                border: `1.5px solid ${active ? d.color : 'var(--border)'}`,
                background: active ? d.color + '22' : 'transparent',
                color: active ? d.color : 'var(--text3)',
                cursor: 'pointer', fontFamily: 'inherit', fontSize: '.78rem',
                fontWeight: active ? 700 : 400, transition: 'all .12s',
              }}>
              {d.id === 'mixed' ? t('duel.diff.mixed') : d.label}
            </button>
          );
        })}
      </div>
    </div>
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', fontSize: '.8rem', color: 'var(--text2)' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {t('duel.format')}
        <select value={selBestOf} onChange={e => { const v = parseInt(e.target.value) as BestOf; _setSelBestOf(v); setSelBestOf(v); }}
          style={{ padding: '4px 8px', border: '1.5px solid var(--border)', borderRadius: 8, background: 'var(--bg)', color: 'var(--text)', fontSize: '.8rem', fontFamily: 'inherit', outline: 'none' }}>
          <option value={1}>{t('duel.oneRound')}</option>
          <option value={3}>{t('duel.bestOf3')}</option>
        </select>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {t('duel.hints')}
        <button type="button" className="duel-info-btn" title={t('duel.hints')}
          onClick={e => { e.stopPropagation(); _showInfoTooltip(e.currentTarget, 'hints'); }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '.85rem', color: 'var(--text3)', padding: '0 2px' }}>ℹ️</button>:
        <select value={selMaxHints} onChange={e => { const v = parseInt(e.target.value); _setSelMaxHints(v); setSelMaxHints(v); }}
          style={{ padding: '4px 8px', border: '1.5px solid var(--border)', borderRadius: 8, background: 'var(--bg)', color: 'var(--text)', fontSize: '.8rem', fontFamily: 'inherit', outline: 'none' }}>
          <option value={0}>{t('duel.hintsUnlimited')}</option>
          <option value={3}>{t('duel.hints3')}</option>
          <option value={1}>{t('duel.hints1')}</option>
        </select>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
        <input type="checkbox" checked={selPowerups} onChange={e => { _setSelPowerups(e.target.checked); setSelPowerups(e.target.checked); }} style={{ cursor: 'pointer' }} />
        <span>🎯 Power-ups</span>
        <button type="button" className="duel-info-btn" title="Power-ups"
          onClick={e => { e.stopPropagation(); _showInfoTooltip(e.currentTarget, 'powerups'); }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '.85rem', color: 'var(--text3)', padding: '0 2px' }}>ℹ️</button>
      </label>
    </div>
  </>;
}
