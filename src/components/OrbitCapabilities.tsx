import { site } from "@/config/site";
import Link from "next/link";
import { LiveOrb } from "@/components/ui/live-orb";

const tags = site.services.slice(0,6).map(s => [s.title, `/services/${s.slug}`]);

export function OrbitCapabilities() {
  return <section id="capability-orbit" className="orbit-capabilities" aria-labelledby="orbit-title">
    <div className="orbit-copy" data-reveal>
      <p>YOUR NEED MEETS US</p>
      <h2 id="orbit-title">Different needs.<br/><span>One connected orbit.</span></h2>
      <p>Move through the field. Every capability responds, connects and leads to work built around your ambition.</p>
    </div>
    <div className="orbit-field">
      <div className="orbit-rings" aria-hidden="true"><i/><i/><i/></div>
      <div className="orb orb-primary"><LiveOrb size={330} label="Sarvana capability orb"/></div>
      <div className="orb orb-secondary"><LiveOrb size={160} colors={["#071014", "#00689b", "#20d9d2"]} label="Sarvana digital orb"/></div>
      <div className="orb orb-tertiary"><LiveOrb size={118} colors={["#242424", "#6d7777", "#f1f0ea"]} label="Sarvana creative orb"/></div>
      <div className="orbit-tags">{tags.map(([label,href],index)=><Link key={label} href={href} className={`orbit-tag orbit-tag-${index+1}`}><span>0{index+1}</span>{label}<i>↗</i></Link>)}</div>
      <p className="orbit-prompt">Tap, click or tab to choose a service</p>
    </div>
  </section>;
}
