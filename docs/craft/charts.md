# Charts and numbers

A chart answers a question. If it does not, delete it.

## Honesty

- Start bar and area charts at zero unless the job is a tiny delta — then say so in the title
- One series, one color. A rainbow per bar is decoration
- 2D only. Perspective and 3D hide values and invent false hierarchy
- Do not crop the axis to manufacture drama
- Dual axes lie unless both scales are explicit and necessary
- Correlation is not a conclusion. The title is a question or a fact, not a slogan
- Generated charts must be checked against the raw numbers

## Anatomy

1. Title: what this is (“Revenue, last 7 days”)
2. Context: period, unit, comparison (“vs previous 7 days”)
3. The mark (bar, line, point)
4. Axis labels and ticks that can be read
5. Legend only if more than one series; prefer labeling the line directly
6. Empty: “No points in this period” + change the range
7. Loading: skeleton of the same plot, not an empty box

A KPI tile needs a number, a comparison, a period, and optionally an action. A lone “1,204” is not a dashboard.

## Types

| Question | Chart |
| --- | --- |
| How much per category | Bar, start-aligned |
| Change over time | Line, not a stacked area fade |
| Part of a whole, ≤4 parts | Stacked bar or a small table; a donut is last resort |
| Distribution | Histogram |
| Relationship of two values | Scatter |
| Exact values people must use | Table |

Do not put four KPI cards, a line, a donut, and a bar on one screen if none of them answers a question anyone asked.

## Color on charts

- Color-blind safe: not red/green alone; add pattern or shape
- Sequential data: one hue, changing lightness
- Diverging data: two hues around a meaningful midpoint
- Categorical: as few hues as series, none from the banned indigo reflex unless it is the brand
- Map choropleths: a stepped sequential scale, a legend, no rainbow

## Interaction

- Hover / focus shows the exact value
- Click filters or opens the row, not a dead highlight
- Touch targets on points are large enough
- Export and a data table for anything used in a decision

## Copy around numbers

- Tabular lining
- Same precision in a column
- Percentages need the base (“12% of 80 invoices”)
- Do not animate digits for fun
- Do not use a gradient under a line series so one series reads as a total

## What to strip from a plot

3D, hatch, drop shadow, a color fade, zebra stripes, loud gridlines, decorative italic or serif on the numbers. They invent hierarchy the data does not have.

Print or grayscale the chart once. If the series collapse, the color was doing all the work.

## Maps (choropleth)

- Sequential: one hue, changing lightness — amounts
- Diverging: two hues around a real midpoint (zero, average, a target)
- Categorical: ≤3–5 hues people can remember
- 3–7 classes. More classes look precise and lie
- A legend. No rainbow. No red/green alone
