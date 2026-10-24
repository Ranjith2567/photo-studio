

Ultra-premium photography portfolio — React 18 + Vite 5 + Tailwind CSS + Framer Motion + React Router 6. No backend; fully static.

## Run it locally

This project was hand-built in an offline sandbox, so `npm install` has never
been run against it yet. On your machine (with internet access):

```bash
cd photostudio
npm install
npm run dev
```

Then open the printed `localhost` URL. If anything throws an error on first
install/run, paste it back to me and I'll patch it — I wrote every file by
hand and syntax-checked it, but I couldn't execute a real Vite build in my
sandbox (no network access there), so a live run is the real test.

To build for production:

```bash
npm run build
npm run preview   # sanity-check the dist/ output locally
```

## Project structure

```
src/
  components/
    Layout/      Navbar, Footer
    Hero/        HeroVideoCycler (home page hero)
    Home/        FeaturedStrip, AboutTeaser, Testimonials, CTASection
    Gallery/     FilterBar, GalleryGrid, Lightbox
    ui/          ExifTag (signature caption device), BookingForm,
                 PageTransition, ScrollToTop
  pages/         Home, Portfolio, About, Services, Contact, NotFound
  data/          gallery.js, heroVideos.js, testimonials.js, services.js
  lib/motion.js  shared Framer Motion variants
public/
  assets/
    images/gallery/{wedding,fashion,product,travel}/
    images/about/
    images/testimonials/
    videos/
```

## Swapping in your real photos & videos

Every image/video is referenced by a **root-relative** path starting with
`/assets/...`, pointing into `public/assets/`. That's intentional — Vite
copies `public/` as-is into `dist/`, so these paths work identically in dev
and in the production build (this avoids the broken-image issue you hit
before with `/src/assets/...`).

To drop in your real files, just overwrite the placeholders **with the exact
same filenames** — nothing in the code needs to change:

- `public/assets/images/gallery/wedding/gallery-wedding-01.jpg` … `-10.jpg`
- `public/assets/images/gallery/fashion/gallery-fashion-01.jpg` … `-10.jpg`
- `public/assets/images/gallery/product/gallery-product-01.jpg` … `-10.jpg`
- `public/assets/images/gallery/travel/gallery-travel-01.jpg` … `-10.jpg`
- `public/assets/images/about/about-portrait.jpg`
- `public/assets/images/testimonials/testimonial-01.jpg` … `-04.jpg`
- `public/assets/videos/hero-video-01.mp4` … `-04.mp4`

**You said you have 70–100 real photos** — the placeholder set above gives
you 10 slots per category (40 total) to start. If you want more images per
category, open `src/data/gallery.js` and extend the `length: 10` in the
`Array.from({ length: 10 }, ...)` call per category, add matching titles to
`TITLES_BY_CATEGORY`, and drop the correspondingly-numbered files into the
same folder. Same idea for extra testimonials in `src/data/testimonials.js`.

Placeholder images are procedurally generated (labelled, color-toned per
category) so the layout, masonry, and lightbox are fully visible and testable
before your real assets arrive. Placeholder videos are short generated clips
with text labels so the hero cycler is watchable end-to-end.

## Hero video cycler

`src/components/Hero/HeroVideoCycler.jsx` auto-advances through
`src/data/heroVideos.js` every 6s per clip (configurable via `duration` per
entry), crossfading between videos and swapping headline copy. Progress is
shown via a film-strip "sprocket tick" bar (the site's take on an
Instagram-story indicator) — click any segment to jump to that clip. Hovering
the hero pauses auto-advance.

## Deployment (Vercel)

`vercel.json` already includes the SPA rewrite so client-side routes don't
404 on refresh/direct load:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

Push to GitHub, import the repo in Vercel, framework preset "Vite" — no
extra config needed. Build command `npm run build`, output directory `dist`.

## Notes

- Contact and Booking forms are UI-only: on submit they build a `mailto:`
  link with the form fields pre-filled and hand off to the visitor's email
  client. No backend, no data storage.
- Routes are lazy-loaded (`React.lazy` + `Suspense`) for a lighter initial
  bundle, which matters on the 4GB RAM / Windows 10 target machine.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).
