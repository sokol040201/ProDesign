# Material

Apply to Android, Compose, Flutter Material, and to web only when the product is intentionally Material.

## Three token layers

1. **Reference** — palette, sizes, faces (`md.ref.*`)
2. **System** — roles (`md.sys.color.primary`, `md.sys.typescale.body-large`)
3. **Component** — component properties that point at system tokens, never at a raw hex

Code uses tokens, not `#6750A4`. Contexts (dark, dense, RTL, form factor) change the value; the name stays.

## Space

Base `space100` = **8 dp**.

| Token | dp |
| --- | --- |
| space25 | 2 |
| space50 | 4 |
| space75 | 6 |
| space100 | 8 |
| space125 | 10 |
| space150 | 12 |
| space175 | 14 |
| space200 | 16 |
| space250 | 20 |
| space300 | 24 |
| space400 | 32 |
| space450 | 36 |
| space500 | 40 |
| space600 | 48 |
| space700 | 56 |
| space800 | 64 |

Padding inside, gap between, margin outside. Components almost never use child margins. Leading / trailing, not left / right.

Example search: 8 vertical padding, 8 horizontal gap, 24 horizontal margin (12 when focused).

## Grid and breakpoints

| Class | Width | Columns | Margin |
| --- | --- | --- | --- |
| Compact | 0–599 | 4 | 16 |
| Medium | 600–839 | 8 | 24 |
| Expanded | 840–1199 | 12 | 24 |
| Large | 1200–1599 | 12 | 24 |
| Extra-large | 1600+ | 12 | 24 |

Panes: fixed, flexible, floating, semi-permanent. A spacer sits between panes; a drag handle lives in the spacer when they resize.

Do not auto-flip density at a breakpoint. A person may want a dense desktop and an airy phone separately.

## Component density

Scale: `0` default, then `-1`, `-2`, `-3`.

Each negative step: **−4 dp** on vertical padding or height. **Type size does not change.** Content stays optically centered.

Targets stay 48×48. A dense list row can look shorter; the hit area does not shrink below the floor.

## Shape

| Name | Default | Typical use |
| --- | --- | --- |
| none | 0 | screen edge, nav |
| extraSmall | 4 | small chips, snackbar |
| small | 8 | buttons, fields |
| medium | 12 | cards |
| large | 16 | dialogs, large cards |
| extraLarge | 24–28 | sheets |
| full | 9999 | FAB, pill, avatar |

Not every button is 48 dp: extra-small and extra-large exist so importance can live in size. Inner radius = outer − padding.

## Type

Fifteen baseline styles plus fifteen emphasized. See the table in [typography.md](../foundations/typography.md).

Use emphasized for selected, unread, primary actions, editorial moments. Components ship baseline; swap the token on purpose.

Two faces: brand (display / headline) and plain (body / label). Do not change a role’s size.

Line height adapts to script height. Components with vertical padding must grow.

Display is rare and short. Body is for long reading. Label is for buttons, chips, nav.

## Color

Twenty-six roles in six groups: primary, secondary, tertiary, error, surface, outline.

- **Surface** — backgrounds
- **Primary / Secondary / Tertiary** — accents of different force
- **Container** — component fill, never text
- **On-*** — text and icons on the paired fill
- **Variant** — the quieter pair

Pairs are built for ≥3:1 on UI and readable text on surface. Do not put `primary` text on `primary`. Do not use outline as text.

Dynamic color is fine on Android. On the web without explicit support, use a static product scheme — not baseline purple as the brand.

## Icons

Material Symbols: outlined / rounded / sharp. Axes: weight, fill, grade, optical size.

- One style per product
- Fill for selected / active
- Optical size 20 / 24 / 40
- 24 dp standard, 20 compact, 40 large accent
- Mixing outline and fill in one row is allowed only as rest vs active

## Motion

Two schemes: expressive (default) and standard. Springs, not arbitrary easings.

- Spatial — movement
- Effects — color, opacity, no overshoot
- Speeds: fast (small controls), default, slow (full screen)

No bounce on ordinary transitions. Do not animate every page entrance.

## Expressive hierarchy

Size, shape, color, containment, type, and motion can all point at the same task. A larger button is the key action. Color containment groups a list. The risk of flexibility is a circus. One main action first.
