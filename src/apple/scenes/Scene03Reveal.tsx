import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { APPLE_EASE, av } from "../tokens";
import { FloatPanel } from "../components/FloatPanel";
import { KineticLine } from "../components/KineticLine";
import { Monogram } from "../../components/Wordmark";
import { appleEnter } from "../anim";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 3 — the rectangle blooms into the floating dashboard. Slow dolly-in. */
export const Scene03Reveal: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const orientation = useOrientation();

  const bloom = APPLE_EASE(interpolate(frame, [0, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const dolly = interpolate(frame, [0, durationInFrames], [1, 1.05], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rx = interpolate(frame, [0, 44], [6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ry = interpolate(frame, [0, 44], [-5, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const mark = appleEnter(frame, fps, { delay: 10, distance: 20 });

  return (
    <AbsoluteFill style={{ transform: `scale(${dolly})` }}>
      <AbsoluteFill style={{ opacity: bloom, transform: `scale(${interpolate(bloom, [0, 1], [0.82, 1])})` }}>
        <FloatPanel
          asset={scene.asset ?? ""}
          label={scene.label ?? "Dashboard"}
          rotateX={rx}
          rotateY={ry}
          widthPct={orientation === "vertical" ? 82 : 60}
          heightPct={orientation === "vertical" ? 46 : 60}
        />
      </AbsoluteFill>

      {/* Logo mark above the panel */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: orientation === "vertical" ? 300 : 120 }}>
        <div style={mark}>
          <Monogram size={64} color={av.white} glyphColor={av.void} />
        </div>
      </AbsoluteFill>

      {scene.line ? (
        <KineticLine text={scene.line.text} accent={scene.line.accent} delay={24} size={orientation === "vertical" ? 70 : 84} y={orientation === "vertical" ? 560 : 360} />
      ) : null}
    </AbsoluteFill>
  );
};
