import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FooterCrowd } from '@/components/ui/footer-crowd';
import { Wordmark } from '@/components/Wordmark';
import { site } from '@/config/site';

export function StudioFooter() {
  return <footer className="studio-footer" aria-label="Sarvana Studio footer">
    <div className="studio-footer-content">
      <nav className="studio-footer-links" aria-label="Explore Sarvana">
        <h2>Explore</h2>
        <Link href="/#work">Our work <ArrowUpRight size={14}/></Link>
        <Link href="/#practice">Services <ArrowUpRight size={14}/></Link>
        <Link href="/nfc">NFC cards <ArrowUpRight size={14}/></Link>
      </nav>
      <nav className="studio-footer-links" aria-label="Start a project">
        <h2>Let’s create together</h2>
        <Link href="/contact">Start a project <ArrowUpRight size={14}/></Link>
        <a href={site.booking} target="_blank" rel="noreferrer">Book a call <ArrowUpRight size={14}/></a>
        <a href={site.whatsapp}>Chat on WhatsApp <ArrowUpRight size={14}/></a>
      </nav>
      <address className="studio-footer-contact">
        <h2>Contact</h2>
        <p className="studio-footer-founder">{site.founder}<span>Founder, Sarvana Studio</span></p>
        <a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={14}/></a>
        <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone} <ArrowUpRight size={14}/></a>
        <p>{site.location}</p>
        <div className="studio-footer-socials"><a href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </address>
    </div>
    <div className="studio-footer-signature"><Wordmark/></div>
    <FooterCrowd/>
    <div className="studio-footer-meta"><span>© 2026 Sarvana Studio</span><span>Made for meaningful connections.</span></div>
  </footer>;
}
