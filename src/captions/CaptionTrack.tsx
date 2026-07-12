import React, { useEffect, useState } from "react";
import {
  cancelRender,
  continueRender,
  delayRender,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { hasAsset } from "../asset-manifest";
import { placeSegments } from "../timeline";
import { Caption } from "../components/Caption";

type Cue = { text: string; start: number; end: number };

/** Fallback caption cues, derived from the timeline's per-segment captions. */
const timelineCues = (): Cue[] => {
  const cues: Cue[] = [];
  for (const { segment, start } of placeSegments()) {
    for (const c of segment.captions ?? []) {
      cues.push({ text: c.text, start: start + c.from, end: start + c.from + c.duration });
    }
  }
  return cues;
};

type Word = { text: string; start: number; end: number };

/** Tolerantly extract word timings from a few common JSON shapes. */
const extractWords = (data: unknown): Word[] => {
  const anyData = data as Record<string, unknown>;
  const rawWords =
    (Array.isArray(data) ? data : undefined) ??
    (Array.isArray(anyData?.words) ? (anyData.words as unknown[]) : undefined);

  if (rawWords) {
    return rawWords
      .map((w) => {
        const o = w as Record<string, unknown>;
        const text = (o.text ?? o.word ?? o.value) as string | undefined;
        const start = Number(o.start ?? o.startTime ?? o.start_time);
        const end = Number(o.end ?? o.endTime ?? o.end_time ?? start);
        return text && Number.isFinite(start) ? { text: String(text), start, end } : null;
      })
      .filter((w): w is Word => w !== null);
  }

  // ElevenLabs character alignment: rebuild words by splitting on spaces.
  const chars = (anyData?.characters ?? anyData?.alignment) as
    | { characters?: string[]; character_start_times_seconds?: number[]; character_end_times_seconds?: number[] }
    | undefined;
  if (chars?.characters && chars.character_start_times_seconds) {
    const out: Word[] = [];
    let cur = "";
    let startT = 0;
    chars.characters.forEach((ch, i) => {
      if (cur === "") startT = chars.character_start_times_seconds![i] ?? 0;
      if (ch === " ") {
        if (cur) out.push({ text: cur, start: startT, end: chars.character_end_times_seconds?.[i] ?? startT });
        cur = "";
      } else {
        cur += ch;
      }
    });
    if (cur) out.push({ text: cur, start: startT, end: chars.character_end_times_seconds?.[chars.characters.length - 1] ?? startT });
    return out;
  }

  return [];
};

/** Group words into caption cards of at most 6 words. */
const cuesFromWords = (words: Word[], fps: number): Cue[] => {
  const cues: Cue[] = [];
  for (let i = 0; i < words.length; i += 6) {
    const group = words.slice(i, i + 6);
    if (!group.length) continue;
    cues.push({
      text: group.map((w) => w.text).join(" "),
      start: Math.round(group[0].start * fps),
      end: Math.round(group[group.length - 1].end * fps),
    });
  }
  return cues;
};

/**
 * Burned-in captions. Uses VO word timestamps (vo/*.json) when present,
 * otherwise the timeline's declared caption cues.
 */
export const CaptionTrack: React.FC<{ voJson?: string }> = ({ voJson }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [cues, setCues] = useState<Cue[]>(() => timelineCues());

  useEffect(() => {
    if (!voJson || !hasAsset(voJson)) return;
    const handle = delayRender(`captions:${voJson}`);
    fetch(staticFile(voJson))
      .then((r) => r.json())
      .then((data) => {
        const words = extractWords(data);
        if (words.length) setCues(cuesFromWords(words, fps));
        continueRender(handle);
      })
      .catch((err) => cancelRender(err));
  }, [voJson, fps]);

  const active = cues.find((c) => frame >= c.start && frame <= c.end);
  if (!active) return null;

  const opacity = interpolate(
    frame,
    [active.start, active.start + 8, active.end - 8, active.end],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return <Caption text={active.text} opacity={opacity} />;
};
