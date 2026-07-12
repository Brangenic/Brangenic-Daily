import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fonts } from "../theme";
import { fadeRise } from "../anim";
import { Monogram } from "../components/Wordmark";
import { useOrientation } from "../orientation";

/**
 * Bespoke finale: monogram settles in, "Every deal, handled.", a silence beat,
 * then the URL, then a fade to black. Uses the sequence duration so any
 * VO-driven extra tail simply lengthens the hold.
 */
export const Finale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const orientation = useOrientation();

  const markProgress = spring({ frame: frame - 6, fps, config: { damping: 200, stiffness: 90, mass: 1 } });
  const markScale = interpolate(markProgress, [0, 1], [0.82, 1]);
  const markOpacity = interpolate(frame, [6, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const head = fadeRise(frame, fps, { delay: 24, distance: 18 });
  // URL arrives after a beat.
  const url = fadeRise(frame, fps, { delay: 96, distance: 12 });

  const black = interpolate(frame, [durationInFrames - 30, durationInFrames - 2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headSize = orientation === "vertical" ? 84 : 104;

  return (
    <AbsoluteFill style={{ background: colors.green, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, padding: "0 60px", textAlign: "center" }}>
        <div style={{ transform: `scale(${markScale})`, opacity: markOpacity }}>
          <Monogram size={orientation === "vertical" ? 84 : 96} color={colors.paper} glyphColor={colors.green} />
        </div>
        <div style={{ fontFamily: fonts.serif, fontSize: headSize, color: colors.paper, ...head }}>
          Every deal, handled.
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: orientation === "vertical" ? 30 : 28, color: colors.gold, fontWeight: 500, ...url }}>
          realm.app &mdash; Free for 14 days.
        </div>
      </div>
      <AbsoluteFill style={{ background: colors.black, opacity: black, pointerEvents: "none" }} />
    </AbsoluteFill>
  );
};
