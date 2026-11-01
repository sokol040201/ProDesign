# Layout

Page structure, gutters, and why a phone looks crooked when the numbers are “almost 16”.

## Page gutter is not card padding

| Token | Role | Phone | Tablet | Desktop |
| --- | --- | --- | --- | --- |
| `--pd-gutter` | Screen → content | **16** | **24** | 24–32 |
| `--pd-pad` | Inside a card / field block | 12 dense / 16 mixed / 24 airy | same | same |
| `--pd-section` | Between groups | 16–24 on phone (cap it) | 24 | 24–48 |

Defects:

- Using `--pd-pad` as the page margin. Airy pad is 24; a phone page margin that becomes 24 + a list that adds another 16 looks uneven against a 16 pt title.
- Double padding: a padded column **and** a padded list inside it. Title, list, and cards must share one gutter column.
- Edge-to-edge cards under an inset title. The title at 16 and the card at 0 is the “crooked” phone.
- Full-bleed media is allowed; then radius is 0 on the screen edge.

```
[ screen ]
  16 gutter
    title
    card / list / form   ← same width
    card
  16 gutter
```

On iOS and Android the **safe area** is extra. Gutter starts *inside* the safe area, not under the notch or the home indicator.

## Columns

| Width | Columns | Gutter | Margin |
| --- | --- | --- | --- |
| 0–599 compact | 4 | 16 | 16 |
| 600–839 medium | 8 | 16–24 | 24 |
| 840+ expanded | 12 | 24 | 24–32 |

Do not run 12 columns on a phone. Do not stretch one mobile column across a desktop.

## Alignment

- Start-align text. Center only a true hero or a symmetric empty.
- Title, row text, and field labels in one column share the same leading edge. An icon in a row (20 + 12 gap) pushes that row’s text inward — that is expected; do not “fix” it by shrinking the page gutter.
- Numbers in tables: tabular lining, end-aligned.
- Optical: a 16 px gutter next to a large round card (radius 20–28) can look tighter than it is. Keep 16. Do not bump to 20 “because it feels tight” — that breaks the system. If the card looks soapy, the radius is too large for the row height, not the gutter.

## Phone chrome

- Status bar is hardware. Do not put content in it.
- Nav title uses the same 16 gutter as the body.
- Tab bar / bottom nav: icons optically centered; labels 10–12; safe-area padding under the icons.
- Side-edge swipe-back stays free. Do not put a primary tap target in the first 20 pt of the leading edge unless it is Back.

## Desktop chrome

- App column max 1120, text 720, dashboard 1440 then columns.
- Sidebar is a column, not a floating card in the margin.
- The working canvas has one background (canvas). Surfaces sit on it with the chosen chrome (outline or fill).

## Same tokens, different patterns

Tokens (color, radius roles, chrome, motion) do not change at a breakpoint. **Anatomy does.** Do not paste a phone column onto a desktop canvas.

| Job | Phone | Desktop |
| --- | --- | --- |
| Collection | Grouped / inset rows, or one stacked list | One working panel or a table. Rows are not cards |
| Title | Large title in the nav, 16 gutter | Compact toolbar, 16–18 px title, actions on the trailing edge |
| Extra on a row | Action sheet | Popover / overflow |
| Confirm | Sheet | Dialog 400–560 |
| Inspector | Next screen or a sheet | Side column on the same page |
| Nav | Tab bar ≤ 5 | Sidebar or a top bar |
| Empty | Full-width block in the column | Inside the working panel, not a third card under the list |

Fill chrome on a phone may separate rows by tone. Fill chrome on desktop is still **one surface**; hover or a selected row, not a stack of pills.

## Density vs viewport

Density changes **inner** padding and row height. It does not change the phone gutter. It does not turn a desktop table into a mobile card stack.

A dense console on a phone still has a 16 pt page margin and 44 pt targets. A marketing page on a phone can be airy *inside* sections and still uses 16 on the screen edge.

## Checklist

- [ ] Phone gutter 16, one column, no double pad
- [ ] Title aligns with content, not with the device bezel
- [ ] Safe area respected
- [ ] Tablet 24, desktop 24–32
- [ ] No 12-col grid on compact
- [ ] Full-bleed has 0 radius at the edge
