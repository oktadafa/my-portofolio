# Okta Daffa Ramadani — Developer Portfolio (`odr.dev`)

A modern, high-performance full-stack developer portfolio built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, structured using **Atomic Design Principles** and designed with **Google Stitch**.

---

## ✨ Features

- **Modern Technical Minimalism**: Dark-first zinc/slate surface hierarchy with emerald (`#4edea3`), cyan (`#4cd7f6`), and indigo (`#c0c1ff`) accents, subtle glassmorphism, and ambient radial glows.
- **Atomic Design Architecture**: Strictly organized into `atoms`, `molecules`, `organisms`, and `templates` for modularity, type safety, and reusability.
- **Tailwind CSS v4 (`@theme`)**: CSS-first design token system in `src/index.css` defining custom color tokens, Geist & JetBrains Mono typography scales, spacing, border radii, and custom thin scrollbars.
- **Interactive Portfolio Sections**:
  - **Header & Navigation**: Fixed top glassmorphic header with live availability status indicator and a mobile bottom navigation bar (`Overview`, `Projects`, `Stack`, `History`, `Contact`).
  - **Hero Section**: Headline with gradient text, quick email clipboard copy, bento metric chips, and an interactive `portfolio.config.ts` terminal code preview.
  - **Profile & Tech Stack**: Engineer bio card and categorized technical capabilities (`Frontend Architecture`, `Backend, APIs & Storage`, `DevOps & Engineering Tools`) with custom SVG icons.
  - **Featured Projects & Detail Modal**: Filterable project showcase (`All`, `Web Apps`, `Systems`, `Open Source`) with browser-chrome cards and an interactive modal displaying architecture metrics and engineering challenges.
  - **Contact & Direct Channels**: Priority WhatsApp CTA, one-click email copy channel, Jakarta (`UTC+7`) base map card, and an encrypted-style message dispatch form.
- **Fully Responsive**: Tailored layouts for both desktop (`1440px` 12-column grid) and mobile (`390px+` touch-optimized single-column stack and bottom tab bar).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/) (`@vitejs/plugin-react`, `vite-tsconfig-paths`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Typography & Icons**: [Geist](https://vercel.com/font), [JetBrains Mono](https://www.jetbrains.com/lp/mono/), & [Material Symbols Outlined](https://fonts.google.com/icons)
- **UI Prototyping**: Google Stitch MCP

---

## 📁 Project Architecture (Atomic Design)

```text
src/
├── assets/
│   └── images/                   # Local optimized project & profile imagery
├── components/
│   ├── atoms/                    # Basic building blocks
│   │   ├── Badge.tsx             # Monospaced status/version chip
│   │   ├── Button.tsx            # Primary, ghost, and outline buttons
│   │   ├── FormField.tsx         # Controlled input, select, and textarea
│   │   ├── IconButton.tsx        # Square icon-only action button
│   │   ├── SectionLabel.tsx      # Eyebrow section kicker + divider line
│   │   └── StatusPip.tsx         # Pulsing live status indicator dot
│   ├── molecules/                # Composed UI groups
│   │   ├── ContactChannel.tsx    # Direct email row with clipboard copy feedback
│   │   ├── MetricChip.tsx        # Bento stat card (value + label)
│   │   ├── NavLink.tsx           # Navigation item with active state
│   │   ├── ProjectTag.tsx        # Tech tag chip for project cards
│   │   ├── TechBadge.tsx         # SVG icon + label badge for skill categories
│   │   └── TerminalWindow.tsx    # macOS-style terminal code preview window
│   ├── organisms/                # Complete page sections
│   │   ├── Header.tsx            # Sticky desktop navbar + mobile bottom nav
│   │   ├── HeroSection.tsx       # Hero banner, CTAs, metrics, and terminal preview
│   │   ├── AboutSection.tsx      # Bio card + 3-category tech stack showcase
│   │   ├── ProjectsSection.tsx   # Category filter + project grid + detail modal
│   │   ├── ContactSection.tsx    # Direct channels + timezone card + contact form
│   │   └── Footer.tsx            # Copyright, version badge, and social links
│   └── templates/
│       └── PortfolioPage.tsx     # Main page layout assembling all organisms
├── data/
│   └── portfolio.ts              # Typed project entries and asset exports
├── types/
│   └── index.ts                  # Shared TypeScript interfaces
├── App.tsx                       # Root application component
├── index.css                     # Tailwind v4 @theme tokens & base scrollbar styles
└── index.tsx                     # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+` (recommended `v22+`)
- **npm** or **pnpm**

### Installation

```bash
npm install
```

### Available Scripts

#### `npm start`

Starts the Vite development server at [http://localhost:3000](http://localhost:3000) with Hot Module Replacement (HMR).

#### `npm run build`

Bundles the application for production into the `build/` directory.

#### `npm run preview`

Locally previews the production build generated in `build/`.

---

## 🎨 Design System Reference

The design tokens and visual specifications are documented in [`DESIGN.md`](./DESIGN.md) and implemented in [`src/index.css`](./src/index.css), covering:
- **Surface Palette**: `--color-surface` (`#131315`) through `--color-surface-container-highest` (`#353437`)
- **Accents**: Primary Emerald (`#4edea3`), Secondary Cyan (`#4cd7f6`), Tertiary Indigo (`#c0c1ff`)
- **Agent Guidelines**: See [`AGENTS.md`](./AGENTS.md) for Atomic Design, TypeScript, and Google Stitch workflow rules.
