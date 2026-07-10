/**
 * Realm design tokens.
 * Single source of truth for colors, spacing, radii and motion constants
 * so every scene and primitive stays visually consistent.
 */

export const colors = {
  paper: "#f7f6f1", // warm paper background
  ink: "#141814", // primary text on light
  green: "#14523c", // deep brand green
  panel: "#101711", // dark panel background
  gold: "#b98f3e", // gold accent
  muted: "#79837b", // muted gray text
  hairline: "#e6e4dc", // hairline borders / dividers
  white: "#ffffff", // white cards
  black: "#000000",
} as const;

export const radii = {
  sm: 10,
  md: 14,
  lg: 18,
  pill: 999,
} as const;

export const fonts = {
  serif: "'Instrument Serif', serif",
  sans: "'Instrument Sans', sans-serif",
} as const;

/**
 * Shared spring configuration — gentle, no overshoot.
 * damping is high so entrances settle without a bounce.
 */
export const gentleSpring = {
  damping: 200,
  stiffness: 100,
  mass: 1,
} as const;

// Frames between staggered items in a reveal.
export const STAGGER = 4;

// A 1px hairline border in the brand hairline color.
export const hairlineBorder = `1px solid ${colors.hairline}`;
