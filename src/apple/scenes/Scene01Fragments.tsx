import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { APPLE_EASE } from "../tokens";
import { Fragments } from "../components/Fragments";
import { KineticLine } from "../components/KineticLine";
import type { AppleScene } from "../timeline";

/** Scene 1 — a hundred moving pieces drift in the void and begin to converge. */
export const Scene01Fragments: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const converge = APPLE_EASE(
    interpolate(frame, [0, durationInFrames * 0.72], [0, 0.62], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  );
  return (
    <AbsoluteFill>
      <Fragments converge={converge} />
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={46} /> : null}
    </AbsoluteFill>
  );
};
