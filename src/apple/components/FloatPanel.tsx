import React from "react";
import { AbsoluteFill } from "remotion";
import { av } from "../tokens";
import type { FocusRect } from "../../timeline";
import { SafeVideo } from "../../components/SafeVideo";
import { FocusZoom } from "../../components/FocusZoom";

/**
 * A UI recording floating in the void: device-less rounded frame, hairline
 * border, deep shadow, a faint reflection beneath, and a subtle 3D perspective
 * that eases to flat (`rotateX`/`rotateY` passed by the scene as it focuses).
 */
export const FloatPanel: React.FC<{
  asset: string;
  label: string;
  focus?: FocusRect;
  rotateX?: number;
  rotateY?: number;
  widthPct?: number;
  heightPct?: number;
  style?: React.CSSProperties;
}> = ({ asset, label, focus, rotateX = 0, rotateY = 0, widthPct = 62, heightPct = 62, style }) => {
  const content = focus ? (
    <FocusZoom from={{ x: 0, y: 0, width: 1, height: 1 }} to={focus}>
      <SafeVideo asset={asset} label={label} kind="screen recording" />
    </FocusZoom>
  ) : (
    <SafeVideo asset={asset} label={label} kind="screen recording" />
  );

  const panel = (
    <div
      style={{
        width: `${widthPct}%`,
        height: `${heightPct}%`,
        borderRadius: 24,
        overflow: "hidden",
        border: `1px solid ${av.hair}`,
        background: "#0d120e",
        boxShadow: "0 60px 140px rgba(0,0,0,0.6), 0 0 60px rgba(20,82,60,0.12)",
        position: "relative",
      }}
    >
      {content}
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: 1600, ...style }}>
      <div
        style={{
          width: `${widthPct}%`,
          height: `${heightPct}%`,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          position: "relative",
        }}
      >
        {panel}
        {/* reflection */}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            height: "40%",
            transform: "scaleY(-1)",
            transformOrigin: "top",
            opacity: 0.08,
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            overflow: "hidden",
            borderRadius: 24,
          }}
        >
          <SafeVideo asset={asset} label={label} kind="screen recording" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
