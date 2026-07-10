import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, radii, hairlineBorder } from "../theme";
import { fadeRise, slideIn, countUp } from "../anim";
import { Headline, Em } from "../components/Type";
import { Card } from "../components/Card";

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: fonts.serif, fontSize: 34, color: colors.ink, marginBottom: 4 }}>{children}</div>
);
const CardKicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: fonts.sans, fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", color: colors.gold }}>
    {children}
  </div>
);

/** Card 1 — Agents: a mini CRM list. */
const AgentsCard: React.FC<{ frame: number }> = ({ frame }) => {
  const rows = [
    { initials: "MC", name: "Marsha Campbell", tag: "Offer", tagColor: colors.green },
    { initials: "DP", name: "David Patterson", tag: "Hot", tagColor: colors.gold },
    { initials: "TR", name: "The Reid family", tag: "New", tagColor: colors.muted },
  ];
  const { fps } = useVideoConfig();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {rows.map((r, i) => {
        const enter = fadeRise(frame, fps, { delay: 74 + i * 8, distance: 12 });
        return (
          <div
            key={r.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 14px",
              borderRadius: radii.sm,
              border: hairlineBorder,
              background: colors.paper,
              ...enter,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: colors.green,
                color: colors.paper,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.sans,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {r.initials}
            </div>
            <span style={{ flex: 1, fontFamily: fonts.sans, fontSize: 18, color: colors.ink }}>{r.name}</span>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 13,
                fontWeight: 600,
                color: colors.paper,
                background: r.tagColor,
                padding: "4px 10px",
                borderRadius: 999,
              }}
            >
              {r.tag}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/** Card 2 — Developers: a 6x4 unit grid where ~45% pre-sell. */
const DevelopersCard: React.FC<{ frame: number }> = ({ frame }) => {
  const total = 24;
  const soldCount = 11; // 11/24 ~ 45%
  // Deterministic scattered set of sold units.
  const sold = new Set([0, 1, 5, 6, 7, 11, 12, 13, 18, 19, 23].slice(0, soldCount));
  const pct = Math.round(countUp(frame, { to: 45, delay: 82, duration: 46 }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, width: 360 }}>
        {Array.from({ length: total }).map((_, i) => {
          const isSold = sold.has(i);
          const flipAt = 84 + i * 2.5;
          const t = isSold
            ? interpolate(frame, [flipAt, flipAt + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 0;
          return (
            <div
              key={i}
              style={{
                aspectRatio: "1 / 1",
                borderRadius: 8,
                background: isSold ? `rgba(20,82,60,${t})` : colors.white,
                border: `1px solid ${isSold && t > 0.5 ? colors.green : colors.hairline}`,
              }}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: fonts.serif, fontSize: 40, color: colors.green }}>{pct}%</span>
        <span style={{ fontFamily: fonts.sans, fontSize: 18, color: colors.muted }}>pre-sold</span>
      </div>
    </div>
  );
};

/** Card 3 — Property managers: white-label booking. */
const ManagersCard: React.FC<{ frame: number }> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const copy = fadeRise(frame, fps, { delay: 78, distance: 12 });
  const slots = 12;
  const booked = new Set([4, 9]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ fontFamily: fonts.sans, fontSize: 18, color: colors.ink, lineHeight: 1.5, ...copy }}>
        Residents book the court. Pay the fee.
        <br />
        <Em color={colors.green}>Your brand, not ours.</Em>
      </div>
      <div style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.muted, letterSpacing: "0.04em" }}>
        TENNIS COURT &middot; SATURDAY
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {Array.from({ length: slots }).map((_, i) => {
          const isBooked = booked.has(i);
          const at = 120 + (i === 4 ? 0 : 12);
          const t = isBooked
            ? interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 0;
          return (
            <div
              key={i}
              style={{
                height: 30,
                borderRadius: 7,
                background: isBooked ? `rgba(20,82,60,${t})` : colors.paper,
                border: `1px solid ${isBooked && t > 0.5 ? colors.green : colors.hairline}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

/**
 * Scene 7 — Three businesses.
 * Agents, developers and property managers, one platform.
 */
export const Scene7Businesses: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const head = fadeRise(frame, fps, { delay: 6 });

  const cards = [
    { kicker: "AGENTS", title: "Close more deals", body: <AgentsCard frame={frame} />, delay: 30 },
    { kicker: "DEVELOPERS", title: "Sell out faster", body: <DevelopersCard frame={frame} />, delay: 42 },
    { kicker: "PROPERTY MANAGERS", title: "Run every amenity", body: <ManagersCard frame={frame} />, delay: 54 },
  ];

  return (
    <AbsoluteFill style={{ background: colors.paper, justifyContent: "center", padding: "0 140px" }}>
      <div style={{ ...head, marginBottom: 54 }}>
        <Headline size={72} lineHeight={1.06}>
          Agents. Developers. Property managers. <Em>One platform.</Em>
        </Headline>
      </div>

      <div style={{ display: "flex", gap: 30 }}>
        {cards.map((c) => {
          const enter = slideIn(frame, fps, { delay: c.delay, distance: 44, from: "bottom" });
          return (
            <div key={c.kicker} style={{ flex: 1, ...enter }}>
              <Card padding={26} style={{ height: 460 }}>
                <CardKicker>{c.kicker}</CardKicker>
                <CardTitle>{c.title}</CardTitle>
                <div style={{ marginTop: 18 }}>{c.body}</div>
              </Card>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
