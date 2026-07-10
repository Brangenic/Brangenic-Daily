import React from "react";
import { AbsoluteFill } from "remotion";
import { av } from "../tokens";

/**
 * The single seamless environment for the whole film: near-black with a subtle
 * radial vignette and a faint green ambient glow behind the hero area. Static —
 * the "camera" moves via the scenes, the world stays put.
 */
export const Void: React.FC<{ glow?: number }> = ({ glow = 1 }) => {
  return (
    <AbsoluteFill style={{ background: av.void }}>
      {/* green ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(58% 46% at 50% 44%, rgba(20,82,60,${0.12 * glow}) 0%, rgba(20,82,60,0) 62%)`,
        }}
      />
      {/* vignette */}
      <AbsoluteFill
        style={{
          background: "radial-gradient(120% 120% at 50% 46%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
