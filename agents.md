# Project Rules & Guidelines (`AGENTS.md`)

## Tech Stack
- **Framework**: Astro (static output) + TypeScript (`astro/tsconfigs/strict`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Typography**: `Manrope` (Google Fonts, set as `--font-sans` in `@theme`)
- **Navigation**: `astro-navbar` (`<Astronav>`, `<MenuItems>`, `<MenuIcon>`, `<OpenIcon>`, `<CloseIcon>`)
- **Package Manager**: Bun (`bun install`, `bun run dev`, `bun run check`, `bun run build`)

## Architecture: MVVM + SOLID
Keep `src/` compact with 5 top-level directories:

```text
src/
├── models/       # Domain TypeScript contracts & data sources
├── viewmodels/   # Presentation state shaping (LandingViewModel) & client UI controllers
├── views/        # Pure presentational Astro UI (layouts/, components/, sections/)
├── styles/       # Compact functionality-based Tailwind CSS v4 stylesheets
└── pages/        # Astro file-based routes binding ViewModels to Views
```

- **Path Aliases** (in `tsconfig.json`, without deprecated `baseUrl`):
  - `@models/*` -> `./src/models/*`
  - `@viewmodels/*` -> `./src/viewmodels/*`
  - `@views/*` -> `./src/views/*`
  - `@styles/*` -> `./src/styles/*`
- **SOLID Rules**:
  - **SRP**: Keep models, viewmodels, views, and styles strictly separated. Views never hardcode domain arrays.
  - **OCP**: Extend reusable views (`SplitSection`, `ActionButton`, `AmbientGlow`) via props and slots.
  - **LSP**: Polymorphic components (`ActionButton` as `<a>` or `<button>`) and `ILandingModel` implementations must remain interchangeable.
  - **ISP**: Pass only the minimal typed prop slice each section/component needs.
  - **DIP**: Pages and ViewModels depend on `ILandingModel` abstractions, not concrete data implementations.

## Styling & Tailwind CSS v4 Rules
- **Compact Functional CSS (`src/styles/`)** — maintain 4 focused files:
  1. `index.css` — `@import 'tailwindcss'`, `@theme` tokens, `:root` gradients, and `@layer base`
  2. `effects.css` — Custom `@utility` gradients and ambient glow styles
  3. `components.css` — Shared typography, layout helpers, buttons, and cards
  4. `navigation.css` — Navbar-specific styles
- **Theme Tokens Over Raw Values**:
  - Define reusable font sizes (`--text-*`), container widths (`--container-*`), radii (`--radius-*`), colors (`--color-*`), and breakpoints (`--breakpoint-*`) inside `@theme` in `src/styles/index.css`.
  - Avoid arbitrary raw values like `text-[68px]` or `max-w-[470px]` in `.astro` files.
  - Always use canonical Tailwind v4 utility classes (zero `suggestCanonicalClasses` warnings).
- **Spacing & Typography**:
  - Use `flex` + `gap` (e.g., `flex flex-col gap-2`) with natural line-heights (`leading-tight`, `leading-snug`, `leading-relaxed`) instead of oversized `leading-[...]` values.
  - Always separate inline badge/label segments with `flex` + `gap` so formatted markup never collapses spaces.

## Web Performance & Accessibility
- Add `fetchpriority="high"` and explicit `width`/`height` on the hero LCP image (never `loading="lazy"` on LCP).
- Use `loading="lazy"` alone (without `fetchpriority="low"`) on below-the-fold images.
- Keep semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), a single `<h1>` per page, visible `:focus-visible` rings, and `prefers-reduced-motion` guards.

## Verification
Before finishing changes, always run:
```sh
npx tsc --noEmit && ASTRO_TELEMETRY_DISABLED=1 npm run build
```
Ensure **0 errors, 0 warnings, and 0 hints** from `astro check` and `tsc`.
