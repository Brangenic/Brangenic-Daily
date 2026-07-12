import React from "react";
import { AbsoluteFill } from "remotion";
import type { Grade } from "../timeline";

/**
 * A unifying color wash layered over live footage: warm highlights + green
 * shadows for the "Realm look", or a cooler, flatter grade for the cold open.
 * Implemented as low-opacity blend layers (no backdrop filters, which don't
 * composite reliably over video frames).
 */
export const ColorWash: React.FC<{ grade: Grade }> = ({ grade }) => {
  if (grade === "none") return null;

  if (grade === "cool") {
    return (
      <>
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #223042 0%, #10141b 100%)", mixBlendMode: "multiply", opacity: 0.34 }} />
        <AbsoluteFill style={{ background: "#8fa6c4", mixBlendMode: "soft-light", opacity: 0.18 }} />
      </>
    );
  }

  // warm
  return (
    <>
      <AbsoluteFill style={{ background: "linear-gradient(180deg, #2a2417 0%, #0f1a12 100%)", mixBlendMode: "multiply", opacity: 0.26 }} />
      <AbsoluteFill style={{ background: "radial-gradient(120% 80% at 50% 10%, #f4e2b8 0%, rgba(244,226,184,0) 60%)", mixBlendMode: "soft-light", opacity: 0.4 }} />
      <AbsoluteFill style={{ background: "#14523c", mixBlendMode: "multiply", opacity: 0.08 }} />
    </>
  );
};
