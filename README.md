# New Horizon Baptist Church — Port Byron, NY

The website for New Horizon Baptist Church, an Independent KJV Baptist church at
8505 S Street Rd, Port Byron, NY 13140. Pastor **Evan Fincham** — (540) 718-2334,
efincham95@gmail.com.

Live at **newhorizonbaptist.elijahdesent.com**. Every push to `main` deploys
itself; there is nothing to run by hand.

---

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 — theme tokens live in `src/app/globals.css` under
  `@theme inline`. **There is no `tailwind.config.ts`, and you should not add one.**

## Pages

| Route | What it is |
|---|---|
| `/` | Homepage |
| `/plan-a-visit` | Visit form → lands in the church's Slack |
| `/pastor` | Pastor Fincham's bio |
| `/statement-of-faith` | Doctrinal statement |
| `/plan-of-salvation` | The Gospel |
| `/give` | Giving — in person and by mail |

Homepage sections, in order, each a component in `src/components/`: `PreachingHero`,
`WelcomePastor`, `ScriptureBanner`, `ServiceTimes`, `FirstTimeVisitor`,
`AboutMission`, `WhatWeBelieve`, `MinistriesPreview`, `PlanOfSalvation`, `Give`,
`MapAddress`. To add or remove one, edit `src/app/page.tsx` — that's the whole
mechanism.

Unused components are still in `src/components/` (`WatchLive`, `PhotoGallery`,
`PrayerRequest`, `MobileFriendly`, `EditWithAI`). They are not rendered anywhere.
`PrayerRequest` in particular does **not** send anything yet — wire it to
`/api/visit`'s pattern before putting it on a page.

---

## The brand

The palette is sampled from the church's own logo — sunrise over three crosses on
a hill, with a stone bridge and river running to the horizon.

| Token | Hex | Used for |
|---|---|---|
| `brown-deep` | `#052a4e` | navy: nav, footer, dark sections |
| `brown-light` | `#1a6fb0` | river blue: links, buttons, emphasis |
| `orange` | `#f5811d` | sunrise orange: primary call-to-action |
| `gold` | `#f5a623` | ray amber: eyebrows, small accents |
| `cream` / `warm-white` | `#fbf4ea` / `#fffdf9` | warm paper backgrounds |

(The token names `brown-*` and `burgundy-*` are inherited from the boilerplate.
They hold blues now. Renaming them would touch every component, so don't bother —
just read the hex.)

Logo files in `public/`:

- `logo-sun.png` — sun and three crosses only. **This is what the header uses.**
  It has a transparent background and reads directly on the navy nav.
- `logo.png` — the full lockup with the wordmark. Needs a light background; it sits
  in the cream band above the footer.
- `logo-mark.png` — sun, crosses, bridge, and river. Also needs a light background.
- `logo-wordmark.png` — type only.

Two CSS motifs in `globals.css`: `.sun-rays` / `.sun-rays-dark` (radiating spokes,
used behind subpage titles and the footer logo) and `.horizon-rule` /
`.horizon-rule-dark` (a thin gradient divider). Both are deliberately subtle —
over the photo hero the rays looked like a sprinkler, so that hero uses a soft
radial glow instead.

Photos in `public/`: `church-front.jpg` (hero), `pastor-family.jpg` (homepage
welcome), `pastor-evan-kelsea.jpg` and `pastor-headshot.jpg` (both cropped from the
church's "Meet the Pastor" graphic, so they're small — keep them displayed small).

---

## Forms and chat both go to Slack

`src/config/chat.ts` holds one key that powers two things:

1. **The chat bubble** on every page (the `<script>` at the bottom of
   `src/app/layout.tsx`). A visitor's message opens a thread in the church's
   private Slack channel; a reply in Slack appears live in the visitor's chat.
2. **The Plan a Visit form** — `/api/visit` formats the submission and posts it
   into that same channel via `src/lib/slack-form.ts`.

Slack rather than email on purpose: email would need a verified sending domain,
which lags launch by weeks. This works the day it ships and reaches the pastor's
phone in seconds.

To add another form (prayer, contact, counseling), copy `src/app/api/visit/route.ts`:
validate, then call `sendToSlack` with a `subject`, `contact`, and `fields`. Keep
the honeypot field named `website` and keep validation server-side.

---

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

---

## Notes for AI editors (Claude / ChatGPT)

- **Next.js 16.2.1** — APIs may differ from older training data. Read the relevant
  guide in `node_modules/next/dist/docs/` before writing code. See `AGENTS.md`.
- **Real content only.** Every invented name, date, sermon title, and testimonial
  was deliberately removed from this site. Do not add placeholder people, events,
  or missionaries — leave a section out until the church supplies the real thing.
- **Still unverified**, so don't treat as fact: the service times (Sunday School
  10:00, Morning Worship 11:00, Thursday Bible study 6:30) and the ministry list in
  `MinistriesPreview` (its meeting times are generic boilerplate).
- **Icons** come from the `app/` file conventions — `favicon.ico`, `icon.png`,
  `apple-icon.png`. Don't re-add an `icons` block to `metadata`; it would override
  them and point at files that don't exist.
- **Components are flat** in `src/components/`, no subfolders. Sections are server
  components unless they need state — `Navbar`, `AnimateOnScroll`, and the visit
  form carry `"use client"`.
- **For any edit to an existing file**, replace the smallest exact string you can.
  Don't rewrite whole files unless asked.
- **Don't add abstractions** to make it fancier. A pastor should be able to read
  this code.
