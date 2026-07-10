import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { colors } from "../theme";
import { INNER_T, type Segment } from "../timeline";
import { Shot } from "../components/Shot";

const bgColor = (bg: Segment["background"]) =>
  bg === "dark" ? colors.panel : bg === "green" ? colors.green : colors.paper;

/**
 * Renders a shot-driven segment: its shots play back-to-back with short
 * crossfades over the segment's background.
 */
export const ShotSegment: React.FC<{ segment: Segment }> = ({ segment }) => {
  const shots = segment.shots ?? [];
  const children: React.ReactNode[] = [];
  shots.forEach((shot, i) => {
    children.push(
      <TransitionSeries.Sequence key={`s-${i}`} durationInFrames={shot.durationInFrames}>
        <Shot shot={shot} />
      </TransitionSeries.Sequence>,
    );
    if (i < shots.length - 1) {
      children.push(
        <TransitionSeries.Transition
          key={`t-${i}`}
          presentation={fade()}
          timing={linearTiming({ durationInFrames: INNER_T })}
        />,
      );
    }
  });

  return (
    <AbsoluteFill style={{ background: bgColor(segment.background) }}>
      <TransitionSeries>{children}</TransitionSeries>
    </AbsoluteFill>
  );
};
