import React from "react";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative w-full ${isCenter ? "text-center items-center" : "text-left items-start"} ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" aria-hidden="true" />
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cyan-400">
          {tag}
        </span>
      </div>

      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.035em] text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
