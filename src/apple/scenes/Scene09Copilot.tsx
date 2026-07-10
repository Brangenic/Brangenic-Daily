import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KineticLine } from "../components/KineticLine";
import { av, serif } from "../tokens";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

const FULL = "Tucked behind mature mango trees, a home that feels like a held breath.";

/** Scene 9 — the copilot writes in your voice; italic serif types itself. */
export const Scene09Copilot: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const orientation = useOrientation();
  const chars = Math.floor(interpolate(frame, [16, 16 + FULL.length * 1.4], [0, FULL.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const typing = chars > 0 && chars < FULL.length;
  const caret = typing && Math.floor(frame / 8) % 2 === 0;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", padding: orientation === "vertical" ? "0 90px" : "0 240px" }}>
      <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: orientation === "vertical" ? 52 : 62, lineHeight: 1.3, color: av.white, textAlign: "center", transform: `translateY(${orientation === "vertical" ? -120 : -60}px)` }}>
        {FULL.slice(0, chars)}
        {caret ? <span style={{ color: av.accent }}>|</span> : null}
      </div>
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={16 + Math.round(FULL.length * 1.4) + 10} size={orientation === "vertical" ? 68 : 86} y={orientation === "vertical" ? 520 : 340} /> : null}
    </AbsoluteFill>
  );
};
