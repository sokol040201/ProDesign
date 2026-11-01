# ProDesign

A Cursor skill for **web and app UI**. You install it into a product. The agent scans the interface, fixes defects, and maps existing screens onto shared patterns.

It does **not** ship a component kit. No ProDesign buttons, fields, or layouts get pasted into the product. The product keeps its own controls.

Works on web, iOS, and Android. Phone and desktop stay **different patterns** on the same tokens.

## Hard bans

These are not style preferences.

- No gradients
- No emoji in the UI
- One **installed** icon pack. Not Lucide. Not homemade `<path d>`. Not Unicode stand-ins
- Every list, table, search, and chart has loading / empty / empty-result / error

## Install

Needs Node 18+.

```bash
git clone https://github.com/sokol040201/ProDesign.git
cd ProDesign
```

**On this machine** (skill + always-on Cursor rule):

```bash
./install.sh
```

Writes `~/.cursor/skills/prodesign` and `~/.cursor/rules/prodesign.mdc`. After that, every later UI change in Cursor follows the skill.

**Into a product repo** (skill + rule + tokens):

```bash
./install.sh --all /path/to/product
```

In the product that creates:

| Path | What |
| --- | --- |
| `.cursor/skills/prodesign/` | The skill, docs, scan, kit |
| `.cursor/rules/prodesign.mdc` | Always-on rule for later agents |
| `src/design-system/` (or `app/` / `lib/` / root) | Role tokens, `look.css`, `SYSTEM.md` |

Other flags:

```bash
./install.sh --project ./app    # skill + rule only
./install.sh --system ./app     # tokens + SYSTEM.md only
```

## Pick a look

Do not invent density, radius, chrome, or icons. Open the studio:

```bash
node scripts/studio.mjs
# or: node scripts/studio.mjs /path/to/product
```

Axes: surface (web / iOS / Android), viewport (phone / tablet / desktop), density, rounding, chrome (outline / fill / mixed), control shape, icon style, **icon pack**, motion.

Presets: **Console**, **Product**, **Soft app**, **Material**, **Editorial**. Soft app is phone + fill + round. Fill has no hairlines.

Then apply the choice:

```bash
node scripts/apply-system.mjs /path/to/product --profile product
# or flags:
#   --surface ios --viewport phone --density mixed --radius round
#   --chrome fill --controls pill --icons line --icon-pack sf-symbols --motion standard
```

Fill `SYSTEM.md`. It is the contract, not a stub. Name the product, the accent, the installed icon pack, and the patterns in use.

## Scan and fix

```bash
node scripts/scan.mjs /path/to/product
node scripts/scan.mjs /path/to/product --json
node scripts/fix.mjs /path/to/product --profile product
```

`scan` reports Critical and Should (gradients, emoji, Lucide, glow, missing tokens, …). Exit 1 if Critical > 0.

`fix` applies role tokens, cleans mechanical slop, and writes `design-system/AUDIT.md`. Hierarchy, wrong controls, and missing states still need a pass in the product’s own markup.

```bash
npm test
```

## What the agent does

If the skill is installed globally or in the repo, **every UI change follows it**. Start at `docs/apply.md`.

1. Attach the skill to the product
2. Open the studio and lock a look
3. Install tokens if none exist
4. Scan
5. Fix Critical **in the product’s markup**
6. Pick the named element (`docs/ui/elements.md`) and the user job (`docs/ui/flows.md`)
7. Rescan until Critical is 0
8. Verify the flow, not a screenshot

## Docs

First file on a UI task: [`docs/apply.md`](docs/apply.md). Then one group file.

| File | What |
| --- | --- |
| [`docs/apply.md`](docs/apply.md) | A–Z lookup, filters, phone vs desktop |
| [`docs/ui/elements.md`](docs/ui/elements.md) | 49 named parts: Control / View / Overlay / Imagery |
| [`docs/ui/flows.md`](docs/ui/flows.md) | 71 user jobs: auth, pay, create, share, … |
| [`docs/audit.md`](docs/audit.md) | Full checklist |
| [`docs/slop.md`](docs/slop.md) | Generated-UI tells |
| [`docs/README.md`](docs/README.md) | Index of foundations, platforms, UI, craft |

Phone: 16 gutter, grouped list, sheet. Desktop: toolbar, one panel or a table, dialog. Do not copy the phone column onto the desktop canvas.

## Layout

```
SKILL.md                 agent contract
docs/                    patterns
  apply.md               start here
  ui/elements.md         Control / View / Overlay / Imagery
  ui/flows.md            user jobs
  foundations/           tokens, type, color, density, motion, layout
  platforms/             HIG, Material, web
  craft/                 copy, charts, psychology
kit/                     role tokens + SYSTEM.md template (no widgets)
studio/                  look editor
scripts/                 scan, apply, fix, studio
rules/                   Cursor rule
tests/
install.sh
```

This repository **is** the skill. Edit `SKILL.md`, `docs/`, `kit/`, and `scripts/`.

## License

MIT
