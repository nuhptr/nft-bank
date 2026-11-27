# HooBank (Astro + Tailwind CSS v4)

Modern fintech landing page built with **Astro**, **Tailwind CSS v4**, and **MVVM + SOLID** architecture.

## MVVM Architecture

```text
src/
├── models/                 # Model: domain contracts & data source
│   ├── landing.model.ts
│   └── landing.data.ts
├── viewmodels/             # ViewModel: presentation state shaping
│   └── landing.viewmodel.ts
├── views/                  # View: pure presentational Astro UI
│   ├── layouts/
│   ├── components/
│   └── sections/
├── styles/                 # Compact functionality-based Tailwind CSS v4
│   ├── index.css           # @theme tokens, gradients, & @layer base
│   ├── effects.css         # @utility gradients & ambient glows
│   ├── components.css      # Typography, layout, buttons, & cards
│   └── navigation.css      # Responsive inline/popover navbar
└── pages/                  # Astro route entrypoint (binds ViewModel -> Views)
    └── index.astro
```

## Commands

| Command | Action |
| :--- | :--- |
| `bun install` | Install dependencies |
| `bun run dev` | Start local Astro dev server |
| `bun run check` | Run Astro & TypeScript diagnostics |
| `bun run build` | Typecheck and build production static site to `dist/` |
| `bun run preview` | Preview the production build locally |
