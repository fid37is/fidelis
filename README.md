# Fidelis Agba — PM Portfolio

A clean, minimal product manager portfolio built with React + Vite. Glass-panel
hover cards, scroll-reveal animations, a sliding segmented filter for the work
section, a full social linktree, and a live Medium blog feed.

## Edit your content

Everything text-based lives in one file: **`src/data.js`**.

- `profile` — name, role, contact info, social links, Medium username
- `socials` — the linktree rows shown in the Contact section (icon, label, handle, URL)
- `work` — case studies / product work / side projects / teardowns / commentary
- `approach` — the 3 "how I work" cards
- `experience` — your role timeline
- `skills` — grouped skill chips
- `certifications` — professional certifications
- `education` — degrees and training

## Blog (Medium integration)

The Blog section (`src/components/Blog.jsx`) fetches your latest Medium posts
client-side via [rss2json.com](https://rss2json.com)'s free public API, which
converts your Medium RSS feed (`https://medium.com/feed/@fid37is`) into JSON —
no backend needed.

- Change the username by editing `profile.username` in `src/data.js`.
- If the feed fails to load (rate limit, Medium down, no posts yet), it falls
  back to a friendly message linking directly to your Medium profile — it
  never shows a broken UI.
- **Rate limits:** the free rss2json tier is fine for personal-portfolio
  traffic, but if you expect heavier traffic, get a free API key at
  rss2json.com and append `&api_key=YOUR_KEY` to the request URL in
  `src/hooks/useMediumPosts.js`, or swap in a small serverless function
  (e.g. a Vercel Edge Function) that fetches and caches the feed server-side.
- This couldn't be tested end-to-end in the build sandbox (its network
  allowlist blocks rss2json.com), so double-check it renders real posts once
  you run it locally or deploy — the error state is what you'll see if the
  request is blocked or the feed is empty.

## Icons

Uses `lucide-react`, **pinned to `0.577.0`** in `package.json`. Newer major
versions of lucide-react (1.x) removed brand/logo icons (GitHub, LinkedIn,
X, Instagram, Facebook, etc.), so don't bump this dependency past `0.577.x`
without checking that the icons you use still exist.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

**Option A — CLI**

```bash
npm i -g vercel
vercel
```

**Option B — GitHub**

1. Push this project to a GitHub repo.
2. Go to vercel.com/new and import the repo.
3. Vercel auto-detects Vite. Click Deploy.

## Stack

- React 19 + Vite
- Plain CSS with custom properties (no framework) — see `src/styles.css`
- `IntersectionObserver` for scroll-reveal (`src/hooks/useReveal.js`)
- `lucide-react@0.577.0` for icons
- rss2json.com for client-side Medium RSS → JSON
- Google Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data)
