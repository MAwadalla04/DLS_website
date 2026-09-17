"use client";

import { createContext, useContext, useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type SheetContextValue = { open: boolean; onOpenChange: (open: boolean) => void };
const SheetContext = createContext<SheetContextValue | null>(null);

export function Sheet({ open, onOpenChange, children }: { open: boolean; onOpenChange: (open: boolean) => void; children: ReactNode }) {
  return <SheetContext.Provider value={{ open, onOpenChange }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ children }: { children: ReactNode }) {
  const context = useContext(SheetContext);
  return <span onClick={() => context?.onOpenChange(true)}>{children}</span>;
}

export function SheetContent({ children, side = "top", className = "", labelledBy = "mobile-navigation-title" }: HTMLAttributes<HTMLElement> & { children: ReactNode; side?: "top" | "right"; labelledBy?: string }) {
  const context = useContext(SheetContext);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!context?.open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") context.onOpenChange(false); };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("menu-is-open");
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.classList.remove("menu-is-open"); };
  }, [context]);
  if (!context?.open) return null;
  return (
    <div className="sheet-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) context.onOpenChange(false); }}>
      <section className={`sheet-content sheet-${side} ${className}`.trim()} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <button ref={closeRef} type="button" className="sheet-close" aria-label="Close navigation" onClick={() => context.onOpenChange(false)}>×</button>
        {children}
      </section>
    </div>
  );
}
