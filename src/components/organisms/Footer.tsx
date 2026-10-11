import React from "react";
import { IconButton } from "../atoms/IconButton";

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest py-10">
      <div className="max-w-360 mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-6">
        {/* ── Left: copyright + version ─────────────────── */}
        <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
          <span className="font-body-sm text-4 text-on-surface-variant">
            © 2025 Okta Daffa Ramadani. Built with passion &amp; clean code
          </span>
          <span className="hidden md:inline text-on-surface-variant/40 select-none">
            ·
          </span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
            v2.5.0-prod
          </span>
        </div>

        {/* ── Right: links + back to top ────────────────── */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/oktadaffa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-medium text-on-surface-variant hover:text-on-surface transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oktadaffa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-medium text-on-surface-variant hover:text-on-surface transition-colors"
          >
            LinkedIn
          </a>
          {/* <IconButton
            icon="keyboard_arrow_up"
            label="Back to top"
            onClick={handleBackToTop}
            className="hover:text-primary"
          /> */}
        </div>
      </div>
    </footer>
  );
};
