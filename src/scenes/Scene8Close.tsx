import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../theme";
import { fadeRise } from "../anim";
import { Monogram } from "../components/Wordmark";

/**
 * Scene 8 — Close.
 * Full green, monogram settles in, sign-off, then fade to black.
 */
export const Scene8Close: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const markProgress = spring({ frame: frame - 8, fps, config: { damping: 200, stiffness: 90, mass: 1 } });
  const markScale = interpolate(markProgress, [0, 1], [0.82, 1]);
  const markOpacity = interpolate(frame, [8, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const head = fadeRise(frame, fps, { delay: 26, distance: 18 });
  const sub = fadeRise(frame, fps, { delay: 44, distance: 12 });

  // Fade to black over the last 30 frames.
  const black = interpolate(frame, [durationInFrames - 30, durationInFrames - 2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: colors.green, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34 }}>
        <div style={{ transform: `scale(${markScale})`, opacity: markOpacity }}>
          <Monogram size={96} color={colors.paper} glyphColor={colors.green} />
        </div>
        <div style={{ fontFamily: fonts.serif, fontSize: 104, color: colors.paper, ...head }}>
          Every deal, handled.
        </div>
        <div style={{ fontFamily: fonts.sans, fontSize: 28, color: colors.gold, fontWeight: 500, ...sub }}>
          realm.app &mdash; Free for 14 days.
        </div>
      </div>

      <AbsoluteFill style={{ background: colors.black, opacity: black, pointerEvents: "none" }} />
    </AbsoluteFill>
  );
};
