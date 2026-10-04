/**
 * Thin wrapper around Workers Static Assets for the River Birch demo build.
 *
 *  1. Keep any preview deployment (*.pages.dev / *.workers.dev) out of search
 *     engines while the site is pre-launch, via an X-Robots-Tag: noindex HEADER
 *     so crawlers fetch the page, see "noindex", and drop any known preview URL.
 *  2. Never let the edge serve stale HTML (no-store on HTML responses).
 *
 * This Worker only serves the *.workers.dev preview host. The live domain is
 * served by the Pages project, where the www -> apex 301 lives in
 * functions/_middleware.js (apex is the canonical host).
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    const res = await env.ASSETS.fetch(request);

    const isHtml = (res.headers.get("content-type") || "").includes("text/html");
    const isPreview = host.endsWith(".workers.dev") || host.endsWith(".pages.dev");

    // Fast path: content-hashed assets on a real domain pass through untouched.
    if (!isHtml && !isPreview) return res;

    const out = new Response(res.body, res);
    if (isHtml) out.headers.set("Cache-Control", "no-store, must-revalidate");
    if (isPreview) out.headers.set("X-Robots-Tag", "noindex, nofollow");
    return out;
  },
};
