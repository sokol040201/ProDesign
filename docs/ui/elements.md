# Elements

The named interface parts: **Control**, **View**, **Overlay**, **Imagery**. Draw them with the product’s system. Do not install a ProDesign widget.

When you are about to place a thing, find its name here. Then open the group file for depth.

| Group | File | Job |
| --- | --- | --- |
| Control | [controls.md](controls.md), [forms.md](forms.md) | The person changes a value or fires a verb |
| View | [views.md](views.md), [navigation.md](navigation.md) | Structure, status, collections |
| Overlay | [overlays.md](overlays.md) | A layer above the page |
| Imagery | [imagery.md](imagery.md), [icons.md](icons.md) | Pictures |

A **job** (sign in, pay, create) is not an element. That is [flows.md](flows.md).

---

## How to pick

1. Changing data or firing a verb → Control
2. Showing structure, a collection, or status → View
3. Interrupting or adding a layer → Overlay
4. A picture → Imagery
5. Phone and desktop stay different patterns on the same tokens

Shared: looks like what it is. One primary per region. Target ≥ 44 / 48. State is not color-only. No gradient, no emoji. One installed icon pack, not Lucide, not a handmade path.

---

## Control

| Element | Use | Phone | Desktop | Not |
| --- | --- | --- | --- | --- |
| Accordion | Hide secondary groups | Stack | Stack | A whole page of hidden content; accordion in accordion |
| Button | Verb on data | 44–48 hit | 40–48 | Navigation; two primaries; “OK” |
| Checkbox | Many independent ons | Full-row hit | Full-row hit | A single instant setting (that is Switch); a circle |
| Color Picker | Pick a color | Sheet + field | Popover + HEX / OKLCH | Page decoration; gradient wash on the product |
| Date Picker | Pick a day / range | Sheet + typed | Calendar + typed | Mask-only `__/__/____`; slider |
| Floating Action Button | One Material create | One, if Material | Rare | iOS toolbar replacement; two FABs; the only Add |
| Radio Button | One of a few | Stack | Stack | One option; two ons; > ~7 (use select) |
| Rating Control | Set or show a score | Tap to set | Hover preview | Emoji stars; average without a count |
| Search Bar | Find in or across | Icon or field | Field, `/` ok | Custom mark; lose the query on results |
| Segmented Control | 2–4 views of one object | Full width | Compact | App nav; a scrolling hidden set |
| Slider | A range | Thumb 44 | Thumb ≥ 24 + field | Dates; an exact integer (use stepper + field) |
| Stepper | Discrete ± | − value + | Same | 0–10 000 without a field |
| Switch | Instant on/off | Row + switch | Same | Checkbox + Save; color-only on |
| Tab | In-page peer groups | 3–5, not swipe-only | 3–5 | Global nav; wizard steps; compare-two-panels |
| Text Field | One typed value | 16 px+ type | 40–48 high | Placeholder-as-label; instructions in placeholder |
| Title | The name of this place | Platform title | H1 + optional crumbs | Eyebrow on every block; clipped Dynamic Type |
| Time Picker | A time of day | Sheet + typed | Clock + typed | Mask-only; US am/pm where the locale is 24h |

Depth: [controls.md](controls.md). Text field anatomy: [forms.md](forms.md). Title as chrome: [views.md](views.md#title).

---

## View

| Element | Use | Phone | Desktop | Not |
| --- | --- | --- | --- | --- |
| Badge | Count or 9+ on a parent | On rail / avatar | Same | The only meaning; “12487” |
| Banner | Session / system message in flow | Below title | Below title | A toast; a gradient slab; a banner carousel |
| Card | One object, one target | May stack | Prefer list/table if many | Feature triplet; left accent bar; glow |
| Carousel | A set of peers, peek next | Swipe | Arrows + peek | Autplay without pause; hide the CTA on slide 4 |
| Chip | Filter, choice, or token | Pill ok | Pill ok | A two-option radio; unremovable applied filter |
| Divider | 1 px when proximity fails | Hairline | Hairline | After every block; a fat decorative bar |
| Gallery | A set of media | Grid + lightbox | Grid + lightbox | A hero slider (that is Carousel); random crops |
| Loading Indicator | Indeterminate wait ~300 ms+ | In place | In place | Emoji; gradient ring; empty “no data” while loading |
| Map Pin | A place on a map | Tap → label | Same | 200 pins; emoji inside; a new color with no legend |
| Progress Indicator | Determinate N of M or % | Bar + number | Same | Spinner for a known percent; color-only |
| Side Navigation | Persistent sections | Drawer if needed | Sidebar always if room | Hamburger on a wide screen |
| Skeleton | Layout of what is coming | Same shape | Same shape | Rainbow shimmer; held for seconds on a fast reply |
| Stacked List | Default collection | Grouped rows ok | One panel or a table | A column of pill-cards on desktop |
| Status Dot | Live / on / off in a row | 8–10 px + label | Same | Color-only; infinite pulse unless live |
| Tab Bar | Global 3–5 phone places | Icon + label | Do not fake a phone tab bar | > 5; changing set per screen |
| Table | Compare rows | List fallback | Sticky header, filters out | KPI tiles that copy the columns |
| Toolbar | Actions on this object | Top bar overflow | Icon row + overflow | Nav mixed into More with no separator |
| Top Navigation Bar | Title + back + 1–3 actions | Platform placement | Title start + crumbs if deep | Duplicate of the tab bar |

Depth: [views.md](views.md). Nav chrome: [navigation.md](navigation.md).

---

## Overlay

“Popup” is not a type. Name the row.

| Element | Use | Phone | Desktop | Not |
| --- | --- | --- | --- | --- |
| Action Sheet | Verbs on one object | Sheet of verbs + Cancel | Menu / dialog | 15 items; the only desktop pattern |
| Bottom Sheet | Extra / confirm / filters | Detents + grabber | Dialog or popover | Always-full; CTA below the fold |
| Coach Marks | Teach one live control | Spotlight + skip | Same | 8-card welcome; every launch |
| Dialog | Short decision | Almost full width | 400–560 | A ten-field form; “OK”; scrim-close on a costly confirm |
| Drawer | Compact nav or filters | Overlay + scrim | Prefer persistent sidebar | Two drawers; a hamburger that hides a wide nav |
| Dropdown Menu | Commands on a control | Sheet / next list | Click menu | Product nav; hover-only open; emoji items |
| Full-Screen Overlay | Mode: gallery, editor, media | Exit = Back | Exit = Esc / X | Ordinary create; trap system back |
| Toast | Status, no answer | Bottom | Corner | The only form error; six at once; a party |
| Tooltip | Name of an icon / shortcut | Prefer a visible label | Hover / focus, ~300 ms | Required help; the only label on touch |

Depth: [overlays.md](overlays.md). Never a modal from a modal. Focus returns to the trigger.

---

## Imagery

| Element | Use | Rule | Not |
| --- | --- | --- | --- |
| Avatar | Person or entity | Photo or initials on a flat tone. 24 / 32 / 40 / 48 | Gradient ring; a mascot on every empty |
| Icon | Interface glyph | One installed pack. Not Lucide. Not a path the model drew | Emoji; Unicode stand-ins; a second family |
| Illustration | Rare empty / onboarding | One style, 120–200, no gradient | Generated mascot; full-bleed; replaces title + CTA |
| Logo | Product mark | One treatment. Contrast in dark. Click = home | Animated on every route; gradient wordmark |
| Photo | Content image | Stable crop, real size, lazy. Caption if it carries data | Auto-stretch; stock empty; text on a photo without 4.5:1 |

Depth: [imagery.md](imagery.md). Icons: [icons.md](icons.md).

---

## Pairing

| Do not confuse | With | Why |
| --- | --- | --- |
| Button | Link | Verb on data vs go somewhere |
| Button | Chip | Chip is a filter / token, not a submit |
| Switch | Checkbox | Instant vs save-with-form |
| Radio | Segmented | Many short labels vs 2–4 views of one object |
| Tab | Tab Bar | In-page peers vs global phone places |
| Tab | Segmented | Groups of content vs views of one object |
| Carousel | Gallery | Peers you browse vs a media set + lightbox |
| Loading | Skeleton | Indeterminate wait vs layout of the result |
| Loading | Progress | Unknown duration vs N of M |
| Banner | Toast | Stays in flow vs a tap on the shoulder |
| Dialog | Full-Screen Overlay | Short question vs a mode |
| Bottom Sheet | Action Sheet | Content / filters vs a verb list |
| Popover | Dialog | Anchored extra vs a centered decision |
| Favorite / pin / bookmark / save | One glyph | Four jobs — [flows.md](flows.md) |
| Icon | Illustration | 16–24 chrome vs a 120–200 empty |

---

## Hunt

- A named element used for the wrong job
- Desktop list drawn as phone pills
- Create / checkout / settings inside a dialog
- Full-screen overlay with no Back
- Tooltip as the only label on a phone
- Gallery that is actually an autplaying carousel
- Title that is not the H1
- Two icon packs, or Lucide, or a homemade path
- Photo or illustration instead of the four container states
