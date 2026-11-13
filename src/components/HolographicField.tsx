import React from "react";
import Image from "next/image";

export function HolographicField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Ambient background diffraction wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] lg:w-[950px] lg:h-[950px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,242,254,0.14)_0%,_rgba(138,43,226,0.12)_35%,_rgba(5,6,8,0)_70%)] blur-[90px] opacity-80" />

      {/* Cinematic Holographic Prism Still */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[680px] lg:w-[840px] aspect-[16/9] opacity-70 mix-blend-screen transition-opacity duration-700">
        <Image
          src="/media/servana-holographic-prism.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 680px, 840px"
          className="object-contain"
        />
      </div>

      {/* Outer concentric holographic ring */}
      <div className="holo-ring-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-cyan-400/20 opacity-50" />

      {/* Middle prismatic ring with dashed hairline */}
      <div className="holo-ring-mid absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-violet-400/25 opacity-60" />

      {/* Optical axial alignment guides */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] md:h-[520px] w-[1px] bg-gradient-to-b from-transparent via-violet-400/15 to-transparent" />
    </div>
  );
}
