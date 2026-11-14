import type {MetadataRoute} from 'next';
import {site} from '@/config/site';
export default function manifest():MetadataRoute.Manifest{return {name:site.name,short_name:site.name,start_url:site.url,display:'standalone',background_color:'#050608',theme_color:'#050608',icons:[{src:'/favicon.ico',sizes:'any',type:'image/x-icon'}]}}
