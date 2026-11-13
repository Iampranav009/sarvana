"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REAL_PROJECTS, RealProject } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectModal } from "./ProjectModal";
import { Button } from "./Button";

export function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState<RealProject | null>(null);
  const [activeFlagshipIndex, setActiveFlagshipIndex] = useState(0);

  const desktopPinRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const flagshipProjects = REAL_PROJECTS.filter((p) => p.flagship);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Responsive GSAP Context: Desktop pins & scrubs flagship cases; mobile uses light scroll reveals
    const mm = gsap.matchMedia();

    // Desktop: Pin & scrub flagship sequence
    mm.add("(min-width: 1024px)", () => {
      if (!desktopPinRef.current || !desktopTrackRef.current) return;

      const totalSteps = flagshipProjects.length;

      const trigger = ScrollTrigger.create({
        trigger: desktopPinRef.current,
        start: "top top+=80",
        end: `+=${totalSteps * 650}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps)
          );
          setActiveFlagshipIndex(step);
        },
      });

      return () => {
        trigger.kill();
      };
    });

    // Mobile & All: Subtle section reveals for editorial cards
    mm.add("(max-width: 1023px)", () => {
      const cards = document.querySelectorAll(".mobile-project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, [flagshipProjects.length]);

  const currentFlagship = flagshipProjects[activeFlagshipIndex] || flagshipProjects[0];

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-label="Selected Work & Case Studies"
      className="relative w-full border-b border-white/[0.08] bg-[#050608] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <SectionHeading
            tag="// 01 SELECTED WORKS"
            title="REAL SYSTEMS & CASE STUDIES"
            subtitle="Seven digital systems built from Yavatmal across developer conferences, festival operations, local clinic discovery, and grassroots CRMs."
          />
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest self-start md:self-end">
            [ 7 CASE STUDIES ]
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP PINNED & SCRUBBED SHOWCASE (Desktop Choreography)
           ========================================================================= */}
        <div className="hidden lg:block mt-12 mb-20" ref={desktopPinRef}>
          <div
            ref={desktopTrackRef}
            className="rounded-sm border border-white/10 bg-[#080a0f] p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Top Bar with Step Switcher */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                  FLAGSHIP SEQUENCE // 0{activeFlagshipIndex + 1} OF 0{flagshipProjects.length}
                </span>
              </div>

              {/* Step Selector Buttons */}
              <div className="flex items-center gap-2">
                {flagshipProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveFlagshipIndex(idx)}
                    className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      idx === activeFlagshipIndex
                        ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50"
                        : "text-zinc-500 hover:text-zinc-300 border border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    0{idx + 1} {p.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Screen Stage: Left Screenshot Layer, Right Story Breakdown */}
            <div className="mt-8 grid grid-cols-12 gap-10 items-center">
              {/* Left Column: Screenshot with depth & transition */}
              <div className="col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/15 bg-black shadow-2xl group">
                  <Image
                    src={currentFlagship.image}
                    alt={`Screenshot of ${currentFlagship.title}`}
                    fill
                    sizes="(max-width: 1200px) 50vw, 720px"
                    priority={activeFlagshipIndex === 0}
                    loading={activeFlagshipIndex === 0 ? "eager" : "lazy"}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Corner telemetry tag */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 font-mono text-[10px] text-cyan-300 uppercase tracking-widest">
                    {currentFlagship.category}
                  </div>

                  <div className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    PROJECT // 0{activeFlagshipIndex + 1}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Details */}
              <div className="col-span-5 flex flex-col justify-between space-y-5">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    {currentFlagship.client}
                  </div>
                  <h3 className="mt-1 font-sans text-3xl font-bold uppercase tracking-tight text-white">
                    {currentFlagship.title}
                  </h3>

                  {/* Role Pill */}
                  <div className="mt-3 inline-flex items-center gap-2 rounded-sm border border-cyan-400/30 bg-cyan-950/20 px-2.5 py-1 font-mono text-xs text-cyan-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span className="text-[11px]">{currentFlagship.role}</span>
                  </div>

                  {/* Concise Problem -> Solution Story */}
                  <div className="mt-5 space-y-3 font-light text-zinc-300 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400 block font-normal">
                        Problem
                      </span>
                      <p className="line-clamp-2 text-zinc-300">{currentFlagship.story.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block font-normal">
                        Build & Delivery
                      </span>
                      <p className="line-clamp-2 text-zinc-300">{currentFlagship.story.build}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block font-normal">
                        Factual Outcome
                      </span>
                      <p className="line-clamp-2 text-zinc-300">{currentFlagship.story.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                  <Button
                    href={currentFlagship.liveUrl}
                    external
                    variant="primary"
                    size="sm"
                    aria-label={`Visit live project ${currentFlagship.title} (opens in new tab)`}
                  >
                    <span>Visit live project</span>
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-cyan-400" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setActiveModalProject(currentFlagship)}
                  >
                    <BookOpen className="mr-1.5 h-3.5 w-3.5 text-zinc-400" />
                    <span>Read case story</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FULL EDITORIAL ARCHIVE — ALL SEVEN PROJECTS
            (Responsive Editorial Grid for Desktop & Mobile)
           ========================================================================= */}
        <div className="mt-12">
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              COMPLETE PROJECT ARCHIVE [01 — 07]
            </h3>
            <span className="font-mono text-[11px] text-zinc-500">
              EVENT PLATFORMS, CRMS & WEB UTILITIES
            </span>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {REAL_PROJECTS.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={project.id}
                  className="mobile-project-card group relative rounded-sm border border-white/10 bg-[#07090e] p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,242,254,0.08)]"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Visual Screenshot Column */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/15 bg-black shadow-2xl">
                        <Image
                          src={project.image}
                          alt={`Interface capture for ${project.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                          loading="lazy"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        {/* Badges on screenshot */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 font-mono text-[10px] text-cyan-300 uppercase tracking-widest">
                            CASE {project.number}
                          </span>
                          <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 font-mono text-[10px] text-zinc-300 uppercase tracking-widest">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                          CASE {project.number}
                        </div>
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                        <span>{project.number}</span>
                        <span className="text-zinc-600">{"//"}</span>
                        <span className="text-zinc-400">{project.client}</span>
                      </div>

                      <h3 className="mt-2 font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Role Tag */}
                      <div className="mt-3 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300 self-start">
                        <span className="text-cyan-400 font-semibold text-[10px] uppercase">
                          Role:
                        </span>
                        <span>{project.role}</span>
                      </div>

                      <p className="mt-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Problem -> Idea -> Build -> Impact mini-matrix */}
                      <div className="mt-5 space-y-2.5 rounded-sm border border-white/5 bg-white/[0.015] p-3.5 font-mono text-xs">
                        <div className="flex items-start gap-2">
                          <span className="text-rose-400 shrink-0 uppercase text-[10px] tracking-wider w-14">
                            Problem:
                          </span>
                          <span className="text-zinc-400 font-sans font-light text-xs line-clamp-2">
                            {project.story.problem}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-cyan-400 shrink-0 uppercase text-[10px] tracking-wider w-14">
                            Build:
                          </span>
                          <span className="text-zinc-300 font-sans font-light text-xs line-clamp-2">
                            {project.story.build}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 shrink-0 uppercase text-[10px] tracking-wider w-14">
                            Impact:
                          </span>
                          <span className="text-zinc-400 font-sans font-light text-xs line-clamp-2">
                            {project.story.impact}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button
                          href={project.liveUrl}
                          external
                          variant="primary"
                          size="sm"
                          aria-label={`Visit live project ${project.title} (opens in new tab)`}
                        >
                          <span>Visit live project</span>
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-cyan-400" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setActiveModalProject(project)}
                          aria-label={`Read full story for ${project.title}`}
                        >
                          <span>Full case story</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
