# Apply ProDesign

Read this when you touch UI. Open one group file only if you need depth.

Skill root: `.cursor/skills/prodesign/` in the product, else `~/.cursor/skills/prodesign/`.

## Every UI change

1. Follow `SYSTEM.md` if it exists. Do not invent a second look
2. If there is no system: studio → `apply-system.mjs` → fill `SYSTEM.md`
3. Pick the **pattern** from the tables below. If it is a named part (button, list, sheet, icon), open [elements.md](ui/elements.md). If the person is doing a **job** (sign in, pay, create, share), pick the flow in [flows.md](ui/flows.md)
4. Phone and desktop are different patterns on the same tokens
5. Scan. Critical = 0. Verify the flow, not a screenshot

Hard: no gradients, no emoji, one installed icon pack (not Lucide, not homemade paths), four states on every data container, **no OS chrome**, type floors (body 16 / chrome 14), no manifesto copy on working screens, **tokens replace leftover hex** (no overlay CSS), no costume `01–06` pipeline.

## Pick a pattern

| Person is… | Use | Not |
| --- | --- | --- |
| Doing something to data | Button | Link, chip, card with an onClick |
| Going somewhere | Link / nav item | Primary button |
| Choosing one of a few | Radio / segmented | Wall of chips |
| Choosing many | Checkbox / filter chip | Switch |
| Turning a setting on now | Switch | Checkbox + Save |
| Typing a value | Field + visible label | Placeholder-as-label |
| Narrowing a list | Filter (see below) | A new page per facet |
| Confirming a short thing | Dialog (desktop) / sheet (phone) | A full page |
| Doing a long form | A page | Modal |
| Seeing status | Toast / banner / inline | A blocking dialog |
| Lost or new | Empty / empty-result / error | A blank box |
| Doing a named job (sign in, pay, create, share) | That row in [flows.md](ui/flows.md) | A new path invented for this screen |

Details: [elements.md](ui/elements.md) · [controls.md](ui/controls.md) · [forms.md](ui/forms.md) · [views.md](ui/views.md) · [overlays.md](ui/overlays.md) · [navigation.md](ui/navigation.md) · [states.md](ui/states.md) · [behavior.md](ui/behavior.md) · [flows.md](ui/flows.md)

## A–Z

| Element | Rule | File |
| --- | --- | --- |
| Accordion | Rare FAQ / settings groups. Not a whole page of hidden content | controls |
| Action sheet | Phone verbs on one object. Cancel is safe | overlays |
| Avatar | Photo or initials, flat tone. No gradient ring | imagery |
| Badge | Count or 9+. Never the only meaning | views |
| Banner | Persistent system message in flow. Not a toast | views |
| Bottom sheet | Phone extra / confirm / filters. Detents. Grabber | overlays |
| Breadcrumb | Trail of places. Last item is now and not a link | navigation |
| Button | Verb on data. One primary per region. Cancel is a link | controls |
| Card | One object, one target. Not a feature triplet | views |
| Carousel | No autplay without pause. Important slide first | views |
| Checkbox | Many independent ons. Square. Whole row is the hit | controls |
| Checkout / pay / subscribe | A page. Total visible. Confirm money | flows |
| Chip | Filter, choice, or token. Pill allowed here | views |
| Coach mark | One step, skippable. Not an 8-card welcome | overlays |
| Date / time / color | A picker, not a mask-only field | controls |
| Dialog | Short decision. Title = question. Verbs, not OK | overlays |
| Divider | 1px token. Only when proximity is not enough | views |
| Drawer | Compact nav or filters. One at a time | overlays |
| Dropdown / menu | Commands. Not product nav. Desktop click | overlays |
| Empty | First use: what + why + one action | empty-states |
| Empty-result | Filters / search: query stays, reset exists | empty-states |
| Error | What happened + what to do + retry | empty-states |
| FAB | One Material create. Not on iOS as the only add | controls |
| Favorite / pin / bookmark / save | Four jobs, four glyphs. Instant | flows |
| Field | Label outside. Helper. Error = text + icon + edge | forms |
| Filter | See [Filters](#filters). Applied set is visible. Reset exists | behavior |
| Full-screen overlay | Mode (gallery, editor). Exit = Back. Not a create form | overlays |
| Gallery | Media grid + lightbox. Not a hero slider | views |
| Icon | One installed pack. Not Lucide. Not a drawn path | icons |
| Illustration | Rare empty / onboarding. 120–200. No gradient | imagery |
| Link | Navigation. Looks like text, not a filled slab | controls |
| List | Phone may group rows. Desktop = one panel or a table | views |
| Login / logout / reset | Own pages. Mid-flow login returns to the job | flows |
| Loading | Spinner in place after ~300 ms. Caption says what | views |
| Logo | One mark. Contrast in dark. Click = home | imagery |
| Map pin | One shape. Cluster. Label on tap | views |
| Onboarding / tutorial | Skippable. Only what the first screen needs | flows |
| Pagination | Current + named prev/next | navigation |
| Photo | Stable crop, real size. No stock empty | imagery |
| Popover | Anchored extra. Phone → sheet | overlays |
| Progress | Determinate if you know. Not a decorative 01–06 strip | views |
| Radio | One of a few. Circle. Default or a None | controls |
| Rating | Stars + count. Not a lonely glyph | controls |
| Search | Magnifier, clear, query kept, empty-result | navigation |
| Segmented | 2–4 views of one object. Not app nav | controls |
| Select | Styled to field tokens. OS chrome is a defect | forms |
| Share / invite | Sheet on phone. Copy + list on desktop | flows |
| Sidebar | Mark + places + account. No manifesto card | navigation |
| Skeleton | One tone, optional pulse. No rainbow | views |
| Slider / stepper | A range. Live value. Snap to meaning | controls |
| Status dot | Color **and** a label | views |
| Switch | Instant. No Save. Copy + form, not color only | controls |
| Tab (in page) | 3–5 peers. Default tab has the critical content | views |
| Tab bar | Phone global 3–5. Icon + label. Same set everywhere | navigation |
| Table | Filters outside. Sticky header. Desktop first | views |
| Title | One H1. Stuck to its block. Platform top bar | views |
| Toast | Short, no answer. Not the only form error | overlays |
| Toggle group | See Segmented / Checkbox | controls |
| Toolbar | Actions on this object. Overflow for the rest | navigation |
| Tooltip | Name of an icon. Dead on touch — prefer a label | overlays |
| Top bar | Title + back + 1–3 actions. Platform placement | navigation |
| Verify | Code + resend cooldown + a way out | flows |

## Elements

If it is a named part, do not invent a type. Open [elements.md](ui/elements.md) and use that row.

| Group | Open when |
| --- | --- |
| Control | Accordion, Button, Checkbox, Color / Date / Time Picker, FAB, Radio, Rating, Search Bar, Select, Segmented, Slider, Stepper, Switch, Tab, Text Field, Title |
| View | Badge, Banner, Card, Carousel, Chip, Divider, Gallery, Loading, Map Pin, Progress, Side / Top Nav, Skeleton, Stacked List, Status Dot, Tab Bar, Table, Toolbar |
| Overlay | Action Sheet, Bottom Sheet, Coach Marks, Dialog, Drawer, Dropdown, Full-Screen, Toast, Tooltip |
| Imagery | Avatar, Icon, Illustration, Logo, Photo |

Do not confuse: Button ≠ Link ≠ Chip. Switch ≠ Checkbox. Tab ≠ Tab Bar ≠ Segmented. Carousel ≠ Gallery. Loading ≠ Skeleton ≠ Progress. Banner ≠ Toast. Dialog ≠ Full-Screen.

## Filters

A filter narrows a **collection that is already on screen**. It is not a settings page.

| | Phone | Desktop |
| --- | --- | --- |
| Where | Sheet, or a chip row under the title | Toolbar / sidebar. Not a modal |
| Applied | Chips you can remove. Count on the trigger | Same, plus a clear-all |
| None match | Empty-result, query/filters stay, Reset | Same |
| Sort | Part of the same sheet or a sibling control | Header or toolbar |
| Save | Only if people reuse the set — then name it | Same |

Do not: hide applied filters, reset on back, mix “All” with every facet selected, open a dialog per checkbox.

## States (minimum)

| Thing | Must have |
| --- | --- |
| Button | rest, hover, focus, pressed, loading, disabled (rare) |
| Field | rest, hover, focus, filled, error, disabled / readonly |
| List / table / search / chart | loading, empty, empty-result, error |
| Nav item | rest, current, hover / focus |
| Switch / checkbox / radio | off, on, (indeterminate), focus, disabled |
| Overlay | enter, open, exit; focus trapped if modal |

Full matrix: [states.md](ui/states.md). Behavior loop: [behavior.md](ui/behavior.md). Jobs: [flows.md](ui/flows.md).

## Flows

If the person is doing a job, do not invent a path. Open [flows.md](ui/flows.md) and use that row.

| Person is… | Section |
| --- | --- |
| First session, account create, tour | New User Experience |
| Profile, login, logout, password, switch account | Account Management |
| Cart, book, pay, subscribe, refund, transfer | Commerce & Finance |
| Follow, chat, invite, report, share, like | Social |
| Create, edit, delete, search, upload, publish | Content |
| Language, theme, connect, verify, setup | Misc |

Rules that repeat: long job = page; money and delete confirm; like / follow / mute are instant; pin ≠ favorite ≠ bookmark ≠ save.

## Phone vs desktop

| | Phone | Desktop |
| --- | --- | --- |
| Gutter | 16 | 24–32 |
| Collection | Grouped list or stacked rows | One panel or a table |
| Extra on a row | Action sheet | Popover |
| Confirm | Sheet | Dialog 400–560 |
| Inspector | Next screen / sheet | Side column |
| Nav | Tab bar ≤ 5 | Sidebar or top bar |
| Filter | Sheet + chips | Toolbar / sidebar |

Do not paste the phone column onto the desktop canvas.

## Motion

120–200 ms, ease-out, no bounce. Enter from the origin. `prefers-reduced-motion` snaps. [motion.md](foundations/motion.md).
