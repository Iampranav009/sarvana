<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Studio project guidance

Read `project.md` and `design.html` before changing the UI. The visual guide is derived from the existing site; `src/app/globals.css` owns its tokens. Use `--ink`, `--paper`, `--accent`, `--muted` and `--line`, with Geist Sans and Geist Mono from the shared layout. Do not introduce arbitrary per-category palettes or replace the site with an all-dark or all-light template. Follow the existing alternation of paper and ink sections, bold editorial typography, generous spacing and pill actions.

For NFC, keep one image per category on `/nfc`, with View more opening that category's complete library. Keep images minimal and clickable, with only an expand icon. Do not add visible collection/design numbering, shopping cart or checkout. Preserve seamless/grid views, modal keyboard and swipe controls, focus restoration, image selection and enquiry. Use local WebP assets and installed GSAP; do not inject animation scripts from a CDN. Respect reduced motion and preserve server-rendered content for SEO.

Before editing, inspect the working tree and preserve concurrent or user changes. Verify the changed UI at mobile and desktop sizes, then run lint, TypeScript and an appropriate production build. Report build or browser limits honestly. Update the project documentation when architecture or verified design decisions change. Do not claim publishing or deployment without verifying it.

Canonical public brand spelling: **Sarvana**. Use approved artwork in `public/Sarvana_Brand_Assets/` through `src/components/Wordmark.tsx`; preserve proportions and foreground colors. The footer has two link columns, one contact column and one large wordmark above the crowd. No duplicate small footer logo.
