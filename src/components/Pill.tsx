import React from "react";
import { colors, fonts, radii } from "../theme";

/**
 * Small rounded status pill (e.g. "Sent via WhatsApp").
 */
export const Pill: React.FC<
  React.PropsWithChildren<{
    background?: string;
    color?: string;
    style?: React.CSSProperties;
    fontSize?: number;
  }>
> = ({ children, background = colors.green, color = colors.paper, style, fontSize = 20 }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background,
        color,
        fontFamily: fonts.sans,
        fontWeight: 600,
        fontSize,
        lineHeight: 1,
        padding: `${fontSize * 0.55}px ${fontSize * 0.9}px`,
        borderRadius: radii.pill,
        letterSpacing: "-0.01em",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
