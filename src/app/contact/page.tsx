import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, CalendarDays, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram, LinkedinIcon as Linkedin } from '@/components/SocialIcons';
import { site } from '@/lib/site';
import { InquiryForm } from '@/components/InquiryForm';
export const metadata: Metadata = { title: 'Contact Servana — Let’s discuss your project', description: 'Discuss websites, creative direction and business software with Pranav Shinde at Servana in Yavatmal.', alternates: { canonical: `${site.url}/contact` } };
export default function ContactPage() {
  return <main className="contact-page"><nav><Link href="/">SERVANA ↗</Link><Link href="/#work">Selected work</Link></nav><header><p className="kicker">A conversation is a good beginning</p><h1>Let’s discuss<br/>your project.</h1><p>Available for selected projects across India.</p><p>We usually respond within one business day.</p></header><div className="contact-layout"><aside><h2>Choose your next step.</h2><div className="contact-choices"><a href="#inquiry">Send a project inquiry ↓</a><a href={site.whatsapp}><MessageCircle aria-hidden="true"/>Chat on WhatsApp ↗</a><a href={site.booking} target="_blank" rel="noreferrer"><CalendarDays aria-hidden="true"/>Book a discovery call ↗</a><a href={`mailto:${site.email}`}><Mail aria-hidden="true"/>Email directly ↗</a></div><p>Pranav Shinde<br/>Yavatmal, Maharashtra, India</p><a href="tel:+919156332109">+91 9156332109</a><p><a href={`mailto:${site.email}`}>{site.email}</a></p><div className="contact-socials"><a href="https://www.instagram.com/iampranav_009/" target="_blank" rel="noreferrer"><Instagram aria-hidden="true"/>Instagram ↗</a><a href="https://www.linkedin.com/in/iampranav009/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true"/>LinkedIn ↗</a></div></aside><InquiryForm/></div></main>;
}
