import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: string; // material symbols icon name, optional
  iconPosition?: "left" | "right";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-fixed shadow-[0_0_16px_rgba(78,222,163,0.25)]",
  ghost:
    "bg-surface-container-high/90 hover:bg-surface-container-highest text-on-surface",
  outline:
    "bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-surface-container-high",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-1 text-sm font-normal rounded-lg",
  md: "px-6 py-3 font-medium rounded-lg",
  lg: "px-8 py-4 text-base font-base rounded-full",
};

const BASE_CLASSES =
  "inline-flex items-center gap-4 font-semibold tracking-wide transition-all duration-200";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  const classes = `${BASE_CLASSES} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const iconEl = icon ? (
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
  ) : null;

  const inner = (
    <>
      {iconPosition === "left" && iconEl}
      {children}
      {iconPosition === "right" && iconEl}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {inner}
    </button>
  );
};
