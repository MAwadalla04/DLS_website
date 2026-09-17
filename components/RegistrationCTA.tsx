import { siteConfig, registrationLabel } from "@/data/site";
import { Button } from "./ui/button";

export function RegistrationCTA({ className = "" }: { className?: string }) {
  const label = registrationLabel();

  if (!siteConfig.registrationUrl) {
    return <Button className={className} variant="secondary" disabled aria-label="Registration opening soon">{label}</Button>;
  }

  return <Button className={className} asChild><a href={siteConfig.registrationUrl} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a></Button>;
}
