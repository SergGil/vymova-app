// Vymova — js/features/progress-io.tsx
// Export / import progress + modal event listeners
import { useEffect, type ReactElement } from 'react';
import { _lzSave, _lzLoad, saveKnown, saveKnownLang } from '../core/storage.ts';
import { updateSrsUI } from '../core/srs.ts';
import { getSrsDataSnapshot, loadSrsData } from '../../src/srs-store.ts';
import { invalidateGameCaches } from './game.ts';
import { W } from '../../data/words.js';
import * as LZString from 'lz-string';
import type { WordEntry, SRSData } from '../../src/types.js';
import { ALL_TARGET_LANGS, type TargetLang } from '../../src/types.js';
import { t } from './i18n.ts';
import { renderGameBar } from './render-game-bar.ts';
import { refreshGameBarLevel } from './game-bar-level.tsx';
import { render } from '../core/card-engine.ts';
import { openStats, closeStats } from './stats-trigger.ts';
import { getKnownSnapshot, setKnownWords, type KnownLang } from '../../src/known-words-store.ts';

const ALL_KNOWN_LANGS: KnownLang[] = ['en', ...ALL_TARGET_LANGS];

function _srsKeyFor(lang: KnownLang): string {
  return lang === 'en' ? 'ew_srs' : `ew_srs_${lang}`;
}

// v3 and earlier only ever captured the English-only 'ew_known'/'ew_srs'/
// 'ew_game'/... keys — silently dropping (on export) or overwriting (on
// import) progress in any other learn language, since per-language
// progress actually lives under 'ew_known_es'/'ew_srs_fr'/'ew_game_de'/...
// (see js/features/game.ts's _langKey() and js/features/cloud-sync.tsx's
// _dynamicBackupKeys(), which already solves the identical problem for
// cloud backups). v4 captures every learn language's known-words/SRS via
// the reactive stores (always fresh, even if not yet flushed to disk) plus
// every language's game/daily/achievements bucket verbatim from localStorage.
function exportProgress(): string {
  const activeLang = localStorage.getItem('ew_learn_lang') ?? 'en';

  const known: Record<string, string> = {};
  for (const lang of ALL_KNOWN_LANGS) known[lang] = JSON.stringify([...getKnownSnapshot(lang)]);

  // The SRS domain store only ever holds ONE language's data in memory (the
  // currently active one — see js/app.ts's ew-learn-lang-changed listener),
  // so that one comes from the live in-memory snapshot (always fresh); every
  // other language's SRS is read straight off disk via the same _lzLoad
  // helper saveSRS()/loadSRS() use internally, since it's not reflected in
  // the domain store regardless.
  const srs: Record<string, string> = { [activeLang]: JSON.stringify(getSrsDataSnapshot()) };
  for (const lang of ALL_KNOWN_LANGS) {
    if (lang === activeLang) continue;
    const data = _lzLoad<SRSData>(_srsKeyFor(lang), {});
    if (Object.keys(data).length) srs[lang] = JSON.stringify(data);
  }

  // game/daily/ach have no reactive store at all (js/features/game.ts is a
  // plain localStorage-backed module cache) — raw copy is the source of
  // truth for these, same as cloud-sync.tsx's approach.
  const raw: Record<string, string> = {};
  for (const suffix of ['game', 'daily', 'ach'] as const) {
    for (const lang of ALL_KNOWN_LANGS) {
      const key = lang === 'en' ? `ew_${suffix}` : `ew_${suffix}_${lang}`;
      const v = localStorage.getItem(key);
      if (v !== null) raw[key] = v;
    }
  }

  const data = { v: 4, known, srs, raw, theme: localStorage.getItem('ew_theme') || '' };
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function _safe(fn: () => void): void {
  try {
    fn();
  } catch (e) {
    console.warn('[safe]', (e as Error).message ?? e);
  }
}

// Pre-v4 codes only ever carried English-only progress — restore it exactly
// as before, nothing else to migrate since older exports never captured
// other languages in the first place.
function _importLegacy(data: { v: number; known?: string; srs?: string }): void {
  let knownJson = data.known,
    srsJson = data.srs;

  if (data.v === 1) {
    _safe(() => {
      const _d = LZString.decompress(knownJson ?? '');
      if (_d) knownJson = _d;
    });
    _safe(() => {
      const _d = LZString.decompress(srsJson ?? '');
      if (_d) srsJson = _d;
    });
  }

  if (knownJson) _safe(() => _lzSave('ew_known', JSON.parse(knownJson!)));
  if (srsJson) _safe(() => _lzSave('ew_srs', JSON.parse(srsJson!)));

  if (knownJson) {
    _safe(() => setKnownWords('en', new Set<string>(JSON.parse(knownJson!))));
  }
  if (srsJson) {
    _safe(() => {
      const newSrs: Record<string, unknown> = JSON.parse(srsJson!);
      Object.keys(newSrs).forEach((k) => {
        if (typeof newSrs[k] === 'number') delete newSrs[k];
      });
      loadSrsData(newSrs as SRSData);
    });
  }
}

function _importV4(data: {
  known?: Record<string, string>;
  srs?: Record<string, string>;
  raw?: Record<string, string>;
}): void {
  const activeLang = localStorage.getItem('ew_learn_lang') ?? 'en';

  for (const [lang, json] of Object.entries(data.known ?? {})) {
    _safe(() => {
      const words = new Set<string>(JSON.parse(json));
      setKnownWords(lang as KnownLang, words);
      if (lang === 'en') saveKnown(words);
      else saveKnownLang(lang as TargetLang, words);
    });
  }

  for (const [lang, json] of Object.entries(data.srs ?? {})) {
    _safe(() => {
      const parsed: Record<string, unknown> = JSON.parse(json);
      Object.keys(parsed).forEach((k) => {
        if (typeof parsed[k] === 'number') delete parsed[k];
      });
      // Only the currently active language's SRS is reflected live in the
      // UI immediately — every other language picks its restored data up
      // next time ew-learn-lang-changed fires (js/app.ts), same as it
      // already does across sessions/tabs.
      if (lang === activeLang) loadSrsData(parsed as SRSData);
      _lzSave(_srsKeyFor(lang as KnownLang), parsed);
    });
  }

  for (const [key, v] of Object.entries(data.raw ?? {})) {
    _safe(() => localStorage.setItem(key, v));
  }
}

function importProgress(code: string): boolean {
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
    if (![1, 2, 3, 4].includes(data.v)) throw new Error('Невірний формат');

    if (data.v === 4) {
      _importV4(data);
    } else {
      _importLegacy(data);
    }
    if (data.theme) localStorage.setItem('ew_theme', data.theme);

    invalidateGameCaches();
    _safe(() => updateSrsUI(W as unknown as WordEntry[]));
    return true;
  } catch (e) {
    console.warn('Import failed:', (e as Error).message);
    return false;
  }
}

export function ProgressIO(): ReactElement | null {
  useEffect(() => {
    const btnExport = document.getElementById('btn-export');
    const onExportClick = function () {
      closeStats();
      const code = exportProgress();
      const ta = document.getElementById('export-textarea') as HTMLTextAreaElement;
      ta.value = code;
      document.getElementById('export-modal')!.style.display = 'flex';
      setTimeout(function () {
        ta.focus();
        ta.select();
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(code)
              .then(function () {
                document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
              })
              .catch(function () {
                /* user copies manually */
              });
          } else {
            document.execCommand('copy');
            document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
          }
        } catch (e) {}
      }, 100);
    };
    btnExport?.addEventListener('click', onExportClick);

    const exportSelectAll = document.getElementById('export-select-all');
    const onExportSelectAll = function () {
      const ta = document.getElementById('export-textarea') as HTMLTextAreaElement;
      ta.focus();
      ta.select();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(ta.value).then(function () {
            document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
            setTimeout(function () {
              document.getElementById('export-select-all')!.textContent = t('modal.selectAll');
            }, 2000);
          });
        } else {
          document.execCommand('copy');
          document.getElementById('export-select-all')!.textContent = t('modal.copiedExcl');
          setTimeout(function () {
            document.getElementById('export-select-all')!.textContent = t('modal.selectAll');
          }, 2000);
        }
      } catch (e) {}
    };
    exportSelectAll?.addEventListener('click', onExportSelectAll);

    const exportModalClose = document.getElementById('export-modal-close');
    const onExportModalClose = function () {
      document.getElementById('export-modal')!.style.display = 'none';
      document.getElementById('export-select-all')!.textContent = t('modal.selectAll');
    };
    exportModalClose?.addEventListener('click', onExportModalClose);

    const exportModal = document.getElementById('export-modal');
    const onExportModalClick = function (e: MouseEvent) {
      if (e.target === exportModal) exportModal!.style.display = 'none';
    };
    exportModal?.addEventListener('click', onExportModalClick);

    // ── Import modal ─────────────────────────────────────────────
    const btnImportOpen = document.getElementById('btn-import-open');
    const onImportOpenClick = function () {
      (document.getElementById('import-textarea') as HTMLTextAreaElement).value = '';
      document.getElementById('import-error')!.textContent = '';
      closeStats();
      document.getElementById('import-modal')!.className = 'open';
    };
    btnImportOpen?.addEventListener('click', onImportOpenClick);

    const importCancel = document.getElementById('import-cancel');
    const onImportCancel = function () {
      document.getElementById('import-modal')!.className = '';
    };
    importCancel?.addEventListener('click', onImportCancel);

    const importConfirm = document.getElementById('import-confirm');
    const onImportConfirm = function () {
      const code = (document.getElementById('import-textarea') as HTMLTextAreaElement).value.trim();
      if (!code) {
        document.getElementById('import-error')!.textContent = t('modal.importEmpty');
        return;
      }
      if (importProgress(code)) {
        document.getElementById('import-modal')!.className = '';
        _safe(() => renderGameBar());
        _safe(() => refreshGameBarLevel());
        _safe(() => openStats());
        _safe(() => render());
        const btn = document.getElementById('btn-import-open')!;
        btn.textContent = t('modal.importedExcl');
        setTimeout(function () {
          btn.textContent = t('settings.import');
        }, 3000);
      } else {
        document.getElementById('import-error')!.textContent = t('modal.importInvalid');
      }
    };
    importConfirm?.addEventListener('click', onImportConfirm);

    const importModal = document.getElementById('import-modal');
    const onImportModalClick = function (e: MouseEvent) {
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
