# Deploying to Cloudflare Pages

Static Astro build (`output: 'static'`) — no adapter, no server. Cloudflare Pages
serves `dist/` directly, with `_redirects` and `_headers` applied at the edge.

## Build settings

| Setting | Value |
|---|---|
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (pinned via `.nvmrc`; or set env `NODE_VERSION=20`) |
| Install command | `npm ci` (falls back to `npm install`) |

The build produces 64 pages + `404.html`, `sitemap-index.xml`/`sitemap-0.xml`,
`robots.txt`, `_redirects`, `_headers`, and optimized images under `_astro/`.

---

## Option A — Git-connected (recommended, auto-deploys on push)

This project is **not yet a git repo**. Initialize and push first:

```bash
git init
git add -A
git commit -m "Initial Astro build of riverbirchtreeservice.com"
# create an empty repo on GitHub/GitLab, then:
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

Then in the Cloudflare dashboard:
1. **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
2. Set the build settings from the table above.
3. **Save and Deploy.** Every push to `main` re-deploys.

## Option B — Direct upload (no git)

```bash
npm run build
npx wrangler pages deploy dist --project-name river-birch-tree-service
```

(First run prompts a Cloudflare login and creates the project.)

---

## Custom domain + DNS cutover

1. Pages project → **Custom domains → Set up a custom domain** →
   add `riverbirchtreeservice.com` **and** `www.riverbirchtreeservice.com`.
2. If the domain's DNS is already on Cloudflare, it wires the CNAME automatically.
   Otherwise point DNS at the Pages target Cloudflare shows.
3. Canonical host is `https://www.riverbirchtreeservice.com`. **`worker.js`
   already performs the apex → www and http → https 301s in code** (path
   preserved), so no Cloudflare redirect rule is required — BUT both hostnames
   must route to the Worker for it to fire: add **both** `riverbirchtreeservice.com`
   **and** `www.riverbirchtreeservice.com` as custom domains/routes on the
   Worker. (A dashboard redirect rule + "Always Use HTTPS" are fine as
   redundant belt-and-suspenders; they simply run before the Worker.)
4. **Cut over only after verifying the deploy** on the temporary
   `*.workers.dev` URL (see checklist). DNS TTL means a brief propagation window.

> Heads-up: the GoHighLevel form domains are allow-listed by referrer in GHL.
> If the forms show a domain error post-launch, add the production domain to the
> form/site settings in GoHighLevel.

---

## Post-deploy verification checklist

Run against the `*.pages.dev` URL first, then the live domain:

- [ ] Home, a service page, a city page, a blog article, About, Contact all load.
- [ ] `/sitemap-index.xml` resolves and lists 63 URLs.
- [ ] `/robots.txt` resolves.
- [ ] Redirects work: `/mold-removal-old` → `/mold-removal`,
      `/locations/fort_mill` → `/water-damage-restoration-fort-mill-sc`,
      `/locations/huntersville` → `/service-areas`, `/home` → `/`.
- [ ] A bogus URL (`/does-not-exist`) serves the styled 404.
- [ ] The GoHighLevel contact form renders and submits (test a lead → redirects
      to `/thank-you`).
- [ ] Google Map embeds render on service/city/contact pages.
- [ ] Mobile: nav menu opens/closes; content links are clickable.
- [ ] Titles/H1s intact on the ranking-locked pages (home, fort-mill, rock-hill,
      tega-cay).

## Rollback

Cloudflare Pages keeps every deployment. In the project's **Deployments** tab,
open a previous deployment → **Rollback to this deployment**.
