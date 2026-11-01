# Flows

A flow is a **job**: trigger → place → confirm if needed → feedback → next. Same tokens as the rest of the product. Phone and desktop stay different patterns.

When the person is doing a job, open this file. Do not invent a second path for the same job.

## How to apply

1. Find the job in [Lookup](#lookup)
2. Use the phone / desktop / overlay in that row
3. Add the states in that row
4. Stop. Do not add a welcome carousel, a second confirm, or a new chrome language

Shared contract (every flow):

- Long task / many fields → **a page**. Short decision → dialog (desktop) / sheet (phone)
- Reversible → do it, then undo (toast, ~5 s)
- Costly / irreversible → confirm first. Title is the question. Primary repeats the verb
- Every collection: loading / empty / empty-result / error
- Success matches the stakes: quiet toast for a toggle, a receipt for pay / create
- One primary per region. Cancel is safe and secondary
- Never a modal from a modal. Focus returns to the trigger
- Back restores scroll, query, and filters

Copy: buttons are verbs. The same action has the same name everywhere. No slogan, no fake urgency.

---

## Lookup

| Job | Phone | Desktop | Overlay | After | Not |
| --- | --- | --- | --- | --- | --- |
| **New User Experience** | | | | | |
| Browsing Tutorial | One coach or a short page | Same, or a dismissible panel | Coach / none | Skip lands in the product | 8-card welcome, trap |
| Creating Account | Full page | Full page | None | First real job | Dialog, placeholder-as-label |
| Onboarding | Paged ask, skippable | Same or inline | None | Home with the first object | Forced marketing slides |
| **Account Management** | | | | | |
| Editing Profile | Settings page | Settings page / column | None | Saved toast | Photo crop as the only screen |
| Deleting & Deactivating Account | Page + confirm sheet | Page + dialog | Confirm | Signed out / deactivated | One tap delete, maze |
| Logging In | Page; mid-flow: sheet | Page; mid-flow: dialog | Rare | Return to the interrupted job | New tab that loses the cart |
| Logging Out | Menu / sheet | Menu | Confirm only if unsaved | Signed-out home | Confirm every time |
| Resetting Password | Page | Page | None | “Email sent” without leaking | Instant “no such user” |
| Switching Account | Sheet of accounts | Menu | Confirm if unsaved | Same place, other account | Silent drop of a draft |
| **Commerce & Finance** | | | | | |
| Adding to Cart & Bag | Stay + toast | Stay + toast | Toast | View cart action | Force cart page |
| Booking & Reserving | Page + pickers | Page + calendar | Confirm if paid | Booking detail | Hidden fees at the end |
| Canceling Order & Refunding | Sheet | Dialog | Confirm | Status + amount | Hide the refund path |
| Canceling Subscription | Page | Page | Confirm | Access until date | Dark-pattern retain |
| Listing | Form page | Form page | Publish confirm if public | Live listing | Modal listing form |
| Purchasing & Ordering | Checkout page | Checkout page | Pay confirm if needed | Receipt + next | Modal checkout |
| Redeeming | Field in context | Field in context | None | Code applied on the row | Dead “OK” |
| Subscribing & Upgrading | Plans page | Plans page | Confirm total | What changed | Hidden renewal |
| Transferring Money | Page | Page | Confirm total | Receipt | Send without a review |
| **Social** | | | | | |
| Banning & Blocking | Sheet | Dialog | Confirm | List of blocked | Instant, no undo path |
| Calling | In-call screen | Window / panel | Permission first | End is obvious | Tiny red control |
| Chatting & Sending Messages | Thread + pinned composer | Thread + pane | None | Sent / failed / retry | Lose unsent text |
| Commenting & Replying | Inline or sheet | Inline | None | Comment in place | New page per reply |
| Following & Subscribing | Instant | Instant | Undo toast | Count updates | Confirm follow |
| Gifting | Page | Page | Confirm | Receipt to both | Surprise charge |
| Giving Feedback | Sheet | Dialog / page | None | Thanks, done | Second survey |
| Inviting Teammates & Friends | Sheet / page | Dialog / page | None | Count sent | Harvest the whole book |
| Joining & Accepting | Accept / Decline | Same | None | Land in the place | Dead “OK” |
| Leaving | Sheet | Dialog | Confirm if lost | Out, list updates | Leave with no way back copy |
| Liking & Upvoting | Instant toggle | Instant | None | Count + state | Confirm a like |
| Muting | Instant | Instant | Undo toast | Muted list in settings | Hidden unmute |
| Referring Friends | Share sheet | Copy + share | Share | Link copied | Mandatory contacts |
| Registering | Button → pending | Same | Confirm if limited | Ticket / seat | Lose the event context |
| Reporting | Sheet of reasons | Dialog | Confirm send | Done, no ping to target | Public shame |
| Requesting | Instant pending | Instant | None | Cancel request | No pending state |
| Reviewing & Rating | Sheet / page | Page | None | Stars + count | Stars with no count |
| Scheduling | Page + picker | Page + calendar | Confirm | Event on the calendar | Silent double-book |
| Sharing | Share sheet | Copy + destinations | Share / popover | Copied / sent | Tracked “viral” wall |
| **Content** | | | | | |
| Adding & Creating | Page if long; sheet if short | Page; dialog only if tiny | None / sheet | Object exists | Modal novel |
| Archiving | Instant | Instant | Undo toast | Out of the default list | Confirm every archive |
| Copying & Duplicating | Instant | Instant | Toast | Land on copy or stay | Silent clone |
| Deleting & Removing | Sheet if costly | Dialog if costly | Confirm or undo | Gone, undo if safe | Confirm on every row |
| Drawing | Canvas page | Canvas page | Unsaved confirm | Saved object | Trap without save |
| Editing & Updating | Page or inline | Page or inline | Unsaved confirm | Saved | Autosave with no signal |
| Favoriting & Pinning | Instant | Instant | None | State + list | One icon for four jobs |
| Filtering & Sorting | Sheet + chips | Toolbar / sidebar | Sheet on phone | Collection updates | New page per facet |
| Importing & Exporting | Page + progress | Page + progress | None | Count + errors | Silent fail |
| Listening to Audio | Player, no surprise sound | Same | None | Pause / scrub | Autplay with sound |
| Logging & Tracking | Timeline | Timeline / table | None | Four states | Empty table |
| Marking | Instant | Instant | None | State visible | Hidden “mark all” |
| Moving | Destination picker | Picker / tree | Confirm if costly | Object in the new place | Drag with no target name |
| Publishing | Preview → publish | Same | Confirm if public | Live URL | Publish as a silent save |
| Recording Audio & Video | Permission → capture | Same | None | Retake / use | No permission copy |
| Reordering | Drag, instant or Save | Drag | None | Order persists | Order lost on refresh |
| Saving to Collection | Picker sheet | Picker popover | New collection | In the set | Create-only, no pick |
| Scanning | Camera page | Camera / upload | None | Result + retry | Fail with no retry |
| Searching & Finding | Field, query kept | Field, `/` ok | None | Empty-result ≠ empty | Reset on back |
| Selecting & Choosing | Edit mode / tap | Click + checkbox column | None | Count + bulk | Overflow as the only select |
| Starting & Completing | Progress + resume | Same | None | Done state | Lose progress |
| Taking Photos | Camera / library | Upload / camera | Crop only if needed | Image on the object | Force a filter |
| Uploading & Downloading | Progress + cancel | Same | None | Retry on fail | Block the whole app |
| Watching Video | Player, captions | Same | None | Controls stay reachable | Autplay sound |
| **Misc** | | | | | |
| Changing Language | Settings list | Settings | None | UI in that language | Restart wall |
| Connecting & Linking | Permission sheet | Dialog / page | OAuth | Connected + Disconnect | Connect without revoke |
| Enabling & Disabling | Switch | Switch | None | Instant | Checkbox + Save |
| Setting Up | Wizard only if ordered | Same | None | Resume + skip | 12 required steps |
| Showing & Hiding | Instant | Instant | None | View updates | Buried toggle |
| Switching to Dark Mode | Light / Dark / System | Same | None | Instant | Theme as a restart |
| Switching View | Segmented | Segmented / toolbar | None | Same data, new view | New route per view |
| Turning On/Off | Switch; confirm if costly | Same | Confirm if costly | Instant | Color-only state |
| Verifying | Code page | Code page | None | Resend cooldown | Lock with no escape |

---

## New User Experience

First session is a **path into the product**, not a brand film.

**Browsing Tutorial**
- One job per step. Skip is always visible
- Coach mark on a real control, or a short page. Not eight feature cards
- After skip or end: the working screen, not a second tour
- Do not block the tab bar / sidebar behind the tour

**Creating Account**
- A page. Email / phone + secret, or one SSO column
- Labels stay visible. Password rules before submit
- Terms: checkbox + links, not a wall inside the button
- Error on the field. Submit stays enabled
- Success opens the first job (create, invite, or home with empty + action) — not a blank dashboard

**Onboarding**
- Ask only what the first screen needs. The rest is settings later
- Progress if more than two steps. Back keeps answers
- Skip / “Do this later” on every optional step
- Not a marketing carousel. Not a permissions barrage before value

Empty after first-run: first-use empty with one action. See [empty-states.md](empty-states.md).

---

## Account Management

Account work lives in **settings**, except login / reset (their own pages).

**Editing Profile**
- Photo, name, and the fields the product uses. Save is a verb
- Avatar: photo or initials, no gradient ring
- Leave with unsaved changes: confirm
- Success: toast or inline “Saved”

**Deleting & Deactivating Account**
- Two different jobs. Name them
- Deactivate: reversible, say how to come back
- Delete: irreversible. Confirm with a typed name, password, or a clear consequence list. Primary is “Delete account”
- Do not bury this behind a riddle of pages. Do not make it one tap

**Logging In**
- Own page when it is the start. Sheet / dialog only when a job was interrupted
- After success, return to that job (cart, invite, comment)
- Field errors. “Wrong email or password” if you must not leak; otherwise be specific
- SSO buttons are secondary actions, same height as the form controls
- Session persists unless the product is a shared-device console

**Logging Out**
- Do it from the account menu
- Confirm only if a draft would die. Otherwise leave + signed-out home
- Do not confirm logout on every tap

**Resetting Password**
- Own page from login
- After submit: “If an account exists, we sent mail” — do not confirm a missing email unless the product’s threat model allows it
- New password: rules visible, show/hide, cannot match the old if you know it
- Deep link from mail lands on the new-password page, not on login

**Switching Account**
- List of accounts, current marked, Add account
- Phone: sheet. Desktop: menu
- Switching drops the other session’s draft only after confirm

---

## Commerce & Finance

Money is a **page** with a visible total. No hidden cost, no trick checkbox, no buried cancel.

**Adding to Cart & Bag**
- The object stays on screen. Toast: added + View cart / Undo
- Count on the bag icon updates
- Do not navigate to cart unless the product is cart-first

**Booking & Reserving**
- Date / time / party as pickers, not mask-only fields
- Availability before pay. Fees before the last step
- Confirm shows when, what, and the total

**Canceling Order & Refunding**
- Confirm: what is canceled, refund amount, method, timing
- After: status on the order, not only a toast
- Refund is a path on the order, not a support-only secret

**Canceling Subscription**
- One page. Why (optional), what they lose, when access ends
- Keep access until the paid date if that is the policy — say it
- Do not: unlabelled “special offer” walls, a confirm that is actually Keep, a missing cancel

**Listing**
- Form page. Preview before it is public
- Publish confirm if strangers will see it
- After: the live listing, not an empty seller home

**Purchasing & Ordering**
- Checkout is a page: items, address, method, **total**
- Pay is the last step. Loading on the pay control, not a full-screen takeover that hides the amount
- Success: receipt (what, total, where it goes) + one next step
- Failure: the cart is still there, retry, a specific reason

**Redeeming**
- Field + Apply next to the total or the ticket
- Success on the row (amount off). Error: expired / used / unknown — not “invalid”

**Subscribing & Upgrading**
- Plans as a comparison, not three mystery cards
- Period, price, renewal, what changes on upgrade / downgrade
- Confirm the total and the next charge date
- After: the new plan name on the account

**Transferring Money**
- Amount, recipient, source. Review step with the total
- Irreversible: confirm. Receipt after
- Limits and fees before Send

---

## Social

Social verbs are **instant** unless they harm someone or spend money.

**Banning & Blocking**
- Confirm. The person disappears from feeds
- Unblock / unban lives in a settings list

**Calling**
- Mic / camera permission before connect, in plain words
- In-call: mute, speaker, end — large, labeled
- Fail: retry, not a dead screen

**Chatting & Sending Messages**
- Composer pinned. Unsent text survives a brief leave if you can
- Bubble states: sending / sent / failed + retry
- Empty: “No messages yet” + why, not a blank thread
- Desktop: list | thread. Phone: list → thread stack

**Commenting & Replying**
- Inline field under the object. Reply is nested or a sheet, not a new route
- Post stays enabled; errors on the field

**Following & Subscribing**
- Toggle now. Undo toast. Count updates
- Do not confirm Follow. Subscribe-for-money is [Subscribing & Upgrading](#commerce--finance)

**Gifting**
- Who, what, pay. Confirm recipient and amount
- Both sides get a receipt

**Giving Feedback**
- Sheet (phone) or dialog / short page
- Optional rating + text. One submit
- Thanks, then close. Do not chain a second form

**Inviting Teammates & Friends**
- Emails / handles + role if roles exist
- Send. Success is a count. Failed addresses listed
- Do not upload the whole address book by default

**Joining & Accepting**
- Accept and Decline are both verbs, same weight unless Accept is the only safe path
- After Accept: the place they joined, not a generic home

**Leaving**
- Confirm if they lose the space, history, or admin
- After: out of the list. How to come back, if they can

**Liking & Upvoting**
- Toggle. Count + state. No confirm
- Do not use a heart for “save” if Like already uses it

**Muting**
- Instant + undo. Muted list in settings
- Mute ≠ block. Name them differently

**Referring Friends**
- Copy link + the platform share sheet
- Credit / reward copy is honest about when it pays

**Registering**
- RSVP / register for an event or group
- Limited seats: confirm. After: ticket or “You’re in” with time and place

**Reporting**
- Reasons first (radio), optional text
- Confirm send. The target does not see the report
- After: done. Do not keep the person in a dispute UI unless that is the product

**Requesting**
- Request → Pending → Accepted / Declined
- Cancel request while pending
- Do not look like Follow if it needs approval

**Reviewing & Rating**
- Stars **and** a count. Written review optional
- Edit or delete own review
- Empty: “No reviews yet”, not a zero star

**Scheduling**
- Picker with duration and timezone if it matters
- Conflicts visible. Confirm writes the event
- After: it exists on the calendar / list

**Sharing**
- Phone: system share sheet. Desktop: copy link + a short destination list
- Success: “Link copied” / “Sent”
- Do not force a public post to share a private object

---

## Content

Create and change live on a **page** when they are long. Small captures may use a sheet.

**Adding & Creating**
- One obvious create. Phone: primary in the top bar or one FAB (Material only)
- Long form = page. Title, body, publish / save
- After: the object, not an empty list that hides it
- First-use empty on the collection points here

**Archiving**
- Do it. Undo toast. Archived list exists
- Confirm only for mass archive

**Copying & Duplicating**
- Do it. Toast with Open copy, or land on the copy
- The copy is named (“… copy”) so it is findable

**Deleting & Removing**
- List row, reversible: undo
- Object, irreversible or shared: confirm (sheet / dialog)
- Mass delete: confirm with the count
- Remove-from-set ≠ delete-the-object. Different words

**Drawing**
- Canvas is a page. Tools are a toolbar
- Save / Done is explicit. Leave with strokes: confirm
- Undo inside the canvas is the stroke undo, not a toast

**Editing & Updating**
- Edit in place or a page. Do not open a modal for ten fields
- Autosave: a visible Saved / Saving / Failed
- Manual save: unsaved confirm on leave

**Favoriting & Pinning**
- Four different jobs. Do not share one glyph:
  - **Favorite** — mine, emotional
  - **Pin** — stays up in this place
  - **Bookmark** — read later
  - **Save** — into a collection ([Saving to Collection](#content))
- Instant toggle. State must read without color alone

**Filtering & Sorting**
- See [apply.md](../apply.md#filters)
- Phone: sheet + removable chips. Desktop: toolbar / sidebar
- Empty-result keeps the query. Reset exists
- Sort is a sibling of filter, not a new page

**Importing & Exporting**
- Choose source / format. Progress with cancel
- Result: N in, N failed, downloadable error list
- Do not claim Done if rows failed

**Listening to Audio**
- No sound until play. Visible pause, time, skip
- Lock-screen / now-playing if the platform has it
- Transcript or captions when the product has speech

**Logging & Tracking**
- A timeline or table with the four states
- Each row: time, what, who
- Empty: why people would log, one action

**Marking**
- Mark read / done / seen: instant
- Mark all is a named action, confirm if it clears a large unread set

**Moving**
- Pick the destination by name (list, tree, search)
- Confirm if the move is hard to undo (out of a shared space)
- After: the object is there; old place no longer lists it

**Publishing**
- Preview as the audience will see it
- Confirm if it becomes public or notifies people
- After: live URL / “Published” + View
- Unpublish is a real path

**Recording Audio & Video**
- Permission copy before the prompt
- Timer, retake, use
- Fail: permission denied with a path to settings

**Reordering**
- Drag with a handle. Instant or an explicit Save
- The order must survive refresh
- Keyboard: move up / down if the list is an app, not a canvas

**Saving to Collection**
- Picker of existing sets + New collection
- Phone: sheet. Desktop: popover
- After: a check on that set. Open collection is optional

**Scanning**
- Camera or file. Permission first
- Result on screen. Retry / enter manually
- Bad read is an error with a next step, not a freeze

**Searching & Finding**
- Magnifier, clear, Escape / cancel
- Query stays on results. Recent only if real
- Empty-result ≠ first-use empty
- Desktop `/` may focus. Phone: screen or expanding field

**Selecting & Choosing**
- Desktop: click selects; checkbox column for many; count + bulk
- Phone: tap opens; edit mode for many
- Overflow is not the only way to open
- See [behavior.md](behavior.md#selection)

**Starting & Completing**
- A started job has progress and Resume
- Complete is a verb on the object
- Do not wipe progress on a refresh if you stored it

**Taking Photos**
- Camera or library. Crop only when the product needs a ratio
- After: the image on the object, replace path exists

**Uploading & Downloading**
- Progress on the item. Cancel. Retry
- Do not block the rest of the app for one file
- Download: the system download, plus a failure you can retry

**Watching Video**
- No autplay with sound. Captions if you have speech
- Controls remain reachable. Speed / fullscreen if the product is a player
- Do not auto-advance a stack the person did not start

---

## Misc

Settings that change the **environment**, not the object.

**Changing Language**
- List language names in that language
- Apply now. Do not require a reinstall
- Layout must survive longer words (German, etc.)

**Connecting & Linking**
- What you will read / write, before OAuth
- After: connected name + Disconnect
- Failed link: retry, the old connection stays

**Enabling & Disabling**
- Switch. Instant. No Save
- Copy states the on meaning. Color is not the only on

**Setting Up**
- Wizard only when the order is required (device, payment, legal)
- Skip and Resume. Progress
- Each step is one decision. Not a settings dump

**Showing & Hiding**
- Instant. The view updates
- Hidden things have a place to come back (view options, not a secret)

**Switching to Dark Mode**
- Three choices: Light, Dark, System
- Instant. All roles swap. Do not ship a partial invert
- See [color.md](../foundations/color.md)

**Switching View**
- Segmented or toolbar. Same data, list / board / map / calendar
- Do not change the URL into a dead end; back still works
- Current view is visible

**Turning On/Off**
- Same as Enabling unless the off is costly (all notifications, two-factor)
- Costly off: confirm. Title is the loss

**Verifying**
- Code field, one box or grouped, numeric keyboard on phone
- Resend with a cooldown. Change the destination
- Errors: expired / wrong, not “invalid”
- A way out: back to login or support. Do not lock the person in a dead loop

---

## Phone vs desktop (flows)

| | Phone | Desktop |
| --- | --- | --- |
| Auth, checkout, create, settings | Pages in a stack | Pages; settings may be a column |
| Confirm money / delete / leave | Sheet | Dialog 400–560 |
| Share / invite / account switch | Sheet | Menu / popover |
| Instant social / favorite / mute | In place + toast | In place + toast |
| Chat / mail | List → thread | List \| thread |
| Filter / view switch | Sheet + chips / segmented | Toolbar |
| Permission | System dialog after in-app why | Same |

Do not paste a phone sheet-stack onto a wide canvas. Do not open a desktop dialog for a ten-field create.

---

## Hunt

- A job with no success
- Confirm on a like / follow / archive of one row
- Checkout or create inside a modal
- Cancel subscription that is harder than subscribe
- One icon for pin, save, favorite, bookmark
- Tour that cannot be skipped
- Login that forgets the cart
- Empty after create (the object vanished)
- Verify loop with no resend and no back
