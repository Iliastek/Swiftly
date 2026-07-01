import React from "react";
import {
  ArrowDownRight,
  Bot,
  CheckCircle2,
  Clock3,
  CornerDownRight,
  MessageSquareText,
  MoveRight,
} from "lucide-react";

const ticketStack = [
  {
    id: "#1284",
    title: "Password reset again",
    detail: "Waiting 18 min",
    className: "rotate-[-2deg] md:translate-x-2",
  },
  {
    id: "#1285",
    title: "Where is my order?",
    detail: "Same question, third time today",
    className: "rotate-[1.5deg] -mt-3 md:ml-10",
  },
  {
    id: "#1286",
    title: "Can I change my invoice?",
    detail: "Needs policy answer",
    className: "rotate-[-1deg] -mt-3 md:ml-4",
  },
];

const resolvedFlow = [
  "Intent detected",
  "Policy matched",
  "Reply sent",
  "Human notified only if needed",
];

export function ProblemSolution() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden border-y bg-background py-10 md:py-14">
          <div className="relative grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-4">
            <div className="relative min-h-[430px] px-2 sm:px-6 md:min-h-[500px] md:pl-8">
              <h2 className="absolute left-3 top-3 text-3xl font-semibold tracking-tight text-foreground md:left-8 md:text-5xl">
                Queue Pressure
              </h2>

              <div className="relative z-10 ml-auto mt-14 max-w-[440px] md:ml-0 md:mt-20">
                <div className="mb-7 max-w-[360px]">
                  <p className="text-sm leading-6 text-muted-foreground">
                    First-level teams do not lose time on one dramatic issue.
                    They lose it in small repeats.
                  </p>
                </div>

                <div className="space-y-0">
                  {ticketStack.map((ticket) => (
                    <div
                      className={`relative max-w-[390px] border bg-card p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${ticket.className}`}
                      key={ticket.id}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-mono text-xs text-muted-foreground">
                            {ticket.id}
                          </span>
                          <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                            {ticket.title}
                          </h3>
                        </div>
                        <Clock3 className="mt-1 h-4 w-4 text-amber-600" />
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {ticket.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-end gap-4">
                  <span className="text-7xl font-semibold tracking-tight text-foreground md:text-8xl">
                    70%
                  </span>
                  <p className="max-w-40 pb-3 text-sm leading-5 text-muted-foreground">
                    of tickets are routine enough to resolve before they become
                    noise.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative px-2 sm:px-6 md:px-8">
              <div className="absolute -left-8 top-16 hidden h-px w-24 bg-border md:block" />
              <div className="absolute -left-12 top-14 hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                <MoveRight className="h-4 w-4" />
              </div>

              <div className="relative ml-auto max-w-[650px] border bg-foreground text-background shadow-2xl shadow-foreground/10 md:-rotate-[0.7deg]">
                <div className="grid gap-px bg-background/20 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="bg-foreground p-6 md:p-8">
                    <div className="mb-12 flex items-start justify-between gap-6">
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.22em] text-background/50">
                          swiftly ai
                        </div>
                        <h3 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-background md:text-4xl">
                          Routine work leaves the queue first.
                        </h3>
                      </div>
                      <Bot className="h-8 w-8 shrink-0 text-background/80" />
                    </div>

                    <div className="relative space-y-3">
                      {resolvedFlow.map((step, index) => (
                        <div
                          className={`flex items-center gap-3 ${
                            index % 2 === 1 ? "pl-7" : ""
                          }`}
                          key={step}
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-background/25 bg-background text-foreground">
                            {index === resolvedFlow.length - 1 ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <CornerDownRight className="h-4 w-4" />
                            )}
                          </span>
                          <span className="text-sm text-background/80">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background p-6 text-foreground md:p-8">
                    <div className="mb-8 flex items-center justify-between border-b pb-4">
                      <MessageSquareText className="h-5 w-5 text-primary" />
                      <span className="font-mono text-xs text-muted-foreground">
                        live dispatch
                      </span>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <div className="text-5xl font-semibold tracking-tight">
                          24/7
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          Automated first responses keep moving while your
                          experts stay focused.
                        </p>
                      </div>

                      <div className="relative border-l pl-5">
                        <ArrowDownRight className="absolute -left-2 top-0 h-4 w-4 bg-background text-primary" />
                        <p className="text-sm font-medium">
                          Escalations arrive with context, not cleanup work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="ml-auto mt-5 max-w-[520px] text-sm leading-6 text-muted-foreground md:mr-8">
                No separate problem/solution blocks shouting at each other. Just
                a messy support queue being turned into a controlled operating
                rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
