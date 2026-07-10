// The Tier-2 town pages. Rendered by src/pages/tree-service-[town].astro at
// /tree-service-{slug}.
//
// We build dedicated pages ONLY for the towns that carry genuinely distinct
// local content (real terrain / elevation / drainage / demand). Smaller
// Watauga/line hamlets in the GBP service area (Zionville, Trade, Mabel, Cove
// Creek, Meat Camp, Sands, Bamboo, Aho, Triplett, Brownwood, Stony Fork) are
// covered as text on /service-areas and 301-redirect there (see public/_redirects)
// rather than as near-duplicate pages — that keeps the GBP coverage signal
// without the doorway-content risk of 20 name-swap pages.
//
// Each town below has a real, town-specific `local` block (conditions + jobs +
// FAQ), grounded in true High Country geography; no business claims are invented.

export interface Town {
  slug: string;
  name: string;
  state: string;
  county: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroTag: string;
  heroSub: string;
  heroTrust: string[];
  stats: { number: string; label: string }[];
  body: { tag: string; html: string }[];
  faq: { q: string; a: string }[];
  nearby: { label: string; href: string }[];
  reviewsTitle: string;
  reviewsSub: string;
  faqTitle: string;
  faqSub: string;
  areaTitle: string;
  areaSub: string;
  areaInfoHeading: string;
  areaInfoBlurb: string;
  finalCta: string;
  contactHeading: string;
  contactDesc: string;
}

interface TownConfig {
  slug: string;
  name: string;
  state?: string;
  character: string;
  nearby: string[];
  note?: string;
  local: {
    conditions: string;
    jobs: string;
    faq: { q: string; a: string };
  };
}

/** Smaller GBP service-area communities we cover but don't build pages for.
 *  Listed as text on /service-areas; their /tree-service-* URLs 301 there. */
export const alsoServed = [
  "Zionville", "Trade", "Mabel", "Cove Creek", "Meat Camp", "Sands",
  "Bamboo", "Aho", "Triplett", "Brownwood", "Stony Fork",
];

const PHONE = "(828) 964-6567";

const townConfigs: TownConfig[] = [
  {
    slug: "deep-gap-nc", name: "Deep Gap",
    character: "our home base, tucked along the Blue Ridge east of Boone",
    nearby: ["boone-nc", "todd-nc"],
    note: "Deep Gap is where River Birch is based, so you're getting a truly local crew — not one driving up the mountain from out of the area.",
    local: {
      conditions: "Deep Gap sits at about 3,200 feet where the Blue Ridge Parkway crosses US-421, and the ridgelines here are thick with white pine, hemlock, and mature oak. Those exposed ridge trees take the brunt of the ice storms that push up the escarpment, and hemlocks weakened by the woolly adelgid are a steady source of hazard removals across the community.",
      jobs: "As our home base, Deep Gap is where we do the most work — everything from roping a leaning pine off a Parkway-corridor cabin to grinding stumps and clearing homesites on the steep, wooded lots that define this stretch of the Blue Ridge. Because we're right here, we're usually the first crew on scene when a Deep Gap tree comes down overnight.",
      faq: { q: "How fast can River Birch reach me in Deep Gap?", a: "Faster than anyone — Deep Gap is our home base. Most calls here get a same-day look, and when a tree is down we're often on scene within the hour." },
    },
  },
  {
    slug: "boone-nc", name: "Boone",
    character: "the heart of the High Country and home to Appalachian State",
    nearby: ["deep-gap-nc", "blowing-rock-nc"],
    note: "From tight university-town lots to wooded ridgetop homes, Boone has every kind of tree job — and we handle all of them.",
    local: {
      conditions: "Boone sits around 3,300 feet, and its trees run from the tight, mature street canopy near downtown and Appalachian State to steep wooded ridgetop lots on the edges of town. Rhododendron, white pine, and ailing hemlocks are everywhere, and the big older hardwoods leaning over campus-area rentals and hillside neighborhoods need regular hazard assessment.",
      jobs: "Boone keeps us busy with technical removals over houses and parked cars, crown reduction on large hardwoods near power lines, and cleanup after the wind events that funnel through the valley. Room to work is the constant challenge in town, so we rope and lower most Boone removals in controlled pieces rather than dropping anything whole.",
      faq: { q: "Can you work on a tight Boone lot or near campus?", a: "Yes. Most in-town Boone jobs have no room to fell a tree whole, so we climb and lower it in pieces. We're set up for tight access, parked cars, and neighbors close on both sides." },
    },
  },
  {
    slug: "blowing-rock-nc", name: "Blowing Rock",
    character: "the scenic village on the edge of the escarpment",
    nearby: ["boone-nc", "foscoe-nc", "deep-gap-nc"],
    note: "Many Blowing Rock properties are prized for their long-range views, so selective view clearing is one of our most-requested jobs here.",
    local: {
      conditions: "At roughly 4,000 feet on the lip of the escarpment, Blowing Rock catches heavy wind and ice, and many properties are wooded second homes valued for their long-range views. Overgrown white pine and hemlock are the usual culprits crowding out those views, and exposed ridge trees here are especially prone to wind-throw during a hard blow.",
      jobs: "View clearing is our single most-requested job in Blowing Rock — selectively removing and reducing trees to reclaim the escarpment views without stripping a lot bare. We also do a lot of storm cleanup here, since the elevation and wind exposure make it one of the harder-hit corners of the county when the weather turns.",
      faq: { q: "Do you do view clearing in Blowing Rock?", a: "Constantly — it's our most-requested Blowing Rock job. We selectively clear and reduce trees to open up your long-range views while keeping the lot healthy and screened where you still want privacy." },
    },
  },
  {
    slug: "vilas-nc", name: "Vilas",
    character: "the rural community west of Boone along Highway 421",
    nearby: ["sugar-grove-nc", "valle-crucis-nc", "boone-nc"],
    local: {
      conditions: "Vilas spreads west of Boone along US-421 at around 2,900 feet, a mix of open farmland and wooded hillsides in the Cove Creek drainage. Fence-line hardwoods, roadside trees along 421, and the big shade trees around older farmhouses are what we're most often called to on Vilas properties.",
      jobs: "In Vilas we do a lot of straightforward removals and clearing on acreage — taking down dead or storm-split hardwoods, opening up pasture and building sites, and grinding stumps so the ground can be mowed or planted. Larger lot-clearing jobs are common here where folks are reclaiming overgrown farmland.",
      faq: { q: "Do you clear land and pasture in Vilas?", a: "Yes — land and lot clearing is a big part of what we do in the Vilas area. We can open up overgrown acreage, clear building sites and driveways, and grind the stumps so the ground is ready to use." },
    },
  },
  {
    slug: "sugar-grove-nc", name: "Sugar Grove",
    character: "the Cove Creek–area community in western Watauga County",
    nearby: ["vilas-nc", "valle-crucis-nc", "boone-nc"],
    local: {
      conditions: "Sugar Grove sits in the Cove Creek valley in western Watauga County at about 2,900 feet, where farmland along the creek bottoms gives way to steep wooded slopes. Streamside hardwoods and the timber on those steep valley walls are what most often need attention on Sugar Grove properties.",
      jobs: "Sugar Grove jobs tend to run toward removals on sloped, wooded lots and clearing along creek bottoms and field edges. We handle storm-damaged trees over homes and outbuildings, and we bring the equipment and rigging to work safely on the grades that come with this valley.",
      faq: { q: "Can you remove trees on a steep Sugar Grove lot?", a: "Yes — steep, wooded slopes are normal in the Cove Creek valley and we're equipped for them. We rig and lower trees on grade so nothing slides or hits a structure below." },
    },
  },
  {
    slug: "valle-crucis-nc", name: "Valle Crucis",
    character: "the historic valley community along the Watauga River",
    nearby: ["sugar-grove-nc", "foscoe-nc", "vilas-nc", "boone-nc"],
    local: {
      conditions: "Valle Crucis lies in the Watauga River valley at around 2,700 feet, one of the lower and more sheltered spots in the county. The river bottom grows large hardwoods and sycamores, while the valley walls climb steeply into hemlock and pine — and riverside trees undercut by high water are a recurring hazard here.",
      jobs: "In Valle Crucis we handle a lot of large hardwood removals and pruning on the historic properties and river-bottom lots, plus cleanup when the Watauga rises and takes streamside trees with it. The mature canopy over older homes here means careful, technical work close to structures.",
      faq: { q: "Do you handle large riverside trees in Valle Crucis?", a: "Yes. The Watauga River bottom grows some big hardwoods, and high water undercuts them over time. We take down and clean up leaning or storm-damaged riverside trees, working carefully around homes and banks." },
    },
  },
  {
    slug: "foscoe-nc", name: "Foscoe",
    character: "the community stretched along Highway 105 between Boone and Linville",
    nearby: ["valle-crucis-nc", "seven-devils-nc", "blowing-rock-nc", "boone-nc"],
    local: {
      conditions: "Foscoe runs along NC-105 in the shadow of Grandfather Mountain at roughly 3,300 feet, a corridor of steep wooded second homes and vacation rentals near the Watauga River headwaters. Tall white pine and hemlock crowd many of these lots, and the grade off 105 makes access and rigging the main challenge.",
      jobs: "Foscoe work leans toward removals and view work on steep vacation-home lots, plus storm response for the many properties here that sit empty between visits. We're often called to clear a tree off a rental or second home the owner can't get to quickly — and we handle the whole thing start to finish.",
      faq: { q: "Can you handle a tree at my Foscoe rental or second home while I'm away?", a: "Yes — a lot of our Foscoe work is for owners who aren't on site. Send us photos and we'll assess, clear the tree, haul the debris, and send you the finished result. You don't have to be there." },
    },
  },
  {
    slug: "seven-devils-nc", name: "Seven Devils",
    character: "the high mountain town straddling the Watauga–Avery line",
    nearby: ["foscoe-nc", "blowing-rock-nc", "boone-nc"],
    note: "At elevation, Seven Devils takes some of the heaviest ice and wind in the area — which is exactly when our 24/7 storm response matters most.",
    local: {
      conditions: "Seven Devils climbs to 4,000–5,000 feet on the Watauga–Avery line, home to some of the steepest resort lots and the heaviest ice loading in the region. At this elevation the freeze-thaw and rime ice snap limbs and topple exposed conifers, and the near-vertical driveways make every removal a rigging job.",
      jobs: "Storm and ice cleanup is the headline in Seven Devils — when a system hits, this is one of the first places trees come down. We also do view and hazard work on the steep resort-home lots, using climbing lines and lowering rigging where a truck or lift simply can't reach.",
      faq: { q: "Do you work the steep, high-elevation lots in Seven Devils?", a: "Yes — steep is the norm up here. We climb and rig removals on grades where equipment can't go, and our 24/7 crew is ready when ice and wind bring trees down at elevation." },
    },
  },
  {
    slug: "todd-nc", name: "Todd",
    character: "the riverside community on the Watauga–Ashe line along the New River",
    nearby: ["deep-gap-nc", "boone-nc"],
    local: {
      conditions: "Todd straddles the Watauga–Ashe line along the South Fork of the New River at around 3,000 feet, a historic riverside community where large hardwoods and sycamores grow in the river bottom. High water undercuts and leans these streamside trees, and the mature canopy over older homes near the Todd General Store needs regular attention.",
      jobs: "Todd work centers on large hardwood removals and pruning along the river and around historic properties, plus cleanup when the New River rises and takes bank trees with it. We handle the technical, close-to-structure work these mature riverside lots call for.",
      faq: { q: "Can you handle big riverside hardwoods in Todd?", a: "Yes — the New River bottom in Todd grows some large trees, and high water leans and undercuts them. We take down and clean up hazardous riverside hardwoods, working carefully around homes and banks." },
    },
  },
];

const nameBySlug: Record<string, string> = Object.fromEntries(
  townConfigs.map((t) => [t.slug, t.name]),
);

function makeTown(cfg: TownConfig): Town {
  const { slug, name } = cfg;
  const state = cfg.state ?? "NC";
  const county = "Watauga County";
  const nearby = cfg.nearby
    .filter((s) => nameBySlug[s])
    .map((s) => ({ label: `${nameBySlug[s]}, ${townConfigs.find((t) => t.slug === s)?.state ?? "NC"}`, href: `/tree-service-${s}` }));
  const nearbyProse = cfg.nearby.map((s) => nameBySlug[s]).filter(Boolean).slice(0, 3).join(", ");

  return {
    slug,
    name,
    state,
    county,
    title: `Tree Service in ${name}, ${state} | Tree Removal & Storm Cleanup | River Birch`,
    metaDescription: `Fully-insured tree removal, 24/7 storm & ice cleanup, trimming, stump grinding & land clearing in ${name}, ${state}. Local River Birch crew, 5.0★ on Google. Free estimates — ${PHONE}.`,
    h1: `Tree Service in ${name}, ${state}`,
    heroTag: "🌲 Local, Fully-Insured & 24/7",
    heroSub: `River Birch Tree Service brings safe, insured tree removal, storm & ice cleanup, trimming, stump grinding, and land clearing to ${name} and the surrounding High Country. Owner Ezequiel Moreno and crew are based right here in ${county}.`,
    heroTrust: ["5.0★ on Google", "Fully Insured", "24/7 Emergency", "Free Estimates"],
    stats: [
      { number: "24/7", label: "Emergency Response" },
      { number: "5.0★", label: "Rated on Google" },
      { number: "Insured", label: "On Every Job" },
      { number: "Free", label: "On-Site Estimates" },
    ],
    body: [
      { tag: "h2", html: `Your Local Tree Service in ${name}` },
      { tag: "p", html: `River Birch Tree Service is a locally owned, fully-insured tree company serving ${name} — ${cfg.character} — and the rest of ${county}. We handle everything from a single hazardous removal to full land clearing, and we answer the phone 24/7 when a storm brings a tree down. ${cfg.note ?? ""}` },
      { tag: "p", html: `Owner Ezequiel Moreno and the River Birch crew have earned a 5.0-star reputation on Google across the High Country by showing up on time, working safely near homes and power lines, and leaving every ${name} property cleaner than we found it.` },
      { tag: "h2", html: `Tree Conditions in ${name}` },
      { tag: "p", html: cfg.local.conditions },
      { tag: "p", html: cfg.local.jobs },
      { tag: "h2", html: `Tree Services We Offer in ${name}` },
      { tag: "li", html: `<a href="/tree-removal">Tree removal</a>, including technical removals near homes and power lines` },
      { tag: "li", html: `<a href="/storm-damage-tree-removal">24/7 emergency storm & ice-damage cleanup</a>` },
      { tag: "li", html: `<a href="/land-clearing">Land, lot & driveway clearing</a> for building and reclaiming property` },
      { tag: "li", html: `<a href="/tree-trimming-pruning">Tree trimming & pruning</a> to keep your trees healthy and safe` },
      { tag: "li", html: `<a href="/stump-grinding">Stump grinding</a> below grade, with cleanup` },
      { tag: "li", html: `<a href="/view-clearing">View clearing</a> to reclaim your long-range mountain views` },
      { tag: "p", html: `We're close by in Deep Gap, so we reach ${name} and nearby ${nearbyProse} quickly — and we travel for larger jobs beyond ${county} too. Call River Birch at ${PHONE} for a free estimate.` },
    ],
    faq: [
      cfg.local.faq,
      { q: `Can you remove a tree near my house or power line in ${name}?`, a: `Absolutely. Technical removals near homes and power lines are a specialty. We climb and rope the tree down in controlled pieces so nothing hits the structure — and River Birch is fully insured for exactly this kind of work in ${name}.` },
      { q: `Is River Birch insured, and do you need a license in ${state}?`, a: `River Birch Tree Service LLC is fully insured for tree work in ${name} and throughout ${county}. ${state === "TN" ? "Neither Carolina nor Tennessee issues a state arborist license" : "North Carolina has no state arborist license"}, so insurance is what actually protects your property — and we carry it on every job.` },
      { q: `Are estimates free in ${name}?`, a: `Always. We come out to your ${name} property, look at the job, and give you a clear, written, no-pressure estimate. Call ${PHONE} to set one up.` },
    ],
    nearby,
    reviewsTitle: `What ${name}-Area Homeowners Say`,
    reviewsSub: "Real 5-star Google reviews from around the High Country.",
    faqTitle: `Tree Service in ${name} — Common Questions`,
    faqSub: `Quick answers for ${name} homeowners about removal, storms, insurance, and estimates.`,
    areaTitle: `River Birch Serves ${name} & All of ${county}`,
    areaSub: `Based in Deep Gap, we cover ${name} and the surrounding High Country. Explore nearby towns below.`,
    areaInfoHeading: `Covering ${name} & Nearby`,
    areaInfoBlurb: `We reach ${name} and neighboring ${nearbyProse} quickly from our Deep Gap base — and travel for large jobs beyond the county line.`,
    finalCta: `Need a Tree Handled in ${name}? Let's Talk.`,
    contactHeading: `Get a Free Estimate in ${name}`,
    contactDesc: `Tell us about your tree or project in ${name}, or call us — we'll come out and give you a clear, no-pressure price. For a tree that's down right now, call anytime; we're on 24/7.`,
  };
}

export const locations: Record<string, Town> = Object.fromEntries(
  townConfigs.map((cfg) => [cfg.slug, makeTown(cfg)]),
);
