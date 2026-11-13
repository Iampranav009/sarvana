"use client";

import React, { useRef, useState, useEffect, useSyncExternalStore, Component, ErrorInfo, ReactNode } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HolographicField } from "./HolographicField";

// Class-based Error Boundary for WebGL/Canvas context failures
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("HolographicCanvas WebGL error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 3D Holographic Kinetic Sculpture
function HolographicSculpture({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  // Pointer tracking
  const pointerPos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    function handlePointerMove(e: PointerEvent) {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      pointerPos.current.targetX = x * 0.45;
      pointerPos.current.targetY = y * 0.45;
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    if (reducedMotion || !groupRef.current) return;

    // Smooth dampening towards target pointer coordinates
    pointerPos.current.x = THREE.MathUtils.lerp(
      pointerPos.current.x,
      pointerPos.current.targetX,
      0.05
    );
    pointerPos.current.y = THREE.MathUtils.lerp(
      pointerPos.current.y,
      pointerPos.current.targetY,
      0.05
    );

    // Apply interactive tilt
    groupRef.current.rotation.y = pointerPos.current.x + state.clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = -pointerPos.current.y + Math.sin(state.clock.elapsedTime * 0.2) * 0.08;

    // Core pulsing rotation
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.25;
      coreRef.current.rotation.y += delta * 0.35;
    }

    // Outer ring counter-rotations
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.2;
      ringRef1.current.rotation.x += delta * 0.12;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.18;
      ringRef2.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central prismatic icosahedron core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshPhysicalMaterial
          color="#00f2fe"
          roughness={0.15}
          metalness={0.85}
          transmission={0.7}
          thickness={1.2}
          ior={1.45}
          wireframe={true}
          transparent={true}
          opacity={0.75}
        />
      </mesh>

      {/* Inner translucent solid core */}
      <mesh scale={0.75}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#8a2be2"
          roughness={0.25}
          metalness={0.9}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Primary equatorial orbital holographic ring */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.6, 0.018, 16, 100]} />
        <meshBasicMaterial color="#00f2fe" transparent={true} opacity={0.65} />
      </mesh>

      {/* Secondary axial orbital ring */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[3.2, 0.014, 16, 100]} />
        <meshBasicMaterial color="#c084fc" transparent={true} opacity={0.5} />
      </mesh>
    </group>
  );
}

// Hydration helper via useSyncExternalStore
function subscribe() {
  return () => {};
}

export function HolographicCanvas() {
  const isHydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const checkViewport = () => {
      setReducedMotion(mql.matches);
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();

    const handleMql = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handleMql);
    window.addEventListener("resize", checkViewport);

    return () => {
      mql.removeEventListener("change", handleMql);
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  // SSR or before mount fallback
  if (!isHydrated) {
    return <HolographicField />;
  }

  // Constrained / mobile or reduced-motion devices use lightweight CSS field with still prism
  if (reducedMotion || isMobile) {
    return <HolographicField />;
  }

  return (
    <CanvasErrorBoundary fallback={<HolographicField />}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      >
        {/* Layered cinematic still prism backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[900px] aspect-[16/9] opacity-60 mix-blend-screen pointer-events-none">
          <Image
            src="/media/servana-holographic-prism.png"
            alt=""
            fill
            priority
            sizes="900px"
            className="object-contain"
          />
        </div>

        {/* Ambient radial diffraction wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,242,254,0.12)_0%,_rgba(138,43,226,0.1)_35%,_rgba(5,6,8,0)_70%)] blur-[90px] opacity-75" />

        {/* 3D WebGL Scene */}
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="w-full h-full relative z-10"
        >
          {/* Subtle directional and point lights for holographic refraction */}
          <ambientLight intensity={0.4} />
          <pointLight position={[6, 6, 6]} color="#00f2fe" intensity={1.8} />
          <pointLight position={[-6, -6, -4]} color="#8a2be2" intensity={1.5} />
          <pointLight position={[0, 4, -2]} color="#ffffff" intensity={0.8} />

          <HolographicSculpture reducedMotion={reducedMotion} />
        </Canvas>

        {/* Layered optical axial crossbars */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[1px] bg-gradient-to-b from-transparent via-violet-400/20 to-transparent pointer-events-none z-20" />
      </div>
    </CanvasErrorBoundary>
  );
}
