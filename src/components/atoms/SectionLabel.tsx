export interface SectionLabelProps {
  label: string;
  color?: 'primary' | 'secondary' | 'tertiary';
}

const colorMap: Record<NonNullable<SectionLabelProps['color']>, { text: string; line: string }> = {
  primary: { text: 'text-primary', line: 'bg-primary/40' },
  secondary: { text: 'text-secondary', line: 'bg-secondary/40' },
  tertiary: { text: 'text-tertiary', line: 'bg-tertiary/40' },
};

export const SectionLabel = ({ label, color = 'primary' }: SectionLabelProps) => {
  const { text, line } = colorMap[color];

  return (
    <div className="flex items-center gap-space-xs">
      <span
        className={`font-label-caps text-label-caps uppercase tracking-widest ${text}`}
      >
        {label}
      </span>
      <span className={`w-8 h-px ${line}`} />
    </div>
  );
};
