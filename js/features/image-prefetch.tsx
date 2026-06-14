// English Words App — js/features/image-prefetch.tsx
// Background image prefetch + Pixabay key management (Settings panel)
import { useState, useRef, useEffect, type ReactElement } from 'react';
import { loadWikiImage, _imgCache, _getPixabayKey, resetImgCache } from '../core/images.ts';
import { W } from '../../data/words.js';
import { t, wordsLabel } from './i18n.ts';
import { showImgClearConfirm } from './sidebar.tsx';
import { useStateVersion, notifyStateChange } from '../../src/store.ts';
import type { WordEntry } from '../../src/types.js';

export function ImagePrefetchSettings(): ReactElement {
  useStateVersion();
  const [running, setRunning] = useState(false);
  const [, setTick] = useState(0);
  const posRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runningRef = useRef(false);
  const [pixDraft, setPixDraft] = useState<string | null>(null);

  useEffect(() => {
    const overlay = document.getElementById('stats-overlay');
    const onClick = () => setTick(n => n + 1);
    overlay?.addEventListener('click', onClick);
    return () => {
      overlay?.removeEventListener('click', onClick);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function cachedCount(): number { return Object.keys(_imgCache).length; }
  function withImageCount(): number { return Object.keys(_imgCache).filter(k => _imgCache[k]).length; }

  function findNext(): string | null {
    while (posRef.current < W.length && Object.prototype.hasOwnProperty.call(_imgCache, (W[posRef.current] as unknown as WordEntry)[0])) posRef.current++;
    return posRef.current < W.length ? (W[posRef.current] as unknown as WordEntry)[0] : null;
  }

  function fetchNext(): void {
    if (!runningRef.current) return;
    const word = findNext();
    if (!word) {
      runningRef.current = false;
      setRunning(false);
      return;
    }
    posRef.current++;
    loadWikiImage(word, () => {
      setTick(n => n + 1);
      const delay = _getPixabayKey() ? 150 : 400;
      timerRef.current = setTimeout(fetchNext, delay);
    });
  }

  function start(): void {
    if (runningRef.current) return;
    runningRef.current = true;
    posRef.current = 0;
    setRunning(true);
    fetchNext();
  }

  function stop(): void {
    runningRef.current = false;
    setRunning(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  const cached  = cachedCount();
  const withImg = withImageCount();
  const total   = W.length;
  const pct     = Math.round(cached / total * 100);

  let statusText: string, statusColor: string;
  if (running) {
    statusText  = `${t('settings.prefetchLoading')} ${cached}/${total} (${withImg} ${t('settings.withPhotos')})`;
    statusColor = 'var(--accent)';
  } else if (cached >= total) {
    statusText  = `${t('settings.prefetchDonePrefix')} ${withImg} ${t('settings.prefetchImagesOf')} ${total} ${wordsLabel(total)}`;
    statusColor = '#27ae60';
  } else if (cached > 0) {
    statusText  = `${t('settings.prefetchPaused')} ${cached}/${total} (${withImg} ${t('settings.withPhotos')})`;
    statusColor = 'var(--text3)';
  } else {
    statusText  = `${t('settings.prefetchReady')} (${total} ${wordsLabel(total)})`;
    statusColor = 'var(--text3)';
  }
  const showStart = !running && cached < total;

  const pixKey = _getPixabayKey();
  const pixStatusText  = pixKey ? t('settings.pixabayKeySaved') : t('settings.pixabayNoKey');
  const pixStatusColor = pixKey ? 'var(--accent)' : 'var(--text3)';
  const pixValue = pixDraft ?? (pixKey ? pixKey.slice(0, 6) + '••••••••••••••••••••••••••' : '');

  return (
    <>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginTop: '8px' }}>
        <input id="pixabay-key-input" type="text" placeholder={t('settings.pixabayPlaceholder')}
          value={pixValue}
          onChange={(e) => setPixDraft(e.target.value)}
          style={{ flex: 1, padding: '8px 10px', border: '1.5px solid var(--border)', borderRadius: '9px', fontSize: '.82rem', fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--text)', outline: 'none' }}
        />
        <button className="backup-btn primary" style={{ flexShrink: 0, padding: '8px 16px' }} onClick={() => {
          const val = (pixDraft ?? '').trim();
          if (val && !val.includes('•')) {
            localStorage.setItem('ew_pixabay_key', val);
            resetImgCache();
          }
          setPixDraft(null);
          notifyStateChange();
        }}>{t('settings.save')}</button>
      </div>
      <div style={{ fontSize: '.73rem', marginTop: '5px', color: pixStatusColor }}>{pixStatusText}</div>
      <div style={{ marginTop: '12px' }}>
        <div className="settings-desc" style={{ marginBottom: '8px' }}>{t('settings.prefetchDesc')}</div>
        <div style={{ height: '5px', background: 'var(--border)', borderRadius: '4px', marginBottom: '8px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--accent)', borderRadius: '4px', transition: 'width .5s', width: pct + '%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '.72rem', color: statusColor }}>{statusText}</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {showStart && <button className="backup-btn primary" style={{ padding: '6px 12px', fontSize: '.75rem' }} onClick={start}>{t('settings.prefetchStart')}</button>}
            {running && <button className="backup-btn" style={{ padding: '6px 12px', fontSize: '.75rem' }} onClick={stop}>{t('settings.prefetchPause')}</button>}
            <button className="backup-btn" style={{ padding: '6px 12px', fontSize: '.75rem' }} onClick={() => {
              showImgClearConfirm(() => {
                stop();
                resetImgCache();
                posRef.current = 0;
                setTick(n => n + 1);
              });
            }}>{t('settings.prefetchClear')}</button>
          </div>
        </div>
      </div>
    </>
  );
}
