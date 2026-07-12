import React from "react";
import { interpolate } from "remotion";
import { colors } from "../theme";

/**
 * A checkmark that draws itself by animating stroke-dashoffset.
 * `progress` is 0..1 (caller derives it from the frame).
 */
export const Check: React.FC<{
  size?: number;
  progress: number;
  color?: string;
  strokeWidth?: number;
}> = ({ size = 28, progress, color = colors.green, strokeWidth = 3.5 }) => {
  const length = 34; // approximate path length of the check
  const offset = interpolate(progress, [0, 1], [length, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12.5 L10 17.5 L19 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

/** A filled green disc with a white check that draws in. */
export const CheckBadge: React.FC<{ size?: number; progress: number; background?: string }> = ({
  size = 48,
  progress,
  background = colors.green,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Check size={size * 0.6} progress={progress} color={colors.white} strokeWidth={3} />
    </div>
  );
};
