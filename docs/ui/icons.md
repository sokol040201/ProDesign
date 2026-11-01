# Icons

An icon is a glyph from **one installed pack**. It is not a path the model drew, not a Unicode character, and not an emoji.

## Hard rules

1. No emoji in the UI
2. No stand-ins: `→ ✓ ✕ ★ ☆ • ▶ ⚡ ✦ ✨ 🚀 ⚙️ 🔒`
3. **One complete pack**, installed as a dependency or a platform kit. Name it in `SYSTEM.md`
4. **Do not draw icons.** No one-off `<svg><path d="…">` in product markup. No “quick” stroke the agent invented to fill a hole
5. **Not Lucide.** Lucide is the model-default pack (same class as Inter). Pick another family
6. One style inside the pack: outline **or** solid. Solid is for selected / active, not a second family
7. One weight / optical size from that pack
8. Icon-only controls have an accessible name
9. Meaningful icons meet 3:1 contrast
10. If the pack has no glyph for the job: nearest synonym, or **text only**. Do not invent a 13th icon

## What “a pack” means

A pack is a catalog with a grid, a stroke, a naming scheme, and enough verbs for an app (nav, actions, status, files). You install it once and import names.

| Surface | Pack | How it is connected |
| --- | --- | --- |
| iOS / iPadOS / macOS | SF Symbols | System kit. Do not vendor a web set beside it |
| Android | Material Symbols | System / Compose. One style (outlined, rounded, or sharp) |
| Windows | Fluent Icons | System kit |
| Web / SaaS | **One** npm / vendor set | Phosphor, Heroicons, Tabler, Iconoir, Carbon, Remix, Hugeicons, Solar, … |

Allowed: any **complete** family that is not Lucide and not a folder of 8 handmade SVGs.

Forbidden:

- Lucide / `lucide-react` / `lucide-vue`
- Mixing two packs on one product
- `react-icons` as a junk drawer (it is many families under one import)
- A custom SVG the agent drew in the chat
- Feather next to Phosphor “just for this screen”
- Tracing a screenshot into a path

The studio preview strokes are a look demo. They are not the product’s icons. After the look is chosen, install the pack and replace every demo glyph.

## Install, then import

Write the pack and the install in `SYSTEM.md`. Then only this import exists in UI files.

```ts
// Phosphor — example. Use the pack named in SYSTEM.md
import { File, MagnifyingGlass, Trash } from "@phosphor-icons/react";
```

```ts
// Wrong
import { File } from "lucide-react";
const Icon = () => (
  <svg viewBox="0 0 24 24"><path d="M7 3h8l5 5v13H7z" /></svg>
);
```

One wrapper is allowed: `<Icon name="file" />` that resolves into the named pack. The wrapper does not accept raw paths.

## Missing glyph

1. Search the pack’s catalog for a synonym (`invoice` → `file-text`, `receipt`, `article`)
2. If nothing reads, use a **label** and no icon
3. Only a design system owner adds a glyph to a **product sprite** that matches the pack’s grid (24, same cap, same stroke). That is a catalog change, not a one-line SVG in a screen

Never: “I’ll just draw a little invoice.”

## Icon vs symbol

| | Pack icon | Homemade / emoji |
| --- | --- | --- |
| Grid | 16 / 20 / 24, keyline | none |
| Stroke | specified by the pack | whatever the model chose |
| Alignment | optical center | font baseline or luck |
| Localization | RTL variants in real kits | none |
| State | fill / weight from the same pack | a second doodle |

App icons (the mark on the home screen) may be rich. Interface icons stay simple and from the pack.

## Sizes

Use the pack’s optical sizes. Do not scale a 24 stroke to 64.

| Context | Size | Target |
| --- | --- | --- |
| Inline with text | 1 em, ~16–20 | — |
| Button / field | 16–20 | 44–48 hit |
| List, nav | 20–24 | 44–48 |
| Empty / error | 32–48, not 128 | — |
| Marketing feature | prefer none | — |

Weight matches text. Gap icon↔label: 4–8. Align to the optical center.

## Where icons belong

- Navigation
- Toolbar actions without text
- Status next to text (error, success)
- Empty / error — one calm glyph
- File types and list objects

## Where they do not

- Above every section title
- On every feature card inside a 40–48 tinted rounded square
- Sparkles on anything “AI”
- A decorative row of six icons that do nothing

## The icon tile

A 40–48 rounded square at 10% accent with a 20 icon is slop. Bare icon, or a neutral hit zone with a 1px edge.

## States

- Rest: outline (if the look is line)
- Selected / active: solid **from the same pack**, or accent on the outline
- Disabled: opacity + keep the name
- A spinner is a progress control, not a spinning star from another set

## Line vs solid

The studio axis `icons: line | solid` is the **default weight**, not two packs.

- Line — outlined pack style
- Solid — filled pack style
- Mixed in one toolbar is a defect unless solid marks “on”

## What to hunt

```
lucide-react | from "lucide"
🚀 ✨ ✅ ⚡ 🔒 ⭐
<span>✓</span> as success
<path d="M7 3h8l5 5v13H7z"> in a screen
@heroicons + @phosphor-icons in one package.json
a button icon with no aria-label
```

Replace with a named export from the one pack in `SYSTEM.md`.
