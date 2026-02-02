import React from "react";
import { Sparkles, Zap, Crown } from "lucide-react";

export interface PlanInfo {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
}

export const planDetails: Record<string, PlanInfo> = {
  basic: {
    id: "basic",
    name: "Basic Plan",
    description: "Perfect for getting started",
    monthlyPrice: 10,
    annualPrice: 96,
    icon: React.createElement(Sparkles, { className: "h-5 w-5" }),
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "3 Support agents",
      "500 Monthly tickets",
      "Email support",
      "Knowledge base",
    ],
  },
  business: {
    id: "business",
    name: "Business Plan",
    description: "For growing teams",
    monthlyPrice: 20,
    annualPrice: 192,
    icon: React.createElement(Zap, { className: "h-5 w-5" }),
    gradient: "from-purple-500 to-pink-500",
    features: [
      "10 Support agents",
      "5,000 Monthly tickets",
      "Live chat widget",
      "Mobile apps",
    ],
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "For large organizations",
    monthlyPrice: 40,
    annualPrice: 384,
    icon: React.createElement(Crown, { className: "h-5 w-5" }),
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Unlimited agents",
      "Unlimited tickets",
      "SLA management",
      "Priority support",
    ],
  },
};

export const calculatePrice = (
  plan: PlanInfo,
  billingCycle: string,
): number => {
  return billingCycle === "annual" ? plan.annualPrice / 12 : plan.monthlyPrice;
};
