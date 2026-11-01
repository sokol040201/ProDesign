# Views

Structure, navigation, status.

## Badge

A count or a short state on a parent (tab, avatar, icon).

- A number, or “9+” / “99+”, never “12487”
- Never the only carrier of meaning; duplicate in a label if it is critical
- A dot without a number = “there is something new”, not decoration
- Contrast 3:1 against the parent
- Do not build navigation out of a sprinkle of badges

## Status Dot

Binary or ternary status in a list.

- Color **and** a label or a legend
- 8–10 px, not 4
- Do not pulse forever unless the object is actually live / recording

## Banner

A persistent or session-long system message in the page flow. Not a toast.

Anatomy: what happened / why / what to do.

- One idea, one CTA
- Dismissible if it does not block work
- Not a carousel of banners
- Not a gradient slab
- Typical: offline, unsaved, demo, read-only

## Chip

A filter, a choice, or an input token (email, tag).

- A pill is allowed here
- Selected = fill or a check icon + weight
- A removable chip: a real close icon, target 24+
- Do not replace a two-option radio with unnamed chips
- Filters sit outside the list or table, show what is selected, and offer reset

## Divider

A 1 px hairline in the border token. Not a shadow, not a gradient, not an 8 px bar.

- Only when proximity is not enough
- Not after every block
- No decorative dashes “for style”

## Card

A container for an object when the whole object is clickable or holds two or three actions.

- Not three identical feature cards
- Not a colored left bar
- Radius follows the card role; padding 12 dense / 16 default / 24 airy; border or a faint tone, not both plus glow
- Inside: title → meta → action
- Twenty cards on desktop are often worse than a table or a stacked list
- The whole card is one target; secondary buttons must not fight the hit area

## Stacked List

The default app pattern (settings, mail, issue lists).

- Row 36–56, icon 20–24, title + optional meta
- A divider or zebra, not both heavy treatments
- Disclosure / swipe actions stay predictable
- Empty is required
- Do not inflate a list with landing-page air
- **Phone:** grouped inset rows are allowed (fill). Each row may be a surface.
- **Desktop:** one panel or a table. Do not stack row-cards with a gap. Selected row opens an inspector column, not a new stacked card.

## Table

- Filters live outside the cells; they have on / off and a reset
- Sticky header, tabular numbers; text start, numbers end
- Comparison beats decoration: dense
- Sort is visible in the header
- Horizontal scroll: freeze the identity column
- Do not hide a table on small screens without a mobile list
- Empty / empty-filter / loading / error
- Do not add KPI cards that repeat columns already in the table
- Row click vs row action: one primary; the rest in an overflow
- Bulk actions appear when rows are selected, with a count

## Carousel

- Autplay is almost always harmful. If it exists: pause, visible arrows, no faster than 5–8 s
- Arrows and dots contrast, targets 44
- Swipe on mobile is required; arrows are extra
- Do not hide the important thing on slides 2–5
- Peek the next item so the set is obvious
- Do not carousel tabs
- Do not carousel the only hero CTA

## Gallery

A set of media, not a hero slider.

- Grid 4 / 8 / 12 by breakpoint
- A stable crop, or a clearly mixed one — not a random mash
- Lightbox = overlay with keys, a caption, and focus
- Empty: “Photos appear after upload”

## Loading Indicator

Short, indeterminate. Show after ~300 ms.

- A spinner or circular indicator, not emoji, not a gradient ring
- Caption “Loading invoices”, not a lone circle in a void
- Do not block the whole app for one panel
- Do not show empty “no data” while loading

## Skeleton

Repeats the coming layout. Neutral opacity pulse — not a rainbow shimmer (gradients are banned).

- Matches the final blocks
- Do not hold a skeleton for seconds on an 80 ms response

## Progress Indicator

Determinate: a percent, or step N of M **the person is in**.

- Determinate ≠ an indeterminate spinner
- Copy “3 of 7” or a percent
- Not color alone (bar + number)
- A wizard also names the steps
- A row of `01–06` circles with arrows on a dashboard is **costume**, not progress. Use a list, a table, or a real wizard

## Map Pin

- One pin shape in the product, contrast against the map
- The selected pin is larger / higher, not a new color without a legend
- Cluster on zoom; do not drop 200 pins
- A label on tap, not twenty tooltips at once
- A real category icon inside the pin, not emoji

## Side Navigation

Persistent **places** on medium+. Full contract: [navigation.md](navigation.md#sidebar).

- Mark + nav + account. Nothing else
- Icon + text. Icon-only only in a collapsed rail
- 5±2 items, or groups only when there are two real jobs
- Current is obvious. Badge is a count
- No manifesto card, workspace blurb, env caption, glass, or bounce

## Top Navigation Bar

Screen title, back, one to three actions.

- Title centered (iOS) or start (web / Material) — pick the platform and do not mix
- Back is always in the same place
- Search: an icon if search is not the product
- Do not duplicate the tab bar
- Hamburger: three lines, top-leading, no decorative frame; do not park another linear icon beside it
- A hamburger on a wide screen is a smell

## Tab Bar

Global 3–5 sections of a mobile app.

- Icon + label. Landscape iPhone may hide text — do not rely on it
- Fill on selected
- ≤ 5, else More
- Do not change the set of tabs from screen to screen
- Badge is a count, not marketing

## Toolbar

Actions on the current context (edit, filter, view).

- One icon family, 20–24, hit 44
- Destructive sits right / in overflow, not beside primary
- Shortcuts are visible in the menu
- Do not mix navigation and actions in one “More” without a separator

## Filter

Narrows the collection already on screen. Full rules: [apply.md](../apply.md#filters), [behavior.md](behavior.md).

- Applied filters are visible chips you can remove
- Reset / clear-all exists
- Empty-result keeps the query
- Phone: sheet. Desktop: toolbar or sidebar — not a modal per facet
- Sort sits with filters, not as a hidden nav tab

## Title

- One H1 per page
- Stuck to its content, not to the block above
- No uppercase + tracking eyebrow on every section
- Must not clip when type scales
- Breadcrumbs sit above the title, not in place of it

## In-page tabs

Use tabs when there are a few peer groups, short labels, and people do **not** need to compare panels.

- 3–5 items. A scrolling tab strip hides the last items; almost nobody finds them
- The default tab holds the critical content. Hidden tabs are treated as optional
- In-page tabs are not global navigation and not a checkout wizard
- If people must compare (specs vs reviews vs shipping on a product), use a vertical stack or accordions, not a horizontal tab row — whole sections get skipped
- Current tab: line, weight, or container. Icon + text

## Catalog and product row

A list people use to decide what to open.

Always show: price, name or type, image, average rating **and** count, variants (color, size, plan). Add 1–3 category facts (capacity, fit, spec). More than that and the row stops scanning.

A card that is only a photo and a pun is a marketing tile, not a catalog row.

## Pagination and breadcrumbs

- Pagination: current page, prev / next with names, not only chevrons; jump is optional
- Prefer infinite load only when order is recency and a footer still exists
- Breadcrumbs: the trail of places, last item is the current page and not a link
