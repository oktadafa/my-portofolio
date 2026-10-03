import { useState } from 'react';
import { projects } from '../../data/portfolio';
import type { FilterCategory, Project } from '../../types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { SectionLabel } from '../atoms/SectionLabel';
import { ProjectTag } from '../molecules/ProjectTag';

// ── Sub-component interfaces ──────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onViewDetails: (id: string) => void;
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

// ── Filter tab definitions ────────────────────────────────────────────────────

interface FilterTab {
  value: FilterCategory;
  label: string;
  count?: number;
}

const FILTER_TABS: FilterTab[] = [
  { value: 'all', label: 'All', count: projects.length },
  { value: 'web-app', label: 'Web Apps' },
  { value: 'systems', label: 'Systems' },
  { value: 'open-source', label: 'Open Source' },
];

// ── ProjectCard ───────────────────────────────────────────────────────────────

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const { id, title, description, image, tags, badge, status, github, live } = project;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-surface-container-low shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      {/* Titlebar */}
      <div className="px-space-md py-space-sm bg-surface-container-high/80 flex items-center justify-between">
        {/* Three window dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-error/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        </div>
        {/* Filename-style URL */}
        <span className="font-code-md text-code-md text-on-surface-variant truncate max-w-[140px]">
          ~/{id}.config
        </span>
        {/* Badge */}
        <Badge label={badge.label} color={badge.color} />
      </div>

      {/* Image */}
      <div className="relative w-full h-48 bg-surface-container-highest overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/70 via-transparent to-transparent pointer-events-none" />
        {/* Status label */}
        <span className="absolute bottom-2 left-3 font-code-md text-code-md text-on-surface bg-surface-container-low/90 backdrop-blur-sm px-space-xs py-0.5 rounded">
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-space-lg flex flex-col gap-space-sm flex-1">
        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
          {description}
        </p>
        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-space-xs">
          {tags.map((tag) => (
            <ProjectTag key={tag.label} label={tag.label} color={tag.color} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-space-lg pb-space-lg pt-0 flex items-center justify-between">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onViewDetails(id)}
          icon="open_in_new"
          iconPosition="right"
        >
          View Details
        </Button>

        <div className="flex items-center gap-1.5">
          {/* GitHub icon button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-150"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
          </a>
          {/* Live icon button */}
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-150"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// ── ProjectDetailModal ────────────────────────────────────────────────────────

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  const isOpen = project !== null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project?.title ?? 'Project details'}
      className={[
        'fixed inset-0 z-50 p-space-md bg-surface-container-lowest/80 backdrop-blur-md',
        'transition-opacity duration-200',
        isOpen ? 'flex items-center justify-center opacity-100' : 'hidden opacity-0',
      ].join(' ')}
      onClick={onClose}
    >
      {project && (
        <div
          className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-low rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-space-lg py-space-md bg-surface-container-low border-b border-surface-container-high/60 backdrop-blur-sm">
            <h2 className="font-headline-sm text-headline-sm text-on-surface truncate pr-space-md">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-150 shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-space-lg p-space-lg">
            {/* Hero image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-surface-container-highest">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/50 to-transparent pointer-events-none" />
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              {(
                [
                  { key: 'arch', label: 'Architecture', icon: 'hub', color: 'primary' },
                  { key: 'perf', label: 'Performance', icon: 'speed', color: 'secondary' },
                  { key: 'scale', label: 'Scale', icon: 'stacked_line_chart', color: 'primary' },
                ] as const
              ).map(({ key, label, icon, color }) => (
                <div
                  key={key}
                  className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-xs shadow-sm"
                >
                  <div className={`flex items-center gap-1.5 ${color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                    <span className="material-symbols-outlined text-[18px]">{icon}</span>
                    <span className="font-code-md text-code-md uppercase tracking-wider text-on-surface-variant">
                      {label}
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface leading-snug">
                    {project.meta[key]}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-sm">
                About
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-sm">
                Engineering Challenges
              </h3>
              <ul className="flex flex-col gap-space-sm">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-space-sm items-start">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action links */}
            <div className="flex items-center gap-space-md pt-space-xs border-t border-surface-container-high/60">
              <Button
                variant="primary"
                size="md"
                href={project.live}
                icon="open_in_new"
                iconPosition="right"
              >
                Live Demo
              </Button>
              <Button
                variant="outline"
                size="md"
                href={project.github}
                icon="code"
                iconPosition="left"
              >
                View Source
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── ProjectsSection (Organism) ────────────────────────────────────────────────

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  const openProject = projects.find((p) => p.id === openProjectId) ?? null;

  return (
    <>
      <section id="projects" className="w-full py-space-xl scroll-mt-24">
        {/* Section header + filter row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-lg mb-space-xl">
          {/* Header */}
          <div className="flex flex-col gap-space-sm">
            <SectionLabel label="Selected Work" color="primary" />
            <h2 className="font-display-md text-display-md text-on-surface">
              Featured{' '}
              <span className="text-primary">Projects</span>
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              A curated selection of production-grade systems — from cloud orchestrators to
              open-source component engines.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-surface-container-low shadow-sm self-start sm:self-auto shrink-0">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={[
                    'px-space-md py-space-xs rounded-lg font-code-md text-code-md transition-all duration-150',
                    isActive
                      ? 'bg-surface-container-high text-primary font-medium shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface',
                  ].join(' ')}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span
                      className={[
                        'ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold',
                        isActive
                          ? 'bg-primary/20 text-primary'
                          : 'bg-surface-container-high text-on-surface-variant',
                      ].join(' ')}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-stretch">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setOpenProjectId}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-space-xl gap-space-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[48px] opacity-40">
              folder_off
            </span>
            <p className="font-body-md text-body-md">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* Detail modal — rendered outside section to escape stacking contexts */}
      <ProjectDetailModal project={openProject} onClose={() => setOpenProjectId(null)} />
    </>
  );
};
