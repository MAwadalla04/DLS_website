import type { Sponsor } from "./types";

export const sponsors: Sponsor[] = [
  {
    id: "nycem",
    name: "New York City Emergency Management",
    tier: "presenting",
    status: "confirmed",
    logo: "/assets/nycem-logo.png",
    description: "Presenting organization and symposium host.",
  },
  {
    id: "presenting-available",
    name: "Presenting partner",
    tier: "presenting",
    status: "available",
    description: "One lead partner position is available for an organization aligned with resilient public systems.",
  },
  {
    id: "supporting-available",
    name: "Supporting partners",
    tier: "supporting",
    status: "available",
    description: "Support the exchange of practical legal knowledge across emergency management, government, and community organizations.",
  },
  {
    id: "community-available",
    name: "Community partners",
    tier: "community",
    status: "available",
    description: "Help broaden access to the symposium for the people and institutions most affected by disasters.",
  },
];
