# ProDesign

This repository **is** the skill. Edit `SKILL.md`, `docs/`, `kit/`, and `scripts/`.

Agents in a **product** repo where ProDesign is installed:

1. Read `.cursor/skills/prodesign/SKILL.md` then `docs/apply.md`
2. Scan: `node .cursor/skills/prodesign/scripts/scan.mjs .`
3. If there is no design system: `node .cursor/skills/prodesign/scripts/apply-system.mjs .`
4. Fix Critical findings in the product’s own markup. Do not add a ProDesign component kit
5. Fill `SYSTEM.md`
6. Rescan until Critical is 0

Guides live in `docs/`. Installable files live in `kit/`.
