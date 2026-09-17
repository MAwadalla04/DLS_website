# Disaster Law Symposium 2026

Responsive Next.js App Router site for **Disaster Law Symposium 2026: Law at the Crossroads — Strengthening Systems for a New Era of Disasters**.

## Routes

- `/` — live symposium landing page with event status and program highlights
- Other routes — temporarily redirect to `/` while the site is in landing-page mode

## Development

```bash
npm install
npm run dev
```

Checks:

```bash
npm run lint
npm run typecheck
npm run build
```

`next.config.mjs` enables static export. The production site is emitted to `out/` and does not require a Node runtime. Set `NEXT_PUBLIC_REGISTRATION_URL` at build time to activate the external registration link; when unset, all registration CTAs safely read `Registration opening soon`.

## Content and migration notes

Typed content lives in `data/`. Only speakers marked `confirmed` and `published: true` appear publicly; proposed speaker records remain available for editorial review. Pricing, CLE approvals, and partner commitments remain intentionally configurable/TBD.

The original HTML/CSS/JS implementation and source assets remain in the repository's root files and `SRC/` directory.
