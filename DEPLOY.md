# Deploying to Cloudflare Pages

Static Astro build (`output: 'static'`) — no adapter, no server. Cloudflare Pages
serves `dist/` directly, with `_redirects` and `_headers` applied at the edge.

> **TL;DR — to deploy a change:** commit and push to `main`. GitHub Actions
> (`.github/workflows/deploy.yml`) builds, deploys to the Pages project
> **`river-birch`**, and smoke-checks the launch checklist (staging noindexed,
> prod not). Watch it with `gh run watch`.
>
> Emergency/manual path (same project, still works):
> ```bash
> npm run build
> npx wrangler pages deploy dist --project-name river-birch
> ```
> If you deploy manually, push the matching commit right after — GitHub is the
> source of truth.

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

## How this project actually deploys (GitHub Actions direct upload)

The Pages project **`river-birch`** already exists and owns the custom domains
(`riverbirchtreeservice.com`, `www.riverbirchtreeservice.com`). It is not
git-connected on the Cloudflare side; instead, `.github/workflows/deploy.yml`
runs on every push to `main` and direct-uploads the fresh build with
`wrangler pages deploy` (using repo secrets `CLOUDFLARE_API_TOKEN` +
`CLOUDFLARE_ACCOUNT_ID`), then asserts the launch checklist: pages.dev serves
`X-Robots-Tag: noindex`, prod serves 200 without it, canonical is correct.

Each deploy gets a unique preview URL (`https://<hash>.river-birch.pages.dev`)
and updates the production alias `river-birch.pages.dev` and the custom domains.
The Cloudflare edge may briefly serve a cached copy of the old HTML after a
deploy — verify with a cache-buster (`?cb=$(date +%s)`) if you see stale content.

## The separate Worker (`wrangler.toml`) — not the live site

`wrangler.toml` defines a **Worker** also named `river-birch` (with `worker.js`),
deployed via `npx wrangler deploy`. It serves only the preview host
`river-birch.impact360media.workers.dev` and adds `X-Robots-Tag: noindex` there
so the preview stays out of search. **It does not serve the custom domain** — the
Pages project does. Deploying the Worker will *not* update the live site; only
`wrangler pages deploy` does.

---

## Custom domain + DNS cutover

Both custom domains are **already attached to the `river-birch` Pages project**
(`riverbirchtreeservice.com` and `www.riverbirchtreeservice.com`) — this is done,
not a pending step. If you ever need to re-add one: Pages project →
**Custom domains → Set up a custom domain**.

1. Canonical host is the apex, `https://riverbirchtreeservice.com` (no `www`). It is
   what `astro.config.mjs`, every canonical tag, the sitemap and `robots.txt` use.
2. `www` → apex is a 301 handled by the Pages middleware in
   `functions/_middleware.js` (path and query preserved). `_redirects` cannot match
   on hostname, and `worker.js` only runs on the `*.workers.dev` preview host, so
   neither handles it. http → https comes from Cloudflare's "Always Use HTTPS".
   The deploy workflow asserts the www → apex 301 after every deploy.
3. **Verify each deploy** on the printed `<hash>.river-birch.pages.dev` preview
   URL before trusting the live domain (edge cache can lag briefly).

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
