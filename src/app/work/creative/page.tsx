import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/PortfolioPage';
import { site } from '@/config/site';
export const metadata: Metadata = { title: 'Creative & Brand Design | Sarvana Studio', description: 'Explore visual identity, campaign graphics and creative direction for events and businesses by Sarvana Studio.', alternates: { canonical: `${site.url}/work/creative` } };
export default function CreativePage() { return <PortfolioPage kind="creative"/>; }
