// Vymova — js/features/character-avatar/scene-builder.ts
// Pure procedural geometry builder for the 3D character avatar.
// No DOM, no WebGL — safe to unit-test directly.
import {
  Group,
  Mesh,
  SphereGeometry,
  CylinderGeometry,
  ConeGeometry,
  BoxGeometry,
  MeshStandardMaterial,
  DoubleSide,
} from 'three';
import type { Object3D } from 'three';
import type { CharacterAppearance } from '../../../src/types.ts';
import {
  SKIN_TONES,
  HAIR_COLORS,
  EYE_COLORS,
  HAIR_STYLES,
  OUTFIT_STYLES,
  OUTFIT_COLORS,
} from './appearance-options.ts';
import {
  buildSkeletonRig,
  buildLimbTube,
  buildSkinnedLimb,
  BONE_WORLD,
  type SkeletonRig,
} from './skeleton-builder.ts';

export function clampIdx(i: number, len: number): number {
  return ((i % len) + len) % len;
}

export interface BuiltCharacter {
  group: Group;
  torso: Object3D;
  headAnchor: Object3D;
  eyelids: Object3D[];
  rig: SkeletonRig;
  dispose(): void;
}

function disposeMesh(mesh: Mesh): void {
  mesh.geometry.dispose();
  const mat = mesh.material;
  if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
  else mat.dispose();
}

function disposeGroup(root: Object3D, skeleton: SkeletonRig['skeleton']): void {
  root.traverse((obj: Object3D) => {
    if (obj instanceof Mesh) disposeMesh(obj);
  });
  skeleton.dispose();
}

// Half-dome "cap" shared by most hair styles, mirrors the old SVG <path> cap.
function hairCap(color: string): Mesh {
  const mesh = new Mesh(
    new SphereGeometry(0.62, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new MeshStandardMaterial({ color, roughness: 0.7 }),
  );
  mesh.position.y = 1.55;
  return mesh;
}

export function buildHair(style: string, color: string): Mesh[] {
  if (style === 'bald') return [];

  if (style === 'short') return [hairCap(color)];

  if (style === 'long') {
    const cap = hairCap(color);
    const strandGeo = new CylinderGeometry(0.08, 0.08, 0.7, 8);
    const mat = new MeshStandardMaterial({ color, roughness: 0.7 });
    const left = new Mesh(strandGeo, mat);
    left.position.set(-0.58, 1.05, 0);
    const right = new Mesh(strandGeo, mat.clone());
    right.position.set(0.58, 1.05, 0);
    return [cap, left, right];
  }

  if (style === 'curly') {
    const cap = hairCap(color);
    const bumpGeo = new SphereGeometry(0.16, 10, 8);
    const mat = new MeshStandardMaterial({ color, roughness: 0.8 });
    const bumps = [-0.45, -0.22, 0, 0.22, 0.45].map((x) => {
      const m = new Mesh(bumpGeo, mat.clone());
      m.position.set(x, 1.78, 0.15);
      return m;
    });
    return [cap, ...bumps];
  }

  if (style === 'mohawk') {
    const mesh = new Mesh(
      new BoxGeometry(0.16, 0.6, 0.5),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    mesh.position.y = 1.9;
    return [mesh];
  }

  if (style === 'ponytail') {
    const cap = hairCap(color);
    const tail = new Mesh(
      new ConeGeometry(0.16, 0.75, 10),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    tail.position.set(0.55, 1.15, -0.25);
    tail.rotation.x = Math.PI * 0.55;
    return [cap, tail];
  }

  if (style === 'bun') {
    const cap = hairCap(color);
    const bun = new Mesh(
      new SphereGeometry(0.22, 12, 10),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    bun.position.set(0.5, 1.75, -0.1);
    return [cap, bun];
  }

  // spiky
  const cap = hairCap(color);
  const spikeGeo = new ConeGeometry(0.1, 0.4, 8);
  const mat = new MeshStandardMaterial({ color, roughness: 0.7 });
  const spikes = [-0.45, -0.27, -0.09, 0.09, 0.27, 0.45].map((x) => {
    const m = new Mesh(spikeGeo, mat.clone());
    m.position.set(x, 1.9, 0);
    return m;
  });
  return [cap, ...spikes];
}

export function buildCharacterGroup(appearance: CharacterAppearance): BuiltCharacter {
  const skin = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  const hairColor = HAIR_COLORS[clampIdx(appearance.hairColor, HAIR_COLORS.length)];
  const hairStyle = HAIR_STYLES[clampIdx(appearance.hairStyle, HAIR_STYLES.length)];
  const eyeColor = EYE_COLORS[clampIdx(appearance.eyeColor, EYE_COLORS.length)];
  const outfitStyle = OUTFIT_STYLES[clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length)];
  const outfitColor = OUTFIT_COLORS[clampIdx(appearance.outfitColor, OUTFIT_COLORS.length)];

  const group = new Group();
  const skinMat = new MeshStandardMaterial({ color: skin, roughness: 0.6 });
  const outfitMat = new MeshStandardMaterial({
    color: outfitColor,
    roughness: 0.65,
    side: DoubleSide,
  });
  const pantsMat = new MeshStandardMaterial({ color: '#34495e', roughness: 0.7, side: DoubleSide });
  const shoeMat = new MeshStandardMaterial({ color: '#1c2833', roughness: 0.5 });

  // Skeleton rig: bind pose requires bone world matrices to be current
  // *before* any SkinnedMesh.bind(skeleton) call below.
  const rig = buildSkeletonRig();
  group.add(rig.rootBone);
  group.updateMatrixWorld(true);
  const { bones, boneIndex, skeleton } = rig;

  // Torso/hips — one skinned tube so breathing/spine-sway bends it smoothly.
  const torsoGeo = buildLimbTube({
    boneAIndex: boneIndex.hips,
    boneBIndex: boneIndex.chest,
    start: BONE_WORLD.hips,
    bend: BONE_WORLD.spine,
    end: BONE_WORLD.neck,
    radiusStart: 0.42,
    radiusBend: 0.4,
    radiusEnd: 0.38,
  });
  group.add(buildSkinnedLimb(torsoGeo, outfitMat, skeleton));

  // Arms — one skinned tube per arm spanning shoulder -> wrist, bending at the elbow.
  (['L', 'R'] as const).forEach((side) => {
    const shoulder = `shoulder${side}` as const;
    const forearm = `forearm${side}` as const;
    const hand = `hand${side}` as const;
    const armGeo = buildLimbTube({
      boneAIndex: boneIndex[shoulder],
      boneBIndex: boneIndex[forearm],
      start: BONE_WORLD[shoulder],
      bend: BONE_WORLD[forearm],
      end: BONE_WORLD[hand],
      radiusStart: 0.11,
      radiusBend: 0.095,
      radiusEnd: 0.085,
    });
    group.add(buildSkinnedLimb(armGeo, outfitMat, skeleton));

    const handMesh = new Mesh(new SphereGeometry(0.1, 10, 8), skinMat);
    bones[hand].add(handMesh);
  });

  // Legs (skipped for 'dress', which gets a single rigid skirt cone instead).
  if (outfitStyle === 'dress') {
    const dress = new Mesh(new CylinderGeometry(0.2, 0.5, 0.85, 16), outfitMat);
    dress.position.y = -0.18;
    bones.hips.add(dress);
  } else {
    (['L', 'R'] as const).forEach((side) => {
      const upperLeg = `upperLeg${side}` as const;
      const lowerLeg = `lowerLeg${side}` as const;
      const foot = `foot${side}` as const;
      const legGeo = buildLimbTube({
        boneAIndex: boneIndex[upperLeg],
        boneBIndex: boneIndex[lowerLeg],
        start: BONE_WORLD[upperLeg],
        bend: BONE_WORLD[lowerLeg],
        end: BONE_WORLD[foot],
        radiusStart: 0.16,
        radiusBend: 0.13,
        radiusEnd: 0.11,
      });
      group.add(buildSkinnedLimb(legGeo, pantsMat, skeleton));

      const shoe = new Mesh(new BoxGeometry(0.2, 0.12, 0.32), shoeMat);
      shoe.position.set(0, -0.05, 0.05);
      bones[foot].add(shoe);
    });
  }

  // Outfit accents — rigid, parented onto the chest bone.
  if (outfitStyle === 'hoodie') {
    const zip = new Mesh(
      new BoxGeometry(0.04, 0.55, 0.04),
      new MeshStandardMaterial({ color: '#00000033', roughness: 0.9 }),
    );
    zip.position.set(0, -0.05, 0.43);
    bones.chest.add(zip);
  } else if (outfitStyle === 'jacket') {
    const stripe = new Mesh(
      new BoxGeometry(0.06, 0.6, 0.04),
      new MeshStandardMaterial({ color: '#00000033', roughness: 0.9 }),
    );
    stripe.position.set(0, -0.05, 0.43);
    bones.chest.add(stripe);
  } else if (outfitStyle === 'overalls') {
    const strapMat = new MeshStandardMaterial({ color: outfitColor, roughness: 0.65 });
    [-0.22, 0.22].forEach((x) => {
      const strap = new Mesh(new BoxGeometry(0.1, 0.5, 0.06), strapMat);
      strap.position.set(x, 0.3, 0.4);
      bones.chest.add(strap);
    });
  }

  // Neck — rigid, parented onto the neck bone.
  const neck = new Mesh(new CylinderGeometry(0.14, 0.16, 0.14, 10), skinMat);
  bones.neck.add(neck);

  // Head — rigid, parented onto the head bone (also the camera-framing anchor).
  const headAnchor = bones.head;
  const head = new Mesh(new SphereGeometry(0.45, 20, 16), skinMat);
  headAnchor.add(head);

  // Ears
  const earGeo = new SphereGeometry(0.07, 10, 8);
  [-0.45, 0.45].forEach((x) => {
    const ear = new Mesh(earGeo, skinMat);
    ear.position.set(x, 0, 0);
    headAnchor.add(ear);
  });

  // Eyes
  const eyeWhiteGeo = new SphereGeometry(0.07, 10, 8);
  const eyeWhiteMat = new MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
  const pupilGeo = new SphereGeometry(0.038, 8, 6);
  const pupilMat = new MeshStandardMaterial({ color: eyeColor, roughness: 0.4 });
  const eyelids: Object3D[] = [];
  [-0.17, 0.17].forEach((x) => {
    const eyeGroup = new Group();
    eyeGroup.position.set(x, 0.05, 0.39);
    const white = new Mesh(eyeWhiteGeo, eyeWhiteMat);
    eyeGroup.add(white);
    const pupil = new Mesh(pupilGeo, pupilMat);
    pupil.position.z = 0.05;
    eyeGroup.add(pupil);
    headAnchor.add(eyeGroup);
    eyelids.push(eyeGroup);
  });

  // Mouth — a small flattened bar, parented onto the head bone.
  const mouth = new Mesh(
    new BoxGeometry(0.16, 0.03, 0.02),
    new MeshStandardMaterial({ color: '#7a4a3a', roughness: 0.6 }),
  );
  mouth.position.set(0, -0.16, 0.41);
  headAnchor.add(mouth);

  // Hair
  const hairMeshes = buildHair(hairStyle, hairColor);
  hairMeshes.forEach((m) => headAnchor.add(m));

  return {
    group,
    torso: bones.chest,
    headAnchor,
    eyelids,
    rig,
    dispose(): void {
      disposeGroup(group, skeleton);
    },
  };
}

export function cacheKeyFor(
  appearance: CharacterAppearance,
  variant: 'full' | 'head',
  size: number,
): string {
  const skinTone = clampIdx(appearance.skinTone, SKIN_TONES.length);
  const hairStyle = clampIdx(appearance.hairStyle, HAIR_STYLES.length);
  const hairColor = clampIdx(appearance.hairColor, HAIR_COLORS.length);
  const eyeColor = clampIdx(appearance.eyeColor, EYE_COLORS.length);
  const outfitStyle = clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length);
  const outfitColor = clampIdx(appearance.outfitColor, OUTFIT_COLORS.length);
  return `${variant}|${size}|${skinTone}.${hairStyle}.${hairColor}.${eyeColor}.${outfitStyle}.${outfitColor}`;
}
