import React from "react";
import { AbsoluteFill, Composition } from "remotion";
import "./fonts";
import { colors } from "./theme";
import { RealmVideo } from "./RealmVideo";

const FPS = 30;
const DURATION = 2250; // ~75s
const BASE_W = 1920;
const BASE_H = 1080;

/**
 * Square (1080x1080) wrapper: scale the 1920x1080 canvas to fit the square's
 * width and center it vertically. Layouts simply scale/center for the IG cut.
 */
const SquareWrapper: React.FC = () => {
  const scale = 1080 / BASE_W;
  return (
    <AbsoluteFill
      style={{
        background: colors.paper,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          flexShrink: 0,
        }}
      >
        <RealmVideo />
      </div>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RealmDemo"
        component={RealmVideo}
        durationInFrames={DURATION}
        fps={FPS}
        width={BASE_W}
        height={BASE_H}
      />
      <Composition
        id="RealmSquare"
        component={SquareWrapper}
        durationInFrames={DURATION}
        fps={FPS}
        width={1080}
        height={1080}
      />
    </>
  );
};
