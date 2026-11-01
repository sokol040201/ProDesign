# Typography

Type carries hierarchy. Color and shadow do not replace it.

## Choosing faces

One display, one body, one mono. A single family is fine if it has optical sizes or variable axes.

Do not default to:

- Inter on everything
- Geist / Space Grotesk as the “next shelf after Inter”
- An italic serif word inside a sans headline to look premium
- Monospace on labels in a non-technical product
- Ten sizes at a 1.2 ratio with no display jump

Pick from the product: platform system, brand, or a grotesque that is not the top prompt list. A system stack is more honest than Inter with no brief.

```css
--font-sans: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, monospace;
```

Apple: San Francisco. Android: Roboto or brand. Windows: Segoe. IBM-like: Plex.

## ProDesign web scale

No more than 6–8 styles in a product.

| Role | Size / line | Weight | Tracking | Where |
| --- | --- | --- | --- | --- |
| display | 32–40 / 1.1 | 600–700 | -0.02em | once per screen, rare |
| title | 22–24 / 1.25 | 600 | -0.015em | page, modal |
| subtitle | 16–18 / 1.35 | 600 | 0 | section, card |
| body | 16 / 24 | 400 | 0 | reading |
| body-sm | 14 / 20 | 400 | 0 | dense app, secondary |
| label | 14 / 20 | 500–600 | 0 | buttons, tabs |
| caption | 12 / 16 | 400–500 | 0 | meta, help |
| overline | do not use | | | uppercase + tracking is a tell |

Dense apps: body still 16, title 18–20, row 14. Marketing: body 16–18 / 28, display as needed. Do not “go dense” by dropping body to 12.

## Platform scales

### iOS Dynamic Type (Large / default)

| Style | Size | Weight |
| --- | --- | --- |
| Large Title | 34 | Regular / emphasized |
| Title 1 | 28 | Regular |
| Title 2 | 22 | Regular |
| Title 3 | 20 | Regular |
| Headline | 17 | Semibold |
| Body | 17 | Regular |
| Callout | 16 | Regular |
| Subhead | 15 | Regular |
| Footnote | 13 | Regular |
| Caption 1 | 12 | Regular |
| Caption 2 | 11 | Regular |

Platform defaults / floors: iOS 17 / 11, macOS 13 / 10, tvOS 29 / 23, visionOS 17 / 12, watchOS 16 / 12.

Avoid Ultralight, Thin, Light in UI. Prefer Regular through Bold. Hierarchy must survive larger accessibility sizes. Icons that carry meaning grow with text.

### Material type roles

Display / headline / title / body / label × large / medium / small. Major Second, key size 14. Most products need a subset.

| Style | Size / line | Weight | Tracking |
| --- | --- | --- | --- |
| displayLarge | 57 / 64 | 400 | -0.25 |
| displayMedium | 45 / 52 | 400 | 0 |
| displaySmall | 36 / 44 | 400 | 0 |
| headlineLarge | 32 / 40 | 400 | 0 |
| headlineMedium | 28 / 36 | 400 | 0 |
| headlineSmall | 24 / 32 | 400 | 0 |
| titleLarge | 22 / 28 | 400 | 0 |
| titleMedium | 16 / 24 | 500 | 0.15 |
| titleSmall | 14 / 20 | 500 | 0.1 |
| bodyLarge | 16 / 24 | 400 | 0.5 |
| bodyMedium | 14 / 20 | 400 | 0.25 |
| bodySmall | 12 / 16 | 400 | 0.4 |
| labelLarge | 14 / 20 | 500 | 0.1 |
| labelMedium | 12 / 16 | 500 | 0.5 |
| labelSmall | 11 / 16 | 500 | 0.5 |

Emphasized styles: same size, heavier weight. Use for selected, unread, primary actions. Do not change type size of a role — it breaks components. Change face, weight, tracking.

Brand face for display/headline, plain face for body/label. Line height grows for taller scripts (Arabic, CJK, and taller still for some Indic scripts).

### Other ramps

Fluent web body is 14/20; Title 3 is 24/32. Carbon uses a productive fixed set and an expressive responsive set. Do not mix ramps on one screen.

## Readability

- Line length 60–75 characters
- Body line-height 1.4–1.6. Headings 1.1–1.25. Never 1.0 on a paragraph or 1.6 on display
- Do not track out body text
- Do not crush display until letters touch
- Do not justify without hyphenation
- Do not set paragraphs in capitals
- Web body **16 / 24**. iOS body **17**. Inputs on iOS stay ≥16 px or the page will zoom
- Working chrome (nav item, button, field, row title) **≥ 14 / 20**
- Caption **12 / 16** only for meta (time, version, legal). Not for the page subtitle
- Dense means less padding, not 11 px type. `text-xs` on a row title is a defect
- Do not set `html` / `:root` to 14 px so that `rem` shrinks the whole app. Keep rem = 16 and tighten space tokens

## Hierarchy

A jump, not a staircase. Display must be obviously larger than subtitle; subtitle obviously larger than body. Title 20 with body 16 is almost no hierarchy.

Build hierarchy with one variable at a time, then combine if needed:

1. Space (a heading closer to its block)
2. Weight
3. Size
4. Size + weight
5. Color (last, and never as the only cue)
6. Visual punctuation (a rule, a bullet, a number) — spare

Do not stack italic + bold + underline + color + uppercase on one string.

Weight and color are secondary to size. Semibold is for titles, selection, and buttons — not the whole screen.

Two faces must contrast (serif + grotesque, or one family with a real display cut). Two near-identical grotesques look unfinished.

Body faces: large x-height, modest stroke contrast. Display faces may be sharper. Do not set body in a high-contrast Didone.

Track small type slightly open; track display slightly tight. Do not track body for a “premium” air.

Mobile: body ≥ 16 px, headings about 1.3× body (or a real scale jump), line-height ~1.5–1.6, 4.5:1 on photos via a flat scrim — not a gradient.

Name styles by role and size (`title-md`, `body-sm`), not by HTML (`h2`, `p-bold`). A card title is not always an H2. Tokens stay reusable; heading tags stay semantic for the document.

A brand face may be expressive. Body must stay functional. The more expressive the display cut, the harder it is to localize — global products pick a neutral grotesque for UI and keep the display face for a few moments. Do not invent a new style on a new page.

## Icons beside type

Icon weight equals text weight. Optical size ≈ type size. A 24 icon next to a 12 caption looks like a sticker.

## Dynamics

- iOS: Dynamic Type, containers grow, adjacent columns may stack
- Android: `sp` for type, never `dp`
- Web: `rem` and user zoom
- CJK and Arabic: extra line-height

## Common defects

- Light / thin headings that vanish
- Centered long copy
- More than two families
- New text styles invented per page
- Color used so often it looks interactive
- Sloppy quotes, mixed dashes, double spaces
- Pure `#000` on `#fff` that strobes; prefer near-black / near-white that still pass 4.5:1
- Text on a photo with no scrim
- A 1.2 ladder of sizes with no display jump

```
text-xs text-[11px] text-[12px] on titles / body
html { font-size: 14px }
text-[13px] text-[15px] text-[17px] text-[19px]
font-light font-thin
Inter, Geist, Space Grotesk on :root
tracking-wide on paragraphs
uppercase tracking-widest on every section
font-serif on one word of a sans headline
```
