import React from 'react';
import { IconButton } from '../atoms/IconButton';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-highest py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-md">

        {/* ── Left: copyright + version ─────────────────── */}
        <div className="flex flex-wrap items-center gap-space-sm text-center md:text-left">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Okta Daffa Ramadani. Built with passion &amp; clean code
          </span>
          <span className="hidden md:inline text-on-surface-variant/40 select-none">·</span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
            v2.5.0-prod
          </span>
        </div>

        {/* ── Right: links + back to top ────────────────── */}
        <div className="flex items-center gap-space-md">
          <a
            href="https://github.com/oktadaffa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-code-md text-code-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/oktadaffa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-code-md text-code-md text-on-surface-variant hover:text-on-surface transition-colors"
          >
            LinkedIn
          </a>
          <IconButton
            icon="keyboard_arrow_up"
            label="Back to top"
            onClick={handleBackToTop}
            className="hover:text-primary"
          />
        </div>
      </div>
    </footer>
  );
};
