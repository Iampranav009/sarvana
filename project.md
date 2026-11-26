# Sarvana Studio

## What this project is
A creative technology agency website for website development, social media, branding and related digital services. The NFC section is a visual, enquiry-led catalogue of NFC cards and formats. It is not a checkout or shopping cart.

The canonical brand spelling is **Sarvana**. The approved lowercase wordmark, standalone icon, favicons and social icons live in `public/Sarvana_Brand_Assets/`. Use the shared `Wordmark` component for logos; white artwork on dark surfaces and black artwork on light surfaces. Preserve aspect ratio. Existing internal filenames and CSS classes containing Servana are implementation identifiers, not the public brand.

## Read first
- `design.html`: visual guide to the actual site palette, typography, layout, actions and motion.
- `AGENTS.md`: project rules and installed Next.js version guidance.
- `src/app/globals.css`: owning source for the studio design tokens.
- `src/app/landing.css`: responsive homepage layout refinements.

## Stack and commands
Next.js App Router, React, TypeScript, Tailwind CSS, GSAP, Motion, Lucide icons and Three.js. Dependencies are in `package.json`; use the installed versions. Reusable UI components live in `src/components/ui`, with the `@/` alias pointing to `src`.

- `npm run dev`: local development.
- `npm run lint`: ESLint.
- `npx tsc --noEmit`: type checking.
- `npm run build`: production build, including prerendering.

Next.js cache components and partial prefetching are enabled. Read local Next.js docs before changing routing or rendering behaviour. Dynamic route params are promises. Avoid unstable render-time values such as unscoped `new Date()` in prerendered server components. Use Suspense around route-dependent content when required by the installed version.

## Main files
- `src/app/page.tsx` and `src/components/ServanaExperience.tsx`: homepage composition and navigation.
- `src/app/layout.tsx`: Geist fonts, shared metadata and mobile contact bar.
- `src/config/site.ts` and `src/lib/site.ts`: existing business configuration; inspect both before changing contact details.
- `src/app/contact/page.tsx`, `src/components/InquiryForm.tsx`, `src/app/api/inquiry/route.ts`: contact journey.
- `src/data/`: services, projects, social work and NFC content.
- `src/app/sitemap.ts`, `src/app/robots.ts`: indexing configuration.

## NFC catalogue
- `/nfc`: one preview image per category and a View more link to its dedicated page.
- `/nfc/[slug]`: category benefits, audience, full image library, practical information and FAQs.
- Categories: Google Review, Instagram, WhatsApp, Restaurant & Menu, Business Cards, NFC Keychains, Badges & Lanyards, Wi-Fi Access.
- `src/data/nfc.ts`: category text and image mapping.
- `src/components/NfcFrame.tsx`: header, footer and shared content.
- `src/components/NfcGallery.tsx`: image previews, accessible modal, selection and enquiry.
- `src/components/ui/carousel-circular-image-gallery.tsx`: supplied circular gallery adapted for local assets, installed GSAP, seamless/grid views, thumbnails and swipe gestures.
- `src/app/nfc/nfc.css`: NFC styles consuming existing global studio tokens.
- `public/nfc/`: 26 local WebP reference images. Source originals remain outside the repo in `C:/myfile/NFC-project`.

Image rules: no visible collection numbers, design numbers, price badges or Preview text. Use a small expand icon on clickable images. Show the complete library on the category page. Let a user choose a card in the enlarged viewer and enquire; do not add checkout. Preserve image proportions and do not crop important card details.

Reference photography includes third-party branding and is labelled as inspiration. Final artwork, availability, formats and quote are agreed on enquiry. Do not invent product stock, prices, compatibility guarantees, conversion statistics or review guarantees.

## Verification
Check desktop and narrow mobile widths, lack of horizontal page overflow, category links, both gallery layouts, popup opening/closing, left/right controls, keyboard navigation, swipe, focus restoration, reduced motion and selected-image enquiry URLs. Inspect browser console and actual images. Run lint, type checks and production build; report environment failures accurately. Builds have encountered memory pressure on this Windows host; a passing type check alone is not a passing build.

## Current working context
Existing uncommitted homepage and testimonial work may coexist in this checkout. Inspect Git status and preserve unrelated changes. Do not commit, deploy, rewrite branding or modify the contact pipeline merely to finish an NFC UI change.

## Additional NFC image sources
The images supplied in `C:/myfile/NFC-project/image` are organized as named copies beneath its `organized` subdirectory; originals stay untouched. See `organized/manifest.json` for classification and provenance. `scripts/organize-nfc-images.mjs` regenerates the organized source copies and the category folders in `public/nfc/`. `scripts/nfc-additional-images.json` owns classification; `src/data/nfc-additional-images.json` is generated. The catalogue now also includes Facebook. Keep keychains available in both their format category and their relevant platform category, and classify restaurant review displays as Google Review rather than restaurant menus.

## Minimal NFC subpages
Category-page heroes contain only the category name and one short benefit sentence. Do not reintroduce eyebrow labels, long hero context, fact rows or the removed More ways to connect section. Put your card to work is a three-column feature-card grid on desktop, stacking to one column at 760px and below. The gallery and enquiry flow remain available beneath the compact hero.

## Shared animated footer

The homepage and NFC pages use `src/components/StudioFooter.tsx` and `src/app/footer.css`. The layout follows the user’s final image references: navigation and contacts at the top, an oversized muted SERVANA wordmark, a dedicated moving crowd beneath it, then the copyright/divider row. All four regions are inside one footer. The characters must never overlap links, buttons, the large wordmark or copyright text, and must stop exactly above the bottom metadata divider.

`src/components/ui/footer-crowd.tsx` adapts only the supplied component’s crowd: large overlapping illustrated busts, varying depth blur, horizontal travel and subtle pointer parallax. It uses 48 desktop / 18 mobile characters and plays by default with no visible controls. Reduced motion displays a still scene; offscreen and hidden tabs suspend animation. Motion uses compositor transforms and cleans up frames, observers and listeners.

The 15 local WebP character images total 165,092 bytes in `public/footer/people`; `sources.json` records the supplied source URLs. Regenerate using `node scripts/prepare-footer-people.mjs`. Do not import the sample hero, navigation, composer, alternate branding or palette. Keep the site’s Geist font and ink/paper/cyan tokens.


## Shared layout and homepage revisions
`src/app/layout.tsx` owns exactly one `SiteHeader` and `StudioFooter` for every page. Do not add duplicate headers or footers in individual pages or Suspense fallbacks. `SiteHeader` uses the homepage floating pill design, consistent cross-page links, a mobile/tablet menu, Escape dismissal and keyboard focus restoration. `src/app/refinements.css` owns the shared responsive refinements and portfolio rhythm.
The homepage uses six primary service-domain cards. The website/domain/hosting grid now lives only on the website-development service page. The previous industry software grid, NFC promotional block and founder section were removed from the homepage by request. One FAQ section appears before the contact CTA. The dedicated NFC catalogue and industry pages remain available.
The creative portfolio uses a compact paper hero, a subtle horizon decoration, an ink interactive feature panel and a regular responsive work grid. Keep the demo/reference image labels until approved final imagery is supplied. Keep headings readable and avoid full-screen spacer sections.


## Service domain pages
`src/data/serviceDomains.ts` owns the seven service domains: website development, app/CRM development, AI solutions, creative direction, social media/ads, event systems, and local search/care. `src/components/ServiceDomainPage.tsx` renders the hero, overview, service types, customization, appropriate portfolio work, shared Ways to work together section and contact actions. `src/app/services/domain.css` owns this responsive layout. `/services/[slug]` retains the digital-products and NFC redirects.
Website service cards were moved off the homepage into `/services/website-development`; do not duplicate them on the landing page. The four homepage process stages use one desktop row, two tablet columns and a mobile stack. Navigation labels are Our work, Services, Creative and NFC cards; the primary CTA is Start a project.
Original AI-generated concept illustrations live in `public/services/` and are labelled as concepts. Real project screenshots were converted from the existing portfolio into `public/services/projects/*.webp`. `public/services/sources.json` records provenance. Never present generated imagery as completed client work or attach unrelated projects to a service as proof.

Verification: all seven service domains checked at 390px and 1440px with loaded hero images, no horizontal overflow, four customization topics and exactly one engagement section/header/footer. Website cards are absent from home; the four desktop process stages align in one row at 1163px. Service metadata, canonical URL, JSON-LD and CTA destinations were checked. Lint, TypeScript and the 47-page production build passed; temporary single-worker build configuration was restored.

Each of the seven service domains now has its own generated hero concept in the shared cream/graphite/cyan studio-photo style. Hero art uses uncropped 3:2 framing on desktop and mobile, without a browser mockup frame or rotation. Existing project screenshots remain in portfolio sections. Website, app/CRM, social, event and search/care hero assets were added to complete the earlier AI and creative-direction artwork. Provenance is recorded in public/services/sources.json.

## Navigation and NFC hero
The homepage navigation is transparent over the hero and becomes solid after 32px of scrolling. Other routes and the open mobile menu remain solid. The NFC frame reserves an ink header area to avoid a paper strip above dark heroes. Its collection hero uses original generated concept artwork (`public/nfc/nfc-hero-concept.webp`); category libraries retain actual reference images.
