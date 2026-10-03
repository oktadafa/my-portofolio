import React from "react";

export interface MetricChipProps {
  value: string;
  label: string;
  color?: "primary" | "secondary";
}

const valueColorMap: Record<NonNullable<MetricChipProps["color"]>, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export const MetricChip: React.FC<MetricChipProps> = ({
  value,
  label,
  color = "primary",
}) => {
  return (
    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-0.5 shadow-sm">
      <span
        className={[
          "font-sm text-2xl font-bold tracking-tight",
          valueColorMap[color],
        ].join(" ")}
      >
        {value}
      </span>
      <span className="font-medium text-sm text-on-surface-variant uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};
