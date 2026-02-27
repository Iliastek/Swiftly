import React from "react";

interface AIModelUsage {
  name: string;
  percentage: number;
  used: number;
  total: number;
  status?: "normal" | "high" | "critical";
}

interface UsageMeterCardProps {
  modelUsage: AIModelUsage[];
}

export const UsageMeterCard: React.FC<UsageMeterCardProps> = ({
  modelUsage,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "high":
        return "bg-orange-500";
      case "critical":
        return "bg-red-500";
      default:
        return "bg-green-500";
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case "high":
        return "High";
      case "critical":
        return "Critical";
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">AI Usage</h2>
        <p className="text-sm text-muted-foreground">
          Your usage of the AI models for solving tickets
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {modelUsage.map((model) => (
          <div key={model.name} className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-3">
              {/* Background Circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted/20"
                />
                {/* Progress Circle */}
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 56 * (1 - model.percentage / 100)
                  }`}
                  className="text-foreground transition-all duration-500"
                  strokeLinecap="round"
                />
              </svg>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-foreground">
                  {model.percentage}%
                </span>
                <span className="text-xs text-muted-foreground">used</span>
              </div>
            </div>

            <h3 className="text-sm font-medium text-foreground mb-1">
              {model.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-2">
              {model.total - model.used} / {model.total} left
            </p>

            {getStatusLabel(model.status) && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                  model.status,
                )}`}
              >
                {getStatusLabel(model.status)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
