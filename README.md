# RAI INTERIORS — POWERED BY AZZAN'S

**ONE WINDOW. EVERY INTERIOR SOLUTION.**

A premium, fully frontend website for RAI INTERIORS built with React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

## Quick start

```bash
npm install
npm run dev      # local development
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Configuration before going live

All editable configuration is centralized:

| What | Where |
|---|---|
| WhatsApp number | `src/data/siteConfig.ts` → `whatsapp.number` (international format, digits only, e.g. `923001234567`) |
| Contact phone / email | `src/data/siteConfig.ts` → `contact` |
| Social links | `src/data/siteConfig.ts` → `social` |
| Google Maps location | `src/data/siteConfig.ts` → `contact.mapQuery` / embed / directions |
| Logo | Replace `public/assets/logo.svg` with the official logo file and update `src/components/Logo.tsx` to use an `<img>` |
| Service content | `src/data/services.ts` |
| Projects | `src/data/projects.ts` |
| Before & After comparisons | `src/data/beforeAfter.ts` |
| Navigation | `src/data/navigation.ts` |

Until the WhatsApp number is configured, every WhatsApp button shows a friendly
"temporarily unavailable" notice instead of failing silently. None of the customer's
form data ever leaves the browser — submissions open `wa.me` with the full,
unmodified inquiry text.

## Deployment

Static hosting ready (Netlify, Vercel, any static file host). `public/_redirects`
provides SPA fallback for Netlify; for other hosts, rewrite all routes to `index.html`.

Demo visuals are representative placeholder photography (Unsplash). Replace them with
actual project documentation via `src/data/projects.ts` and `src/data/beforeAfter.ts`
without touching any component code.
