/**
 * The edit as data.
 *
 * Every segment, shot, focus target, type card and caption is declared here so
 * the film can be retimed and re-sequenced without touching any component.
 * Frame counts are @ FPS. Segment start frames and the total length are
 * computed from the declared durations and the transitions between segments.
 */

export const FPS = 30;
export const INNER_T = 8; // within-world crossfade (frames)
export const TAIL = 90; // ~3s finale tail / silence beat

/** A focus target expressed as fractions (0..1) of the frame. */
export type FocusRect = { x: number; y: number; width: number; height: number };
export const FULL: FocusRect = { x: 0, y: 0, width: 1, height: 1 };

export type Grade = "warm" | "cool" | "none";
export type Background = "paper" | "dark" | "green";

export type LiveShot = {
  kind: "live";
  asset: string;
  label: string;
  durationInFrames: number;
  grade: Grade;
  /** Ken Burns scale from -> to. */
  ken: { from: number; to: number };
};

export type UiShot = {
  kind: "ui";
  asset: string;
  label: string;
  durationInFrames: number;
  /** Slow zoom from one framing to another (defaults full -> full). */
  focusFrom?: FocusRect;
  focusTo?: FocusRect;
  /** Entry tilt in degrees, eased to 0. */
  tilt?: number;
  /** Optional cursor-highlight ring (position in 0..1 of the frame). */
  cursor?: { at: number; x: number; y: number };
};

export type TypeShot = {
  kind: "type";
  text: string;
  emphasis?: string;
  background: Background;
  durationInFrames: number;
  countUp?: { to: number; prefix?: string; suffix?: string };
};

export type Shot = LiveShot | UiShot | TypeShot;

export type CaptionCue = { text: string; from: number; duration: number };

export type Segment = {
  id: string;
  world: "intro" | "agent" | "developer" | "community" | "finale";
  background: Background;
  /** Shot-driven segments list shots; the finale is rendered bespoke. */
  shots?: Shot[];
  bespoke?: "finale";
  captions?: CaptionCue[];
};

export type OuterTransition = { kind: "crossfade" | "whip" | "greenwipe"; frames: number };

// --- Segment content ---------------------------------------------------------

const coldOpen: Segment = {
  id: "cold-open",
  world: "intro",
  background: "dark",
  shots: [
    { kind: "type", text: "Paper. Threads. Memory.", background: "dark", durationInFrames: 54 },
    { kind: "live", asset: "live/shot-02.mp4", label: "Paper chaos", durationInFrames: 120, grade: "cool", ken: { from: 1.0, to: 1.06 } },
  ],
  captions: [{ text: "This is how deals get lost.", from: 40, duration: 110 }],
};

const thesis: Segment = {
  id: "thesis",
  world: "intro",
  background: "paper",
  shots: [
    { kind: "live", asset: "live/shot-01.mp4", label: "Agent at sunrise", durationInFrames: 120, grade: "warm", ken: { from: 1.06, to: 1.0 } },
    { kind: "type", text: "The operating system for Caribbean real estate.", emphasis: "Caribbean", background: "paper", durationInFrames: 96 },
  ],
  captions: [{ text: "There is a better way.", from: 10, duration: 100 }],
};

const agentWorld: Segment = {
  id: "agent",
  world: "agent",
  background: "paper",
  shots: [
    {
      kind: "ui",
      asset: "screen/rec-02.mp4",
      label: "Agent Today — nudge",
      durationInFrames: 150,
      focusFrom: FULL,
      focusTo: { x: 0.08, y: 0.34, width: 0.44, height: 0.34 },
      tilt: 2,
      cursor: { at: 96, x: 0.22, y: 0.52 },
    },
    { kind: "ui", asset: "screen/rec-03.mp4", label: "Send a form", durationInFrames: 120, focusTo: { x: 0.3, y: 0.2, width: 0.5, height: 0.5 }, tilt: 2 },
    { kind: "live", asset: "live/shot-03.mp4", label: "Client signs", durationInFrames: 96, grade: "warm", ken: { from: 1.0, to: 1.05 } },
    {
      kind: "ui",
      asset: "screen/rec-05.mp4",
      label: "Seller report",
      durationInFrames: 150,
      focusFrom: FULL,
      focusTo: { x: 0.28, y: 0.24, width: 0.5, height: 0.44 },
      tilt: 2,
    },
    { kind: "live", asset: "live/shot-04.mp4", label: "Keys handshake", durationInFrames: 96, grade: "warm", ken: { from: 1.04, to: 1.0 } },
  ],
  captions: [
    { text: "It nudges before you forget.", from: 20, duration: 120 },
    { text: "Send a link. Get a signed offer.", from: 158, duration: 120 },
    { text: "One click — a branded report.", from: 400, duration: 130 },
  ],
};

const developerWorld: Segment = {
  id: "developer",
  world: "developer",
  background: "dark",
  shots: [
    { kind: "live", asset: "live/shot-05.mp4", label: "Developer on site", durationInFrames: 96, grade: "warm", ken: { from: 1.0, to: 1.06 } },
    {
      kind: "ui",
      asset: "screen/rec-08.mp4",
      label: "Developer — units",
      durationInFrames: 150,
      focusFrom: FULL,
      focusTo: { x: 0.34, y: 0.28, width: 0.42, height: 0.42 },
      tilt: 2,
    },
    { kind: "type", text: "pre-sold", background: "dark", durationInFrames: 72, countUp: { to: 45, suffix: "%" } },
    { kind: "live", asset: "live/shot-06.mp4", label: "Construction", durationInFrames: 90, grade: "warm", ken: { from: 1.05, to: 1.0 } },
    { kind: "ui", asset: "screen/rec-09.mp4", label: "Publish update", durationInFrames: 120, focusTo: { x: 0.3, y: 0.22, width: 0.5, height: 0.5 }, tilt: 2 },
    { kind: "live", asset: "live/shot-07.mp4", label: "Buyer checks phone", durationInFrames: 90, grade: "warm", ken: { from: 1.0, to: 1.05 } },
  ],
  captions: [
    { text: "Sell the whole building.", from: 20, duration: 110 },
    { text: "Every unit, every buyer, live.", from: 150, duration: 120 },
    { text: "Updates your lenders can trust.", from: 470, duration: 120 },
  ],
};

const communityWorld: Segment = {
  id: "community",
  world: "community",
  background: "paper",
  shots: [
    { kind: "live", asset: "live/shot-08.mp4", label: "Aerial community", durationInFrames: 110, grade: "warm", ken: { from: 1.0, to: 1.06 } },
    { kind: "ui", asset: "screen/rec-10.mp4", label: "PM — budget", durationInFrames: 140, focusTo: { x: 0.26, y: 0.3, width: 0.5, height: 0.44 }, tilt: 2 },
    {
      kind: "ui",
      asset: "screen/rec-11.mp4",
      label: "Resident portal",
      durationInFrames: 140,
      focusTo: { x: 0.32, y: 0.26, width: 0.46, height: 0.46 },
      tilt: 2,
      cursor: { at: 90, x: 0.5, y: 0.5 },
    },
    { kind: "live", asset: "live/shot-09.mp4", label: "Manager relief", durationInFrames: 96, grade: "warm", ken: { from: 1.05, to: 1.0 } },
    { kind: "live", asset: "live/shot-10.mp4", label: "Owners at dusk", durationInFrames: 120, grade: "warm", ken: { from: 1.0, to: 1.04 } },
  ],
  captions: [
    { text: "Run the whole community.", from: 20, duration: 110 },
    { text: "Residents book, pay, done.", from: 250, duration: 120 },
    { text: "Your brand, not ours.", from: 470, duration: 120 },
  ],
};

const finale: Segment = {
  id: "finale",
  world: "finale",
  background: "green",
  bespoke: "finale",
};

export { coldOpen, thesis, agentWorld, developerWorld, communityWorld, finale };

export const SEGMENTS: Segment[] = [coldOpen, thesis, agentWorld, developerWorld, communityWorld, finale];

/** Transitions between consecutive segments (length = SEGMENTS.length - 1). */
export const TRANSITIONS: OuterTransition[] = [
  { kind: "crossfade", frames: 10 }, // cold open -> thesis
  { kind: "crossfade", frames: 10 }, // thesis -> agent
  { kind: "whip", frames: 4 }, // agent -> developer
  { kind: "whip", frames: 4 }, // developer -> community
  { kind: "greenwipe", frames: 16 }, // community -> finale
];

// Base (pre-tail) length of the bespoke finale.
export const FINALE_BASE = 180;

// --- Derived timing ----------------------------------------------------------

export const shotsDuration = (shots: Shot[]): number =>
  shots.reduce((sum, s) => sum + s.durationInFrames, 0) - Math.max(0, shots.length - 1) * INNER_T;

export const segmentDuration = (seg: Segment): number =>
  seg.bespoke === "finale" ? FINALE_BASE : shotsDuration(seg.shots ?? []);

export type PlacedSegment = { segment: Segment; start: number; duration: number };

/** Segment start frames, accounting for the overlap each transition consumes. */
export const placeSegments = (): PlacedSegment[] => {
  const placed: PlacedSegment[] = [];
  let cursor = 0;
  SEGMENTS.forEach((segment, i) => {
    const duration = segmentDuration(segment);
    placed.push({ segment, start: cursor, duration });
    const t = TRANSITIONS[i];
    cursor += duration - (t ? t.frames : 0);
  });
  return placed;
};

/** Total base length of the film (before any VO-driven tail extension). */
export const baseTotal = (): number => {
  const placed = placeSegments();
  const last = placed[placed.length - 1];
  return last.start + last.duration;
};
