# Elena & Julian — Interactive Wedding Invitation

> **Animated Editorial Dark Mode Wedding Invitation** built with [Astro](https://astro.build), [Bun](https://bun.sh), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.
> Inspired and exported from Stitch Project `Interactive Wedding Invitation` (ID: `1420253312440077610`, Screen: `b81cc40204a04cf8ba909bee429538a6`).

---

## ✨ Features

- 🎨 **Editorial Dark Magazine Aesthetic**: Deep `#0c0a09` ink floor paired with soft off-white `#f5f5f5` typography and `#1d1b1a` card surfaces.
- 🌌 **Atmospheric Ambient Orbs**: Multi-stop pastel floating gradients (Mint, Peach, Lavender, Rose) with smooth keyframe drift.
- 📸 **Overlapping Staggered Gallery**: 3-card layout with subtle rotation, tilt, depth shadows, and interactive hover elevation.
- 🖋️ **Buku Tamu & RSVP Interactivity**: Live client-side submission with attendance status badge, validation, and localStorage persistence.
- 📱 **Fully Responsive**: Mobile-first fluid layout with collapsible drawer navigation and responsive photography stacks.
- ⚡ **Zero-Bloat Performance**: Built on Astro Server-first components with minimal client scripts and strict TypeScript types (`noImplicitAny`, zero `any`).

---

## 🛠️ Tech Stack

- **Framework**: Astro 5 (Static Site Generation)
- **Runtime & Package Manager**: Bun
- **Styling**: Tailwind CSS v4 + Custom Keyframe Animations
- **Typography**: Google Fonts (`EB Garamond` & `Hanken Grotesk`) + Material Symbols Outlined
- **Language**: TypeScript 5.9 (Strict Type Safety)

---

## 📁 Project Structure

```
vibecoding-wedding/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── rings.png             # Detail close-up shot of rings & roses
│       ├── hero-couple.png       # Grand Italian villa couple portrait
│       ├── candid-bw.png         # B&W candid joyful moment
│       └── stitch-screenshot.png # High-res Stitch screen capture
├── src/
│   ├── components/
│   │   ├── AtmosphericOrbs.astro   # Ambient floating gradient orbs
│   │   ├── FloralDecorations.astro # Animated vector line-art florals
│   │   ├── Navigation.astro        # Glassmorphic top navigation + mobile menu
│   │   ├── HeroSection.astro       # Editorial hero with staggered photo cards
│   │   ├── OurStorySection.astro   # Narrative story & event schedule cards
│   │   ├── GuestbookSection.astro  # Interactive Guestbook and RSVP feed
│   │   └── Footer.astro            # Magazine footer with pattern & links
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML document shell with SEO meta
│   ├── styles/
│   │   └── global.css              # Tailwind v4 theme & animation tokens
│   ├── types/
│   │   └── guestbook.ts            # Strict TypeScript types
│   └── pages/
│       └── index.astro             # Home page
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh) (v1.0+)

### Development Server
```bash
bun install
bun run dev
```

### Production Build
```bash
bun run build
bun run preview
```
