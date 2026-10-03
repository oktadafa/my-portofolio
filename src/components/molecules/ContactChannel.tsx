import React, { useState } from 'react';

export interface ContactChannelProps {
  label: string;
  value: string;
}

export const ContactChannel: React.FC<ContactChannelProps> = ({
  label,
  value,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container">
      {/* Left: label + value */}
      <div className="flex flex-col gap-0.5">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
          {label}
        </span>
        <span className="font-code-md text-code-md text-on-surface">{value}</span>
      </div>

      {/* Right: copy button */}
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Copied!' : `Copy ${label}`}
        className="flex items-center gap-1 px-space-sm py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors font-code-md text-code-md text-on-surface-variant hover:text-on-surface"
      >
        {copied ? (
          <>
            <span className="material-symbols-outlined text-base leading-none text-primary">
              check
            </span>
            <span className="text-primary">Copied!</span>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-base leading-none">
              content_copy
            </span>
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};
