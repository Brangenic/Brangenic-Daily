import React from "react";
import { colors, radii, hairlineBorder } from "../theme";

/**
 * White (or custom) card with a 1px hairline border and soft radius.
 * Used as the base surface for every mocked UI element.
 */
export const Card: React.FC<
  React.PropsWithChildren<{
    style?: React.CSSProperties;
    padding?: number;
    radius?: number;
    background?: string;
    border?: string;
    shadow?: boolean;
  }>
> = ({
  children,
  style,
  padding = 24,
  radius = radii.lg,
  background = colors.white,
  border = hairlineBorder,
  shadow = true,
}) => {
  return (
    <div
      style={{
        background,
        border,
        borderRadius: radius,
        padding,
        boxShadow: shadow ? "0 18px 48px rgba(20, 24, 20, 0.08)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
