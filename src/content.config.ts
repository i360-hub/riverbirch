import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts render at /blog/[slug]. The /blog page is only the index.
// Draft or future-dated posts get no live URL — and no sitemap entry —
// until they are published.
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // Shorter <title> for search results (~60 chars); falls back to `title`.
    // Does not affect the on-page H1 or the BlogPosting headline.
    seoTitle: z.string().optional(),
    // Meta description. Search results cut off past ~155 characters, so the
    // build fails on anything longer than 160.
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    author: z.string().default("Ezequiel Moreno"),
    // Hide a post everywhere regardless of pubDate.
    draft: z.boolean().default(false),
    // FAQ pairs rendered as the post's closing FAQ section and emitted as
    // FAQPage JSON-LD — the single highest-leverage AEO/GEO structure.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Key takeaways rendered as a summary box near the top of the post.
    // 3-4 short bullets; AI engines quote these directly.
    takeaways: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
