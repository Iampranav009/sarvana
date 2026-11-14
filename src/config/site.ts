import { REAL_PROJECTS } from '@/data/projects';
export type Offering = { slug: string; title: string; outcome: string; features: string[] };
export const services: Offering[] = [
  { slug: 'website-development', title: 'Website development', outcome: 'Help customers find you and enquire.', features: ['Business websites', 'Landing pages', 'E-commerce stores'] },
  { slug: 'app-crm-development', title: 'App and CRM development', outcome: 'Keep customers and daily work organized.', features: ['Customer records', 'Billing and operations', 'Follow-up workflows'] },
  { slug: 'ai-solutions', title: 'AI solutions', outcome: 'Answer questions faster and create useful content.', features: ['Website and WhatsApp chatbots', 'WhatsApp automation', 'AI images, ad creatives and reels'] },
  { slug: 'creative-direction', title: 'Creative and motion design', outcome: 'Give your business a recognizable look.', features: ['Logos and brand identity', 'Posters and event visuals', 'Motion graphics'] },
  { slug: 'social-media-ads', title: 'Social media and ads', outcome: 'Show up where your customers spend time.', features: ['Instagram management', 'Ad creatives', 'Google campaigns'] },
  { slug: 'event-systems', title: 'Event systems and local SEO', outcome: 'Connect your business or event with its audience.', features: ['Ticketing journeys', 'Community portals', 'Google Business Profile setup'] },
  { slug: 'search-presence', title: 'Local SEO and maintenance', outcome: 'Keep your website useful and easy to find.', features: ['Local search', 'Domain and hosting', 'Care plans'] },
  { slug: 'nfc-cards', title: 'NFC smart cards', outcome: 'Make reviews and conversations a tap away.', features: ['Google review cards', 'Instagram tap cards', 'WhatsApp tap cards'] },
];
export const industries: Offering[] = [
  { slug: 'jewellery-crm', title: 'Jewellery shops', outcome: 'Keep billing and customer follow-ups organized.', features: ['Customer records', 'Billing', 'Follow-ups'] },
  { slug: 'gym-software', title: 'Gyms and fitness studios', outcome: 'Spend less time chasing renewals.', features: ['Memberships', 'Attendance', 'Renewal reminders'] },
  { slug: 'food-billing-software', title: 'Food businesses', outcome: 'Simplify billing and ordering.', features: ['Billing', 'Ordering', 'Menu management'] },
  { slug: 'ecommerce-crm', title: 'E-commerce plus CRM', outcome: 'Connect your store and customer relationships.', features: ['Online store', 'Customer records', 'Operations'] },
  { slug: 'coaching-institute-software', title: 'Coaching institutes', outcome: 'Keep admissions and fees in one place.', features: ['Student and parent CRM', 'Fees and WhatsApp reminders', 'AI admission chatbot'] },
];
export const whatsappLink = (context = 'a project') => `https://wa.me/919156332109?text=${encodeURIComponent(`Hello Pranav, I found Servana through your website. I would like to discuss ${context}.`)}`;
export const site = {
  name: 'Servana', founder: 'Pranav Shinde', tagline: 'We build websites, apps and AI-powered content that bring you customers.',
  description: 'Servana builds websites, apps, CRM software and AI content in Yavatmal. Get branding, social media and local SEO support for your growing business across India.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://sarvana-nine.vercel.app').replace(/\/$/, ''),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'pranavshindeji5001@gmail.com', phone: '+91 9156332109', whatsapp: whatsappLink(), booking: 'https://calendly.com/pranavshindeji5001/new-meeting',
  socials: { instagram: 'https://www.instagram.com/iampranav_009/', linkedin: 'https://www.linkedin.com/in/iampranav009/' },
  location: 'Yavatmal, Maharashtra, India', hours: 'Contact us to arrange a call.', services, industries,
  pricing: { showPrices: process.env.NEXT_PUBLIC_SHOW_PRICES === 'true', foundation: null as number|null, growth: null as number|null, partnership: null as number|null, care: null as number|null, nfc: null as number|null },
  timelines: 'We confirm your timeline after understanding the scope.',
  projects: REAL_PROJECTS.filter(p => ['rangtari','piles-clinic-yavatmal','savitri-reliable','khushiyah-seller'].includes(p.id)),
  testimonials: [] as { quote: string; organization: string; personName?: string; role?: string; avatar?: string }[],
  faqs: [
    ['How much does a project cost?', 'We provide a written quote based on your pages, content and features.'],
    ['How long will it take?', 'We confirm your timeline after reviewing the scope and available content.'],
    ['What do you need from me?', 'Your goals, business details, logo, service information and photos you own.'],
    ['Can you maintain my website?', 'Yes. We can scope a care plan for updates and support.'],
    ['Will I own the code?', 'Ownership and third-party licenses are agreed in the proposal.'],
    ['What are the payment terms?', 'Milestones and payment terms are agreed in writing before work starts.'],
    ['Do you provide support?', 'Launch support and ongoing care are scoped in your proposal.'],
    ['Do you work outside Yavatmal?', 'Yes. We work with selected businesses across India through calls and online collaboration.'],
  ],
};
