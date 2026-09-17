import type { HTMLAttributes } from "react";

export function Separator({ orientation = "horizontal", decorative = true, className = "", ...props }: HTMLAttributes<HTMLDivElement> & { orientation?: "horizontal" | "vertical"; decorative?: boolean }) {
  return <div role={decorative ? undefined : "separator"} aria-orientation={decorative ? undefined : orientation} className={`ui-separator ui-separator-${orientation} ${className}`.trim()} {...props} />;
}
