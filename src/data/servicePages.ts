// Per-page copy for the 6 Tier-1 service pages. Rendered by [service].astro.
// Titles / H1 / meta live in services.ts. Tree-service section stack:
// Hero → ProofStrip → ProcessSteps → ActionShot → Differentiators → Reviews →
// FAQ → ServiceArea → FinalCta → ContactForm → RelatedServices.

export type Cell = "yes" | "no" | "sometimes";

export interface ServicePageData {
  hero: { emergencyTag: string; subtitle: string; trustSignals: string[]; secondaryCta?: string };
  action: { heading: string; text: string; eyebrow?: string };
  process: { title: string; sub: string; ctaLabel: string; steps: { title: string; text: string }[] };
  differentiators: { title: string; sub: string; rows: { feature: string; others: Cell; cpr: Cell }[] };
  faqTitle: string; faqSub: string; faqCtaLabel: string;
  faq: { q: string; a: string }[];
  related: { title: string; sub: string; cards: { title: string; text: string; href: string }[] };
  reviewsTitle: string; reviewsSub: string;
  finalCta: string; contactHeading: string; contactDesc: string;
  areaTitle: string; areaSub: string; areaInfoHeading: string; areaInfoBlurb: string;
}

// Shared differentiator table — same "why River Birch" comparison across pages.
const DIFF_ROWS: { feature: string; others: Cell; cpr: Cell }[] = [
  { feature: "Fully insured on every job", others: "sometimes", cpr: "yes" },
  { feature: "Technical removals near homes & power lines", others: "sometimes", cpr: "yes" },
  { feature: "24/7 emergency storm & ice response", others: "no", cpr: "yes" },
  { feature: "Complete cleanup & debris haul-away", others: "sometimes", cpr: "yes" },
  { feature: "Careful, low-impact work on steep mountain lots", others: "no", cpr: "yes" },
  { feature: "Free, no-pressure estimates", others: "sometimes", cpr: "yes" },
  { feature: "Local, High Country–based crew", others: "sometimes", cpr: "yes" },
  { feature: "Locally owned & operated", others: "sometimes", cpr: "yes" },
];

const AREA = {
  areaTitle: "Serving Deep Gap, Boone & the High Country",
  areaSub: "Locally owned and based in Deep Gap, we cover Watauga County and the surrounding High Country. Pick your town for local details.",
  areaInfoHeading: "Fast Response Across Watauga County",
  areaInfoBlurb: "From Deep Gap we reach Boone, Blowing Rock, Vilas, Sugar Grove and the rest of the county quickly — and we travel for large jobs beyond the county line.",
};

export const servicePages: Record<string, ServicePageData> = {
  "tree-removal": {
    hero: {
      emergencyTag: "🌲 Fully-Insured Tree Removal",
      subtitle:
        "Dead, leaning, or dangerous tree — even one tight against your house or the power line? River Birch removes it safely, ropes it down piece by piece where it counts, and hauls off every bit of debris. Free estimates, fully insured.",
      trustSignals: ["5.0★ on Google", "Fully Insured", "Technical Removals", "Free Estimates"],
      secondaryCta: "Get a Free Estimate",
    },
    action: {
      eyebrow: "On the job in the High Country",
      heading: "Big trees, tight spaces — handled safely",
      text: "Mountain lots don't leave much room for error. Our crew climbs and rigs, lowering heavy limbs and sections in controlled pieces so nothing hits the roof, the deck, or the line. Then we clean up like we were never there.",
    },
    process: {
      title: "How a River Birch Tree Removal Works",
      sub: "A clear plan from the free estimate to the final rake-down. Here's what to expect.",
      ctaLabel: "Got a tree you're worried about? We'll take a look for free — call anytime.",
      steps: [
        { title: "Free On-Site Estimate", text: "We come look at the tree, the lean, and what's around it — house, lines, driveway — and give you a clear, no-pressure written price." },
        { title: "A Safe Removal Plan", text: "For tight or hazardous trees we climb and rig, lowering limbs and sections with ropes instead of dropping them. Open lots we can fell and process fast." },
        { title: "Careful, Insured Takedown", text: "Our fully-insured crew takes the tree down in controlled pieces, protecting your home, deck, fence, and landscaping the whole way." },
        { title: "Full Cleanup & Haul-Away", text: "We chip the brush, cut the wood to your preference, grind the stump if you'd like, and rake the site clean before we leave." },
      ],
    },
    differentiators: {
      title: "Why Homeowners Call River Birch First",
      sub: "A lot of outfits will drop a tree. Fewer will take down a hazardous one near your house safely, insured, and leave your yard clean. That's the whole job for us.",
      rows: DIFF_ROWS,
    },
    faqTitle: "Tree Removal Questions",
    faqSub: "Straight answers about safe, insured tree removal in Boone and the High Country.",
    faqCtaLabel: "Have a tree you're not sure about? Call River Birch — we'll take a look.",
    faq: [
      { q: "Can you remove a tree that's close to my house or a power line?", a: "Yes. Technical removals near homes and power lines are what we do best. Instead of felling the whole tree, we climb it and rope down limbs and trunk sections in controlled pieces so nothing hits the structure. River Birch is fully insured for exactly this kind of work." },
      { q: "Do you remove the stump too?", a: "We can. Removal and <a href=\"/stump-grinding\">stump grinding</a> are separate steps, so just let us know when we give the estimate and we'll grind the stump below grade and clean up the chips." },
      { q: "Is River Birch insured?", a: "Yes — River Birch Tree Service LLC is fully insured for tree work. Tree removal in North Carolina doesn't require a state arborist license, but insurance is what actually protects you and your property, and we carry it on every job." },
      { q: "How much does tree removal cost?", a: "It depends on the tree's size, its lean, and what's around it — a big pine leaning over the roof takes more rigging than an open-lot removal. We give a free on-site estimate with a firm written price before any work starts." },
      { q: "Do you clean up afterward?", a: "Always. Cleanup and haul-away are included. We chip the brush, cut the wood to your preference, and rake the area so your yard looks better than when we got there." },
    ],
    related: {
      title: "Related Services",
      sub: "Other ways the River Birch crew can help around your High Country property.",
      cards: [
        { title: "Stump Grinding", text: "Grind that stump below grade and reclaim the spot for good.", href: "/stump-grinding" },
        { title: "Emergency Storm & Ice Cleanup", text: "Tree down after a storm? We respond 24/7 across the High Country.", href: "/storm-damage-tree-removal" },
        { title: "Tree Trimming & Pruning", text: "Keep the trees you're keeping healthy, safe, and well-shaped.", href: "/tree-trimming-pruning" },
      ],
    },
    reviewsTitle: "What Your High Country Neighbors Say",
    reviewsSub: "Real 5-star Google reviews from homeowners around Watauga County.",
    finalCta: "Dangerous Tree on Your Property? Let's Take a Look.",
    contactHeading: "Get Your Free Tree Removal Estimate",
    contactDesc: "Send us a few details or call — we'll come out, look at the tree, and give you a clear, no-pressure price. For a tree that's already a hazard, call us right away.",
    ...AREA,
  },

  "storm-damage-tree-removal": {
    hero: {
      emergencyTag: "🚨 24/7 Emergency Storm & Ice Response",
      subtitle:
        "Tree down on your house, drive, or across the road after a High Country storm or ice event? River Birch answers 24/7. We make the property safe, clear the tree, and haul off the debris — fully insured, any hour.",
      trustSignals: ["24/7 Emergency", "5.0★ on Google", "Fully Insured", "Fast Response"],
      secondaryCta: "Request Emergency Help",
    },
    action: {
      eyebrow: "When the mountains get hit",
      heading: "Storm or ice — we're out and working",
      text: "Boone and Deep Gap take some of the worst ice and wind in the state. When a tree comes down, our crew rolls out to make the scene safe, cut the tree off the structure or roadway, and clear the mess so you can get back to normal.",
    },
    process: {
      title: "How Emergency Storm Cleanup Works",
      sub: "When a tree is down, minutes matter. Here's how we get you safe and clear, fast.",
      ctaLabel: "Tree down right now? Don't wait — call River Birch, we're on 24/7.",
      steps: [
        { title: "Call Our 24/7 Line", text: "Reach a real local crew any hour — day, night, weekend, holiday. Tell us what's down and where, and we head your way." },
        { title: "Make the Scene Safe", text: "We assess hazards first — leaning trunks, tension in fallen limbs, anything near a line — and secure the area before we start cutting." },
        { title: "Clear the Tree", text: "We cut the tree off your home, driveway, or roadway in controlled sections and remove the weight from the structure carefully." },
        { title: "Clean Up & Haul Off", text: "We chip the brush, clear the debris, and leave the site safe. Need a full removal or stump grind after? We handle that too." },
      ],
    },
    differentiators: {
      title: "Why River Birch for Storm Emergencies",
      sub: "In an ice storm you want a crew that actually answers, knows how to work a tree under tension, and carries insurance. That's us.",
      rows: DIFF_ROWS,
    },
    faqTitle: "Emergency Storm & Ice Questions",
    faqSub: "What to know when a tree comes down in the High Country.",
    faqCtaLabel: "Emergency right now? Call River Birch — we answer 24/7.",
    faq: [
      { q: "Do you really answer 24/7?", a: "Yes. Storms and ice don't keep business hours in the High Country, so neither do we. Call (828) 964-6567 any hour and you'll reach a local River Birch crew for emergency storm and ice-damage tree work." },
      { q: "A tree fell on my house — what do I do first?", a: "Get everyone out of the affected area and call us right away. If a power line is involved, stay well clear and call your utility and 911 first. Then call River Birch — we'll secure the tree and get it off the structure safely." },
      { q: "Will my homeowner's insurance cover storm tree damage?", a: "Often, yes — when a tree hits a covered structure, many policies help with removal and repair. We document the scene with photos and provide an itemized invoice you can submit to your insurer. Coverage is between you and your carrier, but we make the paperwork easy." },
      { q: "How fast can you get here?", a: "As fast as conditions safely allow. We're based right in Deep Gap, so we're already in the High Country — no waiting on a crew to drive up the mountain from out of the area." },
      { q: "Do you handle ice-damage cleanup too?", a: "Yes. Ice loads snap limbs and split trunks all over Watauga County. We clear ice-damaged trees and limbs, then can prune or remove what's left compromised so it doesn't come down on the next storm." },
    ],
    related: {
      title: "Related Services",
      sub: "After the emergency, the River Birch crew can finish the job.",
      cards: [
        { title: "Tree Removal", text: "Full, safe removal of storm-damaged or compromised trees.", href: "/tree-removal" },
        { title: "Tree Trimming & Pruning", text: "Clean up broken and hanging limbs before they fall.", href: "/tree-trimming-pruning" },
        { title: "Stump Grinding", text: "Grind out the stump once the tree is down and gone.", href: "/stump-grinding" },
      ],
    },
    reviewsTitle: "Neighbors We've Helped After the Storm",
    reviewsSub: "Real 5-star Google reviews from Watauga County homeowners.",
    finalCta: "Tree Down? We're Here 24/7 — Call Now.",
    contactHeading: "Get Emergency Storm Help",
    contactDesc: "For a tree that's down right now, call us — we answer 24/7. For non-urgent storm cleanup, send the details and we'll get right back to you.",
    ...AREA,
  },

  "land-clearing": {
    hero: {
      emergencyTag: "🌲 Land, Lot & Driveway Clearing",
      subtitle:
        "Building, expanding, or just opening up an overgrown mountain lot? River Birch clears trees, brush, and undergrowth for home sites, driveways, and fence lines across Watauga County — fully insured, with careful, low-impact work on steep ground.",
      trustSignals: ["Fully Insured", "Steep-Lot Experience", "5.0★ on Google", "Free Estimates"],
      secondaryCta: "Get a Free Estimate",
    },
    action: {
      eyebrow: "Building in the High Country",
      heading: "Clear the lot, keep what matters",
      text: "Whether you're prepping a home site, cutting in a driveway, or reclaiming an overgrown parcel, we clear what needs to go and protect the trees and features you want to keep — working carefully on the steep, rocky ground the High Country is known for.",
    },
    process: {
      title: "How Land & Lot Clearing Works",
      sub: "From walk-through to a clean, build-ready lot. Here's the process.",
      ctaLabel: "Got a lot or driveway to clear? Let's walk it together — free estimate.",
      steps: [
        { title: "Walk the Property Together", text: "We walk the lot with you, mark what stays and what goes, talk access and slope, and give you a clear written estimate." },
        { title: "A Clearing Plan That Fits the Site", text: "Steep or rocky mountain lots need the right approach. We plan the clearing to protect the soil, drainage, and any trees you're keeping." },
        { title: "Insured, Careful Clearing", text: "Our fully-insured crew removes trees, brush, and undergrowth for your home site, driveway, or fence line — safely and cleanly." },
        { title: "Haul, Chip & Grade-Ready Cleanup", text: "We chip and haul the debris and grind stumps where needed, leaving the lot ready for the next step of your project." },
      ],
    },
    differentiators: {
      title: "Why River Birch for Lot Clearing",
      sub: "Clearing a mountain lot isn't like clearing flat farmland. You want a crew that respects the slope, the drainage, and the trees you're keeping — and carries insurance.",
      rows: DIFF_ROWS,
    },
    faqTitle: "Land & Lot Clearing Questions",
    faqSub: "What to know about clearing mountain property in Watauga County.",
    faqCtaLabel: "Planning a build or clearing a lot? Call River Birch for a free look.",
    faq: [
      { q: "Do you clear steep mountain lots?", a: "Yes — steep, wooded, rocky High Country lots are our normal terrain. We plan each clearing around the slope and access so we protect the soil and drainage while getting the site ready." },
      { q: "Can you leave certain trees standing?", a: "Absolutely. We walk the property with you first and mark exactly what stays and what goes. Selective clearing that keeps your best trees is one of the things we do well." },
      { q: "Do you handle driveways and fence lines?", a: "Yes. Cutting in a new driveway, widening an existing one, or clearing a fence line are all common jobs for us across Deep Gap, Boone, and the rest of the county." },
      { q: "Do I need a permit to clear my land?", a: "It depends on the town, the scope, and things like grading and stream buffers. We'll tell you what we see and point you to the right local office, but confirming permits is ultimately the property owner's responsibility." },
      { q: "What happens to the trees and brush?", a: "We chip the brush, cut and stack or haul the wood based on what you want, and can grind the stumps — leaving the lot clean and ready for grading or building." },
    ],
    related: {
      title: "Related Services",
      sub: "Round out your clearing project with the rest of what we do.",
      cards: [
        { title: "Tree Removal", text: "Individual removals for the big trees on your lot.", href: "/tree-removal" },
        { title: "Stump Grinding", text: "Grind stumps below grade so the lot is build-ready.", href: "/stump-grinding" },
        { title: "Grading & Retaining Walls", text: "After clearing, we grade the site and build the walls that hold your slope.", href: "/property-services" },
      ],
    },
    reviewsTitle: "Property Owners We've Worked With",
    reviewsSub: "Real 5-star Google reviews from around the High Country.",
    finalCta: "Ready to Clear Your Lot? Let's Walk It.",
    contactHeading: "Get Your Free Clearing Estimate",
    contactDesc: "Tell us about your lot, driveway, or project and we'll set up a free on-site walk-through and written estimate.",
    ...AREA,
  },

  "tree-trimming-pruning": {
    hero: {
      emergencyTag: "🌳 Tree Trimming & Pruning",
      subtitle:
        "Overgrown limbs on the roof, branches over the drive, or trees that just need shaping? River Birch trims and prunes to keep your trees healthy, safe, and looking their best across Boone, Blowing Rock, and the High Country — fully insured.",
      trustSignals: ["Healthy-Tree Pruning", "Fully Insured", "5.0★ on Google", "Free Estimates"],
      secondaryCta: "Get a Free Estimate",
    },
    action: {
      eyebrow: "Caring for High Country trees",
      heading: "The right cuts, in the right places",
      text: "Good pruning is about knowing what to take and what to leave. We clear deadwood, lift canopies off roofs and drives, and shape trees for health and safety — never topping or over-cutting the trees you want to keep for decades.",
    },
    process: {
      title: "How Trimming & Pruning Works",
      sub: "Thoughtful pruning that helps your trees, not just a quick hack-back.",
      ctaLabel: "Trees need attention? We'll take a look and tell you straight — free estimate.",
      steps: [
        { title: "Free Assessment", text: "We look at each tree's health, structure, and clearances — roof, drive, lines — and tell you honestly what actually needs to be done." },
        { title: "A Pruning Plan", text: "We plan cuts that improve health and safety: deadwood removal, canopy lifting, thinning, and shaping — without over-pruning." },
        { title: "Clean, Insured Pruning", text: "Our fully-insured crew climbs and makes proper cuts at the right points so the tree heals well and stays strong." },
        { title: "Tidy Cleanup", text: "We chip the trimmings and rake up, leaving your yard clean and your trees looking sharp." },
      ],
    },
    differentiators: {
      title: "Why River Birch for Tree Care",
      sub: "Anyone can cut a limb. Proper pruning that keeps a tree healthy for the long haul takes knowledge — and doing it safely near your home takes insurance.",
      rows: DIFF_ROWS,
    },
    faqTitle: "Trimming & Pruning Questions",
    faqSub: "How to keep your High Country trees healthy and safe.",
    faqCtaLabel: "Not sure what your trees need? Call River Birch for an honest look.",
    faq: [
      { q: "When is the best time to prune my trees?", a: "For most High Country hardwoods, late winter through early spring — while the tree is dormant — is ideal. That said, broken, dead, or hazardous limbs should come off any time of year. We'll tell you what's urgent and what can wait." },
      { q: "Do you 'top' trees?", a: "It depends on your goal. For the trees you want to keep healthy, we prune properly instead of topping them — topping a healthy shade tree causes weak, hazardous regrowth. But when the goal is opening up a view, we do offer view topping; see our <a href=\"/view-clearing\">view clearing</a> page. Either way, we'll walk you through the trade-offs so you can choose." },
      { q: "Can you get limbs off my roof and driveway?", a: "Yes. Lifting the canopy off your roof, gutters, and driveway is one of the most common jobs we do, and it helps protect your home from limb damage in the next storm." },
      { q: "Is pruning covered by insurance?", a: "We mean OUR insurance — River Birch is fully insured, so pruning near your house is done with your property protected. Whether tree work is covered on your homeowner's policy depends on your carrier." },
      { q: "Will pruning help save a struggling tree?", a: "Sometimes. Removing deadwood and improving structure can help a stressed tree recover. If a tree is too far gone or hazardous, we'll tell you honestly and talk through <a href=\"/tree-removal\">removal</a> instead." },
    ],
    related: {
      title: "Related Services",
      sub: "More ways to keep your property safe and looking good.",
      cards: [
        { title: "Tree Removal", text: "When a tree is past saving, we remove it safely.", href: "/tree-removal" },
        { title: "View Clearing", text: "Selective trimming to open up your mountain view.", href: "/view-clearing" },
        { title: "Emergency Storm & Ice Cleanup", text: "Clear broken and hanging limbs after a storm.", href: "/storm-damage-tree-removal" },
      ],
    },
    reviewsTitle: "Homeowners Who Trust Their Trees to Us",
    reviewsSub: "Real 5-star Google reviews from around Watauga County.",
    finalCta: "Trees Need Attention? Let's Take a Look.",
    contactHeading: "Get Your Free Trimming Estimate",
    contactDesc: "Tell us what your trees need or call us — we'll come out, look them over, and give you an honest, no-pressure estimate.",
    ...AREA,
  },

  "stump-grinding": {
    hero: {
      emergencyTag: "🪵 Stump Grinding",
      subtitle:
        "Old stump in the way of your yard, mower, or new project? River Birch grinds it down below grade and cleans up the chips — across Boone, Deep Gap, and the High Country. Fully insured, free estimates.",
      trustSignals: ["Ground Below Grade", "Fully Insured", "5.0★ on Google", "Free Estimates"],
      secondaryCta: "Get a Free Estimate",
    },
    action: {
      eyebrow: "Reclaim your yard",
      heading: "Gone below the surface, cleaned up on top",
      text: "A ground-out stump means you can mow clean, replant, or build without a trip hazard or an eyesore in the way. We grind below grade, rake out the chips, and leave the spot ready to fill and seed.",
    },
    process: {
      title: "How Stump Grinding Works",
      sub: "Quick, clean, and out of your way. Here's what it looks like.",
      ctaLabel: "Got a stump — or ten? We'll price it for free. Give us a call.",
      steps: [
        { title: "Free Estimate", text: "Tell us how many stumps and where. We'll confirm access and give you a clear price — single stump or a whole yard's worth." },
        { title: "Grind Below Grade", text: "Our grinder takes the stump down several inches below the surface so you can replant, mow, or build over it." },
        { title: "Rake Out the Chips", text: "We rake up and can haul off or backfill the grindings so the spot is ready to fill with soil and seed." },
        { title: "Ready-to-Use Yard", text: "You get your space back — clean, level, and clear of the trip hazard and the eyesore." },
      ],
    },
    differentiators: {
      title: "Why River Birch for Stump Grinding",
      sub: "A stump left in the ground sprouts, rots, and gets in the way. We grind it out clean, insured, and leave the site tidy.",
      rows: DIFF_ROWS,
    },
    faqTitle: "Stump Grinding Questions",
    faqSub: "What to know before we grind.",
    faqCtaLabel: "Ready to lose that stump? Call River Birch for a free price.",
    faq: [
      { q: "How deep do you grind the stump?", a: "We grind several inches below grade — deep enough for you to fill with soil and plant grass, put in landscaping, or build over the spot." },
      { q: "Do you remove the wood chips?", a: "Your choice. The grindings can be raked into the hole as backfill, or we can haul them away and leave the area clean — just let us know when we give the estimate." },
      { q: "Can you grind stumps in a tight or sloped spot?", a: "Usually, yes. We'll confirm access when we look at the job. Most High Country yards and slopes are no problem for our equipment." },
      { q: "Do you grind the roots too?", a: "We grind the stump and the surface roots flaring from it. Deeper roots are left to decompose naturally, which they do over time once the stump is gone." },
      { q: "Can you grind a stump from a tree someone else removed?", a: "Definitely. We grind stumps whether we took the tree down or not. Point us to it and we'll take care of it." },
    ],
    related: {
      title: "Related Services",
      sub: "Often done together with stump grinding.",
      cards: [
        { title: "Tree Removal", text: "Take the tree down and grind the stump in one visit.", href: "/tree-removal" },
        { title: "Land & Lot Clearing", text: "Grind stumps across a whole lot to make it build-ready.", href: "/land-clearing" },
        { title: "Grading & Property Work", text: "Regrade, wall, and finish the spot once the stumps are gone.", href: "/property-services" },
      ],
    },
    reviewsTitle: "Yards We've Cleaned Up",
    reviewsSub: "Real 5-star Google reviews from around the High Country.",
    finalCta: "Ready to Lose That Stump? Let's Do It.",
    contactHeading: "Get Your Free Stump Grinding Estimate",
    contactDesc: "Tell us how many stumps and where, or call us — we'll give you a quick, no-pressure price.",
    ...AREA,
  },

  "view-clearing": {
    hero: {
      emergencyTag: "⛰️ View Clearing & Enhancement",
      subtitle:
        "Bought the mountain property for the view — and now the trees have grown in? River Birch opens up long-range views in Blowing Rock, Boone, and across the High Country with selective clearing, thinning, and view topping — without clear-cutting your land. Fully insured.",
      trustSignals: ["Selective Clearing", "Fully Insured", "5.0★ on Google", "Free Estimates"],
      secondaryCta: "Get a Free Estimate",
    },
    action: {
      eyebrow: "Get your view back",
      heading: "Open the view, keep the woods",
      text: "The best view clearing doesn't look cleared. We selectively remove, thin, and lower what blocks your sightline — and leave the rest so your property still feels like the mountains, not a cut-over lot.",
    },
    process: {
      title: "How View Clearing Works",
      sub: "Selective, thoughtful clearing that opens the view and keeps the character.",
      ctaLabel: "Want your view back? Let's stand on the deck and figure it out — free estimate.",
      steps: [
        { title: "See It From Your Spot", text: "We stand where you take in the view — the deck, the porch, the window — and map exactly what's blocking the sightline." },
        { title: "A Selective Plan", text: "We plan which trees to remove, which to thin, and which to lower — opening the view while keeping the woods that make the property feel like the mountains." },
        { title: "Careful, Insured Clearing", text: "Our fully-insured crew does the selective work precisely, protecting the trees and terrain you're keeping." },
        { title: "Clean Up & Reveal", text: "We chip and haul the debris, then you step back to your spot and take in the view you bought the place for." },
      ],
    },
    differentiators: {
      title: "Why River Birch for View Work",
      sub: "View clearing is easy to overdo. The skill is opening the sightline while keeping the property natural — done safely and insured.",
      rows: DIFF_ROWS,
    },
    faqTitle: "View Clearing Questions",
    faqSub: "How we open up High Country views the right way.",
    faqCtaLabel: "Ready to reclaim your view? Call River Birch for a free look.",
    faq: [
      { q: "Will view clearing leave my property looking clear-cut?", a: "No — that's the whole point of doing it selectively. We remove, thin, top, and lower only what blocks the view, and keep the surrounding trees so your land still feels wooded and natural." },
      { q: "Do you top trees to open a view?", a: "Yes. When the goal is reclaiming a long-range view, topping and reducing the trees in your sightline is often the fastest, most effective way to get it — and it's one of the most-requested jobs we do in the High Country. We do it cleanly and safely, and we'll always be straight with you about the trade-offs: topped trees put out new growth and need a touch-up every few years, so where a selective removal makes more sense long-term, we'll tell you. Your view, your call." },
      { q: "Can you clear a view without removing whole trees?", a: "Often, yes. A lot of view work is thinning canopies and topping or lowering the trees in your sightline rather than full removal. We'll walk you through the options and get you the view you want." },
      { q: "Do I need permission to clear a view?", a: "If you're in an HOA, a gated community, or near protected buffers, there may be rules about what you can cut — common around Blowing Rock and some Boone communities. We'll flag what we see, but confirming approval is the property owner's responsibility." },
      { q: "Is this work insured?", a: "Yes. River Birch is fully insured, so selective clearing near your home and along slopes is done with your property protected." },
      { q: "How often will I need view maintenance?", a: "Trees keep growing, so most view work needs a touch-up every few years to stay open. We can come back on a schedule that keeps your sightline clear without over-cutting." },
    ],
    related: {
      title: "Related Services",
      sub: "Pairs naturally with view work.",
      cards: [
        { title: "Tree Trimming & Pruning", text: "Thinning and canopy work to fine-tune the view.", href: "/tree-trimming-pruning" },
        { title: "Tree Removal", text: "Remove the specific trees blocking your sightline.", href: "/tree-removal" },
        { title: "Land & Lot Clearing", text: "Larger clearing for lots and building sites.", href: "/land-clearing" },
      ],
    },
    reviewsTitle: "Views We've Helped Reclaim",
    reviewsSub: "Real 5-star Google reviews from High Country property owners.",
    finalCta: "Want Your Mountain View Back? Let's Talk.",
    contactHeading: "Get Your Free View Clearing Estimate",
    contactDesc: "Tell us about your property and the view you want back, or call us — we'll come out and map it with you, no pressure.",
    ...AREA,
  },
};
