import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KineticLine } from "../components/KineticLine";
import { av } from "../tokens";
import { APPLE_SPRING } from "../tokens";
import { useOrientation } from "../../orientation";
import type { AppleScene } from "../timeline";

const THUMBS = ["#1c2a22", "#242a1c", "#1c2430", "#2a1c24", "#1c2a2a"];

/** Scene 8 — five website templates fan out; one enlarges to fill. */
export const Scene08Websites: React.FC<{ scene: AppleScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();
  const enlarge = interpolate(frame, [104, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {THUMBS.map((c, i) => {
        const rel = i - 2;
        const appear = spring({ frame: frame - (18 + i * 6), fps, config: APPLE_SPRING, durationInFrames: 22 });
        const isHero = i === 2;
        const baseX = rel * (orientation === "vertical" ? 150 : 210);
        const baseY = Math.abs(rel) * 26;
        const rot = rel * 7;
        const heroScale = isHero ? interpolate(enlarge, [0, 1], [1, orientation === "vertical" ? 2.1 : 2.4]) : 1;
        const fade = isHero ? 1 : 1 - enlarge;
        const x = baseX * (1 - (isHero ? enlarge : 0));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: orientation === "vertical" ? 260 : 320,
              height: orientation === "vertical" ? 170 : 200,
              borderRadius: 16,
              background: c,
              border: `1px solid ${av.hair}`,
              boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
              opacity: appear * fade,
              transform: `translate(${x}px, ${baseY * (1 - (isHero ? enlarge : 0))}px) rotate(${rot * (1 - (isHero ? enlarge : 0))}deg) scale(${appear * heroScale})`,
              zIndex: isHero ? 5 : 1,
              overflow: "hidden",
            }}
          >
            <div style={{ height: 20, background: "rgba(255,255,255,0.06)", borderBottom: `1px solid ${av.hair}` }} />
            <div style={{ padding: 14 }}>
              <div style={{ height: 10, width: "70%", background: "rgba(255,255,255,0.16)", borderRadius: 4 }} />
              <div style={{ height: 8, width: "50%", background: "rgba(255,255,255,0.1)", borderRadius: 4, marginTop: 8 }} />
            </div>
          </div>
        );
      })}
      {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} delay={150} size={orientation === "vertical" ? 66 : 82} y={orientation === "vertical" ? 600 : 380} /> : null}
    </AbsoluteFill>
  );
};
