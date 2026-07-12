import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, radii, hairlineBorder } from "../theme";
import { fadeRise, slideIn } from "../anim";
import { Headline } from "../components/Type";
import { Card } from "../components/Card";
import { CursorClick } from "../components/CursorClick";
import { Check } from "../components/Check";

const CLICK = 90;

const SmallButton: React.FC<{ label: string; active?: boolean; opacity: number }> = ({
  label,
  active,
  opacity,
}) => (
  <div
    style={{
      flex: 1,
      textAlign: "center",
      padding: "12px 0",
      borderRadius: radii.sm,
      border: `1px solid ${active ? colors.green : colors.hairline}`,
      background: active ? colors.green : colors.white,
      color: active ? colors.paper : colors.ink,
      fontFamily: fonts.sans,
      fontSize: 18,
      fontWeight: 600,
      opacity,
    }}
  >
    {label}
  </div>
);

const NotificationCard: React.FC<{ frame: number }> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const enter = slideIn(frame, fps, { delay: 24, distance: 40, from: "left" });

  // Buttons fade out after the click; resolved row fades in.
  const buttons = interpolate(frame, [CLICK + 6, CLICK + 18], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const resolved = interpolate(frame, [CLICK + 14, CLICK + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const checkP = interpolate(frame, [CLICK + 16, CLICK + 34], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: 620, ...enter }}>
      <Card padding={28} radius={radii.lg}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              background: colors.green,
              color: colors.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.sans,
              fontWeight: 600,
              fontSize: 20,
              flexShrink: 0,
            }}
          >
            MC
          </div>
          <div style={{ fontFamily: fonts.sans, fontSize: 22, color: colors.ink, lineHeight: 1.35 }}>
            Marsha hasn&rsquo;t replied in 4 days &mdash; follow up?
          </div>
        </div>

        {/* Button row */}
        <div style={{ position: "relative", marginTop: 22, height: 48 }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", gap: 12, opacity: buttons }}>
            <SmallButton label="WhatsApp" active opacity={1} />
            <SmallButton label="Snooze" opacity={1} />
            <SmallButton label="Done" opacity={1} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
              opacity: resolved,
            }}
          >
            <Check size={26} progress={checkP} />
            <span style={{ fontFamily: fonts.sans, fontSize: 18, fontWeight: 600, color: colors.green }}>
              Follow-up sent via WhatsApp
            </span>
          </div>
        </div>

        {/* Cursor travels to the WhatsApp button and clicks. */}
        <CursorClick
          from={{ x: 540, y: 150 }}
          to={{ x: 120, y: 150 }}
          moveStart={44}
          moveDuration={40}
          clickFrame={CLICK}
        />
      </Card>
    </div>
  );
};

const DigestRow: React.FC<{ text: string; delay: number; frame: number }> = ({ text, delay, frame }) => {
  const { fps } = useVideoConfig();
  const enter = fadeRise(frame, fps, { delay, distance: 14 });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: hairlineBorder, ...enter }}>
      <div style={{ width: 8, height: 8, borderRadius: 999, background: colors.gold, flexShrink: 0 }} />
      <span style={{ fontFamily: fonts.sans, fontSize: 20, color: colors.ink }}>{text}</span>
    </div>
  );
};

const DigestCard: React.FC<{ frame: number }> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const enter = slideIn(frame, fps, { delay: 30, distance: 46, from: "right" });
  return (
    <div style={{ width: 560, ...enter }}>
      <Card padding={0} radius={radii.lg} style={{ overflow: "hidden" }}>
        <div style={{ background: colors.green, padding: "22px 26px" }}>
          <div style={{ fontFamily: fonts.sans, fontSize: 15, color: colors.gold, letterSpacing: "0.06em", fontWeight: 600 }}>
            YOUR DAY
          </div>
          <div style={{ fontFamily: fonts.serif, fontSize: 30, color: colors.paper, marginTop: 6, lineHeight: 1.15 }}>
            Good morning, Yashel &mdash; 3 things need you today
          </div>
        </div>
        <div style={{ padding: "8px 26px 20px" }}>
          <DigestRow text="Call back the Hendersons on 12 Barbican Rd" delay={52} frame={frame} />
          <DigestRow text="Marsha Campbell &mdash; offer expires today" delay={64} frame={frame} />
          <DigestRow text="Send this week&rsquo;s report to 3 sellers" delay={76} frame={frame} />
        </div>
      </Card>
    </div>
  );
};

/**
 * Scene 4 — The assistant.
 * Left: headline + a notification the user resolves with a click.
 * Right: the daily digest card.
 */
export const Scene4Assistant: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const head = fadeRise(frame, fps, { delay: 8 });

  return (
    <AbsoluteFill style={{ background: colors.paper }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 60,
          padding: "0 140px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={head}>
            <Headline size={82} lineHeight={1.05}>
              It nudges before
              <br />
              you forget.
            </Headline>
          </div>
          <NotificationCard frame={frame} />
        </div>
        <DigestCard frame={frame} />
      </div>
    </AbsoluteFill>
  );
};
