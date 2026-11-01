# Apple platforms

Apply to iOS, iPadOS, macOS, watchOS, tvOS, visionOS. Do not copy Liquid Glass onto the web for style.

## Hierarchy and layout

- Content by importance: top and the leading edge (LTR)
- Alignment creates groups; indent means subordination
- Groups: negative space, a container, **or** a separator — one device, not all three
- Progressive disclosure: do not dump every action on the first screen
- Controls sit on a distinct layer from content. On platforms with Liquid Glass, controls are glass; content is underneath. Do not paint a solid slab under chrome
- Content may extend under sidebar / toolbar / tab bar
- Do not change functionality by size class. You may change how much is visible (tab bar → sidebar)

## Adaptivity

Decide by **size class**, not by “this is an iPhone”.

- Compact / Regular × horizontal / vertical
- Dynamic Type: side-by-side views may stack; rows grow; text is not clipped
- Safe area is mandatory
- Even a landscape-only game must resize across devices

## Margins and grid

| Context | Value |
| --- | --- |
| Compact width margins | **16 pt** |
| Regular width margins | **20 pt** |
| Base step | 8 pt |
| Related items | 8 |
| Groups | 16 |
| Sections | 24+ |
| Touch target | 44×44 pt |
| visionOS control centers | ≥60 pt |
| tvOS inset | 60 vertical, 80 horizontal |
| tvOS grid gutter | 40 horizontal, ≥100 vertical |

Do not put critical controls at the bottom of a Mac window — people drag that edge off-screen.

## Type

System face: San Francisco. SF Symbols match weight and optical size.

Do not use Ultralight / Thin / Light in UI. Prefer Regular, Medium, Semibold, Bold.

Key moments (alerts, onboarding): heavier, start-aligned.

Maximize text-to-background contrast. Custom colors must be tested.

See [typography.md](../foundations/typography.md) for the Dynamic Type table.

## Color

- Do not hard-code system colors — they shift by release and by Increased Contrast
- Roles: `label`, `secondaryLabel`, `tertiaryLabel`, `quaternaryLabel`, `placeholderText`, `separator`, `link`
- Backgrounds: system or grouped, each with primary / secondary / tertiary
- One color, one meaning. A button accent is not the color of inert text
- Do not communicate by color alone
- A custom color needs light, dark, and increased-contrast pairs
- Liquid Glass has almost no color. Tint only the primary action. Do not tint every control
- On a busy background, keep toolbar / tab bar monochrome

## Icons

- SF Symbols: thousands of glyphs, 9 weights, 3 scales, RTL and localization
- One concept, simplified form
- One weight, one detail level, one perspective across the app
- Icon weight = neighboring text weight
- Optical center, not geometric: asymmetric icons need padding in the asset
- Vector (PDF / SVG) for interface icons
- VoiceOver label on custom icons
- Do not draw Apple hardware by hand
- Letters inside an icon only when unavoidable, and they must localize

## Materials

- Glass is the layer for controls and navigation, not card decoration
- Do not stack glass on glass
- Do not crowd glass controls; use standard spacing
- Buttons: system `glass` / `glassProminent`, not a homemade blur
- App icons: layers; light / dark / clear / tinted
- Do not port Liquid Glass onto web cards and dashboards

## Density and controls

- watchOS: no more than two or three controls in a row; text buttons prefer full width
- iPad: use sidebar and split; do not inflate an iPhone layout
- Buttons: a clear verb, enough size, not a rainbow of styles on one screen

## Writing

- Plain language in system dialogs
- Alert: title = problem, buttons = actions, destructive is separate
