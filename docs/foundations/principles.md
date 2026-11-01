# Principles

What separates a product from a mock.

## 1. Hierarchy matches the job

The most important thing is the most visible. Size, containment, color, and type must agree with the task. Generated UI often enlarges a secondary ring or KPI and buries the real action.

One primary action per screen. Everything else is quieter.

## 2. A system, not a set of screens

The same things look and behave the same. Space, radius, type, icon, and button tone come from tokens. See [design-systems.md](design-systems.md).

## 3. Affordance without costume

A button looks pressable without a gradient or a shadow “to bring it to life”. A field looks like a field. A link looks like a link. Do not encode interactivity with color alone.

## 4. System status is visible

Loading, empty, error, offline, unsaved, permission — always. People must never wonder whether the system is working. See [empty-states.md](../ui/empty-states.md).

## 5. Proximity is meaning

Related things sit closer than unrelated ones. A heading sticks to its block. A label sticks to its field. A destructive action sits apart from safe ones.

## 6. Progressive disclosure

Too many choices slow people down. Frequent actions stay visible. Rare actions go in a menu. Hard work comes after an easy first success.

## 7. Platform manners

On iOS, behave like iOS. On Android, behave like Android. On the web, behave like the web — do not fake iOS glass. A native control beats a custom one unless the custom control carries brand meaning.

## 8. Density follows context

Tools are dense. Stories are airy. Never the reverse. See [density.md](density.md).

## 9. Writing is interface

Buttons are verbs. Titles are the point, not a slogan. Errors say what happened and what to do. No “Your journey starts here”. No “Unlock the power”.

## 10. Accessibility is structure

Contrast, targets, focus, icon names, not-color-only, zoom / Dynamic Type, RTL. If “beautiful” fails AA, it is not beautiful.

## 11. Motion is service

120–200 ms, a predictable curve. Motion shows where a panel came from. No greeting animation on every visit. No bounce on working controls. See [motion.md](motion.md).

## 12. Honest material

Flat color, a real edge, a real icon. Do not pretend a card is glass when nothing lives under it. Do not pretend there is data when there is not.

## 13. Simplicity

If an element does not help the task, it is in the way. People come for an outcome, not a tour of the site.

## 14. Large, close targets

Time to a target depends on size and distance. Important actions are large and near where the eye already is. Corners and edges are easy to hit — put durable controls there, not accidental ones.

## 15. Few raw choices

Working memory holds a handful of chunks. Group long lists. The more raw options, the slower the decision. Filters, defaults, and popular choices cut the set.

## 16. Short paths

Every extra screen is a chance to leave. Inline preview beats a trip to a detail page when the job is comparison. Three to four steps to the goal is a useful ceiling, not a superstition.

## 17. Predictability

The same action yields the same result on every screen. If Buy is a filled button on the right on the home page, it is not a blue text link on the left on the product page.

Do not hide favorites inside a cart. Do not label a control Copy when it is unclear what gets copied — use Share when the result is a link.

## 18. Familiar patterns

People spend most of their time in other products. A cart is a cart. Search is a magnifier. Menu is leading or top. Invent after the familiar path is solid.

## 19. Confirm the irreversible

Delete account, pay, send to a hundred people — ask. One-click purchase that fires without a total is a defect.

## 20. Full control states

Rest, hover, focus, pressed, disabled, selected, error. Keyboard users must see focus. If a control does nothing, say why.

## 21. Recognition over recall

Do not make people remember an earlier screen. Keep the query on the results page. Show step N of M. Offer autocomplete and visible labels.

## 22. Shortcuts for experts, clarity for newcomers

The default path stays obvious. Accelerators (keys, double-click, toolbar) are extra and labeled. Never the only way.

## Typical screens

| Screen | Job | Common failure |
| --- | --- | --- |
| List | scan, select, create | no empty, rows too tall |
| Detail | understand the object, next action | everything the same weight |
| Form | finish without errors | placeholder-as-label, no grouping |
| Settings | find and change | marketing cards, emoji sections |
| Dashboard | answer a question | KPIs with no comparison |
| Search | narrow | empty result drawn as first-use empty |
| Onboarding | first success | feature carousel instead of an action |

## 23. Affordances and grouping

If it can be pressed, it looks pressable. If things belong together, they sit together or share a trait. See [psychology.md](../craft/psychology.md).

## 24. Peak and end

The strongest moment and the last moment write the memory. Design the success screen. Soften the worst wait. Do not end on a dead dialog.

## 25. No dark patterns

Growth that tricks is a defect. See the banned list in [psychology.md](../craft/psychology.md).

## 26. Do not chase a year

A 2026 trend list is not a brief. Inclusive defaults, honest contrast, and fewer objects survive. Decorative 3D, “light effects”, and font-of-the-year do not.

A trend is allowed only when it solves the job: personalization that is useful (not surveillance theater), dark mode that follows the system, checkout that is short, 3D only when depth encodes meaning.

## 27. Most advanced, yet acceptable

New is allowed one step past familiar. If people must relearn the product to use a novelty, the novelty failed. Borrow from other products they already know.

## 28. Complexity matches the job

Some tools are hard because the work is hard. Do not strip a console into a landing page. Do not dump a console onto a first-run consumer screen.

- Match density to the person’s mental model
- Teach the rest: a path of familiarity, not a 12-slide carousel
- Inevitable leftover complexity is paid by the system (defaults, autofill, progressive disclosure), not by the person

## 29. Diagnose the layer

A “UI bug” is often the wrong layer. Fix in this order:

1. Strategy — who it is for, what success is
2. Scope — which jobs exist
3. Structure — information architecture
4. Skeleton — layout and flow
5. Surface — type, color, control

Do not restyle a surface when the structure is wrong.

## 30. UX debt is real debt

A shortcut that ships (placeholder-as-label, a one-off pattern, a skipped empty state) compounds. Name it, list it, repay it in small slices. Unconscious debt (inventing a new control, ignoring the system) is worse than a dated, documented shortcut.

## Heuristic pass

Use this as a second pass after the visual audit:

1. Status is visible
2. Language matches the person, not the org chart
3. A way out and undo
4. Same things look and behave the same
5. Prevent errors before you message them
6. Recognition, not recall
7. Shortcuts for experts, clarity for newcomers
8. Only what the task needs
9. Recover with a human message
10. Help in context, not a PDF

## Scan paths

Long text pages follow an F: put the useful words on the first line and the leading edge. Marketing and sparse screens follow a Z: brand → offer → action. Do not center a wall of copy and hope.

## Ignore these slogans

“Make it pop.” “Add delight.” “More whitespace.” “Make it premium.”

Ask instead: what is the job, what is the accent, which token, which state.
