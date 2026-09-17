import type { HTMLAttributes, ReactNode } from "react";

export function Alert({ children, variant = "default", className = "", ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode; variant?: "default" | "info" }) {
  return <div role="status" className={`ui-alert ui-alert-${variant} ${className}`.trim()} {...props}>{children}</div>;
}

export function AlertIcon({ children = "i" }: { children?: ReactNode }) {
  return <span className="ui-alert-icon" aria-hidden="true">{children}</span>;
}
