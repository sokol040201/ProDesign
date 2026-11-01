# Color

Color encodes meaning: interactivity, status, brand, grouping. If it encodes nothing, drop the saturation.

## Gradient ban

A gradient is a defect. Replace it with a flat surface token or a flat accent.

This includes gradient text, aurora blobs, radial halos, colored `box-shadow`, stacked-area fades under every chart, and indigo→violet on a hero and a button.

Exception: the interior of a color picker, which is a tool, not decoration.

## Roles, not a twelve-hue rainbow

Minimum set:

| Role | Job |
| --- | --- |
| canvas | page |
| surface | card, panel, field |
| surface-raised | modal, popover |
| text | primary copy |
| text-muted | secondary, still meets contrast |
| border | 1px divider |
| accent | one action / one brand |
| accent-on | text on accent |
| danger | destructive |
| warning | risk, not failure |
| success | complete |
| info | neutral status |

On Apple, use semantic label / secondaryLabel / systemBackground / separator.  
On Material, use primary / on-primary / surface / on-surface / outline / error.  
Do not redefine a role.

One accent. Secondary and tertiary exist only when the product truly distinguishes them (filters vs FAB), not “to look richer”.

## Picking an accent

1. If there is a brand color, use it. Do not “improve” it into indigo
2. If there is not: a dark neutral plus one bright hue outside the violet band
3. Banned model default: indigo/violet (OKLCH hue ~250–320), `#6366f1`, `#8b5cf6`, `#6750A4` as a generic primary
4. Do not ship permanent dark + neon
5. Do not ship cream + amber as the “tasteful” escape from purple unless that is the brand

## Contrast

| What | AA | AAA |
| --- | --- | --- |
| Text | 4.5:1 | 7:1 |
| Large text ≥18 CSS px bold / ≥24 regular | 3:1 | 4.5:1 |
| Non-text: meaningful icon, control edge, focus, checked | 3:1 | |
| Disabled | exemption, but never the only way to read state |

Gray text on a saturated panel almost always fails. On a colored fill, use the same hue, darker and drier, or white if contrast holds.

Do not encode error with red alone: icon + text.

Check light, dark, and increased contrast. A half-converted theme is a defect.

## Surfaces

Light theme: canvas and surface must differ, or cards vanish. Difference is a 1px border or a faint tone, not a 40px shadow.

Dark theme: do not pair mid-gray body with near-black without measuring. Scrollbars, date pickers, and autofill must not flash white.

Elevation: **either** a hairline border **or** one shadow level. Hairline plus a wide diffuse shadow together is a tell.

A colored stripe on the left of a card is one of the most recognizable generated-UI marks. Remove it.

## States

| State | How |
| --- | --- |
| hover | surface or border shift, not a new rainbow |
| focus | 2–3 px ring at 3:1, never hover-only |
| pressed | slightly darker or inset |
| selected | fill or accent **and** weight or icon |
| disabled | muted + `disabled`, not paleness alone |
| error | danger + text + icon |

## Contrast in practice

Ratio is perceived luminance, 21:1 (black/white) down to 1:1 (same).

| Thing | AA | AAA |
| --- | --- | --- |
| Body text | 4.5:1 | 7:1 |
| Large text (≥24 px, or ≥19 px bold) | 3:1 | 4.5:1 |
| Control outline, icon, focus | 3:1 | |

Text on a photo: a flat scrim or a halo of the canvas color. Measure the worst patch of the image, not the average.

Text on a gradient is banned in this skill. If a legacy gradient remains, every stop must still pass — then replace the gradient.

A control may need several ratios: label vs fill, icon vs fill, edge vs canvas.

Placeholder and muted text still need to be readable or they are decoration pretending to be content.

White looks larger than an equal black shape (irradiation). Hairlines and thin type need extra weight on dark canvases.

## Building a palette

1. Canvas and text first — they do most of the work
2. One accent from the brand, not from a yearly color forecast
3. Danger / warning / success that are not the accent
4. A muted step for meta
5. Test light and dark as a pair

Do not pick a palette from a trend list (magenta year, “light effects”, gray moodboards). Do not use bright color on every card. Bright color means interactivity or a single brand moment.

Hue psychology is weak and cultural. Do not encode “trust = blue” as a strategy. Encode roles.

Screen color is light (HEX / RGB / OKLCH). Print color is ink (CMYK / a spot book). They never match 1:1 — keep two palettes if the brand prints.

Two or three hues, then tints / shades / tones of those hues. Name roles (`accent`, `neutral`, `danger`), not `blue-2`. Scale steps 50–900 with room to insert; do not number 1, 2, 3. Pair every fill with an `on-*` color that already passes contrast.

60 / 30 / 10 is a feel, not a spreadsheet: most of the screen is canvas, a third is surface / brand, a tenth is the action. The accent is the action, not the wallpaper.

The CTA hue must not be the danger or warning hue. A red Buy next to a red Delete is a defect.

## Dark theme

A complete pair of the same roles, not a CSS invert.

- Follow the system setting by default; offer a manual override in products used in the dark (readers, players, chat)
- Test overlays, floating panels, autofill, and mail separately
- Hairlines and thin type need extra weight (irradiation)
- Photos and video do not need a theme; everything around them does
- Dark + neon is costume unless it is the brand
- Dark mode is not a conversion trick. Ship it when people sit in the product for a long time, use it at night, or live in a low-light context. Do not spend a sprint on it before contrast and empty states work in light

## Charts and tags

- One data series, one color — not a rainbow per bar
- Status dots: color plus a label or a shape
- Tags: neutral fill; color only for semantic status

## Glass

On Apple, tint glass only on the primary control (Done). On the web, `backdrop-filter` is almost always costume. Use it only when a layer truly sits on live content.
