# AGENTS.md

## Communication

- Respond to the user in Japanese.
- Use English for commit messages.

## Project Overview

- This project is a Next.js 16 app for browsing San Francisco AI startups on a map.
- The UI is intentionally simple and product-like, not editorial or playful.
- The map is powered by `maplibre-gl`.

## Commands

- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`

## UI Rules

- Keep the app `light` only. Do not reintroduce system dark mode or a dark-mode toggle.
- The page should be white-first and neutral. Do not use dark navy backgrounds.
- Do not add rounded corners unless explicitly requested.
- Do not add decorative gradients, glassmorphism, or editorial styling unless explicitly requested.
- Keep the layout flat, clean, and product-focused.

## Layout Rules

- Do not allow the whole page to scroll.
- The sidebar should scroll internally.
- On first load, the map should show San Francisco as a whole, not jump to a single startup.
- Map markers should remain visible in the initial viewport.

## Implementation Notes

- Startup data lives in `lib/companies.ts`.
- Sidebar UI lives in `components/discovery-panel.tsx`.
- Company cards live in `components/company-card.tsx`.
- Map rendering lives in `components/map-shell.tsx`.
- Company logos are shown in both cards and map markers. Keep those in sync.

## Change Discipline

- Prefer small, direct edits over broad redesigns.
- Before changing shared styles, confirm whether the user wants that scope.
- Do not edit `app/globals.css` unless the user explicitly asks for it.

## Cursor Cloud specific instructions

- **Single service**: This is a static-export Next.js app with no backend, database, or API routes. The only service to run is `pnpm dev` (Turbopack dev server on port 3000).
- **No external secrets required**: The app uses hardcoded company data and public map tiles (CartoDB). No API keys or environment variables are needed for local dev.
- **`pnpm install` warning about build scripts**: pnpm may warn about ignored build scripts for `msw`, `sharp`, and `unrs-resolver`. These are non-blocking and do not affect dev or build. Do not run `pnpm approve-builds` interactively.
- **Static export**: `next.config.mjs` sets `output: "export"`, so `pnpm build` produces a static `out/` directory. `pnpm start` (SSR server) will not work; use `pnpm dev` for development.
- **Lint has 1 expected warning**: ESLint reports a single `@next/next/no-img-element` warning in `components/company-card.tsx`. This is intentional and not a blocker.
