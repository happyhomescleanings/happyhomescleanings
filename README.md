# Happy Homes Services — Website

Modern marketing site for Happy Homes Services (cleaning & home care, Rapid City area).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/           # Routes & API
  components/    # UI
  content/       # Typed site copy & data (source of truth for the UI)
  lib/           # Utilities & feature flags
content/         # Markdown research archive (not used at runtime)
public/images/   # Site photos
```

### Extensibility

- **`src/lib/features.ts`** — Toggle future capabilities (scheduling, portal, payments).
- **`src/content/`** — Add CMS or database later; pages import from here.
- **`src/app/api/contact/route.ts`** — Wire to Resend/Formspree via `.env.local` (see `.env.example`).
- **`src/components/Logo.tsx`** — Set `logoSrc` when brand assets arrive.

## Content

Business research and notes live in [`content/`](./content/) (markdown). Runtime copy is in `src/content/` TypeScript modules.

## Deploy

Build with `npm run build`. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (and optional `CONTACT_*` overrides) before deploying the contact form.
