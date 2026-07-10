import React from "react";
import {
  coldOpen,
  thesis,
  agentWorld,
  developerWorld,
  communityWorld,
} from "../timeline";
import { ShotSegment } from "./ShotSegment";
import { Finale } from "./Finale";

/**
 * One component per segment (thin wrappers over the data-driven ShotSegment,
 * plus the bespoke Finale). Imported by the master edit.
 */
export const ColdOpen: React.FC = () => <ShotSegment segment={coldOpen} />;
export const Thesis: React.FC = () => <ShotSegment segment={thesis} />;
export const AgentWorld: React.FC = () => <ShotSegment segment={agentWorld} />;
export const DeveloperWorld: React.FC = () => <ShotSegment segment={developerWorld} />;
export const CommunityWorld: React.FC = () => <ShotSegment segment={communityWorld} />;
export { Finale };
