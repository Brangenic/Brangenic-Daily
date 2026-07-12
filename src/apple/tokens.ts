import { Easing } from "remotion";
import { fonts } from "../theme";

/**
 * Apple-film design tokens. One environment, white sans type, a single accent
 * word per line, gold reserved for the price and the final logo.
 */
export const av = {
  void: "#0b0f0c", // near-black environment
  glow: "#14523c", // faint green ambient behind hero objects
  white: "#ffffff",
  accent: "#2c9a76", // green accent — one word per line max
  gold: "#b98f3e", // price + final logo only
  hair: "rgba(255,255,255,0.10)", // 1px panel border
  dim: "rgba(255,255,255,0.55)",
} as const;

export const sans = fonts.sans;
export const serif = fonts.serif;

/** Apple's signature ease — decisive out, gentle settle. Never linear. */
export const APPLE_EASE = Easing.bezier(0.22, 1, 0.36, 1);

/** Shared spring: firm, no bounce (damping high, mass 1). */
export const APPLE_SPRING = { damping: 36, mass: 1, stiffness: 120 } as const;
