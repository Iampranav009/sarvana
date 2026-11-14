"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowDown, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { HolographicField } from "./HolographicField";

// Dynamic import with SSR disabled and instant CSS fallback
const HolographicCanvas = dynamic(
  () => import("./HolographicCanvas").then((mod) => mod.HolographicCanvas),
  {
    ssr: false,
    loading: () => <HolographicField />,
  }
);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prismWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (metaRef.current) {
        tl.fromTo(metaRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 });
      }

      if (headlineRef.current) {
        const headlineLines = headlineRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          headlineLines,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3"
        );
      }

      if (copyRef.current) {
        tl.fromTo(copyRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
      }

      if (ctaRef.current) {
        tl.fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
      }

      // Restrained scrubbed hero parallax on scroll (never hijack scrolling)
      if (prismWrapRef.current) {
        gsap.to(prismWrapRef.current, {
          yPercent: 18,
          scale: 0.94,
          opacity: 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Hero section"
      className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden border-b border-white/[0.08] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Interactive R3F Holographic Sculpture / Prism Backdrop with scroll parallax */}
      <div ref={prismWrapRef} className="pointer-events-none absolute inset-0 z-0">
        <HolographicCanvas />
      </div>

      {/* Subtle editorial hairline grid registration lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-7xl border-x border-white/[0.04]"
      />

      {/* Top Meta Line / Brand Tag */}
      <div ref={metaRef} className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-y-2 border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]"
              aria-hidden="true"
            />
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-zinc-300">
              SERVANA — CREATIVE STUDIO
            </p>
          </div>
          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            DIRECTION: PRANAV SHINDE // 2026
          </div>
        </div>
      </div>

      {/* Core Editorial Centerpiece */}
      <div className="relative z-10 mx-auto my-auto flex w-full max-w-7xl flex-col items-start justify-center py-10 sm:py-16">
        {/* Registration mark */}
        <div
          aria-hidden="true"
          className="mb-4 font-mono text-[10px] tracking-widest text-cyan-400/80"
        >
          [ 001 // DIGITAL SYSTEMS & WEB INTERFACES ]
        </div>

        {/* Primary Headline with clamp typography & stagger targets */}
        <h1
          ref={headlineRef}
          className="hero-headline max-w-5xl font-sans font-bold uppercase tracking-[-0.04em] text-white"
        >
          <span className="hero-line block">WE BUILD</span>
          <span className="hero-line block holo-text-gradient">WHAT&apos;S NEXT.</span>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={copyRef}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-zinc-300 tracking-tight"
        >
          Designing digital systems, local search presence, and event technology from Yavatmal.
        </p>

        {/* Action button cluster */}
        <div ref={ctaRef} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <Button href="#work" variant="primary" size="lg">
            <span>Explore real work</span>
            <ChevronRight className="ml-2 h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Let’s discuss your project
          </Button>
        </div>
      </div>

      {/* Bottom Editorial Bar & Secondary Exploration Cue */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.06] pt-4 text-zinc-500 font-mono text-[10px] sm:text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>COMMUNITY TECH</span>
            <span className="hidden sm:inline-block text-zinc-700">•</span>
            <span>LOCAL SEO</span>
            <span className="hidden sm:inline-block text-zinc-700">•</span>
            <span>OPERATIONAL CRM</span>
            <span className="hidden md:inline-block text-zinc-700">•</span>
            <span className="hidden md:inline-block">EVENT SYSTEMS</span>
          </div>

          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-300 transition-colors uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="Scroll to explore project case studies"
          >
            <span>Scroll to explore</span>
            <ArrowDown
              className="h-3 w-3 text-cyan-400 transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
