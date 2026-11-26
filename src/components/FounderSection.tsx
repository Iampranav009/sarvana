"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  ArrowUpRight,
  Code2,
  Users2,
  Cpu,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";

export function FounderSection() {
  return (
    <section
      id="founder"
      aria-label="Founder Profile and Story"
      className="relative w-full border-b border-white/[0.08] bg-[#050608] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Holographic Prism & Founder Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-sm border border-white/10 bg-[#080a0f] p-6 sm:p-8 shadow-2xl flex flex-col justify-between group">
              {/* Subtle holographic prismatic aura */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent pointer-events-none"
              />

              {/* Holographic prism ambient visual in card */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
                <Image
                  src="/media/servana-holographic-prism.png"
                  alt=""
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              {/* Editorial Frame Markings */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
                  <span>FOUNDER PROFILE</span>
                </div>
                <span className="text-cyan-400">YAVATMAL, MH</span>
              </div>

              {/* Center Monogram & Founder Credentials */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
                <div className="relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-white/15 bg-[#050608] shadow-[0_0_40px_rgba(0,242,254,0.18)]">
                  <div className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">
                    PS
                  </div>
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 border-dashed animate-spin-slow" />
                </div>
                <h3 className="mt-5 font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  PRANAV SHINDE
                </h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400">
                  FOUNDER & CREATIVE TECHNOLOGIST
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <MapPin className="h-3.5 w-3.5 text-rose-400" />
                  <span>Yavatmal, Maharashtra, India</span>
                </div>
              </div>

              {/* Quick Communication Actions Bar */}
              <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-center gap-2 font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/iampranav009/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pranav Shinde on LinkedIn (opens in new tab)"
                  className="p-2.5 rounded-sm bg-white/[0.04] hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/iampranav_009/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pranav Shinde on Instagram (opens in new tab)"
                  className="p-2.5 rounded-sm bg-white/[0.04] hover:bg-pink-500/20 text-zinc-300 hover:text-pink-300 border border-white/10 hover:border-pink-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919156332109?text=Hello%20Pranav%2C%20I%20found%20Servana%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Pranav Shinde on WhatsApp (opens in new tab)"
                  className="p-2.5 rounded-sm bg-white/[0.04] hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919156332109"
                  aria-label="Call Pranav Shinde at +91 9156332109"
                  className="p-2.5 rounded-sm bg-white/[0.04] hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Personal & Factual Founder Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="// 04 FOUNDER & DIRECTION"
              title="BUILDING USEFUL SYSTEMS FROM YAVATMAL"
              subtitle="Practical craftsmanship, modern web architecture, and community leadership bridging grassroots reality with reliable digital execution."
            />

            {/* Factual Biography */}
            <div className="mt-8 space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Pranav Shinde</span>, founder and creative
                technologist at <span className="text-white font-medium">SARVANA</span>. Based in Yavatmal,
                Maharashtra, I build straightforward, reliable digital systems across events, communities,
                commerce, and internal operations.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                My work focuses on practical problem-solving: creating the festival presence and Meetio
                ticketing enablement for Rangtari, organizing member and event directories for the BJP
                Yavatmal CRM, supporting local patient discovery for Piles Clinic Yavatmal, and leading the
                community web architecture for AWS Student Community Day Yavatmal.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                Every project combines clean Next.js and TypeScript engineering with clear structure and
                dependable execution—focusing on software that serves real communities and organizations.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="rounded-sm border border-white/5 bg-white/[0.015] p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
                  <Code2 className="h-4 w-4 shrink-0" />
                  <span>Full-Stack Architecture</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-light">
                  Next.js, TypeScript, Tailwind CSS, HTML5 Canvas tools, and responsive web systems.
                </p>
              </div>

              <div className="rounded-sm border border-white/5 bg-white/[0.015] p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-400">
                  <Users2 className="h-4 w-4 shrink-0" />
                  <span>Community Leadership</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-light">
                  Community organizer for regional student tech events and festival digital presence enablement.
                </p>
              </div>

              <div className="rounded-sm border border-white/5 bg-white/[0.015] p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Local Search & Patient Discovery</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-light">
                  Local search optimization, clinical service overviews, and direct contact routing.
                </p>
              </div>

              <div className="rounded-sm border border-white/5 bg-white/[0.015] p-3.5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-400">
                  <Cpu className="h-4 w-4 shrink-0" />
                  <span>Operational CRMs</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-light">
                  Categorized directories, event logistics tracking, and straightforward coordination tools.
                </p>
              </div>
            </div>

            {/* Founder Actions Cluster */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href="https://wa.me/919156332109?text=Hello%20Pranav%2C%20I%20found%20Servana%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project."
                external
                variant="primary"
                size="md"
                aria-label="Chat on WhatsApp with Pranav Shinde at +91 9156332109 (opens in new tab)"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp (+91 9156332109)</span>
              </Button>

              <Button
                href="tel:+919156332109"
                variant="secondary"
                size="md"
                aria-label="Call Pranav Shinde at +91 9156332109"
              >
                <Phone className="mr-2 h-4 w-4 text-cyan-400" />
                <span>Call +91 9156332109</span>
              </Button>

              <Button
                href="https://www.linkedin.com/in/iampranav009/"
                external
                variant="secondary"
                size="md"
                aria-label="View Pranav Shinde's LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon className="mr-2 h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-zinc-400" />
              </Button>

              <Button
                href="https://www.instagram.com/iampranav_009/"
                external
                variant="secondary"
                size="md"
                aria-label="View Pranav Shinde's Instagram profile (opens in new tab)"
              >
                <InstagramIcon className="mr-2 h-4 w-4 text-pink-400" />
                <span>Instagram</span>
                <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-zinc-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
