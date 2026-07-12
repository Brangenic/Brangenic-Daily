import React from "react";
import { colors, fonts } from "../theme";

/** Gold uppercase kicker used above headlines. */
export const Kicker: React.FC<
  React.PropsWithChildren<{ color?: string; style?: React.CSSProperties; size?: number }>
> = ({ children, color = colors.gold, style, size = 20 }) => (
  <div
    style={{
      fontFamily: fonts.sans,
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

/** Large serif display headline. Accepts nested spans for emphasis. */
export const Headline: React.FC<
  React.PropsWithChildren<{
    color?: string;
    size?: number;
    style?: React.CSSProperties;
    lineHeight?: number;
  }>
> = ({ children, color = colors.ink, size = 92, style, lineHeight = 1.02 }) => (
  <div
    style={{
      fontFamily: fonts.serif,
      fontWeight: 400,
      fontSize: size,
      lineHeight,
      letterSpacing: "-0.01em",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

/** Emphasis span — italic, optionally colored (used for key words). */
export const Em: React.FC<React.PropsWithChildren<{ color?: string }>> = ({
  children,
  color = colors.green,
}) => <span style={{ fontStyle: "italic", color }}>{children}</span>;

/** Body/UI sans text. */
export const Body: React.FC<
  React.PropsWithChildren<{
    color?: string;
    size?: number;
    weight?: number;
    style?: React.CSSProperties;
  }>
> = ({ children, color = colors.muted, size = 26, weight = 400, style }) => (
  <div
    style={{
      fontFamily: fonts.sans,
      fontWeight: weight,
      fontSize: size,
      lineHeight: 1.35,
      color,
      ...style,
    }}
  >
    {children}
  </div>
);
