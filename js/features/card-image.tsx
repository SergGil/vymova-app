// Vymova — js/features/card-image.tsx
// Реактивний #illus: картинка картки (кеш/IndexedDB/Pixabay/Wikipedia fallback).
// Виділено з card-engine.ts's renderCardImage() (item: card/deck DOM extraction).
import { useEffect, useRef } from 'react';
import { getIllus } from '../../data/illustrations.js';
import { loadWikiImage, _imgCache, _idb } from '../core/images.ts';
import { _isOnlineCheck, _offlineSvg } from './offline.ts';
import { useDeckState } from '../../src/deck-store.ts';

const _IMG_S = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';

function renderCardImage(
  word: string,
  illusEl: HTMLElement,
  isCurrentWord: (w: string) => boolean,
): void {
  try {
    if (Object.prototype.hasOwnProperty.call(_imgCache, word) && _imgCache[word]) {
      const img = document.createElement('img');
      img.alt = '';
      img.loading = 'lazy';
      img.style.cssText = _IMG_S;
      const _clearAndRefetch = function () {
        delete _imgCache[word];
        if (typeof _idb !== 'undefined' && _idb) {
          try {
            _idb.transaction('imgs', 'readwrite').objectStore('imgs').delete(word);
          } catch (e2) {}
        }
        const fb = getIllus(word);
        if (fb) {
          illusEl.innerHTML = fb;
          illusEl.style.display = '';
        } else {
          illusEl.innerHTML = '';
          illusEl.style.display = 'none';
        }
        loadWikiImage(word, function (wd, newUrl) {
          if (!isCurrentWord(wd)) return;
          if (newUrl) {
            const _ni = document.createElement('img');
            _ni.alt = '';
            _ni.loading = 'lazy';
            _ni.style.cssText = _IMG_S;
            _ni.onload = function () {
              if (_ni.naturalWidth < 10) illusEl.style.display = 'none';
            };
            _ni.onerror = function () {
              illusEl.style.display = 'none';
            };
            _ni.src = newUrl;
            illusEl.innerHTML = '';
            illusEl.appendChild(_ni);
            illusEl.style.display = '';
          }
        });
      };
      img.onerror = _clearAndRefetch;
      // Pixabay повертає HTTP 200 з темним placeholder коли URL закінчився —
      // перевіряємо розмір: реальне фото завжди > 10px
      img.onload = function () {
        if (img.naturalWidth < 10 || img.naturalHeight < 10) _clearAndRefetch();
      };
      img.src = (_imgCache as Record<string, string>)[word];
      illusEl.innerHTML = '';
      illusEl.appendChild(img);
      illusEl.style.display = '';
    } else {
      const _localIllus = getIllus(word);
      if (_localIllus) {
        illusEl.innerHTML = _localIllus;
        illusEl.style.display = '';
      } else {
        illusEl.innerHTML = '';
        illusEl.style.display = 'none';
      }
      if (!Object.prototype.hasOwnProperty.call(_imgCache, word)) {
        if (!_isOnlineCheck() && !_localIllus) {
          illusEl.innerHTML = _offlineSvg(word);
          if (illusEl.innerHTML) illusEl.style.display = '';
        } else {
          loadWikiImage(word, function (wd, imgUrl) {
            if (!isCurrentWord(wd)) return;
            if (imgUrl) {
              illusEl.innerHTML =
                '<img src="' + imgUrl + '" alt="" loading="lazy" style="' + _IMG_S + '">';
              illusEl.style.display = '';
            }
          });
        }
      }
    }
  } catch (e) {
    try {
      illusEl.style.display = 'none';
    } catch (e2) {}
  }
}

export function CardImage() {
  const { cw } = useDeckState();
  const elRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<string | null>(null);

  useEffect(() => {
    const el = elRef.current;
    wordRef.current = cw ? cw[0] : null;
    if (!el || !cw) return;
    renderCardImage(cw[0], el, (w) => wordRef.current === w);
  }, [cw]);

  return <div className="illus-box" id="illus" ref={elRef} />;
}
