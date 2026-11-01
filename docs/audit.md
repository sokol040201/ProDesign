# Audit checklist

Work top to bottom. Fix Critical in the same session.

## A. Bans

- [ ] No `linear-gradient` / `radial-gradient` / `conic-gradient`
- [ ] No gradient text
- [ ] No colored glow / aurora
- [ ] No emoji in the UI
- [ ] No Unicode stand-ins for icons
- [ ] One installed icon pack, named in SYSTEM.md
- [ ] Not Lucide
- [ ] No homemade path icons, no emoji stand-ins
- [ ] One stroke / style from that pack
- [ ] Icon-only controls have an accessible name
- [ ] Lists, tables, panels, search, charts: loading / empty / empty-result / error

## B. Grid and space

- [ ] Values sit on the 4/8 scale
- [ ] Page margin matches width (16 / 24 / 32)
- [ ] Phone gutter is 16 and is not doubled on lists
- [ ] Title, list, and cards share one column
- [ ] A heading sits closer to its block than to the block above
- [ ] Related items are closer than unrelated ones
- [ ] Measure text is ~60–75 characters
- [ ] Compact width is not a 12-column grid
- [ ] Native safe areas are respected
- [ ] No magic `p-[13px]` values

## C. Radius and layer

- [ ] Radius follows the chosen look and role, not one value for everything
- [ ] Cards stay on the look scale (round tops at 28; 32+ is a blob)
- [ ] 0 radius at the screen edge
- [ ] Inner radius = outer − padding
- [ ] Outline, fill, or one shadow — not border + shadow together
- [ ] No glass on content cards
- [ ] No colored left bar on cards

## D. Type

- [ ] One or two families plus mono
- [ ] Not a model-default face without a reason
- [ ] A real size jump, not a 1.2 ladder
- [ ] Body is readable (16 web / 17 iOS / 13–14 dense)
- [ ] No thin / ultralight in UI
- [ ] No tracked body, no all-caps paragraphs
- [ ] Type scales with user settings (`rem` / `sp` / Dynamic Type)

## E. Color

- [ ] Roles, not twelve independent hexes
- [ ] One accent, not default indigo
- [ ] Text 4.5:1, UI chrome 3:1
- [ ] Meaning is not color-only
- [ ] Light and dark are complete
- [ ] Focus is visible

## F. Density and hierarchy

- [ ] The app is not laid out like a landing page
- [ ] One primary action per screen
- [ ] No giant KPI tiles without comparison or action
- [ ] No mandatory trio of feature cards
- [ ] First-screen object count matches the density mode
- [ ] Tables and lists scan

## G. Forms and controls

- [ ] Labels stay visible; placeholders are examples
- [ ] Errors: text + icon + edge, not red alone
- [ ] Button = action, link = navigation; Cancel is not primary
- [ ] One primary per region; verb labels, not “OK”
- [ ] Disabled is last resort: active + field errors, or an obvious reason nearby
- [ ] Checkbox / radio / switch / segmented are not swapped
- [ ] Targets ≥ 24, preferably 44 / 48
- [ ] Hover is not the only affordance
- [ ] Disabled and loading are distinct

## H. Navigation and structure

- [ ] Current place is visible
- [ ] Top-level items are 5±2 or grouped
- [ ] Section names are user objects
- [ ] Back / breadcrumbs exist in deep stacks
- [ ] Tabs are not a hidden carousel; tab bar ≤ 5; icon + text
- [ ] Hamburger only on compact; three lines; no other linear icon beside it
- [ ] Search: magnifier, clear, empty-result, query preserved

## I. Views and overlays

- [ ] Table: filters outside, sticky header, empty / filter / error
- [ ] Carousel: no autplay without pause; the important slide is first
- [ ] Card is not a feature triplet and has no left accent bar
- [ ] Overlay matches the task (no modal for a long form)
- [ ] “Popup” is named: dialog, popover, sheet, menu, or toast
- [ ] Popover is anchored; on phone it is a sheet
- [ ] Toast is not the only record of a form error
- [ ] Dialog verbs are specific; destructive is separate
- [ ] Focus is trapped; Escape / back returns to the trigger
- [ ] Motion 120–200 ms, from the origin, no bounce
- [ ] `prefers-reduced-motion` snaps

## J. Imagery and copy

- [ ] Real icons; avatars without a gradient wash
- [ ] Empty states do not use stock photos
- [ ] No marketing fog inside the app
- [ ] The same action has the same name everywhere
- [ ] Numbers have period, baseline, or delta

## K. Platform

- [ ] iOS → [hig.md](platforms/hig.md)
- [ ] Android → [material.md](platforms/material.md)
- [ ] Web → [tokens.md](foundations/tokens.md) + [patterns.md](platforms/patterns.md)
- [ ] No borrowed glass, FAB, or grouped list in the wrong place

## L. Principles

- [ ] Every element earns its place
- [ ] The primary target is large and close
- [ ] Raw choices are grouped (about 5–9)
- [ ] The same action behaves the same way
- [ ] Every action has feedback
- [ ] Irreversible actions confirm
- [ ] There is a way out
- [ ] Recognition, not recall

## M. Perception, charts, copy

- [ ] Interactive and inert do not share the same color
- [ ] Groups follow proximity / similarity / common region
- [ ] Pin, save, favorite, bookmark are not one icon
- [ ] Success feedback exists and matches the stakes
- [ ] Errors: happened / what / how to fix; slips vs mistakes treated differently
- [ ] No fake urgency, hidden cost, trick checkbox, or buried cancel
- [ ] Charts: 2D, zero baseline or a stated exception, a question in the title
- [ ] KPI has comparison and period
- [ ] Punctuation and dashes are consistent
- [ ] Buttons are verbs; no slogan copy
- [ ] In-page tabs are few; critical content is not hidden in a tab
- [ ] Catalog rows have price, name, image, rating+count, variants
- [ ] Dark theme is a full role pair or it does not ship
- [ ] Reduced motion is honored
- [ ] One-off patterns are listed as debt, not left as “style”

## N. Elements

- [ ] Each control / view / overlay / image matches [elements.md](ui/elements.md)
- [ ] Button ≠ link ≠ chip; switch ≠ checkbox; tab ≠ tab bar ≠ segmented
- [ ] Carousel ≠ gallery; loading ≠ skeleton ≠ progress; banner ≠ toast
- [ ] Full-screen overlay has Back and is not a create form
- [ ] Tooltip is not the only label on a phone
- [ ] Title is the H1
- [ ] Logo, photo, illustration follow [imagery.md](ui/imagery.md)

## O. Flows

- [ ] Each touched job matches [flows.md](ui/flows.md) — not a new path
- [ ] Auth, checkout, create, settings are pages
- [ ] Money / delete / leave confirm; like / follow / archive-one undo
- [ ] Pin, favorite, bookmark, save are not one glyph
- [ ] Tour and onboarding are skippable
- [ ] Login returns to the interrupted job
- [ ] Create lands on the object, not an empty list
- [ ] Cancel subscription is not harder than subscribe
- [ ] Verify has resend + a way out

## After fixes

- [ ] `node scripts/scan.mjs <project>`
- [ ] Touched flows were used end to end
- [ ] Sibling screens that share components still hold
- [ ] The ProDesign report is filled
