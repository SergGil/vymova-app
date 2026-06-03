// English Words App — js/features/profiles.ts
// Multi-profile: sidebar dropdown + inline add form + edit

const LIST_KEY   = 'ew_profiles';
const ACTIVE_KEY = 'ew_active_profile';

const BASE_SNAP_KEYS = [
  'ew_known', 'ew_known_lz', 'ew_srs', 'ew_srs_lz',
  'ew_game', 'ew_daily', 'ew_ach', 'ew_custom', 'ew_milestones',
  'ew_pairs_best', 'ew_ws_voice', 'ew_ws_uk_voice',
  'ew_notes', 'ew_bookmarks',
  'tempo_best_30', 'tempo_best_60', 'tempo_best_120',
  // Pattern: all ew_* keys not already listed above are captured dynamically in _snapKeys()
];

// Registry for new feature keys — call registerProfileKey('ew_new_feature') from any module
const _extraSnapKeys: string[] = [];
export function registerProfileKey(key: string): void {
  if (!BASE_SNAP_KEYS.includes(key) && !_extraSnapKeys.includes(key)) _extraSnapKeys.push(key);
}

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

function _init(): void {
  let profiles = _getProfiles();
  if (!profiles.length) {
    const id = 'p' + Date.now();
    profiles = [{ id, name: 'Гравець', avatar: '🧑' }];
    _setProfiles(profiles); _setActiveId(id); _saveSnapshot(id);
    localStorage.setItem('ew_onboarding_needed', '1'); // first ever launch
  } else {
    const aid = _getActiveId();
    if (!profiles.some(p => p.id === aid)) {
      _setActiveId(profiles[0].id); _loadSnapshot(profiles[0].id);
    }
  }
  _updateUI();
}

function _updateUI(): void {
  const profiles = _getProfiles();
  const active = profiles.find(p => p.id === _getActiveId()) ?? profiles[0];
  if (!active) return;
  const hBtn = document.getElementById('profile-btn');
  if (hBtn) hBtn.innerHTML = `${active.avatar} <span>${active.name}</span> ▾`;
  const sbAv   = document.getElementById('sb-profile-av');
  const sbName = document.getElementById('sb-profile-name');
  if (sbAv)   sbAv.textContent   = active.avatar;
  if (sbName) sbName.textContent = active.name;
}

let _dropOpen = false, _addOpen = false;

function _renderDropdown(): void {
  const dd = document.getElementById('sb-dropdown');
  if (!dd) return;
  dd.innerHTML = '';
  const profiles = _getProfiles(), activeId = _getActiveId();
  profiles.forEach(p => {
    const row = document.createElement('div');
    row.className = 'sb-dd-row';
    row.style.cssText = 'display:flex;align-items:center;gap:4px;width:100%;';

    const btn = document.createElement('button');
    btn.className = `sb-dd-item${p.id === activeId ? ' sb-dd-active' : ''}`;
    btn.style.cssText = 'flex:1;min-width:0;';
    btn.innerHTML = `<span style="font-size:1.1rem">${p.avatar}</span> <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</span>`;
    if (p.id === activeId) btn.innerHTML += '<span class="sb-dd-check">✓</span>';
    else btn.addEventListener('click', () => _switch(p.id));

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️'; editBtn.title = 'Редагувати';
    editBtn.style.cssText = 'background:none;border:none;cursor:pointer;padding:2px 4px;font-size:.85rem;opacity:.5;border-radius:6px;flex-shrink:0;';
    editBtn.addEventListener('mouseenter', () => editBtn.style.opacity = '1');
    editBtn.addEventListener('mouseleave', () => editBtn.style.opacity = '.5');
    editBtn.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation(); _showEditModal(p.id, p.name, p.avatar, profiles);
    });

    const del = document.createElement('button');
    del.textContent = '×'; del.title = 'Видалити';
    del.style.cssText = 'background:none;border:none;cursor:pointer;padding:2px 5px;font-size:1rem;opacity:.35;border-radius:6px;flex-shrink:0;color:inherit;';
    del.addEventListener('mouseenter', () => { del.style.opacity = '1'; del.style.color = '#e74c3c'; });
    del.addEventListener('mouseleave', () => { del.style.opacity = '.35'; del.style.color = 'inherit'; });
    del.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation(); if (profiles.length > 1) _showDeleteModal(p.id, profiles);
    });

    row.appendChild(btn); row.appendChild(editBtn);
    if (profiles.length > 1) row.appendChild(del);
    dd.appendChild(row);
  });
}

function _toggleDropdown(): void {
  _dropOpen = !_dropOpen;
  if (_dropOpen) { _closeAddForm(); _renderDropdown(); }
  document.getElementById('sb-dropdown')?.classList.toggle('open', _dropOpen);
  const arrow = document.getElementById('sb-profile-arrow');
  if (arrow) arrow.textContent = _dropOpen ? '▴' : '▾';
}
function _toggleAddForm(): void {
  _addOpen = !_addOpen;
  if (_addOpen) _closeDropdown();
  document.getElementById('sb-add-form')?.classList.toggle('open', _addOpen);
  if (_addOpen) {
    const inp = document.getElementById('sb-new-name') as HTMLInputElement | null;
    if (inp) { inp.value = ''; inp.focus(); }
  }
}
function _closeDropdown(): void {
  _dropOpen = false;
  document.getElementById('sb-dropdown')?.classList.remove('open');
  const arrow = document.getElementById('sb-profile-arrow');
  if (arrow) arrow.textContent = '▾';
}
function _closeAddForm(): void {
  _addOpen = false;
  document.getElementById('sb-add-form')?.classList.remove('open');
}

// ── Edit modal ─────────────────────────────────────────────────
let _editOverlay: HTMLElement | null = null;
let _editingId: string | null = null;

function _getOrCreateEditOverlay(): HTMLElement {
  if (_editOverlay) return _editOverlay;
  const AVATARS = ['🧑','👩','🧔','👦','👧','🤖','🦊','🐸','⚔️','🌟','🔥','🏆'];
  const ovl = document.createElement('div');
  ovl.id = 'prf-edit-overlay';
  ovl.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:none;align-items:center;justify-content:center;padding:16px;';
  ovl.innerHTML = `
    <div style="background:var(--modal-bg,#fff);border-radius:18px;padding:22px 20px;max-width:320px;width:100%;box-shadow:0 8px 32px rgba(0,0,0,.25);">
      <div style="font-size:.95rem;font-weight:700;margin-bottom:14px;color:var(--text);">✏️ Редагувати профіль</div>
      <input id="prf-edit-name" type="text" maxlength="20" placeholder="Ім'я профіля..."
        style="width:100%;padding:8px 12px;border:1.5px solid var(--border);border-radius:10px;font-size:.85rem;font-family:inherit;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box;margin-bottom:10px;">
      <div style="font-size:.72rem;color:var(--text3);margin-bottom:6px;">Аватар:</div>
      <div id="prf-edit-av-picker" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
        ${AVATARS.map(a => `<button class="prf-av-btn prf-edit-av" data-av="${a}" style="font-size:1.3rem;padding:4px 7px;border-radius:8px;border:2px solid var(--border);background:var(--modal-av-bg,rgba(0,0,0,.05));cursor:pointer;">${a}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;">
        <button id="prf-edit-cancel" style="padding:8px 16px;border-radius:10px;border:1.5px solid var(--border);background:none;color:var(--text2);cursor:pointer;">Скасувати</button>
        <button id="prf-edit-save" style="padding:8px 16px;border-radius:10px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-weight:600;">Зберегти</button>
      </div>
    </div>`;
  document.body.appendChild(ovl);
  ovl.querySelectorAll<HTMLButtonElement>('.prf-edit-av').forEach(btn => {
    btn.addEventListener('click', () => {
      ovl.querySelectorAll('.prf-edit-av').forEach(b => (b as HTMLElement).style.borderColor = 'transparent');
      btn.style.borderColor = 'var(--accent)';
    });
  });
  ovl.addEventListener('click', (e: MouseEvent) => { if (e.target === ovl) _hideEditModal(); });
  document.getElementById('prf-edit-cancel')?.addEventListener('click', _hideEditModal);
  document.getElementById('prf-edit-save')?.addEventListener('click', () => {
    const nameInp = document.getElementById('prf-edit-name') as HTMLInputElement;
    const name = nameInp?.value.trim();
    if (!name) { nameInp.style.borderColor = '#e74c3c'; setTimeout(() => { nameInp.style.borderColor = ''; }, 1200); return; }
    const selAv = ovl.querySelector<HTMLButtonElement>('.prf-edit-av[style*="var(--accent)"]');
    _saveEdit(name, selAv?.dataset.av ?? '🧑');
  });
  _editOverlay = ovl; return ovl;
}

function _showEditModal(id: string, currentName: string, currentAvatar: string, _profiles: Profile[]): void {
  _editingId = id; _closeDropdown();
  const ovl = _getOrCreateEditOverlay();
  const nameInp = ovl.querySelector<HTMLInputElement>('#prf-edit-name')!;
  nameInp.value = currentName;
  ovl.querySelectorAll<HTMLButtonElement>('.prf-edit-av').forEach(btn => {
    btn.style.borderColor = btn.dataset.av === currentAvatar ? 'var(--accent)' : 'transparent';
  });
  ovl.style.display = 'flex';
  setTimeout(() => nameInp.focus(), 60);
}
function _hideEditModal(): void { if (_editOverlay) _editOverlay.style.display = 'none'; _editingId = null; }
function _saveEdit(newName: string, newAvatar: string): void {
  if (!_editingId) return;
  const profiles = _getProfiles();
  const p = profiles.find((x: Profile) => x.id === _editingId);
  if (!p) return;
  p.name = newName; p.avatar = newAvatar;
  _setProfiles(profiles); _hideEditModal(); _updateUI();
  (window.renderDuel as (() => void) | undefined)?.();
}

// ── Delete modal ───────────────────────────────────────────────
let _pendingDeleteId: string | null = null;
let _pendingProfiles: Profile[] | null = null;

function _showDeleteModal(id: string, profiles: Profile[]): void {
  _pendingDeleteId = id; _pendingProfiles = profiles;
  const profile = profiles.find(p => p.id === id);
  const nameEl = document.getElementById('prf-delete-name');
  if (nameEl) nameEl.textContent = profile ? `${profile.avatar} ${profile.name}` : '';
  document.getElementById('prf-delete-overlay')?.classList.add('open');
}
function _hideDeleteModal(): void {
  _pendingDeleteId = null; _pendingProfiles = null;
  document.getElementById('prf-delete-overlay')?.classList.remove('open');
}

document.getElementById('prf-delete-cancel')?.addEventListener('click', _hideDeleteModal);
document.getElementById('prf-delete-confirm')?.addEventListener('click', () => {
  if (_pendingDeleteId && _pendingProfiles) _deleteProfile(_pendingDeleteId, _pendingProfiles);
  _hideDeleteModal();
});
document.getElementById('prf-delete-overlay')?.addEventListener('click', function (this: HTMLElement, e: MouseEvent) {
  if (e.target === this) _hideDeleteModal();
});

function _switch(newId: string): void {
  const cur = _getActiveId();
  if (newId === cur) { _closeDropdown(); return; }
  _saveSnapshot(cur); _setActiveId(newId); _loadSnapshot(newId);
  window.removeEventListener('beforeunload', _onBeforeUnload);
  window.location.reload();
}
function _addProfile(name: string, avatar: string): void {
  const profiles = _getProfiles(), cur = _getActiveId();
  _saveSnapshot(cur);
  const id = 'p' + Date.now();
  profiles.push({ id, name, avatar });
  _setProfiles(profiles); _setActiveId(id); _clearActiveKeys();
  localStorage.setItem('ew_onboarding_needed', '1'); // trigger onboarding on next load
  window.removeEventListener('beforeunload', _onBeforeUnload);
  window.location.reload();
}
function _deleteProfile(id: string, profiles: Profile[]): void {
  const idx = profiles.findIndex(p => p.id === id);
  if (idx === -1) return;

  const wasActive = _getActiveId() === id;
  profiles.splice(idx, 1); _setProfiles(profiles);

  // Remove all snapshot keys for this profile
  const prefix = `ew_p_${id}__`;
  const toRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k?.startsWith(prefix)) toRemove.push(k); }
  toRemove.forEach(k => localStorage.removeItem(k));

  if (wasActive && profiles.length > 0) {
    // Switch to first remaining profile and reload to reinitialize app state
    const next = profiles[0];
    _setActiveId(next.id);
    _loadSnapshot(next.id);
    window.removeEventListener('beforeunload', _onBeforeUnload);
    window.location.reload();
  } else {
    // Non-active profile deleted — just refresh the UI
    _closeDropdown();
    _updateUI();
    _renderDropdown();
  }
}

document.getElementById('sb-profile-btn')?.addEventListener('click', _toggleDropdown);
document.getElementById('sb-add-btn')?.addEventListener('click', _toggleAddForm);
document.getElementById('sb-new-confirm')?.addEventListener('click', () => {
  const nameInp = document.getElementById('sb-new-name') as HTMLInputElement | null;
  const name = nameInp?.value.trim() ?? '';
  if (!name) { if (nameInp) { nameInp.style.borderColor = '#e74c3c'; setTimeout(() => { nameInp.style.borderColor = ''; }, 1200); } return; }
  const selAv = document.querySelector<HTMLButtonElement>('#sb-add-form .prf-av-btn.prf-av-active');
  _addProfile(name, selAv?.textContent ?? '🧑');
});
document.querySelectorAll('#sb-add-form .prf-av-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#sb-add-form .prf-av-btn').forEach(x => x.classList.remove('prf-av-active'));
    b.classList.add('prf-av-active');
  });
});
document.getElementById('profile-btn')?.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar && window.innerWidth <= 900) sidebar.classList.add('open');
  _toggleDropdown();
});
document.addEventListener('click', (e: MouseEvent) => {
  const section = document.querySelector('.sb-profile-section');
  if (section && !section.contains(e.target as Node)) { _closeDropdown(); _closeAddForm(); }
});

function _onBeforeUnload(): void { const aid = _getActiveId(); if (aid) _saveSnapshot(aid); }
window.addEventListener('beforeunload', _onBeforeUnload);

_init();

export {};
