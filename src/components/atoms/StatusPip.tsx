export interface StatusPipProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  animate?: boolean;
}

const colorMap: Record<NonNullable<StatusPipProps['color']>, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
};

export const StatusPip = ({ color = 'primary', animate = true }: StatusPipProps) => {
  const bg = colorMap[color];

  return (
    <span className="relative flex h-2.5 w-2.5">
      {animate && (
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${bg} opacity-75`}
        />
      )}
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${bg}`} />
    </span>
  );
};
