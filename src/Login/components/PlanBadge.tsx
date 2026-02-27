import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { PlanInfo } from "../../Register/data/planDetails";

interface PlanBadgeProps {
  plan: PlanInfo;
  price: number;
  billingCycle: string;
}

export const PlanBadge: React.FC<PlanBadgeProps> = ({
  plan,
  price,
  billingCycle,
}) => {
  return (
    <div className="mb-6">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-border p-4",
          "bg-gradient-to-r",
          plan.gradient,
        )}
      >
        <div className="absolute inset-0 bg-card opacity-95" />
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full bg-gradient-to-r flex items-center justify-center text-white shrink-0",
                  plan.gradient,
                )}
              >
                {plan.icon}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Selected Plan
                </p>
                <p className="text-xs text-muted-foreground">
                  Continue with your choice
                </p>
              </div>
            </div>
            <Link
              to="/pricing"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Change
            </Link>
          </div>
          <div className="flex items-baseline justify-between pt-3 border-t border-border/50">
            <div>
              <p className="font-bold text-foreground text-lg">{plan.name}</p>
              <p className="text-xs text-muted-foreground">
                {billingCycle === "annual"
                  ? "Annual billing"
                  : "Monthly billing"}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground text-lg">
                ${price}
                <span className="text-sm font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
              {billingCycle === "annual" && (
                <p className="text-xs text-muted-foreground">
                  ${(price * 12).toFixed(2)}/year
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
