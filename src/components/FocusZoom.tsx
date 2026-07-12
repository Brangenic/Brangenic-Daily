import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { FocusRect } from "../timeline";
import { FULL } from "../timeline";

/**
 * Slowly pushes from one framing to another so the shot arrives on the exact
 * UI region the voiceover mentions. Rects are fractions (0..1) of the frame;
 * width drives the zoom factor.
 */
export const FocusZoom: React.FC<
  React.PropsWithChildren<{ from?: FocusRect; to?: FocusRect }>
> = ({ from = FULL, to = FULL, children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(p, [0, 1], [from.x, to.x]);
  const y = interpolate(p, [0, 1], [from.y, to.y]);
  const w = interpolate(p, [0, 1], [from.width, to.width]);
  const scale = 1 / Math.max(0.05, w);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          transformOrigin: "0 0",
          transform: `scale(${scale}) translate(${-x * 100}%, ${-y * 100}%)`,
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
