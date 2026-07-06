// Google Maps Embed API helpers.
//
// The legacy keyless embed (maps.google.com/maps?q=…&output=embed) was
// deprecated by Google — it now 301s with X-Frame-Options: SAMEORIGIN, so it
// can't be framed and renders blank. The supported replacement is the Maps
// Embed API, which requires an API key. The key is exposed in the iframe src
// (that's expected for Embed API keys); restrict it by HTTP referrer to the
// production domain in the Google Cloud console.
//
// Set PUBLIC_GOOGLE_MAPS_KEY in a local `.env` (gitignored) before building.

const KEY = (import.meta.env.PUBLIC_GOOGLE_MAPS_KEY ?? "").trim();

/** True once a Maps Embed API key is configured — components fall back to a
 *  plain "open in Google Maps" link when it isn't, so no broken gray box. */
export const hasMapsKey = KEY.length > 0;

/** Framable Embed API URL for the `place` mode. `query` is a text search
 *  ("Fort Mill, SC") or a `place_id:…`. */
export function mapEmbed(query: string, zoom = 14): string {
  return `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=${encodeURIComponent(query)}&zoom=${zoom}`;
}

/** Plain, always-works Google Maps link (no key) — used for the fallback and
 *  the "view larger map" affordance. */
export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
