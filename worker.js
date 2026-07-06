/**
 * Thin wrapper around Workers Static Assets for the River Birch demo build.
 *
 *  1. Keep any preview deployment (*.pages.dev / *.workers.dev) out of search
 *     engines while the site is pre-launch, via an X-Robots-Tag: noindex HEADER
 *     so crawlers fetch the page, see "noindex", and drop any known preview URL.
 *  2. Never let the edge serve stale HTML (no-store on HTML responses).
 *
 * GO-LIVE TODO: once the client's real domain is set, add the canonical
 * apex -> www (and http -> https) 301s here, keyed off the production hostname —
 * see the CPR reference build for the pattern. Until then this stays
 * domain-agnostic so it works unchanged on the *.pages.dev preview.
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
