import React from "react";

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "px-6 py-space-xs rounded-lg transition-colors",
        isActive
          ? "bg-surface-container-high text-primary font-medium"
          : "font-code-md text-code-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
      ].join(" ")}
    >
      {label}
    </a>
  );
};
