"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section
      id="services"
      aria-label="Capabilities and Services"
      className="relative w-full border-b border-white/[0.08] bg-[#050608] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="// 03 CAPABILITIES"
          title="DISCIPLINES & SERVICES"
          subtitle="Five integrated core disciplines bridging strategic vision, sensory digital design, and high-performance engineering."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Numbered Interactive Service Rows */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {SERVICES_DATA.map((service: ServiceItem) => {
              const isActive = service.id === activeServiceId;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`group relative transition-colors ${
                    isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveServiceId(service.id)}
                    onFocus={() => setActiveServiceId(service.id)}
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${service.id}`}
                    className="w-full text-left py-6 sm:py-8 px-4 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest">
                        {service.number}
                      </span>
                      <h3
                        className={`font-sans text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="text-zinc-500 group-hover:text-cyan-300 transition-colors">
                      {isActive ? (
                        <Minus className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {/* Inline expansion for mobile / keyboard users */}
                  {isActive && (
                    <div
                      id={`service-panel-${service.id}`}
                      className="px-4 pb-6 block lg:hidden animate-fade-in"
                    >
                      <p className="text-sm text-zinc-300 font-light leading-relaxed">
                        {service.shortSummary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.scope.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Holographic Abstract Preview Panel (Desktop / Tablet) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#080a0f] p-8 shadow-2xl transition-all duration-500">
              {/* Dynamic prismatic gradient reflection */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeService.highlightAccent} opacity-10 blur-xl transition-all duration-700`}
              />

              <div className="relative z-10 flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                      SCOPE SPECIFICATION // {activeService.number}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">SERVANA</span>
                  </div>

                  <h4 className="mt-6 font-sans text-2xl font-bold uppercase tracking-tight text-white">
                    {activeService.title}
                  </h4>

                  <p className="mt-3 text-sm text-zinc-300 font-light leading-relaxed">
                    {activeService.shortSummary}
                  </p>

                  {/* Detailed scope points */}
                  <div className="mt-6 space-y-2">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      KEY DELIVERABLES:
                    </p>
                    <ul className="space-y-1.5 list-none p-0 m-0">
                      {activeService.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-mono text-xs text-zinc-300"
                        >
                          <span className="h-1 w-1 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA for this discipline */}
                <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-500">ENGAGEMENT READY</span>
                  <Button href="#contact" variant="ghost" size="sm" className="gap-1.5">
                    <span>Inquire for {activeService.number}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
