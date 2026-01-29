import React from "react";
import { Moon, Zap, GitBranch, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Moon,
    title: "AI never sleeps.",
    description:
      "While your team clocks out, Swiftly takes over. Our AI resolves standard requests (password resets, status updates, FAQs) instantly and in real-time – 365 days a year.",
  },
  {
    icon: GitBranch,
    title: "Intelligent triage.",
    description:
      "Swiftly understands context. Simple issues are resolved directly, complex cases are automatically categorized and routed to the right 2nd level expert with all relevant information.",
  },
  {
    icon: Zap,
    title: "Perfect collaboration.",
    description:
      "When AI reaches its limits, handover to your team is seamless. The agent immediately sees the entire AI conversation history and can take over without asking questions.",
  },
  {
    icon: TrendingUp,
    title: "Data-driven support.",
    description:
      "Swiftly learns continuously. Identify trends in your tickets and see at a glance which topics AI already resolves automatically and where your support process can be optimized.",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Power. Speed. Control.
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build fast, secure, scalable support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-lg border border-border bg-background p-8 transition-all hover:border-foreground/20 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
