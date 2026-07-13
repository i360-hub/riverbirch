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
  /** Bespoke SEO title/meta overrides for high-value pages (e.g. Boone) that
   *  face real competition and deserve non-formulaic tags. When omitted, the
   *  standard templated title/metaDescription is used. Keep title under ~60
   *  chars so it isn't truncated on the SERP. */
  seoTitle?: string;
  seoMetaDescription?: string;
  local: {
    conditions: string;
    jobs: string;
    /** Town-specific "why choose us / local relationship" paragraph — replaces
     *  the old identical-on-every-page reputation blurb. */
    why: string;
    /** A third, town-specific paragraph (neighborhoods / access / landmarks) —
     *  raises the unique-content ratio well above near-duplicate territory. */
    extra: string;
    faq: { q: string; a: string };
    /** Two more town-specific FAQs so 3 of the 4 rendered FAQs are unique. */
    faq2: { q: string; a: string };
    faq3: { q: string; a: string };
  };
  /** Optional extra Q&As appended after the town-specific FAQs (before the
   *  insurance one). Used on high-value pages to target intent the SERP rewards
   *  — e.g. Boone's cost-focused "People Also Ask" box and "…cost" long-tail. */
  extraFaqs?: { q: string; a: string }[];
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

const PHONE = "(828) 818-8505";

const townConfigs: TownConfig[] = [
  {
    slug: "deep-gap-nc", name: "Deep Gap",
    character: "our home base, tucked along the Blue Ridge east of Boone",
    nearby: ["boone-nc", "todd-nc", "triplett-nc"],
    note: "Deep Gap is where River Birch is based, so you're getting a truly local crew — not one driving up the mountain from out of the area.",
    local: {
      conditions: "Deep Gap sits at about 3,200 feet where the Blue Ridge Parkway crosses US-421, and the ridgelines here are thick with white pine, hemlock, and mature oak. Those exposed ridge trees take the brunt of the ice storms that push up the escarpment, and hemlocks weakened by the woolly adelgid are a steady source of hazard removals across the community.",
      jobs: "As our home base, Deep Gap is where we do the most work — everything from roping a leaning pine off a Parkway-corridor cabin to grinding stumps and clearing homesites on the steep, wooded lots that define this stretch of the Blue Ridge. Because we're right here, we're usually the first crew on scene when a Deep Gap tree comes down overnight.",
      why: "Deep Gap isn't a service area to us — it's home. Neighbors here know the River Birch trucks, and being minutes away means we can look at a leaning tree the same day and be first on scene when one comes down overnight. That closeness is why so much of our Deep Gap work comes by word of mouth.",
      extra: "Deep Gap runs along the US-421 corridor and the Blue Ridge Parkway access at Elk Mountain, with homes scattered up gravel drives into the Elk Creek and Stony Fork headwaters. The mix of mature roadside oak and planted white pine along these drives means a lot of our local work is keeping limbs off power drops and clearing the narrow shared lanes that wind back to the cabins.",
      faq: { q: "How fast can River Birch reach me in Deep Gap?", a: "Faster than anyone — Deep Gap is our home base. Most calls here get a same-day look, and when a tree is down we're often on scene within the hour." },
      faq2: { q: "Do you handle trees along the Blue Ridge Parkway corridor in Deep Gap?", a: "We work the private property right up to the Parkway boundary — removals, hazard limbs, and cleanup on the cabins and lots along the US-421 and Parkway-access roads. We don't touch Park Service land itself, but anything on your side of the line we handle." },
      faq3: { q: "Can you get a crew up a steep gravel drive in Deep Gap?", a: "Almost always — most Deep Gap homes sit off narrow gravel drives and we're set up for them. Where a bucket truck can't make the grade, we climb and rig the tree down and carry the debris out." },
    },
  },
  {
    slug: "boone-nc", name: "Boone",
    character: "the heart of the High Country and home to Appalachian State",
    nearby: ["deep-gap-nc", "blowing-rock-nc", "meat-camp-nc"],
    note: "From tight university-town lots to wooded ridgetop homes, Boone has every kind of tree job — and we handle all of them.",
    // Boone is our highest-volume, most-competitive target ("tree service boone
    // nc" ~70/mo, "tree removal boone nc" ~40/mo). Bespoke tags — exact-match,
    // front-loaded, under ~60 chars — instead of the shared town formula.
    seoTitle: "Tree Service in Boone, NC | Removal & 24/7 Storm Cleanup",
    seoMetaDescription: `Boone, NC tree removal & 24/7 storm cleanup — from tight downtown lots near App State to wooded ridgetop homes. Fully insured, 5.0★ on Google. Free estimates: ${PHONE}.`,
    local: {
      conditions: "Boone sits around 3,300 feet, and its trees run from the tight, mature street canopy near downtown and Appalachian State to steep wooded ridgetop lots on the edges of town. Rhododendron, white pine, and ailing hemlocks are everywhere, and the big older hardwoods leaning over campus-area rentals and hillside neighborhoods need regular hazard assessment.",
      jobs: "Boone keeps us busy with technical removals over houses and parked cars, crown reduction on large hardwoods near power lines, and cleanup after the wind events that funnel through the valley. Room to work is the constant challenge in town, so we rope and lower most Boone removals in controlled pieces rather than dropping anything whole.",
      why: "In a town as busy as Boone, homeowners and property managers call River Birch because we treat a tight downtown lot with the same care as a ridgetop estate — protecting the house, the neighbor's fence, and the parked cars every time. Our 5.0-star Google reputation was built one careful Boone job at a time.",
      extra: "From the King Street core and the Appalachian State campus out to hillside neighborhoods and the ridges above Bamboo Road, Boone packs a lot of tree types into a small footprint. Student-rental turnover keeps hazard pruning steady, while the older established streets near downtown have big silver maples and oaks that need reduction before winter ice tests them.",
      faq: { q: "Can you work on a tight Boone lot or near campus?", a: "Yes. Most in-town Boone jobs have no room to fell a tree whole, so we climb and lower it in pieces. We're set up for tight access, parked cars, and neighbors close on both sides." },
      faq2: { q: "Do you work around Appalachian State and student rentals in Boone?", a: "Regularly. Rental lots near campus are tight and often have cars and foot traffic close by, so we schedule around it, rope everything down in pieces, and clean up fully. We can bill the owner or property manager directly." },
      faq3: { q: "How quickly can you respond to a downed tree in Boone during a storm?", a: "Fast — Boone is a short run from our Deep Gap base and where we do the most emergency work. We answer 24/7 and prioritize trees on houses, blocked drives, and anything tangled in a service line." },
    },
    extraFaqs: [
      { q: "How much does tree removal cost in Boone, NC?", a: "It depends far more on the tree than the town. A small tree in an open yard is a quick job; a large hardwood leaning over your house, driveway, or a power line takes climbing, rigging, and a bigger crew, so it costs more. Boone's tight in-town lots near campus and steep ridgetop driveways also take longer to work safely than an open field. Rather than quote a number that won't fit your tree, we come out and give you a free written estimate for the exact job — so the price you're quoted is the price for the work." },
      { q: "What makes one Boone tree job cost more than another?", a: "Four things, mostly: the tree's size and species (a big oak or silver maple takes longer than a slim pine); how close it is to your house, power lines, or a neighbor's property (tight targets mean roping every piece down instead of felling it whole); site access (whether we can get a truck and chipper near the tree, or it's a steep, wooded lot above Bamboo Road); and the extras you want — keeping the wood, stump grinding, and full haul-away. We walk the site, factor all of it in, and put the price in writing before any work starts." },
      { q: "Are your estimates in Boone really free?", a: "Yes — always. We come to your Boone property, look at the tree, the lean, and everything around it, and hand you a clear, no-pressure written estimate at no cost. There's no charge and no obligation to book. Call (828) 818-8505 to set one up." },
    ],
  },
  {
    slug: "blowing-rock-nc", name: "Blowing Rock",
    character: "the scenic village on the edge of the escarpment",
    nearby: ["boone-nc", "foscoe-nc", "deep-gap-nc"],
    note: "Many Blowing Rock properties are prized for their long-range views, so selective view clearing is one of our most-requested jobs here.",
    local: {
      conditions: "At roughly 4,000 feet on the lip of the escarpment, Blowing Rock catches heavy wind and ice, and many properties are wooded second homes valued for their long-range views. Overgrown white pine and hemlock are the usual culprits crowding out those views, and exposed ridge trees here are especially prone to wind-throw during a hard blow.",
      jobs: "View clearing is our single most-requested job in Blowing Rock — selectively removing and reducing trees to reclaim the escarpment views without stripping a lot bare. We also do a lot of storm cleanup here, since the elevation and wind exposure make it one of the harder-hit corners of the county when the weather turns.",
      why: "Blowing Rock homeowners trust River Birch with high-value, view-driven properties because we do the delicate work right — opening the view without wrecking the lot and cleaning up so thoroughly you'd never know a crew was there. Many of our Blowing Rock jobs come from repeat clients and their neighbors.",
      extra: "Blowing Rock's neighborhoods — from the village core and Mayview Park to the Green Hill and Chetola areas — sit right on the escarpment lip, so wind exposure and long-range views drive most of the tree work here. Many lots are wooded second homes where owners want the view opened toward Grandfather or the Globe without clear-cutting the privacy screen along the property line.",
      faq: { q: "Do you do view clearing in Blowing Rock?", a: "Constantly — it's our most-requested Blowing Rock job. We selectively clear and reduce trees to open up your long-range views while keeping the lot healthy and screened where you still want privacy." },
      faq2: { q: "Can you open a view without stripping my Blowing Rock lot bare?", a: "That's exactly how we approach it. We selectively remove and reduce the trees blocking your sightline while leaving a healthy screen for privacy and wind protection — you keep the woods and get the view back." },
      faq3: { q: "Do you clean up quickly for Blowing Rock rentals and second homes?", a: "Yes — a lot of Blowing Rock property is rented or sits empty between visits, so we haul all debris and leave it guest-ready. Send photos if you're out of town and we'll handle it and report back." },
    },
  },
  {
    slug: "vilas-nc", name: "Vilas",
    character: "the rural community west of Boone along Highway 421",
    nearby: ["sugar-grove-nc", "cove-creek-nc", "valle-crucis-nc", "boone-nc"],
    local: {
      conditions: "Vilas spreads west of Boone along US-421 at around 2,900 feet, a mix of open farmland and wooded hillsides in the Cove Creek drainage. Fence-line hardwoods, roadside trees along 421, and the big shade trees around older farmhouses are what we're most often called to on Vilas properties.",
      jobs: "In Vilas we do a lot of straightforward removals and clearing on acreage — taking down dead or storm-split hardwoods, opening up pasture and building sites, and grinding stumps so the ground can be mowed or planted. Larger lot-clearing jobs are common here where folks are reclaiming overgrown farmland.",
      why: "Out in Vilas, folks want a tree company that understands farm and acreage work, not just a quick fell-and-leave. River Birch takes the time to drop trees clear of barns and fences, haul off what needs hauling, and grind stumps so the ground is ready to use — the kind of thorough work that earns a rural community's trust.",
      extra: "Vilas spreads along US-421 and the side roads into the Beaverdam and Cove Creek drainages, a working landscape of pasture, farmsteads, and wooded hillsides. The big shade trees around older farmhouses and the fence-line hardwoods between fields are the recurring calls here, along with clearing overgrown bottomland folks want back in use.",
      faq: { q: "Do you clear land and pasture in Vilas?", a: "Yes — land and lot clearing is a big part of what we do in the Vilas area. We can open up overgrown acreage, clear building sites and driveways, and grind the stumps so the ground is ready to use." },
      faq2: { q: "Do you remove old farm and pasture trees in Vilas?", a: "Yes — dead or leaning trees around barns, farmhouses, and fence lines are routine Vilas work. We drop them safely away from buildings and stock, then grind the stumps so you can mow or fence the ground again." },
      faq3: { q: "Can you clear a building site on acreage in Vilas?", a: "We can — from a single house pad and driveway to opening several acres of overgrown pasture. We clear the trees and brush, haul or chip it, and leave the site graded enough to build or plant." },
    },
  },
  {
    slug: "sugar-grove-nc", name: "Sugar Grove",
    character: "the Cove Creek–area community in western Watauga County",
    nearby: ["vilas-nc", "valle-crucis-nc", "cove-creek-nc", "boone-nc"],
    local: {
      conditions: "Sugar Grove sits in the Cove Creek valley in western Watauga County at about 2,900 feet, where farmland along the creek bottoms gives way to steep wooded slopes. Streamside hardwoods and the timber on those steep valley walls are what most often need attention on Sugar Grove properties.",
      jobs: "Sugar Grove jobs tend to run toward removals on sloped, wooded lots and clearing along creek bottoms and field edges. We handle storm-damaged trees over homes and outbuildings, and we bring the equipment and rigging to work safely on the grades that come with this valley.",
      why: "Sugar Grove families call River Birch because we're comfortable on the steep, creek-cut ground the Cove Creek valley is known for, and because we clean up like we'd want our own place left. Careful rigging and a tidy finish are why our name gets passed around the valley.",
      extra: "Sugar Grove sits in the Cove Creek valley around the old high school, where creek-bottom farmland climbs quickly into steep, timbered slopes. Streamside hardwoods leaning over the water and the pine and hemlock on those valley walls are the trees we're called to most, and the grade means almost everything here is a rigging job rather than a straight fell.",
      faq: { q: "Can you remove trees on a steep Sugar Grove lot?", a: "Yes — steep, wooded slopes are normal in the Cove Creek valley and we're equipped for them. We rig and lower trees on grade so nothing slides or hits a structure below." },
      faq2: { q: "Can you take down a tree leaning over Cove Creek in Sugar Grove?", a: "Yes — streamside trees undercut by the creek are common here. We rig and lower them in pieces so nothing drops into the water or the bank, and we clean the debris well back from the stream." },
      faq3: { q: "Are you equipped for the steep slopes around Sugar Grove?", a: "We are — steep, wooded ground is normal in the Cove Creek valley and we bring the climbing lines and lowering rigging to work it safely, controlling every piece down the grade." },
    },
  },
  {
    slug: "valle-crucis-nc", name: "Valle Crucis",
    character: "the historic valley community along the Watauga River",
    nearby: ["sugar-grove-nc", "foscoe-nc", "vilas-nc", "boone-nc"],
    local: {
      conditions: "Valle Crucis lies in the Watauga River valley at around 2,700 feet, one of the lower and more sheltered spots in the county. The river bottom grows large hardwoods and sycamores, while the valley walls climb steeply into hemlock and pine — and riverside trees undercut by high water are a recurring hazard here.",
      jobs: "In Valle Crucis we handle a lot of large hardwood removals and pruning on the historic properties and river-bottom lots, plus cleanup when the Watauga rises and takes streamside trees with it. The mature canopy over older homes here means careful, technical work close to structures.",
      why: "The historic homes and river-bottom lots of Valle Crucis call for a careful hand, and that's exactly how River Birch works — big removals lowered piece by piece, mature shade trees pruned to last, and every job left clean. Homeowners here value that patience with their prized old trees.",
      extra: "Along the Watauga River bottom around the Mast General Store and Broadstone Road, Valle Crucis grows some of the largest hardwoods and sycamores in the county, while the valley walls climb into hemlock and pine. High water regularly undercuts the riverbank trees, and the mature canopy over the historic homes here calls for careful, close-quarters work.",
      faq: { q: "Do you handle large riverside trees in Valle Crucis?", a: "Yes. The Watauga River bottom grows some big hardwoods, and high water undercuts them over time. We take down and clean up leaning or storm-damaged riverside trees, working carefully around homes and banks." },
      faq2: { q: "Do you handle large riverbank trees along the Watauga in Valle Crucis?", a: "Yes — the river bottom grows big sycamores and hardwoods, and high water leans and undercuts them over time. We take them down in controlled pieces and clean up well back from the bank and any structures." },
      faq3: { q: "Can you prune the big shade trees over an older Valle Crucis home?", a: "We can — the historic properties here have mature canopy that needs periodic reduction and deadwooding to stay safe. We prune to keep the tree healthy and lower the risk over the roof." },
    },
  },
  {
    slug: "foscoe-nc", name: "Foscoe",
    character: "the community stretched along Highway 105 between Boone and Linville",
    nearby: ["valle-crucis-nc", "seven-devils-nc", "blowing-rock-nc", "boone-nc"],
    local: {
      conditions: "Foscoe runs along NC-105 in the shadow of Grandfather Mountain at roughly 3,300 feet, a corridor of steep wooded second homes and vacation rentals near the Watauga River headwaters. Tall white pine and hemlock crowd many of these lots, and the grade off 105 makes access and rigging the main challenge.",
      jobs: "Foscoe work leans toward removals and view work on steep vacation-home lots, plus storm response for the many properties here that sit empty between visits. We're often called to clear a tree off a rental or second home the owner can't get to quickly — and we handle the whole thing start to finish.",
      why: "Foscoe's many second-home and rental owners rely on River Birch to be their eyes and hands when they're not on the mountain. Send photos, and we assess, do the work, and send you the finished result — the kind of dependable, remote-friendly service that keeps 105-corridor owners calling back.",
      extra: "Foscoe strings along NC-105 between Boone and Linville under Grandfather Mountain, a corridor of steep vacation-home lots and rentals near the Watauga River headwaters. Tall white pine and hemlock crowd these lots and block the mountain views, and because many owners are only here part of the year, storm damage often sits until someone can get eyes on it.",
      faq: { q: "Can you handle a tree at my Foscoe rental or second home while I'm away?", a: "Yes — a lot of our Foscoe work is for owners who aren't on site. Send us photos and we'll assess, clear the tree, haul the debris, and send you the finished result. You don't have to be there." },
      faq2: { q: "Do you do view clearing on the steep lots along Highway 105?", a: "We do — reopening the Grandfather and valley views is one of our common Foscoe jobs. We selectively clear the pine and hemlock crowding your sightline and rig everything down on the grade off 105." },
      faq3: { q: "Can you work on a Foscoe lot with no driveway access?", a: "Usually — many lots off 105 are steep with limited access. Where a truck can't reach, we hand-carry gear in, climb the tree, and lower it in pieces, then chip or haul the debris back out." },
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
      why: "At Seven Devils elevation, homeowners want a crew that won't flinch at a near-vertical lot or a midnight ice storm. River Birch climbs and rigs where trucks can't go and runs 24/7 when the weather turns — dependability that matters when you're this high on the mountain.",
      extra: "Seven Devils climbs above 4,000 feet on the Watauga–Avery line, with resort-home lots stacked up near-vertical switchbacks around Otter Falls and the old ski slopes. At this elevation rime ice and wind snap limbs and topple exposed conifers regularly, and the driveways are often too steep for a truck, so nearly every removal here is climbed and rigged by hand.",
      faq: { q: "Do you work the steep, high-elevation lots in Seven Devils?", a: "Yes — steep is the norm up here. We climb and rig removals on grades where equipment can't go, and our 24/7 crew is ready when ice and wind bring trees down at elevation." },
      faq2: { q: "Do you work the steep switchback lots in Seven Devils?", a: "Yes — near-vertical driveways are the norm up here. Where equipment can't reach, we climb the tree and lower it in pieces on rigging lines, keeping every section off the house and the road below." },
      faq3: { q: "How bad does ice get in Seven Devils, and are you ready for it?", a: "At this elevation it's some of the heaviest in the region — rime ice loads limbs until they fail. Our crew runs 24/7 through ice season and Seven Devils is one of the first places we head when a system moves through." },
    },
  },
  {
    slug: "todd-nc", name: "Todd",
    character: "the riverside community on the Watauga–Ashe line along the New River",
    nearby: ["fleetwood-nc", "deep-gap-nc", "west-jefferson-nc", "meat-camp-nc"],
    local: {
      conditions: "Todd straddles the Watauga–Ashe line along the South Fork of the New River at around 3,000 feet, a historic riverside community where large hardwoods and sycamores grow in the river bottom. High water undercuts and leans these streamside trees, and the mature canopy over older homes near the Todd General Store needs regular attention.",
      jobs: "Todd work centers on large hardwood removals and pruning along the river and around historic properties, plus cleanup when the New River rises and takes bank trees with it. We handle the technical, close-to-structure work these mature riverside lots call for.",
      why: "Todd is a close-knit river community, and River Birch fits right in — we know the New River bottom, work carefully around the historic homes, and leave the riverbank clean. Being just up the road in Deep Gap means we answer fast on both the Watauga and Ashe sides.",
      extra: "Todd sits along the South Fork of the New River on the Watauga–Ashe line, a historic riverside community around the Todd General Store and the river greenway. Big bottomland hardwoods and sycamores line the river here, and spring high water leans and undercuts them, while the older homes keep the work close to structures and banks.",
      faq: { q: "Can you handle big riverside hardwoods in Todd?", a: "Yes — the New River bottom in Todd grows some large trees, and high water leans and undercuts them. We take down and clean up hazardous riverside hardwoods, working carefully around homes and banks." },
      faq2: { q: "Do you handle storm cleanup along the New River in Todd?", a: "Yes — when the South Fork rises it takes bank trees and drops limbs across the riverside lots. We clear downed and leaning trees, cut out hangers, and haul the debris back from the water and any buildings." },
      faq3: { q: "Can you reach properties on both the Watauga and Ashe sides of Todd?", a: "We can — Todd straddles the county line and we cover both sides from our nearby Deep Gap base, from the General Store area out along the river roads into Ashe County." },
    },
  },
  {
    slug: "meat-camp-nc", name: "Meat Camp",
    character: "the wooded community in the hills north of Boone",
    nearby: ["boone-nc", "todd-nc", "deep-gap-nc"],
    local: {
      conditions: "Meat Camp climbs into the hills north of Boone along Meat Camp Creek, around 3,200 feet, steep and heavily wooded with white pine, hemlock, and northern hardwoods. Homes here are often tucked into the timber on narrow drives, so overhanging and leaning trees close to the house are the usual concern.",
      jobs: "Meat Camp jobs are mostly technical removals in tight, wooded settings — taking down trees leaning over cabins and drives without room to fell them whole. We climb and lower these in pieces, and we handle the storm cleanup that comes with steep, forested lots.",
      why: "Meat Camp homeowners call River Birch because tight, wooded lots and narrow drives are exactly what we're built for — climbing and lowering trees off cabins by hand where no truck can reach. Careful work close to the house is our everyday, and it's earned us a steady name in these hills.",
      extra: "Meat Camp runs up the creek of the same name into the steep hills north of Boone, where homes tuck into the timber along narrow drives off Meat Camp and Bethel roads. White pine, hemlock, and northern hardwood grow tall and close to the cabins here, so leaning trees and overhanging limbs right over the roof are the everyday concern.",
      faq: { q: "Can you get equipment up the narrow drives in Meat Camp?", a: "Usually — and where a truck can't reach, we climb and rig the tree down by hand. Steep, wooded lots with tight access are routine for us in the Meat Camp area." },
      faq2: { q: "Can you remove a tree hanging over my cabin in Meat Camp?", a: "Yes — that's most of what we do up here. With no room to fell it whole, we climb above the roofline and lower the tree piece by piece on rigging so nothing touches the structure." },
      faq3: { q: "Do you handle storm cleanup on the wooded lots in Meat Camp?", a: "Yes — steep, forested lots drop limbs and whole trees in wind and ice. We clear the hazards, cut out hangers, and pack or chip the debris even where access is tight." },
    },
  },
  {
    slug: "cove-creek-nc", name: "Cove Creek",
    character: "the western Watauga community around the Cove Creek schools",
    nearby: ["sugar-grove-nc", "vilas-nc", "mabel-nc", "zionville-nc"],
    local: {
      conditions: "Cove Creek anchors the western Watauga valley around the Cove Creek schools, a mix of creek-bottom farmland and steep wooded slopes at roughly 3,000 feet. Streamside hardwoods and the timber climbing the valley walls are what most often need work on Cove Creek properties.",
      jobs: "Around Cove Creek we handle removals on sloped, wooded lots, clearing along the creek and field edges, and storm cleanup for the homes tucked back in the valley. The grades here call for proper rigging, which we bring to every job.",
      why: "Around Cove Creek, River Birch is known as the crew that shows up for both the everyday removal and the big clearing job, handling the valley's steep ground and long farm drives without complaint. That range and reliability are why the western valley keeps calling us back.",
      extra: "Cove Creek anchors the western Watauga valley around the Cove Creek schools and the Dutch Creek and Mast Gap roads, a patchwork of creek-bottom farmland and steep wooded slopes. Streamside hardwoods and the timber climbing the valley walls are the usual work, along with clearing field edges and long farm drives back into the hollows.",
      faq: { q: "Can you reach homes back in the Cove Creek valley?", a: "Yes — the western valley is well within our range from Deep Gap, and we're equipped for the steep, wooded lots and narrow drives that come with the Cove Creek area." },
      faq2: { q: "Do you clear field edges and farm drives around Cove Creek?", a: "Yes — reclaiming overgrown fence lines, opening up field edges, and clearing the long drives back to farmhouses are common Cove Creek jobs. We drop and haul the trees and grind stumps flush so the ground stays workable." },
      faq3: { q: "Can you take down a tree leaning over the creek in Cove Creek?", a: "Yes — streamside hardwoods undercut by the water are common here. We rig and lower them in pieces so nothing drops into the creek, and we clean the debris well back from the bank." },
    },
  },
  {
    slug: "zionville-nc", name: "Zionville",
    character: "the community near the Tennessee line in northwestern Watauga County",
    nearby: ["mabel-nc", "trade-nc", "vilas-nc", "cove-creek-nc"],
    local: {
      conditions: "Zionville sits in the northwestern corner of Watauga County near the Tennessee line at about 3,000 feet, rolling farmland and wooded ridges in the Cove Creek headwaters. Old farm hardwoods, windbreak rows, and roadside trees along the state-line highways are the usual work here.",
      jobs: "In Zionville we do a lot of acreage clearing and farm-tree removal — taking out dead or hazardous trees around barns and homes, clearing fence lines, and grinding stumps on working and reclaimed land. We cover Zionville and the NC/TN line communities right alongside our core Watauga service area.",
      why: "Up on the Tennessee line, Zionville folks want a tree company that treats a state-line farm job as seriously as an in-town one. River Birch travels here routinely from Deep Gap, does the acreage and windbreak work right, and cleans up — the dependable presence a rural corner appreciates.",
      extra: "Zionville sits in Watauga's northwest corner along US-421 toward the Tennessee line, rolling farm country in the Cove Creek headwaters with wooded ridges between the fields. Old farm hardwoods, windbreak rows, and roadside trees along the state-line highways are the recurring work, plus clearing reclaimed pasture on the larger tracts.",
      faq: { q: "Do you serve the NC/TN line around Zionville?", a: "Yes — Zionville and the state-line communities are part of our regular service area. We're based just down the road in Deep Gap and cover this northwestern corner of the county routinely." },
      faq2: { q: "Can you take out a row of old windbreak trees in Zionville?", a: "We can — overgrown or dying windbreak and fence-line rows are common out here. We remove them safely away from buildings and stock and grind the stumps so you can re-fence or replant." },
      faq3: { q: "Do you handle farm and acreage tree work near Zionville?", a: "Yes — dropping dead or hazardous trees around barns and homes, clearing pasture and fence lines, and grinding stumps is most of what we do in this corner of the county." },
    },
  },
  {
    slug: "mabel-nc", name: "Mabel",
    character: "the rural farm community in the northwestern corner of the county",
    nearby: ["zionville-nc", "cove-creek-nc", "vilas-nc"],
    local: {
      conditions: "Mabel is high, rural farm country in the far northwestern corner of Watauga County, near 3,400 feet, with open pasture broken by wooded draws and windbreaks. The exposed trees around farms here take real wind, and aging hardwoods over homes and barns are the common hazard.",
      jobs: "Mabel work is mostly acreage and farm-focused — removing dead or leaning trees near buildings, clearing overgrown pasture and fence lines, and grinding stumps so the land can be worked. We travel to Mabel and the surrounding line communities from our nearby Deep Gap base.",
      why: "Mabel is far-flung farm country, but River Birch covers it like any other part of the county — same fair pricing, same 24/7 response, same clean finish. Farm families here trust us with the aging trees over their barns and homes because we drop them safely, every time.",
      extra: "Mabel is high, open farm country in Watauga's far northwest corner near 3,400 feet, where pasture is broken by wooded draws and windbreaks that take real wind off the ridges. Aging hardwoods over farmhouses and barns are the common hazard, and reclaiming overgrown pasture and fence lines is steady work on the larger Mabel tracts.",
      faq: { q: "Do you take on farm and acreage tree work in Mabel?", a: "Yes — that's most of what we do in Mabel. We clear pasture and fence lines, drop hazardous trees around barns and homes, and grind the stumps so you can put the ground back to use." },
      faq2: { q: "Is Mabel too far out for River Birch to reach?", a: "Not at all — we travel to Mabel and the surrounding line communities routinely from our Deep Gap base. The distance doesn't change our pricing or our response for the northwest corner of the county." },
      faq3: { q: "Can you remove a big shade tree leaning over a Mabel farmhouse?", a: "Yes — aging hardwoods over homes and barns are the common hazard out here in the wind. We drop them safely away from the buildings in controlled pieces and grind the stump." },
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
      why: "Just over the line in Trade, homeowners get the same River Birch crew our NC neighbors rely on — fully insured, careful around the old homesteads, and quick to reach straight down US-421. Being a short drive away means Trade never feels like an afterthought.",
      extra: "Trade lies just over the Tennessee line from Zionville along US-421 — the oldest unincorporated town in Tennessee — in the same headwater farm country as our northwest Watauga communities. Rural homesteads, wooded slopes, and old shade trees around the farms define the work, and it's a short reach for us straight down the highway.",
      faq: { q: "Does River Birch cross into Trade, TN?", a: "Yes — Trade is right on our doorstep across the state line, and we serve it alongside the NC line communities. Call us for the same tree removal, clearing, and storm work we do throughout the area." },
      faq2: { q: "Do you need a Tennessee license to work in Trade?", a: "No — neither Carolina nor Tennessee issues a state arborist license, so insurance is what protects your property on either side of the line. River Birch is fully insured and works Trade the same as our NC communities." },
      faq3: { q: "Do you handle old homestead trees around Trade?", a: "We do — the big shade trees and windbreaks around the older Trade homesteads are common work. We remove the hazardous ones away from the house and outbuildings and grind the stumps." },
    },
  },
  {
    slug: "triplett-nc", name: "Triplett",
    character: "the community in eastern Watauga County near the Wilkes line",
    nearby: ["deep-gap-nc", "todd-nc"],
    local: {
      conditions: "Triplett lies in eastern Watauga County toward the Wilkes line, rural and wooded around the Elk Creek headwaters at roughly 3,000 feet. Homes are spread along the creek and up the hollows here, with mature hardwood and pine that storms regularly bring down across drives and lines.",
      jobs: "In Triplett we do a lot of storm and hazard removal on rural, wooded lots, clearing trees off long private drives and grinding stumps on acreage. It's an easy reach from our Deep Gap base, so we respond quickly when a tree comes down out this way.",
      why: "Triplett's rural, wooded hollows mean a lot of storm and hazard work, and River Birch is the crew folks here count on to open a blocked drive fast and clear the leftover danger trees. An easy run east from Deep Gap keeps our response quick when the weather hits.",
      extra: "Triplett lies in eastern Watauga toward the Wilkes line around the Elk Creek headwaters, rural and wooded with homes spread along the creek and up the hollows off Triplett and Elk Creek roads. Mature hardwood and pine grow close to the long private drives here, and storms regularly drop them across the lanes and against outbuildings.",
      faq: { q: "Do you clear trees off long private drives in Triplett?", a: "Yes — rural drives blocked by a downed tree are a common Triplett call. We cut through, clear the drive, and haul off the debris, then handle any remaining hazard trees along it." },
      faq2: { q: "How fast can you reach Triplett after a storm?", a: "Quickly — Triplett is an easy run east from our Deep Gap base. We answer 24/7 and get out to the Elk Creek hollows fast when a tree comes down across a drive or on a building." },
      faq3: { q: "Can you grind stumps and clear acreage in Triplett?", a: "Yes — beyond storm work we clear overgrown acreage, drop hazardous trees around rural homes, and grind stumps flush so the ground goes back to use." },
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
      why: "Banner Elk's mix of college-town lots and resort second homes means River Birch handles everything from tight in-town removals to absentee-owner storm calls — billing property managers directly and sending photos of the finished job. That flexibility is why so much of our Banner Elk work is repeat business.",
      extra: "Banner Elk fills the valley between Sugar and Beech Mountains around Lees-McRae College and the Elk River headwaters, mixing tight in-town college lots with steep resort second homes up toward the ski slopes. Ice and wind off the surrounding 5,000-foot peaks keep hazard work steady, and the summer-resident pattern means a lot of storm damage waits for a call from out of town.",
      faq: { q: "Can you handle a tree at my Banner Elk second home while I'm away?", a: "Yes — much of our Banner Elk work is for owners who aren't on site. Send us photos and we'll assess, clear the tree, haul the debris, and send you the finished result. You don't have to be there." },
      faq2: { q: "Can you bill a property manager for tree work in Banner Elk?", a: "Yes — much of our Banner Elk work is on rentals and second homes, and we regularly bill owners or property managers directly. Send photos, we'll quote it, do the work, and send you the finished pictures." },
      faq3: { q: "Do you work the tight lots near Lees-McRae in Banner Elk?", a: "We do — in-town lots near the college are close-quartered with cars and foot traffic, so we rope and lower everything in pieces and clean up fully. Tight access is routine for us here." },
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
      why: "At the top of the mountain, Beech homeowners need a crew that understands extreme ice and near-vertical lots — and heads up as soon as it's safe after a storm. River Birch brings the climbing skill, the rigging, and the 24/7 readiness that 5,000 feet demands.",
      extra: "Beech Mountain tops out above 5,000 feet, the highest town in the eastern US, where nearly every property is a wooded second home or rental on a steep, switchbacked lot. Rime ice, freezing fog, and hard wind load the stunted conifers and brittle hardwoods far past what lower elevations see, so ice failures and wind-throw are the defining tree problems up here.",
      faq: { q: "Do you clear storm and ice damage on Beech Mountain?", a: "Constantly — at 5,000-plus feet Beech takes the heaviest ice in the area, and our 24/7 crew is ready when it brings trees down. We rig and lower removals on the steep lots by hand where equipment can't reach." },
      faq2: { q: "Why do trees fail so often on Beech Mountain?", a: "Elevation — above 5,000 feet, rime ice and freezing fog coat limbs until they snap, and constant wind topples exposed conifers. It's a harsher load than anywhere lower, which is why hazard assessment and ice-season readiness matter so much on Beech." },
      faq3: { q: "Can you reach my Beech Mountain place on a steep, icy drive?", a: "Usually — we're built for the switchback lots up here. Where a truck can't make the grade, we climb and rig the tree down by hand, and our 24/7 crew heads up as soon as it's safe after an ice event." },
    },
  },
  {
    slug: "sugar-mountain-nc", name: "Sugar Mountain", county: "Avery County",
    character: "the ski-resort village on the slopes above Banner Elk",
    nearby: ["banner-elk-nc", "beech-mountain-nc", "linville-nc", "seven-devils-nc"],
    local: {
      conditions: "Sugar Mountain climbs the slopes above Banner Elk past 4,000 feet, a resort village of ski-in second homes and condos on some of the steepest lots in the county. Tall white pine and hemlock crowd the views here, and the elevation brings the same ice loading and wind-throw that hit the neighboring peaks.",
      jobs: "View clearing and steep-lot removals drive most Sugar Mountain work — opening up the slope and long-range views owners bought the property for, and taking down ice-damaged conifers on grades that demand full rigging. We also handle storm cleanup for the many units that sit empty midweek and off-season.",
      why: "Sugar Mountain's ski-in owners call River Birch for the delicate view work and the ice cleanup their steep lots demand, knowing we'll rig everything down safely and leave the place guest-ready. Careful, thorough work on tough grades keeps the referrals coming here.",
      extra: "Sugar Mountain climbs the ski slopes above Banner Elk past 4,000 feet, a village of ski-in second homes and condos on some of the steepest lots in Avery County. Tall white pine and hemlock crowd the slope and long-range views owners came for, and the elevation brings the same ice loading and wind-throw as the neighboring peaks.",
      faq: { q: "Do you do view clearing on Sugar Mountain?", a: "Yes — it's one of our most-requested jobs up here. We selectively clear and reduce trees to reopen your slope and long-range views while keeping the lot healthy and screened where you still want privacy." },
      faq2: { q: "Can you handle removals on the steep condo and ski-in lots here?", a: "We can — the grades on Sugar Mountain demand full rigging, and that's how we work. We climb and lower ice-damaged and crowding trees in controlled pieces where equipment simply can't reach." },
      faq3: { q: "Do you handle storm cleanup for Sugar Mountain units that sit empty?", a: "Yes — many units are empty midweek and off-season, so we assess from photos, clear the damage, and haul it off without you needing to be there." },
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
      why: "Linville's prestige, view-driven properties call for discretion and a careful hand, and that's how River Birch works — coordinating with gated communities, protecting long-range views, and treating high-value homes with the caution they deserve. Owners here value a crew they can trust on the lot when they're away.",
      extra: "Much of Linville's high-value property sits within gated communities and along the NC-105 and US-221 corridors below Grandfather, where access, staging, and coordinating with the community matter as much as the climb itself. Many are seasonal homes, so hazard trees and view work are often scheduled and handled while owners are away.",
      faq: { q: "Can you do view and hazard work on a Linville Ridge lot?", a: "Yes — we're set up for the prestige, view-driven lots around Linville and Grandfather Mountain. We selectively clear for long-range views and take down hazard trees with careful rigging close to high-value homes." },
      faq2: { q: "Do you work in gated communities around Linville?", a: "Yes — we coordinate with gate and community requirements and are set up for the prestige, view-driven lots around Linville and Grandfather. We handle careful view clearing and hazard removals close to high-value homes." },
      faq3: { q: "Can you protect a long-range Grandfather view without over-cutting?", a: "That's the goal on every Linville view job — we selectively reduce and remove only what's blocking the sightline, keeping a healthy screen and the character of the lot intact." },
    },
  },
  {
    slug: "newland-nc", name: "Newland", county: "Avery County",
    character: "the Avery County seat and highest county seat in the eastern United States",
    nearby: ["linville-nc", "banner-elk-nc", "sugar-mountain-nc"],
    local: {
      conditions: "Newland is the seat of Avery County and, at about 3,600 feet, the highest county seat in the eastern US, set in the open Toe River valley ringed by wooded ridges. It's a year-round working town — older in-town lots with mature shade trees, surrounding farmland, and homes tucked against the timbered slopes.",
      jobs: "Newland keeps us busy with everyday tree work for year-round residents — removing dead and hazardous hardwoods around homes and outbuildings, trimming mature shade trees, clearing acreage and fence lines, and grinding stumps. It's a central base for reaching the rest of Avery County.",
      why: "Newland is a working town, and River Birch is the everyday crew its year-round residents rely on — hazard removals, shade-tree pruning, land clearing, and stump grinding at a fair price. Being central to Avery makes us an easy call for the whole county.",
      extra: "Newland anchors the open Toe River valley near the junction of US-19E and NC-194, ringed by farmland and wooded ridges rather than the resort slopes of the higher towns. Older in-town lots carry mature shade trees over homes and the county buildings, and the surrounding acreage brings steady clearing, farm-tree, and stump work.",
      faq: { q: "Does River Birch serve Newland and the rest of Avery County?", a: "Yes — Newland is our anchor for Avery County work, and we cover the county seat and surrounding communities routinely from our nearby Deep Gap base. Call us for removal, trimming, clearing, storm cleanup, or stump grinding." },
      faq2: { q: "Do you serve year-round residents in Newland, not just resort owners?", a: "Absolutely — Newland is a working town and most of our jobs here are everyday residential and farm work: hazard removals, shade-tree pruning, land clearing, and stump grinding for people who live here full time." },
      faq3: { q: "Can you clear acreage and grind stumps around Newland?", a: "Yes — the farmland and wooded lots around the county seat bring steady clearing and stump work. We open up fields and building sites, drop hazardous trees, and grind the stumps flush so the ground goes back to use." },
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
      why: "In West Jefferson's busy downtown, River Birch is the crew that can take a tree off a storefront without disrupting the block — climbing above the roofline, working around parking and foot traffic, and cleaning up fully. That careful in-town skill has made us a trusted name across Ashe County.",
      extra: "West Jefferson centers on its walkable downtown arts district and the shops along Jefferson Avenue, with mature street trees over tight in-town lots and wooded residential blocks climbing toward Mount Jefferson. Downtown removals are close-quartered work over buildings and parked cars, while the state-park slopes bring the steeper, hazard-prone lots on the edges of town.",
      faq: { q: "Can you remove a tree on a tight lot in downtown West Jefferson?", a: "Yes — most in-town West Jefferson jobs have no room to fell a tree whole, so we climb and lower it in pieces. We're set up for tight access, parked cars, and neighbors close on both sides." },
      faq2: { q: "Can you work over a downtown West Jefferson storefront?", a: "Yes — downtown lots leave no room to drop a tree whole, so we climb above the roofline and lower it in pieces, working around storefronts, parking, and foot traffic. Tight commercial access is routine for us." },
      faq3: { q: "Do you cover the wooded lots up around Mount Jefferson?", a: "We do — the slopes around Mount Jefferson bring steep, hazard-prone lots, and we're equipped to rig removals and view work on that grade above the west side of town." },
    },
  },
  {
    slug: "jefferson-nc", name: "Jefferson", county: "Ashe County",
    character: "the Ashe County seat below Mount Jefferson",
    nearby: ["west-jefferson-nc", "fleetwood-nc", "lansing-nc"],
    local: {
      conditions: "Jefferson is the seat of Ashe County, set near 3,000 feet just below Mount Jefferson and the South Fork of the New River, a year-round town of older residential lots, county offices, and surrounding farmland. Mature shade trees over established homes and roadside hardwoods are the common work here.",
      jobs: "In Jefferson we handle everyday removals and pruning for year-round residents, hazard trees around homes and outbuildings, and cleanup after the storms that funnel through the New River valley. It pairs with neighboring West Jefferson as our base for covering the rest of Ashe County.",
      why: "Jefferson's year-round residents call River Birch for the steady, everyday tree work their older neighborhoods need — reductions, deadwooding, hazard removals, and storm cleanup done right. Anchored next door in West Jefferson, we're an easy, dependable call for the county seat.",
      extra: "Jefferson sits below Mount Jefferson near the South Fork of the New River, a year-round county seat of older residential streets, county offices, and surrounding farmland rather than resort lots. Mature shade trees over established homes and roadside hardwoods are the common work, along with cleanup after storms funnel down the New River valley.",
      faq: { q: "Do you serve Jefferson and greater Ashe County?", a: "Yes — Jefferson and West Jefferson are our anchors for Ashe County, and we cover the county seat and surrounding communities routinely. Call River Birch for removal, trimming, clearing, storm cleanup, or stump grinding." },
      faq2: { q: "Do you serve the residential neighborhoods around Jefferson?", a: "Yes — the older streets around the county seat have mature shade trees that need reduction, deadwooding, and the occasional hazard removal. We do that everyday residential work throughout Jefferson." },
      faq3: { q: "Can you handle both Jefferson and West Jefferson from one call?", a: "We can — the two towns sit side by side and we cover them together as our anchor for Ashe County. One call gets you a crew for either, plus the surrounding communities." },
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
      why: "Fleetwood gets River Birch's fastest Ashe-County response because it's practically next door to our Deep Gap base. Riverside families here trust us to handle the New River's big hardwoods and clean up the bank properly — quick to reach and thorough once we're there.",
      extra: "Fleetwood spreads along the South Fork of the New River and the Idlewild and Fleetwood-Todd roads near the Ashe–Watauga line, a rural riverside mix of farmland, second homes, and wooded lots. Big river-bottom hardwoods and sycamores grow along the water, and spring high water leans and undercuts them over time.",
      faq: { q: "Can you handle riverside trees in Fleetwood?", a: "Yes — the New River bottom in Fleetwood grows big hardwoods, and high water undercuts them. We take down and clean up leaning or storm-damaged riverside trees, working carefully around homes and banks — and we're close by in Deep Gap." },
      faq2: { q: "How quickly can you reach Fleetwood?", a: "Very quickly — Fleetwood is one of the closest Ashe communities to our Deep Gap base, just over the line near Todd. That means fast response for storm damage and easy scheduling for planned work." },
      faq3: { q: "Do you clear trees and brush on wooded Fleetwood lots?", a: "Yes — beyond the riverbank work we clear building sites, driveways, and overgrown lots on the farm and second-home properties here, hauling or chipping the debris and grinding the stumps." },
    },
  },
  {
    slug: "lansing-nc", name: "Lansing", county: "Ashe County",
    character: "the small northern-Ashe town in the heart of Christmas-tree country",
    nearby: ["west-jefferson-nc", "jefferson-nc"],
    local: {
      conditions: "Lansing sits in northern Ashe County near Big Horse Creek and the New River around 3,000 feet, a small town surrounded by rolling farmland and some of the most productive Fraser-fir Christmas-tree country in the state. Field-edge hardwoods, windbreak rows, and old homestead shade trees are the usual work on Lansing-area properties.",
      jobs: "Around Lansing we do a lot of acreage and farm-focused work — clearing land and fence lines, removing dead or hazardous trees around homes, barns, and tree-farm fields, and grinding stumps so the ground can be worked or replanted. We cover northern Ashe alongside our core High Country service area.",
      why: "Around Lansing, River Birch works hand-in-hand with the Fraser-fir growers and farm families who make up the community — clearing field edges on the farm's schedule, dropping hazard trees, and grinding stumps between rotations. That willingness to work the land's calendar is why northern Ashe keeps calling.",
      extra: "Around Lansing the work follows the farm calendar as much as the weather — clearing access and field edges for the Fraser-fir growers, dropping hazardous hardwoods along the tree-farm boundaries, and grinding stumps between rotations. The rural roads and creek bottoms off NC-194 also bring the usual homestead shade-tree and windbreak work.",
      faq: { q: "Do you clear land and farm trees around Lansing?", a: "Yes — land and fence-line clearing and farm-tree removal are a big part of what we do in the Lansing area. We can open up fields and building sites, drop hazardous trees around barns and homes, and grind the stumps so the ground is ready to use." },
      faq2: { q: "Do you work around Christmas-tree farms near Lansing?", a: "Yes — Lansing is Fraser-fir country, and we clear field edges and access, remove hazardous hardwoods around the fields and homesteads, and grind stumps so ground can be worked or replanted. We work around the farm's schedule." },
      faq3: { q: "Can you remove windbreak and homestead trees in Lansing?", a: "We can — overgrown windbreak rows and aging shade trees around the older Lansing homesteads are common work. We drop them safely away from buildings and grind the stumps flush." },
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
    title: cfg.seoTitle ?? `Tree Service in ${name}, ${state} | Tree Removal & Storm Cleanup | River Birch`,
    metaDescription: cfg.seoMetaDescription ?? `Fully-insured tree removal, 24/7 storm & ice cleanup, trimming, stump grinding & land clearing in ${name}, ${state}. Local River Birch crew, 5.0★ on Google. Free estimates — ${PHONE}.`,
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
      { tag: "p", html: cfg.local.why },
      { tag: "h2", html: `Tree Conditions in ${name}` },
      { tag: "p", html: cfg.local.conditions },
      { tag: "p", html: cfg.local.jobs },
      { tag: "p", html: cfg.local.extra },
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
      cfg.local.faq2,
      cfg.local.faq3,
      ...(cfg.extraFaqs ?? []),
      { q: `Is River Birch insured, and do you need a license in ${state}?`, a: `River Birch Tree Service LLC is fully insured for tree work in ${name} and throughout ${county}. ${state === "TN" ? "Neither Carolina nor Tennessee issues a state arborist license" : "North Carolina has no state arborist license"}, so insurance is what actually protects your property — and we carry it on every job. Estimates are always free — call ${PHONE}.` },
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
