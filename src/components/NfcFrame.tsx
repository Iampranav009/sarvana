import Link from 'next/link';
import { nfcCategories, nfcFaqs } from '@/data/nfc';
import { NfcMotion } from './NfcGallery';
export function NfcFrame({children}:{children:React.ReactNode}){return <div className="nfc-shell"><NfcMotion/><div className="nfc-nav-space" aria-hidden="true"/><a href="#nfc-main" className="nfc-skip">Skip to content</a><main id="nfc-main">{children}</main></div>}
export function NfcFaq({minimal=false}:{minimal?:boolean}){return <section className="nfc-faq nfc-section" data-nfc-reveal>{!minimal&&<p className="nfc-eyebrow">A few things to know</p>}<h2>Small card.<br/>Clear answers.</h2><div>{nfcFaqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>}
export function NfcCategoryLinks({exclude}:{exclude?:string}){return <nav className="nfc-categories" aria-label="Browse NFC categories">{nfcCategories.filter(c=>c.slug!==exclude).map(c=><Link href={`/nfc/${c.slug}`} key={c.slug}>{c.name} ↗</Link>)}</nav>}
