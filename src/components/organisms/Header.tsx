import React, { useState } from "react";
import { StatusPip } from "../atoms/StatusPip";
import { NavLink } from "../molecules/NavLink";

/* ── Types ───────────────────────────────────────────────────── */

type Section = "about" | "skills" | "projects" | "contact";

interface NavItem {
  id: Section;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills & Tech", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/* ── Sub-atoms (self-contained, no extra file needed) ─────────── */

interface IconButtonProps {
  icon: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  href,
  onClick,
}) => {
  const cls =
    "inline-flex items-center justify-center w-9 h-9 rounded-lg " +
    "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high " +
    "transition-colors cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cls}
      >
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={cls}>
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </button>
  );
};

interface MobileNavItem {
  id: Section | "overview";
  label: string;
  href: string;
  icon: string;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { id: "overview", label: "Overview", href: "#hero", icon: "terminal" },
  { id: "projects", label: "Projects", href: "#projects", icon: "folder_code" },
  { id: "skills", label: "Stack", href: "#skills", icon: "stacks" },
  { id: "about", label: "History", href: "#about", icon: "work_history" },
  { id: "contact", label: "Contact", href: "#contact", icon: "alternate_email" },
];

/* ── Organism ─────────────────────────────────────────────────── */

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section | "overview">(
    "about",
  );
  const [darkMode, setDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );

  const handleNavClick = (id: Section | "overview") => setActiveSection(id);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 w-full z-50",
          "bg-surface-container-lowest/80 backdrop-blur-xl",
          "border-b border-surface-container-highest",
          "shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
        ].join(" ")}
      >
        <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-margin flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-gutter">
          <div className="flex items-center justify-between gap-2 w-full lg:w-auto">
            {/* ── Left: Logo ──────────────────────────────────────── */}
            <a
              href="#hero"
              className="flex items-center gap-x-2.5 sm:gap-x-4 shrink-0 group min-w-0"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                <span className="font-display font-bold text-primary text-sm leading-none">
                  od
                </span>
                <span className="absolute -bottom-0.5 -right-0.5">
                  <StatusPip color="primary" animate />
                </span>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-semibold text-on-surface text-sm tracking-tight">
                  odr.dev
                </span>
                <span className="font-code-md text-code-md text-on-surface-variant mt-0.5">
                  full-stack engineer
                </span>
              </div>
              {/* Mobile brand label */}
              <div className="flex sm:hidden flex-col truncate">
                <span className="font-mono text-xs tracking-tight text-primary font-semibold flex items-center gap-1.5">
                  odr.dev{" "}
                  <span className="text-outline-variant font-normal">/</span>{" "}
                  <span className="text-on-surface truncate font-geist font-bold text-xs uppercase tracking-wider">
                    OKTA DAFFA RAMADANI
                  </span>
                </span>
                <span className="text-[10px] font-mono text-on-surface-variant leading-none truncate mt-0.5 capitalize">
                  {activeSection === "overview" ? "Overview" : activeSection}
                </span>
              </div>
            </a>

            {/* Mobile right avatar */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <a
                href="#contact"
                className="px-2.5 py-1 rounded-lg bg-primary text-on-primary font-semibold text-xs hover:bg-primary-fixed-dim transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile status bar inside header */}
          <div className="flex sm:hidden items-center gap-2 px-0.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[10px] tracking-wide text-on-surface-variant truncate font-medium">
              Available for high-impact roles &amp; contracts
            </span>
          </div>

          {/* ── Center: Nav (Desktop) ───────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-x-5 p-space-xs rounded-lg bg-surface-container-low/60 border border-surface-container-high">
            {NAV_ITEMS.map(({ id, label, href }) => (
              <NavLink
                key={id}
                href={href}
                label={label}
                isActive={activeSection === id}
                onClick={() => handleNavClick(id)}
              />
            ))}
          </nav>

          {/* ── Right: Actions (Desktop/Tablet) ─────────────────── */}
          <div className="hidden sm:flex items-center gap-space-sm shrink-0">
            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className={[
                "hidden sm:inline-flex items-center gap-x-2",
                "px-3 py-1 rounded-lg",
                "bg-primary text-on-primary font-semibold text-sm",
                "hover:bg-primary-fixed-dim transition-colors",
              ].join(" ")}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ── Mobile Bottom Navigation Bar (<lg) ──────────────────── */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 w-full z-40 bg-surface-container-lowest/90 backdrop-blur-xl border-t border-surface-container-highest shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
      >
        <div className="flex justify-around items-center h-16 px-2">
          {MOBILE_NAV_ITEMS.map(({ id, label, href, icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                className={[
                  "flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary",
                ].join(" ")}
              >
                <span className="material-symbols-outlined text-[20px] leading-none">
                  {icon}
                </span>
                <span className="text-[11px] font-mono tracking-tight">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

