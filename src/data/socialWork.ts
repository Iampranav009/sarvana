export interface SocialWorkItem {
  id: string;
  handle: string;
  title: string;
  category: string;
  url: string;
  role: string;
  scope: string[];
  description: string;
  visualTag: string;
  accentGradient: string;
  glowColor: string;
}

export const SOCIAL_WORK_ITEMS: SocialWorkItem[] = [
  {
    id: "nexus-events",
    handle: "@nexusevents.in_",
    title: "Nexus Events",
    category: "Festival & Event Production",
    url: "https://www.instagram.com/nexusevents.in_/",
    role: "Visual Identity & Event Graphics",
    scope: ["Event Branding", "Stage Visuals", "Print Collateral", "Digital Announcements"],
    description:
      "Creative direction and design for cultural events and celebrations, including the Rangtari Navratri experience. Developing stage visual assets and promotional graphics.",
    visualTag: "FESTIVAL CREATIVE // YAVATMAL",
    accentGradient: "from-rose-500/20 via-amber-500/15 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  {
    id: "frequencyx",
    handle: "@frequencyx_mh29",
    title: "FrequencyX",
    category: "Electronic Music & Nightlife",
    url: "https://www.instagram.com/frequencyx_mh29/",
    role: "Brand Identity & Motion Typography",
    scope: ["Visual Systems", "Motion Posters", "Lineup Graphics", "Social Collateral"],
    description:
      "Visual design and typography for electronic music events in Yavatmal (MH29), focusing on event poster design and motion flyers.",
    visualTag: "TYPOGRAPHY & VISUALS // MH29",
    accentGradient: "from-violet-600/25 via-cyan-500/15 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    id: "aws-scd-ytl",
    handle: "@aws_scd_ytl",
    title: "AWS SCD Yavatmal",
    category: "Developer Community",
    url: "https://www.instagram.com/aws_scd_ytl/",
    role: "Community Leadership & Visual Materials",
    scope: ["Speaker Announcements", "Schedule Graphics", "Attendee Badges", "Event Documentation"],
    description:
      "Visual and community storytelling for AWS Student Community Day Yavatmal, including speaker announcements, schedule updates, and attendee badge assets.",
    visualTag: "COMMUNITY ADVOCACY // AWS CLOUD",
    accentGradient: "from-amber-500/20 via-sky-500/15 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
];
