// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain (registered at Cloudflare). Apex is canonical; www 301s to it.
const SITE = 'https://riverbirchtreeservice.com';

// Static (SSG) build for Cloudflare Pages. No adapter needed — all content is
// prebuilt HTML. Images run through astro:assets (sharp) with avif/webp output.
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  // Keep thank-you (form-redirect target) and privacy out of the sitemap —
  // matches the live site's 63-URL sitemap (both pages exist but aren't listed).
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you") && !page.includes("/privacy"),
    }),
  ],
  build: {
    // Emit `page.html` (not `page/index.html`) so Cloudflare Pages serves each
    // page at its no-trailing-slash URL (e.g. /mold-removal) — matching
    // `trailingSlash: 'never'`, our canonicals/sitemap, and the live site's URLs.
    // With 'directory', CF would 308-redirect /mold-removal -> /mold-removal/.
    format: 'file',
    // Inline all CSS into the HTML so there are no render-blocking stylesheet
    // requests on the critical path (this was the main LCP/FCP drag — 2 blocking
    // stylesheets delayed first paint to ~1.4s and LCP to ~2.2s).
    inlineStylesheets: 'always',
  },
  image: {
    // Global default output formats for <Image>/<Picture>.
    // avif first, webp fallback; original as final fallback in <Picture>.
    responsiveStyles: true,
  },
});
