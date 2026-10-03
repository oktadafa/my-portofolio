import React from 'react';

export interface ProjectTagProps {
  label: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted';
}

const colorMap: Record<NonNullable<ProjectTagProps['color']>, string> = {
  primary: 'text-primary bg-surface-container-high',
  secondary: 'text-secondary bg-surface-container-high',
  tertiary: 'text-tertiary bg-surface-container-high',
  muted: 'text-on-surface-variant bg-surface-container-high',
};

export const ProjectTag: React.FC<ProjectTagProps> = ({
  label,
  color = 'primary',
}) => {
  return (
    <span
      className={[
        'px-space-xs py-0.5 rounded font-code-md text-code-md',
        colorMap[color],
      ].join(' ')}
    >
      {label}
    </span>
  );
};
