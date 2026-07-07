// ============================================================================
// REVIEWS — REAL Google reviews for River Birch Tree Service LLC.
// ----------------------------------------------------------------------------
// These are the actual 5-star reviews from the live Google Business Profile
// (5.0★, 9 reviews, CID 11842205041438600814). Names are shown in full
// (first + last) exactly as they appear on Google — they are publicly
// verifiable, which is the whole point; do NOT anonymize to initials.
//
// Reviews #7 (Rahrer) and #9 (Federhart) were lightly trimmed where Google
// truncated the visible text — see the TODO comments to paste the final text.
//
// `topics` route each review to the most relevant service page; `city` routes a
// review that names a town to that town's page. The review COUNT (9) is shown
// and every rating links to the live Google profile (see site.googleRatingLink).
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
}

export const reviews: Review[] = [
  {
    tag: "Storm Emergency", name: "Jimmie Fugate", source: "Google Local Guide", stars: 5,
    topics: ["storm-damage-tree-removal", "tree-removal"], city: "boone-nc",
    text: "I had a tree emergency from the last rain and wind we had in Boone NC. I called River Birch Tree Service and they came out to look that same day. I was amazed they came that soon! They came the next day and went hard to work with the mess I had. They really were a godsend! They worked very hard, and left my yard very neat. Everything was hauled off and there was a lot! I would recommend this business to anyone.",
  },
  {
    tag: "Big Project", name: "Jacob Van Wynen", source: "Google Review", stars: 5,
    topics: ["tree-removal"],
    text: "The crew performed an excellent job on the gigantic project I had for them at my cabin. The execution and eventual clean up was very professional. I would recommend anyone in need of small or large tree services to use this great company. I will definitely be using them for services in the near future. Thank you Ezekiel and crew!!",
  },
  {
    tag: "Fallen Trees", name: "William Ballinger", source: "Google Review", stars: 5,
    topics: ["tree-removal", "storm-damage-tree-removal"],
    text: "Great owner and crew. Have had them remove and cut up many fallen trees and limbs of various sizes that were difficult to deal with, but they were able to handle them. They work fast and do a fantastic job with very good clean up. Follow instructions perfectly. Highly recommend them. The owner is very personable and a pleasure to work with.",
  },
  {
    tag: "Retaining Wall", name: "Johnny Varnedore", source: "Google Review", stars: 5,
    topics: ["land-clearing", "view-clearing"],
    text: "What a great experience with Ezequiel and his crew. One of the few landscapers who actually called me back and gave me a quote. His quote was fair and he actually got new retaining wall done ahead of schedule. He was the most detailed in his initial inspection than anyone else. We also opted to use for several other landscaping projects as well. We highly recommend him for any tree or landscaping in the High Country.",
  },
  {
    tag: "Landscaping", name: "Carol Rankhorn", source: "Google Review", stars: 5,
    topics: ["land-clearing", "view-clearing"],
    text: "It's rare to find someone who is passionate about working these days, but Ezequiel and his team are focused on making sure that their customers are happy. He worked with me to resolve a landscaping problem and the end results were amazing. I have full confidence in his ability to tackle anything!",
  },
  {
    tag: "Trimming & Removal", name: "Travis Pierce", source: "Google Review", stars: 5,
    topics: ["tree-trimming-pruning", "tree-removal"],
    text: "I had a couple of leaning trees removed and branches trimmed from another tree. The service was professional and cost was very reasonable. I highly recommend River Birch Tree Service.",
  },
  {
    // TODO: Google truncated this review in the profile — paste the final full
    // text when available (the "[on price]" tail is a light reconstruction).
    tag: "Technical Removals", name: "Bruce Rahrer", source: "Google Review", stars: 5,
    topics: ["tree-removal"],
    text: "I live in a private retirement community — second and third homes. Many use River Birch Tree Service. This company provides outstanding service cutting trees that are massive in complicated positions near homes. They are very competitive [on price].",
  },
  {
    tag: "Hard Worker", name: "Samantha Reeves", source: "Google Review", stars: 5,
    text: "Ezequial is personable, reasonable, and a hard worker. Would definitely recommend his services!",
  },
  {
    // TODO: Google truncated this review in the profile — paste the final full
    // text when available (the "[property]" tail is a light reconstruction).
    tag: "Fast Response", name: "Maggie Federhart", source: "Google Review", stars: 5,
    topics: ["storm-damage-tree-removal", "tree-removal"],
    text: "Ezequiel and his crew were fantastic. They are great folks. He came right away after finding out I needed help with a tree that was on my [property].",
  },
];

// Hand-picked, diverse set for the homepage / about page (storm, removal,
// retaining wall, landscaping, trimming, big project).
const FEATURED = ["Jimmie Fugate", "William Ballinger", "Johnny Varnedore", "Carol Rankhorn", "Travis Pierce", "Jacob Van Wynen"];
export const featuredReviews: Review[] = FEATURED.map(
  (n) => reviews.find((r) => r.name === n)!
).filter(Boolean);

/** One short punchy line for a hero / trust strip. */
export const heroReview = reviews.find((r) => r.name === "Samantha Reeves") ?? reviews[0];

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

// Real, verifiable rating figures — shown honestly and linked to the profile.
export const reviewsSummary = {
  stars: 5,
  rating: "5.0",
  count: "9",
  readMoreHref: "/reviews",
};
