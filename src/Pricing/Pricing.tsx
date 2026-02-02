import React, { useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Check, HelpCircle, X } from "lucide-react";
import { cn } from "../lib/utils";
import pricingData from "./pricingData.json";

type Plan = "basic" | "business" | "enterprise";

interface Feature {
  name: string;
  tooltip?: string;
  basic: boolean | string | number;
  business: boolean | string | number;
  enterprise: boolean | string | number;
}

interface PlanData {
  id: Plan;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
}

interface FeatureSection {
  category?: string;
  items: Feature[];
}

const plans: PlanData[] = pricingData.plans as PlanData[];
const features: FeatureSection[] = pricingData.features as FeatureSection[];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const renderFeatureValue = (value: boolean | string | number) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-green-600" />
      ) : (
        <X className="mx-auto h-5 w-5 text-gray-300" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="mx-auto max-w-4xl w-full">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 font-bold text-4xl text-gray-900">
              Pricing plans
            </h1>
            <p className="text-gray-600 text-lg">
              Try our basic plan risk free for 30 days. Switch plans or cancel
              any time.
            </p>
          </div>

          {/* Toggle */}
          <div className="mb-12 flex justify-center gap-2">
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                isAnnual
                  ? "border-gray-900 bg-white text-gray-900"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
              )}
            >
              Annual pricing
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                !isAnnual
                  ? "border-gray-900 bg-white text-gray-900"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
              )}
            >
              Monthly pricing
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900 text-lg">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-2">
                    <div className="h-5 w-5 rounded-full bg-gray-900" />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="font-bold text-4xl text-gray-900">
                      ${isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-gray-600 text-sm">
                      per month
                    </span>
                  </div>
                </div>
                <Button
                  className={cn(
                    "w-full rounded-lg py-5 font-medium",
                    plan.id === "basic"
                      ? "bg-white text-gray-900 hover:bg-gray-50 border border-gray-900"
                      : "bg-gray-900 text-white hover:bg-gray-800",
                  )}
                >
                  {plan.id === "basic" ? "Start free trial" : "Get started"}
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 text-sm">
                      Basic plan
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 text-sm">
                      Business plan
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 text-sm">
                      Enterprise plan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((section, sectionIdx) => (
                    <React.Fragment key={section.category || sectionIdx}>
                      {section.category && (
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td
                            colSpan={4}
                            className="px-6 py-3 font-semibold text-gray-900 text-sm"
                          >
                            {section.category}
                          </td>
                        </tr>
                      )}
                      {section.items.map((feature, featureIdx) => (
                        <tr
                          key={feature.name}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-700 text-sm">
                                {feature.name}
                              </span>
                              {feature.tooltip && (
                                <HelpCircle className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {renderFeatureValue(feature.basic)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {renderFeatureValue(feature.business)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {renderFeatureValue(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing;
