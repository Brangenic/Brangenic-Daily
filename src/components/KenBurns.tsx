import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Subtle Ken Burns move: slow scale (and optional drift) across the shot,
 * driven by the local sequence frame. Clips to the frame.
 */
export const KenBurns: React.FC<
  React.PropsWithChildren<{ from?: number; to?: number; drift?: [number, number] }>
> = ({ from = 1.0, to = 1.06, drift = [0, 0], children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dx = interpolate(frame, [0, durationInFrames], [0, drift[0]], { extrapolateRight: "clamp" });
  const dy = interpolate(frame, [0, durationInFrames], [0, drift[1]], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${scale}) translate(${dx}%, ${dy}%)` }}>
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
