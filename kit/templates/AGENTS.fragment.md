## ProDesign

This repo is under ProDesign. Agents apply shared UI patterns to this product’s own controls. They do not paste a foreign kit.

- Skill: `.cursor/skills/prodesign/SKILL.md` (or `~/.cursor/skills/prodesign/SKILL.md`)
- Patterns: `docs/apply.md` in that skill
- Scan: `node .cursor/skills/prodesign/scripts/scan.mjs .`
- Install / refresh tokens: `node .cursor/skills/prodesign/scripts/apply-system.mjs .`
- Product decisions: look for `design-system/SYSTEM.md` (or `src/design-system/SYSTEM.md`)

Do not ship gradients, emoji-as-icons, or empty lists without a state.
