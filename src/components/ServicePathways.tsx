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
    summary: "For ambitious teams that need Sarvana as an embedded creative and digital partner.",
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

export function ServicePathways({ context, focusItems }: { context?: string; focusItems?: string[] } = {}) {
  const options = context && focusItems ? pathways.map((pathway, index) => ({
    ...pathway,
    summary: [
      `For one focused ${context.toLowerCase()} need, with a clear brief and agreed first delivery.`,
      `For a broader ${context.toLowerCase()} scope with several connected deliverables.`,
      `For ongoing ${context.toLowerCase()} support, planned together around your priorities.`,
    ][index],
    outcome: [
      'Start with one useful, well-defined piece of work.',
      'Connect the parts that need to work together.',
      'Keep improving with a clear review and delivery rhythm.',
    ][index],
    services: index === 0
      ? ['Discovery and a written scope', `A focused brief for ${focusItems[0].toLowerCase()}`, 'Brand and workflow requirements', 'Agreed review and revision stages', 'Final delivery and handover']
      : index === 1
        ? [...focusItems.slice(0, 3), 'A coordinated delivery plan', 'Review, handover and scoped support']
        : ['Ongoing planning and prioritisation', ...focusItems.slice(0, 2), 'An agreed delivery and review cadence', 'Maintenance or creative iteration as scoped'],
  })) : pathways;
  return (
    <section className="service-pathways" aria-labelledby="service-pathways-title">
      <div className="service-pathways-heading" data-reveal>
        <p>Ways to work together</p>
        <h2 id="service-pathways-title">Choose the right<br />level of momentum.</h2>
        <p>
          {context ? `Choose a starting point for ${context.toLowerCase()}. We agree the deliverables, timeline and support together.` : "Start with the pathway that reflects where your idea is today, then we shape the exact scope together."}
        </p>
      </div>

      <div className="service-pathways-grid">
        {options.map((pathway, index) => (
          <motion.article
            key={pathway.name}
            className={pathway.featured ? "service-pathway is-featured" : "service-pathway"}
            initial={false}
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
              href={whatsappLink(context ? `${pathway.name} for ${context}` : pathway.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ask about the ${pathway.name} on WhatsApp`}
            >
              Discuss this pathway <ArrowUpRight aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>

      <p>{context ? "One-off delivery and ongoing support are both available. We confirm the scope, fees and provider costs in your proposal." : "Monthly care plans cover agreed updates, hosting support and maintenance. Ask us to scope your plan."}</p>
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
