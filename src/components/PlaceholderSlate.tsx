import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../theme";

/**
 * A clearly-labeled stand-in shown when an expected asset file is missing, so
 * the edit renders end-to-end before the real footage arrives.
 */
export const PlaceholderSlate: React.FC<{ asset: string; label: string; kind?: string }> = ({
  asset,
  label,
  kind = "asset",
}) => {
  return (
    <AbsoluteFill
      style={{
        background: `repeating-linear-gradient(45deg, ${colors.panel}, ${colors.panel} 22px, #14181388 22px, #14181388 44px)`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", padding: 60 }}>
        <div
          style={{
            border: `1px solid ${colors.gold}`,
            borderRadius: 16,
            padding: "34px 46px",
            background: "rgba(16,23,17,0.82)",
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          <div style={{ fontFamily: fonts.sans, fontSize: 20, fontWeight: 600, letterSpacing: "0.22em", color: colors.gold, textTransform: "uppercase" }}>
            Missing {kind}
          </div>
          <div style={{ fontFamily: fonts.serif, fontSize: 46, color: colors.paper, marginTop: 12, lineHeight: 1.1 }}>
            {label}
          </div>
          <div style={{ fontFamily: fonts.sans, fontSize: 20, color: colors.muted, marginTop: 14 }}>
            assets/{asset}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
