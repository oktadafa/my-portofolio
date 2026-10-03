import React from 'react';

export interface TerminalWindowProps {
  filename: string;
  nodeVersion?: string;
  children: React.ReactNode;
  statusLeft?: string;
  statusRight?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  filename,
  nodeVersion,
  children,
  statusLeft,
  statusRight,
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden group">
      {/* Titlebar */}
      <div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-error" />
          <span className="w-3 h-3 rounded-full bg-tertiary-container" />
          <span className="w-3 h-3 rounded-full bg-primary" />
        </div>

        {/* Filename */}
        <div className="flex items-center gap-1 text-on-surface-variant font-code-md text-code-md">
          <span className="material-symbols-outlined text-base leading-none">
            terminal
          </span>
          <span>{filename}</span>
        </div>

        {/* Node version badge */}
        {nodeVersion && (
          <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-md text-code-md text-on-surface-variant">
            {nodeVersion}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-space-lg font-code-md text-code-md leading-relaxed overflow-x-auto text-on-surface-variant select-text">
        {children}
      </div>

      {/* Status bar */}
      <div className="px-space-md py-space-xs bg-surface-container-high/60 flex items-center justify-between text-xs font-code-md">
        {statusLeft && (
          <span className="flex items-center gap-1 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            {statusLeft}
          </span>
        )}
        {statusRight && (
          <span className="text-on-surface-variant">{statusRight}</span>
        )}
      </div>
    </div>
  );
};
