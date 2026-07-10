import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FloatPanel } from "../components/FloatPanel";
import { KineticLine } from "../components/KineticLine";
import { av, sans } from "../tokens";
import { appleEnter } from "../anim";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 5 — the nudge card lifts out of the screen and floats forward. */
export const Scene05Nudge: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();

  const panelDim = interpolate(frame, [80, 120], [1, 0.32], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lift = appleEnter(frame, fps, { delay: 88, distance: 40, duration: 24 });
  const liftScale = interpolate(frame, [88, 130], [0.82, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: panelDim }}>
        <FloatPanel
          asset={scene.asset ?? ""}
          label={scene.label ?? "Nudge"}
          focus={scene.focus}
          widthPct={orientation === "vertical" ? 82 : 58}
          heightPct={orientation === "vertical" ? 46 : 60}
        />
      </AbsoluteFill>

      {/* Recreated nudge card floating forward as a real object */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: orientation === "vertical" ? 620 : 660,
            background: "rgba(20,26,21,0.92)",
            border: `1px solid ${av.hair}`,
            borderRadius: 22,
            padding: 30,
            boxShadow: "0 60px 140px rgba(0,0,0,0.6)",
            fontFamily: sans,
            opacity: lift.opacity,
            transform: `${lift.transform} scale(${liftScale})`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 999, background: av.accent, color: av.void, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20 }}>MC</div>
            <div style={{ color: av.white, fontSize: 24, fontWeight: 500 }}>Marsha hasn&rsquo;t replied in 4 days.</div>
          </div>
          <div style={{ marginTop: 18, color: av.dim, fontSize: 19, fontStyle: "italic" }}>
            &ldquo;Hi Marsha — just checking in on 12 Barbican Road…&rdquo;
          </div>
        </div>
      </AbsoluteFill>

      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={122} size={orientation === "vertical" ? 70 : 88} y={orientation === "vertical" ? 580 : 380} /> : null}
    </AbsoluteFill>
  );
};
