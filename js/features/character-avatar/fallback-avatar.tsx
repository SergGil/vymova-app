// Vymova — js/features/character-avatar/fallback-avatar.tsx
// Minimal placeholder shown when WebGL is unavailable (old browsers,
// disabled GPU, test environments). Intentionally simple.
import type { ReactElement } from 'react';
import type { CharacterAppearance } from '../../../src/types.ts';
import { SKIN_TONES } from './appearance-options.ts';
import { clampIdx } from './scene-builder.ts';

export function FallbackAvatar({ appearance, size }: { appearance: CharacterAppearance; size: number }): ReactElement {
  const skin = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  return (
    <div
      role="img"
      aria-label="character avatar"
      style={{
        width: size, height: size, borderRadius: '50%',
        background: skin, display: 'inline-block',
      }}
    />
  );
}
