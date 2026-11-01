# AI slop

Slop is not “ugly”. It is a **stack of the most probable answers**. One device can be legal. A pile of them reads as a template in half a second.

In this skill, gradients and emoji are always illegal.

## Critical — remove immediately

| Tell | Fix |
| --- | --- |
| Any CSS / SVG gradient, gradient text | Flat token |
| Aurora / radial halo / colored glow | Remove |
| Emoji in the UI | A real icon or nothing |
| Unicode “icons” ✓ → ✦ ⚡ | Icon set |
| Sparkles on anything “AI” | The word AI, or a product icon |
| Indigo–violet primary with no brand | A chosen accent |
| Colored left bar on a card | Remove |
| Dark + neon / acid accent by default | Neutral theme + one accent |
| Three identical cards: icon, title, two lines | Hierarchy or a list |
| Pill badge “New / AI / Now” above the H1 | Remove unless it is a real release |
| Icon in a 40–48 tinted rounded square | Icon without a tile |
| Missing empty / loading / error | Add them |
| Hover without focus | A 3:1 focus ring |

## Frequent — fix in the same pass

| Tell | Fix |
| --- | --- |
| Inter / Geist / Space Grotesk on everything | A chosen stack |
| Lucide as the icon pack | Another complete pack (Phosphor, Tabler, Heroicons, …) |
| Homemade `<path d>` icons | Named import from the installed pack |
| One radius on button, card, and input | Role radii from the chosen look |
| The same shadow on everything | Border **or** two shadow levels |
| Glass / blur on cards | Remove |
| Decorative background grid | Remove |
| Uppercase wide-track above every section | A normal title |
| Stat tiles: one number, no target, no action | Compare, period, CTA — or delete |
| `py-20` on every section | Rhythm by meaning |
| All copy centered | Start align |
| Italic serif wink in a sans headline | Remove |
| Bento made of leftovers | Real structure |
| 1 2 3 steps with no sequence | A list or a real wizard |
| Dashboard of nothing | One question per widget |
| Starter-kit zinc theme as the brand | Product tokens |
| A 72px ten-word headline | Shorter and smaller |
| A generated SVG mascot | Remove |

## Copy slop

- “Unlock the power”, “seamless”, “next-gen”, “your journey”
- Testimonials with a gradient initial avatar
- A four-column footer on a three-page site
- All-caps paragraphs

Write what the screen does and what to press.

## Why it appears

Without a brief, a model converges on the average landing page. This skill is the brief. That is why the bans are hard, the tokens are specific, and empty states are required.

## Trend costume

Yearly trend lists are a source of slop: decorative 3D, “light effects”, font-of-the-year, dynamic blobs, dark-mode neon. Inclusive contrast and fewer objects are durable. A trend is allowed only when it solves the task.

A 3D chart, a gradient mesh background, and a reward loop on a settings screen are the same class of error: costume.

AR, emotion-sensing UI, and “hyper-personalization” are costume until they remove a real step. Inclusive contrast, short checkout, and honest empty states are not trends.

## The anti-slop trap

Strip every tell and leave a polite empty page — that is also a tell. After cleaning, a product decision must remain: density, accent, voice, icons, states.

## Quick grep

```
linear-gradient|radial-gradient|conic-gradient|bg-clip-text
from-indigo|to-purple|from-violet
backdrop-blur|drop-shadow-\[[^\]]+rgba
rounded-\[(?:3[2-9]|[4-9]\d)px\]
✨|🚀|⚡|✅|🔒|⭐
lucide-react|<svg[^>]*>\s*<path d="
```
