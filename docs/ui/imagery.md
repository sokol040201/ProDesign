# Imagery

Pictures in the interface. Icons in full: [icons.md](icons.md).

Hard: no emoji, no gradient placeholders, no stock “happy office” as an empty state.

## Icon

An interface glyph from **one installed pack**. Not Lucide, not a handmade path. See [icons.md](icons.md).

Standard affordances — do not invent these:

| Meaning | Glyph |
| --- | --- |
| Close | X |
| Expand | chevron |
| Back | leading arrow |
| Add | plus |
| Remove | minus / trash (trash is destructive) |
| Search | magnifier |
| Settings | gear |
| Menu | hamburger, three lines |
| More | ellipsis |
| Help | “?” or “i” — do not mix: i = local hint, ? = documentation |
| Share | the platform share mark |

Do not put other linear icons (list, filter) in the top-leading corner — they will be read as menu.

Judge an icon: is it recognizable without a caption, does it match the platform, is there a caption in chrome, are contrast and size enough?

## Avatar

A person or an entity.

- A photo, else initials on a **flat** tone (no gradient circle)
- Sizes: 24 / 32 / 40 / 48. 32 in a list, 64–80 on a profile
- A status dot with a canvas ring so it does not melt into the photo
- Groups: overlap 4–8, +N
- Alt = the name. If the name is already beside it, `alt=""`
- Do not put a robot illustration on every empty

## Logo

The product mark.

- One version in chrome: mark or mark+word, not two competing treatments
- Contrast on light and dark. It must not vanish in dark theme
- Click goes home
- Do not animate the logo on every route
- No gradient wordmark
- A real favicon, not the bundler default
- Enough clear space; do not lock it against the hamburger

## Photo

- A meaningful crop, not an auto-stretch across desktop
- A stable ratio in a grid
- Lazy plus an explicit size, no layout jump
- A caption when the photo carries data (product, document)
- Do not set important text on a photo without a 4.5:1 scrim
- Upload empty is not stock photography
- Decorative photos: empty alt

## Illustration

Rare support for empty or onboarding.

- One style per product, mono or two to three flat colors, **no gradient**
- 120–200 px, not full-bleed
- Does not replace the empty-state title, copy, and CTA
- No generated mascot
- Not on every screen

When in doubt, do not draw. A 32–48 icon is calmer.

A 3D robot / generated mascot on every card or empty is slop. One pack icon, or the content itself.
