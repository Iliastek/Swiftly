import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { PlanInfo } from "../data/planDetails";

interface PlanCardProps {
  plan: PlanInfo;
  price: number;
  billingCycle: string;
  isVisible: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  price,
  billingCycle,
  isVisible,
}) => {
  return (
    <div
      className={cn(
        "hidden lg:flex flex-col w-80 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border bg-card shadow-lg h-full",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-5",
          `before:${plan.gradient}`,
        )}
      >
        {/* Animated gradient background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-[0.08]",
            plan.gradient,
          )}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br blur-2xl opacity-30",
              plan.gradient,
            )}
          />
          <div
            className={cn(
              "absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br blur-2xl opacity-20",
              plan.gradient,
            )}
          />
        </div>

        <div className="relative p-6">
          {/* Plan badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm font-medium mb-4 bg-gradient-to-r",
              plan.gradient,
            )}
          >
            {plan.icon}
            <span>Selected Plan</span>
          </div>

          {/* Plan name and description */}
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {plan.name}
          </h2>
          <p className="text-muted-foreground mb-6">{plan.description}</p>

          {/* Price display */}
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span
                className={cn(
                  "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                  plan.gradient,
                )}
              >
                ${price}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {billingCycle === "annual" ? (
                <>Billed annually (${plan.annualPrice}/year)</>
              ) : (
                <>Billed monthly</>
              )}
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              What's included:
            </p>
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r flex items-center justify-center",
                    plan.gradient,
                  )}
                >
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Change plan link */}
          <div className="mt-6 pt-6 border-t border-border">
            <Link
              to="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              ← Change plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
