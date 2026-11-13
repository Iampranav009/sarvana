"use client";

import React from "react";
import { ArrowUpRight, Radio, Users, Flame } from "lucide-react";
import { SOCIAL_WORK_ITEMS, SocialWorkItem } from "@/data/socialWork";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { InstagramIcon } from "./SocialIcons";

export function SocialWorkSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "nexus-events":
        return <Flame className="h-5 w-5 text-rose-400" />;
      case "frequencyx":
        return <Radio className="h-5 w-5 text-violet-400" />;
      case "aws-scd-ytl":
        return <Users className="h-5 w-5 text-amber-400" />;
      default:
        return <InstagramIcon className="h-5 w-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="social"
      aria-label="Creative Direction and Community Storytelling"
      className="relative w-full border-b border-white/[0.08] bg-[#030406] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <SectionHeading
            tag="// 02 CREATIVE DIRECTION"
            title="SOCIAL & COMMUNITY STORYTELLING"
            subtitle="Visual identities, festival stage graphics, event typography, and community campaigns across regional culture."
          />
          <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest self-start md:self-end">
            [ 3 CHANNELS ]
          </div>
        </div>

        {/* 3 Channels Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SOCIAL_WORK_ITEMS.map((item: SocialWorkItem) => (
            <article
              key={item.id}
              className="group relative rounded-sm border border-white/10 bg-[#07090e] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.1)]"
            >
              {/* Prismatic glow aura */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${item.accentGradient} opacity-30 rounded-sm pointer-events-none transition-opacity duration-300 group-hover:opacity-60`}
              />

              <div className="relative z-10">
                {/* Header tag & Icon */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    {getIcon(item.id)}
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                      {item.handle}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    INSTAGRAM
                  </span>
                </div>

                <div className="mt-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    {item.category}
                  </div>
                  <h3 className="mt-1 font-sans text-2xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Honest Role Tag */}
                <div className="mt-3 inline-block rounded-sm bg-white/[0.03] border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                  <span className="text-cyan-400 font-semibold mr-1.5 uppercase text-[9px]">
                    Focus:
                  </span>
                  <span>{item.role}</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Scope tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.scope.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                <Button
                  href={item.url}
                  external
                  variant="primary"
                  size="sm"
                  className="w-full"
                  aria-label={`Explore ${item.title} creative direction on Instagram (opens in new tab)`}
                >
                  <InstagramIcon className="mr-2 h-3.5 w-3.5 text-pink-400" />
                  <span>Explore on Instagram</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-cyan-400" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial note */}
        <div className="mt-10 rounded-sm border border-white/[0.06] bg-white/[0.015] p-4 text-center font-mono text-xs text-zinc-500">
          External profiles link directly to public Instagram channels.
        </div>
      </div>
    </section>
  );
}
