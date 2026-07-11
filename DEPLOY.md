# Deploying to Cloudflare Pages

Static Astro build (`output: 'static'`) — no adapter, no server. Cloudflare Pages
serves `dist/` directly, with `_redirects` and `_headers` applied at the edge.

> **TL;DR — to deploy a change:**
> ```bash
> npm run build
> npx wrangler pages deploy dist --project-name river-birch
> ```
> The live domain (`www.riverbirchtreeservice.com`) is served by the Cloudflare
> **Pages** project named **`river-birch`**. It is **not** git-connected — pushing
> to GitHub does **not** deploy anything. You must run the command above.

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

## How this project actually deploys (direct upload)

The Pages project **`river-birch`** already exists and owns the custom domains
(`riverbirchtreeservice.com`, `www.riverbirchtreeservice.com`). It is **not**
connected to git, so deploys are manual direct uploads:

```bash
npm run build
npx wrangler pages deploy dist --project-name river-birch
```

The command prints a unique preview URL (e.g. `https://<hash>.river-birch.pages.dev`)
and updates the production alias `river-birch.pages.dev` and the custom domains.
The Cloudflare edge may briefly serve a cached copy of the old HTML after a
deploy — verify with a cache-buster (`?cb=$(date +%s)`) if you see stale content.

### The GitHub repo does *not* auto-deploy

The repo lives at `github.com/i360-hub/riverbirch`, but the Pages project has
**Git Provider: No** — commits and pushes never trigger a deploy. Use git for
version history only; run the `wrangler pages deploy` command above to go live.

### Optional: connecting git for auto-deploy

If you *want* push-to-deploy, in the Cloudflare dashboard go to
**Workers & Pages → `river-birch` → Settings → Builds & deployments →
Connect to Git**, pick the repo, and set the build settings from the table above.
Until that's done, deploys are manual.

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

1. Canonical host is `https://www.riverbirchtreeservice.com`.
2. Because the live domains are served by **Pages** (not the Worker), the apex →
   www and http → https redirects are **not** handled by `worker.js` on the live
   site — `worker.js` only runs on the `*.workers.dev` preview host. On the live
   domain those redirects come from Cloudflare's dashboard (a redirect rule +
   "Always Use HTTPS") and/or the `_redirects` file in `dist/`. Verify apex →
   www actually 301s after any DNS change.
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
