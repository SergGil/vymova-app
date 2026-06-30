// Vymova — js/features/character-avatar/index.tsx
// Public 3D character avatar component. `three` is loaded lazily on first
// render so pages that only show thumbnails (or none at all) don't pay for
// it in their initial bundle.
import { lazy, Suspense, useEffect, useState, type ReactElement } from 'react';
import type { CharacterAppearance } from '../../../src/types.ts';
import { cacheKeyFor, clampIdx } from './scene-builder.ts';
import { FallbackAvatar } from './fallback-avatar.tsx';

export {
  SKIN_TONES,
  HAIR_COLORS,
  EYE_COLORS,
  HAIR_STYLES,
  OUTFIT_STYLES,
  OUTFIT_COLORS,
  DEFAULT_APPEARANCE,
} from './appearance-options.ts';

export interface CharacterAvatarProps {
  appearance: CharacterAppearance;
  size?: number;
  /** 'full' = whole body (profile page); 'head' = cropped head+shoulders (small thumbnails). */
  variant?: 'full' | 'head';
  /** Idle breathing + blinking + drag-to-rotate. Disable for many small thumbnails rendered at once. */
  animated?: boolean;
}

const LiveAvatar = lazy(() => import('./live-avatar.tsx').then((m) => ({ default: m.LiveAvatar })));

let snapshotModule: typeof import('./snapshot-cache.ts') | null = null;
let snapshotModulePromise: Promise<typeof import('./snapshot-cache.ts')> | null = null;

function loadSnapshotModule(): Promise<typeof import('./snapshot-cache.ts')> {
  if (!snapshotModulePromise) {
    snapshotModulePromise = import('./snapshot-cache.ts').then((m) => {
      snapshotModule = m;
      return m;
    });
  }
  return snapshotModulePromise;
}

function Thumbnail({
  appearance,
  size,
  variant,
}: Required<Pick<CharacterAvatarProps, 'appearance' | 'size' | 'variant'>>): ReactElement {
  const key = cacheKeyFor(appearance, variant, size);
  const [dataUrl, setDataUrl] = useState<string | null>(
    () => snapshotModule?.getSnapshot(appearance, variant, size) ?? null,
  );

  useEffect(() => {
    let cancelled = false;
    if (snapshotModule) {
      setDataUrl(snapshotModule.getSnapshot(appearance, variant, size));
      return;
    }
    loadSnapshotModule().then((m) => {
      if (!cancelled) setDataUrl(m.getSnapshot(appearance, variant, size));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `key` is the derived identity of (appearance, variant, size)
  }, [key]);

  const height = Math.round(size * (variant === 'head' ? 1 : 320 / 200));

  if (!dataUrl) return <FallbackAvatar appearance={appearance} size={size} />;
  return (
    <img
      src={dataUrl}
      width={size}
      height={height}
      alt=""
      role="img"
      aria-label="character avatar"
    />
  );
}

export function CharacterAvatar({
  appearance,
  size = 220,
  variant = 'full',
  animated = true,
}: CharacterAvatarProps): ReactElement {
  if (animated) {
    return (
      <Suspense fallback={<FallbackAvatar appearance={appearance} size={size} />}>
        <LiveAvatar appearance={appearance} size={size} variant={variant} />
      </Suspense>
    );
  }
  return <Thumbnail appearance={appearance} size={size} variant={variant} />;
}

// Re-exported so callers that need wrap-not-throw index math elsewhere can
// reuse the same logic the renderer uses internally.
export { clampIdx };
