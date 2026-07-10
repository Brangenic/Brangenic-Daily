import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { KineticLine } from "../components/KineticLine";
import { av, sans, serif } from "../tokens";
import { appleEnter } from "../anim";
import { countUp } from "../../anim";
import { withCommas } from "../../format";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

const STATS = [
  { label: "Showings", to: 6 },
  { label: "Inquiries", to: 14 },
  { label: "Open house", to: 9 },
  { label: "Offers", to: 1 },
];

/** Scene 6 — a branded seller report assembles as a floating object. */
export const Scene06Report: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();
  const card = appleEnter(frame, fps, { delay: 8, distance: 40, duration: 24 });
  const header = appleEnter(frame, fps, { delay: 14, distance: 18 });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: orientation === "vertical" ? 860 : 1000,
          borderRadius: 22,
          overflow: "hidden",
          border: `1px solid ${av.hair}`,
          background: "rgba(16,20,17,0.94)",
          boxShadow: "0 60px 140px rgba(0,0,0,0.6)",
          fontFamily: sans,
          opacity: card.opacity,
          transform: card.transform,
        }}
      >
        <div style={{ background: av.glow, padding: "22px 30px", ...header }}>
          <div style={{ fontSize: 14, letterSpacing: "0.08em", color: av.gold, fontWeight: 600 }}>OWNER UPDATE</div>
          <div style={{ fontFamily: serif, fontSize: 34, color: av.white, marginTop: 4 }}>12 Barbican Road</div>
        </div>
        <div style={{ padding: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {STATS.map((s, i) => {
              const at = 34 + i * 9;
              const flip = interpolate(frame, [at, at + 14], [90, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              const op = interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              const val = withCommas(countUp(frame, { to: s.to, delay: at, duration: 26 }));
              return (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${av.hair}`, borderRadius: 14, padding: "18px 20px", opacity: op, transform: `perspective(600px) rotateX(${flip}deg)` }}>
                  <div style={{ fontFamily: serif, fontSize: 44, color: av.accent, lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: 15, color: av.dim, marginTop: 6 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 22, fontSize: 18, color: "rgba(255,255,255,0.8)", opacity: interpolate(frame, [92, 112], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
            Strong week — showings up 40% and a first offer on the table.
          </div>
        </div>
      </div>
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={130} size={orientation === "vertical" ? 66 : 82} y={orientation === "vertical" ? 620 : 400} /> : null}
    </AbsoluteFill>
  );
};
