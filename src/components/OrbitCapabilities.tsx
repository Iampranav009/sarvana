import Link from "next/link";
import { LiveOrb } from "@/components/ui/live-orb";

const tags = [
  ["Website development", "/services/digital-products"],
  ["App development", "/services/digital-products"],
  ["Creative direction", "/services/creative-direction"],
  ["Event systems", "/services/event-systems"],
  ["Brand identity", "/work/creative"],
  ["Social storytelling", "/work/social-media"],
];

export function OrbitCapabilities() {
  return <section id="capability-orbit" className="orbit-capabilities" aria-labelledby="orbit-title">
    <div className="orbit-copy" data-reveal>
      <p>YOUR NEED MEETS US</p>
      <h2 id="orbit-title">Different needs.<br/><span>One connected orbit.</span></h2>
      <p>Move through the field. Every capability responds, connects and leads to work built around your ambition.</p>
    </div>
    <div className="orbit-field">
      <div className="orbit-rings" aria-hidden="true"><i/><i/><i/></div>
      <div className="orb orb-primary"><LiveOrb size={330} label="Servana capability orb"/></div>
      <div className="orb orb-secondary"><LiveOrb size={160} colors={["#071014", "#00689b", "#20d9d2"]} label="Servana digital orb"/></div>
      <div className="orb orb-tertiary"><LiveOrb size={118} colors={["#242424", "#6d7777", "#f1f0ea"]} label="Servana creative orb"/></div>
      <div className="orbit-tags">{tags.map(([label,href],index)=><Link key={label} href={href} className={`orbit-tag orbit-tag-${index+1}`}><span>0{index+1}</span>{label}<i>↗</i></Link>)}</div>
      <p className="orbit-prompt">Hover the field · follow the gaze · choose a capability</p>
    </div>
  </section>;
}
