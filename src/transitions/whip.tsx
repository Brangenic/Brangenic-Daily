import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";

type WhipProps = Record<string, unknown>;

/**
 * Fast whip-pan between worlds with a motion-blur streak: the outgoing scene
 * slides left and the incoming scene slides in from the right, both blurred at
 * peak speed. Meant to run over a very short window (~4 frames).
 */
const WhipPresentation: React.FC<TransitionPresentationComponentProps<WhipProps>> = ({
  children,
  presentationProgress,
  presentationDirection,
}) => {
  const p = presentationProgress;
  const blur = interpolate(p, [0, 0.5, 1], [0, 26, 0]);
  const translate =
    presentationDirection === "exiting"
      ? interpolate(p, [0, 1], [0, -100])
      : interpolate(p, [0, 1], [100, 0]);
  return (
    <AbsoluteFill style={{ transform: `translateX(${translate}%)`, filter: `blur(${blur}px)` }}>
      {children}
    </AbsoluteFill>
  );
};

export const whip = (): TransitionPresentation<WhipProps> => ({
  component: WhipPresentation,
  props: {},
});
