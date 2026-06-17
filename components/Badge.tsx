import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  RigidBodyProps,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useInView } from "framer-motion";

// Augment JSX intrinsics so Three.js fiber accepts meshline primitives
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: object;
    meshLineMaterial: {
      color?: string;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
      lineWidth?: number;
    };
  }
}

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/model/id-card.glb");
useTexture.preload("/images/orva-band.jpg");

/* ─── Types ─── */
interface GLTFResult {
  nodes: {
    card: THREE.Mesh;
    clip: THREE.Mesh;
    clamp: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshPhysicalMaterial;
    metal: THREE.MeshStandardMaterial;
  };
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  enabled?: boolean;
}

/* ─── Root component ─── */
export default function Badge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.4 });

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 0, 13], fov: 25 }}
        style={{ height: "100vh" }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band enabled={inView} />
        </Physics>
        <Environment background blur={0.75}>
          <color attach="background" args={["#f0390f"]} />
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

/* ─── Physics band + card ─── */
function Band({ maxSpeed = 50, minSpeed = 10, enabled = true }: BandProps) {
  // Rigid body refs
  const band = useRef<THREE.Mesh>(null!);
  const fixed = useRef<Parameters<typeof useRopeJoint>[0]["current"]>(null!);
  const j1 = useRef<Parameters<typeof useRopeJoint>[0]["current"]>(null!);
  const j2 = useRef<Parameters<typeof useRopeJoint>[0]["current"]>(null!);
  const j3 = useRef<Parameters<typeof useRopeJoint>[0]["current"]>(null!);
  const card = useRef<Parameters<typeof useSphericalJoint>[0]["current"]>(
    null!,
  );

  // Reusable vectors — allocated once outside render loop
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };

  const { nodes, materials } = useGLTF(
    "/model/id-card.glb",
  ) as unknown as GLTFResult;
  const texture = useTexture("/images/orva-band.jpg");
  const { width, height } = useThree((state) => state.size);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  // dragged holds the pointer-offset vector when dragging, false when not
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  // Cursor style while hovering / dragging
  useEffect(() => {
    if (!hovered) return;
    document.body.style.cursor = dragged ? "grabbing" : "grab";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, dragged]);

  // Drop the card into view when the section scrolls in
  useEffect(() => {
    if (!enabled || !card.current) return;
    card.current.setTranslation({ x: 2, y: 0, z: 0 }, true);
    card.current.wakeUp();
  }, [enabled]);

  useFrame((state, delta) => {
    // Drag: project pointer onto the card's z plane
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      for (const ref of [card, j1, j2, j3, fixed]) {
        ref.current?.wakeUp();
      }
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (!fixed.current) return;

    // Smooth j1 / j2 to reduce jitter when over-pulling
    for (const ref of [j1, j2] as (typeof j1)[]) {
      const body = ref.current as (typeof ref)["current"] & {
        lerped?: THREE.Vector3;
      };
      if (!body) continue;
      if (!body.lerped) {
        body.lerped = new THREE.Vector3().copy(body.translation());
      }
      const clamped = Math.max(
        0.1,
        Math.min(1, body.lerped.distanceTo(body.translation())),
      );
      body.lerped.lerp(
        body.translation(),
        delta * (minSpeed + clamped * (maxSpeed - minSpeed)),
      );
    }

    // Update Catmull-Rom curve points
    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(
      (j2.current as any).lerped ?? j2.current.translation(),
    );
    curve.points[2].copy(
      (j1.current as any).lerped ?? j1.current.translation(),
    );
    curve.points[3].copy(fixed.current.translation());

    // Push new points into the MeshLine geometry
    const geom = band.current?.geometry as unknown as {
      setPoints: (pts: THREE.Vector3[]) => void;
    };
    geom?.setPoints(curve.getPoints(32));

    // Dampen y-rotation so card drifts back to face camera
    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel(
      { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
      false,
    );
  });

  // Curve + texture setup (runs once after mount)
  curve.curveType = "chordal";
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        {/* Fixed anchor at the top */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        {/* Rope joints */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.0, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        {/* The card itself */}
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={!enabled ? "fixed" : dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              (e.target as HTMLElement).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture(e.pointerId);

              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation())),
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      {/* The lanyard rope */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-3, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
