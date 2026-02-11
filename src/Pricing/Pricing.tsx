import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { usePricing } from "./hooks/usePricing";
import {
  BillingToggle,
  PricingCard,
  FeatureComparisonTable,
  ConfirmationModal,
} from "./components";

function Pricing() {
  const {
    isAnnual,
    toggleBilling,
    handleGetStarted,
    confirmUpgrade,
    cancelConfirmation,
    confirmingPlan,
    plans,
    features,
  } = usePricing();

  const selectedPlan = plans.find((p) => p.id === confirmingPlan);
  const selectedPrice = selectedPlan
    ? isAnnual
      ? selectedPlan.annualPrice / 12
      : selectedPlan.monthlyPrice
    : 0;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="mx-auto max-w-[1400px] w-full">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 font-bold text-4xl text-gray-900">
              Pricing plans
            </h1>
            <p className="text-gray-600 text-lg">
              Try our basic plan risk free for 30 days. No credit card required.
            </p>
          </div>

          {/* Toggle */}
          <BillingToggle isAnnual={isAnnual} onToggle={toggleBilling} />

          {/* Pricing Cards */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={isAnnual}
                onGetStarted={handleGetStarted}
              />
            ))}
          </div>

          {/* Feature Comparison Table */}
          <FeatureComparisonTable features={features} />
        </div>
      </main>

      {/* Confirmation Modal */}
      {confirmingPlan && selectedPlan && (
        <ConfirmationModal
          planName={selectedPlan.name}
          price={selectedPrice}
          billingCycle={isAnnual ? "annual" : "monthly"}
          onConfirm={confirmUpgrade}
          onCancel={cancelConfirmation}
        />
      )}

      <Footer />
    </div>
  );
}

export default Pricing;
