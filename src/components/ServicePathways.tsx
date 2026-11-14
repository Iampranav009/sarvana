"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { whatsappLink, site } from "@/config/site";
import { motion } from "motion/react";


const pathways = [
  {
    number: "01",
    name: "Foundation Sprint",
    summary: "For a new idea that needs clarity, a distinctive direction and a strong first release.",
    outcome: "Move from scattered thoughts to a confident digital launch.",
    services: [
      "Discovery and project positioning",
      "Creative direction and visual language",
      "Focused website or landing experience",
      "Responsive design and core interactions",
      "Launch-ready content structure",
    ],
  },
  {
    number: "02",
    name: "Growth System",
    summary: "For an active business, event or community ready to connect its brand, content and technology.",
    outcome: "Build one connected system that can grow with your audience.",
    services: [
      "Everything in Foundation Sprint",
      "Multi-page website or event platform",
      "Campaign and social media creative system",
      "SEO foundations and search visibility",
      "Analytics, integrations and ongoing refinement",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "Signature Partnership",
    summary: "For ambitious teams that need Servana as an embedded creative and digital partner.",
    outcome: "Turn every digital touchpoint into one recognizable experience.",
    services: [
      "End-to-end creative and digital direction",
      "Custom platforms, portals or operational tools",
      "Motion, campaigns and content production",
      "Priority strategy and hands-on support",
      "Long-term iteration across every channel",
    ],
  },
];

export function ServicePathways() {
  return (
    <section className="service-pathways" aria-labelledby="service-pathways-title">
      <div className="service-pathways-heading" data-reveal>
        <p>Ways to work together</p>
        <h2 id="service-pathways-title">Choose the right<br />level of momentum.</h2>
        <p>
          No fixed packages or hidden price tables. Start with the pathway that reflects where your idea is today, then we shape the exact scope together.
        </p>
      </div>

      <div className="service-pathways-grid">
        {pathways.map((pathway, index) => (
          <motion.article
            key={pathway.name}
            className={pathway.featured ? "service-pathway is-featured" : "service-pathway"}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="service-pathway-topline">
              <span>{pathway.number}</span>
              {pathway.featured && <strong>Most versatile</strong>}
            </div>
            <h3>{pathway.name}</h3>{site.pricing.showPrices && [site.pricing.foundation,site.pricing.growth,site.pricing.partnership][index] !== null && <p>Starting from ₹{[site.pricing.foundation,site.pricing.growth,site.pricing.partnership][index]?.toLocaleString("en-IN")}</p>}
            <p className="service-pathway-summary">{pathway.summary}</p>
            <p className="service-pathway-outcome"><span>Outcome</span>{pathway.outcome}</p>
            <ul>
              {pathway.services.map((service) => (
                <li key={service}><Check aria-hidden="true" /> <span>{service}</span></li>
              ))}
            </ul>
            <a
              href={whatsappLink(pathway.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ask about the ${pathway.name} on WhatsApp`}
            >
              Discuss this pathway <ArrowUpRight aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>

      <p>Monthly care plans cover agreed updates, hosting support and maintenance. Ask us to scope your plan.</p>
      <div className="service-pathways-note" data-reveal>
        <p>Not sure where you fit? Tell us what you are trying to make—we’ll recommend the clearest starting point.</p>
        <a
          href={whatsappLink("choosing a service pathway")}
          target="_blank"
          rel="noreferrer"
        >
          Start a WhatsApp conversation <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
