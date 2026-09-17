export type SpeakerStatus = "confirmed" | "proposed";

export type Speaker = {
  id: string;
  name: string;
  title: string;
  organization: string;
  biography: string;
  summary: string;
  image?: string;
  status: SpeakerStatus;
  published: boolean;
  sourceNote?: string;
};

export type SessionType =
  | "arrival"
  | "remarks"
  | "course"
  | "break"
  | "keynote"
  | "reception";

export type Session = {
  id: string;
  order: number;
  title: string;
  type: SessionType;
  time: string;
  shortTime: string;
  description: string;
  cle?: string;
  objectives?: string[];
  speakerIds?: string[];
  note?: string;
};

export type Sponsor = {
  id: string;
  name: string;
  tier: "presenting" | "supporting" | "community";
  status: "confirmed" | "available";
  logo?: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  thesis: string;
  dateLabel: string;
  dateState: "tba" | "confirmed";
  venueLabel: string;
  venueState: "tba" | "proposed" | "confirmed";
  registrationUrl: string;
  contactEmail: string;
  organization: string;
  description: string;
  canonicalUrl: string;
};

export type VenueInfo = {
  name: string;
  status: "to-be-announced" | "proposed" | "confirmed";
  address: string;
  neighborhood: string;
  transit: string[];
  accessibility: string[];
  accommodations: string;
  mapUrl: string;
};
