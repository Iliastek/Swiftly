import React from "react";
import type { Value } from "../types";

interface ValuesSectionProps {
  values: Value[];
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-slate-500">
            The principles that guide everything we build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg hover:border-slate-300"
              >
                {/* Icon in farbigem Kreis - größer */}
                {Icon && (
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${value.bgColor}`}
                  >
                    <Icon
                      className={`h-8 w-8 ${value.color}`}
                      strokeWidth={2}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
