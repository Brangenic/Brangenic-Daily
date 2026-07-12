import React from "react";
import { AbsoluteFill } from "remotion";
import type { AppleScene, SceneKind } from "../timeline";
import { KineticLine } from "../components/KineticLine";
import { Scene01Fragments } from "./Scene01Fragments";
import { Scene02Snap } from "./Scene02Snap";
import { Scene03Reveal } from "./Scene03Reveal";
import { Scene04Forms } from "./Scene04Forms";
import { Scene05Nudge } from "./Scene05Nudge";
import { Scene06Report } from "./Scene06Report";
import { Scene07Money } from "./Scene07Money";
import { Scene08Websites } from "./Scene08Websites";
import { Scene09Copilot } from "./Scene09Copilot";
import { Scene10Price } from "./Scene10Price";
import { Scene11Close } from "./Scene11Close";

type SceneComponent = React.FC<{ scene: AppleScene }>;

/** Temporary stand-in for scenes not yet implemented (renders the line only). */
const ScenePlaceholder: SceneComponent = ({ scene }) => (
  <AbsoluteFill>
    {scene.line ? <KineticLine text={scene.line.text} accent={scene.line.accent} gold={scene.line.gold} delay={12} /> : null}
  </AbsoluteFill>
);

export const SCENE_COMPONENTS: Partial<Record<SceneKind, SceneComponent>> = {
  fragments: Scene01Fragments,
  snap: Scene02Snap,
  reveal: Scene03Reveal,
  forms: Scene04Forms,
  nudge: Scene05Nudge,
  report: Scene06Report,
  money: Scene07Money,
  websites: Scene08Websites,
  copilot: Scene09Copilot,
  price: Scene10Price,
  close: Scene11Close,
};

export const sceneComponent = (kind: SceneKind): SceneComponent => SCENE_COMPONENTS[kind] ?? ScenePlaceholder;
