import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PlanData, FeatureSection } from "../types";
import pricingData from "../pricingData.json";

export const plans: PlanData[] = pricingData.plans as PlanData[];
export const features: FeatureSection[] =
  pricingData.features as FeatureSection[];

export const usePricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const handleGetStarted = (planId: string) => {
    const billingCycle = isAnnual ? "annual" : "monthly";
    navigate(`/register?plan=${planId}&billing=${billingCycle}`);
  };

  const toggleBilling = (annual: boolean) => {
    setIsAnnual(annual);
  };

  return {
    isAnnual,
    toggleBilling,
    handleGetStarted,
    plans,
    features,
  };
};
