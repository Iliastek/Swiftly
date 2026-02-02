import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { PlanInfo } from "../data/planDetails";

interface PlanBadgeMobileProps {
  plan: PlanInfo;
  price: number;
  billingCycle: string;
}

export const PlanBadgeMobile: React.FC<PlanBadgeMobileProps> = ({
  plan,
  price,
  billingCycle,
}) => {
  return (
    <div className="lg:hidden mb-6">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-border p-4 bg-gradient-to-r",
          plan.gradient,
          "bg-opacity-10",
        )}
      >
        <div className="absolute inset-0 bg-card opacity-95" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-10 h-10 rounded-full bg-gradient-to-r flex items-center justify-center text-white",
                plan.gradient,
              )}
            >
              {plan.icon}
            </div>
            <div>
              <p className="font-semibold text-foreground">{plan.name}</p>
              <p className="text-sm text-muted-foreground">
                ${price}/mo · {billingCycle === "annual" ? "Annual" : "Monthly"}
              </p>
            </div>
          </div>
          <Link
            to="/pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Change
          </Link>
        </div>
      </div>
    </div>
  );
};
