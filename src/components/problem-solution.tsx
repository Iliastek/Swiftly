import React from "react";
import { AlertCircle, ArrowRight, Sparkles } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="relative grid md:grid-cols-2 md:items-center gap-4 md:gap-6">
          {/* Problem Side - Chaotic, Overwhelmed */}
          <div className="relative group">
            <div className="relative rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/20 via-background to-background p-8 md:p-10 shadow-2xl">
              {/* Noise/Pattern overlay for chaos */}
              <div className="absolute inset-0 rounded-2xl opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,0,0.3),transparent_50%)]" />

              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 text-red-400/80">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    The Problem
                  </span>
                </div>

                {/* The 70% Hook - Massive Visual Anchor */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-black tracking-tighter text-red-500/90">
                      70%
                    </span>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-muted-foreground/80">
                    of all tickets are just
                    <span className="block text-2xl md:text-3xl font-bold text-foreground mt-1">
                      routine requests
                    </span>
                  </p>
                </div>

                <div className="pt-4 border-t border-red-500/10">
                  <p className="text-sm text-muted-foreground/60 leading-relaxed">
                    Your first-level support drowning in password resets, status
                    checks, and FAQs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Arrow - Between Cards */}
          <div className="md:hidden flex justify-center -my-2 order-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-lg">
              <ArrowRight
                className="h-6 w-6 text-primary-foreground rotate-90"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Arrow Connector - Transformation (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg shadow-primary/20 ring-4 ring-background">
            <ArrowRight
              className="h-7 w-7 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>

          {/* Solution Side - Clean, Organized */}
          <div className="relative order-3 md:order-none">
            <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-950/20 via-background to-background p-8 md:py-16 md:px-10 shadow-2xl">
              {/* Calm gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-[0.03] bg-[radial-gradient(circle_at_30%_30%,_rgba(34,197,94,0.3),transparent_70%)]" />

              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 text-green-400/80">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    The Solution
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-green-500">
                    Swiftly cleans up
                    <span className="block text-black">
                      before stress builds.
                    </span>
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Automate the routine, elevate your team.
                  </p>
                </div>

                <div className="pt-4 border-t border-green-500/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-green-500">
                        24/7
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Always on
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-green-500">
                        Instant
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Resolution
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
