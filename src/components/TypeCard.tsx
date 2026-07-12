import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, fonts } from "../theme";
import { fadeRise, countUp } from "../anim";
import { withCommas } from "../format";
import { useOrientation } from "../orientation";
import type { Background } from "../timeline";

const palette = (bg: Background) => {
  switch (bg) {
    case "dark":
      return { background: colors.panel, text: colors.paper, accent: colors.gold };
    case "green":
      return { background: colors.green, text: colors.paper, accent: colors.gold };
    default:
      return { background: colors.paper, text: colors.ink, accent: colors.green };
  }
};

/**
 * Full-frame typographic moment: one serif line revealed per word, or a big
 * count-up number with a label. Words fade+rise on a 3-frame stagger.
 */
export const TypeCard: React.FC<{
  text: string;
  emphasis?: string;
  background: Background;
  countUp?: { to: number; prefix?: string; suffix?: string };
}> = ({ text, emphasis, background, countUp: cu }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();
  const p = palette(background);
  const big = orientation === "vertical" ? 84 : 118;

  if (cu) {
    const value = withCommas(countUp(frame, { to: cu.to, delay: 8, duration: 40 }));
    const enter = fadeRise(frame, fps, { delay: 4, distance: 18 });
    return (
      <AbsoluteFill style={{ background: p.background, alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", ...enter }}>
          <div style={{ fontFamily: fonts.serif, fontSize: big * 1.4, color: p.accent, lineHeight: 1 }}>
            {cu.prefix ?? ""}
            {value}
            {cu.suffix ?? ""}
          </div>
          <div style={{ fontFamily: fonts.sans, fontSize: orientation === "vertical" ? 30 : 34, color: p.text, marginTop: 10, letterSpacing: "0.02em" }}>
            {text}
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  const words = text.split(" ");
  return (
    <AbsoluteFill style={{ background: p.background, alignItems: "center", justifyContent: "center", padding: orientation === "vertical" ? "0 80px" : "0 180px" }}>
      <div style={{ textAlign: "center", fontFamily: fonts.serif, fontSize: big, lineHeight: 1.06, color: p.text }}>
        {words.map((w, i) => {
          const clean = w.replace(/[.,]/g, "");
          const isEm = emphasis ? clean === emphasis.replace(/[.,]/g, "") : false;
          const enter = fadeRise(frame, fps, { delay: 6 + i * 3, distance: 16 });
          return (
            <span
              key={`${w}-${i}`}
              style={{ display: "inline-block", marginRight: "0.28em", fontStyle: isEm ? "italic" : "normal", color: isEm ? p.accent : p.text, ...enter }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
