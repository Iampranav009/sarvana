"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";

export function StudioManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !quoteRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words = quoteRef.current?.querySelectorAll(".manifesto-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: 0.25,
            y: 8,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const manifestoPhrase1 = "Good design gets noticed.";
  const manifestoPhrase2 = "Great experiences get remembered.";

  return (
    <section
      id="studio"
      ref={containerRef}
      aria-label="Studio Manifesto"
      className="relative w-full border-b border-white/[0.08] bg-[#050608] px-4 py-28 sm:px-6 sm:py-36 lg:px-8 overflow-hidden"
    >
      {/* Background architectural hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl border-x border-white/[0.04]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading tag="// 02 MANIFESTO" title="THE STUDIO ETHOS" />

        {/* Primary Impact Quote */}
        <div className="mt-12 sm:mt-16 border-l-2 border-cyan-400/40 pl-6 sm:pl-10">
          <p
            ref={quoteRef}
            className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.15]"
          >
            <span className="block text-zinc-400">
              {manifestoPhrase1.split(" ").map((word, i) => (
                <span key={i} className="manifesto-word inline-block mr-2 sm:mr-3">
                  {word}
                </span>
              ))}
            </span>
            <span className="mt-2 block holo-text-gradient">
              {manifestoPhrase2.split(" ").map((word, i) => (
                <span key={i} className="manifesto-word inline-block mr-2 sm:mr-3">
                  {word}
                </span>
              ))}
            </span>
          </p>
        </div>

        {/* Supporting Narrative Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 border-t border-white/[0.08] pt-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
              {"// COMPUTATIONAL CRAFT"}
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              SERVANA operates as an interdisciplinary creative atelier. We discard template conventions
              and generic frameworks in favor of purpose-built architectures, custom shader physics, and
              uncompromising typographic hierarchy.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">
              {"// ENDURING IMPACT"}
            </h3>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              In an era overwhelmed by repetitive noise, we design digital artifacts that command respect.
              Every interaction is engineered with intention, performance, and sensory depth to build lasting
              cultural capital for ambitious founders.
            </p>
          </div>
        </div>

        {/* Studio Registration Tag */}
        <div className="mt-14 flex items-center justify-between border-t border-white/[0.06] pt-6 font-mono text-[11px] text-zinc-600 uppercase tracking-widest">
          <span>SERVANA STUDIO // ATELIER NOTES</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
}
