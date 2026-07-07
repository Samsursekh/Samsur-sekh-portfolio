# Samsur Sekh — Digital Marketing Consultant Portfolio

A Next.js 16 (App Router) + Tailwind CSS v4 rebuild of the "Lumina Digital System" Stitch design — a dark, glassmorphic, futuristic-minimalist portfolio for a performance marketing consultant.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-based `@theme` design tokens matching the Stitch design system)
- three.js for the interactive "Growth Architecture" funnel animation
- A custom WebGL shader for the hero background

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/layout.tsx` — root layout, fonts (Space Grotesk + Inter), metadata
- `app/globals.css` — Lumina design tokens (colors, type scale, spacing, radii) via Tailwind v4 `@theme`
- `components/` — one component per section:
  - `Navbar`, `Hero`, `ShaderBackground` (WebGL), `Highlights`, `GrowthArchitecture` + `GrowthFunnel` (three.js), `About`, `Skills`, `Projects`, `Services`, `Process`, `Contact`, `Footer`

## Notes

The original Stitch export only included markup for the Hero, "Engineered for Results," "Growth Architecture," About, and Skills sections, even though the nav links to `#projects`, `#services`, `#process`, and `#contact`. Those four sections were added here in the same visual language (glass panels, gradient accents, glow states) with placeholder copy — swap in real case studies, service packages, and contact details before shipping.
