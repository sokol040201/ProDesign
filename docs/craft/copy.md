# Interface writing and punctuation

Words are part of the layout. Sloppy type-setting is a visual defect.

## Voice

- Buttons are verbs: “Create invoice”, not “Invoice” or “OK”
- Titles name the object or the problem
- Errors: what failed and how to fix it, no blame
- Empty: what will live here and how to start
- One product, one word for one action
- No “Unlock”, “seamless”, “journey”, “next-gen”
- No “От идеи до…”, “всё под контролем”, “на автопилоте”, “в одном месте”
- A working screen is not a landing. H1 = the place. Delete the mission subtitle

## Punctuation

- Straight quotes in code; typographic quotes in running UI copy if the locale uses them — pick one and keep it
- Use a real apostrophe in English contractions
- Hyphen `-` in compounds, en dash for ranges (`12–24`), em dash for a break — do not mix randomly
- Ellipsis `…` means “in progress” or a truncated string, not drama
- No double space
- No space before `? ! :` in English; follow the locale in French
- Numbers: thin space or comma by locale; keep one rule
- Do not set UI in all caps except a single 2–3 word badge
- Do not justify UI copy

## Labels and helpers

- Label outside the field, always visible
- Placeholder is an example (`jordan@studio.com`), not an instruction
- Helper text before the error; the error replaces it
- Optional vs required: one system, not both
- Units live in the label or a suffix, not only in the placeholder

## Strip first

Most generated apps add a paragraph the person already knows.

Delete:

- The overline above the title
- The sentence under the H1 that restates the nav (`Scripts, reels and posts. Everything under your control.`)
- The footer caption that restates a rule already in the UI
- “How this works” on a screen that already has a primary action
- Empty-state essays. Title + one line + one verb

Keep: the object name, the verb, the state, the error.

## Length

- Button: 1–4 words
- Toast: one line if possible, two maximum
- Empty title: ≤ 6 words
- Empty body: one or two sentences
- Dialog title: the decision, not the product name

## Attention and scan

People do not read, they hunt.

- Front-load the useful word (“Delete project”, not “Are you sure you want to…”)
- Put the object first in lists
- Avoid walls of terms
- Links describe the destination (“View invoices”, not “Click here”)

## Confirmation copy

- Low stakes: “Saved”
- High stakes: “Invoice #1842 sent to Maya Chen” + next action
- Never “Success!” with no object

## Localization room

- Buttons and tabs wrap or grow; do not fix a width to English
- Leave ~30% for longer languages
- Icons that contain letters must localize
