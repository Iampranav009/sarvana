import { LiveOrb } from "@/components/ui/live-orb";

export function LiveOrbSection() {
  return <section className="orb-introduction" aria-labelledby="orb-introduction-title">
    <div className="orb-introduction-copy" data-reveal>
      <p>MEET THE SIGNAL</p>
      <h2 id="orb-introduction-title">Curious by design.<br/>Alive by default.</h2>
      <div><span>01 / RESPONSIVE</span><p>A living interface that notices movement, follows attention and makes Sarvana’s digital character feel present.</p></div>
    </div>
    <div className="orb-introduction-stage">
      <span className="orb-coordinate orb-coordinate-a">SARVANA · 20.3900° N</span>
      <LiveOrb className="orb-character" size={520} />
      <span className="orb-coordinate orb-coordinate-b">MOVE YOUR CURSOR</span>
      <div className="orb-orbit orb-orbit-one" aria-hidden="true"/><div className="orb-orbit orb-orbit-two" aria-hidden="true"/>
    </div>
  </section>;
}
