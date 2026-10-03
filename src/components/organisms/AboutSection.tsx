import React from "react";
import profileImg from "../../assets/images/profile.jpg";
import { SectionLabel } from "../atoms/SectionLabel";
import { TechBadge } from "../molecules/TechBadge";

// ─── Frontend SVG Icons ──────────────────────────────────────────────────────

const ReactIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(150 12 12)" />
  </svg>
);

const TypeScriptIcon = (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3 3h18v18H3V3zm10.7 8.7h1.9v6.5h1.9v-6.5h1.9V10h-5.7v1.7zm-7.2 4.1c.4.7 1.1 1.1 2 1.1.9 0 1.5-.4 1.5-1.1 0-.7-.5-.9-1.5-1.3l-.5-.2c-1.3-.5-2.2-1.1-2.2-2.4 0-1.5 1.2-2.5 2.8-2.5 1.2 0 2.1.5 2.7 1.5l-1.4 1c-.3-.5-.7-.8-1.3-.8-.6 0-1 .3-1 .8 0 .5.4.8 1.3 1.1l.5.2c1.6.6 2.4 1.2 2.4 2.6 0 1.6-1.3 2.6-3.1 2.6-1.5 0-2.6-.7-3.1-1.8l1.4-.6z" />
  </svg>
);

const NextjsIcon = (
  <svg
    className="w-5 h-5 text-on-surface flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8l-5.6-7.8v7.8H8.5V7.2h1.8l5.5 7.7V7.2h1.7v9.6h-1.7z" />
  </svg>
);

const TanStackIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 6h16M4 12h10M4 18h16" />
  </svg>
);

const TailwindIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const ZustandIcon = (
  <svg
    className="w-5 h-5 text-tertiary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

// ─── Backend SVG Icons ───────────────────────────────────────────────────────

const FastApiIcon = (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const NodejsIcon = (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
  </svg>
);

const PostgresIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const SupabaseIcon = (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.9 2.2c-.6-.7-1.7-.5-2.1.3L3.1 16.1c-.5.9.2 2 1.3 2h8.5l-1.8 4c-.4.8.4 1.7 1.3 1.4l9.5-13.6c.5-.8-.1-1.9-1.1-1.9h-8.3l1.8-4.2c.2-.6.1-1.2-.2-1.6z" />
  </svg>
);

const RedisIcon = (
  <svg
    className="w-5 h-5 text-error flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3L2 8.5l10 5.5 10-5.5L12 3zm-8 8.8l8 4.4 8-4.4v2.5l-8 4.4-8-4.4v-2.5zm0 4.5l8 4.4 8-4.4v2.5l-8 4.4-8-4.4v-2.5z" />
  </svg>
);

const VectorDbIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

// ─── DevOps SVG Icons ────────────────────────────────────────────────────────

const DockerIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.5 11.5c-.3-.2-1.3-.4-2-.2-.2-.6-.6-1.1-1.2-1.4-.8-.4-1.8-.3-2.5.2-.2-1.1-1-2.1-2.1-2.4-1.3-.4-2.6.2-3.3 1.3-.2-.1-.5-.2-.7-.2-.9 0-1.7.5-2.1 1.3H1v4c0 3.3 2.7 6 6 6h9c4.4 0 8-3.6 8-8 0-.8-.1-1.3-.5-1.6zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2H7V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8z" />
  </svg>
);

const GithubActionsIcon = (
  <svg
    className="w-5 h-5 text-on-surface flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FigmaIcon = (
  <svg
    className="w-5 h-5 text-tertiary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 2h8a4 4 0 014 4v12a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4zm0 4a2 2 0 100 4 2 2 0 000-4zm4 0a2 2 0 100 4 2 2 0 000-4zm-4 6a2 2 0 100 4 2 2 0 000-4zm4 0a2 2 0 100 4 2 2 0 000-4zm-4 6a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const PostmanIcon = (
  <svg
    className="w-5 h-5 text-primary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const VercelIcon = (
  <svg
    className="w-5 h-5 text-on-surface flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

const JestIcon = (
  <svg
    className="w-5 h-5 text-secondary flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

interface TechItem {
  icon: React.ReactNode;
  label: string;
}

interface TechCategory {
  categoryIcon: string;
  categoryIconBg: string;
  categoryIconText: string;
  title: string;
  badge: string;
  badgeColor: "primary" | "secondary" | "tertiary";
  items: TechItem[];
}

const badgeColorMap: Record<
  TechCategory["badgeColor"],
  { text: string; bg: string }
> = {
  primary: { text: "text-primary", bg: "bg-primary/10" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary/10" },
};

const TECH_CATEGORIES: TechCategory[] = [
  {
    categoryIcon: "devices",
    categoryIconBg: "bg-secondary/15",
    categoryIconText: "text-secondary",
    title: "Frontend Architecture",
    badge: "Core Specialization",
    badgeColor: "secondary",
    items: [
      { icon: ReactIcon, label: "React 19" },
      { icon: TypeScriptIcon, label: "TypeScript" },
      { icon: NextjsIcon, label: "Next.js 15" },
      { icon: TanStackIcon, label: "TanStack Query" },
      { icon: TailwindIcon, label: "Tailwind CSS" },
      { icon: ZustandIcon, label: "Zustand / Redux" },
    ],
  },
  {
    categoryIcon: "database",
    categoryIconBg: "bg-primary/15",
    categoryIconText: "text-primary",
    title: "Backend, APIs & Storage",
    badge: "High Throughput",
    badgeColor: "primary",
    items: [
      { icon: FastApiIcon, label: "FastAPI / Python" },
      { icon: NodejsIcon, label: "Node.js / Express" },
      { icon: PostgresIcon, label: "PostgreSQL" },
      { icon: SupabaseIcon, label: "Supabase" },
      { icon: RedisIcon, label: "Redis Cache" },
      { icon: VectorDbIcon, label: "Vector DB (pgvector)" },
    ],
  },
  {
    categoryIcon: "deployed_code",
    categoryIconBg: "bg-tertiary-container/20",
    categoryIconText: "text-tertiary",
    title: "DevOps & Engineering Tools",
    badge: "CI / CD Driven",
    badgeColor: "tertiary",
    items: [
      { icon: DockerIcon, label: "Docker Containers" },
      { icon: GithubActionsIcon, label: "GitHub Actions" },
      { icon: FigmaIcon, label: "Figma Design Token" },
      { icon: PostmanIcon, label: "Postman & OpenAPI" },
      { icon: VercelIcon, label: "Vercel & Cloudflare" },
      { icon: JestIcon, label: "Jest & Playwright" },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col gap-space-xs mb-space-xl">
        <SectionLabel label="Profile & Capabilities" color="primary" />
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Engineered for real-world reliability.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Bridging the divide between high-fidelity user interactions and
          hardened cloud backends. Here is a snapshot of my architectural
          compass and technical toolkit.
        </p>
      </div>

      {/* 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* ── Left: Bio Card (col-span-5) ── */}
        <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-space-lg shadow-md flex flex-col gap-space-lg">
          {/* Profile Row */}
          <div className="flex items-center gap-space-md">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-surface-container-highest shadow-inner flex-shrink-0">
              <img
                src={profileImg}
                alt="Okta Daffa Ramadani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Okta Daffa Ramadani
              </h3>
              <span className="font-code-md text-code-md text-primary">
                Senior Fullstack Software Craftsman
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">
                  location_on
                </span>
                Jakarta / Remote Worldwide
              </span>
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              With over five years of active production engineering, I build
              client-facing web applications where latency is non-negotiable and
              UX flows feel instantaneous.
            </p>
            <p>
              My engineering philosophy centers on{" "}
              <strong className="text-on-surface">strict type safety</strong>,
              composable component models, declarative state flows, and modular
              services that scale gracefully from Day 1 prototypes to millions
              of requests.
            </p>
            <p className="text-on-surface font-medium italic">
              "Obsessed with DX, accessibility, and sub-second load times."
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface font-code-md text-code-md">
              <span className="material-symbols-outlined text-primary text-[18px]">
                verified
              </span>
              <span>Clean Architecture Certified</span>
            </div>
            <span className="font-code-md text-code-md text-on-surface-variant font-mono">
              ODR // 2025
            </span>
          </div>
        </div>

        {/* ── Right: Tech Stack (col-span-7) ── */}
        <div
          id="skills"
          className="lg:col-span-7 flex flex-col gap-space-md scroll-mt-24"
        >
          {TECH_CATEGORIES.map((cat) => {
            const { text: badgeText, bg: badgeBg } =
              badgeColorMap[cat.badgeColor];

            return (
              <div
                key={cat.title}
                className="bg-surface-container-low rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div
                      className={`w-8 h-8 rounded-lg ${cat.categoryIconBg} flex items-center justify-center ${cat.categoryIconText}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {cat.categoryIcon}
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      {cat.title}
                    </h4>
                  </div>
                  <span
                    className={`font-label-caps text-label-caps uppercase ${badgeText} ${badgeBg} px-space-xs py-0.5 rounded`}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Tech Badge Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm">
                  {cat.items.map((item) => (
                    <TechBadge
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
