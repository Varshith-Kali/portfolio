"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * LUXURY AI COMPANION — Premium consumer robotics aesthetic
 *
 * Inspired by: Apple Vision Pro, AirPods Pro, Baymax, Pixar WALL-E,
 * Tesla Optimus, Nothing minimalism, Disney robotics.
 *
 * Proportions: Head 55%, Upper Body 20%, Arms 20%, Hover 5%
 * Materials: Pearl white ceramic, brushed aluminum, piano black glass
 * Lighting: Ice blue / white-blue / soft cyan
 */

// ============================================================
// GLOW TEXTURE
// ============================================================
function useGlowTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    grad.addColorStop(0, "rgba(180, 230, 255, 0.8)");
    grad.addColorStop(0.15, "rgba(140, 200, 255, 0.4)");
    grad.addColorStop(0.4, "rgba(100, 170, 255, 0.12)");
    grad.addColorStop(1, "rgba(100, 170, 255, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

// Eye glow texture — soft even bloom, no hot center
function useEyeGlowTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(180, 230, 255, 0.4)");
    grad.addColorStop(0.3, "rgba(140, 200, 255, 0.25)");
    grad.addColorStop(0.6, "rgba(100, 170, 255, 0.1)");
    grad.addColorStop(1, "rgba(100, 170, 255, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

// ============================================================
// MATERIALS — Pearl white ceramic, brushed aluminum, piano black
// ============================================================
function useMaterials() {
  return useMemo(() => {
    // Pearl white ceramic — primary body (high gloss, soft reflections)
    const pearlWhite = new THREE.MeshPhysicalMaterial({
      color: "#f4f5f7",
      metalness: 0.0,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      sheen: 0.5,
      sheenColor: new THREE.Color("#e0eaff"),
    });
    // Matte white — subtle areas (top paneling)
    const matteWhite = new THREE.MeshStandardMaterial({
      color: "#e8eaee",
      metalness: 0.0,
      roughness: 0.5,
    });
    // Brushed aluminum — side modules, joints
    const aluminum = new THREE.MeshStandardMaterial({
      color: "#b8bcc4",
      metalness: 0.95,
      roughness: 0.3,
    });
    // Piano black glass — visor, hands
    const pianoBlack = new THREE.MeshPhysicalMaterial({
      color: "#020304",
      metalness: 0.5,
      roughness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      reflectivity: 1.0,
    });
    // Ice blue emissive — accents, rings
    const iceBlue = new THREE.MeshStandardMaterial({
      color: "#0a1018",
      emissive: "#8ec5ff",
      emissiveIntensity: 2,
    });
    // Eye material — pure emissive, no specular dots
    const eyeMat = new THREE.MeshStandardMaterial({
      color: "#000000",
      emissive: "#b4e6ff",
      emissiveIntensity: 3,
      metalness: 0,
      roughness: 1,
    });
    // Core — soft glow
    const coreMat = new THREE.MeshStandardMaterial({
      color: "#b4e6ff",
      emissive: "#8ec5ff",
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.85,
    });
    // Antenna fin — semi-transparent, glowing
    const finMat = new THREE.MeshPhysicalMaterial({
      color: "#a0d0ff",
      emissive: "#8ec5ff",
      emissiveIntensity: 1.5,
      metalness: 0.0,
      roughness: 0.2,
      transmission: 0.4,
      transparent: true,
      opacity: 0.7,
    });
    return { pearlWhite, matteWhite, aluminum, pianoBlack, iceBlue, eyeMat, coreMat, finMat };
  }, []);
}

// ============================================================
// LUXURY AI COMPANION
// ============================================================
function LuxuryCompanion({
  mouse,
  hovered,
  entrance,
  mats,
  eyeGlowTex,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  hovered: React.MutableRefObject<boolean>;
  entrance: React.MutableRefObject<number>;
  mats: ReturnType<typeof useMaterials>;
  eyeGlowTex: THREE.Texture | null;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const coreGlowRef = useRef<THREE.Sprite>(null);
  const neckRingRef = useRef<THREE.Mesh>(null);

  const smoothHead = useRef({ x: 0, y: 0 });
  const smoothBody = useRef({ x: 0, y: 0 });
  const smoothLean = useRef(0);
  const eyeBright = useRef(3);
  const corePulse = useRef(2);
  const glowTex = useGlowTexture();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const e = entrance.current;
    const h = hovered.current ? 1 : 0;

    // Float — weightless, 7s, lowered base position
    if (groupRef.current) {
      groupRef.current.position.y = (-0.08 + 0.05 * Math.sin(t * Math.PI / 3.5)) * e;
      groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.008 * e;
      groupRef.current.scale.setScalar(0.95 + 0.05 * e);
      const targetLean = h * 0.025 * e;
      smoothLean.current += (targetLean - smoothLean.current) * 0.04;
      groupRef.current.rotation.x = smoothLean.current;
      const px = mouse.current.x * 0.04 * e;
      groupRef.current.position.x += (px - groupRef.current.position.x) * 0.025;
    }

    // Head — max 6°, inverted Y so head follows cursor naturally
    if (headRef.current) {
      const tx = -mouse.current.y * 0.1 * e;
      const ty = mouse.current.x * 0.1 * e;
      smoothHead.current.x += (tx - smoothHead.current.x) * 0.035;
      smoothHead.current.y += (ty - smoothHead.current.y) * 0.035;
      headRef.current.rotation.x = smoothHead.current.x;
      headRef.current.rotation.y = smoothHead.current.y;
    }

    // Body — max 3°, inverted Y to match head
    if (bodyRef.current) {
      const tx = -mouse.current.y * 0.03 * e;
      const ty = mouse.current.x * 0.04 * e;
      smoothBody.current.x += (tx - smoothBody.current.x) * 0.025;
      smoothBody.current.y += (ty - smoothBody.current.y) * 0.025;
      bodyRef.current.rotation.x = smoothBody.current.x;
      bodyRef.current.rotation.y = smoothBody.current.y;
    }

    // Eyes — soft pulse + hover brightness (via color since MeshBasicMaterial has no emissive)
    const breathe = (Math.sin(t * Math.PI / 2.5) + 1) / 2;
    const brightness = (0.7 + breathe * 0.3) * (1 + h * 0.15);
    const eyeColor = new THREE.Color("#b4e6ff").multiplyScalar(brightness * e);
    if (leftEyeRef.current) (leftEyeRef.current.material as THREE.MeshBasicMaterial).color = eyeColor;
    if (rightEyeRef.current) (rightEyeRef.current.material as THREE.MeshBasicMaterial).color = eyeColor;

    // Core — soft glow
    const coreBreathe = (Math.sin(t * Math.PI / 3) + 1) / 2;
    corePulse.current = (1.5 + coreBreathe * 1) * (1 + h * 0.2);
    if (coreRef.current) {
      (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = corePulse.current * e;
    }
    if (coreGlowRef.current) {
      (coreGlowRef.current.material as THREE.SpriteMaterial).opacity = (0.25 + coreBreathe * 0.15 + h * 0.08) * e;
    }

    // Neck ring — pulsing energy
    if (neckRingRef.current) {
      (neckRingRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = (1.5 + breathe * 0.8) * e;
    }
  });

  return (
    <group ref={groupRef} position={[0.12, -0.05, 0]} rotation={[0, -0.03, 0]}>
      {/* ===== HEAD — oversized, helmet-like ===== */}
      <group ref={headRef} position={[0, 0.65, 0]}>
        {/* Main head — rounded cube/sphere hybrid, slightly flattened front */}
        <mesh scale={[1, 1, 0.92]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.5, 64, 64]} />
        </mesh>

        {/* Top paneling — subtle recessed grooves */}
        <mesh position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.matteWhite}>
          <torusGeometry args={[0.25, 0.008, 8, 48]} />
        </mesh>
        <mesh position={[0, 0.48, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.matteWhite}>
          <torusGeometry args={[0.15, 0.006, 8, 48]} />
        </mesh>
        {/* Panel line down center top */}
        <mesh position={[0, 0.48, 0]} material={mats.matteWhite}>
          <boxGeometry args={[0.006, 0.004, 0.3]} />
        </mesh>

        {/* === SIDE MODULES — large circular ear cups === */}
        {/* Left side module — outer aluminum ring */}
        <mesh position={[-0.48, 0, 0]} rotation={[0, Math.PI / 2, 0]} material={mats.aluminum}>
          <torusGeometry args={[0.14, 0.035, 16, 48]} />
        </mesh>
        {/* Left inner glowing ring */}
        <mesh position={[-0.49, 0, 0]} rotation={[0, Math.PI / 2, 0]} material={mats.iceBlue}>
          <torusGeometry args={[0.1, 0.012, 16, 48]} />
        </mesh>
        {/* Left center cap */}
        <mesh position={[-0.51, 0, 0]} material={mats.pearlWhite}>
          <circleGeometry args={[0.09, 32]} />
        </mesh>

        {/* Right side module */}
        <mesh position={[0.48, 0, 0]} rotation={[0, Math.PI / 2, 0]} material={mats.aluminum}>
          <torusGeometry args={[0.14, 0.035, 16, 48]} />
        </mesh>
        <mesh position={[0.49, 0, 0]} rotation={[0, Math.PI / 2, 0]} material={mats.iceBlue}>
          <torusGeometry args={[0.1, 0.012, 16, 48]} />
        </mesh>
        <mesh position={[0.51, 0, 0]} material={mats.pearlWhite}>
          <circleGeometry args={[0.09, 32]} />
        </mesh>

        {/* === ANTENNA FINS — upward angled triangular, glowing === */}
        {/* Left fin */}
        <mesh position={[-0.35, 0.42, 0]} rotation={[0, 0, 0.5]} material={mats.finMat}>
          <coneGeometry args={[0.06, 0.18, 4]} />
        </mesh>
        {/* Right fin */}
        <mesh position={[0.35, 0.42, 0]} rotation={[0, 0, -0.5]} material={mats.finMat}>
          <coneGeometry args={[0.06, 0.18, 4]} />
        </mesh>

        {/* === VISOR — single piece piano black glass, large rounded rect === */}
        <mesh position={[0, -0.02, 0.42]} material={mats.pianoBlack}>
          <boxGeometry args={[0.55, 0.3, 0.08]} />
        </mesh>
        {/* Visor glass surface — slightly raised for reflection */}
        <mesh position={[0, -0.02, 0.47]} material={mats.pianoBlack}>
          <boxGeometry args={[0.52, 0.27, 0.02]} />
        </mesh>

        {/* === EYES — perfect circles, pure glow, no bloom sprites === */}
        {/* Left eye */}
        <mesh ref={leftEyeRef} position={[-0.13, -0.02, 0.49]}>
          <circleGeometry args={[0.04, 32]} />
          <meshBasicMaterial color="#b4e6ff" />
        </mesh>
        {/* Right eye */}
        <mesh ref={rightEyeRef} position={[0.13, -0.02, 0.49]}>
          <circleGeometry args={[0.04, 32]} />
          <meshBasicMaterial color="#b4e6ff" />
        </mesh>
      </group>

      {/* ===== NECK — floating energy ring + connector ===== */}
      {/* Glowing neck ring */}
      <mesh ref={neckRingRef} position={[0, 0.22, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.iceBlue}>
        <torusGeometry args={[0.1, 0.015, 16, 48]} />
      </mesh>
      {/* Short floating connector */}
      <mesh position={[0, 0.22, 0]} material={mats.aluminum}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
      </mesh>

      {/* ===== BODY — compact inverted teardrop ===== */}
      <group ref={bodyRef} position={[0, -0.05, 0]}>
        {/* Upper torso — capsule form */}
        <mesh position={[0, -0.05, 0]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.28, 48, 48]} />
        </mesh>
        {/* Lower torso — tapered */}
        <mesh position={[0, -0.25, 0]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.24, 48, 48]} />
        </mesh>

        {/* === CHEST CORE — subtle oval glow === */}
        <mesh ref={coreRef} position={[0, 0.0, 0.26]}>
          <circleGeometry args={[0.06, 32]} />
          <meshStandardMaterial color="#b4e6ff" emissive="#8ec5ff" emissiveIntensity={2} transparent opacity={0.85} />
        </mesh>
        {glowTex && (
          <sprite ref={coreGlowRef} position={[0, 0.0, 0.28]} scale={[0.25, 0.25, 1]}>
            <spriteMaterial map={glowTex} transparent opacity={0.25} depthWrite={false} blending={THREE.AdditiveBlending} />
          </sprite>
        )}

        {/* === SHOULDERS — large spherical, floating === */}
        <mesh position={[-0.3, 0.08, 0]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.1, 32, 32]} />
        </mesh>
        <mesh position={[0.3, 0.08, 0]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.1, 32, 32]} />
        </mesh>

        {/* === ARMS — capsule-like, simplified === */}
        {/* Upper arms — large capsules */}
        <mesh position={[-0.38, -0.04, 0]} rotation={[0, 0, 0.35]} material={mats.pearlWhite}>
          <cylinderGeometry args={[0.055, 0.048, 0.28, 24]} />
        </mesh>
        <mesh position={[0.38, -0.04, 0]} rotation={[0, 0, -0.35]} material={mats.pearlWhite}>
          <cylinderGeometry args={[0.055, 0.048, 0.28, 24]} />
        </mesh>

        {/* Elbow joints — minimal, elegant */}
        <mesh position={[-0.46, -0.18, 0]} material={mats.aluminum}>
          <sphereGeometry args={[0.045, 24, 24]} />
        </mesh>
        <mesh position={[0.46, -0.18, 0]} material={mats.aluminum}>
          <sphereGeometry args={[0.045, 24, 24]} />
        </mesh>

        {/* Lower arms — slightly smaller, still clean */}
        <mesh position={[-0.5, -0.32, 0]} rotation={[0, 0, 0.25]} material={mats.pearlWhite}>
          <cylinderGeometry args={[0.042, 0.036, 0.24, 24]} />
        </mesh>
        <mesh position={[0.5, -0.32, 0]} rotation={[0, 0, -0.25]} material={mats.pearlWhite}>
          <cylinderGeometry args={[0.042, 0.036, 0.24, 24]} />
        </mesh>

        {/* === HANDS — piano black, 5 simplified fingers === */}
        {/* Left hand base */}
        <mesh position={[-0.54, -0.46, 0]} material={mats.pianoBlack}>
          <sphereGeometry args={[0.04, 24, 24]} />
        </mesh>
        {/* Left fingers — 5 rounded tips */}
        {[-0.025, -0.012, 0, 0.012, 0.025].map((x, i) => (
          <mesh key={`lf-${i}`} position={[-0.54 + x, -0.54, 0.01]} rotation={[0, 0, x * 0.8]} material={mats.pianoBlack}>
            <cylinderGeometry args={[0.007, 0.005, 0.06, 8]} />
          </mesh>
        ))}
        {/* Right hand base */}
        <mesh position={[0.54, -0.46, 0]} material={mats.pianoBlack}>
          <sphereGeometry args={[0.04, 24, 24]} />
        </mesh>
        {/* Right fingers */}
        {[-0.025, -0.012, 0, 0.012, 0.025].map((x, i) => (
          <mesh key={`rf-${i}`} position={[0.54 + x, -0.54, 0.01]} rotation={[0, 0, -x * 0.8]} material={mats.pianoBlack}>
            <cylinderGeometry args={[0.007, 0.005, 0.06, 8]} />
          </mesh>
        ))}

        {/* === LOWER BODY — hover pod, teardrop === */}
        <mesh position={[0, -0.48, 0]} scale={[1, 0.6, 1]} material={mats.pearlWhite}>
          <sphereGeometry args={[0.2, 32, 32]} />
        </mesh>
        {/* Hover glow under pod */}
        {glowTex && (
          <sprite position={[0, -0.58, 0]} scale={[0.4, 0.15, 1]} rotation={[Math.PI / 2, 0, 0]}>
            <spriteMaterial map={glowTex} transparent opacity={0.2} depthWrite={false} blending={THREE.AdditiveBlending} />
          </sprite>
        )}
      </group>
    </group>
  );
}

// ============================================================
// BACKLIGHT GLOW — soft atmospheric
// ============================================================
function BacklightGlow({
  hovered,
  entrance,
  texture,
}: {
  hovered: React.MutableRefObject<boolean>;
  entrance: React.MutableRefObject<number>;
  texture: THREE.Texture | null;
}) {
  const ref = useRef<THREE.Sprite>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const e = entrance.current;
    const breathe = (Math.sin(t * Math.PI / 5) + 1) / 2;
    const boost = hovered.current ? 0.1 : 0;
    if (ref.current) {
      (ref.current.material as THREE.SpriteMaterial).opacity = (0.12 + breathe * 0.06 + boost) * e;
      ref.current.scale.setScalar((4.0 + breathe * 0.3) * e);
    }
  });
  if (!texture) return null;
  return (
    <sprite ref={ref} position={[0, 0.15, -1.5]}>
      <spriteMaterial map={texture} transparent opacity={0.12} depthWrite={false} blending={THREE.AdditiveBlending} />
    </sprite>
  );
}

// ============================================================
// STAR FIELD
// ============================================================
function StarField({ entrance }: { entrance: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const COUNT = 60;
  const geo = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 1.0 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 0.1;
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const e = entrance.current;
    if (ref.current) ref.current.rotation.y = t * 0.006;
    if (matRef.current) matRef.current.opacity = (0.15 + Math.sin(t * 0.3) * 0.04) * e;
  });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial ref={matRef} size={0.006} color="#b4e6ff" transparent opacity={0.15} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

// ============================================================
// SCENE
// ============================================================
function Scene({
  mouse,
  hovered,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  hovered: React.MutableRefObject<boolean>;
}) {
  const entrance = useRef(0);
  const glowTex = useGlowTexture();
  const eyeGlowTex = useEyeGlowTexture();
  const mats = useMaterials();
  const startTime = useRef<number | null>(null);
  useFrame(({ clock }) => {
    if (startTime.current === null) startTime.current = clock.getElapsedTime();
    const elapsed = clock.getElapsedTime() - startTime.current;
    const raw = Math.min(1, elapsed / 1.8);
    entrance.current = raw * raw * (3 - 2 * raw);
  });

  return (
    <>
      {/* Soft, even, premium lighting */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 3, 3]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-2, 1, 2]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#e0eaff" />
      <pointLight position={[-1, 0.5, -1]} intensity={0.4} color="#8ec5ff" />
      <pointLight position={[1, -0.5, 2]} intensity={0.3} color="#ffffff" />

      <BacklightGlow hovered={hovered} entrance={entrance} texture={glowTex} />
      <StarField entrance={entrance} />
      <LuxuryCompanion mouse={mouse} hovered={hovered} entrance={entrance} mats={mats} eyeGlowTex={eyeGlowTex} />
    </>
  );
}

// ============================================================
// EXPORT
// ============================================================
export function HeroVisual() {
  const mouse = useRef({ x: 0, y: 0 });
  const hovered = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.top + rect.height * 0.8;
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      hovered.current = isInside;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.2, 3.2], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Scene mouse={mouse} hovered={hovered} />
      </Canvas>
    </div>
  );
}
