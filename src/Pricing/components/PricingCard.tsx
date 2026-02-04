import React from "react";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import type { PlanData } from "../types";

interface PricingCardProps {
  plan: PlanData;
  isAnnual: boolean;
  onGetStarted: (planId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  isAnnual,
  onGetStarted,
}) => {
  const isBusiness = plan.id === "business";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all",
        isBusiness
          ? "border-primary shadow-lg scale-105 z-10"
          : "border-gray-200",
      )}
    >
      {isBusiness && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="mb-1 font-semibold text-gray-900 text-lg">
            {plan.name}
          </h3>
          <p className="text-gray-600 text-sm">{plan.description}</p>
        </div>
        <div
          className={cn(
            "rounded-lg p-2",
            isBusiness ? "bg-primary/10" : "bg-gray-100",
          )}
        >
          <div
            className={cn(
              "h-5 w-5 rounded-full",
              isBusiness ? "bg-primary" : "bg-gray-900",
            )}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="font-bold text-4xl text-gray-900">
            ${isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice}
          </span>
          <span className="ml-1 text-gray-600 text-sm">per month</span>
        </div>
      </div>

      {/* Quick Feature List */}
      <ul className="mb-6 space-y-3">
        <li className="flex items-center gap-2 text-sm text-gray-700">
          <Check className="h-4 w-4 text-green-600" />
          <span>
            {plan.id === "basic" && "Essential analytics"}
            {plan.id === "business" && "Advanced reporting"}
            {plan.id === "enterprise" && "Custom solutions"}
          </span>
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700">
          <Check className="h-4 w-4 text-green-600" />
          <span>
            {plan.id === "basic" && "Up to 5 users"}
            {plan.id === "business" && "Unlimited users"}
            {plan.id === "enterprise" && "Dedicated agent"}
          </span>
        </li>
      </ul>

      <Button
        onClick={() => onGetStarted(plan.id)}
        variant={isBusiness ? "default" : "outline"}
        className={cn(
          "w-full rounded-lg py-5 font-medium",
          isBusiness && "shadow-md",
        )}
      >
        {plan.id === "basic"
          ? "Start free trial"
          : isBusiness
            ? "Get started"
            : "Contact Sales"}
      </Button>
    </div>
  );
};
