# Phase 0 — before overhaul

Inspected 14 November 2026. Existing checkout: C:/myfile/Sarvana-agency. Many local modifications and untracked logos/contact files already exist; preserve them. Rangtari image has a user modification.

## Stack and architecture
- Next.js 16.4.6 App Router, React 19.3, TypeScript, Tailwind 4 plus global CSS. Cache Components and partial prefetching enabled.
- GSAP/ScrollTrigger, Motion, Three.js, React Three Fiber/Drei. Existing interactive orb and creative folders.
- Geist and Geist Mono. Base #050608, foreground #f4f6fa, cyan #00f2fe; existing secondary violet tokens. Preserve all.
- Homepage uses ServanaExperience, volumetric hero, LiveOrbSection, OrbitCapabilities, ServicePathways, ClientVoices and CreativeFolders.
- Existing routes: /contact, four service slugs, /work/websites, /work/creative, /work/social-media. Portfolio screenshots and supplied logos are local public assets.

## Findings against requested issues
- Demo labels were already removed from active homepage in earlier work; verify other active portfolio routes.
- Branding currently says Sarvana in visible copy, contradicting latest Servana requirement. Hero, title and description use different statements.
- Practice says four crafts; orbit has six unrelated labels. Website/app both target digital-products.
- Contact page and form already exist, with email/booking/social choices. Delivery is browser EmailJS and unconfigured; replace with validated server delivery as newly requested.
- Pathway buttons share the same inquiry message; prices are not configured.
- Testimonials are written as quotes with organization-level attribution but no verified individual names. Approval/source evidence unavailable: do not invent attribution or publish unverified quotes as authenticated reviews.
- Projects have narrative impact text but no verified numerical results; omit result metrics.
- Hover-oriented prompts exist; links and folder checkboxes provide partial native keyboard/touch operation. Motion needs reduced-motion/off-screen review.
- Metadata lacks local service focus and contains jargon keywords. No sitemap, schema or contact-oriented analytics found in initial route inventory.
- Contact fields were shortened in previous iteration. New brief changes the requested field set and server delivery architecture.

## Safe sequence
Centralize typed content/config; retain existing assets and routes; align homepage and templates; add server delivery with explicit unavailable behavior; implement metadata and accessibility; run automated and visual checks. Prices, timelines, hours, testimonial approval and real delivery credentials must remain owner-confirmed, not fabricated.
