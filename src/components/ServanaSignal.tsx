"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  ["Idea", "A raw ambition enters as noise, fragments and possibility."],
  ["Strategy", "We find the useful signal and give the work a clear purpose."],
  ["Identity", "Language, type and image become one recognizable voice."],
  ["System", "The visual idea becomes a connected, usable digital product."],
  ["Live", "The work enters the world, moves people and keeps evolving."],
];

export function ServanaSignal() {
  const sectionRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !coreRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>("[data-signal-node]");
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=3600", pin: true, scrub: 0.8, anticipatePin: 1 },
      });
      stages.forEach((_, index) => {
        if (!index) return;
        timeline
          .to(coreRef.current, { rotate: index * 72, scale: 0.82 + index * 0.08, borderRadius: index > 2 ? "18%" : "50%", duration: 1, ease: "power2.inOut" })
          .to(nodes, { x: (i) => Math.cos((i / nodes.length) * Math.PI * 2 + index) * (54 + index * 15), y: (i) => Math.sin((i / nodes.length) * Math.PI * 2 + index) * (54 + index * 15), opacity: 0.28 + index * 0.16, duration: 1 }, "<")
          .call(() => setActive(index), [], "<0.45");
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return <section ref={sectionRef} className="signal-chapter" aria-label="How Servana transforms an idea">
    <div className="signal-copy">
      <p>THE SERVANA SIGNAL</p>
      <h2>An idea becomes<br/>useful in motion.</h2>
      <div className="signal-stage-copy" aria-live="polite"><span>0{active + 1}</span><h3>{stages[active][0]}</h3><p>{stages[active][1]}</p></div>
    </div>
    <div className="signal-machine" aria-hidden="true">
      <div className="signal-grid"/>
      <div ref={coreRef} className="signal-core"><i/><i/><i/><i/></div>
      {Array.from({ length: 12 }).map((_, index) => <b data-signal-node key={index} style={{ transform: `rotate(${index * 30}deg) translateY(-128px)` }}/>) }
      <div className="signal-scan"/>
    </div>
    <ol className="signal-steps">{stages.map(([title], index) => <li className={active === index ? "is-active" : ""} key={title}><span>0{index + 1}</span>{title}</li>)}</ol>
  </section>;
}
