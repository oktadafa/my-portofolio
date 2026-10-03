// ── Portfolio Data Types ───────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  image: string;
  tags: { label: string; color: 'primary' | 'secondary' | 'tertiary' | 'muted' }[];
  badge: { label: string; color: 'primary' | 'secondary' | 'tertiary' };
  status: string;
  github: string;
  live: string;
  meta: {
    arch: string;
    perf: string;
    scale: string;
  };
  challenges: string[];
}

export interface TechItem {
  label: string;
  icon: React.ReactNode;
  color?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary';
  icon: string;
  iconBg: string;
  iconColor: string;
  items: TechItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FilterCategory = 'all' | 'web-app' | 'systems' | 'open-source';
