# Empty and neighboring states

An empty container with no status is a defect. People cannot tell loading from error from no-permission from no-data from a bad filter.

Use the product’s own empty / loading / error views.

## Four required states

For every list, table, board, search, inbox, chart, folder, workspace:

| State | When | On screen |
| --- | --- | --- |
| Loading | the request is in flight | skeleton or spinner + what is loading. Never “no records” |
| Empty first-use | nothing has been created yet | why this area exists, how it fills, a primary action |
| Empty result | a filter / search returned nothing | what was asked, how to reset, what to change |
| Error | failure, 403, network | what happened, what can be done, retry |

Success / partial: a toast or inline, not an empty screen. Match the stakes: a quiet “Saved” for a field, a dedicated success view after pay / create, always with a next step. See [psychology.md](../craft/psychology.md).

Never show empty while loading is unfinished. A false “No records” for two seconds destroys trust.

## Anatomy of first-use empty

1. **Icon** from the same family, 32–48, mono or lightly tinted. Not emoji, not a gradient blob, not a giant illustration
2. **Title** — what will live here, not “Oops” or “Nothing here”
3. **Copy** — one or two sentences: why this exists and how content appears
4. **Primary action** — a button, not only “go to settings”
5. **Second path** optional: demo data, import, docs

```
[icon: inbox]
No orders yet
New orders appear here after the first payment.
[Create invoice]   How this works
```

Bad: an empty table. “No data”. An astronaut. “Start your journey”.

First-run and create land on a real object when they can. See [flows.md](flows.md).

## Empty result

Title: “Nothing for “invoice 2024””.  
Action: reset filters, change the query.  
Do not offer “Create invoice” if the person was looking for an existing one — that is a different job.

## Error

- An honest status, no “Oopsie”
- What happened in the person’s language
- Retry when it can help
- Error code / request id is secondary, for support
- 403: “no access”, who can grant it; do not pretend the list is empty

## Loading

- A skeleton that repeats the coming layout, not a rainbow pulse
- For >300 ms. For <150 ms, nothing is fine
- Do not block the whole app for one panel
- A progress bar when time is known or long (logs, import)

## Where holes hide

- First visit of every section
- Favorites, recents, notifications, cart, inbox
- Search and filters
- A dashboard with no account data
- Role permissions, empty tenant, empty organization
- A zero chart: axes + “no points in this period”, not an empty box

## Visual

- An airy block in the **working area**, not centered in the window including the sidebar
- Not a carousel of “three reasons to love us”
- Not a modal on top of emptiness
- One primary button
- In a dense table, empty can be a compact full-width row + a CTA on the trailing side

## In code

Hunt a `map` with no empty branch, and requests with no loading / error. Four named states beat one component with ten ifs: loading, first-use empty, empty-result, error.
