import React from "react";
import { cn } from "../../lib/utils";

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({
  isAnnual,
  onToggle,
}) => {
  return (
    <div className="mb-12 flex justify-center gap-2">
      <button
        onClick={() => onToggle(true)}
        className={cn(
          "relative rounded-md border px-4 py-2 text-sm font-medium transition-colors",
          isAnnual
            ? "border-gray-900 bg-white text-gray-900"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
        )}
      >
        Annual pricing
        <span className="absolute -top-3 -right-3 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
          -20%
        </span>
      </button>
      <button
        onClick={() => onToggle(false)}
        className={cn(
          "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
          !isAnnual
            ? "border-gray-900 bg-white text-gray-900"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
        )}
      >
        Monthly pricing
      </button>
    </div>
  );
};
