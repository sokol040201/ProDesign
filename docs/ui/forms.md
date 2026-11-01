# Forms

A form is a conversation that should end in a submitted, valid object. Most generated forms fail on labels, errors, and disabled submit.

## Four load reducers

1. **Structure** — a visible path. Group related fields (name, then address). Section headings. Related fields closer than sections. Question order like a respectful conversation: easy → dependent → sensitive. Zip before city if it can autofill. Conditional fields hide what does not apply
2. **Transparency** — say the cost up front: time, documents, what happens next. No surprise fields after “Continue”
3. **Clarity** — one meaning per label. No double negatives. Visible labels, examples as helpers
4. **Support** — help at the moment of need: format hints, inline errors after an attempt, a way to save and leave

A form is not a two-column wall of placeholders.

Format as the person types (spaces in a card number, a locale phone). Progressive fields: show the next block when the previous one is known. Checkout should feel like one breath — biometrics and remembered defaults are allowed; a silent charge is not. Always end on a receipt and a next step.

## Anatomy of a field

1. **Label** — always visible, outside the field. Never use the placeholder as the only label
2. **Field** — height 40–48 (32 visual in dense, hit 44)
3. **Helper** — optional, muted, under the field
4. **Error** — replaces or follows the helper; text + icon + edge
5. **Optional mark** — mark optional fields, or mark required, not both systems on one form

Gap label→field: 4–8. Gap field→field: 12–16. Group related fields; put a group heading on the group, not on every line.

## Text field

- One line. `autocomplete` and the correct `inputmode` / `type` (`email`, `tel`, `url`, `numeric`)
- Prefix / suffix (currency, unit) sit inside the field, they do not move the label
- A leading icon is optional and never replaces the label
- Clear appears when there is value
- Password: a real eye icon that toggles `type`, with an accessible name
- Do not use `placeholder` for instructions (“8+ characters”). That is helper text
- On iOS, 16 px or larger to avoid zoom

States: rest, hover, focus (ring 2–3 px), filled, error, disabled, readonly.

Readonly looks like content, not like a dead input. Disabled looks muted and is rare.

## Textarea

- Visible start height 3–5 lines
- Resize vertical or auto-grow; never horizontal resize that breaks the grid
- Character count only when there is a real limit; announce the limit before it is hit
- Do not use a textarea for a single-line name

## Select / combobox

The OS `<select>` is **not** a finished control. Leaving browser chrome (system menu, 13 px type, grey arrow) is a defect.

- Same height, radius, border, type, and focus as the text field
- `appearance: none` (or a combobox). Custom chevron from the **installed** pack, not a Unicode `▼`
- Closed control shows the current value, not “Select…”
- Short closed list: styled native select is allowed **only** after it matches the field tokens
- Long list people filter: combobox
- Menu: 8–12 visible rows, then scroll; the selected row is visible on open
- Empty filter state inside the menu: “No matches” + a way to clear
- Do not style a div to look like a select and forget keyboard (arrows, typeahead, Escape)
- Same rule for `input type="date|time|color|file|range"`: the visible chrome is the design system, not the OS

## Validation

Order of preference:

1. Prevent the error (the right `type`, a stepper instead of free text, a picker)
2. Validate on blur or on submit, not on every keystroke for the first visit
3. On submit: scroll / focus the first error, list nothing as a mystery at the top unless there are many errors
4. Keep the submit button **active**. On press, show errors. A silent disabled submit is a defect
5. Success is visible: a toast or an inline “Saved”, not a vanished button

Error copy: what is wrong and how to fix it. “Invalid” is not enough. “Enter a date like 31.01.2026” is.

Do not validate only in red. Icon + text + edge.

## File upload

- A button “Upload file” plus a drop zone if desktop; do not rely on drop alone
- Accept and size limits are written before the attempt
- Progress for each file; cancel; retry
- A real file icon, not emoji
- Error per file, not one banner for five failures
- Empty: what file types you want

## Multi-step

- Step N of M, named steps, not only dots
- Back does not destroy values
- A long flow is a **page**, not a modal
- The last step is review + the real verb (“Pay $42”, “Create workspace”)

## Layout

- One column for most forms. Two columns only for first/last name, city/postal, or similarly paired data
- Primary action at the end of the form, start-aligned or trailing — pick one product rule and keep it
- Cancel is a link beside or under the primary, never equally heavy
- Sticky footer actions on long mobile forms are allowed; do not cover the last field

## Auth-specific

- Email first, then password, unless a passwordless path is the product
- Social buttons are secondary and named (“Continue with Apple”), with real marks
- Stay in context if the person hit auth mid-task (a dialog is allowed here because the task is short)
- Tab through the form; more than one way to focus a field
- Always-visible labels

## What to hunt

```
unstyled <select> / OS date / OS file
placeholder-only labels
disabled submit until 12 fields are "perfect"
<button>OK</button>
input type="text" for email / tel / date
no autocomplete
error in color only
```
