import React from "react";
import { Audio, staticFile, useVideoConfig } from "remotion";
import { hasAsset } from "../asset-manifest";
import { placeSegments } from "../timeline";

const VO_VOL = 1.0;
const MUSIC_FULL = 0.8;
const MUSIC_DUCK = 0.2; // ~ -12 dB under full while the VO speaks

const finaleStart = (() => {
  const placed = placeSegments();
  return placed[placed.length - 1].start;
})();

/**
 * Audio bed: the voiceover is the master; the music ducks ~12 dB beneath it,
 * swells back up under the finale, and fades out over the last 40 frames.
 * Anything missing is simply omitted (the render stays silent-safe).
 */
export const Soundtrack: React.FC<{ vo: string; music?: string }> = ({ vo, music = "music/bed.mp3" }) => {
  const { durationInFrames } = useVideoConfig();
  const voPresent = hasAsset(vo);

  const musicVolume = (f: number): number => {
    const fadeIn = Math.min(1, f / 30);
    const fadeOut = Math.min(1, Math.max(0, (durationInFrames - f) / 40));
    // Duck while the VO plays; swell up around the finale.
    const swell = f >= finaleStart - 15 ? Math.min(1, (f - (finaleStart - 15)) / 30) : 0;
    const base = voPresent ? MUSIC_DUCK + (MUSIC_FULL - MUSIC_DUCK) * swell : MUSIC_FULL;
    return Math.max(0, base * fadeIn * fadeOut);
  };

  return (
    <>
      {voPresent ? <Audio src={staticFile(vo)} volume={VO_VOL} /> : null}
      {hasAsset(music) ? <Audio src={staticFile(music)} volume={musicVolume} /> : null}
    </>
  );
};
