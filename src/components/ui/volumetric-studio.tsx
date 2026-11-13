"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import { cn } from "@/lib/utils";

function VolumetricLights({ active }: { active: boolean }) {
  return <Canvas className="volumetric-canvas" camera={{ position: [0, 0, 9], fov: 45 }} gl={{ alpha: true, antialias: false }} dpr={[1, 1.35]}>
    <ambientLight intensity={.2}/>
    {[-2.7, 0, 2.7].map((x) => <SpotLight key={x} position={[x, 4.1, 1]} target-position={[x * .45, -2.8, 0]} distance={13} angle={.24} attenuation={6} anglePower={5} color="#cceff2" volumetric opacity={active ? .84 : 0} radiusTop={.08} radiusBottom={3.6}/>) }
  </Canvas>;
}

function StudioRoom({ active, flickering }: { active: boolean; flickering: boolean }) {
  return <div className="studio-room" aria-hidden="true">
    <div className="studio-wall studio-wall-back"/><div className="studio-wall studio-wall-ceiling"/><div className="studio-wall studio-wall-left"/><div className="studio-wall studio-wall-right"/><div className="studio-wall studio-wall-floor"/>
    <svg className="studio-lines" viewBox="0 0 1000 800" preserveAspectRatio="none"><path d="M220 80 L780 80 L780 560 L220 560 Z"/><path d="M220 560 L0 800 M780 560 L1000 800"/><path d="M220 80 L0 0 M780 80 L1000 0"/></svg>
    <div className={cn("studio-light-field", active && "is-on", flickering && "is-flickering")}><VolumetricLights active={active}/></div>
    <div className="studio-fixtures">{[35,50,65].map((position) => <div key={position} className="studio-fixture" style={{ left: `${position}%` }}><i/><b/></div>)}</div>
    <div className="studio-vignette"/><div className="studio-grain"/>
  </div>;
}

export function VolumetricStudio({ className, children }: { className?: string; children?: ReactNode }) {
  const [lightsOn, setLightsOn] = useState(false);
  const [flickering, setFlickering] = useState(true);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const settle = setTimeout(() => { setLightsOn(true); setFlickering(false); }, 0);
      return () => clearTimeout(settle);
    }
    const sequence = [[420,true],[90,false],[150,true],[55,false],[80,true],[45,false],[360,true]] as const;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;
    sequence.forEach(([delay, state], index) => {
      elapsed += delay;
      timers.push(setTimeout(() => {
        setLightsOn(state);
        if (index === sequence.length - 1) setFlickering(false);
      }, elapsed));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return <section className={cn("volumetric-studio", className)}><StudioRoom active={lightsOn} flickering={flickering}/><div className="volumetric-content">{children}</div></section>;
}
