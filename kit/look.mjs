import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LOOK = JSON.parse(
  fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "look.json"), "utf8"),
);

export const LOOK_KEYS = {
  surface: ["web", "ios", "android"],
  density: ["dense", "mixed", "airy"],
  radius: ["none", "sharp", "standard", "soft", "round"],
  chrome: ["outline", "fill", "mixed"],
  controls: ["rect", "pill"],
  icons: ["line", "solid"],
  viewport: ["phone", "tablet", "desktop"],
  motion: ["none", "subtle", "standard"],
};

const BANNED_PACKS = new Set(["lucide", "lucide-react", "lucide-vue", "lucide-svelte"]);
const KNOWN_PACKS = [
  "phosphor",
  "heroicons",
  "tabler",
  "iconoir",
  "sf-symbols",
  "material-symbols",
  "fluent",
  "carbon",
  "remix",
  "hugeicons",
];

function defaultPack(surface) {
  if (surface === "ios") return "sf-symbols";
  if (surface === "android") return "material-symbols";
  return "phosphor";
}

export function lookCatalog() {
  return LOOK;
}

export function presetIds() {
  return Object.keys(LOOK.presets);
}

export function resolveLook(flags = {}) {
  if (flags.profile && !LOOK.presets[flags.profile]) {
    return {
      error: `Unknown profile: ${flags.profile} (${presetIds().join(" | ")})`,
    };
  }

  const preset = LOOK.presets[flags.profile || "product"];
  const state = {
    surface: flags.surface || preset.surface || "web",
    density: flags.density || preset.density,
    radius: flags.radius || preset.radius,
    chrome: flags.chrome || preset.chrome || "outline",
    controls: flags.controls || preset.controls || "rect",
    icons: flags.icons || preset.icons || "line",
    iconPack: flags.iconPack || preset.iconPack || defaultPack(flags.surface || preset.surface || "web"),
    viewport: flags.viewport || preset.viewport || (preset.surface === "web" ? "desktop" : "phone"),
    motion: flags.motion || preset.motion || "standard",
    profile: flags.profile || null,
    label: preset.label,
  };

  if (BANNED_PACKS.has(String(state.iconPack).toLowerCase())) {
    return { error: `Lucide is banned. Use a complete pack (${KNOWN_PACKS.join(" | ")})` };
  }

  for (const [key, allowed] of Object.entries(LOOK_KEYS)) {
    if (!allowed.includes(state[key])) {
      return { error: `Unknown ${key}: ${state[key]} (${allowed.join(" | ")})` };
    }
  }

  const tokens = {
    ...LOOK.density[state.density],
    ...LOOK.radius[state.radius],
    ...LOOK.chrome[state.chrome],
    ...(LOOK.viewport[state.viewport] || LOOK.viewport.desktop),
    ...(LOOK.motion[state.motion] || LOOK.motion.standard),
    "--pd-control-radius": state.controls === "pill" ? "999px" : "var(--pd-radius-md)",
  };

  return { state, tokens, preset };
}
