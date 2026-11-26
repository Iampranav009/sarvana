"use client";

import { SocialClients } from '@/components/SocialClients';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REAL_PROJECTS } from "@/data/projects";
import { SOCIAL_WORK_ITEMS } from "@/data/socialWork";
import { HorizonGlow } from "@/components/HorizonGlow";
import FeaturesWithPanel from "@/components/ui/features-with-panel";

export type PortfolioKind = "websites" | "creative" | "social";
const demoImages = ["/projects/rangtari.png", "/projects/hh-goa-frame.png", "/projects/aws-scd-yavatmal.png"];

const pageCopy = {
  websites: ["WEBSITES & DIGITAL PRODUCTS", "Useful websites, built around real outcomes.", "Seven commissions across events, healthcare, community, commerce and internal operations."],
  creative: ["DIGITAL CREATIVE DIRECTION", "Creative that connects.", "Identity, campaign graphics and digital art direction designed to remain recognizable across every format."],
  social: ["SOCIAL MEDIA MANAGEMENT", "A living presence, not an occasional post.", "Content management and social media management for fashion, motorcycles, electric mobility, interiors and community brands."],
} as const;

export function PortfolioPage({ kind }: { kind: PortfolioKind }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const copy = pageCopy[kind];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!rootRef.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-portfolio-hero] > *", { yPercent: 80, opacity: 0, stagger: 0.12, duration: 1.1, ease: "power4.out" });
      gsap.utils.toArray<HTMLElement>("[data-portfolio-item]").forEach((item, index) => gsap.fromTo(item, { y: 90 + (index % 2) * 70, rotate: kind === "creative" ? (index % 2 ? 3 : -3) : 0, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, scrollTrigger: { trigger: item, start: "top 90%", end: "top 45%", scrub: 0.7 } }));
      if (kind === "social") gsap.to("[data-social-marquee]", { xPercent: -34, ease: "none", scrollTrigger: { trigger: ".portfolio-social-stream", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, rootRef);
    return () => ctx.revert();
  }, [kind]);

  return <div ref={rootRef} className={`portfolio-page portfolio-${kind}`}>

    <main>
      <section data-portfolio-hero className="portfolio-hero"><p>{copy[0]}</p><h1>{copy[1]}</h1><div><p>{copy[2]}</p><span>Scroll to explore ↓</span></div></section>
      {kind === "websites" && <section className="website-index">{REAL_PROJECTS.map((project, index) => <a data-portfolio-item href={project.liveUrl} target="_blank" rel="noreferrer" key={project.id}><div><span>{String(index + 1).padStart(2,"0")}</span><small>{project.category}</small><h2>{project.title}</h2><p>{project.story.idea}</p></div><figure><Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 768px) 100vw, 48vw"/></figure><i>View live ↗</i></a>)}</section>}
      {kind === "creative" && <section className="creative-horizon"><HorizonGlow/><div className="horizon-intro"><p>DESIGN SYSTEMS · CAMPAIGN ART · MOTION DIRECTION</p><h2>A clear identity.<br/>Across every format.</h2></div><FeaturesWithPanel/><div className="creative-wall">{SOCIAL_WORK_ITEMS.map((item, index) => <article data-portfolio-item key={item.id} className={`creative-sheet creative-sheet-${index + 1}`}><figure><Image src={demoImages[index]} alt={`Temporary creative work for ${item.title}`} fill sizes="(max-width: 768px) 100vw, 48vw"/></figure><div><span>{item.visualTag}</span><h2>{item.title}</h2><p>{item.role}</p><ul>{item.scope.map(scope => <li key={scope}>{scope}</li>)}</ul></div><b>IMAGE PLACEHOLDER · READY FOR FINAL ARTWORK</b></article>)}</div></section>}
      {kind === "social" && <><SocialClients/><div className="social-marquee"><div data-social-marquee>STRATEGY · CALENDAR · DESIGN · COMMUNITY · REPORTING · STRATEGY · CALENDAR · DESIGN · COMMUNITY · REPORTING ·</div></div><section className="portfolio-social-stream">{SOCIAL_WORK_ITEMS.map((item,index) => <article data-portfolio-item key={item.id}><div className="social-number">0{index + 1}</div><figure><Image src={demoImages[index]} alt={`Temporary social media visual for ${item.title}`} fill sizes="(max-width: 768px) 100vw, 44vw"/><span>DEMO ASSET</span></figure><div className="social-account"><p>{item.category}</p><h2>{item.handle}</h2><p>{item.description}</p><ol><li>Direction</li><li>Content system</li><li>Community rhythm</li></ol><a href={item.url} target="_blank" rel="noreferrer">Open Instagram ↗</a></div></article>)}</section></>}
      <section className="portfolio-end"><p>Looking for a connected creative partner?</p><h2>Make the next<br/>chapter visible.</h2><Link href="/contact">Discuss a project <i>↗</i></Link></section>
    </main>
  </div>;
}
