# Design systems

A system is named decisions that repeat in code and in the mock. Audit and build from the top down.

## Four levels

1. **Product** — what it is, who it is for, why it exists. Without this, every screen becomes generic SaaS
2. **Design system** — style, color, type, radius, space, voice
3. **Feature** — the screen’s job, content, information architecture
4. **Component** — type, states, interaction, properties

Do not start with a card. Start with the product and the tokens.

## Install into the product

From the ProDesign repo:

```bash
./install.sh --all /path/to/product
```

This puts the skill in `.cursor/skills/prodesign`, a Cursor rule in `.cursor/rules/prodesign.mdc`, and **role tokens + SYSTEM.md** in `src/design-system/` (or `design-system/`). No Button / Field / Empty widgets.

Roles only:

```bash
node scripts/apply-system.mjs /path/to/product
```

Then fill `SYSTEM.md`. If tokens already exist, keep them. Map the product’s existing controls onto roles. A starter-kit gray theme is not a brand.

`tokens.css` sitting next to leftover hex, a `design-refresh.css` overlay, or a second `:root` palette is **not** a system. Restyle the product stylesheet.

## Minimum system

Named decisions, not a component folder. `SYSTEM.md` must lock all of this, not leave blanks:

```
product
  name, who it is for, the job
look
  surface / viewport / density / radius / chrome / controls / icon pack (not Lucide) / motion
tokens
  space: 4 8 12 16 24 32 40 48 64
  gutter: 16 phone / 24 tablet / 24–32 desktop
  radius: control / card / overlay / pill
  type: display title body label caption
  color: canvas surface text muted border accent danger
  motion: 120–200 ms, no bounce
  elevation: outline | fill | mixed
overlays
  short decision, object menu, status, what is never a modal
patterns
  one primary per region
  four states on every data container
  the right control for the job
voice
  verbs, banned words
```

Keep the product’s buttons, fields, and lists. Change how they are used. Agents read `SYSTEM.md` before they invent a radius or a “popup”.

## Rules

- Token name = role, not value (`--color-accent`, not `--color-purple-500`)
- A component points at tokens
- Variants come from meaning (primary / danger), not “the big blue one”
- Every state is specified: rest hover focus active disabled error
- Themes: light and dark from the same roles
- Density is a modifier on space, not a second universe of components

## Atoms as vocabulary

Tokens → button-with-icon → list panel → app shell → page. Do not draw an organism that skips tokens.

## When to inherit the platform

| Product | Base | Customize |
| --- | --- | --- |
| iOS app | Apple + UIKit / SwiftUI | accent, icons |
| Android app | Material | brand/plain type, primary |
| Windows | Fluent | theme |
| IBM-like enterprise | Carbon | productive density |
| Web SaaS | ProDesign web profile | product character |

Do not mix Apple glass, a Material FAB, and a Carbon table on one web surface.

## How to inspect a foreign project

1. Is there a token file? If not, create one
2. How many unique radii / font sizes / hexes live in the UI folder? Too many means there is no system
3. One installed icon pack (not Lucide, not handmade paths)?
4. Shared Empty / Error?
5. Theme via roles, or a hard-coded dark class?

## Voice

The system includes copy. The same words for the same actions. Not Delete / Remove / Trash in three places. Buttons are verbs. Empty states follow [empty-states.md](../ui/empty-states.md).

## Behavior is part of the system

Document hover, focus, press, disable, enter/exit once. Same duration, same easing, same focus ring. If every feature invents its own hover, there is no system — that is UX debt.

## UX debt

A one-off screen, a skipped state, a new radius “just here” is debt. List it. Repay in the same sprint as nearby work. A design system and known patterns are how you stop adding more.
