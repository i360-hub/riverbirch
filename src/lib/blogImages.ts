// Blog hero images — imported through astro:assets so posts get optimized
// output (avif/webp) like the rest of the site. Frontmatter `heroImage` is
// the KEY into this map, not a path. To add a post with a new hero: drop the
// source image in src/assets/images/ and add one line here.
import type { ImageMetadata } from "astro";

import imgCost from "@assets/images/boone-nc-tree-removal-near-cabin.jpg";
import imgStorm from "@assets/images/high-country-storm-ice-fallen-trees-snow.jpg";
import imgPermit from "@assets/images/high-country-tree-removal-climber-mountain.jpg";

export const blogImages: Record<string, ImageMetadata> = {
  "cost-boone": imgCost,
  "ice-storm": imgStorm,
  "permit-watauga": imgPermit,
};

export function blogImageSrc(key: string): string {
  const img = blogImages[key];
  if (!img) throw new Error(`Unknown blog heroImage key: ${key}`);
  return img.src;
}
