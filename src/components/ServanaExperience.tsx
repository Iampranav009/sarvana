"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REAL_PROJECTS } from "@/data/projects";
import { SOCIAL_WORK_ITEMS } from "@/data/socialWork";
import { CreativeFolders } from "@/components/CreativeFolders";
import { OrbitCapabilities } from "@/components/OrbitCapabilities";
import { LiveOrbSection } from "@/components/LiveOrbSection";
import { ServanaVolumetricHero } from "@/components/ServanaVolumetricHero";
import { ServicePathways } from "@/components/ServicePathways";
import { ClientVoices } from "@/components/ClientVoices";

const capabilities = [
  ["Digital products", "Web platforms, internal tools and interfaces designed around real operational needs.", "/services/digital-products"],
  ["Event systems", "Ticketing journeys, community portals and digital touchpoints that keep an event connected.", "/services/event-systems"],
  ["Creative direction", "Identity, social storytelling and campaign systems that give a project a recognizable voice.", "/services/creative-direction"],
  ["Search presence", "Useful websites structured to help local audiences discover and understand a service.", "/services/search-presence"],
];

const socialImages = ["/projects/rangtari.png", "/projects/hh-goa-frame.png", "/projects/aws-scd-yavatmal.png"];
const selectedWorkIds = ["rangtari", "piles-clinic-yavatmal", "savitri-reliable", "khushiyah-seller"];
const selectedWork = selectedWorkIds.map((id) => REAL_PROJECTS.find((project) => project.id === id)).filter((project): project is (typeof REAL_PROJECTS)[number] => Boolean(project));

export function ServanaExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !rootRef.current) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => gsap.fromTo(element, { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } }));
      gsap.utils.toArray<HTMLElement>("[data-word-reveal]").forEach((element) => gsap.fromTo(element.querySelectorAll("span"), { opacity: 0.12 }, { opacity: 1, stagger: 0.08, ease: "none", scrollTrigger: { trigger: element, start: "top 82%", end: "bottom 48%", scrub: 0.8 } }));
      gsap.utils.toArray<HTMLElement>("[data-image-wipe]").forEach((element) => gsap.fromTo(element, { clipPath: "inset(14% 10% 14% 10%)", scale: 0.9 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 92%", end: "top 35%", scrub: 0.8 } }));
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element, index) => gsap.to(element, { yPercent: index % 2 ? 9 : -9, rotate: index % 2 ? 1.2 : -1.2, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 1.1 } }));
      gsap.fromTo("[data-social-title]", { xPercent: -12 }, { xPercent: 8, ease: "none", scrollTrigger: { trigger: ".social-chapter", start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, index) => { if (index) gsap.fromTo(card, { y: 120, scale: 0.96 }, { y: 0, scale: 1, ease: "none", scrollTrigger: { trigger: card, start: "top 92%", end: "top 28%", scrub: 0.7 } }); });
      });
    }, rootRef);
    return () => context.revert();
  }, []);

  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);

  return <div ref={rootRef} className="site-shell">
    <header className="floating-nav"><a className="brand-mark" href="#top">SERVANA<span>®</span></a><nav className="desktop-nav"><a href="#work">Work</a><a href="#practice">Practice</a><Link href="/work/creative">Creative</Link></nav><a className="nav-cta" href="#contact">Start a project <i>↗</i></a><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span/><span/></button></header>
    {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true">{[["Work","#work"],["Practice","#practice"],["Founder","#founder"],["Contact","#contact"]].map(([label,href],index)=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}<span>0{index+1}</span></a>)}</div>}
    <main id="main-content">
      <div id="top" data-hero><ServanaVolumetricHero /></div>
      <LiveOrbSection />
      <OrbitCapabilities />
      <section className="statement-chapter"><p data-word-reveal>{"We build digital work with the clarity of a product, the emotion of a campaign and the momentum of a live experience.".split(" ").map((word,i)=><span key={i}>{word} </span>)}</p></section>
      <section id="practice" className="capability-chapter"><div className="chapter-heading" data-reveal><p>What we do</p><h2>One studio.<br/>Four connected crafts.</h2></div><div className="capability-list">{capabilities.map(([title,copy,href],index)=><Link href={href} key={title} data-reveal><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></Link>)}</div></section>
      <ServicePathways />
      <section id="work" className="work-chapter"><div className="work-heading"><p>Selected work</p><h2>Proof, not<br/>promises.</h2><p>Four focused digital experiences across events, healthcare, business services and commerce.</p></div><div className="work-rail">{selectedWork.map((project,index)=><article data-project-card key={project.id} className="project-card"><a href={project.liveUrl} target="_blank" rel="noreferrer"><div className="project-visual"><Image src={project.image} alt={`${project.title} website`} fill sizes="(max-width: 1024px) 100vw, 64vw" className="project-image"/><span>View live ↗</span></div><div className="project-meta"><span>{String(index+1).padStart(2,"0")}</span><div><h3>{project.title}</h3><p>{project.tagline}</p></div><small>{project.category}</small></div></a></article>)}<Link className="more-work-cta" href="/work/websites"><span>Explore every website project</span><i>↗</i></Link></div></section>
      <ClientVoices />
      <CreativeFolders />
      <section className="social-chapter"><div className="chapter-heading" data-reveal><p>Graphic and social direction</p><h2 data-social-title>Identity that moves<br/>with the community.</h2></div><div className="social-accordion">{SOCIAL_WORK_ITEMS.map((item,index)=><a data-reveal key={item.handle} href={item.url} target="_blank" rel="noreferrer"><div data-image-wipe data-drift className="social-demo-image"><Image src={socialImages[index]} alt={`Temporary visual for ${item.title}`} fill sizes="(max-width: 768px) 100vw, 33vw"/><b>Demo image · replace later</b></div><span>0{index+1}</span><h3>{item.handle}</h3><p>{item.description}</p><i>↗</i></a>)}</div></section>
      <section id="founder" className="founder-chapter"><div className="founder-orbit" aria-hidden="true"><span>PS</span></div><div data-reveal><p className="kicker">Founded by Pranav Shinde</p><h2>Local understanding.<br/>Global ambition.</h2><p className="founder-copy">From Yavatmal, Pranav builds useful digital systems for events, communities, local businesses and emerging products—combining creative direction with hands-on execution.</p><div className="founder-links"><a href="https://www.linkedin.com/in/iampranav009/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/iampranav_009/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section>
      <section id="contact" className="contact-chapter"><p data-reveal>Have an idea worth making real?</p><h2 data-reveal>Let’s build<br/>the next one.</h2><div data-reveal className="contact-actions"><a href="https://wa.me/919156332109" target="_blank" rel="noreferrer">WhatsApp Pranav <i>↗</i></a><a href="tel:+919156332109">+91 9156332109</a></div><footer><strong>SERVANA</strong><span>Creative technology studio · Yavatmal, Maharashtra</span><span>© 2026</span></footer></section>
    </main>
  </div>;
}
