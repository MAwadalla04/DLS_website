import type { HTMLAttributes, ReactNode } from "react";

export function Accordion({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode; type?: "single" | "multiple"; collapsible?: boolean }) {
  return <div className={`ui-accordion ${className}`.trim()} {...props}>{children}</div>;
}

export function AccordionItem({ children, value: _value, className = "", ...props }: HTMLAttributes<HTMLDetailsElement> & { children: ReactNode; value: string }) {
  return <details className={`ui-accordion-item ${className}`.trim()} {...props}>{children}</details>;
}

export function AccordionTrigger({ children, className = "", ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return <summary className={`ui-accordion-trigger ${className}`.trim()} {...props}>{children}<span aria-hidden="true">+</span></summary>;
}

export function AccordionContent({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`ui-accordion-content ${className}`.trim()} {...props}>{children}</div>;
}
