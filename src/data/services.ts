export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortSummary: string;
  scope: string[];
  deliverables: string[];
  highlightAccent: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    title: "Brand Strategy & Identity",
    shortSummary:
      "Future-proof visual and conceptual foundations built for high-growth disruptors and cultural brands.",
    scope: [
      "Brand Positioning & Narrative",
      "Dynamic Typographic Systems",
      "Comprehensive Design Systems",
      "Multi-Surface Identity Guidelines",
    ],
    deliverables: ["Identity Manual", "Vector Token Suite", "Type Guidelines", "Motion Foundations"],
    highlightAccent: "from-cyan-400 to-blue-500",
  },
  {
    id: "service-02",
    number: "02",
    title: "Websites & Digital Experiences",
    shortSummary:
      "Award-caliber editorial web presences designed with relentless precision, deep contrast, and bespoke typography.",
    scope: [
      "Flagship Digital Experiences",
      "Editorial Web Architecture",
      "Responsive Interaction Design",
      "Performance & SEO Optimization",
    ],
    deliverables: ["Full-Stack Next.js Builds", "Responsive Web Artifacts", "Custom CMS Integration"],
    highlightAccent: "from-violet-400 to-cyan-300",
  },
  {
    id: "service-03",
    number: "03",
    title: "Product & Interface Design",
    shortSummary:
      "Intuitive, high-density digital software and product architectures tailored for deep work and speed.",
    scope: [
      "Application UI/UX Architecture",
      "Complex Data & Telemetry Systems",
      "Design Systems & Component Libraries",
      "Rapid Prototyping & User Testing",
    ],
    deliverables: ["Figma Design Systems", "Production UI Kits", "Interactive Prototype Handoffs"],
    highlightAccent: "from-emerald-400 to-cyan-400",
  },
  {
    id: "service-04",
    number: "04",
    title: "Creative Development & 3D",
    shortSummary:
      "Bespoke shader art, WebGL spatial canvases, and seamless scroll choreography running at 60fps.",
    scope: [
      "Three.js & React Three Fiber",
      "Custom GLSL Shader Development",
      "GSAP Motion & Scroll Choreography",
      "Hardware-Accelerated Canvas Pipelines",
    ],
    deliverables: ["Interactive 3D Scenes", "Custom Canvas Shaders", "Performance Audited Code"],
    highlightAccent: "from-fuchsia-400 to-violet-500",
  },
  {
    id: "service-05",
    number: "05",
    title: "Campaigns & Social Systems",
    shortSummary:
      "High-velocity visual communication frameworks and launch assets engineered for cross-channel cultural resonance.",
    scope: [
      "Product Launch Systems",
      "Key Visuals & CGI Renderings",
      "Social Design Frameworks",
      "Event & Environmental Graphics",
    ],
    deliverables: ["Launch Asset Packs", "Generative Social Templates", "Key Visual Direction"],
    highlightAccent: "from-amber-300 to-rose-400",
  },
];
