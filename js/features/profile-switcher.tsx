// English Words App — js/features/profile-switcher.tsx
// Multi-profile: sidebar dropdown + inline add form + edit/delete modals
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { renderDuel } from './duel.ts';

const LIST_KEY   = 'ew_profiles';
const ACTIVE_KEY = 'ew_active_profile';

const BASE_SNAP_KEYS = [
  'ew_known', 'ew_known_lz', 'ew_srs', 'ew_srs_lz',
  'ew_game', 'ew_daily', 'ew_ach', 'ew_milestones',
  'ew_pairs_best', 'ew_ws_voice', 'ew_ws_uk_voice', 'ew_ws_es_voice',
  'ew_notes', 'ew_bookmarks',
  'tempo_best_30', 'tempo_best_60', 'tempo_best_120',
  // Pattern: all ew_* keys not already listed above are captured dynamically in _snapKeys()
];

const _extraSnapKeys: string[] = [];

const AVATARS = ['🧑', '👩', '🧔', '👦', '👧', '🤖', '🦊', '🐸', '⚔️', '🌟', '🔥', '🏆'];

type Profile = { id: string; name: string; avatar: string };

function _getProfiles(): Profile[] {
  try { return JSON.parse(localStorage.getItem(LIST_KEY) ?? '[]') as Profile[]; }
  catch (e) { return []; }
}
function _setProfiles(p: Profile[]): void { localStorage.setItem(LIST_KEY, JSON.stringify(p)); }
function _getActiveId(): string { return localStorage.getItem(ACTIVE_KEY) ?? ''; }
function _setActiveId(id: string): void { localStorage.setItem(ACTIVE_KEY, id); }

function _snapKeys(): string[] {
  const keys = [...BASE_SNAP_KEYS, ..._extraSnapKeys];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k?.startsWith('ew_cp_') && !keys.includes(k)) keys.push(k);
  }
  return keys;
}
function _saveSnapshot(id: string): void {
  _snapKeys().forEach(k => {
    const v = localStorage.getItem(k);
    if (v !== null) localStorage.setItem(`ew_p_${id}__${k}`, v);
    else            localStorage.removeItem(`ew_p_${id}__${k}`);
  });
}
function _loadSnapshot(id: string): void {
  _snapKeys().forEach(k => {
    const v = localStorage.getItem(`ew_p_${id}__${k}`);
    if (v !== null) localStorage.setItem(k, v);
    else            localStorage.removeItem(k);
  });
}
function _clearActiveKeys(): void { BASE_SNAP_KEYS.forEach(k => localStorage.removeItem(k)); }

// Ensure at least one profile exists before the component reads initial state.
function _ensureInit(): void {
  let profiles = _getProfiles();
  if (!profiles.length) {
    const id = 'p' + Date.now();
    profiles = [{ id, name: t('duel.player'), avatar: '🧑' }];
    _setProfiles(profiles); _setActiveId(id); _saveSnapshot(id);
    localStorage.setItem('ew_onboarding_needed', '1'); // first ever launch
  } else {
    const aid = _getActiveId();
    if (!profiles.some(p => p.id === aid)) {
      _setActiveId(profiles[0].id); _loadSnapshot(profiles[0].id);
    }
  }
}

function _onBeforeUnload(): void { const aid = _getActiveId(); if (aid) _saveSnapshot(aid); }

export function ProfileSwitcher(): ReactElement {
  const [profiles, setProfiles] = useState<Profile[]>(() => _getProfiles());
  const [activeId, setActiveId] = useState<string>(() => _getActiveId());
  const [dropOpen, setDropOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('🧑');
  const [newNameError, setNewNameError] = useState(false);
  const [editTarget, setEditTarget] = useState<Profile | null>(null);
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const [editNameError, setEditNameError] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Profile | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const active = profiles.find(p => p.id === activeId) ?? profiles[0];

  useEffect(() => {
    window.addEventListener('beforeunload', _onBeforeUnload);
    return () => window.removeEventListener('beforeunload', _onBeforeUnload);
  }, []);

  // Keep the (hidden, legacy) header profile button in sync.
  useEffect(() => {
    const hBtn = document.getElementById('profile-btn');
    if (hBtn && active) hBtn.innerHTML = `${active.avatar} <span>${active.name}</span> ▾`;
  }, [active]);

  useEffect(() => {
    document.getElementById('prf-delete-overlay')?.classList.toggle('open', deleteTarget !== null);
  }, [deleteTarget]);

  // Close dropdown/add-form on outside click.
  useEffect(() => {
    function onClick(e: MouseEvent): void {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setDropOpen(false); setAddOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  function toggleDropdown(): void {
    setAddOpen(false);
    setDropOpen(o => !o);
  }
  function toggleAddForm(): void {
    setDropOpen(false);
    setAddOpen(o => {
      if (!o) { setNewName(''); setNewAvatar('🧑'); setNewNameError(false); }
      return !o;
    });
  }

  function switchProfile(newId: string): void {
    if (newId === activeId) { setDropOpen(false); return; }
    _saveSnapshot(activeId); _setActiveId(newId); _loadSnapshot(newId);
    window.removeEventListener('beforeunload', _onBeforeUnload);
    window.location.reload();
  }

  function confirmAdd(): void {
    const name = newName.trim();
    if (!name) { setNewNameError(true); setTimeout(() => setNewNameError(false), 1200); return; }
    _saveSnapshot(activeId);
    const id = 'p' + Date.now();
    const next = [...profiles, { id, name, avatar: newAvatar }];
    _setProfiles(next); _setActiveId(id); _clearActiveKeys();
    localStorage.setItem('ew_onboarding_needed', '1'); // trigger onboarding on next load
    window.removeEventListener('beforeunload', _onBeforeUnload);
    window.location.reload();
  }

  function openEdit(p: Profile): void {
    setDropOpen(false);
    setEditTarget(p); setEditName(p.name); setEditAvatar(p.avatar); setEditNameError(false);
  }
  function saveEdit(): void {
    const name = editName.trim();
    if (!name) { setEditNameError(true); setTimeout(() => setEditNameError(false), 1200); return; }
    if (!editTarget) return;
    const next = profiles.map(p => p.id === editTarget.id ? { ...p, name, avatar: editAvatar } : p);
    setProfiles(next); _setProfiles(next);
    setEditTarget(null);
    renderDuel();
  }

  function confirmDelete(): void {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    const idx = profiles.findIndex(p => p.id === id);
    if (idx === -1) { setDeleteTarget(null); return; }

    const wasActive = activeId === id;
    const next = profiles.slice();
    next.splice(idx, 1);
    _setProfiles(next);

    // Remove all snapshot keys for this profile
    const prefix = `ew_p_${id}__`;
    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k?.startsWith(prefix)) toRemove.push(k); }
    toRemove.forEach(k => localStorage.removeItem(k));

    if (wasActive && next.length > 0) {
      const nextActive = next[0];
      _setActiveId(nextActive.id);
      _loadSnapshot(nextActive.id);
      window.removeEventListener('beforeunload', _onBeforeUnload);
      window.location.reload();
    } else {
      setProfiles(next);
      setDeleteTarget(null);
    }
  }

  if (!active) return <div ref={rootRef} />;

  const deleteOverlay = document.getElementById('prf-delete-overlay');

  return (
    <div ref={rootRef}>
      <div className="sb-profile-row">
        <button id="sb-profile-btn" className="sidebar-profile-btn" onClick={toggleDropdown}>
          <span id="sb-profile-av" className="sb-av">{active.avatar}</span>
          <span id="sb-profile-name" className="sb-name">{active.name}</span>
          <span id="sb-profile-arrow" className="sb-arrow">{dropOpen ? '▴' : '▾'}</span>
        </button>
        <button id="sb-add-btn" className="sb-add-btn" title="Новий профіль" onClick={toggleAddForm}>+</button>
      </div>

      <div id="sb-dropdown" className={'sb-dropdown' + (dropOpen ? ' open' : '')}>
        {profiles.map(p => (
          <div className="sb-dd-row" style={{ display: 'flex', alignItems: 'center', gap: 4, width: '100%' }} key={p.id}>
            <button
              className={'sb-dd-item' + (p.id === activeId ? ' sb-dd-active' : '')}
              style={{ flex: 1, minWidth: 0 }}
              onClick={() => switchProfile(p.id)}
            >
              <span style={{ fontSize: '1.1rem' }}>{p.avatar}</span>{' '}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
              {p.id === activeId && <span className="sb-dd-check">✓</span>}
            </button>
            <button className="prf-dd-edit" title={t('profile.editTooltip')} onClick={(e) => { e.stopPropagation(); openEdit(p); }}>✏️</button>
            {profiles.length > 1 && (
              <button className="prf-dd-del" title={t('profile.deleteTooltip')} onClick={(e) => { e.stopPropagation(); setDeleteTarget(p); }}>×</button>
            )}
          </div>
        ))}
      </div>

      <div id="sb-add-form" className={'sb-add-form' + (addOpen ? ' open' : '')}>
        <input
          id="sb-new-name" type="text" maxLength={20}
          placeholder={t('profile.newNamePlaceholder')}
          value={newName} onChange={(e) => setNewName(e.target.value)}
          style={{
            width: '100%', padding: '7px 10px', borderRadius: 9, fontSize: '.82rem',
            fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)',
            outline: 'none', boxSizing: 'border-box', marginBottom: 8,
            border: `1.5px solid ${newNameError ? '#e74c3c' : 'var(--border)'}`,
          }}
        />
        <div className="prf-av-picker prf-av-mini">
          {AVATARS.map(a => (
            <button key={a} className={'prf-av-btn' + (a === newAvatar ? ' prf-av-active' : '')} onClick={() => setNewAvatar(a)}>{a}</button>
          ))}
        </div>
        <button id="sb-new-confirm" className="prf-add-confirm" style={{ marginTop: 8 }} onClick={confirmAdd}>{t('profile.create')}</button>
      </div>

      {editTarget && createPortal(
        <div id="prf-edit-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onClick={(e) => { if (e.target === e.currentTarget) setEditTarget(null); }}
        >
          <div style={{ background: 'var(--modal-bg, #fff)', borderRadius: 18, padding: '22px 20px', maxWidth: 320, width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,.25)' }}>
            <div style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: 14, color: 'var(--text)' }}>{t('profile.editTitle')}</div>
            <input
              type="text" maxLength={20} placeholder={t('profile.namePlaceholder')}
              value={editName} onChange={(e) => setEditName(e.target.value)}
              style={{
                width: '100%', padding: '8px 12px', borderRadius: 10, fontSize: '.85rem',
                fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)',
                outline: 'none', boxSizing: 'border-box', marginBottom: 10,
                border: `1.5px solid ${editNameError ? '#e74c3c' : 'var(--border)'}`,
              }}
            />
            <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 6 }}>{t('profile.avatarLabel')}</div>
            <div className="prf-av-picker" style={{ marginBottom: 14 }}>
              {AVATARS.map(a => (
                <button key={a} className={'prf-av-btn' + (a === editAvatar ? ' prf-av-active' : '')} onClick={() => setEditAvatar(a)}>{a}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button style={{ padding: '8px 16px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer' }} onClick={() => setEditTarget(null)}>{t('profile.cancel')}</button>
              <button style={{ padding: '8px 16px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer', fontWeight: 600 }} onClick={saveEdit}>{t('profile.save')}</button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {deleteTarget && deleteOverlay && createPortal(
        <div className="prf-delete-panel">
          <div className="prf-delete-icon">🗑️</div>
          <div className="prf-delete-title">Видалити профіль?</div>
          <div className="prf-delete-name" id="prf-delete-name">{deleteTarget.avatar} {deleteTarget.name}</div>
          <div className="prf-delete-warn">Весь прогрес буде видалено безповоротно.</div>
          <div className="prf-delete-btns">
            <button className="prf-delete-btn prf-delete-btn-cancel" onClick={() => setDeleteTarget(null)}>{t('modal.cancelAlt')}</button>
            <button className="prf-delete-btn prf-delete-btn-confirm" onClick={confirmDelete}>Видалити</button>
          </div>
        </div>,
        deleteOverlay
      )}
    </div>
  );
}

_ensureInit();
