// Rehype plugin: a link to a blog post that is not published yet (future
// pubDate, or draft: true) is rendered as plain text instead of a link.
//
// Why: posts are scheduled by pubDate, and an unpublished post has no URL. A
// published post that links ahead to a scheduled one would otherwise ship a
// 404 link until that date. With this, the link switches itself on the first
// build on or after the target's pubDate (the deploy workflow rebuilds daily).
//
// A link to a post file that does not exist at all fails the build: that is a
// typo, not a schedule.
//
// "Published" must match src/lib/posts.ts: !draft && pubDate <= now.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const BLOG_DIR = join(process.cwd(), "src/content/blog");
const BLOG_LINK = /^\/blog\/([^/#?]+)/;

function isPublished(slug, now) {
  const file = join(BLOG_DIR, `${slug}.md`);
  if (!existsSync(file)) {
    throw new Error(`Blog link points to a post that does not exist: /blog/${slug}`);
  }
  const frontmatter = readFileSync(file, "utf8").split(/^---\s*$/m)[1] ?? "";
  if (/^draft:\s*true\s*$/m.test(frontmatter)) return false;
  const m = frontmatter.match(/^pubDate:\s*["']?([^"'\n]+)["']?\s*$/m);
  if (!m) return false;
  const pubDate = new Date(m[1].trim());
  return !Number.isNaN(pubDate.getTime()) && pubDate <= now;
}

export default function rehypeUnpublishedLinks() {
  return (tree) => {
    const now = new Date();
    const walk = (node) => {
      if (!node.children) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        const href = child.type === "element" && child.tagName === "a" && child.properties?.href;
        const match = typeof href === "string" && href.match(BLOG_LINK);
        if (match && !isPublished(match[1], now)) {
          // Replace <a> with its own children (the link text stays).
          node.children.splice(i, 1, ...(child.children ?? []));
          i += (child.children?.length ?? 0) - 1;
          continue;
        }
        walk(child);
      }
    };
    walk(tree);
  };
}
