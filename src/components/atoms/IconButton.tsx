export interface IconButtonProps {
  icon: string; // material symbols name
  label: string; // aria-label
  href?: string;
  onClick?: () => void;
  className?: string;
}

const BASE_CLASSES =
  'w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface bg-surface-container-low hover:bg-surface-container-high border border-surface-container-high transition-colors';

export const IconButton = ({ icon, label, href, onClick, className = '' }: IconButtonProps) => {
  const content = (
    <span className="material-symbols-outlined text-[18px]">{icon}</span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        className={`${BASE_CLASSES} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${BASE_CLASSES} ${className}`}
    >
      {content}
    </button>
  );
};
