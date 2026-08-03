// Vymova — js/features/progress-io.tsx
// Export / import progress + modal event listeners
import { useRef, useState, type ReactElement } from 'react';
import { _lzSave, _lzLoad, saveKnown, saveKnownLang } from '../core/storage.ts';
import { updateSrsUI } from '../core/srs.ts';
import { getSrsDataSnapshot, loadSrsData } from '../../src/srs-store.ts';
import { invalidateGameCaches } from './game/game.ts';
import { W } from '../../data/words-data/words.js';
import * as LZString from 'lz-string';
import type { WordEntry, SRSData } from '../../src/types.js';
import { ALL_TARGET_LANGS, type TargetLang } from '../../src/types.js';
import { t } from './i18n.ts';
import { renderGameBar } from './game/render-game-bar.ts';
import { refreshGameBarLevel } from './game/game-bar-level.tsx';
import { render } from '../core/card-engine.ts';
import { openStats, closeStats } from './stats/stats-trigger.ts';
import { getKnownSnapshot, setKnownWords, type KnownLang } from '../../src/known-words-store.ts';
import { Dialog, DialogOverlay, DialogPopup, DialogPortal } from '../../src/components/ui/dialog.tsx';

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

export function ProgressIO(): ReactElement {
  const [exportOpen, setExportOpen] = useState(false);
  const [exportCode, setExportCode] = useState('');
  // 'idle' = "Виділити все", 'copied-no-revert' = the auto-copy-on-open
  // label (original never scheduled a revert for this one — only the
  // manual select-all click does), 'copied' = manual click, reverts after
  // 2s.
  const [selectAllLabel, setSelectAllLabel] = useState<'idle' | 'copied-no-revert' | 'copied'>(
    'idle',
  );
  const exportTaRef = useRef<HTMLTextAreaElement>(null);
  const selectAllRevertRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState('');
  const [importedLabel, setImportedLabel] = useState(false);
  const importedRevertRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function copyToClipboard(text: string): Promise<void> {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    try {
      document.execCommand('copy');
    } catch (e) {}
    return Promise.resolve();
  }

  function onExportClick(): void {
    closeStats();
    const code = exportProgress();
    setExportCode(code);
    setSelectAllLabel('idle');
    setExportOpen(true);
    setTimeout(() => {
      const ta = exportTaRef.current;
      ta?.focus();
      ta?.select();
      try {
        copyToClipboard(code)
          .then(() => setSelectAllLabel('copied-no-revert'))
          .catch(() => {
            /* user copies manually */
          });
      } catch (e) {}
    }, 100);
  }

  function onExportSelectAll(): void {
    const ta = exportTaRef.current;
    ta?.focus();
    ta?.select();
    try {
      copyToClipboard(exportCode).then(() => {
        setSelectAllLabel('copied');
        if (selectAllRevertRef.current) clearTimeout(selectAllRevertRef.current);
        selectAllRevertRef.current = setTimeout(() => setSelectAllLabel('idle'), 2000);
      });
    } catch (e) {}
  }

  function closeExportModal(): void {
    setExportOpen(false);
    setSelectAllLabel('idle');
  }

  function onImportOpenClick(): void {
    setImportText('');
    setImportError('');
    closeStats();
    setImportOpen(true);
  }

  function onImportConfirm(): void {
    const code = importText.trim();
    if (!code) {
      setImportError(t('modal.importEmpty'));
      return;
    }
    // Unlike cloud-sync.tsx's restore (which merges known-words/SRS/
    // achievements and already gates on this same confirm pattern),
    // importProgress() below fully overwrites every language's known
    // words, SRS state, and game/daily/achievement data in one shot with
    // no merge and no undo — a stale/wrong code pasted here silently
    // wipes all current progress.
    if (!confirm(t('modal.importConfirm'))) return;
    if (importProgress(code)) {
      setImportOpen(false);
      _safe(() => renderGameBar());
      _safe(() => refreshGameBarLevel());
      _safe(() => openStats());
      _safe(() => render());
      setImportedLabel(true);
      if (importedRevertRef.current) clearTimeout(importedRevertRef.current);
      importedRevertRef.current = setTimeout(() => setImportedLabel(false), 3000);
    } else {
      setImportError(t('modal.importInvalid'));
    }
  }

  return (
    <>
      <button className="backup-btn primary" id="btn-export" onClick={onExportClick}>
        {t('settings.export')}
      </button>
      <button className="backup-btn" id="btn-import-open" onClick={onImportOpenClick}>
        {importedLabel ? t('modal.importedExcl') : t('settings.import')}
      </button>

      {exportOpen && (
        <Dialog
          open
          onOpenChange={(nextOpen) => {
            if (!nextOpen) closeExportModal();
          }}
        >
          <DialogPortal>
            <DialogOverlay id="export-overlay" className="bg-black/55 p-5" />
            <DialogPopup className="import-panel bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] shadow-[var(--import-panel-shadow)]">
              <div className="import-title">{t('modal.exportTitle')}</div>
              <div className="import-sub">{t('modal.exportSub')}</div>
              <textarea
                id="export-textarea"
                ref={exportTaRef}
                readOnly
                value={exportCode}
                style={{
                  width: '100%',
                  height: 120,
                  border: '1.5px solid var(--border)',
                  borderRadius: 10,
                  padding: 10,
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  resize: 'none',
                  boxSizing: 'border-box',
                  marginBottom: 10,
                }}
              />
              <div className="backup-row">
                <button className="backup-btn" onClick={onExportSelectAll}>
                  {selectAllLabel === 'idle' ? t('modal.selectAll') : t('modal.copiedExcl')}
                </button>
                <button className="backup-btn primary" onClick={closeExportModal}>
                  {t('modal.done')}
                </button>
              </div>
            </DialogPopup>
          </DialogPortal>
        </Dialog>
      )}

      {importOpen && (
        <Dialog
          open
          onOpenChange={(nextOpen) => {
            if (!nextOpen) setImportOpen(false);
          }}
        >
          <DialogPortal>
            <DialogOverlay id="import-overlay" className="bg-black/55 p-5" />
            <DialogPopup className="import-panel bg-[var(--delete-panel-bg)] [border:var(--delete-panel-border)] shadow-[var(--import-panel-shadow)]">
              <div className="import-title">{t('modal.importTitle')}</div>
              <div className="import-sub">{t('modal.importSub')}</div>
              <textarea
                id="import-textarea"
                placeholder={t('modal.importPlaceholder')}
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
              />
              <div className="import-error" id="import-error">
                {importError}
              </div>
              <div className="backup-row">
                <button className="backup-btn" onClick={() => setImportOpen(false)}>
                  {t('modal.cancel')}
                </button>
                <button className="backup-btn primary" onClick={onImportConfirm}>
                  {t('modal.import')}
                </button>
              </div>
            </DialogPopup>
          </DialogPortal>
        </Dialog>
      )}
    </>
  );
}
