"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, Expand, Grid2X2, Layers } from "lucide-react";

export interface GalleryImageData { title: string; url: string }
interface ImageGalleryProps {
  images: GalleryImageData[];
  index: number;
  onIndexChange: (index: number) => void;
  onPreview?: (index: number, trigger: HTMLButtonElement) => void;
  enlarged?: boolean;
}

// Adapted from the supplied circular gallery: local assets and GSAP, isolated SVG
// clip paths, keyboard-accessible thumbnail tabs, and an optional grid layout.
export function ImageGallery({ images, index, onIndexChange, onPreview, enlarged = false }: ImageGalleryProps) {
  const [view, setView] = useState<"seamless" | "grid">("seamless");
  const id = useId().replace(/:/g, "");
  const stage = useRef<HTMLDivElement>(null);
  const previous = useRef(index);
  const first = useRef(true);
  const touch = useRef<number | null>(null);

  useEffect(() => {
    const root = stage.current;
    if (!root || view !== "seamless") return;
    const layers = root.querySelectorAll<SVGSVGElement>(".circular-gallery-layer");
    layers.forEach((layer, i) => { layer.style.zIndex = i === index ? "3" : i === previous.current ? "2" : "1"; });
    const circle = layers[index]?.querySelector("circle");
    if (!circle) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.fromTo(circle, { attr: { cx: 200, cy: 350, r: first.current || reduced ? 580 : 9 } }, {
        attr: { cx: 200, cy: 200, r: 580 }, duration: first.current || reduced ? 0 : 0.8, ease: "power3.inOut",
      });
    }, root);
    previous.current = index;
    first.current = false;
    return () => { context.kill(); };
  }, [index, view]);

  const move = (step: number) => onIndexChange((index + step + images.length) % images.length);
  if (!images.length) return null;
  return <div className={`circular-gallery ${enlarged ? "is-enlarged" : ""}`}>
    {!enlarged && <div className="circular-gallery-toolbar" role="group" aria-label="Image layout">
      <button type="button" aria-pressed={view === "seamless"} onClick={() => setView("seamless")}><Layers size={16}/> Seamless view</button>
      <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")}><Grid2X2 size={16}/> Grid view</button>
    </div>}
    {view === "grid" ? <div className="circular-gallery-grid">{images.map((image, i) => <button className="circular-grid-image" type="button" key={image.url} aria-label={`Enlarge ${image.title}`} onClick={event => onPreview?.(i, event.currentTarget)}>
      <Image src={image.url} alt={image.title} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw"/>
      <span className="circular-preview-icon"><Expand size={18}/></span>
    </button>)}</div> : <>
      <div className="circular-gallery-stage" ref={stage} role="group" aria-roledescription="carousel" aria-label="NFC card images"
        onTouchStart={event => { touch.current = event.touches[0].clientX; }}
        onTouchEnd={event => { if (touch.current !== null) { const distance = event.changedTouches[0].clientX - touch.current; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); } touch.current = null; }}>
        {images.map((image, i) => <svg key={image.url} className="circular-gallery-layer" viewBox="0 0 400 400" aria-hidden="true" style={{zIndex: i === index ? 3 : 1}}>
          <defs><clipPath id={`${id}-circle-${i}`}><circle cx="200" cy="200" r="580"/></clipPath></defs>
          <image width="400" height="400" href={image.url} preserveAspectRatio="xMidYMid meet" clipPath={`url(#${id}-circle-${i})`}/>
        </svg>)}
        <span className="sr-only" aria-live="polite">{images[index].title}</span>
        {onPreview && <button className="circular-gallery-open" type="button" aria-label={`Enlarge ${images[index].title}`} onClick={event => onPreview(index, event.currentTarget)}><span className="circular-preview-icon"><Expand size={18}/></span></button>}
      </div>
      <div className="circular-gallery-controls">
        <button type="button" aria-label="Previous image" onClick={() => move(-1)} disabled={images.length < 2}><ChevronLeft size={20}/></button>
        <div className="circular-gallery-tabs" role="group" aria-label="Choose an image">{images.map((image, i) => <button key={image.url} type="button" aria-label={`Show ${image.title}`} aria-pressed={index === i} onClick={() => onIndexChange(i)}><Image src={image.url} alt="" width={44} height={44}/></button>)}</div>
        <button type="button" aria-label="Next image" onClick={() => move(1)} disabled={images.length < 2}><ChevronRight size={20}/></button>
      </div>
    </>}
  </div>;
}
