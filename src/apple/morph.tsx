import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import { APPLE_EASE } from "./tokens";

type MorphProps = Record<string, unknown>;

/**
 * A morph rather than a cut: the outgoing layer recedes and fades quickly while
 * the incoming layer rises past it. The persistent Void behind both keeps the
 * environment seamless, so this reads as one continuous move.
 */
const MorphPresentation: React.FC<TransitionPresentationComponentProps<MorphProps>> = ({
  children,
  presentationProgress,
  presentationDirection,
}) => {
  const p = presentationProgress;
  if (presentationDirection === "exiting") {
    const e = APPLE_EASE(interpolate(p, [0, 0.6], [0, 1], { extrapolateRight: "clamp" }));
    return (
      <AbsoluteFill style={{ opacity: 1 - e, transform: `scale(${1 - e * 0.08}) translateY(${-e * 26}px)` }}>
        {children}
      </AbsoluteFill>
    );
  }
  const e = APPLE_EASE(interpolate(p, [0.25, 1], [0, 1], { extrapolateLeft: "clamp" }));
  return (
    <AbsoluteFill style={{ opacity: e, transform: `scale(${0.96 + e * 0.04}) translateY(${(1 - e) * 34}px)` }}>
      {children}
    </AbsoluteFill>
  );
};

export const morph = (): TransitionPresentation<MorphProps> => ({
  component: MorphPresentation,
  props: {},
});
