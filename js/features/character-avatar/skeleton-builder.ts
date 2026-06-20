// Vymova — js/features/character-avatar/skeleton-builder.ts
// Procedural bone hierarchy + skinned "limb tube" geometry generator.
// Pure three.js object construction — no DOM/WebGL, safe to unit-test.
import {
  Bone, Skeleton, SkinnedMesh, Vector3,
  BufferGeometry, BufferAttribute, Uint16BufferAttribute,
  type Material,
} from 'three';

export type BoneName =
  | 'hips' | 'spine' | 'chest' | 'neck' | 'head'
  | 'shoulderL' | 'forearmL' | 'handL'
  | 'shoulderR' | 'forearmR' | 'handR'
  | 'upperLegL' | 'lowerLegL' | 'footL'
  | 'upperLegR' | 'lowerLegR' | 'footR';

interface BoneSpec { name: BoneName; parent: BoneName | null; world: [number, number, number]; }

// World-space (== character group local space) rest-pose positions.
// Local bone offsets are derived from these at build time.
const BONE_SPECS: BoneSpec[] = [
  { name: 'hips',  parent: null,    world: [0, 0.55, 0] },
  { name: 'spine', parent: 'hips',  world: [0, 0.78, 0] },
  { name: 'chest', parent: 'spine', world: [0, 0.95, 0] },
  { name: 'neck',  parent: 'chest', world: [0, 1.42, 0] },
  { name: 'head',  parent: 'neck',  world: [0, 1.70, 0] },

  { name: 'shoulderL', parent: 'chest',     world: [-0.50, 1.25, 0] },
  { name: 'forearmL',  parent: 'shoulderL', world: [-0.55, 0.95, 0] },
  { name: 'handL',     parent: 'forearmL',  world: [-0.50, 0.62, 0] },
  { name: 'shoulderR', parent: 'chest',     world: [0.50, 1.25, 0] },
  { name: 'forearmR',  parent: 'shoulderR', world: [0.55, 0.95, 0] },
  { name: 'handR',     parent: 'forearmR',  world: [0.50, 0.62, 0] },

  { name: 'upperLegL', parent: 'hips',      world: [-0.18, 0.55, 0] },
  { name: 'lowerLegL', parent: 'upperLegL', world: [-0.18, 0.20, 0] },
  { name: 'footL',     parent: 'lowerLegL', world: [-0.18, -0.22, 0] },
  { name: 'upperLegR', parent: 'hips',      world: [0.18, 0.55, 0] },
  { name: 'lowerLegR', parent: 'upperLegR', world: [0.18, 0.20, 0] },
  { name: 'footR',     parent: 'lowerLegR', world: [0.18, -0.22, 0] },
];

export const BONE_WORLD: Record<BoneName, [number, number, number]> =
  Object.fromEntries(BONE_SPECS.map(s => [s.name, s.world])) as Record<BoneName, [number, number, number]>;

export interface SkeletonRig {
  bones: Record<BoneName, Bone>;
  boneIndex: Record<BoneName, number>;
  rootBone: Bone;
  skeleton: Skeleton;
}

export function buildSkeletonRig(): SkeletonRig {
  const bones = {} as Record<BoneName, Bone>;
  const boneIndex = {} as Record<BoneName, number>;
  const orderedBones: Bone[] = [];

  BONE_SPECS.forEach((spec, i) => {
    const bone = new Bone();
    bone.name = spec.name;
    const parentWorld = spec.parent ? BONE_WORLD[spec.parent] : [0, 0, 0];
    bone.position.set(spec.world[0] - parentWorld[0], spec.world[1] - parentWorld[1], spec.world[2] - parentWorld[2]);
    bones[spec.name] = bone;
    boneIndex[spec.name] = i;
    orderedBones.push(bone);
    if (spec.parent) bones[spec.parent].add(bone);
  });

  return { bones, boneIndex, rootBone: bones.hips, skeleton: new Skeleton(orderedBones) };
}

function smoothstep(t: number, center: number, width: number): number {
  const x = Math.min(1, Math.max(0, (t - (center - width / 2)) / width));
  return x * x * (3 - 2 * x);
}

export interface LimbTubeOptions {
  boneAIndex: number;
  boneBIndex: number;
  start: [number, number, number];
  bend: [number, number, number];
  end: [number, number, number];
  radiusStart: number;
  radiusBend: number;
  radiusEnd: number;
  radialSegments?: number;
  lengthSegments?: number;
}

export function buildLimbTube(opts: LimbTubeOptions): BufferGeometry {
  const {
    boneAIndex, boneBIndex, radiusStart, radiusBend, radiusEnd,
    radialSegments = 8, lengthSegments = 7,
  } = opts;
  const start = new Vector3(...opts.start);
  const end = new Vector3(...opts.end);
  const bendVec = new Vector3(...opts.bend);
  const total = start.distanceTo(end);
  const bendT = total > 1e-6 ? Math.min(0.95, Math.max(0.05, start.distanceTo(bendVec) / total)) : 0.5;

  const dir = end.clone().sub(start).normalize();
  const upHint = Math.abs(dir.y) > 0.99 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  const right = new Vector3().crossVectors(upHint, dir).normalize();
  const up = new Vector3().crossVectors(dir, right).normalize();

  const ringCount = lengthSegments + 1;
  const positions: number[] = [];
  const normals: number[] = [];
  const skinIndices: number[] = [];
  const skinWeights: number[] = [];

  for (let i = 0; i < ringCount; i++) {
    const t = i / lengthSegments;
    const radius = t <= bendT
      ? radiusStart + (radiusBend - radiusStart) * (t / bendT)
      : radiusBend + (radiusEnd - radiusBend) * ((t - bendT) / (1 - bendT));
    const center = start.clone().lerp(end, t);
    const weightB = smoothstep(t, bendT, 0.3);
    const weightA = 1 - weightB;

    for (let j = 0; j < radialSegments; j++) {
      const angle = (j / radialSegments) * Math.PI * 2;
      const offset = right.clone().multiplyScalar(Math.cos(angle) * radius)
        .add(up.clone().multiplyScalar(Math.sin(angle) * radius));
      const vertex = center.clone().add(offset);
      positions.push(vertex.x, vertex.y, vertex.z);
      const normal = offset.clone().normalize();
      normals.push(normal.x, normal.y, normal.z);
      skinIndices.push(boneAIndex, boneBIndex, 0, 0);
      skinWeights.push(weightA, weightB, 0, 0);
    }
  }

  const indices: number[] = [];
  for (let i = 0; i < ringCount - 1; i++) {
    for (let j = 0; j < radialSegments; j++) {
      const a = i * radialSegments + j;
      const b = i * radialSegments + ((j + 1) % radialSegments);
      const c = (i + 1) * radialSegments + j;
      const d = (i + 1) * radialSegments + ((j + 1) % radialSegments);
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('skinIndex', new Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new BufferAttribute(new Float32Array(skinWeights), 4));
  geometry.setIndex(indices);
  return geometry;
}

export function buildSkinnedLimb(geometry: BufferGeometry, material: Material, skeleton: Skeleton): SkinnedMesh {
  const mesh = new SkinnedMesh(geometry, material);
  mesh.bind(skeleton);
  return mesh;
}
