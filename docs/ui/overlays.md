# Overlays

A layer above the page.

| Term | Meaning |
| --- | --- |
| Overlay | Content on top of a page |
| Modal | The background is blocked |
| Non-modal | The background stays live |
| Dialog | A short conversation between system and person |
| Popover | A small non-modal panel **anchored to a control** |
| Menu | A list of commands; often a popover |
| Sheet | A panel from an edge (usually the bottom on phones) |
| Popup | **Not a type.** Say dialog, popover, menu, sheet, or toast |
| Scrim | A dimming of the background |
| Mode | A special state where the same gestures mean something else |

How to choose:

1. Long task, its own navigation, many fields → **a page**
2. A short decision in context (confirm, sign-in mid-checkout) → **dialog / sheet**
3. Actions on an object, mobile → **action sheet**
4. Extra panel, background still useful → **drawer / non-modal**
5. Extra facts on a control, page still useful → **popover** (desktop) or **sheet** (phone)
6. Status that needs no answer → **toast / banner**
7. Hint on a control → **tooltip / coach mark**

Never open a modal from a modal. Trap focus, Escape / swipe / system back closes, focus returns to the trigger. One overlay at a time. A toast may sit on a page; it does not sit on a dialog.

Motion: enter from the origin, 120–200 ms, no bounce. See [motion.md](../foundations/motion.md).

## Dialog

- Title = the problem or the question
- Buttons = specific verbs; the primary repeats the meaning (“Delete project”)
- Destructive is visually separate
- Cancel is secondary or a link
- Not for multi-step forms
- Do not close on scrim click when the cost of a mistake is high
- Confirm the irreversible
- Width ~ 400–560 on desktop; almost full width with side margins on compact
- Title is an `h2` (the page already has an `h1`)

## Action Sheet

A mobile list of actions on an object.

- Items are verbs
- Destructive is red, at the bottom or separated
- Cancel always exists and is safe
- Not 15 items — then a page or a menu
- Not the only pattern on desktop: use a dropdown or a dialog there

## Bottom Sheet

A panel from the bottom: filters, details, share.

- Detents (mid / full), not always full
- A grabber + scrim + swipe down
- Content scrolls inside; the sheet does not jump
- Complex work becomes a full page
- Do not hide the only CTA below the fold of the sheet

## Drawer

A side panel: compact nav or filters.

- On a wide screen, prefer a persistent sidebar
- Focus and overlay on compact
- Not two drawers at once
- Close: scrim, Escape, system back

## Popover

A compact panel pinned to a control. The page behind stays visible and, unless the choice is required, stays usable.

Use when the extra UI is **about that control**: a date snippet, a person card, a short filter, a menu of 3–8 commands.

- Anchored to the trigger. Flip when it would clip the viewport. Never appear in the screen center (that is a dialog)
- Width ~ 240–360 on desktop. Not a second page
- On a phone, most popovers become a **sheet** or a **full-screen** push. Hover popovers do not exist on touch
- Light dismiss (click outside / Escape) unless the popover holds an uncommitted form — then it needs Cancel / Apply
- Arrow / caret is optional. Do not add a decorative triangle if the alignment is already obvious
- Focus: if it contains fields, trap; if it is only a menu, arrow keys move, Enter chooses, Escape returns
- Do not nest a popover in a popover
- Not for confirm-delete of something costly — that is a dialog
- Chrome follows the look, but a floating panel still needs an edge or a raised tone. Fill on the page does not mean an invisible popover on a white card
- Overlay radius, no glow, no second shadow plus border

## Dropdown Menu

A list of commands on a button or a field.

- Not the whole product’s navigation
- Shortcuts sit on the trailing edge of the item
- Separate actions from navigation; do not put “Category manager” under “More actions”
- Desktop: click (hover-open is extra); mobile: click
- Item height ≥ 32–36, one icon family
- No emoji menus
- Submenus open to the side and stay hoverable; on mobile they become a next sheet

## Full-Screen Overlay

A **mode**: lightbox, media, canvas, a rare onboarding step. The page underneath is gone.

- Exit is obvious: Back in a stack, Esc / X on desktop
- System gestures (swipe-back / edge) still work. Do not trap the person
- Not for an ordinary create, settings, or checkout — those are pages
- Gallery lightbox: keys, caption, focus, next/prev. See [views.md](views.md#gallery)
- One mode at a time. Do not stack a dialog on the mode unless it is a confirm-leave
- The first paint should be the content, not a blank scrim

## Toast

Non-modal status. A tap on the shoulder.

- One message, 3–5 s, dismissible
- An error toast is allowed only with a CTA, and never as the only record of a form error
- Stack by urgency, never six toasts at once
- Not a giant centered card
- No gradient, no party popper
- Position: bottom on mobile, corner on desktop — one product rule

## Tooltip

A hint on an already understandable control: the name of an icon-only, a shortcut.

- On hover / focus, not as the only help on click
- Not for required information (then a label or helper text)
- Delay ~300 ms, not instant jitter
- Does not clip on the viewport edge
- On touch, a tooltip is nearly dead — show visible text

## Coach Marks

Teaching on the live UI. Pull, do not push.

- One step = one spotlight
- Skippable; do not show on every launch
- Not an 8-card welcome carousel
- Do not cover the control you are teaching without a hole in the mask
- After close, the person can act immediately

## Notification types

| Type | When |
| --- | --- |
| Toast | short, does not block |
| Banner | session / system, stays |
| Dialog | a decision is required |
| Inline | on a field / row |
| Notification center | history and settings |

Always: title, meaning, action. Let people mute types. Never fire a storm of pushes.

## Focus and layer

- `z-index` is a token: base / raised / overlay. One overlay layer, not a stack of magic 9999s
- The trigger stays identifiable (pressed or selected) while its overlay is open
- Return focus to the trigger on close, unless the trigger was destroyed — then to the nearest sibling
- Scroll lock the page only when the overlay is modal
- Hit slop: the scrim is the page; the panel is the panel. Do not leave a 4 px dead ring that is neither

## Phone vs desktop

| Job | Phone | Desktop |
| --- | --- | --- |
| Confirm | sheet or dialog | dialog ~ 400–560 |
| Object actions | action sheet | popover / menu |
| Filters | sheet (mid detent) | popover or side panel |
| Person / preview | sheet or page | popover |
| Help on a control | visible text | tooltip or a short popover |
