import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FloatPanel } from "../components/FloatPanel";
import { av, sans } from "../tokens";
import { countUp } from "../../anim";
import { jmd } from "../../format";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 7 — the commission counts up, then shrinks into the money screen. */
export const Scene07Money: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const orientation = useOrientation();
  const value = jmd(countUp(frame, { to: 1_734_000, delay: 12, duration: 46 }));

  const shrink = interpolate(frame, [96, 132], [1, 0.42], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const numY = interpolate(frame, [96, 132], [0, orientation === "vertical" ? -360 : -300], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const numOpacity = interpolate(frame, [8, 20, 150, 168], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const panelIn = interpolate(frame, [110, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: panelIn }}>
        <FloatPanel
          asset={scene.asset ?? ""}
          label={scene.label ?? "Money"}
          focus={scene.focus}
          widthPct={orientation === "vertical" ? 82 : 58}
          heightPct={orientation === "vertical" ? 44 : 58}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: sans, fontWeight: 600, letterSpacing: "-0.02em", fontSize: orientation === "vertical" ? 96 : 150, color: av.white, opacity: numOpacity, transform: `translateY(${numY}px) scale(${shrink})` }}>
          {value}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
