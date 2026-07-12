import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { APPLE_EASE, av } from "../tokens";
import { Fragments } from "../components/Fragments";
import { KineticLine } from "../components/KineticLine";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 2 — the fragments accelerate and snap into one glowing rectangle. */
export const Scene02Snap: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();
  const snap = APPLE_EASE(interpolate(frame, [0, 52], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const bloom = interpolate(frame, [34, 64], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const w = orientation === "vertical" ? 560 : 620;
  const h = orientation === "vertical" ? 360 : 340;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Fragments converge={1} snap={snap} />
      <div
        style={{
          position: "absolute",
          width: w,
          height: h,
          borderRadius: 24,
          border: `1px solid ${av.hair}`,
          background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          boxShadow: `0 0 90px rgba(20,82,60,0.35), 0 60px 140px rgba(0,0,0,0.5)`,
          opacity: bloom,
          transform: `scale(${interpolate(bloom, [0, 1], [0.72, 1])})`,
        }}
      />
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={70} y={orientation === "vertical" ? -420 : -300} /> : null}
    </AbsoluteFill>
  );
};
