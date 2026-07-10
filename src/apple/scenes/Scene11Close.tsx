import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { av, sans, serif } from "../tokens";
import { appleEnter } from "../anim";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

/** Scene 11 — recede to a point of green light, then "Realm." Fade. */
export const Scene11Close: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const orientation = useOrientation();

  const glow = interpolate(frame, [0, 44], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const word = appleEnter(frame, fps, { delay: 30, distance: 24, duration: 26 });
  const sub = appleEnter(frame, fps, { delay: 62, distance: 16 });
  const black = interpolate(frame, [durationInFrames - 34, durationInFrames - 2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {/* point of green light */}
      <AbsoluteFill style={{ background: `radial-gradient(${20 + glow * 40}% ${18 + glow * 34}% at 50% 50%, rgba(44,154,118,${0.22 * glow}) 0%, rgba(20,82,60,0) 60%)` }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: serif, fontSize: orientation === "vertical" ? 150 : 190, color: av.white, ...word }}>Realm.</div>
        <div style={{ fontFamily: sans, fontWeight: 500, fontSize: orientation === "vertical" ? 28 : 30, color: av.gold, letterSpacing: "0.02em", marginTop: 8, ...sub }}>
          realm.app &middot; Start free
        </div>
      </div>
      <AbsoluteFill style={{ background: "#000", opacity: black, pointerEvents: "none" }} />
    </AbsoluteFill>
  );
};
