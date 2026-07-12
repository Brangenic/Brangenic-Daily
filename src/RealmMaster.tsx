import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, type TransitionPresentation } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { colors } from "./theme";
import { greenWipe } from "./transitions/greenWipe";
import { whip } from "./transitions/whip";
import { OrientationProvider, type Orientation } from "./orientation";
import { SEGMENTS, TRANSITIONS, FINALE_BASE, segmentDuration } from "./timeline";
import {
  ColdOpen,
  Thesis,
  AgentWorld,
  DeveloperWorld,
  CommunityWorld,
  Finale,
} from "./segments";
import { Soundtrack } from "./audio/Soundtrack";
import { CaptionTrack } from "./captions/CaptionTrack";

export type RealmMasterProps = {
  orientation: Orientation;
  vo: string;
  voJson?: string;
  /** Extra frames appended to the finale so the film matches the VO length. */
  extraFinale: number;
};

const SEGMENT_COMPONENTS = [ColdOpen, Thesis, AgentWorld, DeveloperWorld, CommunityWorld, Finale];

type AnyPresentation = TransitionPresentation<Record<string, unknown>>;

const presentationFor = (kind: (typeof TRANSITIONS)[number]["kind"]): AnyPresentation => {
  if (kind === "whip") return whip() as AnyPresentation;
  if (kind === "greenwipe") return greenWipe(colors.green) as unknown as AnyPresentation;
  return fade() as unknown as AnyPresentation;
};

/**
 * The full production film: segments joined by world transitions, over the
 * voiceover-led soundtrack, with burned-in captions. Rendered at both 16:9 and
 * 9:16 by swapping the orientation.
 */
export const RealmMaster: React.FC<RealmMasterProps> = ({ orientation, vo, voJson, extraFinale }) => {
  const children: React.ReactNode[] = [];
  SEGMENTS.forEach((seg, i) => {
    const Comp = SEGMENT_COMPONENTS[i];
    const duration = seg.bespoke === "finale" ? FINALE_BASE + Math.max(0, extraFinale) : segmentDuration(seg);
    children.push(
      <TransitionSeries.Sequence key={seg.id} durationInFrames={duration}>
        <Comp />
      </TransitionSeries.Sequence>,
    );
    const t = TRANSITIONS[i];
    if (t) {
      children.push(
        <TransitionSeries.Transition
          key={`t-${seg.id}`}
          presentation={presentationFor(t.kind)}
          timing={linearTiming({ durationInFrames: t.frames })}
        />,
      );
    }
  });

  return (
    <OrientationProvider value={orientation}>
      <AbsoluteFill style={{ background: colors.paper }}>
        <TransitionSeries>{children}</TransitionSeries>
        <CaptionTrack voJson={voJson} />
      </AbsoluteFill>
      <Soundtrack vo={vo} />
    </OrientationProvider>
  );
};
