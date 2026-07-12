import { interpolate, spring } from "remotion";
import { APPLE_SPRING } from "./tokens";

/** Apple entrance: drift up + fade, firm spring, no bounce. */
export const appleEnter = (
  frame: number,
  fps: number,
  { delay = 0, distance = 30, duration = 22 }: { delay?: number; distance?: number; duration?: number } = {},
) => {
  const p = spring({ frame: frame - delay, fps, config: APPLE_SPRING, durationInFrames: duration });
  const opacity = interpolate(frame - delay, [0, duration * 0.7], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, transform: `translateY(${(1 - p) * distance}px)`, _p: p };
};

/** Apple exit: quicker than the entrance (recede + fade). */
export const appleExit = (
  frame: number,
  at: number,
  { distance = 24, duration = 12 }: { distance?: number; duration?: number } = {},
) => {
  const t = interpolate(frame, [at, at + duration], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return { opacity: 1 - t, transform: `translateY(${-t * distance}px) scale(${1 - t * 0.06})` };
};
