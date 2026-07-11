# ELLOR Digital — Next.js

The full ELLOR Digital site (frontend **and** backend) as a single Next.js
App Router + TypeScript project. Pages, and the `/api/*` route handlers that
replace the old Express server, deploy together as **one Vercel project** — no
separate backend host (Render/AWS), no CORS, one deploy.

This folder replaces the old `client/` (Vite) + `server/` (Express) split.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- Mongoose (MongoDB) inside serverless route handlers
- Fonts via `next/font/google` (Space Grotesk, Inter, IBM Plex Mono)

## Structure

```
app/
  layout.tsx            root layout: fonts, metadata, <Shell>
  globals.css           Tailwind v4 theme + custom classes
  page.tsx              Home  (/)
  services/page.tsx     Services hub  (/services)
  services/[slug]/      Service detail (SSG for all 6 services)
  work/ approach/ studio/ contact/   one page.tsx each
  not-found.tsx         404
  api/
    leads/route.ts      POST (create) + GET (list)
    newsletter/route.ts POST (subscribe)
    health/route.ts     GET
components/              UI, ported from the Vite app (+ Shell, ModalContext)
lib/
  db.ts                 cached Mongoose connection (serverless-safe)
  models/               Lead, Subscriber
  api.ts                client fetch helper -> same-origin /api
data/  hooks/  public/
```

### How the old react-router pieces map

- `BrowserRouter` / `<Routes>` → file-based routing under `app/`
- `<Link to>` / `<NavLink>` → `next/link` `<Link href>` (+ `usePathname()` for active state)
- `<Layout>` + `<Outlet context={{ openModal }}>` → `components/Shell.tsx` (client)
  owns the lead-modal state and exposes it via `components/ModalContext.tsx`
  (`useModal()`); modal-opening components consume it directly instead of prop-drilling.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000  (pages + API together)
```

Set `MONGODB_URI` in `.env.local` (see `.env.example`). The lead and
newsletter forms need it; everything else renders without it.

## Deploy to Vercel

1. Import the repo and set **Root Directory = `ellor`**.
2. Add the `MONGODB_URI` environment variable (Project → Settings → Environment Variables).
3. Deploy. Framework preset auto-detects Next.js — pages are static/SSG, and
   `app/api/*` become serverless functions. That's the whole backend.

## Notes

- `lib/db.ts` caches the Mongoose connection on `global` so warm invocations
  reuse one socket instead of opening a new DB connection per request.
- The client fetches the API at same-origin `/api` (override with
  `NEXT_PUBLIC_API_URL` only if you split the backend out again).
