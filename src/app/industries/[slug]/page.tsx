import {notFound} from 'next/navigation';
import {site} from '@/config/site';
import {OfferingPage} from '@/components/OfferingPage';
export function generateStaticParams(){return site.industries.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=site.industries.find(s=>s.slug===slug);return {title:`${s?.title || 'Business software'} | Servana Yavatmal`,description:site.description,alternates:{canonical:`${site.url}/industries/${slug}`}}}
export default async function IndustryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=site.industries.find(s=>s.slug===slug);if(!s)notFound();return <OfferingPage offering={s} kind="industries"/>}
