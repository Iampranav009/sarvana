"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Social", href: "#social" },
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" },
  ];

  // Close mobile drawer on escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050608]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
          aria-label="SERVANA Creative Studio homepage"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-sans text-xl font-bold tracking-[-0.04em] text-white transition-colors group-hover:text-cyan-300">
            SERVANA
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 sm:inline-block">
            / STUDIO
          </span>
        </Link>

        {/* Desktop nav anchors */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          <ul className="flex items-center gap-5 lg:gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex">
            <Button href="/contact" variant="primary" size="sm">
              Let’s discuss your project
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-sm text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-zinc-300" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-50 bg-[#050608]/98 backdrop-blur-xl border-b border-white/[0.08] p-6 flex flex-col justify-between md:hidden animate-fade-in"
        >
          <nav aria-label="Mobile Menu Links" className="mt-4">
            <ul className="flex flex-col gap-5 list-none p-0 m-0">
              {navItems.map((item, idx) => (
                <li key={item.label} className="border-b border-white/[0.05] pb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between group font-mono text-base uppercase tracking-[0.18em] text-zinc-300 hover:text-cyan-300 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-zinc-600 font-mono">0{idx + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 pb-8">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let’s discuss your project
            </Button>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center">
              SERVANA — DIRECTION: PRANAV SHINDE
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
