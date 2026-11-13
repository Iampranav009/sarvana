"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, Terminal, Lightbulb, ShieldAlert } from "lucide-react";
import { RealProject } from "@/data/projects";
import { Button } from "./Button";

interface ProjectModalProps {
  project: RealProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-sm border border-white/15 bg-[#080a0f] p-5 sm:p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              CASE {project.number}
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-sm p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label="Close case study details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="mt-6 max-h-[75vh] overflow-y-auto pr-1 space-y-6 sm:space-y-8">
          <div>
            <h3
              id="modal-project-title"
              className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {project.tagline}
            </p>

            {/* Role Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-sm border border-cyan-400/30 bg-cyan-950/20 px-3 py-1.5 font-mono text-xs text-cyan-300">
              <span className="font-semibold uppercase tracking-wider text-cyan-400 text-[10px]">
                Role:
              </span>
              <span>{project.role}</span>
            </div>
          </div>

          {/* Screenshot Showcase */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-white/15 bg-[#050608] shadow-2xl">
            <Image
              src={project.image}
              alt={`Live interface capture for ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 860px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/75 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
              CASE {project.number}
            </div>
          </div>

          {/* Problem -> Idea -> Build -> Impact Quad Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* 1. Problem */}
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-wider mb-2">
                <ShieldAlert className="h-4 w-4 shrink-0" />
                <span>01 // The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {project.story.problem}
              </p>
            </div>

            {/* 2. Idea */}
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase tracking-wider mb-2">
                <Lightbulb className="h-4 w-4 shrink-0" />
                <span>02 // The Concept & Idea</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {project.story.idea}
              </p>
            </div>

            {/* 3. Build */}
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2">
                <Terminal className="h-4 w-4 shrink-0" />
                <span>03 // Technical Build</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {project.story.build}
              </p>
            </div>

            {/* 4. Impact */}
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider mb-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>04 // Factual Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {project.story.impact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="font-mono text-xs text-zinc-500">
              CLIENT / PROJECT: <span className="text-zinc-300">{project.client}</span>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
              <Button href={project.liveUrl} external variant="primary" size="sm">
                <span>Visit live project</span>
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-cyan-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
