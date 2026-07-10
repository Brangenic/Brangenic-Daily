import React from "react";
import { colors, fonts } from "../theme";

/**
 * Realm monogram: a green rounded-square containing a serif "R".
 * `size` controls the square; the wordmark text is optional.
 */
export const Monogram: React.FC<{ size?: number; color?: string; glyphColor?: string }> = ({
  size = 44,
  color = colors.green,
  glyphColor = colors.paper,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: fonts.serif,
          color: glyphColor,
          fontSize: size * 0.62,
          lineHeight: 1,
          marginTop: size * 0.04,
        }}
      >
        R
      </span>
    </div>
  );
};

export const Wordmark: React.FC<{
  size?: number;
  color?: string;
  monoColor?: string;
  glyphColor?: string;
  showText?: boolean;
}> = ({ size = 44, color = colors.ink, monoColor = colors.green, glyphColor = colors.paper, showText = true }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.34 }}>
      <Monogram size={size} color={monoColor} glyphColor={glyphColor} />
      {showText ? (
        <span
          style={{
            fontFamily: fonts.sans,
            fontWeight: 600,
            fontSize: size * 0.72,
            letterSpacing: "-0.01em",
            color,
          }}
        >
          Realm
        </span>
      ) : null}
    </div>
  );
};
