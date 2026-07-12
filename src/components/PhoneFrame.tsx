import React from "react";
import { colors } from "../theme";

/**
 * A simple mocked phone frame: rounded outer shell, notch, and an inner
 * screen area that clips its children. Default screen is 320x650.
 */
export const PhoneFrame: React.FC<
  React.PropsWithChildren<{
    width?: number;
    height?: number;
    screenBackground?: string;
    style?: React.CSSProperties;
  }>
> = ({ width = 320, height = 650, screenBackground = colors.white, children, style }) => {
  const bezel = 12;
  return (
    <div
      style={{
        width: width + bezel * 2,
        height: height + bezel * 2,
        borderRadius: 46,
        background: colors.panel,
        padding: bezel,
        boxShadow: "0 30px 70px rgba(20, 24, 20, 0.22)",
        position: "relative",
        ...style,
      }}
    >
      {/* notch */}
      <div
        style={{
          position: "absolute",
          top: bezel + 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 96,
          height: 20,
          borderRadius: 999,
          background: colors.panel,
          zIndex: 2,
        }}
      />
      <div
        style={{
          width,
          height,
          borderRadius: 36,
          background: screenBackground,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};
