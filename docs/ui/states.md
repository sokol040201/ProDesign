# States

If a control can be used, every state is designed. A missing state is a defect, not a later polish.

## Control states

| State | When | What people must see |
| --- | --- | --- |
| Rest | Default | It looks like what it is |
| Hover | Pointer over (not the only affordance) | Tone or border. No jump, no glow |
| Focus | Keyboard / programmatic | 2px ring, 3:1. Not hover recycled |
| Pressed / active | Finger or click down | 98% or 1px settle, 80–120 ms |
| Selected / on | This option is current | Weight, fill, or accent **and** a non-color cue |
| Disabled | Last resort | Muted + the reason nearby. No tooltip-only |
| Loading | The action is in flight | Same size, spinner or “Saving…”. Do not collapse |
| Error | The value failed | Text + icon + edge. Not red alone |
| Readonly | Visible, not editable | Looks like content, not a dead field |
| Empty | No value yet | Label still visible. Placeholder is an example |

Hover is optional on touch. Focus is not.

## Container states

Every list, table, inbox, search, chart, folder, feed:

| State | Meaning | Must include |
| --- | --- | --- |
| Loading | First paint or refresh | Skeleton or in-place spinner. Same layout |
| Empty | First use, nothing exists | What this is + why empty + one action |
| Empty-result | Filters / search hid everything | The query stays. Reset / clear |
| Error | Load or action failed | What happened + retry |
| Partial | Some rows failed | The good rows stay. Error on the rest |
| Offline | No network | Banner + what still works |

A blank box is a defect. Empty ≠ empty-result. [empty-states.md](empty-states.md).

## Navigation states

| Item | Rest | Current | Disabled |
| --- | --- | --- | --- |
| Tab bar | Outline icon + label | Filled icon or weight | Do not disable a tab; hide the section |
| Sidebar | Icon + text | Persistent marker + weight | Rare; explain |
| Breadcrumb | Link | Last item, not a link | — |
| Stepper | Number / label | Current named | Future steps visible |

Current place is always visible. Do not rely on color alone.

## Overlay states

- Closed → enter (from the origin) → open → exit (faster)
- Modal open: page scroll locked, focus trapped, Escape / back closes
- Trigger stays pressed / selected while its overlay is open
- After close, focus returns to the trigger

## Feedback

Every action that can fail or take time has a result: the object changes, a toast, an inline error, or a progress state. A dead click is a defect.

Do not: disable the whole form “while we think”, flash the page red, or use a toast as the only record of a field error.

## Dark / reduced

Light and dark use the same roles. Contrast still holds. Reduced motion snaps states without travel.
