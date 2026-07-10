import React from "react";
import { AbsoluteFill, interpolate } from "remotion";
import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import { colors } from "../theme";

type GreenWipeProps = { color: string };

/**
 * A full-bleed colored wipe: the panel sweeps in from the left to cover the
 * outgoing scene, then sweeps off to the right to reveal the incoming scene.
 * Driven entirely by presentationProgress so it renders deterministically.
 */
const GreenWipePresentation: React.FC<
  TransitionPresentationComponentProps<GreenWipeProps>
> = ({ children, presentationProgress, presentationDirection, passedProps }) => {
  // The outgoing scene renders untouched; the entering layer owns the panel.
  if (presentationDirection === "exiting") {
    return <AbsoluteFill>{children}</AbsoluteFill>;
  }

  const p = presentationProgress;
  // First half: panel covers (-100% -> 0). Second half: uncovers (0 -> 100%).
  const panelX =
    p < 0.5
      ? interpolate(p, [0, 0.5], [-100, 0])
      : interpolate(p, [0.5, 1], [0, 100]);
  // Reveal the new scene only once the panel has fully covered.
  const contentOpacity = p < 0.5 ? 0 : 1;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: contentOpacity }}>{children}</AbsoluteFill>
      <AbsoluteFill
        style={{ background: passedProps.color, transform: `translateX(${panelX}%)` }}
      />
    </AbsoluteFill>
  );
};

export const greenWipe = (
  color: string = colors.green,
): TransitionPresentation<GreenWipeProps> => {
  return { component: GreenWipePresentation, props: { color } };
};
