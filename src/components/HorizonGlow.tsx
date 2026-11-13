"use client";

import { useEffect, useRef } from "react";

const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.175'/%3E%3C/svg%3E")`;

function horizonBackground(swell = 1, backlight = 1) {
  const archWidth = 116 * swell;
  const archHeight = 69 * swell;
  const glowWidth = 48.72 * backlight;
  const glowHeight = 26.22 * backlight;
  return [grain,
    "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 52%, rgba(0,0,0,.168) 100%)",
    `radial-gradient(${archWidth}% ${archHeight}% at 50% 100%, #474747 0%, #242424 20.4%, #000 41.1%, #004067 61.8%, #000 82.5%, rgba(0,0,0,0) 86.1%)`,
    `radial-gradient(${glowWidth}% ${glowHeight}% at 50% 100%, rgba(113,113,113,.3456) 0%, rgba(36,36,36,.1344) 38%, rgba(36,36,36,0) 72%)`,
    "radial-gradient(61.48% 40.02% at 50% 100%, rgba(0,0,0,.1248) 0%, rgba(0,0,0,0) 80%)",
  ].join(",");
}

export function HorizonGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.backgroundImage = horizonBackground();
      return;
    }
    let frame = 0;
    let start = 0;
    const render = (now: number) => {
      if (!start) start = now;
      const t = (now - start) / 1000;
      const ph = t * 1.0;
      const amt = 0.55;
      const dir = 1;
      const spin = ph * dir;
      const modulation = Math.sin(spin * 0.8);
      node.style.backgroundImage = horizonBackground(1 + modulation * amt * 0.07, 1 + modulation * amt * 0.35);
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, []);
  return <div ref={glowRef} className="horizon-glow" aria-hidden="true" />;
}
