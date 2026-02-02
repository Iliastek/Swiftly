import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import {
  Heart,
  Zap,
  Shield,
  Calendar,
  Ticket,
  Clock,
  Smile,
  LucideIcon,
} from "lucide-react";
import aboutData from "./aboutData.json";

// Icon mapping für JSON-Daten
const iconMap: Record<string, LucideIcon> = {
  Heart,
  Zap,
  Shield,
  Calendar,
  Ticket,
  Clock,
  Smile,
};

// Daten aus JSON laden und Icons zuordnen
const stats = aboutData.stats.map((stat) => ({
  ...stat,
  icon: iconMap[stat.iconName],
}));

const values = aboutData.values.map((value) => ({
  ...value,
  icon: iconMap[value.iconName],
}));

const founders = aboutData.founders;

function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Grid Background - wie auf der Hauptseite */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Gradient Blobs - wie auf der Hauptseite */}
          <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
          <div className="absolute -z-10 top-1/3 right-1/4 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl" />
          <div className="absolute -z-10 bottom-0 right-1/3 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

          {/* Fade overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-5" />

          <div className="mx-auto max-w-4xl text-center py-12">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-sm mb-8">
              <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
              <span>Our Mission</span>
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              We didn't build Swiftly to replace humans.
              <br />
              <span className="text-primary">
                We built it to save their sanity.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Why we are on a mission to automate the boring, so your team can
              focus on the meaningful.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center group">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted mb-3 group-hover:scale-110 transition-transform">
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto h-px max-w-sm bg-border" />
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Black Friday Epiphany
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed text-lg">
                It was November 2023. Black Friday. Our founder, David, was
                leading a support team of 25 agents at a fast-growing e-commerce
                startup. The queue was exploding:{" "}
                <strong className="text-foreground">
                  4,000+ unread tickets.
                </strong>
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                The team was drowning. But when we looked closer, we realized
                something tragic:{" "}
                <strong className="text-foreground">
                  80% of these tickets were identical.
                </strong>{" "}
                "Where is my order?" "How do I return this?" "Do you ship to
                Canada?"
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Our best support agents – brilliant, empathetic humans – were
                spending 8 hours a day acting like robots. They were
                copy-pasting answers until their fingers hurt.{" "}
                <strong className="text-foreground">
                  Two of our best senior agents quit that month due to burnout.
                </strong>
              </p>

              <div className="my-12 p-8 rounded-2xl border border-border bg-gradient-to-br from-purple-500/5 via-background to-orange-500/5 relative overflow-hidden">
                {/* Multiple gradient blobs */}
                <div className="absolute -z-10 top-0 left-0 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl" />
                <div className="absolute -z-10 bottom-0 right-0 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl" />
                <p className="text-xl md:text-2xl font-medium text-center mb-0">
                  "That was the moment{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">
                    Swiftly
                  </span>{" "}
                  was born."
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                We realized that Customer Support is broken. We treat humans
                like machines, and then wonder why the service is bad. We built
                Swiftly to flip the script:{" "}
                <strong className="text-foreground">
                  Let AI handle the robotic repetition, so humans can handle the
                  complex, emotional problems that actually require a heartbeat.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we build.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group relative rounded-lg border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-md overflow-hidden"
                  >
                    {/* Subtle color glow on hover */}
                    <div
                      className={`absolute -z-10 top-0 right-0 w-32 h-32 ${value.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
                    />

                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${value.bgColor}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${value.color}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                The Brains Behind Swiftly
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet the team on a mission to fix customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="group relative rounded-lg border border-border bg-background p-8 transition-all hover:border-foreground/20 hover:shadow-md overflow-hidden"
                >
                  {/* Subtle gradient glow */}
                  <div
                    className={`absolute -z-10 -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${founder.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  />

                  {/* Avatar */}
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${founder.gradient} group-hover:scale-105 transition-transform`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {founder.initial}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-muted-foreground font-medium text-sm mb-4">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "{founder.bio}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - wie auf der Hauptseite */}
        <section className="py-20 px-4">
          <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between border-x">
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />
            <div className="border-b px-2 py-8">
              <h2 className="text-center font-semibold text-lg md:text-2xl">
                Ready to give your team their sanity back?
              </h2>
              <p className="text-balance text-center text-muted-foreground text-sm md:text-base">
                Join the companies that trust Swiftly to handle 80% of their
                tickets automatically.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
              <a
                href="/#features"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
              >
                See Features
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View Pricing
              </a>
            </div>
            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
