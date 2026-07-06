# River Birch Tree Service — Demo Build Handoff

Astro + Cloudflare Pages site for **River Birch Tree Service LLC** (Deep Gap, NC),
built to match the Plyler's Tree Service reference and re-skinned per the brand brief.
Cloned from the Impact 360 "Smart Site" stack (same architecture as the Carolina
Pro Restoration build).

- **Build:** `npm install` then `npm run build` → static output in `dist/` (35 pages).
- **Preview:** `npm run dev` (or `npm run preview` after a build).
- **Deploy:** Cloudflare Pages — build command `npm run build`, output dir `dist`,
  Node 20. See `DEPLOY.md`. `worker.js` keeps the `*.pages.dev` preview `noindex`.

## Pages (35)
- Home; 6 service pages (`/tree-removal`, `/storm-damage-tree-removal`,
  `/land-clearing`, `/tree-trimming-pruning`, `/stump-grinding`, `/view-clearing`);
  20 town pages (`/tree-service-{town}-nc`); `/service-areas`, `/reviews`,
  `/about-river-birch-tree-service`, `/contact`; `/privacy`,
  `/sms-terms-and-conditions`, `/thank-you`, `404`.

## What's real / verified
- NAP, geo, owner (Ezequiel Moreno), phone/WhatsApp `828-964-6567`, email,
  Facebook + TikTok, Google Place ID / CID, hours (24/7). All from the brief.
- **Service Area Business** — no street address is published anywhere (site or schema).
- **Schema:** `LocalBusiness` (SAB) + `FAQPage` + `Service`/`ItemList`/`BreadcrumbList`.
  Per the brief, **no `aggregateRating` and no `Review` JSON-LD** — so the review
  **count never leaks** into the search snippet. The 5.0★ rating is shown visually
  and the site links out to the live Google profile. `www` canonical, `trailingSlash: never`.

## ⚠️ PLACEHOLDERS — swap before go-live
1. **Google review text** — the review cards use clearly-marked placeholder copy
   (`src/data/reviews.ts`, every entry `placeholder: true`, keyword-matched with
   `First L.` names). Paste the real Google reviews in; routing logic + slots are ready.
2. **Remaining 4 GBP services** — 6 of the 10 GBP services are built. Add the other
   4 to `src/data/services.ts` + `src/data/servicePages.ts` (and `schema.services`
   in `site.ts`) for full entity parity.
3. **Real photos** — ✅ DONE. All placeholders replaced with real River Birch
   photos pulled from GBP + Facebook (SEO-named in `src/assets/images/`): home
   action/gallery/before-after, all 6 service hero+action shots, town-page hero
   rotation, and the About crew shot. Extra hardscape/grading/retaining-wall
   photos are staged in `/gbp/` for the future Property Services page.
   ⚠️ ONE slot to improve: the home **Before/After** currently pairs two
   *different* properties (a hazard-tree job + a finished stone-wall property).
   Swap for a genuine same-job pair when the owner supplies one — he posts job
   progressions on Facebook, so real before/afters exist.
4. **Hero image** — ✅ DONE. The real `river-birch-hero.webp` (the roped-in
   arborist with a chainsaw, 1920×1072) is wired into the home hero
   (`src/assets/images/deep-gap-nc-arborist-chainsaw-tree-removal-hero.webp`,
   served webp/avif with `fetchpriority=high`) and used for `og-default.jpg`.
   A separate mobile crop (`-mobile.webp`) wasn't shipped; the responsive
   pipeline already serves a downscaled version to phones, so it's optional.
5. **GoHighLevel form** — reuses the **Plyler's** demo form
   (`4GbeOTv0UeNs4bE2JDAe`, in `src/data/site.ts`). Demo leads route to the Plyler's
   sub-account. Swap in River Birch's own GHL form ID before go-live, and add the
   production domain to the form's allowed referrers in GHL.
6. **Domain** — `SITE` in `astro.config.mjs`, `robots.txt` sitemap URL, and the
   `.env.example`/`DEPLOY.md` references use `river-birch.pages.dev` as a placeholder.
   Set the real domain and add the canonical apex→www redirect in `worker.js`.
7. **Google Maps embed** — no API key is set (`.env` blank), so the ServiceArea
   section shows a styled "open in Google Maps" fallback link instead of the live
   embed. Add a referrer-restricted `PUBLIC_GOOGLE_MAPS_KEY` (see `.env.example`)
   to enable the interactive map. The static SVG coverage map renders regardless.
8. **Analytics** — `src/components/layout/Analytics.astro` is intentionally empty.
   Add the client's GA4 / Google Ads / Meta Pixel IDs behind the production-host guard.
9. **Service-area SVG map** — `public/river-birch-service-area-map.svg` was generated
   for this build (a branded schematic of Watauga County). Replace if a specific map is preferred.
10. **Favicon** — PNG icons were generated from the logo; no multi-res `.ico` is
    included. Generate one if you want the legacy `/favicon.ico`.

## Not built on purpose
No pages for Banner Elk, Beech Mountain, Newland, West Jefferson, Fleetwood, or any
VA town — those are outside the GBP footprint. "And surrounding areas" appears in
body copy only, per the brief.
