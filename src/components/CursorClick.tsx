import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "../theme";

type Point = { x: number; y: number };

/**
 * An arrow cursor that travels from `from` to `to` and emits a click ripple
 * at `clickFrame`. Coordinates are relative to the positioned parent.
 */
export const CursorClick: React.FC<{
  from: Point;
  to: Point;
  moveStart?: number;
  moveDuration?: number;
  clickFrame: number;
  size?: number;
}> = ({ from, to, moveStart = 0, moveDuration = 20, clickFrame, size = 26 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = spring({
    frame: frame - moveStart,
    fps,
    config: { damping: 200, stiffness: 90, mass: 1 },
    durationInFrames: moveDuration,
  });
  const x = interpolate(t, [0, 1], [from.x, to.x]);
  const y = interpolate(t, [0, 1], [from.y, to.y]);

  // Press dip right at the click, then release.
  const press = interpolate(
    frame,
    [clickFrame - 3, clickFrame, clickFrame + 3],
    [1, 0.86, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Expanding ripple ring on click.
  const ripple = interpolate(frame, [clickFrame, clickFrame + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [clickFrame, clickFrame + 16], [0.5, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", left: x, top: y, zIndex: 30, pointerEvents: "none" }}>
      {ripple > 0 ? (
        <div
          style={{
            position: "absolute",
            left: -6,
            top: -6,
            width: 12 + ripple * 44,
            height: 12 + ripple * 44,
            marginLeft: -(ripple * 44) / 2,
            marginTop: -(ripple * 44) / 2,
            borderRadius: 999,
            border: `2px solid ${colors.green}`,
            opacity: rippleOpacity,
          }}
        />
      ) : null}
      <div style={{ transform: `scale(${press})`, transformOrigin: "top left" }}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3 L5 19 L9.5 14.8 L12.2 21 L14.8 19.9 L12.1 13.8 L18 13.5 Z"
            fill={colors.ink}
            stroke={colors.white}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
