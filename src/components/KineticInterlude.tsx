"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function KineticInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !track1Ref.current || !track2Ref.current)
      return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtle scroll-linked horizontal parallax drift
      gsap.to(track1Ref.current, {
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(track2Ref.current, {
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeText1 = "DESIGN × CODE × CULTURE × IMPACT × DESIGN × CODE × CULTURE × IMPACT × ";
  const marqueeText2 = "FUTURE INTERFACES × SPATIAL SYSTEMS × EDITORIAL PRECISION × NEXT × ";

  return (
    <section
      ref={containerRef}
      aria-label="Kinetic Studio Interlude"
      className="relative w-full border-b border-white/[0.08] bg-[#030406] py-14 sm:py-20 overflow-hidden select-none"
    >
      {/* Track 1: Primary Words */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          ref={track1Ref}
          className="font-sans text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white/90 will-change-transform"
        >
          <span>{marqueeText1}</span>
          <span>{marqueeText1}</span>
        </div>
      </div>

      {/* Track 2: Secondary Technical Phrase */}
      <div className="mt-4 flex whitespace-nowrap overflow-hidden">
        <div
          ref={track2Ref}
          className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-[0.25em] text-cyan-400/40 will-change-transform"
        >
          <span>{marqueeText2}</span>
          <span>{marqueeText2}</span>
        </div>
      </div>
    </section>
  );
}
