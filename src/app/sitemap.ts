import type {MetadataRoute} from 'next';
import {site} from '@/config/site';
export default function sitemap():MetadataRoute.Sitemap{return ['','/contact','/work/websites','/work/creative','/work/social-media',...site.services.map(s=>`/services/${s.slug}`),...site.industries.map(s=>`/industries/${s.slug}`),...site.projects.map(p=>`/work/${p.id}`)].map(path=>({url:`${site.url}${path}`}))}
