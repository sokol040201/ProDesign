# Tokens: space, grid, radius

Use the product tokens if they exist. If they do not, install the scale below and replace magic numbers.

## Base

World-class systems share a **4** atom and an **8** step.

| System | Atom | Step | Nested |
| --- | --- | --- | --- |
| Apple | 8 pt | 8 | 4 for optics |
| Material | 8 dp (`space100`) | 8 | 2, 4, 6, 10 |
| Fluent | 4 px | 4 | 2, 6, 10 under icons |
| Carbon | 2 / 4 / 8 | 8 | 2, 4 |
| Stripe Apps | 2 | 8 | 2, 4 |
| Linear / Notion / Figma | 4 | 8 | 12, 20 |

A value off the scale is a defect, except ±1–2 for optical icon alignment.

## Space scale

| Token | px / dp / pt | Use |
| --- | --- | --- |
| space-0 | 0 | reset |
| space-25 | 2 | hairline, icon-to-text in dense UI |
| space-50 | 4 | icon ↔ label, chip guts |
| space-100 | 8 | items in one group |
| space-150 | 12 | control: icon + text |
| space-200 | 16 | button / field padding, compact page margin |
| space-300 | 24 | groups, dense section gap, medium page margin |
| space-400 | 32 | app sections, expanded page margin |
| space-500 | 40 | large blocks |
| space-600 | 48 | airy sections |
| space-800 | 64 | marketing separators |
| space-1200 | 96 | hero / editorial only |

### How to apply

Related things are closer than unrelated ones. If a section title sits closer to the block above than to its own content, the layout is broken.

| Relationship | Gap |
| --- | --- |
| Icon and its label | 4–8 |
| Label and field | 4–8 |
| Fields in one form | 12–16 |
| Card padding | 12 dense / 16 default / 24 airy |
| Neighboring cards | 8–16 |
| Sections on one screen | 24–32 dense, 32–48 default, 48–64 airy |
| Screen ↔ content | see grid |

Padding is inside. Gap is between. Margin is outside. Prefer padding and gap on the parent. Do not hang unique margins on every child.

## Grids

### Web / app

| Width | Name | Columns | Gutter | Margin |
| --- | --- | --- | --- | --- |
| 0–599 | compact | 4 | 16 | 16 |
| 600–839 | medium | 8 | 16–24 | 24 |
| 840–1199 | expanded | 12 | 24 | 24–32 |
| 1200–1599 | large | 12 | 24 | 32 |
| 1600+ | xl | 12 | 24 | 32–64 |

Do not run 12 columns on a phone.

**Phone page gutter is always 16**, even when density is airy. Card padding (`--pd-pad`) is inside the card. Do not use pad as the screen margin, and do not pad a list *and* the column it sits in. Title, list, and cards share one gutter column. Details: [layout.md](layout.md).

### Apple

- Compact width margins: **16 pt**
- Regular width margins: **20 pt**
- Safe area is separate: Dynamic Island, home indicator, bars. Content does not sit under hardware
- tvOS: 60 pt top/bottom, 80 pt sides; grid gutter 40 horizontal, ≥100 vertical
- visionOS: control centers ≥60 pt apart

### Measure width

- Long text: 60–75 characters, about 560–720 px
- App content: 960–1120
- Dashboard canvas: up to 1440, then columns — do not stretch
- A line past ~90 characters on a wide screen is a defect

Do not stretch a mobile column across a desktop. Dispersed screens show fewer than about 7 meaningful objects and large unused area. Condensed product screens show about 8–14.

## Radius

Radius encodes role. One value on everything is slop.

| Role | Apple-ish | Material | Fluent | ProDesign look |
| --- | --- | --- | --- | --- |
| Hairline / small badge | 2–4 | extra-small 4 | small 2 | radius-sm |
| Button, field, chip | 8–12, pill for capsule | small 8 / full | 4 / 8 | radius-sm, or pill if controls = pill |
| Card, list | 10–14 | medium 12 / large 16 | 4–8 | radius-md |
| Modal, popover | 12–16 | large 16 / xl 28 | 12 | radius-lg |
| Full-bleed panel | 0 or device | 0 at the edge | 0 at the edge | 0 at the edge |
| Avatar | full | full | 50% | full |

Radius is a **look choice**, not one number for every product.

| Look | Control | Card | Overlay |
| --- | --- | --- | --- |
| none | 0 | 0 | 0 |
| sharp | 2 | 4 | 8 |
| standard | 4 | 8 | 12 |
| soft | 10 | 16 | 20 |
| round | 14 | 20 | 28 |

`32+` on a small card is blob-rounding. One radius on button, card, and input at once is still banned — roles stay distinct. Pill (`999`) is only for chips or when **controls = pill**.

Chrome (how surfaces separate):

| Look | Surfaces |
| --- | --- |
| outline | 1px border, fields on surface |
| fill | no hairlines; tone shift only |
| mixed | cards fill, fields keep a border |

Pick chrome in the studio. Do not mix outline cards and fill cards on the same screen.

Concentricity: inner radius = outer − padding. Otherwise corners look soapy.

```
radius_inner = max(radius_outer - padding, 4)
```

Do not round an element that kisses the screen edge.

## Hit targets

| Floor | Size |
| --- | --- |
| Accessibility minimum | 24×24 CSS px |
| Apple | 44×44 pt |
| Material | 48×48 dp |
| Fluent mobile | 44×44 |

In a dense table the glyph can be 24–32; the hit area stays 44/48. Icon-only without a name is a defect.

## Alignment

- Start-align text (trailing in RTL). Center only a true marketing hero or a genuinely symmetric composition
- Icon and text share a baseline / optical center
- Table numbers: tabular lining, end-aligned or on the decimal
- Do not center paragraphs and forms “for beauty”

## What to change in code

Hunt `p-[13px]`, `mt-[18px]`, `gap-[22px]`, `rounded-[18px]`. Replace with tokens. If tokens do not exist, add:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 999px;
}
```
