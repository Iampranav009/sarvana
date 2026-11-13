export interface ServicePageData {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  promise: string;
  deliverables: string[];
  process: { title: string; copy: string }[];
  projectIds: string[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  { slug:"digital-products", title:"Digital products", eyebrow:"Platforms and useful interfaces", summary:"We turn complex operational needs into clear web products that teams and audiences can use without friction.", promise:"Useful first. Distinctive always.", deliverables:["Product strategy","UX and interface systems","Responsive web applications","Internal tools and portals"], process:[{title:"Understand",copy:"Map the people, decisions and repeated tasks the product must support."},{title:"Structure",copy:"Turn complexity into an intuitive hierarchy, journey and interface system."},{title:"Build",copy:"Create a fast, resilient experience and refine it against real usage."}], projectIds:["bjp-yavatmal-crm","khushiyah-seller","hh-goa-frame"] },
  { slug:"event-systems", title:"Event systems", eyebrow:"Connected experiences before, during and after", summary:"We create the digital layer around events—from discovery and ticketing to schedules, community tools and shareable moments.", promise:"Make every touchpoint feel like one event.", deliverables:["Event websites","Ticketing journeys","Agenda and speaker systems","Interactive attendee tools"], process:[{title:"Frame",copy:"Define the full attendee journey and the moments that need digital support."},{title:"Connect",copy:"Bring information, registration and event utilities into one coherent system."},{title:"Activate",copy:"Launch an experience that remains useful throughout the event lifecycle."}], projectIds:["aws-scd-yavatmal","rangtari","hh-goa-frame"] },
  { slug:"creative-direction", title:"Creative direction", eyebrow:"Identity and social storytelling", summary:"We shape visual systems that remain recognizable across campaign graphics, social content and live experiences.", promise:"A visual language people remember.", deliverables:["Identity direction","Campaign art systems","Social templates","Motion-ready design language"], process:[{title:"Find the signal",copy:"Identify the cultural cue, emotion and visual tension that belongs to the project."},{title:"Build the world",copy:"Create a flexible design language across typography, image and motion."},{title:"Keep it alive",copy:"Extend the system across formats without losing its character."}], projectIds:["rangtari","aws-scd-yavatmal"] },
  { slug:"search-presence", title:"Search presence", eyebrow:"Clarity for local discovery", summary:"We build credible, structured websites that help local audiences find a service, understand it and take the next step.", promise:"Be clear where people are already looking.", deliverables:["Information architecture","Local-search foundations","Service content systems","Direct inquiry journeys"], process:[{title:"Listen",copy:"Understand how customers search, what they worry about and what builds trust."},{title:"Clarify",copy:"Structure services, location and contact information around genuine intent."},{title:"Improve",copy:"Refine the content and experience around discovery and direct action."}], projectIds:["piles-clinic-yavatmal","savitri-reliable"] },
];

export const getService = (slug: string) => SERVICE_PAGES.find((service) => service.slug === slug);
