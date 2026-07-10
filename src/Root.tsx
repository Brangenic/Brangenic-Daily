import React from "react";
import { AbsoluteFill, Composition, staticFile } from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import "./fonts";
import { colors } from "./theme";
import { RealmVideo } from "./RealmVideo";
import { RealmMaster, type RealmMasterProps } from "./RealmMaster";
import { baseTotal, FPS as MASTER_FPS, TAIL } from "./timeline";
import { hasAsset } from "./asset-manifest";

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
    <AbsoluteFill style={{ background: colors.paper, justifyContent: "center", alignItems: "center" }}>
      <div
        style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})`, transformOrigin: "center center", flexShrink: 0 }}
      >
        <RealmVideo />
      </div>
    </AbsoluteFill>
  );
};

/**
 * Composition length = voiceover duration + 3s tail when the VO exists,
 * otherwise the timeline's base length. Any surplus extends the finale hold.
 */
const masterMetadata =
  (vo: string) =>
  async ({ props }: { props: RealmMasterProps }) => {
    const base = baseTotal();
    let target = base;
    if (hasAsset(vo)) {
      try {
        const seconds = await getAudioDurationInSeconds(staticFile(vo));
        target = Math.ceil(seconds * MASTER_FPS) + TAIL;
      } catch {
        target = base;
      }
    }
    const extraFinale = Math.max(0, target - base);
    return { durationInFrames: base + extraFinale, props: { ...props, extraFinale } };
  };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Original typographic demo. */}
      <Composition id="RealmDemo" component={RealmVideo} durationInFrames={DURATION} fps={FPS} width={BASE_W} height={BASE_H} />
      <Composition id="RealmSquare" component={SquareWrapper} durationInFrames={DURATION} fps={FPS} width={1080} height={1080} />

      {/* High-production film (assets-driven). */}
      <Composition
        id="Master"
        component={RealmMaster}
        durationInFrames={baseTotal()}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "landscape", vo: "vo/master.mp3", voJson: "vo/master.json", extraFinale: 0 } satisfies RealmMasterProps}
        calculateMetadata={masterMetadata("vo/master.mp3")}
      />
      <Composition
        id="MasterVertical"
        component={RealmMaster}
        durationInFrames={baseTotal()}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "vertical", vo: "vo/master.mp3", voJson: "vo/master.json", extraFinale: 0 } satisfies RealmMasterProps}
        calculateMetadata={masterMetadata("vo/master.mp3")}
      />
    </>
  );
};
