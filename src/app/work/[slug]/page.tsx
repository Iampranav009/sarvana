import {notFound} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {site,whatsappLink} from '@/config/site';
export function generateStaticParams(){return site.projects.map(p=>({slug:p.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=site.projects.find(p=>p.id===slug);return {title:`${p?.client || 'Selected work'} | Servana`,description:p?.tagline,alternates:{canonical:`${site.url}/work/${slug}`}}}
export default async function WorkPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=site.projects.find(p=>p.id===slug);if(!p)notFound();return <main className="business-section"><Link href="/">SERVANA ↗</Link><h1 className="text-5xl my-10">{p.title}</h1><p>{p.client} · {p.role}</p><Image className="my-10 w-full h-auto" src={p.image} alt={`${p.title} website`} width={1440} height={1000} sizes="(max-width:768px) 100vw, 1200px"/>{[['The challenge',p.story.problem],['What we built',p.story.build]].map(([title,copy])=><section key={title}><h2>{title}</h2><p>{copy}</p></section>)}<a className="business-button" href={p.liveUrl} target="_blank" rel="noreferrer">Visit {p.title} ↗</a><p><a href={whatsappLink(`a project similar to ${p.title}`)}>Discuss your project ↗</a></p></main>}
