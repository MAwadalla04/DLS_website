import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  landingOnly: true,
  name: "Disaster Law Symposium",
  title: "Disaster Law Symposium 2026",
  thesis: "Law at the Crossroads — Strengthening Systems for a New Era of Disasters",
  dateLabel: "October 29, 2026",
  dateState: "confirmed",
  venueLabel: "John Jay College of Criminal Justice",
  venueState: "confirmed",
  registrationUrl: process.env.NEXT_PUBLIC_REGISTRATION_URL ?? "",
  contactEmail: "disasterlawsymposium@oem.nyc.gov",
  organization: "New York City Emergency Management",
  description:
    "A legal symposium for the people who build, govern, and protect emergency systems — with continuing legal education, practical exchange, and a clear-eyed look at what comes next.",
  canonicalUrl: "https://disaster-law-symposium.nyc.gov",
};

export function registrationLabel() {
  return siteConfig.registrationUrl ? "Register now" : "Registration opening soon";
}
