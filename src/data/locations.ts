// The Tier-2 town pages. Rendered by src/pages/tree-service-[town].astro at
// /tree-service-{slug}.
//
// We build dedicated pages for the 24 towns that carry genuinely distinct local
// content (real terrain / elevation / drainage / demand): 15 in Watauga County
// (home), 5 in Avery County (Banner Elk, Beech Mountain, Sugar Mountain, Linville,
// Newland) and 4 in Ashe County (West Jefferson, Jefferson, Fleetwood, Lansing).
// The 5 tiniest unincorporated spots (Aho, Bamboo, Sands, Brownwood, Stony Fork)
// have no distinguishable tree-service story of their own, so they're covered as
// text on /service-areas and 301-redirect there (see public/_redirects) rather
// than as near-duplicate pages — GBP coverage without doorway-content risk.
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
  /** Defaults to "Watauga County" (our home county). Set for Ashe/Avery towns. */
  county?: string;
  character: string;
  nearby: string[];
  note?: string;
  local: {
    conditions: string;
    jobs: string;
    faq: { q: string; a: string };
  };
}

/** Smaller service-area communities we cover but don't build dedicated pages
 *  for — listed as crawlable text on /service-areas, grouped by county. These
 *  give GBP-style coverage (the town names appear on the page) without the
 *  doorway-content risk of near-duplicate pages. */
export const alsoServedByCounty: { county: string; towns: string[] }[] = [
  { county: "Watauga County", towns: ["Aho", "Bamboo", "Sands", "Brownwood", "Stony Fork"] },
  { county: "Ashe County", towns: ["Glendale Springs", "Creston", "Warrensville", "Grassy Creek", "Crumpler", "Nathans Creek"] },
  { county: "Avery County", towns: ["Elk Park", "Crossnore", "Pineola", "Montezuma", "Minneapolis", "Plumtree"] },
];

/** Flat list (Watauga hamlets) kept for any legacy consumer. */
export const alsoServed = alsoServedByCounty[0].towns;

const PHONE = "(828) 964-6567";

const townConfigs: TownConfig[] = [
  {
    slug: "deep-gap-nc", name: "Deep Gap",
    character: "our home base, tucked along the Blue Ridge east of Boone",
    nearby: ["boone-nc", "todd-nc", "triplett-nc"],
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
    nearby: ["deep-gap-nc", "blowing-rock-nc", "meat-camp-nc"],
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
    nearby: ["sugar-grove-nc", "cove-creek-nc", "valle-crucis-nc", "boone-nc"],
    local: {
      conditions: "Vilas spreads west of Boone along US-421 at around 2,900 feet, a mix of open farmland and wooded hillsides in the Cove Creek drainage. Fence-line hardwoods, roadside trees along 421, and the big shade trees around older farmhouses are what we're most often called to on Vilas properties.",
      jobs: "In Vilas we do a lot of straightforward removals and clearing on acreage — taking down dead or storm-split hardwoods, opening up pasture and building sites, and grinding stumps so the ground can be mowed or planted. Larger lot-clearing jobs are common here where folks are reclaiming overgrown farmland.",
      faq: { q: "Do you clear land and pasture in Vilas?", a: "Yes — land and lot clearing is a big part of what we do in the Vilas area. We can open up overgrown acreage, clear building sites and driveways, and grind the stumps so the ground is ready to use." },
    },
  },
  {
    slug: "sugar-grove-nc", name: "Sugar Grove",
    character: "the Cove Creek–area community in western Watauga County",
    nearby: ["vilas-nc", "valle-crucis-nc", "cove-creek-nc", "boone-nc"],
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
    nearby: ["banner-elk-nc", "sugar-mountain-nc", "beech-mountain-nc", "foscoe-nc"],
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
    nearby: ["fleetwood-nc", "deep-gap-nc", "west-jefferson-nc", "meat-camp-nc"],
    local: {
      conditions: "Todd straddles the Watauga–Ashe line along the South Fork of the New River at around 3,000 feet, a historic riverside community where large hardwoods and sycamores grow in the river bottom. High water undercuts and leans these streamside trees, and the mature canopy over older homes near the Todd General Store needs regular attention.",
      jobs: "Todd work centers on large hardwood removals and pruning along the river and around historic properties, plus cleanup when the New River rises and takes bank trees with it. We handle the technical, close-to-structure work these mature riverside lots call for.",
      faq: { q: "Can you handle big riverside hardwoods in Todd?", a: "Yes — the New River bottom in Todd grows some large trees, and high water leans and undercuts them. We take down and clean up hazardous riverside hardwoods, working carefully around homes and banks." },
    },
  },
  {
    slug: "meat-camp-nc", name: "Meat Camp",
    character: "the wooded community in the hills north of Boone",
    nearby: ["boone-nc", "todd-nc", "deep-gap-nc"],
    local: {
      conditions: "Meat Camp climbs into the hills north of Boone along Meat Camp Creek, around 3,200 feet, steep and heavily wooded with white pine, hemlock, and northern hardwoods. Homes here are often tucked into the timber on narrow drives, so overhanging and leaning trees close to the house are the usual concern.",
      jobs: "Meat Camp jobs are mostly technical removals in tight, wooded settings — taking down trees leaning over cabins and drives without room to fell them whole. We climb and lower these in pieces, and we handle the storm cleanup that comes with steep, forested lots.",
      faq: { q: "Can you get equipment up the narrow drives in Meat Camp?", a: "Usually — and where a truck can't reach, we climb and rig the tree down by hand. Steep, wooded lots with tight access are routine for us in the Meat Camp area." },
    },
  },
  {
    slug: "cove-creek-nc", name: "Cove Creek",
    character: "the western Watauga community around the Cove Creek schools",
    nearby: ["sugar-grove-nc", "vilas-nc", "mabel-nc", "zionville-nc"],
    local: {
      conditions: "Cove Creek anchors the western Watauga valley around the Cove Creek schools, a mix of creek-bottom farmland and steep wooded slopes at roughly 3,000 feet. Streamside hardwoods and the timber climbing the valley walls are what most often need work on Cove Creek properties.",
      jobs: "Around Cove Creek we handle removals on sloped, wooded lots, clearing along the creek and field edges, and storm cleanup for the homes tucked back in the valley. The grades here call for proper rigging, which we bring to every job.",
      faq: { q: "Can you reach homes back in the Cove Creek valley?", a: "Yes — the western valley is well within our range from Deep Gap, and we're equipped for the steep, wooded lots and narrow drives that come with the Cove Creek area." },
    },
  },
  {
    slug: "zionville-nc", name: "Zionville",
    character: "the community near the Tennessee line in northwestern Watauga County",
    nearby: ["mabel-nc", "trade-nc", "vilas-nc", "cove-creek-nc"],
    local: {
      conditions: "Zionville sits in the northwestern corner of Watauga County near the Tennessee line at about 3,000 feet, rolling farmland and wooded ridges in the Cove Creek headwaters. Old farm hardwoods, windbreak rows, and roadside trees along the state-line highways are the usual work here.",
      jobs: "In Zionville we do a lot of acreage clearing and farm-tree removal — taking out dead or hazardous trees around barns and homes, clearing fence lines, and grinding stumps on working and reclaimed land. We cover Zionville and the NC/TN line communities right alongside our core Watauga service area.",
      faq: { q: "Do you serve the NC/TN line around Zionville?", a: "Yes — Zionville and the state-line communities are part of our regular service area. We're based just down the road in Deep Gap and cover this northwestern corner of the county routinely." },
    },
  },
  {
    slug: "mabel-nc", name: "Mabel",
    character: "the rural farm community in the northwestern corner of the county",
    nearby: ["zionville-nc", "cove-creek-nc", "vilas-nc"],
    local: {
      conditions: "Mabel is high, rural farm country in the far northwestern corner of Watauga County, near 3,400 feet, with open pasture broken by wooded draws and windbreaks. The exposed trees around farms here take real wind, and aging hardwoods over homes and barns are the common hazard.",
      jobs: "Mabel work is mostly acreage and farm-focused — removing dead or leaning trees near buildings, clearing overgrown pasture and fence lines, and grinding stumps so the land can be worked. We travel to Mabel and the surrounding line communities from our nearby Deep Gap base.",
      faq: { q: "Do you take on farm and acreage tree work in Mabel?", a: "Yes — that's most of what we do in Mabel. We clear pasture and fence lines, drop hazardous trees around barns and homes, and grind the stumps so you can put the ground back to use." },
    },
  },
  {
    slug: "trade-nc", name: "Trade", state: "TN",
    character: "the historic community just over the line, the oldest unincorporated town in Tennessee",
    nearby: ["zionville-nc", "mabel-nc", "vilas-nc"],
    note: "We cover Trade and the NC/TN line communities right alongside our Watauga County service area.",
    local: {
      conditions: "Trade lies just over the Tennessee line from Zionville at around 2,900 feet — the oldest unincorporated town in Tennessee — in the same headwater country as our northwestern Watauga towns. Rural farmland, wooded slopes, and old homestead shade trees define the tree work here.",
      jobs: "Because Trade sits right against our NC service area, we cover it the same way we cover Zionville and Mabel — removals around farms and homes, land and fence-line clearing, and storm cleanup when the line-country weather brings trees down. It's a short reach from our Deep Gap base.",
      faq: { q: "Does River Birch cross into Trade, TN?", a: "Yes — Trade is right on our doorstep across the state line, and we serve it alongside the NC line communities. Call us for the same tree removal, clearing, and storm work we do throughout the area." },
    },
  },
  {
    slug: "triplett-nc", name: "Triplett",
    character: "the community in eastern Watauga County near the Wilkes line",
    nearby: ["deep-gap-nc", "todd-nc"],
    local: {
      conditions: "Triplett lies in eastern Watauga County toward the Wilkes line, rural and wooded around the Elk Creek headwaters at roughly 3,000 feet. Homes are spread along the creek and up the hollows here, with mature hardwood and pine that storms regularly bring down across drives and lines.",
      jobs: "In Triplett we do a lot of storm and hazard removal on rural, wooded lots, clearing trees off long private drives and grinding stumps on acreage. It's an easy reach from our Deep Gap base, so we respond quickly when a tree comes down out this way.",
      faq: { q: "Do you clear trees off long private drives in Triplett?", a: "Yes — rural drives blocked by a downed tree are a common Triplett call. We cut through, clear the drive, and haul off the debris, then handle any remaining hazard trees along it." },
    },
  },

  // ── Avery County ──────────────────────────────────────────────────────────
  {
    slug: "banner-elk-nc", name: "Banner Elk", county: "Avery County",
    character: "the ski-and-college town between Sugar and Beech Mountains",
    nearby: ["sugar-mountain-nc", "beech-mountain-nc", "seven-devils-nc", "newland-nc"],
    note: "Much of Banner Elk is second homes and rentals, so a lot of our work here is for owners who aren't on site — we handle it start to finish and send you the result.",
    local: {
      conditions: "Banner Elk sits around 3,700 feet between Sugar and Beech Mountains, home to Lees-McRae College and a dense mix of resort second homes, rentals, and older in-town lots. Steep wooded parcels of white pine, hemlock, and northern hardwood ring the town, and the ice and wind that pour off the surrounding 5,000-foot peaks make exposed trees a constant hazard.",
      jobs: "In Banner Elk we do a lot of removals and view work on steep resort lots, plus storm response for the many second homes and rentals that sit empty between visits. Tight in-town lots near the college call for climbing and lowering in pieces, and we handle absentee-owner jobs from assessment through final cleanup.",
      faq: { q: "Can you handle a tree at my Banner Elk second home while I'm away?", a: "Yes — much of our Banner Elk work is for owners who aren't on site. Send us photos and we'll assess, clear the tree, haul the debris, and send you the finished result. You don't have to be there." },
    },
  },
  {
    slug: "beech-mountain-nc", name: "Beech Mountain", county: "Avery County",
    character: "the highest incorporated town in the eastern United States",
    nearby: ["banner-elk-nc", "sugar-mountain-nc", "seven-devils-nc"],
    note: "At over 5,000 feet, Beech takes the heaviest ice and wind in the region — which is exactly when our 24/7 storm response matters most.",
    local: {
      conditions: "Beech Mountain tops out above 5,000 feet — the highest incorporated town in the eastern US — where rime ice, freezing fog, and hard wind load trees far beyond what lower elevations ever see. The town is almost entirely wooded second homes and rentals on steep, switchbacked lots, with wind-flagged conifers and brittle hardwoods that snap under ice.",
      jobs: "Ice and wind cleanup is the headline on Beech — when a system hits, this is one of the first and hardest-hit places in the region. We also do hazard and view work on the steep resort lots, climbing and rigging removals by hand where the near-vertical driveways keep trucks and lifts out.",
      faq: { q: "Do you clear storm and ice damage on Beech Mountain?", a: "Constantly — at 5,000-plus feet Beech takes the heaviest ice in the area, and our 24/7 crew is ready when it brings trees down. We rig and lower removals on the steep lots by hand where equipment can't reach." },
    },
  },
  {
    slug: "sugar-mountain-nc", name: "Sugar Mountain", county: "Avery County",
    character: "the ski-resort village on the slopes above Banner Elk",
    nearby: ["banner-elk-nc", "beech-mountain-nc", "linville-nc", "seven-devils-nc"],
    local: {
      conditions: "Sugar Mountain climbs the slopes above Banner Elk past 4,000 feet, a resort village of ski-in second homes and condos on some of the steepest lots in the county. Tall white pine and hemlock crowd the views here, and the elevation brings the same ice loading and wind-throw that hit the neighboring peaks.",
      jobs: "View clearing and steep-lot removals drive most Sugar Mountain work — opening up the slope and long-range views owners bought the property for, and taking down ice-damaged conifers on grades that demand full rigging. We also handle storm cleanup for the many units that sit empty midweek and off-season.",
      faq: { q: "Do you do view clearing on Sugar Mountain?", a: "Yes — it's one of our most-requested jobs up here. We selectively clear and reduce trees to reopen your slope and long-range views while keeping the lot healthy and screened where you still want privacy." },
    },
  },
  {
    slug: "linville-nc", name: "Linville", county: "Avery County",
    character: "the historic resort community at the foot of Grandfather Mountain",
    nearby: ["newland-nc", "sugar-mountain-nc", "banner-elk-nc"],
    note: "Many Linville and Linville Ridge properties are prized for their Grandfather Mountain views, so selective view clearing is one of our most-requested jobs here.",
    local: {
      conditions: "Linville sits at the foot of Grandfather Mountain near 3,600 feet, home to the historic Linville resort, the gated Linville Ridge, and the rugged country around Linville Gorge and Falls. Big rhododendron, hemlock, and mature hardwood define these prized wooded lots, and the exposure along the Grandfather ridgelines drives heavy wind and ice damage.",
      jobs: "Linville work leans toward careful view and hazard work on prestige lots — selectively reducing and removing trees to protect long-range Grandfather views without stripping a property, plus technical removals close to historic and high-value homes. Storm cleanup along the exposed ridges is steady when the weather turns.",
      faq: { q: "Can you do view and hazard work on a Linville Ridge lot?", a: "Yes — we're set up for the prestige, view-driven lots around Linville and Grandfather Mountain. We selectively clear for long-range views and take down hazard trees with careful rigging close to high-value homes." },
    },
  },
  {
    slug: "newland-nc", name: "Newland", county: "Avery County",
    character: "the Avery County seat and highest county seat in the eastern United States",
    nearby: ["linville-nc", "banner-elk-nc", "sugar-mountain-nc"],
    local: {
      conditions: "Newland is the seat of Avery County and, at about 3,600 feet, the highest county seat in the eastern US, set in the open Toe River valley ringed by wooded ridges. It's a year-round working town — older in-town lots with mature shade trees, surrounding farmland, and homes tucked against the timbered slopes.",
      jobs: "Newland keeps us busy with everyday tree work for year-round residents — removing dead and hazardous hardwoods around homes and outbuildings, trimming mature shade trees, clearing acreage and fence lines, and grinding stumps. It's a central base for reaching the rest of Avery County.",
      faq: { q: "Does River Birch serve Newland and the rest of Avery County?", a: "Yes — Newland is our anchor for Avery County work, and we cover the county seat and surrounding communities routinely from our nearby Deep Gap base. Call us for removal, trimming, clearing, storm cleanup, or stump grinding." },
    },
  },

  // ── Ashe County ───────────────────────────────────────────────────────────
  {
    slug: "west-jefferson-nc", name: "West Jefferson", county: "Ashe County",
    character: "Ashe County's largest town and its arts-and-tourism hub",
    nearby: ["jefferson-nc", "fleetwood-nc", "todd-nc"],
    local: {
      conditions: "West Jefferson sits around 3,200 feet at the foot of Mount Jefferson, the busiest town in Ashe County with a walkable downtown arts district, mature street trees, and wooded residential lots climbing the surrounding slopes. Aging hardwoods over tight downtown lots and homes on the Mount Jefferson grade are the usual concern.",
      jobs: "West Jefferson work runs from technical in-town removals over buildings and parked cars to hazard and slope work on the wooded lots around Mount Jefferson. Room to work is tight downtown, so we climb and lower most removals in controlled pieces, and we handle storm cleanup across the busy heart of Ashe County.",
      faq: { q: "Can you remove a tree on a tight lot in downtown West Jefferson?", a: "Yes — most in-town West Jefferson jobs have no room to fell a tree whole, so we climb and lower it in pieces. We're set up for tight access, parked cars, and neighbors close on both sides." },
    },
  },
  {
    slug: "jefferson-nc", name: "Jefferson", county: "Ashe County",
    character: "the Ashe County seat below Mount Jefferson",
    nearby: ["west-jefferson-nc", "fleetwood-nc", "lansing-nc"],
    local: {
      conditions: "Jefferson is the seat of Ashe County, set near 3,000 feet just below Mount Jefferson and the South Fork of the New River, a year-round town of older residential lots, county offices, and surrounding farmland. Mature shade trees over established homes and roadside hardwoods are the common work here.",
      jobs: "In Jefferson we handle everyday removals and pruning for year-round residents, hazard trees around homes and outbuildings, and cleanup after the storms that funnel through the New River valley. It pairs with neighboring West Jefferson as our base for covering the rest of Ashe County.",
      faq: { q: "Do you serve Jefferson and greater Ashe County?", a: "Yes — Jefferson and West Jefferson are our anchors for Ashe County, and we cover the county seat and surrounding communities routinely. Call River Birch for removal, trimming, clearing, storm cleanup, or stump grinding." },
    },
  },
  {
    slug: "fleetwood-nc", name: "Fleetwood", county: "Ashe County",
    character: "the New River community on the Ashe–Watauga line near Todd",
    nearby: ["todd-nc", "west-jefferson-nc", "deep-gap-nc"],
    note: "Fleetwood is one of the closest Ashe communities to our Deep Gap base, so we get out here fast when a tree comes down.",
    local: {
      conditions: "Fleetwood lies along the South Fork of the New River near the Ashe–Watauga line at about 3,000 feet, a rural riverside community of farmland, second homes, and wooded lots — and one of the closest Ashe communities to our Deep Gap base. Large river-bottom hardwoods and sycamores grow here, and high water undercuts and leans them over time.",
      jobs: "Fleetwood work centers on riverside hardwood removals and cleanup when the New River rises and takes bank trees with it, plus clearing and storm response on the surrounding wooded and farm lots. Because it's a short reach from Deep Gap, we respond quickly when a tree comes down out this way.",
      faq: { q: "Can you handle riverside trees in Fleetwood?", a: "Yes — the New River bottom in Fleetwood grows big hardwoods, and high water undercuts them. We take down and clean up leaning or storm-damaged riverside trees, working carefully around homes and banks — and we're close by in Deep Gap." },
    },
  },
  {
    slug: "lansing-nc", name: "Lansing", county: "Ashe County",
    character: "the small northern-Ashe town in the heart of Christmas-tree country",
    nearby: ["west-jefferson-nc", "jefferson-nc"],
    local: {
      conditions: "Lansing sits in northern Ashe County near Big Horse Creek and the New River around 3,000 feet, a small town surrounded by rolling farmland and some of the most productive Fraser-fir Christmas-tree country in the state. Field-edge hardwoods, windbreak rows, and old homestead shade trees are the usual work on Lansing-area properties.",
      jobs: "Around Lansing we do a lot of acreage and farm-focused work — clearing land and fence lines, removing dead or hazardous trees around homes, barns, and tree-farm fields, and grinding stumps so the ground can be worked or replanted. We cover northern Ashe alongside our core High Country service area.",
      faq: { q: "Do you clear land and farm trees around Lansing?", a: "Yes — land and fence-line clearing and farm-tree removal are a big part of what we do in the Lansing area. We can open up fields and building sites, drop hazardous trees around barns and homes, and grind the stumps so the ground is ready to use." },
    },
  },
];

const nameBySlug: Record<string, string> = Object.fromEntries(
  townConfigs.map((t) => [t.slug, t.name]),
);

function makeTown(cfg: TownConfig): Town {
  const { slug, name } = cfg;
  const state = cfg.state ?? "NC";
  const county = cfg.county ?? "Watauga County";
  const isHomeCounty = county === "Watauga County";
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
    heroSub: `River Birch Tree Service brings safe, insured tree removal, storm & ice cleanup, trimming, stump grinding, and land clearing to ${name} and the surrounding High Country. ${isHomeCounty ? `Owner Ezequiel Moreno and crew are based right here in ${county}.` : `Owner Ezequiel Moreno and crew are based nearby in Deep Gap and cover ${name} throughout ${county}.`}`,
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
