import React, { useState } from "react";
import { StatusPip } from "../atoms/StatusPip";
import { MetricChip } from "../molecules/MetricChip";

/* ── TerminalWindow ───────────────────────────────────────────── */

interface TerminalWindowProps {
  filename: string;
  nodeVersion: string;
  statusLeft: string;
  statusRight: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  filename,
  nodeVersion,
  statusLeft,
  statusRight,
}) => (
  <div className="rounded-xl border border-surface-container-highest bg-surface-container-lowest overflow-hidden shadow-2xl">
    {/* Title bar */}
    <div className="flex items-center justify-between px-6 py-2 bg-surface-container border-b border-surface-container-highest">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-error/70" />
        <span className="w-3 h-3 rounded-full bg-tertiary/50" />
        <span className="w-3 h-3 rounded-full bg-primary/60" />
      </div>
      <span className="font-code-md text-code-md text-on-surface-variant">
        {filename}
      </span>
      <span className="font-code-md text-code-md text-on-surface-variant">
        {nodeVersion}
      </span>
    </div>

    {/* Code body */}
    <pre className="px-6 py-4 font-mono text-[13px] leading-[1.7] overflow-x-auto text-on-surface-variant">
      <code>
        {/* Line 1 */}
        <span className="text-tertiary">import</span>
        {" type { "}
        <span className="text-secondary">PortfolioConfig</span>
        {" } "}
        <span className="text-tertiary">from</span>{" "}
        <span className="text-primary">'@types/portfolio'</span>
        {";"}
        {"\n"}
        {"\n"}
        {/* Line 3 */}
        <span className="text-tertiary">const</span>{" "}
        <span className="text-secondary">config</span>
        {": "}
        <span className="text-secondary">PortfolioConfig</span>
        {" = {\n"}
        {/* Line 4 */}
        {"  "}
        <span className="text-secondary">owner</span>
        {": "}
        <span className="text-primary">'Okta Dafa Ramadhan'</span>
        {",\n"}
        {/* Line 5 */}
        {"  "}
        <span className="text-secondary">role</span>
        {": "}
        <span className="text-primary">'Full-Stack Engineer'</span>
        {",\n"}
        {/* Line 6 */}
        {"  "}
        <span className="text-secondary">location</span>
        {": "}
        <span className="text-primary">'Remote · Open to Relocation'</span>
        {",\n"}
        {/* Line 8 */}
        {"  "}
        <span className="text-secondary">stack</span>
        {": {\n"}
        {/* Line 9 */}
        {"    "}
        <span className="text-secondary">frontend</span>
        {": ["}
        <span className="text-primary">'React'</span>
        {", "}
        <span className="text-primary">'Next.js'</span>
        {", "}
        <span className="text-primary">'TypeScript'</span>
        {"],\n"}
        {/* Line 10 */}
        {"    "}
        <span className="text-secondary">backend</span>
        {": ["}
        <span className="text-primary">'Node.js'</span>
        {", "}
        <span className="text-primary">'Go'</span>
        {", "}
        <span className="text-primary">'PostgreSQL'</span>
        {"],\n"}
        {/* Line 11 */}
        {"    "}
        <span className="text-secondary">infra</span>
        {": ["}
        <span className="text-primary">'Docker'</span>
        {", "}
        <span className="text-primary">'Kubernetes'</span>
        {", "}
        <span className="text-primary">'AWS'</span>
        {"],\n"}
        {"  },\n"}
        {/* Line 14 */}
        {"  "}
        <span className="text-secondary">metrics</span>
        {": {\n"}
        {/* Line 15 */}
        {"    "}
        <span className="text-secondary">yearsExperience</span>
        {": "}
        <span className="text-primary-fixed">5</span>
        {",\n"}
        {/* Line 16 */}
        {"    "}
        <span className="text-secondary">shippedApps</span>
        {": "}
        <span className="text-primary-fixed">32</span>
        {",\n"}
        {/* Line 17 */}
        {"    "}
        <span className="text-secondary">openSourceContribs</span>
        {": "}
        <span className="text-primary-fixed">120</span>
        {",\n"}
        {"  },\n"}
        {/* Line 20 */}
        {"  "}
        <span className="text-secondary">availability</span>
        {": {\n"}
        {/* Line 21 */}
        {"    "}
        <span className="text-secondary">status</span>
        {": "}
        <span className="text-primary">'available'</span>
        {",\n"}
        {/* Line 22 */}
        {"    "}
        <span className="text-secondary">startDate</span>
        {": "}
        <span className="text-secondary-fixed">new</span>{" "}
        <span className="text-primary-fixed">Date</span>
        {"("}
        <span className="text-primary">'2025-01-01'</span>
        {"),\n"}
        {"  },\n"}
        {"};\n"}
        {/* Line 25 */}
        <span className="text-tertiary">export default</span>
        {" config;\n"}
      </code>
    </pre>

    {/* Status bar */}
    <div className="flex items-center justify-between px-6 py-2 bg-surface-container border-t border-surface-container-highest">
      <span className="font-medium text-sm text-primary">{statusLeft}</span>
      <span className="font-medium text-sm text-on-surface-variant">
        {statusRight}
      </span>
    </div>
  </div>
);

/* ── Organism ─────────────────────────────────────────────────── */

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("oktadafa@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="w-full pt-6 pb-10 flex flex-col justify-center "
    >
      <div className="max-w-[1440px] mx-auto  w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* ── Left col ──────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-y-10">
            {/* Status badge */}
            <div className="inline-flex items-center gap-x-2 self-start px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <StatusPip color="primary" animate />
              <span className="font-medium text-sm text-primary">
                Available for high-impact roles &amp; contracts
              </span>
            </div>

            {/* Headline */}
            <h1
              className={[
                "font-geist font-bold text-6xl text-on-surface",
                "tracking-tight leading-[1.08]",
              ].join(" ")}
            >
              Architecting{" "}
              <span
                className={[
                  "bg-gradient-to-r from-primary via-primary-fixed to-secondary",
                  "bg-clip-text text-transparent",
                ].join(" ")}
              >
                resilient web systems
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-geist font-normal text-body-lg text-on-surface-variant max-w-[52ch]">
              Full-stack engineer crafting production-grade applications — from
              pixel-perfect interfaces to distributed back-end architectures —
              with a relentless focus on performance, reliability, and developer
              experience.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-x-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className={[
                  "inline-flex items-center gap-x-2",
                  "px-8 py-4 rounded-lg",
                  "bg-primary text-on-primary font-semibold text-sm",
                  "hover:bg-primary-fixed-dim transition-colors",
                ].join(" ")}
              >
                {/* <span className="material-symbols-outlined text-[18px]">
                  rocket_launch
                </span> */}
                Explore Projects
              </a>

              {/* Ghost CTA */}
              <a
                href="#contact"
                className={[
                  "inline-flex items-center gap-x-2",
                  "px-8 py-4 rounded-lg",
                  "border border-surface-container-highest text-on-surface-variant",
                  "hover:bg-surface-container-low hover:text-on-surface transition-colors font-semibold text-sm",
                ].join(" ")}
              >
                {/* <span className="material-symbols-outlined text-[18px]">
                  forum
                </span> */}
                Get in Touch
              </a>

              {/* Email copy button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={[
                  "inline-flex items-center gap-x-2",
                  "px-8 py-4 rounded-lg",
                  "border border-surface-container-highest font-code-md text-code-md",
                  copied
                    ? "text-primary border-primary/30 bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low",
                  "transition-colors",
                ].join(" ")}
              >
                {/* <span className="material-symbols-outlined text-[15px]">
                  {copied ? "check_circle" : "content_copy"}
                </span> */}
                {copied ? "Copied!" : "oktadafa@example.com"}
              </button>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-x-10 max-w-100">
              <MetricChip value="5+" label="Years Experience" color="primary" />
              <MetricChip value="32+" label="Shipped Apps" color="secondary" />
            </div>
          </div>

          {/* ── Right col ─────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <TerminalWindow
              filename="portfolio.config.ts"
              nodeVersion="node v22.11.0"
              statusLeft="Compiled cleanly in 14ms"
              statusRight="UTF-8 · Git: main [synced]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
