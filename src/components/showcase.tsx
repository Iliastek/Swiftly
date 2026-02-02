import React from "react";
import { Zap, RefreshCw, Heart, CheckCircle2, Bot } from "lucide-react";

// Chat messages for the Hero box
const chatMessages = [
  {
    sender: "customer",
    name: "Sarah",
    message: "Where is my refund? It's been 5 days! 😡",
    time: "2:34 PM",
  },
  {
    sender: "ai",
    name: "Swiftly AI",
    message:
      "Hi Sarah! I've processed your refund just now. You'll see it in your account within 24 hours. Receipt attached. 💸",
    time: "2:34 PM",
  },
  {
    sender: "customer",
    name: "Sarah",
    message: "Wow, that was fast. Thanks! 😍",
    time: "2:35 PM",
  },
];

// Live feed items for the Control box
const liveFeedItems = [
  { id: "#412", status: "solved", type: "AI", time: "Just now" },
  { id: "#411", status: "solved", type: "AI", time: "2 min ago" },
  { id: "#410", status: "escalated", type: "Human", time: "5 min ago" },
  { id: "#409", status: "solved", type: "AI", time: "8 min ago" },
];

export function Showcase() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            See it in action.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real conversations. Real results. Real-time control.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Hero Box - Large, Left (spans 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full rounded-2xl border border-border bg-background p-6 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/10 border border-pink-500/20 px-3 py-1 text-xs font-medium text-pink-600 mb-4">
                <Heart className="h-3 w-3" />
                Human-like empathy
              </div>

              {/* Chat Interface */}
              <div className="space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "customer" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        msg.sender === "customer"
                          ? "bg-muted rounded-2xl rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm"
                      } px-4 py-3`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {msg.sender === "ai" && (
                          <Bot className="h-3 w-3 opacity-70" />
                        )}
                        <span className="text-xs font-medium opacity-70">
                          {msg.name}
                        </span>
                        <span className="text-[10px] opacity-50">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typing indicator */}
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" />
                </div>
                <span className="text-xs">
                  AI is ready for the next ticket...
                </span>
              </div>
            </div>
          </div>

          {/* Performance Box - Small, Right Top */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full rounded-2xl border border-border bg-background p-6 shadow-lg flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-600 mb-4 w-fit">
                <Zap className="h-3 w-3" />
                Lightning fast
              </div>

              {/* Big Number */}
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="relative">
                  <span className="text-6xl md:text-7xl font-bold tracking-tight">
                    45
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                    h
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Time saved this week
                </p>

                {/* Mini progress bar */}
                <div className="w-full mt-4 bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[72%] rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  72% automation rate
                </p>
              </div>
            </div>
          </div>

          {/* Control Box - Small, Right Bottom */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full rounded-2xl border border-border bg-background p-6 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-600 mb-4">
                <RefreshCw className="h-3 w-3" />
                Seamless Sync
              </div>

              {/* Live Feed */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Live Feed
                </p>
                {liveFeedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 ${
                          item.status === "solved"
                            ? "text-emerald-500"
                            : "text-orange-500"
                        }`}
                      />
                      <span className="text-sm font-medidum">
                        Ticket {item.id}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          item.type === "AI"
                            ? "bg-primary/10 text-primary"
                            : "bg-orange-500/10 text-orange-600"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
