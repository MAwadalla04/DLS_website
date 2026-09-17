import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  asChild?: boolean;
  children: ReactNode;
};

const variantClass = { default: "button-amber", secondary: "button-muted", outline: "button-ghost", ghost: "text-button" };

export function Button({ className = "", variant = "default", asChild = false, children, ...props }: ButtonProps) {
  const classes = `${variant === "ghost" ? "" : "button"} ${variantClass[variant]} ${className}`.trim();
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ className?: string }>, { className: `${classes} ${children.props.className ?? ""}`.trim() });
  }
  return <button className={classes} {...props}>{children}</button>;
}
