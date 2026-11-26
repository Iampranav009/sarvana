import Link from 'next/link';
import { ArrowUpRight, Monitor, Workflow, Sparkles, Palette, Megaphone, CalendarDays, ShoppingBag, MousePointer2, Globe, Search, Plus } from 'lucide-react';
import { site, whatsappLink } from '@/config/site';
const icons = [Monitor, Workflow, Sparkles, Palette, Megaphone, CalendarDays];
const websiteServices = [
  { title: 'Business websites', copy: 'Introduce your business with clear services, useful information and a direct path to enquire.', detail: 'Service businesses · Local brands', href: whatsappLink('a business website'), Icon: Monitor },
  { title: 'E-commerce stores', copy: 'Turn your catalogue into a shopping experience that works well on every screen.', detail: 'Products · Payments · Orders', href: whatsappLink('an e-commerce website'), Icon: ShoppingBag },
  { title: 'Landing pages', copy: 'Give your next campaign, launch or event one focused destination.', detail: 'Campaigns · Launches · Enquiries', href: whatsappLink('a campaign landing page'), Icon: MousePointer2 },
  { title: 'Web apps & portals', copy: 'Bring customer records, bookings and daily workflows into one practical workspace.', detail: 'Portals · Dashboards · Workflows', href: '/services/app-crm-development', Icon: Workflow },
  { title: 'Domains & hosting', copy: 'Get help choosing your domain, connecting hosting and setting up your website.', detail: 'Domain setup · Hosting · SSL', href: '/services/search-presence', Icon: Globe },
  { title: 'Website care & SEO', copy: 'Keep your website updated, easy to use and ready to be found in local search.', detail: 'Updates · Maintenance · Search', href: '/services/search-presence', Icon: Search },
];
export function ServiceGrid() {
  return <section className="business-section studio-services" id="practice" aria-labelledby="services-title">
    <div className="studio-section-heading"><div><p className="kicker">What we do</p><h2 id="services-title">Good ideas.<br/>Built together.</h2></div><p>From your first website to your next campaign, find the right support for your business.</p></div>
    <div className="studio-service-grid">{site.services.slice(0,6).map((service,index) => { const Icon = icons[index]; return <Link className="studio-service-card" key={service.slug} href={`/services/${service.slug}`}><div className="service-card-top"><span className="service-card-icon"><Icon aria-hidden="true"/></span><ArrowUpRight aria-hidden="true"/></div><h3>{service.title}</h3><p>{service.outcome}</p><ul>{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul><span className="service-card-link">Explore service <ArrowUpRight aria-hidden="true"/></span></Link>; })}</div>
  </section>;
}
export function WebsiteServices() {
  return <section id="what-we-build" className="website-services" aria-labelledby="website-services-title"><div className="website-services-inner">
    <div className="studio-section-heading"><div><p className="kicker">Web development</p><h2 id="website-services-title">Your place<br/>on the web.</h2></div><p>A focused landing page or a complete online business. Start with what you need today.</p></div>
    <div className="website-services-grid">{websiteServices.map(({title,copy,detail,href,Icon}) => <Link className="website-service-card" key={title} href={href}><Icon aria-hidden="true"/><h3>{title}</h3><p>{copy}</p><span className="website-service-detail">{detail}</span><span className="service-card-link">Let’s explore <ArrowUpRight aria-hidden="true"/></span></Link>)}</div>
  </div></section>;
}
export function ProcessSection(){return <section className="business-section process-section"><p className="kicker">How we work</p><h2>Clear steps.<br/>No guessing.</h2><div className="business-grid process-grid">{[['Talk','Tell us about your business and goals.'],['Plan and quote','Agree the scope, cost and milestones before building.'],['Build','Review the work together as it takes shape.'],['Launch and support','Go live with the access and support agreed in your proposal.']].map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p>{site.timelines}</p></section>}
export function NfcSection(){return <section className="business-section nfc-section"><p className="kicker">NFC smart cards</p><div className="tap-card" aria-hidden="true">SARVANA <span>Tap ↗</span></div><div className="nfc-section-copy"><h2>Tap. Review. Grow.</h2><p>One card at a time for your counter, your next event or your customer conversations.</p><p>Google review · Instagram · WhatsApp</p>{site.pricing.showPrices && site.pricing.nfc!==null && <p>Starting from ₹{site.pricing.nfc.toLocaleString('en-IN')}</p>}<Link className="business-button" href="/nfc">Explore NFC cards ↗</Link></div></section>}
export function FaqSection() {
  return <section id="faq" className="studio-faq" aria-labelledby="faq-title"><div className="studio-faq-heading"><p className="kicker">Questions & answers</p><h2 id="faq-title">A little clarity.<br/>Before we start.</h2><p>Have something else in mind? <Link href="/contact">Let’s talk ↗</Link></p></div><div className="studio-faq-list">{site.faqs.map(([q,a]) => <details key={q}><summary>{q}<Plus size={20} aria-hidden="true"/></summary><p>{a}</p></details>)}</div></section>;
}
