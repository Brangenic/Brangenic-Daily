import React from "react";
import { colors, fonts } from "../theme";

/**
 * Browser chrome frame that UI recordings float inside: rounded corners,
 * hairline border, traffic-light dots, address pill and a soft long shadow.
 * `rotate` is the current tilt in degrees (Shot eases it to 0 on entry).
 */
export const BrowserFrame: React.FC<
  React.PropsWithChildren<{ rotate?: number; address?: string }>
> = ({ rotate = 0, address = "realm.app", children }) => {
  const dot = (c: string) => (
    <div style={{ width: 14, height: 14, borderRadius: 999, background: c }} />
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${colors.hairline}`,
        background: colors.white,
        boxShadow: "0 40px 90px rgba(16,23,17,0.34)",
        transform: `rotate(${rotate}deg)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 46,
          flexShrink: 0,
          background: "#efece4",
          borderBottom: `1px solid ${colors.hairline}`,
          display: "flex",
          alignItems: "center",
          padding: "0 18px",
          gap: 10,
        }}
      >
        {dot("#e6786b")}
        {dot("#e6c15b")}
        {dot("#7bbf86")}
        <div
          style={{
            marginLeft: 18,
            flex: 1,
            maxWidth: 360,
            height: 26,
            borderRadius: 999,
            background: colors.white,
            border: `1px solid ${colors.hairline}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.sans,
            fontSize: 14,
            color: colors.muted,
          }}
        >
          {address}
        </div>
      </div>
      {/* Content */}
      <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>{children}</div>
    </div>
  );
};
