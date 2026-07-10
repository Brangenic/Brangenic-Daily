import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { colors } from "./theme";
import { greenWipe } from "./transitions/greenWipe";

import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3SendForm } from "./scenes/Scene3SendForm";
import { Scene4Assistant } from "./scenes/Scene4Assistant";
import { Scene5Report } from "./scenes/Scene5Report";
import { Scene6Money } from "./scenes/Scene6Money";
import { Scene7Businesses } from "./scenes/Scene7Businesses";
import { Scene8Close } from "./scenes/Scene8Close";

// Each transition overlaps its neighbours by this many frames.
const T = 20;
const timing = linearTiming({ durationInFrames: T });

/**
 * Scene durations INCLUDING the frames consumed by adjacent transitions.
 * Total video length = sum(durations) - (transitions * T)
 *                    = 2390 - (7 * 20) = 2250 frames (~75s @ 30fps).
 */
const D = {
  hook: 200,
  problem: 260,
  form: 380,
  assistant: 380,
  report: 320,
  money: 260,
  businesses: 380,
  close: 210,
};

/**
 * The full Realm demo, authored in a fixed 1920x1080 coordinate space.
 * Other composition sizes scale this canvas (see Root.tsx).
 */
export const RealmVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.paper }}>
      {/*
        TODO(music): the video is intentionally silent and caption-driven.
        To add a music bed, import { Audio, staticFile } from "remotion" and
        drop this inside the AbsoluteFill:
          <Audio src={staticFile("music/realm-theme.mp3")} volume={0.6} />
      */}
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={D.hook}>
          <Scene1Hook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={greenWipe(colors.green)} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.problem}>
          <Scene2Problem />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.form}>
          <Scene3SendForm />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.assistant}>
          <Scene4Assistant />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.report}>
          <Scene5Report />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={greenWipe(colors.green)} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.money}>
          <Scene6Money />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.businesses}>
          <Scene7Businesses />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={greenWipe(colors.green)} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={D.close}>
          <Scene8Close />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
