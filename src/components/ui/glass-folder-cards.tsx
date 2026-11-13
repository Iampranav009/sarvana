import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type FolderFile = { name: string; meta?: string; href?: string };
export type GlassFolderProps = {
  label: string;
  meta?: string;
  tone?: "light" | "dark";
  art?: "navy" | "graphite" | "cyan";
  files: FolderFile[];
  href: string;
  appearDelay?: number;
  className?: string;
};

export default function GlassFolder({ label, meta, tone = "dark", art = "navy", files, href, appearDelay = 0, className }: GlassFolderProps) {
  const controlId = `folder-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return <article className={cn("gf-root", className)} data-tone={tone} data-art={art} style={{ "--gf-delay": `${appearDelay}ms` } as React.CSSProperties}>
    <div className="gf-stage">
      <div className="gf-back"><span>{String(files.length).padStart(2,"0")} FILES</span></div>
      <div className="gf-files">{files.slice(0,4).map((file,index) => {
        const content = <><strong>{file.name}</strong><small>{file.meta}</small></>;
        return file.href ? <Link key={file.name} href={file.href} className="gf-sheet" style={{ "--gf-index": index } as React.CSSProperties}>{content}</Link> : <div key={file.name} className="gf-sheet" style={{ "--gf-index": index } as React.CSSProperties}>{content}</div>;
      })}</div>
      <input id={controlId} type="checkbox" className="gf-toggle" aria-label={`Open or close ${label} folder`}/>
      <div className="gf-front" aria-hidden="true"><div className="gf-reflection"/></div>
      <div className="gf-label"><div><span>{label}</span><small>{meta ?? `${files.length} files`}</small></div><label htmlFor={controlId} aria-hidden="true"><span/><span/></label></div>
    </div>
    <Link href={href} className="gf-open-link">Explore collection <span>↗</span></Link>
  </article>;
}
