import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FloatPanel } from "../components/FloatPanel";
import { KineticLine } from "../components/KineticLine";
import { CheckBadge } from "../../components/Check";
import { av } from "../tokens";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 4 — the client signs; a check materializes; the signed file recedes. */
export const Scene04Forms: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const orientation = useOrientation();
  const rx = interpolate(frame, [0, 44], [7, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ry = interpolate(frame, [0, 44], [6, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const checkP = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const checkIn = interpolate(frame, [112, 128], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // Signed file recedes into the void.
  const file = interpolate(frame, [170, 220], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <FloatPanel
        asset={scene.asset ?? ""}
        label={scene.label ?? "Form"}
        focus={scene.focus}
        rotateX={rx}
        rotateY={ry}
        widthPct={orientation === "vertical" ? 82 : 58}
        heightPct={orientation === "vertical" ? 46 : 60}
      />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ opacity: checkIn * (1 - file), transform: `scale(${0.9 + checkIn * 0.1}) translateY(${file * 120}px)` }}>
          <CheckBadge size={92} progress={checkP} background={av.accent} />
        </div>
      </AbsoluteFill>
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={168} size={orientation === "vertical" ? 68 : 86} y={orientation === "vertical" ? 560 : 360} /> : null}
    </AbsoluteFill>
  );
};
