import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, radii } from "../theme";
import { fadeRise, countUp } from "../anim";
import { Headline } from "../components/Type";
import { Card } from "../components/Card";
import { StatTile } from "../components/StatTile";
import { Pill } from "../components/Pill";
import { Check } from "../components/Check";
import { withCommas } from "../format";

const stats = [
  { label: "Showings", to: 6, delay: 48 },
  { label: "Inquiries", to: 14, delay: 56 },
  { label: "Open house", to: 9, delay: 64 },
  { label: "Offers", to: 1, delay: 72 },
];

const NarrativeLine: React.FC<{ text: string; delay: number; frame: number }> = ({ text, delay, frame }) => {
  const { fps } = useVideoConfig();
  const enter = fadeRise(frame, fps, { delay, distance: 12 });
  return (
    <div style={{ fontFamily: fonts.sans, fontSize: 21, color: colors.ink, lineHeight: 1.5, ...enter }}>
      {text}
    </div>
  );
};

/**
 * Scene 5 — Seller report.
 * A branded owner-update card that assembles piece by piece, with
 * count-up stats and a "Sent via WhatsApp" stamp.
 */
export const Scene5Report: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const head = fadeRise(frame, fps, { delay: 6 });
  const card = fadeRise(frame, fps, { delay: 20, distance: 26 });
  const header = fadeRise(frame, fps, { delay: 30, distance: 16 });

  // Pill stamps down from slightly enlarged to 1.0 with a gentle spring.
  const stampProgress = spring({ frame: frame - 138, fps, config: { damping: 200, stiffness: 120, mass: 0.8 } });
  const stampScale = interpolate(stampProgress, [0, 1], [1.35, 1]);
  const stampOpacity = interpolate(frame, [138, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stampCheck = interpolate(frame, [146, 168], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.paper, alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 1180, display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
        <div style={{ ...head, textAlign: "center" }}>
          <Headline size={78}>One click. A branded seller report.</Headline>
        </div>

        <div style={{ width: "100%", ...card }}>
          <Card padding={0} radius={radii.lg} style={{ overflow: "hidden" }}>
            {/* Green header bar */}
            <div style={{ background: colors.green, padding: "26px 34px", ...header }}>
              <div style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.gold, letterSpacing: "0.08em", fontWeight: 600 }}>
                OWNER UPDATE
              </div>
              <div style={{ fontFamily: fonts.serif, fontSize: 38, color: colors.paper, marginTop: 4 }}>
                12 Barbican Road
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "30px 34px 34px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
                {stats.map((s) => {
                  const enter = fadeRise(frame, fps, { delay: s.delay, distance: 16 });
                  const value = withCommas(countUp(frame, { to: s.to, delay: s.delay, duration: 34 }));
                  return (
                    <div key={s.label} style={enter}>
                      <StatTile value={value} label={s.label} />
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 10 }}>
                <NarrativeLine
                  text="Strong week: showings up 40% and a first offer on the table."
                  delay={104}
                  frame={frame}
                />
                <NarrativeLine
                  text="Recommend holding firm through the weekend open house."
                  delay={116}
                  frame={frame}
                />
              </div>

              <div style={{ marginTop: 28, display: "flex", justifyContent: "flex-end" }}>
                <div style={{ transform: `scale(${stampScale})`, opacity: stampOpacity, transformOrigin: "center" }}>
                  <Pill background={colors.green}>
                    <Check size={20} progress={stampCheck} color={colors.paper} strokeWidth={3} />
                    Sent via WhatsApp
                  </Pill>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AbsoluteFill>
  );
};
