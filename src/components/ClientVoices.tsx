"use client";

import { Pause, Play, Quote } from "lucide-react";
import { useState } from "react";

const voices = [
  { quote: "Sarvana brought technology into Rangtari in a way Yavatmal had not seen before. The digital presence and ticketing support gave our first grand Garba event a stronger identity.", name: "Nexus Events", role: "Founder & co-founder", project: "Rangtari Grand Garba" },
  { quote: "We saw the quality Sarvana brought to event work. Their understanding of youth culture, visual direction and digital promotion made them the right partner for FrequencyX.", name: "FrequencyX", role: "Organizing team", project: "New Year experience · 31 Dec 2026" },
  { quote: "Sarvana organized our website around patient confidence, treatment information and direct enquiries, while creating a stronger search presence across Yavatmal.", name: "Piles Fistula Clinic", role: "Clinic team", project: "Healthcare website & local search" },
  { quote: "Sarvana gave our services a clearer, more credible digital presence. Clients can now understand our staffing models, scale and pan-India capabilities more easily.", name: "Savitri Reliable", role: "Leadership team", project: "Business website & service positioning" },
];

function VoiceCard({ voice, duplicate = false }: { voice: (typeof voices)[number]; duplicate?: boolean }) {
  return <article className="client-voice-card" aria-hidden={duplicate || undefined}><div className="client-voice-card-top"><Quote aria-hidden="true" /><span>{voice.project}</span></div><blockquote>“{voice.quote}”</blockquote><footer><strong>{voice.name}</strong><span>{voice.role}</span></footer></article>;
}

export function ClientVoices() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="client-voices" aria-labelledby="client-voices-title">
      <div className="client-voices-heading" data-reveal>
        <p>Client voices</p>
        <h2 id="client-voices-title">Words from<br />our clients.</h2>
        <div>
          <p>Short reflections from organizations shaped with Sarvana.</p>
          <button className="client-voices-toggle" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play testimonials" : "Pause testimonials"}>
            {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}{paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
      <div className="client-voices-window" data-reveal aria-label="Auto-scrolling client testimonials">
        <div className="client-voices-track" data-paused={paused || undefined}>
          <div className="client-voices-set">{voices.map((voice) => <VoiceCard key={voice.name} voice={voice} />)}</div>
          <div className="client-voices-set" aria-hidden="true">{voices.map((voice) => <VoiceCard key={`duplicate-${voice.name}`} voice={voice} duplicate />)}</div>
        </div>
      </div>
      <p className="client-voices-hint">Auto-scrolling · Pause to read</p>
    </section>
  );
}
