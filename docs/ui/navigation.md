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

- Sidebar: icon + text, 5±2 or grouped. Collapse keeps the selection
- Content has one H1. Breadcrumbs above it when the stack is deep
- Toolbar actions belong to the current object, not to global nav
- Do not hide a sidebar behind a hamburger when the window is wide
- Keyboard: skip link, visible focus, `⌘K` / `Ctrl+K` if you have a command palette — it does not replace nav

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
