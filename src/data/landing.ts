import { site } from "./site";

// LP-only constants. Keep these separate from site.ts so no normal page is
// affected by PPC landing-page tweaks.
export const landing = {
  // LC "Website Tracking" number (forwards to the owner's line). Every phone
  // render on LP pages reads from here — never from site.phoneDisplay.
  phoneDisplay: "(828) 818-8505",
  phoneHref: "tel:+18288188505",
  // LP form: defaults to the sitewide GHL form; swap these two values in this
  // one file if a dedicated LP form is created in HighLevel later.
  formSrc: site.ghlFormSrc,
  formId: site.ghlFormId,
  formName: "Contact — River Birch",
  // GOOGLE ADS CONVERSION STUB: fill googleAdsId (AW-...) and
  // googleAdsFormLabel from the Google Ads account once it exists. Until both
  // are non-empty, NO Ads conversion fires and nothing breaks.
  googleAdsId: "",
  googleAdsFormLabel: "",
  // googleAdsCallLabel is INTENTIONALLY unused for now (reserved, not dead
  // code): ad calls are tracked via Google Ads account-level call reporting on
  // the LC tracking number above, not a website call tag. Fill this only if a
  // click-to-call website conversion tag is added later.
  googleAdsCallLabel: "",
  ga4Id: "G-1KNRPXM1BT",
} as const;
