# Navigation

Wayfinding. People should know where they are, where they can go, and how to get back.

## Models

| Model | Use | Do not |
| --- | --- | --- |
| Tab bar | 3–5 top-level app places on a phone | In-page sections, a wizard, a filter |
| Sidebar | Desktop / tablet sections | Hamburger on a wide screen |
| Top bar | Title, back, 1–3 actions | The only global nav on desktop |
| Stack | Drill-in: list → detail → edit | A modal stack of the same |
| Breadcrumbs | Deep web / console | Mobile chrome (Back is enough) |
| Wizard | A forced order with a known end | Optional settings |

One primary model per product. Do not mix a tab bar, a hamburger, and a second tab row for the same places.

## Current place

Always visible. Weight, a marker, or a container — not color alone. The document title and the H1 match the place.

## Phone

- Tab bar: icon + label, ≤ 5, same set on every root screen. Badge is a count
- Top bar: platform title (large iOS / start Material). Back in the same corner
- Search: icon in the bar, or the product’s home is search
- Hamburger only if there is no room for tabs and the list is long — then it is three lines, leading, nothing else beside it
- Safe area under the tab bar. Swipe-back stays free
- Do not put primary actions in the first 20 pt of the leading edge unless it is Back

## Desktop

- Sidebar: icon + text, 5±2 or grouped. Collapse keeps the selection. Full contract: [Sidebar](#sidebar)
- Content has one H1. Breadcrumbs above it when the stack is deep
- Toolbar actions belong to the current object, not to global nav
- Do not hide a sidebar behind a hamburger when the window is wide
- Keyboard: skip link, visible focus, `⌘K` / `Ctrl+K` if you have a command palette — it does not replace nav

## Sidebar

A list of **places**. It is not a landing, not a status board, not a brand story.

### Slots (only these)

| Slot | What | Required |
| --- | --- | --- |
| Mark | Logo or monogram + product name, one line. Click = home | Yes |
| Switcher | Current workspace / project, one row, opens a menu | Only if there is more than one |
| Nav | Icon + label. Optional count badge. Current is a fill or weight | Yes |
| Footer | Account: avatar + name. Opens a menu | If the product has an account |

Width 240–260 (rail 56–72 when collapsed). Row 36–40. Icon 20. Label 14. Gap icon→label 8–12. One 1 px rule between mark / nav / footer if proximity is not enough.

### Current

Weight, a container, or a marker — not color alone. The item name matches the page H1.

### Badge

A count (`12`), or nothing. Not “NEW”, not a status essay, not a second brand.

### Switcher

One row: mark + name + chevron. It is a **menu**, not a card. No subtitle (“Personal studio”), no status dot unless it is live presence, no second manifesto under the name.

### Footer account

Avatar + name. Plan / env (`Local`) lives **inside** the account menu, not as a caption under a sermon. No shield card.

### Do not put in the sidebar

- A slogan or period-as-drama on the mark (`завод.`)
- A workspace **card** with a blurb
- An uppercase section label when there is only one group (`РАБОЧЕЕ ПРОСТРАНСТВО`)
- A manifesto tile (“The last word is yours”, “Every item ships after approval”)
- Environment / machine copy (“Local on your Mac”)
- Help, marketing, or onboarding essays
- A primary create button that duplicates the page CTA
- Glass, glow, bounce, curved “dock”, or an animated tree as product nav
- Icon-only items when the bar is wide enough for labels
- More than one current highlight

If you have 5–7 places, **do not group**. A group label is for 8+ items in two real jobs (e.g. Work / Settings). Names are user objects, not “Workspace”.

### Collapse

Rail keeps icons + current. Tooltips name the icon. The switcher becomes the mark. Account becomes the avatar. Do not hide the current place.

### Phone

The sidebar is a **drawer**. Same items, same order. Swipe / scrim / system back closes. It is not a second tab bar.

### Hunt

```
sidebar card + paragraph
uppercase section over a single list
status / shield / “you’re in control”
native <select> as the workspace switcher
icon-only on a 240 px bar
glass / blur / bounce sidebar
```

## In-page tabs

Peer groups on one object (Specs / Reviews). 3–5. Default tab has the critical content. Not global nav. If people must compare, stack the sections.

## Search as navigation

Search jumps to an object. Results are a place (back works). Keep the query. Empty-result offers a clear and a way out.

## Filters vs nav

Filters change **this** collection. Nav changes **place**. Do not put “Unread” as a top-level tab if it is a filter on Inbox. Do not put Inbox in a filter chip row.

## Link vs button

- Link: another place, or a download of an existing file
- Button: create, save, delete, apply
- Cancel / Back: a link or the system back, not a second primary

## Deep links and back

Opening a URL lands on the same object and the same chrome. Back restores scroll and filters. Do not reset a list because the person opened a detail.

## Pagination

Current page is marked. Prev / next have names, not only chevrons. Infinite load only for recency, and a footer still exists.

## Don’ts

- Different tab sets on different screens
- A carousel of hidden tabs
- Icon-only global nav without names
- Emoji or handmade icons in chrome
- Two “More” menus that both hide nav and actions
