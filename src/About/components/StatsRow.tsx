import React from "react";
import type { Stat } from "../types";

interface StatsRowProps {
  stats: Stat[];
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {stats.map((stat) => {
            const isTickets = stat.label === "Tickets Resolved";
            return (
              <div key={stat.label} className="text-center">
                <div
                  className={`font-bold ${
                    isTickets
                      ? "text-5xl md:text-6xl text-primary"
                      : "text-2xl md:text-3xl text-slate-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`mt-1 ${
                    isTickets
                      ? "text-base font-medium text-slate-600"
                      : "text-sm text-slate-500"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
