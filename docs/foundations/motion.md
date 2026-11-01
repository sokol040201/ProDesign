# Motion

Motion is a token, like space. It shows where a thing came from and that the tap registered. It is not decoration.

## Scale

| Look | Duration | Shift | Use |
| --- | --- | --- | --- |
| none | 0 | 0 | Reduced motion, consoles that must feel instant |
| subtle | 120 ms | 4 px | Dense tools, tables, settings |
| standard | 180 ms | 8 px | Product and apps (default) |

Ceiling **200 ms** for UI chrome. 250–400 ms is only for a large page-level transition (a sheet covering the screen). Longer is a delay.

Curve: ease-out or the platform standard (`cubic-bezier(0.2, 0, 0, 1)`). **No bounce** on buttons, rows, dialogs, or sheets. Bounce is for play, not work.

```
--pd-motion: 180ms
--pd-ease: cubic-bezier(0.2, 0, 0, 1)
--pd-motion-shift: 8px
```

One duration and one curve for the product. Do not invent a spring per feature.

## Micro-interactions

A micro-interaction is feedback on a single control, not a scene.

| Event | Do | Do not |
| --- | --- | --- |
| Hover | Tone or border, 120 ms | Jump, grow, glow, color-shift the whole card |
| Focus | 2 px ring | Animate the ring in a circle |
| Press | 98% scale or 1 px down, 80–120 ms | Elastic bounce, 3D tilt, particles |
| Success | Check icon, or a toast | Confetti, full-screen burst |
| Error | Field shake **once** (4 px, 120 ms) or a color + text | Infinite shake, red flash of the page |
| Toggle / switch | Thumb travels, 120–180 ms | The whole row bouncing |
| List insert | Fade + 4–8 px, stagger ≤ 30 ms | Cascade for 20 rows |
| Skeleton | Soft pulse opacity 0.5–1, ~1 s, or a sliding sheen in one tone | Rainbow shimmer, gradient sweep |
| Progress | Determinate bar if you know; indeterminate may loop | A looping brand animation as the only status |

The loop is: **trigger → rule → feedback → next**. If the person cannot name what the motion answered, delete it.

## Overlays

Enter from the origin. Exit faster (about 75% of enter).

| Overlay | Enter | Exit |
| --- | --- | --- |
| Dialog | Fade + scale 0.98 → 1, or fade only | Fade |
| Popover / menu | Fade + 4–8 px from the button | Fade |
| Bottom sheet | Translate up from 100% + fade scrim | Translate down |
| Drawer | Translate from the edge | Reverse |
| Toast | Fade + 8 px from its resting edge | Fade |
| Tooltip | Fade after ~300 ms delay | Fade immediately |

Scrim fades with the panel, same duration. Do not blur the page behind unless the platform already does (and then only on chrome, not on content cards).

Never: a modal that drops from a random point, a popover that grows from the screen center, a sheet that pops in at full opacity with no travel.

## What not to animate

- Layout reflow of a working table
- Color of a paragraph
- First paint of the app (no logo splash “for delight”)
- Every list row on every visit
- Cursor, caret, or text while typing
- Decorative float / orbit / gradient drift (gradients are banned anyway)

## Reduced motion

If `prefers-reduced-motion: reduce` (or the platform equivalent):

- Duration → 0 or a cross-fade ≤ 80 ms
- No translate, no scale
- Keep the state change (open / close / checked)

This is not optional polish. It is part of the system.

## Platform notes

- **iOS** — system sheets and navigation already move. Do not wrap them in a second animation. Custom controls match 180–200 ms, not a cartoon spring.
- **Android** — emphasized easing, 200–300 ms only for large surfaces (a full container transform). Controls stay ~100–200 ms.
- **Web** — `transition` on properties you can cheaply animate (`opacity`, `transform`). Do not transition `top` / `height` / `margin` on large trees.

## Copy the tokens

```css
.btn {
  transition: background var(--pd-motion) var(--pd-ease),
              transform 80ms var(--pd-ease);
}
.btn:active { transform: scale(0.98); }

@media (prefers-reduced-motion: reduce) {
  .btn:active { transform: none; }
}
```
