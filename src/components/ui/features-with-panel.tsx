"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  description: string;
  alt: string;
  content: string | React.ReactNode;
}

function FeatureMedia({ content, alt }: Pick<FeatureItem, "content" | "alt">) {
  if (typeof content !== "string") return <div className="creative-feature-custom">{content}</div>;
  const isVideo = /\.(mp4|webm|ogg)$/i.test(content);
  if (isVideo) return <video src={content} autoPlay muted loop playsInline aria-label={alt} />;
  return <Image src={content} alt={alt} fill sizes="(max-width: 1023px) 100vw, 46vw" />;
}

const items: FeatureItem[] = [
  { title: "Visual identity with a point of view.", description: "A recognizable type, image and composition system—not a collection of unrelated posts.", alt: "Rangtari visual direction", content: "/projects/rangtari.png" },
  { title: "Campaign systems built to expand.", description: "Launch graphics, announcements and event collateral that remain coherent across every touchpoint.", alt: "AWS Student Community Day campaign system", content: "/projects/aws-scd-yavatmal.png" },
  { title: "Motion that carries the message.", description: "Kinetic typography and movement designed around hierarchy, pacing and audience attention.", alt: "FrequencyX motion and visual direction placeholder", content: "/projects/hh-goa-frame.png" },
  { title: "Community stories with rhythm.", description: "A repeatable visual language for speakers, schedules, moments and live-event updates.", alt: "Community storytelling visual", content: "/projects/bjp-yavatmal-crm.png" },
];

export default function FeaturesWithPanel() {
  const [active, setActive] = React.useState(0);
  return <section className="creative-feature-panel" aria-labelledby="creative-disciplines-title">
    <div className="creative-feature-grid">
      <div className="creative-feature-list">
        <p>HOW THE CREATIVE WORK OPERATES</p>
        <h2 id="creative-disciplines-title">Four disciplines.<br/>One visual voice.</h2>
        <ul>{items.map((item, index) => <motion.li key={item.title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .08, ease: [.32,.72,0,1] }} className={cn("creative-feature-item", active === index && "is-active")}>
          <button type="button" onClick={() => setActive(index)} aria-expanded={active === index} aria-controls={`creative-panel-${index}`}>
            <span>0{index + 1}</span><span><strong>{item.title}</strong><small>{item.description}</small></span><i aria-hidden="true">↗</i>
          </button>
          <AnimatePresence initial={false}>{active === index && <motion.div id={`creative-panel-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .45, ease: [.32,.72,0,1] }} className="creative-feature-mobile-media"><Card><FeatureMedia content={item.content} alt={item.alt}/></Card></motion.div>}</AnimatePresence>
        </motion.li>)}</ul>
      </div>
      <div className="creative-feature-sticky"><Card><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 18, scale: .975 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .985 }} transition={{ duration: .5, ease: [.32,.72,0,1] }}><FeatureMedia content={items[active].content} alt={items[active].alt}/><div className="creative-feature-caption"><span>0{active + 1}</span><p>{items[active].description}</p></div></motion.div></AnimatePresence></Card></div>
    </div>
  </section>;
}
