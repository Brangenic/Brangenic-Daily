import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { av, sans } from "../tokens";

// Deterministic pseudo-random in [0,1) from an index + seed (no Math.random).
const rand = (i: number, seed: number) => {
  const x = Math.sin((i + 1) * seed) * 43758.5453;
  return x - Math.floor(x);
};

type FragKind = "field" | "chat" | "chip" | "avatar" | "stat" | "toggle";
const KINDS: FragKind[] = ["field", "chat", "chip", "avatar", "stat", "toggle"];

const box: React.CSSProperties = {
  background: "rgba(255,255,255,0.045)",
  border: `1px solid ${av.hair}`,
  borderRadius: 12,
  padding: 12,
  fontFamily: sans,
  color: av.dim,
  backdropFilter: "none",
};

const FragBody: React.FC<{ kind: FragKind; i: number }> = ({ kind, i }) => {
  switch (kind) {
    case "chat":
      return (
        <div style={{ ...box, width: 190, borderRadius: 16 }}>
          <div style={{ height: 8, width: "80%", background: "rgba(255,255,255,0.18)", borderRadius: 4 }} />
          <div style={{ height: 8, width: "55%", background: "rgba(255,255,255,0.12)", borderRadius: 4, marginTop: 8 }} />
        </div>
      );
    case "chip":
      return (
        <div style={{ ...box, width: 150, display: "flex", alignItems: "center", gap: 8, borderRadius: 999 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: av.accent }} />
          <div style={{ height: 8, width: 80, background: "rgba(255,255,255,0.16)", borderRadius: 4 }} />
        </div>
      );
    case "avatar":
      return (
        <div style={{ ...box, width: 54, height: 54, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", color: av.white, fontWeight: 600, fontSize: 16 }}>
          {["MC", "DP", "TR", "JA", "SR"][i % 5]}
        </div>
      );
    case "stat":
      return (
        <div style={{ ...box, width: 120 }}>
          <div style={{ color: av.white, fontSize: 26, fontWeight: 600 }}>{[6, 14, 9, 1, 45][i % 5]}</div>
          <div style={{ height: 6, width: 60, background: "rgba(255,255,255,0.12)", borderRadius: 4, marginTop: 6 }} />
        </div>
      );
    case "toggle":
      return (
        <div style={{ ...box, width: 96, display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: 999 }}>
          <div style={{ height: 6, width: 34, background: "rgba(255,255,255,0.14)", borderRadius: 4 }} />
          <div style={{ width: 22, height: 22, borderRadius: 999, background: av.accent }} />
        </div>
      );
    default: // field
      return (
        <div style={{ ...box, width: 200 }}>
          <div style={{ height: 6, width: 54, background: "rgba(255,255,255,0.16)", borderRadius: 4 }} />
          <div style={{ height: 30, marginTop: 8, borderRadius: 8, border: `1px solid ${av.hair}` }} />
        </div>
      );
  }
};

/**
 * A cloud of tiny UI fragments drifting in the void. `converge` (0..1) pulls
 * them from a wide scatter toward a loose central cluster; `snap` (0..1) then
 * collapses them into a tight rectangle and fades them out (the solid card is
 * drawn by the scene).
 */
export const Fragments: React.FC<{ count?: number; converge: number; snap?: number }> = ({
  count = 26,
  converge,
  snap = 0,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = width / 2;
  const cy = height / 2;

  return (
    <AbsoluteFill>
      {Array.from({ length: count }).map((_, i) => {
        const kind = KINDS[i % KINDS.length];
        // Wide scattered origin (can sit beyond the frame edges).
        const sx = (rand(i, 12.9898) - 0.5) * width * 1.6;
        const sy = (rand(i, 78.233) - 0.5) * height * 1.5;
        // Loose cluster target (ring around centre so the headline stays clear).
        const ang = i * 2.399;
        const ring = 240 + rand(i, 5.1) * 260;
        const clx = Math.cos(ang) * ring;
        const cly = Math.sin(ang) * ring * 0.7;
        // Tight snap target (small grid).
        const gx = ((i % 6) - 2.5) * 90;
        const gy = (Math.floor(i / 6) - 2) * 70;

        const px0 = interpolate(converge, [0, 1], [sx, clx]);
        const py0 = interpolate(converge, [0, 1], [sy, cly]);
        const px = interpolate(snap, [0, 1], [px0, gx]);
        const py = interpolate(snap, [0, 1], [py0, gy]);

        const float = Math.sin(frame / 22 + i) * 7 * (1 - snap);
        const depth = 0.55 + rand(i, 3.7) * 0.6;
        const appear = interpolate(frame, [i * 1.4, i * 1.4 + 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const opacity = appear * (1 - snap) * (0.35 + 0.4 * (1 - converge * 0.3));

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx + px,
              top: cy + py + float,
              transform: `translate(-50%, -50%) scale(${depth * (1 - snap * 0.3)})`,
              opacity,
            }}
          >
            <FragBody kind={kind} i={i} />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
