// Vymova — js/features/character-avatar/scene-lighting.ts
// Shared lighting rig + camera framing. 'full' vs 'head' variants are
// implemented purely via camera framing (analogous to the old SVG viewBox),
// not via different geometry.
import { Scene, AmbientLight, DirectionalLight, PerspectiveCamera, Vector3 } from 'three';
import type { BuiltCharacter } from './scene-builder.ts';

export function createLitScene(): Scene {
  const scene = new Scene();
  scene.add(new AmbientLight('#ffffff', 0.7));
  const key = new DirectionalLight('#ffffff', 1.1);
  key.position.set(1.2, 2, 2.5);
  scene.add(key);
  const fill = new DirectionalLight('#bcd4ff', 0.35);
  fill.position.set(-1.5, 0.5, -1);
  scene.add(fill);
  return scene;
}

export function createCamera(
  variant: 'full' | 'head',
  built: BuiltCharacter,
  aspect: number,
): PerspectiveCamera {
  const camera = new PerspectiveCamera(variant === 'head' ? 28 : 32, aspect, 0.1, 20);
  if (variant === 'head') {
    const headPos = new Vector3();
    built.headAnchor.getWorldPosition(headPos);
    camera.position.set(headPos.x, headPos.y + 0.05, headPos.z + 1.25);
    camera.lookAt(headPos.x, headPos.y, headPos.z);
  } else {
    camera.position.set(0, 1.0, 3.4);
    camera.lookAt(0, 0.85, 0);
  }
  return camera;
}
