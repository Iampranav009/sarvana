"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Full-Stack Web Experience",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name or business entity.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email format.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please include a brief overview of what you are looking to build.";
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <footer
      id="contact"
      aria-label="Contact and Studio Inquiry"
      className="relative w-full bg-[#030406] px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Statement & Direct Founder Coordinates */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <SectionHeading
                tag="// 05 CONTACT"
                title="LET’S BUILD TOGETHER."
              />

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-lg">
                Whether you need an event presence, local search optimization, an internal organizational
                tool, or modern web architecture—feel free to reach out directly or submit an inquiry.
              </p>

              {/* Direct Instant Channels Card */}
              <div className="mt-8 rounded-sm border border-white/10 bg-[#07090e] p-5 sm:p-6 space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-2">
                  DIRECT FOUNDER CONTACT
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919156332109?text=Hello%20Pranav%2C%20I%20found%20Servana%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white px-4 py-3 font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp: +91 9156332109</span>
                  </a>

                  <a
                    href="tel:+919156332109"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-sm bg-cyan-950/40 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white px-4 py-3 font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  >
                    <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Call: +91 9156332109</span>
                  </a>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <a
                    href="https://www.linkedin.com/in/iampranav009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-blue-400" />
                    <span>LinkedIn / iampranav009</span>
                  </a>
                  <a
                    href="https://www.instagram.com/iampranav_009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-300 transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  >
                    <InstagramIcon className="h-3.5 w-3.5 text-pink-400" />
                    <span>Instagram / iampranav_009</span>
                  </a>
                </div>
              </div>

              {/* Coordinates metadata */}
              <div className="mt-8 space-y-3 font-mono text-xs text-zinc-400 border-l border-white/10 pl-4">
                <div>
                  <span className="text-cyan-400 block tracking-widest text-[10px] uppercase">
                    STUDIO STATUS:
                  </span>
                  <span>ACCEPTING COMMISSIONS & ADVISORY ROLES</span>
                </div>
                <div>
                  <span className="text-violet-400 block tracking-widest text-[10px] uppercase">
                    CREATIVE DIRECTION:
                  </span>
                  <span>PRANAV SHINDE</span>
                </div>
                <div>
                  <span className="text-zinc-500 block tracking-widest text-[10px] uppercase">
                    HEADQUARTERS & PROTOCOL:
                  </span>
                  <span>YAVATMAL, MAHARASHTRA // REMOTE WORLDWIDE</span>
                </div>
              </div>
            </div>

            <div className="mt-10 hidden lg:block font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
              SERVANA STUDIO // YAVATMAL
            </div>
          </div>

          {/* Right Column: Inquiry Form UI */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#080a0f] p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-12 flex flex-col items-center text-center animate-fade-in"
                >
                  <CheckCircle2 className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-white">
                    INQUIRY RECORDED LOCALLY
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300 max-w-md font-light leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your
                    inquiry has been validated and recorded locally in this preview.
                  </p>
                  <div className="mt-6 rounded-sm bg-white/[0.03] border border-white/10 p-4 font-mono text-xs text-zinc-400 max-w-md text-left">
                    <span className="text-cyan-400 font-semibold">[DIRECT CONNECT]</span> For immediate
                    conversation, message Pranav directly on WhatsApp at{" "}
                    <a
                      href="https://wa.me/919156332109?text=Hello%20Pranav%2C%20I%20found%20Servana%20through%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 underline underline-offset-2"
                    >
                      +91 9156332109
                    </a>
                    .
                  </div>
                  <div className="mt-8">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          projectType: "Full-Stack Web Experience",
                          message: "",
                        });
                      }}
                    >
                      Reset inquiry form
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                      START A PROJECT
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">PHASE // BRIEF</span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block font-mono text-xs uppercase tracking-widest text-zinc-300 mb-2"
                    >
                      Your Name / Entity *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="e.g. Nexus Events or Dr. Patil"
                      className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-colors"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 flex items-center gap-1.5 font-mono text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone fields in grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block font-mono text-xs uppercase tracking-widest text-zinc-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        placeholder="name@business.com"
                        className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-colors"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 flex items-center gap-1.5 font-mono text-xs text-rose-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block font-mono text-xs uppercase tracking-widest text-zinc-300 mb-2"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9156332109"
                        className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type selector */}
                  <div>
                    <label
                      htmlFor="form-type"
                      className="block font-mono text-xs uppercase tracking-widest text-zinc-300 mb-2"
                    >
                      Project Category
                    </label>
                    <select
                      id="form-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-sm border border-white/15 bg-[#080a0f] px-4 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-colors"
                    >
                      <option value="Event Platform & Ticketing">01 // Event Platform & Ticketing Enablement</option>
                      <option value="Local SEO & Patient Discovery">02 // Local SEO & Patient Discovery Platform</option>
                      <option value="Internal Operational CRM">03 // Internal Operational CRM & Directory</option>
                      <option value="Corporate / Enterprise Web">04 // Corporate Web Presence & Catalog</option>
                      <option value="Interactive Web Tools & Canvas">05 // Interactive Canvas & Web Tools</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block font-mono text-xs uppercase tracking-widest text-zinc-300 mb-2"
                    >
                      Project Overview *
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      placeholder="Tell us about what you need built, target timeline, or operational goals..."
                      className="w-full rounded-sm border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 transition-colors"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 flex items-center gap-1.5 font-mono text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <p className="font-mono text-[11px] text-zinc-500">
                    * Client-side preview verification. For immediate inquiries, WhatsApp or call directly at +91 9156332109.
                  </p>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#080a0f] border border-cyan-400/50 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.25)] text-white px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                  >
                    <span>Transmit brief</span>
                    <Send className="h-3.5 w-3.5 text-cyan-400" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Footer Baseline */}
        <div className="mt-20 border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-sans font-bold text-white tracking-tight text-sm">
              SERVANA
            </span>
            <span>{"//"}</span>
            <span>CREATIVE STUDIO</span>
            <span>{"//"}</span>
            <span className="text-zinc-400">PRANAV SHINDE</span>
            <span>{"//"}</span>
            <span className="text-zinc-500">YAVATMAL</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-wider">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#social" className="hover:text-white transition-colors">Social</a>
            <a href="#studio" className="hover:text-white transition-colors">Studio</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#founder" className="hover:text-white transition-colors">Founder</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-[11px] text-zinc-600">
            © 2026 SERVANA. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
