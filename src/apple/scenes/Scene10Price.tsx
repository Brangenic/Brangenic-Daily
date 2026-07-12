import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { av, sans } from "../tokens";
import { countUp } from "../../anim";
import { appleEnter } from "../anim";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 10 — the price. Enormous gold $15, then "Every deal, handled." */
export const Scene10Price: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();

  const n = Math.round(countUp(frame, { to: 15, delay: 8, duration: 12 }));
  const snap = interpolate(frame, [20, 26, 32], [1, 1.06, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const priceIn = interpolate(frame, [6, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const sub = appleEnter(frame, fps, { delay: 34, distance: 22 });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "flex-start", opacity: priceIn, transform: `scale(${snap}) translateY(${orientation === "vertical" ? -80 : -40}px)` }}>
        <span style={{ fontFamily: sans, fontWeight: 700, letterSpacing: "-0.03em", fontSize: orientation === "vertical" ? 220 : 300, color: av.gold, lineHeight: 0.9 }}>${n}</span>
        <span style={{ fontFamily: sans, fontWeight: 600, fontSize: orientation === "vertical" ? 40 : 52, color: av.dim, marginTop: orientation === "vertical" ? 30 : 44 }}>/month</span>
      </div>
      <div style={{ position: "absolute", ...sub, top: "62%", fontFamily: sans, fontWeight: 600, letterSpacing: "-0.02em", fontSize: orientation === "vertical" ? 60 : 76, color: av.white }}>
        Every deal, handled.
      </div>
    </AbsoluteFill>
  );
};
