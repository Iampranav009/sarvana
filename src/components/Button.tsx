import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono uppercase tracking-[0.15em] transition-all duration-300 relative select-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]";

  const sizeStyles = {
    sm: "text-[11px] px-3.5 py-2",
    md: "text-xs px-5 py-3",
    lg: "text-xs px-7 py-4",
  }[size];

  const variantStyles = {
    primary:
      "text-white bg-[#080a0f] border border-cyan-400/40 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.22)] active:scale-[0.98]",
    secondary:
      "text-zinc-300 bg-transparent border border-white/15 hover:border-white/40 hover:text-white active:scale-[0.98]",
    ghost:
      "text-zinc-400 hover:text-white bg-transparent hover:bg-white/[0.04]",
    link:
      "text-zinc-400 hover:text-cyan-300 underline-offset-4 hover:underline p-0 tracking-widest",
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
