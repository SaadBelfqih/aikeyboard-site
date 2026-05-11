# bestaikeyboard.com

SEO-first, 6-locale marketing site for **KeyAI** — the AI keyboard for iPhone.

- **Stack:** Astro 5 + Tailwind v4
- **Hosting:** GitHub Pages (deploys on push to `main`)
- **DNS:** Porkbun → Cloudflare → GitHub Pages
- **Domain:** `bestaikeyboard.com`
- **Locales:** `en`, `de`, `fr`, `es`, `pt`, `pt-br`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

## Structure

- `src/pages/index.astro` — English landing
- `src/pages/{de,fr,es,pt,pt-br}/index.astro` — localized landings
- `src/pages/[locale]/{features,pricing,privacy,terms,blog/,vs/}` — per-locale subpages
- `src/components/` — Hero, FeatureGrid, Pricing, FAQ, Footer, etc.
- `src/i18n/{locales,ui,features,legal}.ts` — translations
- `src/content/blog/` — MDX blog posts
- `src/data/competitors.ts` — vs/ page data

## Deploy

Push to `main` → GitHub Actions builds + deploys to GitHub Pages. The `CNAME` file in `public/` keeps the custom domain attached.

## DNS setup (Cloudflare → GitHub Pages)

```
A    @   185.199.108.153
A    @   185.199.109.153
A    @   185.199.110.153
A    @   185.199.111.153
AAAA @   2606:50c0:8000::153
AAAA @   2606:50c0:8001::153
AAAA @   2606:50c0:8002::153
AAAA @   2606:50c0:8003::153
CNAME www <user>.github.io
```

Cloudflare SSL/TLS mode: **Full**. Always Use HTTPS: ON.

App ID: `6466343783`
