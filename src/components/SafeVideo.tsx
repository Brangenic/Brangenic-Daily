import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { hasAsset } from "../asset-manifest";
import { PlaceholderSlate } from "./PlaceholderSlate";

/**
 * Renders footage if the asset exists, otherwise a labeled placeholder slate.
 * Video is always muted — the voiceover is the audio master.
 */
export const SafeVideo: React.FC<{
  asset: string;
  label: string;
  kind?: string;
  style?: React.CSSProperties;
}> = ({ asset, label, kind, style }) => {
  if (!hasAsset(asset)) {
    return <PlaceholderSlate asset={asset} label={label} kind={kind} />;
  }
  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={staticFile(asset)}
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
      />
    </AbsoluteFill>
  );
};
