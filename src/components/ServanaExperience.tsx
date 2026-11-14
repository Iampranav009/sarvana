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
import { site } from "@/lib/site";
import { ServiceGrid, IndustryGrid, ProcessSection, NfcSection, FaqSection } from "@/components/BusinessSections";
import { ClientVoices } from "@/components/ClientVoices";


const socialImages = [
  "/logos/nexus-events.webp",
  "/logos/frequency-x.webp",
  "/logos/aws-scd-yavatmal.webp",
];
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
    <header className="floating-nav"><a className="brand-mark" href="#top">SERVANA<span>®</span></a><nav className="desktop-nav"><a href="#work">Work</a><a href="#practice">Practice</a><Link href="/work/creative">Creative</Link></nav><a className="nav-cta" href="/contact">Let’s discuss your project <i>↗</i></a><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span/><span/></button></header>
    {menuOpen && <div className="mobile-menu" role="dialog" aria-modal="true">{[["Work","#work"],["Practice","#practice"],["Founder","#founder"],["Contact","/contact"]].map(([label,href],index)=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}<span>0{index+1}</span></a>)}</div>}
    <main id="main-content">
      <div id="top" data-hero><ServanaVolumetricHero /></div>
      <div className="trust-strip"><span>Four selected live client projects</span><span>Events · Healthcare · Business services · Commerce</span><span>Founded by Pranav Shinde</span></div><LiveOrbSection />
      <OrbitCapabilities />
      <ServiceGrid/><IndustryGrid/>
      <section id="work" className="work-chapter"><div className="work-heading"><p>Selected work</p><h2>Proof, not<br/>promises.</h2><p>Four focused digital experiences across events, healthcare, business services and commerce.</p></div><div className="work-rail">{selectedWork.map((project,index)=><div data-project-card key={project.id} className="work-row"><article className="project-card"><a href={project.liveUrl} target="_blank" rel="noreferrer"><div className="project-visual"><Image src={project.image} alt={`${project.title} website`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="project-image"/><span>View live ↗</span></div><div className="project-meta"><span>{String(index+1).padStart(2,"0")}</span><div><h3>{project.title}</h3><p>{project.tagline}</p></div><small>{project.category}</small></div></a></article><aside className="project-about" data-reveal><span>About the work · {String(index+1).padStart(2,"0")}</span><h3>{project.client}</h3><p>{project.story.problem}</p><Link href={`/work/${project.id}`}>Read the project story ↗</Link><dl><div><dt>Servana’s role</dt><dd>{project.role}</dd></div><div><dt>What changed</dt><dd>{project.story.impact}</dd></div></dl><ul>{project.tags.slice(0,3).map((tag)=><li key={tag}>{tag}</li>)}</ul></aside></div>)}<Link className="more-work-cta" href="/work/websites"><span>Explore every website project</span><i>↗</i></Link></div></section>


      <section className="social-chapter"><div className="chapter-heading" data-reveal><p>Graphic and social direction</p><h2 data-social-title>Identity that moves<br/>with the community.</h2></div><div className="social-accordion">{SOCIAL_WORK_ITEMS.map((item,index)=><a data-reveal key={item.handle} href={item.url} target="_blank" rel="noreferrer"><div data-image-wipe data-drift className="social-demo-image social-logo-image"><Image src={socialImages[index]} alt={`${item.title} logo`} fill sizes="(max-width: 768px) 100vw, 33vw"/></div><span>0{index+1}</span><h3>{item.handle}</h3><p>{item.description}</p><i>↗</i></a>)}</div></section>
      <ProcessSection/><ServicePathways/><NfcSection/><ClientVoices/><CreativeFolders/><FaqSection/>
      <section id="founder" className="founder-chapter"><div className="founder-orbit" aria-hidden="true"><span>PS</span></div><div data-reveal><p className="kicker">Founded by Pranav Shinde</p><h2>Local understanding.<br/>Global ambition.</h2><p className="founder-copy">From Yavatmal, Pranav builds useful digital systems for events, communities, local businesses and emerging products—combining creative direction with hands-on execution.</p><div className="founder-links"><a href="https://www.linkedin.com/in/iampranav009/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/iampranav_009/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section>
      <section id="contact" className="contact-chapter"><p data-reveal>Have an idea worth making real?</p><h2 data-reveal>Let’s build<br/>the next one.</h2><p>Available for selected projects across India. We usually respond within one business day.</p><div data-reveal className="contact-actions"><Link href="/contact">Let’s discuss your project ↗</Link><a href={site.booking} target="_blank" rel="noreferrer">Book a discovery call ↗</a><a href={`mailto:${site.email}`}>Email directly ↗</a><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp Pranav <i>↗</i></a><a href="tel:+919156332109">+91 9156332109</a></div><footer><strong>SERVANA</strong><span>Creative technology studio · Yavatmal, Maharashtra</span><span>© 2026</span></footer></section>
    </main>
  </div>;
}
