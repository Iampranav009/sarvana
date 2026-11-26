import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/config/site';
import { getServiceDomain } from '@/data/serviceDomains';
import { ServiceDomainPage } from '@/components/ServiceDomainPage';
import '../domain.css';
export function generateStaticParams() { return [...site.services.map(service => ({ slug: service.slug })), { slug: 'digital-products' }]; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = site.services.find(service => service.slug === slug);
  const domain = getServiceDomain(slug);
  const title = `${service?.title || 'Services'} | Sarvana Studio`;
  const description = service ? `${service.title} in Yavatmal by Sarvana Studio. ${service.outcome} Explore services, customization and project examples.` : site.description;
  return { title, description, alternates: { canonical: `${site.url}/services/${slug}` }, openGraph: { title, description, url: `${site.url}/services/${slug}`, ...(domain ? { images: [{ url: `${site.url}${domain.hero.src}`, alt: domain.hero.alt }] } : {}) } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'nfc-cards') permanentRedirect('/nfc');
  if (slug === 'digital-products') permanentRedirect('/services/website-development');
  const offering = site.services.find(service => service.slug === slug);
  const domain = getServiceDomain(slug);
  if (!offering || !domain) notFound();
  return <ServiceDomainPage offering={offering} domain={domain}/>;
}
