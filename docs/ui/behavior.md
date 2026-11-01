# Behavior

How the interface answers. Looks without this is a mock.

## The loop

**Trigger → rule → feedback → next.**

1. The control looks usable
2. The tap/click/key does one obvious thing
3. The UI shows that it happened (or why it did not)
4. The person can continue or undo

If any step is missing, stop and add it. Do not add a second animation instead.

Named jobs (sign in, pay, create, share, …): [flows.md](flows.md). Do not invent a second path.

## Response time

| Wait | What to show |
| --- | --- |
| < 100 ms | Nothing extra. Pressed state is enough |
| 100 ms–1 s | Cursor / spinner on the control. Keep the layout |
| 1–10 s | Progress in place. Cancel if it is safe |
| > 10 s | Named progress + leave and come back |

Do not block the whole screen for a field save.

## Undo and confirm

- Reversible: do it, then offer undo (toast with Undo, 5 s)
- Costly / irreversible: confirm first (dialog / sheet). Title is the question. Primary repeats the verb
- Accidental delete in a list: undo beats a confirm on every row
- Payments, legal, mass send: confirm with the total visible

## Selection

- Desktop lists: click selects, open on the primary column or a named button. Overflow is not the only open
- Multi-select: a checkbox column appears with a count and bulk actions
- Phone: tap opens. Edit mode for multi-select. Swipe actions stay predictable (leading archive / trailing destructive, or the platform default)
- Selection is visible when the inspector is open

## Search

- Field with a magnifier, clear, and Escape to dismiss
- Query stays on the results
- Empty-result ≠ first-use empty
- Recent / suggested only if they are real
- Desktop: `/` may focus search. Phone: a screen or an expanding field in the top bar

## Filters

See [apply.md](../apply.md#filters).

- People must see what is on
- Changing a filter updates the collection without a new page load when it can
- URL or equivalent stores the set on desktop so back/share works
- Do not silently re-apply yesterday’s filters on a first-run empty

## Forms

- Submit stays available. Errors on fields, then a summary if many
- Format as they type
- Autofill and the right keyboard
- Leave with unsaved changes: confirm only if data would be lost
- Success: the object exists, a receipt, a next step

## Navigation behavior

- Back returns to the same scroll and filters
- Deep link opens the same state
- One history entry per real place, not per chip
- Phone: system back / swipe-back works. Do not trap it
- Desktop: breadcrumbs in deep stacks

Full chrome rules: [navigation.md](navigation.md).

## Motion

Press, overlay enter/exit, list insert. 120–200 ms. No bounce. No load-delight. [motion.md](../foundations/motion.md).

## Errors

- Prefer prevention (picker, stepper, the right type)
- After an attempt: inline, specific, next to the field
- Network: retry on the container, keep what is already on screen
- Do not blame the person (“Invalid input”) — say the rule

## Honesty

No fake unread badges. No infinite skeleton. No button that does nothing. No confirm that has already executed.
