import React from 'react';

export interface TechBadgeProps {
  label: string;
  icon: React.ReactNode;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, icon }) => {
  return (
    <div className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-code-md text-code-md text-on-surface">{label}</span>
    </div>
  );
};
