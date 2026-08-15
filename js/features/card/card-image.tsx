// Vymova — js/features/card/card-image.tsx
// Реактивний #illus: картинка картки (кеш/IndexedDB/Pixabay/Wikipedia fallback).
// Виділено з card-engine.ts's renderCardImage() (item: card/deck DOM extraction).
import { useEffect, useRef, useState, type CSSProperties, type SyntheticEvent } from 'react';
import { getIllus } from '../../../data/illustrations.js';
import { loadWikiImage, _imgCache, _idb } from '../../core/images.ts';
import { _isOnlineCheck, _offlineSvg } from '../offline.ts';
import { useDeckState } from '../../../src/deck-store.ts';

const _IMG_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 8,
};

// .illus-box's own box (docs/full-css-tailwind-migration-roadmap.md
// Tier 2c) — shared between both return branches below. The ≤480px and
// ≤360px tiers are written as mutually EXCLUSIVE ranges (361-480 vs.
// ≤360), not two overlapping `!important` rules racing on Tailwind's
// generation order for unrelated custom variants (verified live: two
// custom `[@media(...)]:` variants do NOT reliably order narrower-wins
// the way the built-in max-[Npx]: scale does) — only the 361-480 tier
// still needs `!` at all, to beat the landscape tier below when both
// apply; ≤360px never visibly conflicts with the landscape tier since
// both resolve to the same 60px.
const _ILLUS_BOX_CLASS =
  'illus-box shrink-0 rounded-[12px] overflow-hidden bg-[var(--bg)] flex items-center justify-center [@media(min-width:361px)_and_(max-width:480px)]:size-[72px]! [@media(max-width:360px)]:size-[60px] [@media(max-height:500px)_and_(max-width:900px)]:size-[60px] size-[100px]';

// 'retry': the first paint of a cached URL — on failure, clear the cache
// entry and fall back to local/offline art while re-fetching via
// loadWikiImage(). 'hide-only': the re-fetched image from that retry — on
// failure just hides (no further recursion, avoids an infinite loop).
// 'none': a fresh (never-cached) Wikipedia result — matches the original's
// wikiImg, which never validated size/load errors at all.
type ImgState =
  | { kind: 'none' }
  | { kind: 'html'; html: string }
  | { kind: 'img'; src: string; word: string; validation: 'retry' | 'hide-only' | 'none' };

function clearAndRefetchCardImage(
  word: string,
  isCurrentWord: (w: string) => boolean,
  setState: (s: ImgState) => void,
): void {
  delete _imgCache[word];
  if (typeof _idb !== 'undefined' && _idb) {
    try {
      _idb.transaction('imgs', 'readwrite').objectStore('imgs').delete(word);
    } catch (e2) {}
  }
  const fb = getIllus(word);
  setState(fb ? { kind: 'html', html: fb } : { kind: 'none' });
  loadWikiImage(word, (wd, newUrl) => {
    if (!isCurrentWord(wd)) return;
    if (newUrl) setState({ kind: 'img', src: newUrl, word: wd, validation: 'hide-only' });
  });
}

function resolveCardImage(
  word: string,
  isCurrentWord: (w: string) => boolean,
  setState: (s: ImgState) => void,
): void {
  try {
    if (Object.prototype.hasOwnProperty.call(_imgCache, word) && _imgCache[word]) {
      setState({
        kind: 'img',
        src: (_imgCache as Record<string, string>)[word],
        word,
        validation: 'retry',
      });
      return;
    }
    const localIllus = getIllus(word);
    setState(localIllus ? { kind: 'html', html: localIllus } : { kind: 'none' });
    if (!Object.prototype.hasOwnProperty.call(_imgCache, word)) {
      if (!_isOnlineCheck() && !localIllus) {
        const off = _offlineSvg(word);
        if (off) setState({ kind: 'html', html: off });
      } else {
        loadWikiImage(word, (wd, imgUrl) => {
          if (!isCurrentWord(wd)) return;
          if (imgUrl) setState({ kind: 'img', src: imgUrl, word: wd, validation: 'none' });
        });
      }
    }
  } catch (e) {
    setState({ kind: 'none' });
  }
}

export function CardImage() {
  const { cw } = useDeckState();
  const wordRef = useRef<string | null>(null);
  const [state, setState] = useState<ImgState>({ kind: 'none' });

  useEffect(() => {
    const word = cw ? cw[0] : null;
    wordRef.current = word;
    if (!word) {
      setState({ kind: 'none' });
      return;
    }
    resolveCardImage(word, (w) => wordRef.current === w, setState);
  }, [cw]);

  function onImgError(): void {
    if (state.kind !== 'img') return;
    if (state.validation === 'retry') {
      clearAndRefetchCardImage(state.word, (w) => wordRef.current === w, setState);
    } else if (state.validation === 'hide-only') {
      setState({ kind: 'none' });
    }
  }

  function onImgLoad(e: SyntheticEvent<HTMLImageElement>): void {
    if (state.kind !== 'img') return;
    const img = e.currentTarget;
    // Pixabay повертає HTTP 200 з темним placeholder коли URL закінчився —
    // перевіряємо розмір: реальне фото завжди > 10px
    if (state.validation === 'retry' && (img.naturalWidth < 10 || img.naturalHeight < 10)) {
      clearAndRefetchCardImage(state.word, (w) => wordRef.current === w, setState);
    } else if (state.validation === 'hide-only' && img.naturalWidth < 10) {
      setState({ kind: 'none' });
    }
  }

  // 'html' gets its own return (dangerouslySetInnerHTML can't be combined
  // with `children`, even falsy ones) — this also keeps the SVG a direct
  // child of #illus, matching .illus-box svg's CSS selector and the
  // original innerHTML= behavior, with no extra wrapper element.
  if (state.kind === 'html') {
    return (
      <div className={_ILLUS_BOX_CLASS} id="illus" dangerouslySetInnerHTML={{ __html: state.html }} />
    );
  }

  return (
    <div
      className={_ILLUS_BOX_CLASS}
      id="illus"
      style={state.kind === 'none' ? { display: 'none' } : undefined}
    >
      {state.kind === 'img' && (
        <img
          alt=""
          loading="lazy"
          style={_IMG_STYLE}
          src={state.src}
          onLoad={onImgLoad}
          onError={onImgError}
        />
      )}
    </div>
  );
}
