"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
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
import { ServiceGrid, ProcessSection, FaqSection } from "@/components/BusinessSections";
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !rootRef.current) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => gsap.fromTo(element, { y: 72, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } }));
    }, rootRef);
    return () => context.revert();
  }, []);


  return <div ref={rootRef} className="site-shell landing-page">
    <main id="main-content" tabIndex={-1}>
      <div id="top" data-hero><ServanaVolumetricHero /></div>
      <div className="trust-strip"><span>Four selected live client projects</span><span>Events · Healthcare · Business services · Commerce</span><span>Founded by Pranav Shinde</span></div><LiveOrbSection />
      <OrbitCapabilities />
      <ServiceGrid/>
      <section id="work" className="work-chapter"><div className="work-heading"><p>Portfolio</p><h2>Selected client projects.</h2><p>Four focused digital experiences across events, healthcare, business services and commerce.</p></div><div className="work-rail">{selectedWork.map((project,index)=><div key={project.id} className="work-row"><article className="project-card"><a href={project.liveUrl} target="_blank" rel="noreferrer"><div className="project-visual"><Image src={project.image} alt={`${project.title} website`} fill sizes="(max-width: 900px) 100vw, 52vw" className="project-image"/><span>View live ↗</span></div><div className="project-meta"><span>{String(index+1).padStart(2,"0")}</span><div><h3>{project.title}</h3><p>{project.tagline}</p></div><small>{project.category}</small></div></a></article><aside className="project-about" data-reveal><span>About the work · {String(index+1).padStart(2,"0")}</span><h3>{project.client}</h3><p>{project.story.problem}</p><Link href={`/work/${project.id}`}>Read the project story ↗</Link><dl><div><dt>Sarvana’s role</dt><dd>{project.role}</dd></div><div><dt>What changed</dt><dd>{project.story.impact}</dd></div></dl><ul>{project.tags.slice(0,3).map((tag)=><li key={tag}>{tag}</li>)}</ul></aside></div>)}<Link className="more-work-cta" href="/work/websites"><span>Explore every website project</span><i>↗</i></Link></div></section>


      <section className="social-chapter"><div className="chapter-heading" data-reveal><p>Graphic and social direction</p><h2>Identity that moves<br/>with the community.</h2></div><div className="social-accordion">{SOCIAL_WORK_ITEMS.map((item,index)=><a data-reveal key={item.handle} href={item.url} target="_blank" rel="noreferrer"><div className="social-demo-image social-logo-image"><Image src={socialImages[index]} alt={`${item.title} logo`} fill sizes="(max-width: 768px) 100vw, 33vw"/></div><div className="social-card-copy"><h3>{item.handle}</h3><i aria-hidden="true">↗</i><p>{item.description}</p></div></a>)}</div></section>
      <ProcessSection/><ServicePathways/><ClientVoices/><CreativeFolders/>
      <FaqSection/>
      <section id="contact" className="contact-chapter contact-refresh">
        <div className="contact-refresh-copy" data-reveal><p className="kicker">Your next chapter</p><h2>Let’s make<br/>it happen.</h2><p className="contact-refresh-intro">A website, a new identity, or a stronger digital presence. Tell us what you have in mind.</p></div>
        <div className="contact-refresh-actions" data-reveal><Link className="studio-action" href="/contact">Tell us about your project <i aria-hidden="true">↗</i></Link><a className="contact-booking" href={site.booking} target="_blank" rel="noreferrer">Book a discovery call <span aria-hidden="true">↗</span></a><p>Based in Yavatmal. Working across India.</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a></div>
      </section>
    </main>
  </div>;
}
