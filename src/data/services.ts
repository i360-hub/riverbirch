// The Tier-1 pages (homepage + 6 service pages).
// Drives: homepage services grid, related-services blocks, [service].astro, sitemap.
// Mirror the 10 GBP services for entity parity — 6 built now; extend to 10 when
// the remaining 4 service names are supplied (see brief / README).

export type ServiceGroup = "removal" | "care";

export interface Service {
  slug: string; // URL path (no leading slash beyond root); "" = homepage
  navLabel: string; // label in header dropdown
  gridTitle: string; // short label for homepage services grid / related cards
  group: ServiceGroup;
  icon: string; // Icon.astro name used on the services grid / related cards
  title: string; // <title>
  h1Lines: string[]; // hero <h1>, one entry per visual line
  metaDescription: string; // <meta description>
}

export const homepage = {
  slug: "",
  title: "River Birch Tree Service | Tree Removal & Storm Cleanup — Deep Gap & Boone, NC",
  h1Lines: [
    "Local, Fully-Insured Tree Removal & Storm Cleanup",
    "Serving Deep Gap & the High Country",
  ],
  metaDescription:
    "River Birch Tree Service LLC — tree removal, 24/7 storm & ice cleanup, land clearing, trimming, stump grinding & view clearing in Boone, Blowing Rock & Watauga County. Fully insured. 5.0★ on Google. Call (828) 964-6567.",
} as const;

export const services: Service[] = [
  {
    slug: "tree-removal",
    navLabel: "Tree Removal",
    gridTitle: "Tree Removal",
    group: "removal",
    icon: "tree",
    title: "Tree Removal in Boone & Deep Gap, NC | River Birch Tree Service",
    h1Lines: ["Tree Removal in Boone", "& the High Country, NC"],
    metaDescription:
      "Safe, fully-insured tree removal in Boone, Deep Gap & Watauga County — including technical removals near homes and power lines. Free estimates. Call River Birch at (828) 964-6567.",
  },
  {
    slug: "storm-damage-tree-removal",
    navLabel: "Emergency Storm & Ice Cleanup",
    gridTitle: "Emergency Storm & Ice Cleanup",
    group: "removal",
    icon: "storm",
    title: "Emergency Storm & Ice Damage Tree Removal | 24/7 | Boone, NC",
    h1Lines: ["24/7 Emergency Storm &", "Ice Damage Tree Cleanup"],
    metaDescription:
      "Tree down from a storm or ice? River Birch offers 24/7 emergency storm & ice-damage tree removal across Boone, Deep Gap & the High Country. Fully insured, fast response. Call (828) 964-6567.",
  },
  {
    slug: "land-clearing",
    navLabel: "Land, Lot & Driveway Clearing",
    gridTitle: "Land & Lot Clearing",
    group: "removal",
    icon: "wind",
    title: "Land, Lot & Driveway Clearing | Watauga County, NC | River Birch",
    h1Lines: ["Land, Lot & Driveway Clearing", "Across Watauga County"],
    metaDescription:
      "Building, expanding, or opening up a mountain lot? River Birch clears land, lots, and driveways in Boone, Deep Gap & the High Country. Fully insured. Free estimates — (828) 964-6567.",
  },
  {
    slug: "tree-trimming-pruning",
    navLabel: "Tree Trimming & Pruning",
    gridTitle: "Tree Trimming & Pruning",
    group: "care",
    icon: "tree",
    title: "Tree Trimming & Pruning | Boone & the High Country, NC",
    h1Lines: ["Tree Trimming & Pruning", "in Boone & the High Country"],
    metaDescription:
      "Keep your trees healthy, safe, and shaped right. River Birch provides expert tree trimming and pruning in Boone, Blowing Rock & Watauga County. Fully insured. Call (828) 964-6567.",
  },
  {
    slug: "stump-grinding",
    navLabel: "Stump Grinding",
    gridTitle: "Stump Grinding",
    group: "care",
    icon: "hazard",
    title: "Stump Grinding in Boone & Deep Gap, NC | River Birch Tree Service",
    h1Lines: ["Stump Grinding in Boone", "& Deep Gap, NC"],
    metaDescription:
      "Grind that stump below grade and reclaim your yard. River Birch offers stump grinding across Boone, Deep Gap & the High Country. Fully insured, free estimates. Call (828) 964-6567.",
  },
  {
    slug: "view-clearing",
    navLabel: "View Clearing",
    gridTitle: "View Clearing",
    group: "care",
    icon: "wind",
    title: "View Clearing & Enhancement | High Country, NC | River Birch",
    h1Lines: ["View Clearing &", "Enhancement in the High Country"],
    metaDescription:
      "Reclaim your mountain view without clear-cutting. River Birch does selective view clearing, view topping, and enhancement in Blowing Rock, Boone & Watauga County. Fully insured. Call (828) 964-6567.",
  },
  {
    slug: "tree-planting-transplanting",
    navLabel: "Tree Planting & Transplanting",
    gridTitle: "Planting & Transplanting",
    group: "care",
    icon: "tree",
    title: "Tree Planting & Transplanting | Boone & Watauga County, NC | River Birch",
    h1Lines: ["Tree Planting & Transplanting", "in the High Country, NC"],
    metaDescription:
      "River Birch plants new trees and transplants established ones across Boone, Deep Gap & Watauga County — High Country-hardy species, set and moved to survive. Fully insured, free estimates. Call (828) 964-6567.",
  },
];

export const servicesByGroup = {
  removal: services.filter((s) => s.group === "removal"),
  care: services.filter((s) => s.group === "care"),
};

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
