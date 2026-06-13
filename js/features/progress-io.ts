// English Words App — js/features/progress-io.ts
// Export / import progress + modal event listeners
import { _lzSave } from '../core/storage.ts';
import { state } from '../../src/state.ts';
import { updateSrsUI } from '../core/srs.ts';
import { W } from '../../data/words.js';
import LZString from '../../lib/lzstring.js';
import type { WordEntry } from '../../src/types.js';
import { t } from './i18n.ts';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { render } from '../core/card-engine.ts';

function exportProgress(): string {
  const data = {
    v: 3,
    known:  JSON.stringify([...(state.known)]),
    srs:    JSON.stringify(state.srsData),
    game:   localStorage.getItem('ew_game')   || '{}',
    daily:  localStorage.getItem('ew_daily')  || '{}',
    ach:    localStorage.getItem('ew_ach')    || '[]',
    theme:  localStorage.getItem('ew_theme')  || '',
    custom: localStorage.getItem('ew_custom') || '[]',
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function _safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

function importProgress(code: string): boolean {
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
    if (data.v !== 1 && data.v !== 2 && data.v !== 3) throw new Error('Невірний формат');

    let knownJson = data.known, srsJson = data.srs;

    if (data.v === 1) {
      _safe(() => { const _d = LZString.decompress(knownJson); if (_d) knownJson = _d; });
      _safe(() => { const _d = LZString.decompress(srsJson);   if (_d) srsJson   = _d; });
    }

    if (knownJson) { _safe(() => _lzSave('ew_known', JSON.parse(knownJson))); }
    if (srsJson)   { _safe(() => _lzSave('ew_srs',   JSON.parse(srsJson)));  }
    if (data.game)   localStorage.setItem('ew_game',   data.game);
    if (data.daily)  localStorage.setItem('ew_daily',  data.daily);
    if (data.ach)    localStorage.setItem('ew_ach',    data.ach);
    if (data.theme)  localStorage.setItem('ew_theme',  data.theme);
    if (data.custom) localStorage.setItem('ew_custom', data.custom);

    _safe(() => {
      const newKnown = new Set<string>(JSON.parse(knownJson));
      state.known = newKnown;
    });
    _safe(() => {
      const newSrs: Record<string, any> = JSON.parse(srsJson);
      Object.keys(newSrs).forEach(function(k){ if(typeof newSrs[k]==='number') delete newSrs[k]; });
      state.srsData = newSrs;
    });
    state._srsStatsDirty = true;
    state._gameCache = null;
    _safe(() => updateSrsUI(W as unknown as WordEntry[]));
    return true;
  } catch(e) {
    console.warn('Import failed:', (e as Error).message);
    return false;
  }
}

// ── Export modal ─────────────────────────────────────────────
document.getElementById('btn-export')!.addEventListener('click', function() {
  (window as any).closeStats?.();
  const code = exportProgress();
  const ta   = document.getElementById('export-textarea') as HTMLTextAreaElement;
  ta.value   = code;
  document.getElementById('export-modal')!.style.display = 'flex';
  setTimeout(function() {
    ta.focus();
    ta.select();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function() {
          document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
        }).catch(function(){ /* user copies manually */ });
      } else {
        document.execCommand('copy');
        document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
      }
    } catch(e) {}
  }, 100);
});

document.getElementById('export-select-all')!.addEventListener('click', function() {
  const ta = document.getElementById('export-textarea') as HTMLTextAreaElement;
  ta.focus(); ta.select();
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ta.value).then(function() {
        document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
        setTimeout(function(){ document.getElementById('export-select-all')!.textContent = t('modal.selectAll'); }, 2000);
      });
    } else {
      document.execCommand('copy');
      document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
      setTimeout(function(){ document.getElementById('export-select-all')!.textContent = t('modal.selectAll'); }, 2000);
    }
  } catch(e) {}
});

document.getElementById('export-modal-close')!.addEventListener('click', function() {
  document.getElementById('export-modal')!.style.display = 'none';
  document.getElementById('export-select-all')!.textContent = t('modal.selectAll');
});
document.getElementById('export-modal')!.addEventListener('click', function(e) {
  if (e.target === this) (this as HTMLElement).style.display = 'none';
});

// ── Import modal ─────────────────────────────────────────────
document.getElementById('btn-import-open')!.addEventListener('click', function() {
  (document.getElementById('import-textarea') as HTMLTextAreaElement).value = '';
  document.getElementById('import-error')!.textContent = '';
  (window as any).closeStats?.();
  document.getElementById('import-modal')!.className = 'open';
});
document.getElementById('import-cancel')!.addEventListener('click', function() {
  document.getElementById('import-modal')!.className = '';
});
document.getElementById('import-confirm')!.addEventListener('click', function() {
  const code = (document.getElementById('import-textarea') as HTMLTextAreaElement).value.trim();
  if (!code) { document.getElementById('import-error')!.textContent = t('modal.importEmpty'); return; }
  if (importProgress(code)) {
    document.getElementById('import-modal')!.className = '';
    _safe(() => renderGameBar());
    _safe(() => refreshGameBarLevel());
    _safe(() => (window as any).openStats?.());
    _safe(() => render());
    const btn = document.getElementById('btn-import-open')!;
    btn.textContent = t('modal.importedExcl');
    setTimeout(function(){ btn.textContent = t('settings.import'); }, 3000);
  } else {
    document.getElementById('import-error')!.textContent = t('modal.importInvalid');
  }
});
document.getElementById('import-modal')!.addEventListener('click', function(e) {
  if (e.target === this) (this as HTMLElement).className = '';
});
