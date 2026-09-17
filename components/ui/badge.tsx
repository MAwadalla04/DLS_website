import type { HTMLAttributes, ReactNode } from "react";

export function Badge({ children, variant = "default", className = "", ...props }: HTMLAttributes<HTMLSpanElement> & { children: ReactNode; variant?: "default" | "muted" | "outline" }) {
  return <span className={`ui-badge ui-badge-${variant} ${className}`.trim()} {...props}>{children}</span>;
}
