import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import type { PlanData, FeatureSection } from "../types";
import pricingData from "../pricingData.json";

export const plans: PlanData[] = pricingData.plans as PlanData[];
export const features: FeatureSection[] =
  pricingData.features as FeatureSection[];

export const usePricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [confirmingPlan, setConfirmingPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();
  }, []);

  const handleGetStarted = (planId: string) => {
    if (isLoggedIn) {
      // Show confirmation
      setConfirmingPlan(planId);
    } else {
      // Not logged in → go to register
      const billingCycle = isAnnual ? "annual" : "monthly";
      navigate(`/register?plan=${planId}&billing=${billingCycle}`);
    }
  };

  const confirmUpgrade = async () => {
    if (!confirmingPlan) return;

    const billingCycle = isAnnual ? "annual" : "monthly";
    const plan = plans.find((p) => p.id === confirmingPlan);
    if (!plan) return;

    const price = isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice;

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    // Check if subscription exists
    const { data: existing } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (existing) {
      // Update existing subscription
      await supabase
        .from("subscriptions")
        .update({
          plan_id: confirmingPlan,
          billing_cycle: billingCycle,
          price: price,
          status: "active",
        })
        .eq("user_id", user.id);
    } else {
      // Create new subscription
      await supabase.from("subscriptions").insert({
        user_id: user.id,
        plan_id: confirmingPlan,
        billing_cycle: billingCycle,
        price: price,
        status: "active",
      });
    }

    setConfirmingPlan(null);
    navigate("/dashboard");
  };

  const cancelConfirmation = () => {
    setConfirmingPlan(null);
  };

  const toggleBilling = (annual: boolean) => {
    setIsAnnual(annual);
  };

  return {
    isAnnual,
    toggleBilling,
    handleGetStarted,
    confirmUpgrade,
    cancelConfirmation,
    confirmingPlan,
    plans,
    features,
  };
};
