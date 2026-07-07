# River Birch Tree Service — Site Handoff (LIVE)

Astro + Cloudflare Pages site for **River Birch Tree Service LLC** (Deep Gap, NC).
Built on the Impact 360 "Smart Site" stack.

## 🌐 Live status
- **Production:** https://riverbirchtreeservice.com  *(apex is canonical; `www` also serves)*
- **Valid SSL** (Google Trust Services), DNS on Cloudflare, domain registered in-account.
- **Cloudflare Pages project:** `river-birch` (secondary URL: `river-birch.pages.dev`).
- **Repo:** https://github.com/i360-hub/riverbirch (branch `main`).
- **Deploy:** currently direct upload — `npx wrangler pages deploy dist --project-name river-birch`.
  (Optional: connect the repo in the Pages dashboard for auto-deploy on push.)

## Build
- `npm install` → `npm run build` → static output in `dist/` (**36 pages**).
- Preview locally: `npm run dev` (or `npm run preview` after a build).
- `SITE` in `astro.config.mjs` = `https://riverbirchtreeservice.com` (drives canonicals + sitemap).

## Pages (36)
- Home; **6 service pages** (`/tree-removal`, `/storm-damage-tree-removal`,
  `/land-clearing`, `/tree-trimming-pruning`, `/stump-grinding`, `/view-clearing`);
  **20 town pages** (`/tree-service-{town}-nc`); **`/property-services`** (grading /
  retaining walls / land clearing hub); `/service-areas`, `/reviews`,
  `/about-river-birch-tree-service`, `/contact`; `/privacy`,
  `/sms-terms-and-conditions`, `/thank-you`, `404`.

## What's real / verified (live)
- **NAP:** owner Ezequiel Moreno, phone `(828) 964-6567`, email `riverbirchtreexpert@gmail.com`,
  Facebook + TikTok, Google Place ID / CID, 24/7 hours. WhatsApp was removed per request.
- **Service Area Business** — no street address published anywhere (site or schema).
- **Reviews:** ✅ the **9 real 5-star Google reviews** (full names, verbatim), topic-routed
  (Varnedore/Rankhorn → property/landscaping; Fugate/Ballinger → storm/removal). The review
  **count is intentionally not shown**; every rating shows **5.0★** and links to the live
  Google profile (`google.com/maps?cid=11842205041438600814`). No fabricated names anywhere.
- **Photos:** ✅ all real River Birch photos (GBP + Facebook), SEO-named in `src/assets/images/`.
  Real hero (roped-in arborist). Extra hardscape photos staged in `/gbp/` (gitignored).
- **Lead form:** ✅ River Birch's own GoHighLevel form (`2IoiG70LCF5TQAsKwfzk`,
  "Contact — River Birch") embedded sitewide — leads flow into their GHL sub-account CRM.
- **Schema:** `LocalBusiness` (SAB) + `FAQPage` + `Service`/`ItemList`/`BreadcrumbList`.
  No `aggregateRating`/`Review` JSON-LD (self-serving review markup is ignored by Google).
- Founding year de-emphasized (no "Since 2020" headlines; one factual mention in the About body).

## Remaining / optional to-dos
1. **Test a live lead submission** — submit the contact form on the live site and confirm
   it lands in the GHL sub-account (Contacts/Conversations). If not, check the form's
   allowed domains / notification workflow in GHL.
2. **`www` → apex 301 (optional polish)** — `www` currently serves rather than redirecting.
   Harmless (both carry the apex canonical). To add: Cloudflare zone → Rules → Redirect Rules
   → `www.riverbirchtreeservice.com` → 301 to `https://riverbirchtreeservice.com/${path}`.
3. **Remaining 4 GBP services** — 6 of 10 are built. Add the other 4 to `src/data/services.ts`
   + `src/data/servicePages.ts` (and `schema.services` in `site.ts`) for full entity parity.
4. **Google Maps embed** — no API key set (`.env` blank), so the ServiceArea section shows a
   styled "open in Google Maps" fallback link. Add a referrer-restricted `PUBLIC_GOOGLE_MAPS_KEY`
   (see `.env.example`) to enable the interactive map. The static SVG coverage map renders regardless.
5. **Analytics** — `src/components/layout/Analytics.astro` is intentionally empty. Add GA4 /
   Google Ads / Meta Pixel IDs behind the production-host guard when available.
6. **Home Before/After** — currently pairs two *different* properties (a hazard-tree job + a
   finished stone-wall property). Swap for a genuine same-job pair when the owner supplies one.
7. **Favicon `.ico`** — PNG icons generated from the logo; no legacy multi-res `.ico`. Optional.
8. **Service-area SVG map** — `public/river-birch-service-area-map.svg` is a generated branded
   schematic of Watauga County. Replace if a specific map is preferred.

## Not built on purpose
No pages for Banner Elk, Beech Mountain, Newland, West Jefferson, Fleetwood, or any VA town —
outside the GBP footprint. "And surrounding areas" appears in body copy only, per the brief.
