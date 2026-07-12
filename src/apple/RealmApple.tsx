import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { av, sans } from "./tokens";
import { morph } from "./morph";
import { Void } from "./components/Void";
import { SCENES, MORPH_T, placeScenes } from "./timeline";
import { sceneComponent } from "./scenes";
import { Soundtrack } from "../audio/Soundtrack";
import { OrientationProvider, type Orientation, useOrientation } from "../orientation";

export type RealmAppleProps = {
  orientation: Orientation;
  extraFinale: number;
  withCaptions: boolean;
};

/** Minimal social captions (off by default — Apple films don't burn subtitles). */
const AppleCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const orientation = useOrientation();
  const placed = placeScenes();
  const active = placed.find((p) => frame >= p.start && frame < p.start + p.duration && p.scene.caption);
  if (!active?.scene.caption) return null;
  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", pointerEvents: "none" }}>
      <div
        style={{
          marginBottom: orientation === "vertical" ? 300 : 80,
          maxWidth: "76%",
          textAlign: "center",
          fontFamily: sans,
          fontWeight: 500,
          fontSize: orientation === "vertical" ? 30 : 26,
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.86)",
        }}
      >
        {active.scene.caption}
      </div>
    </AbsoluteFill>
  );
};

/**
 * The Apple-style film: a single persistent Void, scenes joined by morphs (no
 * hard cuts), over the VO-led soundtrack. Rendered at 16:9 and 9:16.
 */
export const RealmApple: React.FC<RealmAppleProps> = ({ orientation, extraFinale, withCaptions }) => {
  const placed = placeScenes(extraFinale);
  const finaleStart = placed[placed.length - 1].start;

  const children: React.ReactNode[] = [];
  SCENES.forEach((scene, i) => {
    const Comp = sceneComponent(scene.kind);
    const duration = i === SCENES.length - 1 ? scene.durationInFrames + Math.max(0, extraFinale) : scene.durationInFrames;
    children.push(
      <TransitionSeries.Sequence key={scene.id} durationInFrames={duration}>
        <Comp scene={scene} />
      </TransitionSeries.Sequence>,
    );
    if (i < SCENES.length - 1) {
      children.push(
        <TransitionSeries.Transition key={`m-${scene.id}`} presentation={morph()} timing={linearTiming({ durationInFrames: MORPH_T })} />,
      );
    }
  });

  return (
    <OrientationProvider value={orientation}>
      <AbsoluteFill style={{ background: av.void }}>
        <Void />
        <AbsoluteFill>
          <TransitionSeries>{children}</TransitionSeries>
        </AbsoluteFill>
        {withCaptions ? (
          <Sequence>
            <AppleCaptions />
          </Sequence>
        ) : null}
      </AbsoluteFill>
      <Soundtrack vo="vo/apple-cut.mp3" finaleStart={finaleStart} />
    </OrientationProvider>
  );
};
