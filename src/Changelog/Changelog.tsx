import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Check, Sparkles } from "lucide-react";

interface ChangelogEntry {
  date: string;
  title: string;
  description?: string;
  highlights?: string[];
  tags?: { label: string; color: "amber" | "teal" | "blue" | "rose" }[];
  icon?: "sparkles";
}

const changelog: ChangelogEntry[] = [
  {
    date: "4 March 2026",
    title: "AI Resolution Engine v3.0",
    icon: "sparkles",
    description:
      "Major upgrade to our AI engine with completely redesigned architecture. We've rebuilt everything from the ground up.",
    highlights: [
      "60% faster ticket resolution times",
      "Multi-language support — 25+ languages with auto-detection",
      "Improved context understanding across ticket threads",
      "Custom AI training on your knowledge base",
      "Smart escalation with priority scoring",
      "New analytics dashboard for AI performance",
      "Enhanced API with webhooks and real-time events",
    ],
  },
  {
    date: "18 February 2026",
    title: "Slack & Teams Integration",
    description:
      "Get notified about escalations and ticket updates directly in your team chat. Configure custom notification rules per channel.",
    tags: [
      { label: "slack-connector", color: "teal" },
      { label: "teams-connector", color: "teal" },
      { label: "webhook-manager", color: "teal" },
    ],
  },
  {
    date: "5 February 2026",
    title: "Dashboard Analytics Redesign",
    description:
      "We've added 12 new dashboard components with real-time metrics, custom date ranges, and exportable reports.",
    tags: [
      { label: "analytics-overview", color: "amber" },
      { label: "ticket-metrics", color: "amber" },
      { label: "agent-performance", color: "amber" },
      { label: "sla-tracker", color: "amber" },
      { label: "resolution-trends", color: "amber" },
      { label: "customer-satisfaction", color: "amber" },
    ],
  },
  {
    date: "20 January 2026",
    title: "User Roles & Permissions",
    description:
      "Granular role-based access control for your entire team. Define custom roles with specific permissions for agents, supervisors, and admins.",
    tags: [
      { label: "role-manager", color: "blue" },
      { label: "permission-editor", color: "blue" },
      { label: "audit-log", color: "blue" },
    ],
  },
  {
    date: "8 January 2026",
    title: "SLA Management & Automation",
    description:
      "Set response and resolution time targets per priority level. Automatic escalation when SLA thresholds are at risk.",
  },
  {
    date: "15 December 2025",
    title: "Minor Improvements and Fixes",
    description:
      "We have updated several components to improve responsiveness, accessibility, and overall developer experience.",
  },
  {
    date: "1 December 2025",
    title: "Knowledge Base v2",
    description:
      "Completely redesigned knowledge base with AI-powered search, article suggestions, and customer-facing portal.",
    tags: [
      { label: "kb-editor", color: "rose" },
      { label: "kb-search", color: "rose" },
      { label: "kb-portal", color: "rose" },
      { label: "kb-analytics", color: "rose" },
    ],
  },
];

const tagColorMap = {
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
};

function Changelog() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="border-b py-16 px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Changelog
            </h1>
            <p className="mt-3 text-muted-foreground">
              All latest changes to Swiftly will be documented on this page.
            </p>
          </div>
        </section>

        {/* Entries */}
        <section className="py-8 px-4">
          <div className="mx-auto max-w-3xl divide-y">
            {changelog.map((entry, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-10"
              >
                {/* Date badge */}
                <div className="flex-shrink-0">
                  <span className="inline-block rounded-md border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground">
                    {entry.date}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
                    {entry.icon === "sparkles" && (
                      <Sparkles className="h-5 w-5 text-amber-500" />
                    )}
                    {entry.title}
                  </h2>

                  {entry.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  )}

                  {entry.highlights && (
                    <ul className="space-y-2.5">
                      {entry.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.tags && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {entry.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium ${tagColorMap[tag.color]}`}
                        >
                          {tag.label}
                          <span className="text-[10px] opacity-60">↗</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Changelog;
