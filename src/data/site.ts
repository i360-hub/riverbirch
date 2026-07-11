// Sitewide constants — NAP, phone, GHL form, nav, socials.
// River Birch Tree Service LLC — Deep Gap, NC. Service Area Business:
// the owner's street address is NEVER published (city/region only).
import { mapEmbed, mapsLink } from "./maps";

export const site = {
  name: "River Birch Tree Service",
  legalName: "River Birch Tree Service LLC",
  tagline: "Local, Fully-Insured Tree Removal & 24/7 Storm Cleanup",
  owner: "Ezequiel Moreno",

  phoneDisplay: "(828) 964-6567",
  phoneHref: "tel:8289646567",

  // Service Area Business — address hidden (owner's home). Show city/region ONLY.
  // No `street` key anywhere: nothing can accidentally render a street address.
  address: {
    city: "Deep Gap",
    state: "NC",
    zip: "28618",
    country: "US",
    region: "Watauga County",
  },

  // Business geo (Deep Gap base) — schema + map pin, per the brand brief.
  geo: { lat: 36.2513841, lng: -81.6869554 },

  hours: "24/7 Emergency Service",

  // GoHighLevel LeadConnector form — River Birch's own "Contact — River Birch"
  // form in their GHL sub-account. Leads flow into their CRM.
  ghlFormId: "2IoiG70LCF5TQAsKwfzk",
  ghlFormSrc: "https://api.leadconnectorhq.com/widget/form/2IoiG70LCF5TQAsKwfzk",
  // Dedicated contact page uses the same form.
  ghlContactFormId: "2IoiG70LCF5TQAsKwfzk",
  ghlContactFormSrc: "https://api.leadconnectorhq.com/widget/form/2IoiG70LCF5TQAsKwfzk",

  email: "riverbirchtreexpert@gmail.com",
  // NC has no state arborist license — we claim "fully insured", never a license.
  insured: "Fully Insured",

  // Direct Google Business Profile links (place ChIJ6Y1cyaKMfWlRbq5JFL72V6Q).
  googleReviewsUrl: "https://www.google.com/search?hl=en-US&gl=us&q=River+Birch+Tree+Service+LLc.&ludocid=11842205041438600814&lsig=AB86z5VzYPLZiU27ubzAM9h_oQih#lrd=0x627d8ca2c95c8de9:0xa457f6be1449ae6e,3",
  googleWriteReviewUrl: "https://www.google.com/search?hl=en-US&gl=us&q=River+Birch+Tree+Service+LLc.&ludocid=11842205041438600814&lsig=AB86z5VzYPLZiU27ubzAM9h_oQih#lrd=0x627d8ca2c95c8de9:0xa457f6be1449ae6e,3",

  // Rating shown as 5.0★ on Google and linked to the live profile. The review
  // COUNT is intentionally NOT displayed on-page (kept here for future use, e.g.
  // once volume grows). We also do NOT emit aggregateRating/Review JSON-LD.
  googleRating: "5.0",
  googleReviewCount: "9",
  googleRatingLink: "https://www.google.com/maps?cid=11842205041438600814",

  // Interactive Google Maps embed centered on the Deep Gap base / CID. Uses the
  // Maps Embed API when PUBLIC_GOOGLE_MAPS_KEY is set; otherwise the ServiceArea
  // widget shows a styled "open in Google Maps" fallback (no broken gray box).
  mapEmbedSrc: mapEmbed("River Birch Tree Service, Deep Gap, NC 28618", 11),
  mapLink: "https://maps.google.com/maps?cid=11842205041438600814",

  socials: {
    facebook: "https://www.facebook.com/61571649233045",
    tiktok: "https://www.tiktok.com/@tree.service88",
  },

  // Structured-data facts — sourced from the verified Google Business Profile.
  // Powers the sitewide LocalBusiness (Service Area Business) JSON-LD in
  // BaseLayout. NOTE: no aggregateRating / Review nodes are emitted (see brief).
  schema: {
    // Service Area Business — LocalBusiness is the safe, correct type (there is
    // no dedicated tree-service type). No storefront address in the graph.
    type: "LocalBusiness",
    primaryService: "Tree Service",
    description:
      "River Birch Tree Service LLC is a locally owned, fully-insured tree service based in Deep Gap, NC, serving Boone, Blowing Rock, and the High Country of Watauga County. Owner Ezequiel Moreno and crew handle tree removal (including technical removals near homes and power lines), 24/7 emergency storm and ice-damage cleanup, land, lot and driveway clearing, tree trimming and pruning, stump grinding, and view clearing. Free estimates and 5.0-star rated on Google.",
    priceRange: "$$",
    foundingDate: "2020",
    languages: ["English", "Spanish"],
    // Stable public asset URLs (not astro:assets-hashed) so JSON-LD stays valid.
    logo: "/logo.png",
    image: "/og-default.jpg",
    // Google Business Profile identifiers.
    placeId: "ChIJ6Y1cyaKMfWlRbq5JFL72V6Q",
    cid: "11842205041438600814",
    profileId: "1987114942540672921",
    mapUrl: "https://maps.google.com/maps?cid=11842205041438600814",
    // Service radius from the Deep Gap base (meters) — ~25 mi, covering Watauga
    // County core. Emitted as a GeoCircle.
    serviceRadiusMeters: 40000,
    // Towns served — our Tier-2 town pages (matches the GBP service area).
    areaServed: [
      { name: "Deep Gap, NC", wiki: "https://en.wikipedia.org/wiki/Deep_Gap,_North_Carolina" },
      { name: "Boone, NC", wiki: "https://en.wikipedia.org/wiki/Boone,_North_Carolina" },
      { name: "Blowing Rock, NC", wiki: "https://en.wikipedia.org/wiki/Blowing_Rock,_North_Carolina" },
      { name: "Vilas, NC", wiki: "https://en.wikipedia.org/wiki/Vilas,_North_Carolina" },
      { name: "Sugar Grove, NC", wiki: "https://en.wikipedia.org/wiki/Sugar_Grove,_North_Carolina" },
      { name: "Valle Crucis, NC", wiki: "https://en.wikipedia.org/wiki/Valle_Crucis,_North_Carolina" },
      { name: "Foscoe, NC", wiki: "https://en.wikipedia.org/wiki/Foscoe,_North_Carolina" },
      { name: "Seven Devils, NC", wiki: "https://en.wikipedia.org/wiki/Seven_Devils,_North_Carolina" },
      { name: "Zionville, NC", wiki: "https://en.wikipedia.org/wiki/Zionville,_North_Carolina" },
      { name: "Trade, TN", wiki: "https://en.wikipedia.org/wiki/Trade,_Tennessee" },
      { name: "Mabel, NC" },
      { name: "Cove Creek, NC" },
      { name: "Meat Camp, NC" },
      { name: "Sands, NC" },
      { name: "Bamboo, NC" },
      { name: "Aho, NC" },
      { name: "Triplett, NC" },
      { name: "Todd, NC", wiki: "https://en.wikipedia.org/wiki/Todd,_North_Carolina" },
      { name: "Brownwood, NC" },
      { name: "Stony Fork, NC" },
      { name: "Watauga County, NC", wiki: "https://en.wikipedia.org/wiki/Watauga_County,_North_Carolina" },
    ],
    // Core services offered — becomes a makesOffer list on the business node.
    // Full parity with the 10 GBP "Listing Services": the 6 tree-service pages +
    // Tree Planting & Transplanting (now a built page) + Tree Stump Removal
    // (covered by Stump Grinding) + Brush Mulch Chipping (covered on Land Clearing).
    services: [
      "Tree Removal",
      "Emergency Storm & Ice Damage Tree Removal",
      "Land, Lot & Driveway Clearing",
      "Tree Trimming & Pruning",
      "Stump Grinding",
      "Tree Stump Removal",
      "View Clearing",
      "Tree Planting",
      "Tree Transplanting",
      "Brush Mulch Chipping",
    ],
  },

  // Secondary footer nav.
  footerLinks: [
    { label: "About Us", href: "/about-river-birch-tree-service" },
    { label: "Property Services", href: "/property-services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer "Service Areas" mini-grid (8 featured towns + View All).
  footerServiceAreas: [
    { label: "Deep Gap, NC", href: "/tree-service-deep-gap-nc" },
    { label: "Boone, NC", href: "/tree-service-boone-nc" },
    { label: "Blowing Rock, NC", href: "/tree-service-blowing-rock-nc" },
    { label: "Vilas, NC", href: "/tree-service-vilas-nc" },
    { label: "Sugar Grove, NC", href: "/tree-service-sugar-grove-nc" },
    { label: "Valle Crucis, NC", href: "/tree-service-valle-crucis-nc" },
    { label: "Foscoe, NC", href: "/tree-service-foscoe-nc" },
    { label: "Todd, NC", href: "/tree-service-todd-nc" },
  ],

  copyrightYear: 2026,
  copyright: "All Rights Reserved | River Birch Tree Service LLC.",
} as const;

// Primary navigation — Services + Service Areas dropdowns + top-level links.
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Tree Removal", href: "/tree-removal" },
      { label: "Emergency Storm & Ice Cleanup", href: "/storm-damage-tree-removal" },
      { label: "Land, Lot & Driveway Clearing", href: "/land-clearing" },
      { label: "Tree Trimming & Pruning", href: "/tree-trimming-pruning" },
      { label: "Stump Grinding", href: "/stump-grinding" },
      { label: "View Clearing", href: "/view-clearing" },
    ],
  },
  { label: "Property Services", href: "/property-services" },
  {
    label: "Service Areas",
    children: [
      { label: "Deep Gap", href: "/tree-service-deep-gap-nc" },
      { label: "Boone", href: "/tree-service-boone-nc" },
      { label: "Blowing Rock", href: "/tree-service-blowing-rock-nc" },
      { label: "Vilas", href: "/tree-service-vilas-nc" },
      { label: "Foscoe", href: "/tree-service-foscoe-nc" },
      { label: "All Service Areas", href: "/service-areas" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about-river-birch-tree-service" },
  { label: "Contact", href: "/contact" },
];
