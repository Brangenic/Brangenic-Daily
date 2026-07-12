/**
 * Frame-driven animation helpers.
 * Everything is derived from the current frame so renders are deterministic.
 */
import { interpolate, spring, Easing } from "remotion";
import { gentleSpring } from "./theme";

type FadeRiseOpts = {
  delay?: number;
  distance?: number;
  duration?: number;
};

/**
 * Fade + rise entrance: opacity 0->1 and translateY(distance->0).
 * The rise uses a gentle spring (no overshoot); opacity is linear.
 */
export const fadeRise = (
  frame: number,
  fps: number,
  { delay = 0, distance = 20, duration = 20 }: FadeRiseOpts = {},
) => {
  const local = frame - delay;
  const rise = spring({
    frame: local,
    fps,
    config: gentleSpring,
    durationInFrames: duration,
  });
  const opacity = interpolate(local, [0, duration * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return {
    opacity,
    transform: `translateY(${(1 - rise) * distance}px)`,
  };
};

/**
 * Slow, subtle scale for held shots (e.g. 1.0 -> 1.03 across the scene).
 */
export const slowScale = (
  frame: number,
  totalFrames: number,
  from = 1,
  to = 1.03,
) =>
  interpolate(frame, [0, totalFrames], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

/**
 * A count-up value with ease-out, clamped at both ends.
 */
export const countUp = (
  frame: number,
  {
    from = 0,
    to,
    delay = 0,
    duration = 30,
  }: { from?: number; to: number; delay?: number; duration?: number },
) =>
  interpolate(frame - delay, [0, duration], [from, to], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

/**
 * Left/right slide-in with fade, spring-driven.
 */
export const slideIn = (
  frame: number,
  fps: number,
  { delay = 0, distance = 40, from = "left" }: { delay?: number; distance?: number; from?: "left" | "right" | "bottom" } = {},
) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: gentleSpring,
    durationInFrames: 22,
  });
  const offset = (1 - progress) * distance;
  const axis = from === "bottom" ? "Y" : "X";
  const sign = from === "right" ? 1 : from === "left" ? -1 : 1;
  return {
    opacity: interpolate(frame - delay, [0, 12], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `translate${axis}(${sign * offset}px)`,
  };
};
