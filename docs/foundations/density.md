# Air and density

Density is how much meaning sits in one screen. It is a product decision.

## When to use which

| Mode | Product | Signs |
| --- | --- | --- |
| Airy | marketing, onboarding, empty, editorial, consumer first-run | large type, 48–64 section gaps, few objects, one accent |
| Working | most SaaS, settings, profiles | 16–24 inner, 24–32 between groups, body 14–16 |
| Dense | tables, trackers, finance, logs, IDE, console | rows 32–40, padding 8–12, body 13–14, 8–14 objects in the first screen |
| Mixed | a good product | air between modules, density inside a module |

Phone page gutter stays **16** in every density. Airy does not widen the screen margin. See [layout.md](layout.md).

Dense helps when people compare and scan. Air helps when people must understand one thing.

## Evidence, stated as rules

A mobile-first page stretched across desktop becomes empty: few objects, large unused area, related content split across several viewports. Condensed product pages keep about 8–14 objects in view.

Generated UI loves a large container with one number and a lot of air. That is false hierarchy.

Landing-page padding (`py-20`, 48 px titles) inside settings and tables is a defect.

Expressive hierarchy — making the real action larger, not adding glow — makes tasks faster. Flexibility without hierarchy is noise.

## Airy layout

Do:

- One main object on the first screen
- Large display, short copy
- Sections breathe **between** each other; controls stay normal height (a button is not 72 px tall)
- Empty states may be airy
- Form fields still 44–48 tall

Do not:

- `gap-16` inside a toolbar
- A card with one word and 80 px padding
- A centered essay
- The same `py-24` on the hero and the footer

## Dense layout

Do:

- Cut vertical padding, not type size (about −4 per density step)
- Keep 4.5:1 contrast and 24 / 44 / 48 targets
- Glue related columns, separate unrelated ones
- Freeze the table header; give rows hover and selected
- Tabular numbers
- Secondary row actions live in a menu, not as a button per verb

Do not:

- 10 px type
- Rows with no divider (1px or zebra)
- 12 px icons as the only affordance
- Auto-switch density on breakpoint without a person asking

## Mixed — the target for apps

Page: margin 24–32, page title 22–28, muted subtitle.

Working surface (list, table, thread): padding 8–12, tight rows, sticky toolbar 40–48.

Linear, Stripe Dashboard, Figma, Notion: air in marketing, a tool inside. Copy that split, not an average padding.

## Token translation

| Zone | Airy | Default | Dense |
| --- | --- | --- | --- |
| Page margin | 32–48 | 16–24 | 12–16 |
| Section gap | 48–64 | 24–32 | 16–24 |
| Card padding | 24 | 16 | 12 |
| List row | 56–64 | 48 | 36–40 |
| Control height | 48 | 40–44 | 32 (hit 44) |
| Title | 28–32 | 22–24 | 16–18 |
| Body | 16–18 | 16 | 13–14 |

## How to audit

Count unique meaningful blocks in the first 1280 desktop screen.

- 1–3 plus giant fields — too dispersed for an app
- 4–7 — fine for marketing and empty
- 8–14 — fine for a product
- 15+ without grouping — noise, not density

Density without hierarchy is a dump. Group first, then compress.
