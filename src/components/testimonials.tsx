import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was terrified that AI would ruin our customer experience. But Swiftly is incredible. It learned our tone of voice in a day. Our customers actually thank the bot for being so helpful.",
    author: "Thomas Weber",
    role: "Founder",
    company: "TechFlow",
  },
  {
    quote:
      "Before Swiftly, we were drowning in tickets every Monday morning. Now, 70% are solved before we even log in. It feels like we hired 5 senior agents overnight, but for a fraction of the cost.",
    author: "Sarah Jenkins",
    role: "Head of Customer Support",
    company: "",
  },
  {
    quote:
      "I expected a month-long integration project. It took 15 minutes. We connected our Zendesk, uploaded our FAQs, and it was live. Best onboarding experience I've seen in a SaaS product.",
    author: "Michael Chen",
    role: "CTO",
    company: "StartUp Inc.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-muted/30 relative">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-5xl w-full relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Loved by support teams worldwide.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join 500+ companies delivering faster, better support with Swiftly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl border border-border p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-border/80 hover:-translate-y-1"
            >
              {/* Star Rating */}
              <div className="mb-4">
                <StarRating />
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed text-foreground/90 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
