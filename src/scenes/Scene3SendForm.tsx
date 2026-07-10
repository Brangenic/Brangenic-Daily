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
import { PhoneFrame } from "../components/PhoneFrame";
import { CheckBadge } from "../components/Check";

/** Reveal a string character-by-character based on the frame. */
const typewriter = (full: string, frame: number, start: number, fpc = 2) => {
  const chars = Math.floor(interpolate(frame, [start, start + full.length * fpc], [0, full.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));
  return { text: full.slice(0, chars), typing: chars > 0 && chars < full.length };
};

const Field: React.FC<{
  label: string;
  full: string;
  frame: number;
  start: number;
}> = ({ label, full, frame, start }) => {
  const { text, typing } = typewriter(full, frame, start);
  const caretOn = typing && Math.floor(frame / 6) % 2 === 0;
  const filled = frame > start;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.muted, letterSpacing: "0.02em" }}>
        {label}
      </span>
      <div
        style={{
          height: 42,
          borderRadius: radii.sm,
          border: `1px solid ${filled ? colors.green : colors.hairline}`,
          background: colors.paper,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          fontFamily: fonts.sans,
          fontSize: 16,
          color: colors.ink,
          fontWeight: 500,
        }}
      >
        {text}
        {caretOn ? (
          <span style={{ width: 2, height: 20, background: colors.green, marginLeft: 1 }} />
        ) : null}
      </div>
    </div>
  );
};

/** The animated content inside the phone screen (local frame = scene frame). */
const PhoneScreen: React.FC<{ frame: number }> = ({ frame }) => {
  const { fps } = useVideoConfig();

  const progress = interpolate(
    frame,
    [40, 150, 180, 232, 255, 280],
    [0.08, 0.62, 0.66, 0.9, 0.92, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Step visibility windows.
  const step1 = interpolate(frame, [20, 34, 160, 176], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const step2 = interpolate(frame, [172, 188, 244, 258], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const step3 = fadeRise(frame, fps, { delay: 258, distance: 20 });

  // Signature stroke draw progress.
  const sig = interpolate(frame, [192, 236], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", inset: 0, fontFamily: fonts.sans }}>
      {/* App bar */}
      <div style={{ padding: "48px 18px 12px", borderBottom: hairlineBorder }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 17, fontWeight: 600, color: colors.ink }}>New Offer</span>
          <span style={{ fontSize: 13, color: colors.muted }}>Realm</span>
        </div>
        {/* Progress bar */}
        <div style={{ marginTop: 12, height: 6, borderRadius: 999, background: colors.hairline, overflow: "hidden" }}>
          <div style={{ width: `${progress * 100}%`, height: "100%", background: colors.green }} />
        </div>
      </div>

      {/* Body */}
      <div style={{ position: "relative", padding: 18, height: 560 }}>
        {/* Step 1 — details */}
        <div style={{ position: "absolute", inset: 0, padding: 18, opacity: step1, display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.green, letterSpacing: "0.04em" }}>
            CLIENT DETAILS
          </span>
          <Field label="Buyer name" full="Marsha Campbell" frame={frame} start={40} />
          <Field label="Tax registration (TRN)" full="118-654-227" frame={frame} start={82} />
          <Field label="Offer amount" full="J$60,500,000" frame={frame} start={120} />
        </div>

        {/* Step 2 — signature */}
        <div style={{ position: "absolute", inset: 0, padding: 18, opacity: step2, display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.green, letterSpacing: "0.04em" }}>
            SIGNATURE
          </span>
          <span style={{ fontSize: 14, color: colors.muted }}>Sign to confirm your offer</span>
          <div
            style={{
              marginTop: 6,
              height: 150,
              borderRadius: radii.md,
              border: hairlineBorder,
              background: colors.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={240} height={110} viewBox="0 0 240 110" fill="none">
              <path
                d="M14 78 C 30 30, 44 30, 46 70 C 48 40, 60 40, 62 66 C 70 30, 86 84, 104 60 C 118 42, 120 74, 134 62 C 150 48, 150 78, 168 58 C 186 40, 196 66, 214 52 C 224 46, 230 52, 232 56"
                stroke={colors.ink}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={1 - sig}
              />
            </svg>
          </div>
          <span style={{ fontSize: 15, color: colors.ink, fontWeight: 500 }}>Marsha Campbell</span>
        </div>

        {/* Step 3 — success */}
        <div style={{ position: "absolute", inset: 0, padding: 18, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, ...step3 }}>
          <CheckBadge size={72} progress={interpolate(frame, [266, 292], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 600, color: colors.ink }}>Offer signed</div>
            <div style={{ fontSize: 15, color: colors.muted, marginTop: 4 }}>Filed automatically.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Scene 3 — Send a form.
 * Headline left; a mocked phone that fills a form, signs, and files itself.
 */
export const Scene3SendForm: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const head = fadeRise(frame, fps, { delay: 8 });
  const phone = slideIn(frame, fps, { delay: 16, distance: 46, from: "right" });

  return (
    <AbsoluteFill style={{ background: colors.paper }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 140px",
        }}
      >
        <div style={{ maxWidth: 780, ...head }}>
          <Headline size={92} lineHeight={1.05}>
            Send your client a link.
            <br />
            Get back a signed offer.
          </Headline>
        </div>
        <div style={phone}>
          <PhoneFrame>
            <PhoneScreen frame={frame} />
          </PhoneFrame>
        </div>
      </div>
    </AbsoluteFill>
  );
};
