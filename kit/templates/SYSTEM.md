# Product system

This file is the source of truth for agents in this repo. Fill the blanks. Do not invent a second look beside the locked choices.

ProDesign does not replace product controls. It names roles, space, motion, and overlays.

## Product

- Name:
- Who it is for:
- Job of the product:
- Job of the first screen people hit:

## Look (locked)

Do not restyle these without an explicit product decision.

- Surface: {{surface}}
- Inherit: {{inherit}}
- Primary viewport: {{viewport}}
- Density: {{density}}
- Radius look: {{radius}} — control {{radius_sm}} / card {{radius_md}} / overlay {{radius_lg}}
- Chrome: {{chrome}} — {{elevation}}
- Controls: {{controls}}
- Icons: {{icons}} from **{{icon_pack}}** (installed pack, not Lucide, not handmade)
- Motion: {{motion}} — {{motion_ms}}

## Platform

- Tokens stay the same on phone and desktop. Patterns do not: sheet vs dialog, grouped list vs one panel / table, tab bar vs sidebar.
- Phone page gutter is **16**. Tablet **24**. Desktop page margin **24–32**. Never use card padding as the page gutter.
- Safe area is extra: status bar, home indicator, notches. Content does not sit under hardware.
- 0 radius on anything that kisses the screen edge.

## Tokens

- Where they live: `design-system/tokens.css` + `look.css`
- Accent (one):
- Icon pack (one, installed): {{icon_pack}}
- Icon style: {{icons}}
- Wrapper component (optional):
- Type: display / body / mono
- Space atom 4, step 8
- Page gutter: {{gutter}} on the primary viewport
- Elevation: {{elevation}}
- Focus: 2px ring, token color, not a glow

## Motion

Read the skill’s `docs/foundations/motion.md` and `docs/ui/overlays.md`.

- Duration: 120–200 ms (this look: {{motion_ms}})
- Curve: ease-out / platform standard. No bounce on working controls
- Hover: opacity or tone, not a jump
- Press: 98% scale or a 1 px settle, {{motion_ms}}
- Overlay enter: fade + {{motion}} shift from the trigger (sheet from bottom, dialog from center, popover from the button)
- Overlay exit: faster than enter
- Respect `prefers-reduced-motion` — snap, do not fade for 400 ms
- No looping “delight” on load. Progress may loop. Decorative bounce is a defect

## Overlays

Pick by job, not by component name. “Popup” is not a type.

| Job | This product |
| --- | --- |
| Short decision (confirm, discard) | {{overlay_short}} |
| Actions on one object | {{overlay_menu}} |
| Extra context, page still useful | popover on desktop, sheet on phone |
| Status, no answer needed | toast (bottom on phone, corner on desktop) |
| Long task / many fields | a **page**, never a modal |

Rules:

- Never open a modal from a modal
- Trap focus. Escape / system back / swipe closes. Focus returns to the trigger
- Title = the question. Buttons are verbs. Destructive is separate
- Do not close a costly confirm on scrim click
- One overlay at a time. A toast may sit on a page, not on a dialog
- Popover is anchored to a control and is non-modal unless it must steal a choice
- Tooltip is a name, not a paragraph, and is nearly useless on touch — prefer a visible label

## Icons

- Pack: **{{icon_pack}}** — a complete catalog, installed (npm, SPM, Gradle, or the platform kit)
- Style: {{icons}}. Solid only for selected / on, from the same pack
- Import named glyphs from that pack. Do not paste `<path d>` into screens
- Not Lucide. Not emoji. Not a second family “just here”
- Missing name → synonym from the pack, or a text label. Do not draw a replacement
- Read the skill’s `docs/ui/icons.md`

## Patterns in use

- Primary action:
- Secondary action:
- Field + label + helper + error:
- Search: field + results + empty-result
- Empty / loading / empty-result / error (every data container):
- Navigation: tab bar / sidebar / top bar:
- Filters:
- Overlay language (dialog / sheet / toast — not “popup”):
- Destructive confirm:

## Flows

Jobs this product actually has. Use the skill’s `docs/ui/flows.md`. Same job → same path.

- First-run:
- Auth:
- Create:
- Money / subscribe:
- Destructive:
- Share / invite:

## Layout

- Compact (phone): 4 columns, gutter 16, margin 16
- Medium (tablet): 8 columns, margin 24
- Expanded (desktop): 12 columns, margin 24–32, content max 1120 app / 720 text
- Title, list, and cards share the **same** page gutter. Do not double-pad a list inside an already padded column
- Related things are closer than unrelated ones

## Controls (must be restyled)

OS chrome is a defect. Select, checkbox, radio, date, time, file, range use the same height, radius, type, border, and focus as the text field (`appearance: none` + pack icon).

## Type floors

- Body 16 / 24 (web). Chrome ≥ 14. Caption 12 only for meta
- Do not shrink `html` / `:root` below 16 px to make a “dense” app

## Voice

- Primary action verb:
- Words we never use:
- Working screen H1 = the place name, not a slogan. No overline. No mission subtitle
- Errors say what happened and what to do

## States every container must have

- Loading
- Empty (first use)
- Empty-result (filters / search)
- Error (retry)

## Debt

- [ ]
