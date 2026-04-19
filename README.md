# TDK Company

Premium software development company landing page built with Next.js.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Email:** Resend

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Copy `.env.local` and set the following:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending contact form emails |
| `EMAIL_FROM` | Verified sender email address (e.g. `TDK Website <noreply@tdk-company.com>`) |

## Project Structure

```
src/
  app/
    api/contact/route.ts   — Contact form API (sends to admin via Resend)
    layout.tsx             — Root layout with SEO metadata + JSON-LD
    page.tsx               — Landing page
    icon.svg               — Favicon
    opengraph-image.tsx    — Dynamic OG image
    robots.ts              — robots.txt
    sitemap.ts             — sitemap.xml
  components/
    Contact.tsx            — Contact form (client component)
    Footer.tsx             — Site footer
    Hero.tsx               — Hero section
    Navigation.tsx         — Sticky nav with mobile menu
    Portfolio.tsx          — Portfolio / case studies
    Services.tsx           — Services overview
    WhyUs.tsx              — Why choose us section
    illustrations/         — Animated SVG illustrations for portfolio cards
public/
  logo.svg                 — Company logo
```

## Build

```bash
npm run build
```
