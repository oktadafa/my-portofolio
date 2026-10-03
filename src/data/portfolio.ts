import profileImg from "../assets/images/profile.jpg";
import nexusFlowImg from "../assets/images/project-nexus-flow.jpg";
import pulseImg from "../assets/images/project-pulse.jpg";
import auraUiImg from "../assets/images/project-aura-ui.jpg";
import contactImg from "../assets/images/contact-visual.jpg";
import type { Project } from "../types";

export { profileImg, contactImg };

export const projects: Project[] = [
  {
    id: "nexus-flow",
    title: "Nexus Flow — Cloud Orchestrator",
    description:
      "Real-time multi-cloud workflow deployment manager. Features reactive pipeline graphs, edge log streaming, and zero-downtime microservice autoscaling.",
    category: ["web-app", "systems"],
    image: nexusFlowImg,
    tags: [
      { label: "React 19", color: "muted" },
      { label: "TypeScript", color: "secondary" },
      { label: "TanStack", color: "primary" },
      { label: "Supabase", color: "muted" },
    ],
    badge: { label: "v2.1", color: "primary" },
    status: "Production Live",
    github: "https://github.com",
    live: "https://demo.example.com",
    meta: {
      arch: "React 19 + Supabase",
      perf: "99/100 Core Web Vitals",
      scale: "2.5M Events/Day",
    },
    challenges: [
      "Engineered a virtualized canvas graph node engine capable of rendering 1,000+ interactive connections with zero dropped frames using Canvas API + React.",
      "Integrated Supabase Realtime WebSocket channels with TanStack Query optimistic mutations for instantaneous multi-tenant updates.",
      "Reduced time-to-first-render by 68% by splitting heavy code editors and visual node modules into on-demand edge dynamic imports.",
    ],
  },
  {
    id: "pulse-analytics",
    title: "Pulse — High-Throughput Telemetry",
    description:
      "Distributed observability dashboard ingesting event logs across high-load microservices. Powered by asynchronous FastAPI workers and PostgreSQL partitioning.",
    category: ["systems"],
    image: pulseImg,
    tags: [
      { label: "FastAPI", color: "muted" },
      { label: "PostgreSQL", color: "primary" },
      { label: "Vector DB", color: "secondary" },
      { label: "Zustand", color: "muted" },
    ],
    badge: { label: "v1.8", color: "secondary" },
    status: "100k+ RPS Tested",
    github: "https://github.com",
    live: "https://demo.example.com",
    meta: {
      arch: "FastAPI + Postgres Partitioning",
      perf: "Sub-40ms Query SLA",
      scale: "100,000 RPS Tested",
    },
    challenges: [
      "Designed time-series table partitioning inside PostgreSQL to handle hundreds of millions of daily rows without query degradation.",
      "Built FastAPI asynchronous workers utilizing Redis stream pipelines to decouple ingestion bursts from persistence layers.",
      "Created client-side canvas charting modules that render continuous high-frequency time-series graphs without memory leaks.",
    ],
  },
  {
    id: "aura-ui",
    title: "Aura UI — Component & Token Engine",
    description:
      "Headless, unstyled accessible UI building blocks coupled with automated Figma design token synchronizer and zero-runtime Tailwind presets.",
    category: ["web-app", "open-source"],
    image: auraUiImg,
    tags: [
      { label: "TypeScript", color: "muted" },
      { label: "Tailwind CSS", color: "secondary" },
      { label: "Radix UI", color: "tertiary" },
      { label: "Storybook", color: "muted" },
    ],
    badge: { label: "v3.4.0", color: "tertiary" },
    status: "12.8k Stars on GitHub",
    github: "https://github.com",
    live: "https://demo.example.com",
    meta: {
      arch: "TypeScript + Tailwind CSS",
      perf: "0kb Runtime CSS overhead",
      scale: "12,800+ Dev Downloads",
    },
    challenges: [
      "Developed automated GitHub Actions workflow to parse Figma REST API variable tokens and transpile them into typed CSS custom properties.",
      "Enforced 100% WCAG 2.1 AA compliant keyboard navigation and screen-reader ARIA announcements for all complex modals, dropdowns, and comboboxes.",
      "Implemented strict zero-dependency runtime design, achieving maximum tree-shakability for consumer applications.",
    ],
  },
];
