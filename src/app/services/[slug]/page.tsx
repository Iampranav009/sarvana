import { notFound, permanentRedirect } from 'next/navigation';
import { site } from '@/config/site';
import { OfferingPage } from '@/components/OfferingPage';
export function generateStaticParams(){return [...site.services.map(s=>({slug:s.slug})),{slug:'digital-products'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=site.services.find(s=>s.slug===slug);return {title:`${s?.title || 'Services'} in Yavatmal | Servana`,description:site.description,alternates:{canonical:`${site.url}/services/${slug}`},openGraph:{url:`${site.url}/services/${slug}`}}}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug==='digital-products')permanentRedirect('/services/website-development');const s=site.services.find(s=>s.slug===slug);if(!s)notFound();return <OfferingPage offering={s} kind="services"/>}
