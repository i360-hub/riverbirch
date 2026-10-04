import { getCollection } from "astro:content";

/** Published posts, newest first. Drafts and future-dated posts are excluded. */
export async function getPublishedPosts() {
  const now = new Date();
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.pubDate <= now
  );
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}
