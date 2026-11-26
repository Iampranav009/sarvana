"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Wordmark } from '@/components/Wordmark';

const links = [['Our work', '/#work'], ['Services', '/#practice'], ['Creative', '/work/creative'], ['NFC cards', '/nfc']] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const close = () => { setOpen(false); toggle.current?.focus(); };

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
      if (event.key === 'Tab') {
        const controls = [toggle.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((el): el is HTMLButtonElement | HTMLAnchorElement => Boolean(el));
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const handleResize = () => { if (window.innerWidth >= 901) setOpen(false); };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', handleKey); window.removeEventListener('resize', handleResize); };
  }, [open]);

  return <>
    <header className={`floating-nav is-solid${scrolled || open ? ' is-scrolled' : ''}`} aria-label="Sarvana navigation">
      <Link className="brand-mark" href="/" aria-label="Sarvana home" onClick={() => setOpen(false)}><Wordmark priority/></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a project <i aria-hidden="true">↗</i></Link>
      <button ref={toggle} type="button" className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="studio-mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span/><span/></button>
    </header>
    {open && <div ref={menu} id="studio-mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation"><nav>{[...links, ['Contact', '/contact']].map(([label, href]) => <Link key={label} href={href} onClick={close}>{label}<span aria-hidden="true">↗</span></Link>)}</nav></div>}
  </>;
}
