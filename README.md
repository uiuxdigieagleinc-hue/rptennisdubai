# RP Tennis Dubai — Next.js site

Rebuild of rptennisdubai.com (WordPress/Elementor) in Next.js 16 (App Router), with the same URLs.

## Run locally

```bash
npm install
cp .env.example .env.local   # add your Resend key
npm run dev                  # http://localhost:3000
```

## Deploy (Vercel)

1. Import the repo in Vercel (framework: Next.js, no extra settings).
2. Add the environment variables from `.env.example`:
   - `RESEND_API_KEY`: from resend.com
   - `CONTACT_FROM`: a sender on a domain verified in Resend, e.g. `RP Tennis Website <website@rptennisdubai.com>`
   - `CONTACT_TO`: where enquiries go (comma-separated)
   - `NEXT_PUBLIC_SITE_URL`: `https://rptennisdubai.com`
   - `NEXT_PUBLIC_GA_ID`: optional GA4 ID (needed for the Robin Hood referral events)
3. Point the domain at Vercel. Preview deployments are set to `noindex` automatically (`app/robots.ts`).

## Editing content (no CMS)

All text lives in `content/`:

| File | What |
|---|---|
| `content/site.ts` | Phone, email, hours, socials, menu, locations, counters |
| `content/programs.ts` | Programs, FAQ, facility features |
| `content/reviews.ts` | Reviews |
| `content/posts.ts` | Blog posts and categories. Slug = URL (`/<slug>/`) |
| `content/images.ts` | Photos (files in `assets/images/`) and gallery order |
| `content/form.ts` | Contact form dropdown options |

A new blog post only needs a new entry in `content/posts.ts`. The page, sitemap and cards update automatically.

## SEO

- Same URLs as WordPress, trailing slash included (`trailingSlash: true`).
- Old WordPress URLs (`/testimonial/*`, date archives, `/feed/`, `/author/*`, `/wp-sitemap.xml`) redirect 308 in `next.config.ts`.
- Per-page metadata, Open Graph image (`public/og.jpg`), `sitemap.xml`, `robots.txt`, JSON-LD (business, FAQ, reviews, blog posts).

## Robin Hood Camp

A minimal section (`components/sections/RobinHoodCamp.tsx`) on the Home page after Programs and at `/robin-hood-camp/`, plus a line above the header, in the hero and in the footer. 

**Referral tracking (our side only, nothing changes at Robin Hood):** "Request camp info" opens a short form (`components/RobinHoodSignup.tsx`) for name, email and phone. On submit, `app/actions/robinHood.ts` emails the lead to `CONTACT_TO` with the subject "Robin Hood Camp referral: <name>". That inbox is the referral record. The family is then sent to Robin Hood's inquiry form and asked to use the same name and email there, so enrollments can be matched to our list later. If email isn't configured, the family still continues but the lead is only in the server logs, so set `RESEND_API_KEY` before launch. GA4 events (when `NEXT_PUBLIC_GA_ID` is set): `robinhood_form_open`, `robinhood_lead`.

## Structure

```
app/            routes, globals.css (tokens, header, footer), sections.css
app/actions/    contact form server action (Resend)
components/     Header, Footer, carousel, gallery, form, sections/*
content/        all editable text and data
assets/images/  photos (optimised by next/image)
public/         og.jpg, video
```
