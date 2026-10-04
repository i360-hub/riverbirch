/**
 * Cloudflare Pages middleware: 301 the `www` host to the canonical apex.
 *
 * The apex (https://riverbirchtreeservice.com) is the canonical host — it is
 * what astro.config.mjs `site`, every canonical tag, the sitemap and robots.txt
 * use. Both hosts are attached to the Pages project, and `_redirects` cannot
 * match on hostname, so this is the one place the www -> apex redirect lives.
 * Path and query string are preserved.
 *
 * Hashed build assets (/_astro/*) are excluded in public/_routes.json so they
 * are served straight from the static asset cache without invoking a Function.
 */
const APEX = "riverbirchtreeservice.com";
const WWW = "www." + APEX;

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === WWW) {
    url.hostname = APEX;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
