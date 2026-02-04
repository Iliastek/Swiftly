import React from "react";
import { Check, HelpCircle, X } from "lucide-react";
import type { FeatureSection } from "../types";

interface FeatureComparisonTableProps {
  features: FeatureSection[];
}

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

export const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({
  features,
}) => {
  return (
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
                {section.items.map((feature) => (
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
  );
};
