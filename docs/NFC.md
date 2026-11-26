# NFC catalogue

Implemented in the existing Sarvana Next.js site.

- `/nfc`: one clickable reference image per category, category jump links, benefits, process and FAQs.
- `/nfc/[slug]`: dedicated category information, full reference library and image selection for WhatsApp enquiry.
- Gallery: native modal dialog, focus restoration, scroll lock, arrow keys, Escape, arrow buttons and swipe gestures.
- Styling follows the existing Geist typography, paper/ink palette, cyan accents and rounded actions. Scroll reveals respect reduced motion.
- 26 local references converted to WebP with Sharp, bounded at 1400px and without upscaling. Originals: 14,196,593 bytes; WebP: 2,226,832 bytes.
- Per-page metadata, canonical URLs, social preview images, collection and breadcrumb structured data, and sitemap coverage. Legacy NFC service URL redirects to `/nfc`.

Reference photography contains third-party brands. The catalogue labels these as references; final branding, materials and availability are agreed on enquiry. No checkout, price or stock claim is added.

Validation: ESLint, production build, browser gallery opening, arrow-key navigation, design selection and mobile/desktop width checks. Browser screenshots are in `output/playwright/`.

The conversion helper `scripts/prepare-nfc.mjs` reads the supplied pack at `C:/myfile/NFC-project/nfc-reference-pack`. It is optional for future asset regeneration; production serves the converted local files.

## Circular gallery revision
The category library now defaults to the supplied circular transition component and offers Seamless view / Grid view controls. The component is adapted at `src/components/ui/carousel-circular-image-gallery.tsx`; GSAP is imported locally rather than injected from a CDN. It uses the real NFC assets, unique SVG clip paths, thumbnails, touch navigation, and immediate transitions for reduced motion. Enlarged previews reuse the same component.

The canonical design reference is `design.html`, with project context in `project.md` and guidance in `AGENTS.md`. NFC consumes the existing global studio tokens and no longer assigns different colors to individual categories.

Verification for this revision: ESLint and TypeScript passed. Production build generated all 46 pages successfully using a temporary one-worker setting to avoid host memory pressure; `next.config.ts` was restored afterward. Browser checks passed seamless navigation, grid mode, modal arrows, selection/enquiry image identity, Escape and focus restoration, reduced motion, simulated touch swipe, actual global color tokens, and mobile width (375px document / 375px viewport). Screenshots: `output/playwright/nfc-circular-desktop.png`, `nfc-circular-mobile.png`, `nfc-theme-desktop.png`, `nfc-theme-mobile.png`.

## Additional source library
The 28 images from `C:/myfile/NFC-project/image` are visually classified and copied to `image/organized/<category>/<format>/` with readable filenames. Originals remain in place. `image/organized/manifest.json` records original filenames, source hashes, dimensions and WebP output paths.

`node scripts/organize-nfc-images.mjs` regenerates the organized copies and website WebP assets. Classification lives in `scripts/nfc-additional-images.json`; generated website records live in `src/data/nfc-additional-images.json`. `src/data/nfc.ts` merges them into their matching categories, preferring card-format images for the main-page preview. Keychains also appear under their matching social/review platform. A Facebook category is included for the supplied Facebook review card. The restaurant bill-holder photograph requests Google reviews and is grouped with review displays, not menu cards.

All 28 source images are included: 14 Google Review images, 8 keychains (5 Google Review and 3 Instagram), 3 WhatsApp images, 2 Instagram cards/displays, and 1 Facebook image. WebP copies total 1,393,360 bytes, compared with 2,016,662 source bytes. Source resolution is preserved without enlarging small images.

Additional-library verification: all 28 originals and all organized copies are present; all 28 additions are used by the site; all 54 unique gallery asset paths exist. Browser checks confirmed grids and popups for Google Review (21 images), Instagram (9), WhatsApp (7), Keychains (12) and Facebook (1), with no mobile page overflow. Production build generated 47 pages successfully with one temporary build worker; configuration was restored afterward.

Subpage simplification: compact category-name hero with one benefit sentence; removed eyebrow labels, hero facts and the More ways to connect section. Put your card to work now shows the three category use cases as equal desktop feature cards, stacking below 760px. The shared FAQ can omit its eyebrow on category pages while keeping the main catalogue presentation.

Footer validation: production build generated all 47 pages, and ESLint passed. Browser checks confirmed local character assets load, the scene moves while visible, pause freezes its position, reduced motion shows a still scene, the NFC page contains one shared footer, and the footer fits a 375px mobile document without overflow. The build used one temporary worker due to host memory pressure; configuration was restored.

Footer correction: removed the separate crowd strip and all visible pause/play controls. The animated scene now spans the footer as an absolute background, behind the links and wordmark, with no added scene height or lower margin. Characters use three lanes with 18 desktop / 9 mobile people, moving at 8–14% of footer width per second. Mobile browser checks confirmed movement by default, no footer buttons, matching scene/footer bounds and no horizontal overflow. Production build (47 pages), TypeScript and lint passed; the temporary one-worker build configuration was restored.

Final reference-based footer layout: top navigation/contact region → oversized muted SERVANA wordmark → dedicated animated crowd → copyright divider and metadata. All regions stay inside one footer; people no longer overlap controls or text. The crowd follows the supplied component’s large overlapping busts, depth blur and pointer drift, with 48 desktop / 18 mobile characters. Browser checks at 1440px and 390px confirmed region ordering, movement by default, no visible animation controls, and no page overflow. Screenshots: `output/playwright/footer-reference-layout-1440.png` and `footer-reference-layout-390.png`.


## Sarvana brand rollout — 26 November 2026
Approved vector wordmarks now appear in page navigation and the shared footer. The footer has two link columns, founder contact details and one large muted wordmark above the crowd. Mobile uses two link columns followed by the contact block. Brand spelling is Sarvana in public copy, SEO and structured data. Supplied favicon, Apple icon, manifest icons and a branded social preview replace generated letter icons. Brand assets live in public/Sarvana_Brand_Assets; Wordmark.tsx preserves vector proportions. Verified at 390px and 1440px with no horizontal overflow and one footer logo. Metadata, sitemap, robots, manifest and icon endpoints returned 200. Production build passed with a temporary single-worker setting, restored afterwards.
