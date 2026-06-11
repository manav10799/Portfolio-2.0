# Manav Arora — Portfolio

> **Ink & Signal, above the treeline.** Near-black canvas, one electric accent,
> mono labels, and a particle field shaped like a mountain ridgeline that
> reacts to your cursor.

## Stack

- **Vite + React 19** — single scroll page, no router
- **Tailwind CSS v4** — utilities mapped to CSS custom properties
- **Framer Motion** — entrance reveals, scroll-driven timeline
- **Raw canvas** — hero particle ridgeline (no WebGL library)
- **Fonts** — Space Grotesk (display) + JetBrains Mono (labels), both variable

## Local setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run lint
```

## Architecture

```
src/
  styles/tokens.css    design tokens: colors, fluid type scale, spacing, motion
  index.css            Tailwind @theme map, base styles, keyframes
  data/content.js      all copy and data — edit content here, not in components
  components/          Cursor, ScrollProgress, RidgeParticles, Reveal,
                       TiltCard, SectionHeading
  sections/            Nav, Hero, About, Work, Skills, Experience,
                       Contact, Footer — one file per section
```

### Design decisions

- **Tokens first.** Every color, duration, and size lives in
  `src/styles/tokens.css`. Light mode is one class (`.light`) flipping the
  same variables; an inline script in `index.html` applies it pre-paint so
  there's no flash.
- **Mountain motif everywhere, loud nowhere.** Hero particles trace a
  ridgeline; About has a "you are here" ridge mark; Experience is "the route
  so far" with camps; Skills sit on topo lines.
- **Custom cursor** mounts only on fine pointers — touch devices keep native
  behavior. Dot tracks 1:1, ring lerps behind, both grow on interactive
  elements.
- **Motion respects `prefers-reduced-motion`** — particles render a static
  frame, reveals appear instantly, keyframe loops stop.
- **3D tilt on project cards** is a raw perspective transform, no library.
- **Contact form** opens your mail client pre-filled (no backend), with a
  particle-burst micro-interaction on transmit.

### Editing content

Everything visible — bio, projects, experience, skills, socials, photos —
lives in [src/data/content.js](src/data/content.js). Components read from it;
no copy is hard-coded in JSX.
