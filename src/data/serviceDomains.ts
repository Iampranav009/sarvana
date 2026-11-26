export type ServiceDomain = {
  slug: string;
  headline: string;
  overview: string;
  hero: { src: string; alt: string; caption: string; concept?: boolean };
  types: { title: string; description: string }[];
  customization: { title: string; description: string }[];
  projectIds: string[];
  workTitle?: string;
  note?: string;
};
export const SERVICE_DOMAINS: ServiceDomain[] = [
  {
    slug: 'website-development', headline: 'A website built around your business.',
    overview: 'Your website should explain what you do and make the next step easy. We plan the pages, design the experience and develop a responsive site around your customers, content and goals. From a focused launch page to a complete business website, the scope starts with what you need.',
    hero: { src: '/services/website-development-concept.webp', alt: 'Laptop and phone website mockups in a cream, graphite and cyan studio composition', caption: 'AI-generated concept · Responsive website development', concept: true },
    types: [
      { title: 'Business & service websites', description: 'Company profiles, service pages, team information and enquiry journeys for local and growing businesses.' },
      { title: 'E-commerce experiences', description: 'Product catalogues, storefronts and order journeys, with payments and operations scoped around your business.' },
      { title: 'Campaign landing pages', description: 'One clear destination for a launch, advertising campaign or a specific enquiry.' },
      { title: 'Event & community websites', description: 'Schedules, speaker profiles, registration information and ticketing connections.' },
      { title: 'Healthcare websites', description: 'Clear treatment information, practitioner profiles, location details and appointment enquiries.' },
      { title: 'Portals & web tools', description: 'Seller onboarding, customer access and useful interactive tools connected to your website.' },
    ],
    customization: [
      { title: 'Your brand, your layout', description: 'Page structure, typography, colours and imagery matched to your identity and audience.' },
      { title: 'Content you can manage', description: 'Choose the pages, publishing workflow and editing access your team needs.' },
      { title: 'Connected enquiries', description: 'Forms, WhatsApp, booking links, analytics and approved third-party integrations.' },
      { title: 'Launch & care', description: 'Domain connection, hosting setup, search foundations and an optional maintenance scope.' },
    ], projectIds: ['savitri-reliable', 'piles-clinic-yavatmal', 'rangtari', 'khushiyah-seller'], workTitle: 'Websites we’ve developed.',
  },
  {
    slug: 'app-crm-development', headline: 'Bring your daily work into one place.',
    overview: 'We design web applications and CRM tools around the way your team works. Start with the people, records and repeated tasks that need a clearer system, then build the modules and access rules that support them. Mobile-friendly workflows are part of the planning from the start.',
    hero: { src: '/services/app-crm-concept.webp', alt: 'Tablet dashboard, phone contact cards and workflow tiles in a cream and cyan studio composition', caption: 'AI-generated concept · Apps, CRM and connected workflows', concept: true },
    types: [
      { title: 'Customer & lead CRM', description: 'Contact records, enquiry stages, assignments and follow-up reminders.' },
      { title: 'Membership & attendance apps', description: 'Member profiles, attendance workflows and renewal tracking for agreed use cases.' },
      { title: 'Billing & operations tools', description: 'Organize billing information, daily tasks and reports around your existing processes.' },
      { title: 'Seller & customer portals', description: 'Structured onboarding, document collection, account access and status updates.' },
      { title: 'Booking & service apps', description: 'Service requests, appointment workflows and team coordination.' },
      { title: 'Internal dashboards', description: 'Give each role a useful view of the records and actions they need.' },
    ],
    customization: [
      { title: 'Modules & workflows', description: 'Select the records, stages, forms and automations that fit your operations.' },
      { title: 'Roles & permissions', description: 'Agree who can see, create, update and approve information.' },
      { title: 'Integrations & migration', description: 'Scope data imports and connections to your existing tools after reviewing access.' },
      { title: 'Reports & ongoing support', description: 'Choose useful views, exports, handover and an optional support plan.' },
    ], projectIds: ['bjp-yavatmal-crm', 'khushiyah-seller', 'hh-goa-frame'], workTitle: 'Applications from our work.', note: 'Examples shown are web-based applications. Native mobile apps, payment providers and third-party integrations are assessed separately in your proposal.',
  },
  {
    slug: 'ai-solutions', headline: 'Useful AI, shaped around your work.',
    overview: 'We help you identify where AI can make a practical difference: answering repeated questions, preparing content or connecting a routine workflow. We define the inputs, review steps and limits before choosing the tools and building the experience.',
    hero: { src: '/services/ai-workflow-concept.webp', alt: 'Original AI-generated studio concept with conversation and workflow symbols', caption: 'AI-generated concept · AI assistance and connected workflows', concept: true },
    types: [
      { title: 'Website assistants', description: 'Answer common service questions using the business information you approve.' },
      { title: 'WhatsApp workflows', description: 'Scope enquiry routing, responses and notifications with an approved messaging provider.' },
      { title: 'Content assistants', description: 'Support drafting, summarising and adapting approved source material for your team to review.' },
      { title: 'AI campaign imagery', description: 'Explore original concept images, product contexts and visual directions for your campaigns.' },
      { title: 'Reels & creative production', description: 'Combine scripting, generated media and editing into a defined content workflow.' },
      { title: 'Connected automations', description: 'Connect repeatable tasks across tools where access and integrations allow.' },
    ],
    customization: [
      { title: 'Business knowledge', description: 'Define approved sources, response style, languages and escalation to your team.' },
      { title: 'Human review', description: 'Choose which outputs need approval and what the system should avoid or hand over.' },
      { title: 'Channels & integrations', description: 'Agree where the experience lives and which systems it can access.' },
      { title: 'Usage & ownership', description: 'Confirm provider accounts, usage costs, content rights and ongoing support in writing.' },
    ], projectIds: [], note: 'The hero is original AI-generated concept artwork. AI outputs need review; provider fees, data access and platform requirements depend on the agreed solution.',
  },
  {
    slug: 'creative-direction', headline: 'One identity. Every touchpoint.',
    overview: 'We shape a visual direction that connects your logo, typography, images and motion. The goal is a recognizable system your business can use across campaigns, social channels, events and digital products.',
    hero: { src: '/services/creative-studio-concept.webp', alt: 'Original AI-generated concept of campaign prints and a tablet in Sarvana’s ink, paper and cyan palette', caption: 'AI-generated concept · A connected visual identity', concept: true },
    types: [
      { title: 'Brand identity', description: 'Logo direction, colour, typography and practical visual guidelines.' },
      { title: 'Campaign art direction', description: 'A coherent look for announcements, launches, posters and digital placements.' },
      { title: 'Event graphics', description: 'Speaker visuals, schedules, stage assets and supporting communication.' },
      { title: 'Motion design', description: 'Animated typography, transitions and short-form visual storytelling.' },
      { title: 'Social design systems', description: 'Reusable templates and image treatments for recurring content.' },
      { title: 'Digital brand assets', description: 'Website graphics, presentation assets and format-ready exports.' },
    ],
    customization: [
      { title: 'Direction & references', description: 'Agree the tone, audience, inspiration and visual boundaries before production.' },
      { title: 'Formats & deliverables', description: 'Choose the channels, sizes, export formats and editable files required.' },
      { title: 'Motion & adaptation', description: 'Extend the approved direction into movement and new campaign formats.' },
      { title: 'Review & handover', description: 'Define revision rounds, final assets and usage rights in the proposal.' },
    ], projectIds: ['rangtari', 'aws-scd-yavatmal'], workTitle: 'Related projects & visual direction.', note: 'Project previews show live website contexts. The hero is concept artwork; it is not a completed client campaign.',
  },
  {
    slug: 'social-media-ads', headline: 'A clearer presence, week after week.',
    overview: 'We connect content planning, visual design and publishing around your business. Whether you need a campaign or ongoing support, we agree what you want to communicate, which channels matter and how the work will be reviewed.',
    hero: { src: '/services/social-media-concept.webp', alt: 'Phone content feed with campaign print cards and social symbols in a cream and cyan studio composition', caption: 'AI-generated concept · Social media and campaign content', concept: true },
    types: [
      { title: 'Instagram management', description: 'Content themes, a publishing calendar and an agreed approval process.' },
      { title: 'Posts & carousels', description: 'Clear messages and consistent visuals adapted to each format.' },
      { title: 'Reels & short videos', description: 'Concepts, scripts and editing planned around available footage and production scope.' },
      { title: 'Campaign launches', description: 'Coordinate announcements and creative assets around an event, offer or launch.' },
      { title: 'Advertising creative', description: 'Design image and video variants for the placements in your campaign.' },
      { title: 'Google & Meta campaigns', description: 'Scope account setup, campaign management and reporting with your team.' },
    ],
    customization: [
      { title: 'Channels & cadence', description: 'Agree platforms, deliverable counts and publishing frequency.' },
      { title: 'Voice & visual style', description: 'Set a consistent tone, language and design direction for your brand.' },
      { title: 'Production & approvals', description: 'Define source material, shoot needs and who signs off each asset.' },
      { title: 'Budget & reporting', description: 'Separate ad spend from service fees and agree the reporting schedule.' },
    ], projectIds: [], note: 'The campaign hero is concept artwork. Advertising spend, platform access, production and community management are scoped separately; results are not guaranteed.',
  },
  {
    slug: 'event-systems', headline: 'Connect every part of your event.',
    overview: 'We build the digital journey around an event and help local audiences discover your business. From a clear event website to registration information and useful attendee tools, every part starts with a practical audience need.',
    hero: { src: '/services/event-systems-concept.webp', alt: 'Event tablet, access badge, tickets and cyan gateway in a cream studio composition', caption: 'AI-generated concept · Connected event experiences', concept: true },
    types: [
      { title: 'Event websites', description: 'Bring your story, venue, dates and ticket information into one destination.' },
      { title: 'Registration & ticketing journeys', description: 'Connect registrations and approved ticketing providers to the attendee journey.' },
      { title: 'Schedules & speaker systems', description: 'Present programmes, speaker profiles and event updates clearly.' },
      { title: 'Attendee tools', description: 'Digital badges, frame generators and other useful participation tools.' },
      { title: 'Community portals', description: 'A central home for community information and ongoing announcements.' },
      { title: 'Local search presence', description: 'Business profile setup, accurate contact information and location content.' },
    ],
    customization: [
      { title: 'Event identity', description: 'Match the website and attendee assets to your event’s visual direction.' },
      { title: 'Registration flow', description: 'Agree forms, ticket links, confirmation steps and provider integrations.' },
      { title: 'Content & access', description: 'Plan who updates schedules, speakers and announcements.' },
      { title: 'Launch support', description: 'Scope deadlines, event-day availability and handover before the launch.' },
    ], projectIds: ['rangtari', 'aws-scd-yavatmal', 'hh-goa-frame'], workTitle: 'Events we’ve worked on.',
  },
  {
    slug: 'search-presence', headline: 'Be easier to find. Stay ready to use.',
    overview: 'We help your website stay clear, current and discoverable. Start with accurate business details and useful service content, then scope the technical setup, domain support and ongoing care your site needs.',
    hero: { src: '/services/search-care-concept.webp', alt: 'Search interface, location pin and website care symbols in a cream and cyan studio composition', caption: 'AI-generated concept · Search presence and website care', concept: true },
    types: [
      { title: 'Local SEO foundations', description: 'Service structure, location information, metadata and useful page content.' },
      { title: 'Google Business Profile', description: 'Profile setup and information updates with the required business access.' },
      { title: 'Domain & hosting setup', description: 'Help connect domains, hosting and SSL to your website.' },
      { title: 'Website maintenance', description: 'Agree updates, content changes and routine technical care.' },
      { title: 'Performance reviews', description: 'Review loading, mobile usability and practical opportunities to improve.' },
      { title: 'Search & analytics setup', description: 'Connect supported measurement tools and define useful reporting.' },
    ],
    customization: [
      { title: 'Locations & services', description: 'Prioritize the pages and business information your audience needs.' },
      { title: 'Care scope', description: 'Agree included updates, response expectations and review frequency.' },
      { title: 'Access & accounts', description: 'Confirm domain, hosting and business profile ownership before making changes.' },
      { title: 'Reporting', description: 'Choose what to measure and when to review it together.' },
    ], projectIds: ['piles-clinic-yavatmal', 'savitri-reliable'], workTitle: 'Clearer local business websites.', note: 'Search rankings and review outcomes cannot be guaranteed. Domain, hosting and other provider charges are confirmed separately.',
  },
];
export const getServiceDomain = (slug: string) => SERVICE_DOMAINS.find(domain => domain.slug === slug);
