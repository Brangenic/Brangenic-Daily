import React from "react";
import { colors, fonts, radii, hairlineBorder } from "../theme";

/**
 * A small stat tile with a big number and a caption underneath.
 * `value` is passed pre-formatted so callers can drive count-ups.
 */
export const StatTile: React.FC<{
  value: string;
  label: string;
  style?: React.CSSProperties;
  accent?: string;
}> = ({ value, label, style, accent = colors.green }) => {
  return (
    <div
      style={{
        background: colors.paper,
        border: hairlineBorder,
        borderRadius: radii.md,
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: fonts.serif,
          fontSize: 52,
          lineHeight: 1,
          color: accent,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: fonts.sans,
          fontSize: 17,
          fontWeight: 500,
          color: colors.muted,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </span>
    </div>
  );
};
