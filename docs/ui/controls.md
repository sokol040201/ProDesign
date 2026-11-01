# Controls

Interactive elements. Shared rules: 44×44 / 48×48 targets, a visible label, a visible focus ring, no gradient, no emoji. Draw them with the product’s system.

## Button

An action on data. Navigation is a link. Cancel returns to a previous state — that is a link, not a primary button.

1. It looks like a button: a fill or a stable outline, not “text with a drop shadow”
2. A button is not a link. A link is text, often underlined
3. One primary per region
4. A short verb
5. Specific: “Delete project”, not “Yes” / “OK”
6. Readable type, not 11 px
7. Icon-only only in a toolbar for experts; otherwise icon + text
8. Label contrast 4.5:1
9. Size ≥ 44
10. Space between buttons — not flush, not a half-screen apart
11. Hover and focus both exist
12. State is not color-only
13. Disabled is last resort
14. Test it in the real flow

Hierarchy: primary / secondary / ghost / danger. Keep danger away from primary.

Disabled: in forms, keep the submit action active and show field errors. Disabled is fine when the reason is obvious nearby: no text in a chat, no file selected. Otherwise put a help control beside it — not a tooltip on the disabled control itself (it has no focus). Hide a button only when that role will never get it.

Do not put a FAB and a primary on the same action.

Anatomy: optional leading icon (16–20) + label + optional trailing chevron. Horizontal padding 16–20, height 40–48 (32 visual in dense, hit 44). Radius follows the product radius role, or pill if every button in the product is pill — do not mix.

Loading: the label becomes a spinner + “Saving…”, the control stays the same size so the layout does not jump. Do not disable every other control unless the action is exclusive.

## Floating Action Button

One create action on a Material screen. Not the only way to add. Do not use it on iOS as a toolbar replacement. Do not hide a destructive action behind it. One FAB, never two. Not a gradient circle with sparkles.

Extended FAB: icon + verb, only when there is room and the action is the screen’s reason to exist.

## Checkbox

Independent on/off. Several may be on at once.

- Square, not a circle
- The whole label is clickable
- Indeterminate = “some children are selected”
- A single on/off is a Switch
- Group: a group heading + a vertical stack, gap 8–12
- Hit area is the row, not the 18 px box

## Radio Button

One of a few. Circle. At least two options or it is not a radio.

- 2–3 short options → consider Segmented
- 2 options that are on/off → Switch
- More than ~7 → a select or a list, not a wall of radios
- After interaction, the group must not be empty; ship a default or a “None” item
- Never allow selecting two

## Switch

Instant effect, no Save. If you need confirmation, use a checkbox plus a button.

- State is visible as form **and** copy (On / Off or the setting name), not color alone
- Do not put a switch in a table without a row name
- On moves in the reading direction
- Do not animate a bounce that overshoots past the track

## Segmented Control

2–4 mutually exclusive views of one object (day / week, list / grid). This is not app navigation — that is Tab / Tab Bar.

- Every segment is visible; do not scroll hidden ones
- Labels of similar length
- Selected = fill or weight, not color alone
- On iOS use the system control; do not fake it on the web with a shadow and a gradient

## Accordion

Hides secondary material so the first screen stays decidable. Do not hide the only important thing.

- Header = the question or the section name; chevron = expand
- Open one panel by default if the content is required
- No accordion inside an accordion
- Icon + text, not a chevron alone
- Height animation 150–200 ms, no bounce
- The header is a button with `aria-expanded`

## Tab (in-page)

- Few groups (about 3–5). Hidden tabs in a carousel are almost never found
- Icon only together with text
- Current tab is obvious: a line, weight, or container
- Do not use tabs as wizard steps — that is a stepper / wizard
- Do not use them as global mobile navigation — that is a Tab Bar
- Do not use them when people must compare two panels — stack the content
- The default tab is the one that must be seen
- Swipe between panels is optional and never the only path
- Keyboard: arrows move, Home / End jump

## Microinteraction

A tiny loop: trigger → feedback → optional close.

- Confirm the tap (press state, a short label change). Whisper, do not celebrate
- Form: format as the person types (phone, card); validate after an attempt
- Navigation: hover / focus show that a thing is a thing
- CTA: press and pending states; success only when the job is rare and large
- 120–200 ms, no bounce, honor reduced motion
- One loop per action. A confetti burst on Save is slop

## Search Bar

| How central is search? | Pattern |
| --- | --- |
| The product (maps, stays) | Field always visible |
| High | Icon in the tab bar and/or a field |
| Medium | Icon in the top bar |
| Rare | Inside a menu |
| Filter of the current screen | Field on the same screen |

- A magnifier, not a custom mark
- Placeholder is an example query; the accessible name is “Search”
- Keep the query on the results page
- Clear exists
- Empty result ≠ first-use empty
- Autocomplete: query suggestions and object suggestions look different
- Escape / back leaves search
- Recent searches and a clear-history action when you store them

## Slider

A continuous or large scale (volume, price). For an exact number, offer a field plus a stepper.

- The current value is a number
- Keyboard and precise input exist
- Do not use a slider for dates
- Thumb ≥ 24, preferably 44
- Range slider: two values, do not let thumbs pass without a rule

## Stepper

A discrete step: quantity, ±1. Not for 0–10 000 without a field.

- − and + have names
- Limits are obvious: − may disable at zero **if** the value 0 is visible
- The number sits between the buttons, tabular nums

## Rating Control

A rating. Not decorative stars.

- Real icons, not emoji
- Zero / clear is possible
- Average and count are separate from input
- Hover preview on desktop, tap-to-set on mobile
- Fill of the star, not color alone

## Color Picker

A tool, not page decoration.

- Product presets + custom
- A HEX / OKLCH field for exact input
- Contrast of the chosen swatch against neighbors
- A gradient inside the picker is the only allowed gradient — it is the tool
- Swatch + role name (`accent`), not “a nice purple”

## Date Picker / Time Picker

- Always offer typed input plus a calendar / clock
- Locale format, not US by default
- A range is one control, not two orphans
- Unavailable dates cannot be chosen; say why
- Time: 24h where that is the locale; 5–15 minute steps if precision is unused
- Do not ship a `__/__/____` mask as the only path

## Text Field

One typed value. Full anatomy: [forms.md](forms.md).

- Label outside, always visible. Placeholder is an example, not the label
- Height 40–48 (32 visual in dense, hit 44). Phone type ≥ 16 so the page does not zoom
- Helper under the field. Error = text + icon + edge
- Correct `type` / `inputmode` / `autocomplete`
- Clear when there is value. Password has a named show/hide
- Do not use a field when a picker, stepper, or select is the real control

## Title

The name of this place. One H1. Stuck to its block. Platform placement in the top bar. Depth: [views.md](views.md#title).

## Pairing with forms

Labels stay visible. Errors: text + icon + edge. Fewer fields by default. Tab order is logical. Every action answers. Irreversible actions confirm. Full states. Details: [forms.md](forms.md).
