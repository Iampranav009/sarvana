"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { X, Expand, Check } from 'lucide-react';
import { ImageGallery } from '@/components/ui/carousel-circular-image-gallery';
import { nfcImage } from '@/data/nfc';
import { whatsappLink } from '@/config/site';

export function NfcGallery({images,name,compact=false,eager=false}:{images:string[];name:string;compact?:boolean;eager?:boolean}) {
  const [index,setIndex]=useState(0);
  const [opened,setOpened]=useState(false);
  const [selected,setSelected]=useState<number|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const opener=useRef<HTMLButtonElement|null>(null);
  const galleryImages=images.map((image,i)=>({url:nfcImage(image),title:`${name} NFC card reference ${i+1}`}));
  useEffect(()=>{
    if(!opened)return;
    const modal=dialog.current;
    if(!modal)return;
    modal.showModal();
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{modal.close();document.body.style.overflow=previous;opener.current?.focus();};
  },[opened]);
  const open=(next:number,trigger:HTMLButtonElement)=>{opener.current=trigger;setIndex(next);setOpened(true);};
  return <>
    {compact?<div className="nfc-gallery-compact"><button type="button" className="nfc-image" onClick={event=>open(0,event.currentTarget)} aria-label={`Enlarge ${name} NFC card`}><Image src={nfcImage(images[0])} alt={`${name} NFC card design reference`} loading={eager?'eager':'lazy'} fill sizes="(max-width:700px) 90vw, 45vw"/><span><Expand size={18}/></span></button></div>:<ImageGallery images={galleryImages} index={index} onIndexChange={setIndex} onPreview={open}/>}
    {selected!==null&&<div className="nfc-selection" role="status"><p>Your {name} reference is selected.</p><a className="nfc-button" href={whatsappLink(`${name} NFC. My chosen reference: ${images[selected]}. ${typeof window!=="undefined"?window.location.origin:""}${nfcImage(images[selected])}`)}>Enquire about this card ↗</a></div>}
    <dialog ref={dialog} className="nfc-lightbox" aria-label={`${name} image gallery`} onCancel={()=>setOpened(false)} onClick={event=>{if(event.target===event.currentTarget)setOpened(false);}} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();setIndex(current=>(current+(event.key==='ArrowRight'?1:-1)+images.length)%images.length);}}}>
      <div className="nfc-lightbox-inner"><div className="nfc-lightbox-top"><span>{name}</span><button type="button" autoFocus aria-label="Close image viewer" onClick={()=>setOpened(false)}><X/></button></div>
        {opened&&<ImageGallery images={galleryImages} index={index} onIndexChange={setIndex} enlarged/>}
        <div className="nfc-lightbox-bottom"><p className="nfc-note">Design reference · Final artwork confirmed on enquiry.</p><button className="nfc-button" type="button" onClick={()=>{setSelected(index);setOpened(false);}}>Choose this card <Check size={16}/></button></div>
      </div>
    </dialog>
  </>;
}

export function NfcMotion(){const root=useRef<HTMLSpanElement>(null);useEffect(()=>{const elements=root.current?.closest('.nfc-shell')?.querySelectorAll('[data-nfc-reveal]');if(!elements||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('nfc-visible');observer.unobserve(entry.target);}});},{threshold:.08});elements.forEach(el=>{el.classList.add('nfc-will-reveal');observer.observe(el);});return()=>observer.disconnect();},[]);return <span ref={root} hidden/>;}
