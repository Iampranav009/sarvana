export interface ProjectStory {
  problem: string;
  idea: string;
  build: string;
  impact: string;
}

export interface RealProject {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  role: string;
  liveUrl: string;
  image: string;
  tagline: string;
  story: ProjectStory;
  tags: string[];
  flagship: boolean;
  visualTheme: {
    accentGradient: string;
    glowColor: string;
    borderHover: string;
  };
}

export const REAL_PROJECTS: RealProject[] = [
  {
    id: "aws-scd-yavatmal",
    number: "01",
    title: "AWS Student Community Day Yavatmal",
    category: "Community Website & Ticketing",
    client: "AWS Student Community Day Yavatmal",
    role: "Community Organizer & Web Architecture",
    liveUrl: "https://scd.awssbgytl.in/",
    image: "/projects/aws-scd-yavatmal.png",
    tagline: "Conference website featuring ticketing, speaker lineup, schedule, and an interactive attendee badge creator.",
    story: {
      problem:
        "Organizers needed a single destination to publish conference schedules, highlight speakers, and facilitate attendee registrations for the student cloud event in Yavatmal.",
      idea:
        "Build a dedicated community portal that combines event information and ticketing with an interactive badge creator for attendees.",
      build:
        "Developed a web portal featuring multi-track schedule views, speaker profiles, ticketing links, and a client-side canvas badge generator.",
      impact:
        "Created a central digital presence for the event, enabled ticket registrations, and provided attendees with a personalized badge creation tool.",
    },
    tags: ["Community Event", "Ticketing", "Speaker Agenda", "Badge Creator"],
    flagship: true,
    visualTheme: {
      accentGradient: "from-amber-500/20 via-cyan-500/15 to-transparent",
      glowColor: "rgba(245, 158, 11, 0.25)",
      borderHover: "hover:border-amber-400/50",
    },
  },
  {
    id: "rangtari",
    number: "02",
    title: "Rangtari Navratri",
    category: "Event Digital Presence & Ticketing",
    client: "Nexus Events",
    role: "Event Digital Presence, Meetio Ticketing & Technology Enablement",
    liveUrl: "https://rangtari.nexuseventplaner.in/",
    image: "/projects/rangtari.png",
    tagline: "Event website and digital hub connecting festival information with Meetio ticketing.",
    story: {
      problem:
        "The festival required an official web presence to share event dates, schedule updates, venue guidelines, and direct pass booking options.",
      idea:
        "Develop a focused event site providing essential festival information alongside direct Meetio ticket purchasing.",
      build:
        "Built a responsive web page featuring event details, artist lineup announcements, guidelines, and integrated checkout links to Meetio ticketing.",
      impact:
        "Established the official digital presence for the festival and enabled direct online ticket access for attendees.",
    },
    tags: ["Event Presence", "Meetio Ticketing", "Operations", "Schedule"],
    flagship: true,
    visualTheme: {
      accentGradient: "from-rose-500/20 via-orange-500/15 to-transparent",
      glowColor: "rgba(244, 63, 94, 0.25)",
      borderHover: "hover:border-rose-400/50",
    },
  },
  {
    id: "bjp-yavatmal-crm",
    number: "03",
    title: "BJP Yavatmal CRM",
    category: "Internal Organization CRM",
    client: "BJP Yavatmal",
    role: "Web Application & CRM Development",
    liveUrl: "https://bjpyavatmal.vercel.app/",
    image: "/projects/bjp-yavatmal-crm.png",
    tagline: "Organizational CRM for coordinating events, meetups, karyakartas, and office bearers.",
    story: {
      problem:
        "Local leadership needed an organized internal tool to maintain contact lists, track office bearers, and coordinate meetings and public programs.",
      idea:
        "Create a simple, structured web CRM to centralize directory records and upcoming events in one accessible interface.",
      build:
        "Developed an internal web tool with categorized directories for karyakartas and office bearers, search filters, and an event calendar.",
      impact:
        "Organized member and event information into a single structured system for local coordinators.",
    },
    tags: ["Internal CRM", "Member Directory", "Event Scheduling", "Coordination"],
    flagship: true,
    visualTheme: {
      accentGradient: "from-orange-500/20 via-emerald-500/15 to-transparent",
      glowColor: "rgba(249, 115, 22, 0.25)",
      borderHover: "hover:border-orange-400/50",
    },
  },
  {
    id: "piles-clinic-yavatmal",
    number: "04",
    title: "Piles Clinic Yavatmal",
    category: "Local SEO & Clinic Website",
    client: "Piles Clinic Yavatmal",
    role: "Web Design & Local SEO",
    liveUrl: "https://pilesclinicyavatmal.com/",
    image: "/projects/piles-clinic-yavatmal.png",
    tagline: "Healthcare website focused on patient discovery, clinical services information, and direct inquiry routing.",
    story: {
      problem:
        "The clinic needed a clear online presence so local patients searching for specialized medical consultations in Yavatmal could easily find contact details and treatment information.",
      idea:
        "Develop an accessible healthcare landing page tailored for local search discovery with direct appointment contact options.",
      build:
        "Structured clinical service overviews, location details, local search optimization, and direct phone and messaging links.",
      impact:
        "Supported local patient discovery in Yavatmal and provided a clear direct contact pathway for consultations.",
    },
    tags: ["Local SEO", "Healthcare", "Patient Discovery", "Contact Routing"],
    flagship: true,
    visualTheme: {
      accentGradient: "from-cyan-500/20 via-blue-500/15 to-transparent",
      glowColor: "rgba(0, 242, 254, 0.25)",
      borderHover: "hover:border-cyan-400/50",
    },
  },
  {
    id: "khushiyah-seller",
    number: "05",
    title: "Khushiyah Seller Portal",
    category: "Seller Onboarding Portal",
    client: "Khushiyah",
    role: "Seller Onboarding & Interface Design",
    liveUrl: "https://seller.khushiyah.in/",
    image: "/projects/khushiyah-seller.png",
    tagline: "Onboarding and informational portal for sellers joining a gifting marketplace.",
    story: {
      problem:
        "The gifting marketplace needed a dedicated interface to guide prospective merchants through the onboarding steps and platform requirements.",
      idea:
        "Design an informative onboarding page that outlines the process, seller benefits, and registration details.",
      build:
        "Built structured onboarding sections covering platform features, vendor guidelines, registration steps, and inquiry forms.",
      impact:
        "Provided a dedicated onboarding experience and clear documentation for new merchants joining the marketplace.",
    },
    tags: ["Seller Onboarding", "Marketplace", "Vendor Guidance", "Web Form"],
    flagship: false,
    visualTheme: {
      accentGradient: "from-pink-500/20 via-violet-500/15 to-transparent",
      glowColor: "rgba(236, 72, 153, 0.25)",
      borderHover: "hover:border-pink-400/50",
    },
  },
  {
    id: "savitri-reliable",
    number: "06",
    title: "Savitri Reliable",
    category: "Business Web Presence",
    client: "Savitri Reliable",
    role: "Web Design & Presence Architecture",
    liveUrl: "https://savitrireliable.com/",
    image: "/projects/savitri-reliable.png",
    tagline: "A clear manpower-services presence connecting organizations with trained, deployment-ready teams across India.",
    story: {
      problem:
        "A Bihar-based manpower organization needed a credible digital presence to explain its scale, staffing models, and multi-sector capabilities.",
      idea:
        "Create a direct, service-led experience that makes workforce availability, industry coverage, and enquiry routes immediately clear.",
      build:
        "Built a responsive website covering temporary, permanent, and contract staffing with sector-specific services and direct enquiry channels.",
      impact:
        "Established a professional pan-India manpower presence that communicates trust, deployment readiness, and operational reach.",
    },
    tags: ["Business Web", "Manpower Services", "Staffing Models", "Lead Generation"],
    flagship: false,
    visualTheme: {
      accentGradient: "from-emerald-500/20 via-teal-500/15 to-transparent",
      glowColor: "rgba(16, 185, 129, 0.25)",
      borderHover: "hover:border-emerald-400/50",
    },
  },
  {
    id: "hh-goa-frame",
    number: "07",
    title: "HH Goa Frame Generator",
    category: "Event Asset & Frame Tool",
    client: "HH Goa",
    role: "Interactive Web Tool Development",
    liveUrl: "https://frame-hhgoa.vercel.app/",
    image: "/projects/hh-goa-frame.png",
    tagline: "In-browser photo framing tool generating branded overlays for event attendees.",
    story: {
      problem:
        "Event organizers wanted a lightweight web utility that attendees could use on their phones to apply event-branded overlays to their photos.",
      idea:
        "Build an in-browser canvas tool that lets users upload a photo, adjust framing, and download a branded image directly.",
      build:
        "Developed an HTML5 canvas tool with photo upload, resize, frame overlay positioning, and direct image download.",
      impact:
        "Offered a fast in-browser frame generator for event attendees without requiring third-party software.",
    },
    tags: ["Canvas Tool", "Frame Generator", "Client-Side", "Event Utility"],
    flagship: false,
    visualTheme: {
      accentGradient: "from-violet-500/20 via-cyan-500/15 to-transparent",
      glowColor: "rgba(139, 92, 246, 0.25)",
      borderHover: "hover:border-violet-400/50",
    },
  },
];
