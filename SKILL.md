---
name: prodesign
description: >-
  Universal UI/UX skill for web interfaces and native apps (iOS, Android,
  phone, tablet, desktop). Use whenever you build, change, review, or polish
  any interface: pages, screens, layout, buttons, links, forms, fields,
  navigation, tab bars, sidebars, filters, search, tables, lists, cards,
  dialogs, sheets, popovers, menus, toasts, empty states, loading, errors,
  icons, motion, spacing, or user flows (sign in, pay, create, share). Installs into a product, scans for defects, and
  applies shared patterns. Does not ship a foreign component kit. Removes AI
  slop: no gradients, no emoji, no Lucide-by-default, no decorative symbols.
  After a global install, follow this skill on every UI change — start at
  docs/apply.md.
---

# ProDesign

A universal skill you install into another project. The agent applies shared patterns to **this** product’s interface — web, iOS, or Android; phone or desktop. It does not drop in ProDesign widgets or a foreign layout.

## Hard bans

These are not style preferences.

1. **No gradients.** No `linear-gradient`, `radial-gradient`, `conic-gradient`, gradient text, colored glow, or aurora blobs. Color is a flat token.
2. **No emoji in the UI.** Not in buttons, navigation, empty states, badges, titles, or as icons.
3. **One installed icon pack.** Phosphor, Heroicons, Tabler, Iconoir, SF Symbols, Material Symbols, Fluent, Carbon, or another complete family. **Not Lucide.** Not homemade `<svg><path>`. Not emoji or Unicode stand-ins (`→`, `✓`, `✦`, `★`, `⚡`). If the pack has no glyph, use a synonym or text.
4. **Every data container has states.** List, table, inbox, search, chart, folder: loading, empty, empty-result, error. A blank box is a defect.
5. **No leftover OS chrome.** Select, checkbox, radio, date, time, file, and range use the product tokens: same height, radius, type, border, and focus as the text field. An unstyled native `<select>` is a defect. `appearance: none` + tokens, or a combobox built on the system. Do not ship the browser’s default control.
6. **Type floors.** Web body **16 / 24**. Working chrome (nav, button, field, row title) **≥ 14**. Caption **12** only for meta. `text-xs`, 11 px body, or `html { font-size: 14px }` that shrinks the app is a defect. Dense is tighter space, not tiny type.
7. **No manifesto on a working screen.** The H1 is the place name (`Materials`, `Invoices`), not a slogan. Delete the overline, the subtitle that restates the nav, the footer reassurance, and the mascot. The sidebar is **mark + places + account** — no workspace card, shield sermon, or “you’re in control”. If the UI is clear, the sentence goes.
8. **Tokens replace the old look.** `tokens.css` next to leftover hex, a second `:root` palette, or a `design-refresh.css` overlay is **not** applied. Edit the product stylesheet. Every color, radius, and space is a token. Off-scale padding (`13px`, `20px`, `15px`) is a defect.
9. **No costume process.** Numbered `01–06` circles with arrows, a “production line” strip, or decorative pills under a slogan are not a wizard. Use a list, a table, or a real step the person is in.

## Job

If this skill is installed globally (`~/.cursor/skills/prodesign`) or in the repo, **every later UI change follows it**. Do not invent a button, filter, or dialog. Open [apply.md](docs/apply.md) and pick the pattern.

When this skill is attached, **do the work in the product**. Finish only when:

1. ProDesign is installed in the project (skill + Cursor rule)
2. A design system exists in the product (`design-system/` with tokens and `SYSTEM.md`)
3. Scan Critical is 0
4. Touched screens use tokens, not magic numbers
5. Data containers have the four states
6. Controls match [elements.md](docs/ui/elements.md) — restyled, not OS-native
7. Type meets the floors. No Inter-by-default
8. Working screens have no slogan H1, overline, extra explanation, costume pipeline, or leftover hex beside tokens

Do not stop at a report. A report is the last step, after the fixes.

## Workflow

Copy and check off:

```
ProDesign
- [ ] 1. Attach to the project
- [ ] 2. Open the studio and pick a look
- [ ] 3. Platform
- [ ] 4. Install the system
- [ ] 5. Scan
- [ ] 6. Fix and systemize
- [ ] 7. Rescan and verify
```

### 1. Attach to the project

Host repo = the product, not this skill repo.

If `.cursor/skills/prodesign/SKILL.md` is missing:

```bash
# from the ProDesign clone
./install.sh --project /path/to/product
```

This copies the skill, the scan, the kit, and an always-on Cursor rule so later agents keep the system.

If only the personal skill exists (`~/.cursor/skills/prodesign`), still install into the product so the team shares it.

### 2. Open the studio and pick a look

Do not invent density, radius, chrome, or icons. Open the editor and let the person pick, with phone and desktop live:

```bash
node scripts/studio.mjs
# or open studio/index.html
```

Axes: surface (web / iOS / Android), viewport (phone / tablet / desktop), density, rounding (none → round), chrome (outline / fill / mixed), control shape (rect / pill), icon style (line / solid), **icon pack** (not Lucide), motion (none / subtle / standard).

Studio shows phone and desktop as **different patterns** on the same tokens. Phone: 16 gutter, grouped list, sheet. Desktop: toolbar, stacked list / form / empty, one panel, dialog. Do not copy the phone column of pills onto the desktop canvas.

Presets: **Console**, **Product**, **Soft app**, **Material**, **Editorial**. Soft app is phone + fill + round. Fill has no hairlines.

Record the choice, then apply it:

```bash
node scripts/apply-system.mjs /path/to/product --surface ios --viewport phone --density mixed --radius round --chrome fill --controls pill --icons line --icon-pack sf-symbols --motion standard
# or: --profile console | product | soft-app | material | editorial
```

### 3. Platform

Do not invent a look. Match the product.

| Signal | System | Read |
| --- | --- | --- |
| iOS / iPadOS / macOS / visionOS | Apple platform | [hig.md](docs/platforms/hig.md) |
| Android / Compose / Flutter Material | Material | [material.md](docs/platforms/material.md) |
| Web / SaaS / admin | Product tokens, else the ProDesign web profile | [tokens.md](docs/foundations/tokens.md), [patterns.md](docs/platforms/patterns.md) |

Density: [density.md](docs/foundations/density.md)

- **Airy** — marketing, onboarding, editorial
- **Dense** — tables, dashboards, consoles
- **Mixed** — air around the page, density in the working surface. Default for good apps

### 4. Install the system

If the product has no token file and no `SYSTEM.md`:

```bash
node .cursor/skills/prodesign/scripts/apply-system.mjs .
```

or from this repo: `node scripts/apply-system.mjs /path/to/product`

Then **fill `SYSTEM.md`**. The template already locks the look (surface, gutter, radius roles, chrome, motion, overlays, icon pack). Write the product name, accent, the installed icon pack (not Lucide), type, and the patterns in use. Do not leave blanks. Do not invent a second overlay language beside it. Do not draw icons.

If a system already exists, do not replace it. Re-token stray values onto it. If the product already has components, keep them and map them to roles.

Minimum system: [design-systems.md](docs/foundations/design-systems.md). The kit is **roles and SYSTEM.md**, not buttons and fields.

### 5. Scan

```bash
node .cursor/skills/prodesign/scripts/scan.mjs .
# or: node scripts/scan.mjs <product> --json
```

Then read [slop.md](docs/slop.md) and [audit.md](docs/audit.md). The script is a detector. Hierarchy, wrong controls, and missing states still need a human-quality pass.

### 6. Fix and systemize

Edit the product’s **real** CSS and markup. Do not add `design-refresh.css` or a second `:root` palette.

**Restyle pass — tokens.css is not the finish.** Do not stop after apply-system.

1. Delete leftover hex / rgb in working CSS. Every color is a token from `SYSTEM.md`
2. Snap padding, margin, gap to the 4/8 scale. One page gutter. No `13px` / `15px` / `20px` leftovers
3. Restyle every control to field tokens. OS chrome is a defect
4. Delete manifesto, overline, costume pipeline (`01–06` circles), mascot essays, decorative pills
5. Sidebar = mark + places + account
6. Type floors. One accent
7. Loading / empty / empty-result / error — in the product’s own views
8. One **pattern** per job — [apply.md](docs/apply.md) → [elements.md](docs/ui/elements.md) / [flows.md](docs/ui/flows.md)

A tokens file imported next to leftover olive, leftover blue, or Inter is not applied.

### 7. Verify

- Scan again. Critical must be 0
- Use the changed screens: click, type, empty, error
- Check sibling routes that share tokens or components
- If a browser is available, verify behavior, not a single screenshot

## Default web tokens

Use when the product has no system. These are roles, not a skin. Map them onto the platform or the existing theme.

| Role | Value |
| --- | --- |
| Grid | 4px atom, 8px step |
| Space | 0 4 8 12 16 24 32 40 48 64 |
| Page margin | 16 compact / 24 medium / 32 expanded |
| Content max | 720 text, 1120 app, 1440 dashboard |
| Radius | from the chosen look (none / sharp / standard / soft / round). Pill only on chip or when controls = pill |
| Chrome | outline, fill (no hairlines), or mixed |
| Type | 1 display + 1 body + 1 mono. Not Inter by reflex |
| Body | 16/24 web, 17 iOS, 14–16 dense app |
| Color | canvas, text, one accent, semantics |
| Elevation | 1px border **or** tone shift **or** one shadow. Not border + shadow |
| Motion | 120–200ms, no bounce. Enter from the origin |
| Overlay | dialog / popover / sheet / menu / toast — “popup” is not a type |

## Report

Write this **after** the fixes.

```markdown
## ProDesign
Project: …
Platform: web | iOS | Android | mixed
Viewport: phone | tablet | desktop
Density: airy | dense | mixed
Radius: none | sharp | standard | soft | round
Chrome: outline | fill | mixed
System: path/to/design-system/SYSTEM.md
Scan: critical 0 / should N

### Installed
- tokens, states, rule, installed icon pack

### Fixed
- file:line — defect — what changed

### Left (should / debt)
- …
```

## References

Read only the file you need. Start: [apply.md](docs/apply.md). Index: [docs/README.md](docs/README.md).

- [apply.md](docs/apply.md) — pick a pattern, then stop
- [elements.md](docs/ui/elements.md) — Control / View / Overlay / Imagery
- [flows.md](docs/ui/flows.md) — user jobs (onboarding, auth, commerce, social, content)
- [audit.md](docs/audit.md) — full checklist
- [slop.md](docs/slop.md) — generated-UI tells
- [design-systems.md](docs/foundations/design-systems.md)
- [tokens.md](docs/foundations/tokens.md)
- [layout.md](docs/foundations/layout.md)
- [motion.md](docs/foundations/motion.md)
- [typography.md](docs/foundations/typography.md)
- [color.md](docs/foundations/color.md)
- [density.md](docs/foundations/density.md)
- [principles.md](docs/foundations/principles.md)
- [hig.md](docs/platforms/hig.md)
- [material.md](docs/platforms/material.md)
- [patterns.md](docs/platforms/patterns.md)
- [components.md](docs/ui/components.md)
- [navigation.md](docs/ui/navigation.md)
- [states.md](docs/ui/states.md)
- [behavior.md](docs/ui/behavior.md)
- [controls.md](docs/ui/controls.md)
- [forms.md](docs/ui/forms.md)
- [views.md](docs/ui/views.md)
- [overlays.md](docs/ui/overlays.md)
- [icons.md](docs/ui/icons.md)
- [imagery.md](docs/ui/imagery.md)
- [empty-states.md](docs/ui/empty-states.md)
- [examples.md](docs/craft/examples.md)
- [psychology.md](docs/craft/psychology.md)
- [charts.md](docs/craft/charts.md)
- [copy.md](docs/craft/copy.md)
- [kit/](kit/) — role tokens + SYSTEM.md template (no widgets)
