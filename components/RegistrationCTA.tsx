import { siteConfig, registrationLabel } from "@/data/site";
import { Button } from "./ui/button";

export function RegistrationCTA({ className = "" }: { className?: string }) {
  const label = registrationLabel();

  if (!siteConfig.registrationUrl) {
    return <div><p className="registration-status">Registration opening soon</p><Button className={className} asChild><a href="#registration-updates">Request registration updates</a></Button></div>;
  }

  return <Button className={className} asChild><a href={siteConfig.registrationUrl} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a></Button>;
}
