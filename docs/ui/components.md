# Components

Catalog of **patterns**. For a one-line pick, use [apply.md](../apply.md) or the 49-name list in [elements.md](elements.md). Then open the group file. Draw it with the product’s system — do not install a ProDesign widget.

| Group | File | Contains |
| --- | --- | --- |
| Elements | [elements.md](elements.md) | Control / View / Overlay / Imagery lookup |
| Apply | [apply.md](../apply.md) | A–Z, filters, phone vs desktop |
| Navigation | [navigation.md](navigation.md) | Tab bar, sidebar, top bar, search, breadcrumbs, back |
| States | [states.md](states.md) | Control, container, nav, overlay |
| Behavior | [behavior.md](behavior.md) | Feedback, undo, selection, filters, errors |
| Controls | [controls.md](controls.md) | Accordion, Button, Checkbox, Color / Date / Time Picker, FAB, Radio, Rating, Search, Select, Segmented, Slider, Stepper, Switch, Tab, Text Field |
| Forms | [forms.md](forms.md) | Text field, textarea, select, labels, validation, file upload |
| Views | [views.md](views.md) | Badge, Banner, Card, Carousel, Chip, Divider, Gallery, Loading, Map Pin, Progress, Side / Top Nav, Skeleton, Stacked List, Status Dot, Tab Bar, Table, Toolbar |
| Overlays | [overlays.md](overlays.md) | Action Sheet, Bottom Sheet, Coach Marks, Dialog, Drawer, Dropdown, Full-Screen, Popover, Toast, Tooltip |
| Imagery | [imagery.md](imagery.md) | Avatar, Icon, Illustration, Logo, Photo |

## How to choose

1. **What is the person doing?** Changing data → control or form. Reading structure → view. Need focus or interruption → overlay. Need a picture → imagery.
2. **One object or many?** One choice → radio / segmented. Many → checkbox / chip. A range → slider / stepper. A date → date picker, not a mask-only field.
3. **Is the background still useful?** Yes and the task is short → dialog / sheet. No, or the task is long → a page.
4. **Navigation or action?** Navigation → link / menu item. An action on data → button. Cancel = go back = a link.
5. **How many items?** Working memory holds a handful. Tab bar ≤ 5. Do not turn tabs into a carousel of hidden tabs.

## Rules that apply to every element

- It looks like what it is. Button ≠ link ≠ chip
- One primary per region
- States: rest, hover, focus, pressed, disabled / error, selected
- Feedback on every action
- State is not color-only
- Target ≥ 44 / 48, with a gap between neighbors
- Specific copy, not “OK” / “Yes”
- Disabled is a last resort. Prefer an active control plus an error
- Familiar icons in chrome
- Motion explains: trigger → rule → feedback → loop

## Per-element audit

```
- [ ] Right type for the job
- [ ] Label / name exists
- [ ] States are complete
- [ ] Contrast and target
- [ ] Not slop (gradient, emoji, icon tile)
- [ ] Empty / error if it is a container
```
