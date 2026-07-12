import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { Shot as ShotType } from "../timeline";
import { hasAsset } from "../asset-manifest";
import { useOrientation } from "../orientation";
import { SafeVideo } from "./SafeVideo";
import { KenBurns } from "./KenBurns";
import { FocusZoom } from "./FocusZoom";
import { ColorWash } from "./ColorWash";
import { BrowserFrame } from "./BrowserFrame";
import { CursorRing } from "./CursorRing";
import { TypeCard } from "./TypeCard";

/** Renders a single shot (live footage, UI recording, or type card). */
export const Shot: React.FC<{ shot: ShotType }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const orientation = useOrientation();

  // Every non-type shot fades in over 2 frames.
  const fadeIn = interpolate(frame, [0, 2], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  if (shot.kind === "type") {
    return <TypeCard text={shot.text} emphasis={shot.emphasis} background={shot.background} countUp={shot.countUp} />;
  }

  if (shot.kind === "live") {
    return (
      <AbsoluteFill style={{ opacity: fadeIn }}>
        <KenBurns from={shot.ken.from} to={shot.ken.to}>
          <SafeVideo asset={shot.asset} label={shot.label} kind="live shot" />
        </KenBurns>
        <ColorWash grade={shot.grade} />
      </AbsoluteFill>
    );
  }

  // UI recording inside a floating browser frame.
  const settle = spring({ frame, fps, config: { damping: 200, stiffness: 90, mass: 1 }, durationInFrames: 22 });
  const tilt = (shot.tilt ?? 0) * (1 - settle);
  const padV = orientation === "vertical" ? "16%" : "7%";
  const padH = orientation === "vertical" ? "6%" : "9%";

  const present = hasAsset(shot.asset);
  const inner = (
    <>
      <SafeVideo asset={shot.asset} label={shot.label} kind="screen recording" />
      {shot.cursor ? <CursorRing at={shot.cursor.at} x={shot.cursor.x} y={shot.cursor.y} /> : null}
    </>
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn, padding: `${padV} ${padH}` }}>
      <BrowserFrame rotate={tilt}>
        {/* Zoom toward the focus region for real recordings; show missing-asset
            slates un-zoomed so their label stays legible. */}
        {present ? (
          <FocusZoom from={shot.focusFrom} to={shot.focusTo}>{inner}</FocusZoom>
        ) : (
          inner
        )}
      </BrowserFrame>
    </AbsoluteFill>
  );
};
