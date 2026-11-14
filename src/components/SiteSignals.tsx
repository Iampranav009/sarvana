"use client";
import {useEffect} from 'react';
export function SiteSignals(){useEffect(()=>{const handler=(event:MouseEvent)=>{const anchor=(event.target as Element).closest('a');if(!anchor)return;const href=anchor.getAttribute('href')||'';const name=href.includes('wa.me')?'whatsapp_click':href.startsWith('tel:')?'call_click':null;if(name)window.dispatchEvent(new CustomEvent('servana:analytics',{detail:{event:name,path:location.pathname}}))};document.addEventListener('click',handler);return()=>document.removeEventListener('click',handler)},[]);return null}
