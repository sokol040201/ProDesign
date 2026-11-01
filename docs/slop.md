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

## App screen dressed as a landing

This is the most common miss. Tokens get installed, Critical scan is 0, and the screen still reads as a generated template.

| Tell | Fix |
| --- | --- |
| Overline above the H1 (`КОНТЕНТ-ЗАВОД`, `NEW VISUAL SYSTEM`) | Delete. The nav already names the product |
| Slogan H1 (`От идеи до публикации.`, `Everything in one place.`) | Place name: `Materials`, `Project` |
| Manifesto under the title (`Всё под вашим контролем`, two sentences of mission) | Delete. The list is the explanation |
| Footer reassurance (`Every item ships only after approval`) | Delete, or one filter/status, not a caption |
| Native `<select>` / OS date / OS file | Restyle to the field tokens |
| `html { font-size: 14px }` + `text-xs` everywhere | Body 16, chrome 14, caption 12 |
| Inter / Geist still on `:root` | The face named in `SYSTEM.md` |
| Default blue pill button (`#3b82f6`, `#2459d8`) with no brand | The one accent in `SYSTEM.md`, or near-black |
| Robot / mascot on every card or empty | One pack icon, or nothing |
| Filter chips as a row of soft pills plus a slogan | Chips for filters only; title stays the place |
| Icon-only sidebar on desktop | Icon + text |
| Sidebar manifesto / shield card / “you’re in control” | Delete. Nav is places |
| Workspace **card** with a subtitle in the sidebar | One-row switcher, or nothing |
| Uppercase group label over a single list | Delete the label |
| Environment line in the rail (`Local on your Mac`) | Account menu |
| Glass / bounce / curved dock as product nav | Flat rail, icon + text |

A design system that is only `tokens.css` imported next to Inter, leftover hex, and a native select is not applied.

| Tell | Fix |
| --- | --- |
| `tokens.css` + `style.css` still full of `#efefe8` / `#2459d8` / `#d5ed9b` | Restyle the product CSS onto tokens. Delete leftover hex |
| `design-refresh.css` / second `:root` palette on top of the old look | Edit `style.css`. Delete the overlay |
| Off-scale leftover space (`padding: 13px 14px`, `gap: 20px`, `32px 20px 15px`) | 4/8 scale + one gutter |
| `01 02 03 04 05 06` circles with arrows (“production line”) | List / table / real wizard |
| Brand essay + decorative pills (`Маленький робот. Большое любопытство.`) | Place name. Delete the essay |
| Icon-only rail on a wide desktop | Icon + text |

## Catalog costume

Community component catalogs (glass sidebars, aurora heroes, liquid buttons, bounce rails) are **not** a product system. A working app may look at their **slots** (mark → list → account) and must refuse the costume.

Do not paste: glass sidebar, spotlight card, shader background, bounce nav, curved menu, 3D testimonial, feature-bento, “AI prompt box” chrome, gradient wordmark.

If a preview looks like a landing, it is not app chrome.

## Copy slop

- “Unlock the power”, “seamless”, “next-gen”, “your journey”
- “От идеи до…”, “всё под контролем”, “на автопилоте”, “в одном месте”
- A subtitle that repeats the page name or the nav
- Testimonials with a gradient initial avatar
- A four-column footer on a three-page site
- All-caps paragraphs
- Period-as-drama on a three-word headline (`Publication.`)

Write the object and the verb. If a sentence does not change what the person does, delete it.

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
<select
text-xs|font-size:\s*1[0-3]px
eyebrow|tracking-widest
От идеи до|под контролем|на автопилоте|Unlock|seamless|journey
#[0-9a-fA-F]{3,8}
pipeline-node|производственная линия
design-refresh\\.css
```
