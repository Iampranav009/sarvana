"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BeforeAfterStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !frameRef.current || !beforeRef.current || !revealRef.current || !handleRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 55%", end: "bottom 35%", scrub: 1 } });
      timeline
        .fromTo(beforeRef.current, { filter: "blur(0px)", scale: 1, opacity: 1 }, { filter: "blur(13px)", scale: 1.055, opacity: .42, ease: "none" }, 0)
        .fromTo(revealRef.current, { clipPath: "inset(42% 38% 42% 38% round 28px)", scale: .82, filter: "blur(16px)", opacity: .2 }, { clipPath: "inset(0% 0% 0% 0% round 0px)", scale: 1, filter: "blur(0px)", opacity: 1, ease: "power2.inOut" }, 0)
        .fromTo(handleRef.current, { scale: .72, opacity: 1, rotate: -8 }, { scale: 1.3, opacity: 0, rotate: 8, ease: "power2.in" }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="transformation-story" ref={sectionRef} className="transformation-story">
    <div className="transformation-copy"><p>RANGTARI · BEFORE / AFTER</p><h2>From an event<br/>to an ecosystem.</h2><p>Rangtari began with disconnected event information and offline pass discovery. Servana shaped one coherent digital presence—story, schedule, guidance and Meetio ticket access—built around the attendee journey.</p><a href="https://rangtari.nexuseventplaner.in/" target="_blank" rel="noreferrer">View the live experience <i>↗</i></a></div>
    <div ref={frameRef} className="transformation-frame">
      <div ref={beforeRef} className="before-layer"><Image src="/projects/rangtari.png" alt="" fill sizes="(max-width: 768px) 100vw, 54vw" className="before-preview"/><div className="before-frost"/><span>BEFORE · FRAGMENTED</span><div className="fragment fragment-a">DATES?</div><div className="fragment fragment-b">VENUE</div><div className="fragment fragment-c">PASSES</div><p>Scattered information.<br/>No connected journey.</p></div>
      <div ref={revealRef} className="after-layer"><Image src="/projects/rangtari.png" alt="Rangtari completed digital experience" fill sizes="(max-width: 768px) 100vw, 54vw"/><span>AFTER · SERVANA SYSTEM</span></div>
      <div ref={handleRef} className="reveal-handle" aria-hidden="true"><i>SCROLL</i><b>↓</b></div>
    </div>
  </section>;
}
