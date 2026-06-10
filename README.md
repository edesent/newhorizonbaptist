# Church Website Boilerplate

A modular, generic Independent KJV Baptist church website. Every homepage section is its own component with a small captioned badge that names the section and explains its purpose. Drop in your church&rsquo;s real content, ship to Vercel, and you have a real site.

---

## What&rsquo;s in here

**Tech stack**

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- TypeScript

**Pages**

- `/` — Homepage with all 20 modular sections
- `/pastor` — Meet the pastor
- `/statement-of-faith` — Doctrinal statement
- `/messages` — Sermon library
- `/give` — Online giving
- `/missionaries` — Missionaries we support
- `/plan-of-salvation` — The Gospel

**SEO + previews built in**

- Per-page `metadata` exports with title templates (`%s | Independent KJV Baptist Church`)
- Open Graph + Twitter card metadata
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt`
- `manifest.ts` produces a PWA manifest
- iPhone preview metadata: `apple-touch-icon`, `apple-mobile-web-app-capable`, `black-translucent` status bar, `theme-color` for light & dark mode, `format-detection` for tel/email/address
- JSON-LD `Church` schema on the homepage for rich Google results

---

## The 20 homepage sections

Every section is a standalone React component in `src/components/`. To add or remove a section, just edit `src/app/page.tsx`.

| # | Component | What it&rsquo;s for |
|---|---|---|
| 01 | `PreachingHero` | Looping preaching-video hero + tagline + CTAs |
| 02 | `WatchLive` | Live-stream call-to-action |
| 03 | `WelcomePastor` | Personal pastor welcome with photo |
| 04 | `StaffStrip` | Horizontal strip of leadership |
| 05 | `ScriptureBanner` | Single verse breaker section |
| 06 | `ServiceTimes` | When you meet |
| 07 | `FirstTimeVisitor` | "What to expect" for new visitors |
| 08 | `AboutMission` | About / mission summary |
| 09 | `WhatWeBelieve` | 4-card beliefs preview |
| 10 | `Testimonies` | Member life-change stories |
| 11 | `LatestSermon` | Featured most-recent sermon |
| 12 | `UpcomingEvents` | Calendar preview |
| 13 | `MinistriesPreview` | Grid of church ministries |
| 14 | `PlanOfSalvation` | The Gospel (Roman Road) |
| 15 | `Missionaries` | Missionaries you support |
| 16 | `Give` | Online giving CTA |
| 17 | `PhotoGallery` | Recent moments grid |
| 18 | `MapAddress` | Contact + map |
| 19 | `PrayerRequest` | Prayer request form |
| 20 | `ChatPastor` | Chat-with-pastor widget |

Each section component renders a small **SectionBadge** at the top — a pill that names the section ("03 Welcome from the Pastor") and explains what it&rsquo;s for. Before you ship the real site, **remove the SectionBadge calls** so the badge doesn&rsquo;t show on the public site.

---

## How to customize for a real church (for the pastor + ChatGPT Connector)

This boilerplate uses placeholders everywhere — `[Last Name]`, `[Bible college]`, `(555) 555-0100`, `123 Church Street`, `example.com`, and so on. To turn it into your church&rsquo;s real site, the only thing you change is the **content**. The structure and styling stay the same.

**Things you (or ChatGPT) should swap out:**

1. **Church name** — search and replace `Independent KJV Baptist Church` everywhere.
2. **Domain** — search and replace `https://example.com` in `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/page.tsx` (JSON-LD).
3. **Address & phone** — search and replace `123 Church Street`, `(555) 555-0100`, `office@example.com`.
4. **Pastor name** — replace `Pastor [Last Name]` and `Pastor [Name]` across the site.
5. **Service times** — edit `src/components/ServiceTimes.tsx` and `src/components/Footer.tsx`.
6. **Photos** — drop real images into `public/` and update the placeholder `<div>`s with real `<img>` tags. Suggested filenames:
   - `pastor-family.jpg` — Welcome section
   - `hero-video.mp4` — Preaching hero
   - `og-image.jpg` — Social preview (1200×630)
   - `apple-touch-icon.png` — iPhone home screen (180×180)
   - `icon-192.png`, `icon-512.png` — PWA icons
   - `favicon.ico`
7. **Removing sections** — open `src/app/page.tsx` and delete the section&rsquo;s `<Component />` line. That&rsquo;s it.
8. **Hiding the section badges** before ship — open `src/components/SectionBadge.tsx` and either return `null` or delete the `<SectionBadge ... />` calls in each section.

---

## Run it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the build
```

---

## Notes for AI editors (Claude / ChatGPT)

- **Next.js version**: 16.2.1 — APIs may differ from what older training data describes. See `AGENTS.md`.
- **Tailwind**: v4 with theme tokens in `src/app/globals.css` under `@theme inline`. Do not create a `tailwind.config.ts`.
- **Components are flat** in `src/components/` — no subfolders.
- **Section components are server components by default**. Anything with `useState`, `useEffect`, browser APIs (Navbar, AnimateOnScroll, PrayerRequest, ChatPastor) has `"use client"`.
- **For ANY change to an existing file** — typo, wording, swap a heading — replace the smallest exact string you can. Don&rsquo;t rewrite whole files unless asked.
- **Don&rsquo;t add new abstractions** to make it "fancier" — this is a boilerplate that pastors and non-developers should be able to read.
