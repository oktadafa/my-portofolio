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

/* ── Organism ─────────────────────────────────────────────────── */

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [darkMode, setDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );

  const handleNavClick = (id: Section) => setActiveSection(id);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 w-full z-50",
        "bg-surface-container-lowest/80 backdrop-blur-xl",
        "border-b border-surface-container-highest",
        "shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
      ].join(" ")}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-gutter">
        {/* ── Left: Logo ──────────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-x-4 shrink-0 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20">
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
        </a>

        {/* ── Center: Nav ─────────────────────────────────────── */}
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

        {/* ── Right: Actions ──────────────────────────────────── */}
        <div className="flex items-center gap-space-sm shrink-0">
          {/* Dark mode toggle */}
          {/* <IconButton
            icon={darkMode ? "light_mode" : "dark_mode"}
            label="Toggle dark mode"
            onClick={toggleDarkMode}
          /> */}

          {/* GitHub */}
          {/* <IconButton icon="code" label="GitHub" href="https://github.com" /> */}

          {/* LinkedIn */}
          {/* <IconButton
            icon="work"
            label="LinkedIn"
            href="https://linkedin.com"
          /> */}

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
            {/* <span className="material-symbols-outlined text-[16px]">
              terminal
            </span> */}
            Get in Touch
          </a>

          {/* Profile avatar */}
          {/* <div
            aria-label="Profile"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
};
