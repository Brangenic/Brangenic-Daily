import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { av, sans } from "../tokens";
import { appleEnter } from "../anim";
import { useOrientation } from "../../orientation";

/**
 * Full-frame kinetic typography. Words reveal on a 2–4 frame stagger; the
 * accent word settles last with a slight scale-down. One accent word per line
 * (green), or a gold word for the price / logo. Never more than 7 words.
 */
export const KineticLine: React.FC<{
  text: string;
  accent?: string;
  gold?: string;
  delay?: number;
  size?: number;
  y?: number; // vertical center offset in px
}> = ({ text, accent, gold, delay = 0, size, y = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();

  const words = text.split(" ");
  const base = orientation === "vertical" ? 76 : 118;
  const fontSize = size ?? Math.max(52, base - Math.max(0, words.length - 5) * 8);
  const norm = (s: string) => s.replace(/[.,]/g, "").toLowerCase();
  const accentKey = accent ? norm(accent) : null;
  const goldKey = gold ? norm(gold) : null;
  const lastIndex = words.length - 1;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `translateY(${y}px)`,
          maxWidth: orientation === "vertical" ? "84%" : "70%",
          textAlign: "center",
          fontFamily: sans,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontSize,
          lineHeight: 1.04,
          color: av.white,
        }}
      >
        {words.map((w, i) => {
          const isAccent = accentKey && norm(w) === accentKey;
          const isGold = goldKey && norm(w) === goldKey;
          // Accent word settles last; others stagger left-to-right.
          const wordDelay = delay + (isAccent ? (lastIndex + 1) * 3 : i * 3);
          const enter = appleEnter(frame, fps, { delay: wordDelay, distance: 26, duration: 22 });
          const settle = isAccent
            ? interpolate(spring({ frame: frame - wordDelay, fps, config: { damping: 40, mass: 1, stiffness: 120 } }), [0, 1], [1.04, 1])
            : 1;
          return (
            <span
              key={`${w}-${i}`}
              style={{
                display: "inline-block",
                marginRight: "0.26em",
                color: isGold ? av.gold : isAccent ? av.accent : av.white,
                opacity: enter.opacity,
                transform: `${enter.transform} scale(${settle})`,
              }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
