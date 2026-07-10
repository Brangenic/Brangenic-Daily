import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../theme";
import { fadeRise } from "../anim";

/** A single problem line that appears, holds, then is struck by a gold line. */
const StrikeLine: React.FC<{
  text: string;
  appear: number;
  strike: number;
}> = ({ text, appear, strike }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = fadeRise(frame, fps, { delay: appear, distance: 18 });

  const strikeW = interpolate(frame, [strike, strike + 14], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Text dims slightly once crossed out.
  const dim = interpolate(frame, [strike + 4, strike + 18], [1, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "relative", display: "inline-block", ...enter }}>
      <span
        style={{
          fontFamily: fonts.serif,
          fontSize: 78,
          lineHeight: 1.18,
          color: colors.white,
          opacity: dim,
        }}
      >
        {text}
      </span>
      <div
        style={{
          position: "absolute",
          left: -6,
          right: -6,
          top: "54%",
          height: 4,
          borderRadius: 4,
          background: colors.gold,
          width: `calc(${strikeW}% + 12px)`,
          maxWidth: "calc(100% + 12px)",
        }}
      />
    </div>
  );
};

/**
 * Scene 2 — The problem.
 * Dark panel; three pain points struck out in gold, then a hopeful turn.
 */
export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const better = fadeRise(frame, fps, { delay: 175, distance: 16 });

  return (
    <AbsoluteFill
      style={{
        background: colors.panel,
        justifyContent: "center",
        paddingLeft: 200,
        paddingRight: 200,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>
        <StrikeLine text="Forms filled by hand." appear={12} strike={44} />
        <StrikeLine text="Follow-ups forgotten." appear={58} strike={90} />
        <StrikeLine text="Reports that never get sent." appear={104} strike={136} />
        <div
          style={{
            marginTop: 24,
            fontFamily: fonts.serif,
            fontStyle: "italic",
            fontSize: 72,
            color: colors.gold,
            ...better,
          }}
        >
          There&rsquo;s a better way.
        </div>
      </div>
    </AbsoluteFill>
  );
};
