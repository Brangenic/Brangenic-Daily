/**
 * The Apple film as data. Scene durations are tuned to the narration (see the
 * VO script); the composition length becomes VO + 2s when apple-cut.mp3 exists.
 * Retime here without touching scene components.
 */
import type { FocusRect } from "../timeline";

export const FPS = 30;
export const MORPH_T = 14; // frames each morph overlaps neighbours
export const TAIL = 60; // ~2s tail

export type Line = { text: string; accent?: string; gold?: string };

export type SceneKind =
  | "fragments"
  | "snap"
  | "reveal"
  | "forms"
  | "nudge"
  | "report"
  | "money"
  | "websites"
  | "copilot"
  | "price"
  | "close";

export type AppleScene = {
  id: string;
  kind: SceneKind;
  durationInFrames: number;
  line?: Line;
  asset?: string;
  label?: string;
  focus?: FocusRect;
  /** Narration line for the optional social captions. */
  caption?: string;
};

export const SCENES: AppleScene[] = [
  {
    id: "fragments",
    kind: "fragments",
    durationInFrames: 320,
    line: { text: "Every deal has a hundred moving pieces.", accent: "hundred" },
    caption: "Every deal has a hundred moving pieces.",
  },
  {
    id: "snap",
    kind: "snap",
    durationInFrames: 170,
    line: { text: "We built one place for all of them.", accent: "one" },
    caption: "We built one place for all of them.",
  },
  {
    id: "reveal",
    kind: "reveal",
    durationInFrames: 220,
    line: { text: "This is Realm.", accent: "Realm" },
    asset: "screen/rec-02.mp4",
    label: "Realm dashboard",
    caption: "This is Realm.",
  },
  {
    id: "forms",
    kind: "forms",
    durationInFrames: 310,
    asset: "screen/rec-03.mp4",
    label: "Client form + signature",
    focus: { x: 0.3, y: 0.28, width: 0.44, height: 0.44 },
    line: { text: "It files itself.", accent: "itself" },
    caption: "Your client fills the offer, signs on their phone — and it files itself.",
  },
  {
    id: "nudge",
    kind: "nudge",
    durationInFrames: 290,
    asset: "screen/rec-02.mp4",
    label: "Nudge card",
    focus: { x: 0.08, y: 0.34, width: 0.42, height: 0.34 },
    line: { text: "In your voice.", accent: "voice" },
    caption: "When a client goes quiet, the follow-up is already written. In your voice.",
  },
  {
    id: "report",
    kind: "report",
    durationInFrames: 310,
    asset: "screen/rec-05.mp4",
    label: "Seller report",
    focus: { x: 0.28, y: 0.24, width: 0.5, height: 0.46 },
    line: { text: "Beautifully yours.", accent: "yours" },
    caption: "Every showing you log becomes a seller report. One tap. Beautifully yours.",
  },
  {
    id: "money",
    kind: "money",
    durationInFrames: 250,
    asset: "screen/rec-06.mp4",
    label: "Commission waterfall",
    focus: { x: 0.24, y: 0.26, width: 0.54, height: 0.46 },
    caption: "Your commission — price, GCT, splits — calculated before the ink dries.",
  },
  {
    id: "websites",
    kind: "websites",
    durationInFrames: 250,
    asset: "screen/rec-07.mp4",
    label: "Website builder",
    focus: { x: 0.3, y: 0.24, width: 0.5, height: 0.5 },
    line: { text: "A page for every listing.", accent: "every" },
    caption: "A website in five templates. A landing page for every listing.",
  },
  {
    id: "copilot",
    kind: "copilot",
    durationInFrames: 290,
    line: { text: "Writes like you.", accent: "you" },
    caption: "And a copilot that writes like you. On your best day.",
  },
  {
    id: "price",
    kind: "price",
    durationInFrames: 220,
    line: { text: "Every deal, handled." },
    caption: "Fifteen dollars a month. One platform. Every deal, handled.",
  },
  {
    id: "close",
    kind: "close",
    durationInFrames: 260,
    caption: "Realm. Start free at realm.app.",
  },
];

export const scenesBaseTotal = (): number =>
  SCENES.reduce((sum, s) => sum + s.durationInFrames, 0) - Math.max(0, SCENES.length - 1) * MORPH_T;

export type PlacedScene = { scene: AppleScene; start: number; duration: number };

export const placeScenes = (finaleExtra = 0): PlacedScene[] => {
  const placed: PlacedScene[] = [];
  let cursor = 0;
  SCENES.forEach((scene, i) => {
    const duration = i === SCENES.length - 1 ? scene.durationInFrames + Math.max(0, finaleExtra) : scene.durationInFrames;
    placed.push({ scene, start: cursor, duration });
    if (i < SCENES.length - 1) cursor += duration - MORPH_T;
  });
  return placed;
};
