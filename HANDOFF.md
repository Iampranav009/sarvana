# Overhaul handoff — work in progress

Audit, central config, homepage additions, route templates and initial SEO files implemented. Full QA and the remaining performance/schema/analytics work are not complete.

## Owner confirmations
- Confirm pathway, monthly care and NFC prices before enabling NEXT_PUBLIC_SHOW_PRICES. Prices intentionally null until approved.
- Supply approved testimonial wording and attribution; optional personName, role and avatar remain absent until supplied. Existing drafted quotes must not be treated as verified reviews.
- Confirm timelines, business hours, client result evidence and a founder photograph.
- Provide delivery credentials through local environment configuration, never chat or browser code. Server contact delivery migration is pending.

## Environment
NEXT_PUBLIC_SITE_URL=https://sarvana-nine.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=pranavshindeji5001@gmail.com
NEXT_PUBLIC_SHOW_PRICES=false

Server delivery uses EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY and optional EMAILJS_PRIVATE_KEY. Enable server/non-browser requests in EmailJS account settings if required. Keep recipient fixed in the provider template to pranavshindeji5001@gmail.com; use reply_to for the optional visitor email (falls back to studio email). Variables: name, phone, business, email, service, budget, description, consent, source, submitted_at. Configure locally then restart; configure Vercel only when deployment is authorized. No real email has been sent or receipt verified. No private values belong in NEXT_PUBLIC variables. Existing browser SDK is no longer imported by the inquiry form. Nothing deployed or pushed.

## Later setup
Custom domain, Google Business Profile, Search Console. Lighthouse scores must be measured; no target score has been achieved or claimed.
