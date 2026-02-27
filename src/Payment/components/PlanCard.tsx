import React from "react";
import { SelectedPlanData } from "../types";

interface PlanCardProps {
  plan: SelectedPlanData;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div
      className={`mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm sm:text-base">
            {plan.icon}
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg">{plan.name}</h3>
            <p className="text-white/80 text-xs sm:text-sm">
              {plan.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-white/80 text-xs sm:text-sm mb-1">
              Billing Cycle
            </p>
            <p className="font-semibold text-sm sm:text-base capitalize">
              {plan.billingCycle}
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-xs sm:text-sm mb-1">Price</p>
            <p className="font-bold text-2xl sm:text-3xl">${plan.price}</p>
            <p className="text-white/80 text-xs">per month</p>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
      <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
    </div>
  );
};
