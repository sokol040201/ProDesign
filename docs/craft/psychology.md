# Perception and behavior

How people actually see and decide. Use these rules when judging hierarchy, grouping, copy, and flows.

## Affordances

An object must show what it can do.

- A button has a shape, a fill or a stable outline, and a pressed state
- A field looks empty and typeable
- A link looks like a link, not like a heading
- An icon is familiar or has a text label
- Interactive and inert things must not share the same color or weight

Feedback closes the loop: visual change, a short message, optional haptics. If the person wonders whether the tap worked, the affordance failed.

Do not hide the only action. Do not make a non-button look more pressable than the real button.

## Gestalt grouping

The mind sees wholes, not parts. Use this on purpose.

| Principle | Rule in UI |
| --- | --- |
| Proximity | Related items sit closer than unrelated ones |
| Similarity | Same function → same color, shape, or type. Link color is only for links |
| Common region | A card, a well, or a faint fill groups a set |
| Closure | People complete a shape; a spinner or a progress arc can be incomplete |
| Continuity | Align on one axis; the eye follows the line |
| Figure / ground | The task sits on a quieter background |
| Prägnanz | Prefer the simplest grouping that still works |
| Fate / motion | Things that move together belong together |

If two buttons sit together, they are one decision. Pull Cancel away from Delete. Do not use the same blue on a heading and a link.

## Recognition over recall

Seeing a cue is easier than inventing an answer.

- Visible labels, not placeholder-only fields
- Menus and chips instead of a blank that wants a remembered keyword
- Keep the search query on the results page
- Show step N of M and breadcrumbs
- Recent items and autocomplete
- Do not make people remember a code from the previous screen

Multiple-choice and pickers beat open memory. Command palettes still show a list to recognize.

## Peak and end

People judge a flow by its strongest moment and its last moment, not by the average.

- Design the success: payment done, project created, file sent
- Soften the worst moment (long form, wait) or follow it with a useful win
- End on a clear next step, not a dead “OK”
- A bad last screen ruins a good session
- A cheap celebration on every toggle is noise. Reserve emphasis for rare, high-value completions

## Attention

Assume little attention and high load.

- Clarity over cleverness
- Speed over ornament
- Familiar over novel
- Plain words over slogans
- One idea per view
- Short paragraphs, a real heading jump, breathing space
- Do not start a session with a carousel of features

## Feature quality (RAAEE)

A control is not “done” because it shipped. Ask:

1. **Reach** — do people see it?
2. **Attractiveness** — do they want to touch it?
3. **Adoption** — is it relevant to this audience?
4. **Effectiveness** — does it help them finish the job?
5. **Engagement** — do they come back to it?

If a feature fails reach, do not add animation. Move it. If it fails effectiveness, do not add a badge. Fix the job.

## Errors vs slips

- **Slip** — the intent was right, the action missed (wrong tap, typo). Make the target bigger, allow undo, confirm only when costly
- **Mistake** — the intent was wrong (misunderstood the field). Rewrite the label, show an example, prevent the illegal value

An error message must: (1) say that something failed, (2) say what, in human language, (3) say how to fix it. Prevent first.

Technical codes belong in a secondary line for support, not as the only text.

## Confirmation (success)

Absence of success feedback makes people assume the worst.

- Instant and unambiguous
- Tone matches stakes: a tiny “Saved” in the header for a field; a full success view after pay / create / finish onboarding
- Same icon family, same success color, same placement every time
- Always offer the next step
- No emoji party, no gradient burst
- Do not block the next action with a five-second animation

## Dark patterns — banned

Do not ship these. They are defects, not growth.

- Fake urgency or fake scarcity
- Hidden costs
- Roach motel: easy in, hard out
- Trick questions, double negatives, “uncheck if you do not want…”
- Pre-checked marketing or tracking
- Confirmshaming (“No, I hate saving money”)
- Disguised ads that look like content
- Forced extra data for a simple task
- Privacy settings buried on purpose

A default may help the person (remember this device). A default that helps only the business is a dark pattern.

## Rewards and loops

Streaks, points, and badges are allowed only when they serve the person’s goal and can be dismissed. Do not punish a missed day with loss-aversion theater. Do not hide the real task behind a dopamine loop.

## Names that must stay distinct

| Word | Means | Not |
| --- | --- | --- |
| Pin | Keep this object in a fixed place | Save, favorite |
| Save | Persist a draft or a file | Pin, bookmark |
| Favorite / like | Personal preference | Pin |
| Bookmark | A way back later | Favorite |
| Star | Only if the product has one star metaphor | All of the above at once |

Different verbs, different icons, different destinations.

## Change blindness

People miss a change that happens without motion, or when two things change at once.

- Change one region at a time
- Animate the thing that changed; do not animate the rest
- Group simultaneous updates in one place
- A new floating control appears next to the current focus, not in a far corner
- Do not hide a control and reveal it elsewhere with no motion

## Adapting to a new UI

A redesign has a tax. People get slower before they get faster.

- Change in slices, not a full costume swap
- Say what changed and why
- Keep a way back or a familiar path for one release
- In-product help at the new control, not a blog post
- Collect friction during the first weeks; do not call silence “success”

## Mental models

People carry a short, incomplete model of how the product works. Match it, then teach the rest.

- Place controls where they already look
- Name objects with their words
- If the work is inherently complex, keep the power and teach it — do not fake simplicity by hiding the only way to finish

## Biases — allowed vs banned

Allowed when honest and for the person:

- A real default that saves work
- A real social count (“12 teammates already use this”)
- A first-create action so the product feels theirs
- An anchor that is a true comparison (was $80, now $60 — and it was $80)

Banned: fake counts, fake scarcity, a fake “was” price, confirmshaming, a default that only helps the business.

## Behavioral patterns

Hover, focus, press, disable, and enter/exit must be one system.

- Hover is never the only cue — touch has none
- Focus is a 3:1 ring, the same family on every control
- Motion 120–200 ms (up to 300 on large panels). Respect reduced motion: cut to a fade or to nothing
- Disabled stays findable; say why nearby
- Document the pattern once; do not invent a new hover per page
