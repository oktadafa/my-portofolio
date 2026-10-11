---
name: Developer Portfolio System
colors:
  surface: "#131315"
  surface-dim: "#131315"
  surface-bright: "#39393b"
  surface-container-lowest: "#0e0e10"
  surface-container-low: "#1c1b1d"
  surface-container: "#201f22"
  surface-container-high: "#2a2a2c"
  surface-container-highest: "#353437"
  on-surface: "#e5e1e4"
  on-surface-variant: "#bbcabf"
  inverse-surface: "#e5e1e4"
  inverse-on-surface: "#313032"
  outline: "#86948a"
  outline-variant: "#3c4a42"
  surface-tint: "#4edea3"
  primary: "#4edea3"
  on-primary: "#003824"
  primary-container: "#10b981"
  on-primary-container: "#00422b"
  inverse-primary: "#006c49"
  secondary: "#4cd7f6"
  on-secondary: "#003640"
  secondary-container: "#03b5d3"
  on-secondary-container: "#00424e"
  tertiary: "#c0c1ff"
  on-tertiary: "#1000a9"
  tertiary-container: "#9699ff"
  on-tertiary-container: "#1d17b2"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#6ffbbe"
  primary-fixed-dim: "#4edea3"
  on-primary-fixed: "#002113"
  on-primary-fixed-variant: "#005236"
  secondary-fixed: "#acedff"
  secondary-fixed-dim: "#4cd7f6"
  on-secondary-fixed: "#001f26"
  on-secondary-fixed-variant: "#004e5c"
  tertiary-fixed: "#e1e0ff"
  tertiary-fixed-dim: "#c0c1ff"
  on-tertiary-fixed: "#07006c"
  on-tertiary-fixed-variant: "#2f2ebe"
  background: "#131315"
  on-background: "#e5e1e4"
  surface-variant: "#353437"
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: "700"
    lineHeight: 64px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: "600"
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0em
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 22px
    letterSpacing: -0.01em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 18px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft software engineering: surgical precision, understated confidence, and technical authority. It speaks to technical recruiters, engineering leaders, and fellow builders who assess taste through details—border balance, crisp typographic hierarchy, zero layout jitter, and restrained micro-interactions.

The visual style blends **Modern Technical Minimalism** with **Subtle Glass & Atmospheric Glows**. It rejects generic dashboard bloat in favor of tactile dev-tool aesthetics: monospaced metadata callouts, sharp 1px borders, recessed surface layers, and controlled energetic accents that evoke active runtime environments, terminal prompts, and clean deployment states.

## Colors

The system uses a calibrated zinc/slate spectrum balanced by three technical accent colors:

### Color Roles & Intent

- **Primary (`#10b981` / Emerald):** Indicates production health, live deployments, operational readiness, and primary call-to-actions.
- **Secondary (`#06b6d4` / Cyan):** Expresses technical telemetry, code links, documentation, and active protocol indicators.
- **Tertiary (`#6366f1` / Indigo):** Handles deep contextual cues, git commits, architectural branches, and secondary feature highlights.
- **Neutral Base (`#09090b` / Deep Zinc Canvas):** Serves as the bedrock surface for dark mode, layered sequentially with `#18181b` (Surface Raised) and `#27272a` (Surface Border / Interactive Neutral).

### Mode Adaptations

- **Dark Mode (Default):** Canvas `#09090b`, Card Surface `#18181b` (with 60-80% alpha overlays), Muted Borders `#27272a`, Text Primary `#fafafa`, Text Secondary `#a1a1aa`. Accents operate at nominal vibrancies with soft radial backlights.
- **Light Mode:** Canvas `#fafafa`, Card Surface `#ffffff`, Muted Borders `#e4e4e7`, Text Primary `#09090b`, Text Secondary `#71717a`. Accents shift one step deeper (`#059669` emerald, `#0891b2` cyan, `#4f46e5` indigo) to sustain WCAG AAA contrast against light paper surfaces.

## Typography

The typographic hierarchy pairs **Geist** for crisp, proportional geometric clarity with **JetBrains Mono** for developer context, data readouts, commit hashes, and syntax metadata.

### Typographic Principles

- Headings use tight negative letter-spacing (`-0.02em` to `-0.04em`) to establish editorial punch and eliminate loose word shapes at scale.
- Body copy is set at high-legibility optical weights with proportional leading (`1.5` to `1.6`) to ensure comfortable scanning through long-form architecture breakdowns.
- `label-caps` and all tag indicators use uppercase JetBrains Mono with explicit positive letter-spacing (`+0.06em`) for instant distinction from natural language text.

## Layout & Spacing

The layout is anchored around a centered **12-column fluid grid** with a maximum container threshold of `1200px` (or `1440px` for wide documentation views), balancing editorial whitespace against dense technical specs.

### Breakpoints & Geometry

- **Mobile (< 640px):** Single-column stack, outer canvas margin `1.25rem`, grid gutter `1rem`. Dense content modules collapse into card lists.
- **Tablet (640px - 1024px):** 6-column grid, outer margin `1.75rem`, grid gutter `1.25rem`. Two-column project showcase layouts.
- **Desktop (> 1024px):** 12-column grid, outer margin `2rem`, grid gutter `1.5rem`. Multi-pane architecture diagrams, split terminal previews, and modular metric sidebars.

Rhythm follows an **8px base module** (with a secondary 4px step for micro-elements like badge tags and status pips). Section gaps scale to `space-xl` (`2.5rem` to `5rem`), maintaining purposeful isolation between project case studies.

## Elevation & Depth

Visual hierarchy does not use diffuse, muddy drop shadows. Instead, it relies on **tonal layered surfaces**, **crisp 1px borders**, and **subtle colored radial glows**.

### Depth Layers

1. **Base Layer (Level 0):** Pure canvas `#09090b`. Grid backgrounds optionally host a 24px subtle dot matrix or linear wireframe mask at 4% opacity.
2. **Surface Layer (Level 1):** `#18181b` with a 1px solid border of `#27272a`. Backdrops use `backdrop-filter: blur(12px)` when floating over canvas graphics.
3. **Elevated & Hover Layer (Level 2):** `#202024`. Upon pointer hover, containers illuminate with an ambient directional glow: a 1px perimeter border highlight transitioning to `rgba(16, 185, 129, 0.35)` or `rgba(6, 182, 212, 0.35)`, coupled with an outer 24px blurred radial halo of the corresponding accent at 8-12% opacity.
4. **Overlay Layer (Level 3):** Modals, terminal drawers, and command palettes use `#18181b` wrapped in a crisp dual-border: an inner rim of `rgba(255, 255, 255, 0.08)` and an outer perimeter of `rgba(0, 0, 0, 0.6)` with an ambient shadow `0 20px 50px -10px rgba(0, 0, 0, 0.7)`.

## Shapes

The design uses balanced, modern curves aligned with a 16px card standard:

- **Base Cards & Project Panels:** Set strictly to `16px` (`rounded-2xl`). This produces a refined, deliberate curve that avoids both sterile boxiness and childish bubble silhouettes.
- **Interactive Controls (Buttons, Inputs, Selectors):** Standardized to `8px` (`rounded-md` to `rounded-lg`) for a disciplined tool feel.
- **Badges, Status Chips, & Git Hashes:** Standardized to `6px` or full pill (`rounded-full`) when indicating live pulse states.

## Components

### Project Cards

- **Structure:** `border-radius: 16px`, background `#18181b`, border `1px solid #27272a`.
- **Hover State:** Border shifts smoothly (`transition: all 200ms ease`) to `rgba(16, 185, 129, 0.4)` accompanied by a subtle cursor-tracking spotlight glow.
- **Header:** Project title in Geist Headline-SM alongside an external link icon and monospaced release version chip (`v1.4.0`).
- **Footer:** Row of JetBrains Mono tech badges paired with live deployment status indicators.

### Buttons

- **Primary:** Background `#10b981`, text `#09090b` (bold weight), border `1px solid transparent`, radius `8px`. Hover scales brightness with a localized `0 0 16px rgba(16, 185, 129, 0.4)` aura.
- **Secondary / Ghost Dev Button:** Background `rgba(39, 39, 42, 0.5)`, text `#fafafa`, border `1px solid #27272a`. Hover state brings background to `#27272a` and border to `#3f3f46`.
- **Icon Button:** 36x36px bounding box, flex centered, radius `8px`, housing crisp 16px SVG glyphs (GitHub, Terminal, Copy, External).

### Chips & Code Tags

- Monospaced typography (`JetBrains Mono`, `code-md` or `label-caps`).
- Height 24px, horizontal padding 8px, rounded 6px.
- Background `#18181b`, border `1px solid #27272a`, text `#a1a1aa`.
- Active variant: Border tint matched to tech stack (e.g., Cyan `#06b6d4` for React/TypeScript, Emerald `#10b981` for Node/Go) with 10% alpha fill.

### Status Pips & Live Indicators

- 6px circular dot with a continuous ping animation overlay (`animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`).
- Emerald for live systems / open to roles; Cyan for actively shipping; Indigo for archived or research phases.

### Inputs & Terminal Command Bar

- Command inputs (such as quick filter palettes `Cmd + K`) use `#121215`, border `1px solid #27272a`, text `#fafafa`, placeholder `#71717a`.
- Focus state triggers a clean `1px solid #06b6d4` edge with a soft `0 0 0 3px rgba(6, 182, 212, 0.15)` focus ring.
