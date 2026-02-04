import React from "react";
import type { Founder } from "../types";

interface TeamSectionProps {
  founders: Founder[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ founders }) => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            The Brains Behind Swiftly
          </h2>
          <p className="text-lg text-slate-500">
            Meet the team on a mission to fix customer support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg hover:border-slate-300"
            >
              {/* Runder Avatar-Platzhalter */}
              <div className="mb-6">
                <div className="h-20 w-20 rounded-full bg-slate-200 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Text linksbündig */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {founder.name}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{founder.role}</p>
              <p className="text-slate-600 leading-relaxed italic">
                "{founder.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
