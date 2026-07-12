import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "../theme";
import { fadeRise, slideIn, slowScale } from "../anim";
import { Kicker, Headline, Em } from "../components/Type";
import { Wordmark } from "../components/Wordmark";

/**
 * Scene 1 — Hook.
 * Paper background, gold kicker, serif headline revealed line by line,
 * and the Realm wordmark settling into the top-left.
 */
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const mark = slideIn(frame, fps, { delay: 3, distance: 24, from: "left" });
  const kicker = fadeRise(frame, fps, { delay: 12, distance: 16 });
  const line1 = fadeRise(frame, fps, { delay: 26 });
  const line2 = fadeRise(frame, fps, { delay: 40 });

  // Slow settle scale on the whole headline block.
  const scale = slowScale(frame, durationInFrames, 1, 1.02);

  return (
    <AbsoluteFill style={{ background: colors.paper }}>
      {/* Wordmark, top-left */}
      <div style={{ position: "absolute", top: 64, left: 96, ...mark }}>
        <Wordmark size={46} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 96,
          right: 96,
          top: "50%",
          transform: `translateY(-50%) scale(${scale})`,
          transformOrigin: "left center",
        }}
      >
        <div style={{ ...kicker, marginBottom: 34 }}>
          <Kicker>Built by realtors, for realtors</Kicker>
        </div>
        <Headline size={118} lineHeight={1.03}>
          <div style={line1}>The operating system</div>
          <div style={line2}>
            for <Em>Caribbean</Em> real estate.
          </div>
        </Headline>
      </div>
    </AbsoluteFill>
  );
};
