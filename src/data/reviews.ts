// ============================================================================
// REVIEWS — FILL-LATER PLACEHOLDER SLOTS  (River Birch is 5.0★ on Google)
// ----------------------------------------------------------------------------
// Per the brand brief, the reviews COMPONENT ships now (5.0★ visual + working
// "Read reviews" / "Leave a review" Google links), but the review TEXT is a
// fill-later item. Every entry below is a clearly-marked PLACEHOLDER — realistic,
// keyword-matched sample copy so the demo looks complete, with generic
// "First L." names. When the owner supplies the real Google review text:
//
//   1. Replace each `text` with the customer's actual words.
//   2. Set `name` to first name + last initial (e.g. "Sarah M.").  NO full names.
//   3. Route by keyword (see brief): storm/fallen/emergency → storm-damage-tree-removal;
//      stump → stump-grinding; clearing/lot/driveway → land-clearing;
//      near house/power lines → tree-removal; view → view-clearing;
//      any review naming a town → that town's `city` slug.
//
// The review COUNT is never shown, and we never emit aggregateRating/Review
// JSON-LD (self-serving reviews on your own site are ignored by Google and would
// leak the count into the snippet). The live GBP carries the rating; we display it.
// ============================================================================

export interface Review {
  tag: string;
  name: string;
  text: string;
  source: string;
  stars: number;
  /** Service slugs this review is relevant to (for per-page targeting). */
  topics?: string[];
  /** Town slug if the review names a location. */
  city?: string;
  /** PLACEHOLDER marker — true until real Google text is pasted in. */
  placeholder?: boolean;
}

export const reviews: Review[] = [
  // --- Storm / emergency ---  [PLACEHOLDER]
  {
    tag: "Storm Cleanup", name: "Sarah M.", source: "Google Review", stars: 5,
    topics: ["storm-damage-tree-removal", "tree-removal"], city: "boone-nc", placeholder: true,
    text: "A big oak came down across our driveway during an ice storm and River Birch was out the same day. Ezequiel and the crew were fast, careful around the house, and left the yard spotless. Lifesavers.",
  },
  // --- Technical removal near house / power lines ---  [PLACEHOLDER]
  {
    tag: "Tree Removal", name: "David R.", source: "Google Review", stars: 5,
    topics: ["tree-removal"], city: "deep-gap-nc", placeholder: true,
    text: "We had two huge pines leaning toward the house and close to the power line. They roped everything down piece by piece — no damage, no drama. Fully insured and clearly knew what they were doing.",
  },
  // --- Land / lot / driveway clearing ---  [PLACEHOLDER]
  {
    tag: "Lot Clearing", name: "Jennifer K.", source: "Google Review", stars: 5,
    topics: ["land-clearing"], city: "blowing-rock-nc", placeholder: true,
    text: "River Birch cleared our steep lot so we could break ground on the new build. Great communication, fair price, and they handled a tough mountain site better than the last company we called.",
  },
  // --- Stump grinding ---  [PLACEHOLDER]
  {
    tag: "Stump Grinding", name: "Mike T.", source: "Google Review", stars: 5,
    topics: ["stump-grinding"], placeholder: true,
    text: "Ground down four old stumps in the front yard and cleaned up all the chips. You can't even tell they were there. Quick, friendly, and reasonably priced.",
  },
  // --- Trimming / pruning ---  [PLACEHOLDER]
  {
    tag: "Trimming & Pruning", name: "Laura B.", source: "Google Review", stars: 5,
    topics: ["tree-trimming-pruning"], city: "vilas-nc", placeholder: true,
    text: "They pruned back the maples over our roof and shaped the trees along the drive. Professional, tidy, and honest about what actually needed to come off. Highly recommend.",
  },
  // --- View clearing ---  [PLACEHOLDER]
  {
    tag: "View Clearing", name: "Tom H.", source: "Google Review", stars: 5,
    topics: ["view-clearing"], city: "blowing-rock-nc", placeholder: true,
    text: "We wanted our long-range view back without clear-cutting the property. River Birch selectively opened it up and it looks completely natural. Thrilled with the result.",
  },
  // --- General / any page ---  [PLACEHOLDER]
  {
    tag: "5-Star Service", name: "Amanda C.", source: "Google Review", stars: 5, placeholder: true,
    text: "Showed up when they said they would, gave a fair quote, and did excellent work. It's rare to find a crew this responsive and professional in the High Country. Will use them again.",
  },
  {
    tag: "Honest & Professional", name: "Chris P.", source: "Google Review", stars: 5, placeholder: true,
    text: "From the estimate to the cleanup, everything was easy. Ezequiel is honest and does what he says. Fully insured, too, which gave us real peace of mind on a big removal.",
  },
];

// Hand-picked, diverse set for the homepage / any page that doesn't target a
// specific service. Per brief: one responsiveness/professionalism, one big
// removal, one storm/emergency lead the homepage featured trio.
const FEATURED = ["Sarah M.", "David R.", "Amanda C.", "Jennifer K.", "Tom H.", "Laura B."];
export const featuredReviews: Review[] = FEATURED.map(
  (n) => reviews.find((r) => r.name === n)!
).filter(Boolean);

/** One short punchy line for the hero / trust strip rotation. */
export const heroReview =
  reviews.find((r) => r.name === "Amanda C.") ?? reviews[0];

/** Reviews relevant to a service slug, padded with strong general reviews. */
export function reviewsFor(service: string, count = 3): Review[] {
  const matched = reviews.filter((r) => r.topics?.includes(service));
  if (matched.length >= count) return matched.slice(0, count);
  const general = reviews.filter((r) => !r.topics || r.topics.length === 0);
  return [...matched, ...general].slice(0, count);
}

/** Reviews for a town slug (local ones first), padded with a diverse set. */
export function reviewsForCity(city: string, count = 3): Review[] {
  const local = reviews.filter((r) => r.city === city);
  const rest = reviews.filter((r) => !local.includes(r));
  return [...local, ...rest].slice(0, count);
}

// Rating for DISPLAY ONLY — the count is intentionally absent everywhere.
export const reviewsSummary = {
  stars: 5,
  rating: "5.0",
  readMoreHref: "/reviews",
};
