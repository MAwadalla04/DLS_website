# Disaster Law Symposium 2026

Responsive Next.js App Router site for **Disaster Law Symposium 2026: Law at the Crossroads — Strengthening Systems for a New Era of Disasters**.

## Routes

- `/` — symposium thesis, event status, program highlights, and registration CTA
- `/program` — complete chronological agenda and CLE details
- `/speakers` — confirmed speaker directory and accessible biography dialog
- `/venue` — venue status, travel, accessibility, and accommodation information
- `/sponsors` — partner tiers and partnership CTA
- `/register` — registration status, FAQ, and external registration CTA

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
