export const space = {
  0: 0,
  25: 2,
  50: 4,
  100: 8,
  150: 12,
  200: 16,
  300: 24,
  400: 32,
  500: 40,
  600: 48,
  800: 64,
} as const;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  pill: 999,
} as const;

export const color = {
  canvas: "var(--pd-color-canvas)",
  surface: "var(--pd-color-surface)",
  text: "var(--pd-color-text)",
  muted: "var(--pd-color-text-muted)",
  border: "var(--pd-color-border)",
  accent: "var(--pd-color-accent)",
  accentOn: "var(--pd-color-accent-on)",
  danger: "var(--pd-color-danger)",
  warning: "var(--pd-color-warning)",
  success: "var(--pd-color-success)",
} as const;

export const gutter = {
  phone: 16,
  tablet: 24,
  desktop: 32,
} as const;

export const motion = {
  none: 0,
  subtle: 120,
  standard: 180,
  cap: 200,
} as const;

export const z = {
  base: 0,
  raised: 10,
  overlay: 40,
} as const;
