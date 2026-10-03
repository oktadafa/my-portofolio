export interface BadgeProps {
  label: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted';
  className?: string;
}

const colorMap: Record<NonNullable<BadgeProps['color']>, string> = {
  primary: 'text-primary bg-primary/10',
  secondary: 'text-secondary bg-secondary/10',
  tertiary: 'text-tertiary bg-tertiary/10',
  muted: 'text-on-surface-variant bg-surface-container-high',
};

export const Badge = ({ label, color = 'muted', className = '' }: BadgeProps) => {
  return (
    <span
      className={`font-code-md text-code-md rounded px-space-xs py-0.5 ${colorMap[color]} ${className}`}
    >
      {label}
    </span>
  );
};
