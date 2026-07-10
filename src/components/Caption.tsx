import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../theme";
import { useOrientation } from "../orientation";

/**
 * Burned-in subtitle: white Instrument Sans 600 on a soft dark pill,
 * bottom-center (lifted above the lower third on vertical). `opacity` is
 * controlled by the caption track.
 */
export const Caption: React.FC<{ text: string; opacity: number }> = ({ text, opacity }) => {
  const orientation = useOrientation();
  const bottom = orientation === "vertical" ? 320 : 96;
  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", pointerEvents: "none" }}>
      <div
        style={{
          marginBottom: bottom,
          opacity,
          background: "rgba(16,23,17,0.72)",
          color: colors.white,
          fontFamily: fonts.sans,
          fontWeight: 600,
          fontSize: orientation === "vertical" ? 34 : 30,
          letterSpacing: "-0.01em",
          padding: "14px 26px",
          borderRadius: 999,
          maxWidth: "80%",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
