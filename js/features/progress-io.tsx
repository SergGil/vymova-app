// Vymova — js/features/progress-io.tsx
// Export / import progress + modal event listeners
import { useEffect, type ReactElement } from 'react';
import { _lzSave } from '../core/storage.ts';
import { updateSrsUI } from '../core/srs.ts';
import { getSrsDataSnapshot, loadSrsData } from '../../src/srs-store.ts';
import { invalidateGameCaches } from './game.ts';
import { W } from '../../data/words.js';
import * as LZString from 'lz-string';
import type { WordEntry } from '../../src/types.js';
import { t } from './i18n.ts';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { render } from '../core/card-engine.ts';
import { openStats, closeStats } from './stats-page.tsx';
import { getKnownSnapshot, setKnownWords } from '../../src/known-words-store.ts';

function exportProgress(): string {
  const data = {
    v: 3,
    known:  JSON.stringify([...getKnownSnapshot('en')]),
    srs:    JSON.stringify(getSrsDataSnapshot()),
    game:   localStorage.getItem('ew_game')   || '{}',
    daily:  localStorage.getItem('ew_daily')  || '{}',
    ach:    localStorage.getItem('ew_ach')    || '[]',
    theme:  localStorage.getItem('ew_theme')  || '',
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

    _safe(() => {
      const newKnown = new Set<string>(JSON.parse(knownJson));
      setKnownWords('en', newKnown);
    });
    _safe(() => {
      const newSrs: Record<string, any> = JSON.parse(srsJson);
      Object.keys(newSrs).forEach(function(k){ if(typeof newSrs[k]==='number') delete newSrs[k]; });
      loadSrsData(newSrs);
    });
    invalidateGameCaches();
    _safe(() => updateSrsUI(W as unknown as WordEntry[]));
    return true;
  } catch(e) {
    console.warn('Import failed:', (e as Error).message);
    return false;
  }
}

export function ProgressIO(): ReactElement | null {
  useEffect(() => {
    const btnExport = document.getElementById('btn-export');
    const onExportClick = function() {
      closeStats();
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
    };
    btnExport?.addEventListener('click', onExportClick);

    const exportSelectAll = document.getElementById('export-select-all');
    const onExportSelectAll = function() {
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
    };
    exportSelectAll?.addEventListener('click', onExportSelectAll);

    const exportModalClose = document.getElementById('export-modal-close');
    const onExportModalClose = function() {
      document.getElementById('export-modal')!.style.display = 'none';
      document.getElementById('export-select-all')!.textContent = t('modal.selectAll');
    };
    exportModalClose?.addEventListener('click', onExportModalClose);

    const exportModal = document.getElementById('export-modal');
    const onExportModalClick = function(e: MouseEvent) {
      if (e.target === exportModal) exportModal!.style.display = 'none';
    };
    exportModal?.addEventListener('click', onExportModalClick);

    // ── Import modal ─────────────────────────────────────────────
    const btnImportOpen = document.getElementById('btn-import-open');
    const onImportOpenClick = function() {
      (document.getElementById('import-textarea') as HTMLTextAreaElement).value = '';
      document.getElementById('import-error')!.textContent = '';
      closeStats();
      document.getElementById('import-modal')!.className = 'open';
    };
    btnImportOpen?.addEventListener('click', onImportOpenClick);

    const importCancel = document.getElementById('import-cancel');
    const onImportCancel = function() {
      document.getElementById('import-modal')!.className = '';
    };
    importCancel?.addEventListener('click', onImportCancel);

    const importConfirm = document.getElementById('import-confirm');
    const onImportConfirm = function() {
      const code = (document.getElementById('import-textarea') as HTMLTextAreaElement).value.trim();
      if (!code) { document.getElementById('import-error')!.textContent = t('modal.importEmpty'); return; }
      if (importProgress(code)) {
        document.getElementById('import-modal')!.className = '';
        _safe(() => renderGameBar());
        _safe(() => refreshGameBarLevel());
        _safe(() => openStats());
        _safe(() => render());
        const btn = document.getElementById('btn-import-open')!;
        btn.textContent = t('modal.importedExcl');
        setTimeout(function(){ btn.textContent = t('settings.import'); }, 3000);
      } else {
        document.getElementById('import-error')!.textContent = t('modal.importInvalid');
      }
    };
    importConfirm?.addEventListener('click', onImportConfirm);

    const importModal = document.getElementById('import-modal');
    const onImportModalClick = function(e: MouseEvent) {
      if (e.target === importModal) importModal!.className = '';
    };
    importModal?.addEventListener('click', onImportModalClick);

    return () => {
      btnExport?.removeEventListener('click', onExportClick);
      exportSelectAll?.removeEventListener('click', onExportSelectAll);
      exportModalClose?.removeEventListener('click', onExportModalClose);
      exportModal?.removeEventListener('click', onExportModalClick);
      btnImportOpen?.removeEventListener('click', onImportOpenClick);
      importCancel?.removeEventListener('click', onImportCancel);
      importConfirm?.removeEventListener('click', onImportConfirm);
      importModal?.removeEventListener('click', onImportModalClick);
    };
  }, []);

  return null;
}
