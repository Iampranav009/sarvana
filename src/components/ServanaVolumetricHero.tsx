"use client";

import { motion } from "motion/react";
import { VolumetricStudio } from "@/components/ui/volumetric-studio";

const ease = [0.16, 1, 0.3, 1] as const;

export function ServanaVolumetricHero() {
  return <VolumetricStudio className="servana-volumetric-hero">
    <div className="volumetric-hero-copy">
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: .9, ease }} className="volumetric-kicker">INDEPENDENT CREATIVE TECHNOLOGY STUDIO · YAVATMAL</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1.15, ease }}>Digital experiences,<br/><span>staged for impact.</span></motion.h1>
      <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.58, duration: 1, ease }} className="volumetric-intro">Servana brings strategy, design and technology under one roof—building useful websites, event systems and visual identities that move people.</motion.p>
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.74, duration: 1, ease }} className="volumetric-actions"><a href="#work">Explore selected work <i>↓</i></a><a href="#contact">Start a project <span>↗</span></a></motion.div>
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="volumetric-hero-index"><span>01 Strategy</span><span>02 Design</span><span>03 Technology</span></motion.div>
  </VolumetricStudio>;
}
