# WebRise — Marketing Site

A single-page, conversion-focused marketing site for WebRise, built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```text
app/
├── page.tsx        # Assembles all sections
├── layout.tsx       # Fonts + SEO metadata
└── globals.css       # Design tokens & base styles

components/
├── Navbar.tsx
├── Hero.tsx
├── GrowthConsole.tsx  # Animated hero dashboard visual
├── ProblemSection.tsx
├── Services.tsx
├── Industries.tsx
├── Process.tsx
├── ContactSection.tsx
├── LeadForm.tsx       # Validated lead capture form
├── WhatsAppButton.tsx
├── Footer.tsx
└── Reveal.tsx         # Shared scroll-entrance animation wrapper
```

## Things to customize before launch

1. **WhatsApp number** — update `WHATSAPP_NUMBER` in `components/WhatsAppButton.tsx` and `components/Footer.tsx` with the real business number (international format, digits only, e.g. `919876543210`).
2. **Form backend** — `components/LeadForm.tsx` currently `console.log`s the submitted data and shows a success state, as requested. Wire it up to your API/CRM of choice when ready (the validation and UI already handle the request/response cycle).
3. **Domain & OG image** — `app/layout.tsx` has a placeholder `siteUrl`; update it and add a real Open Graph image once the domain is live.
4. **Favicon** — `public/favicon.svg` is a minimal placeholder mark; swap in the final WebRise logo mark when available.

## Design tokens

Colors, type, and spacing live in `tailwind.config.ts`. The palette is a cool off-white background (`bg`), near-black ink for text, and a single emerald accent (`accent`) used sparingly for interactive and "live" moments — reflecting the product's focus on measurable growth. Headlines use Space Grotesk, body copy uses Inter, and data/labels use IBM Plex Mono to reinforce the technology-company feel.
