import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors } from "../theme";

/**
 * A highlight ring that pulses at a click location. Position is a fraction
 * (0..1) of the parent; `at` is the local frame of the click.
 */
export const CursorRing: React.FC<{ at: number; x: number; y: number }> = ({ at, x, y }) => {
  const frame = useCurrentFrame();
  const appear = interpolate(frame, [at - 8, at], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pulse = interpolate(frame, [at, at + 20], [0.4, 1.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pulseOpacity = interpolate(frame, [at, at + 20], [0.55, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", left: `${x * 100}%`, top: `${y * 100}%`, transform: "translate(-50%, -50%)", pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 54,
          height: 54,
          marginLeft: -27,
          marginTop: -27,
          borderRadius: 999,
          border: `3px solid ${colors.green}`,
          transform: `scale(${pulse})`,
          opacity: pulseOpacity,
        }}
      />
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 999,
          background: "rgba(20,82,60,0.28)",
          border: `2px solid ${colors.green}`,
          opacity: appear,
        }}
      />
    </div>
  );
};
