import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../theme";
import { fadeRise, countUp } from "../anim";
import { jmd } from "../format";

const MAX = 3_400_000;
const BAR_W = 760;

const WaterfallRow: React.FC<{
  label: string;
  amount: number;
  display: string;
  color: string;
  delay: number;
  frame: number;
}> = ({ label, amount, display, color, delay, frame }) => {
  const { fps } = useVideoConfig();
  const enter = fadeRise(frame, fps, { delay, distance: 12 });
  const draw = interpolate(frame, [delay + 4, delay + 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const width = (Math.abs(amount) / MAX) * BAR_W * draw;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, ...enter }}>
      <div style={{ width: 230, fontFamily: fonts.sans, fontSize: 22, color: colors.muted }}>{label}</div>
      <div style={{ width: BAR_W, height: 30, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width,
            background: color,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
      </div>
      <div style={{ width: 240, textAlign: "right", fontFamily: fonts.sans, fontSize: 24, fontWeight: 600, color: colors.paper }}>
        {display}
      </div>
    </div>
  );
};

/**
 * Scene 6 — Money.
 * A commission waterfall on a dark panel resolving to the agent's take-home.
 */
export const Scene6Money: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const head = fadeRise(frame, fps, { delay: 6 });

  const total = countUp(frame, { to: 1_734_000, delay: 132, duration: 40 });
  const totalEnter = fadeRise(frame, fps, { delay: 130, distance: 16 });
  const yours = fadeRise(frame, fps, { delay: 176, distance: 8 });

  return (
    <AbsoluteFill style={{ background: colors.panel, justifyContent: "center", padding: "0 160px" }}>
      <div style={{ ...head, marginBottom: 56 }}>
        <div style={{ fontFamily: fonts.serif, fontSize: 76, color: colors.white, lineHeight: 1.05 }}>
          Know exactly what every deal pays you.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <WaterfallRow label="Gross commission" amount={3_400_000} display={jmd(3_400_000)} color={colors.green} delay={30} frame={frame} />
        <WaterfallRow label="GCT (15%)" amount={510_000} display={`−${jmd(510_000)}`} color={colors.gold} delay={60} frame={frame} />
        <WaterfallRow label="Brokerage split" amount={1_156_000} display={`−${jmd(1_156_000)}`} color={colors.gold} delay={90} frame={frame} />
      </div>

      {/* Divider + take-home */}
      <div style={{ marginTop: 46, borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 36, display: "flex", alignItems: "baseline", gap: 24, ...totalEnter }}>
        <span style={{ fontFamily: fonts.serif, fontSize: 92, color: colors.gold, lineHeight: 1 }}>
          {jmd(total)}
        </span>
        <span style={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: 44, color: colors.muted, ...yours }}>
          &mdash; yours.
        </span>
      </div>
    </AbsoluteFill>
  );
};
