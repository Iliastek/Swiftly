import { Button } from "./ui/button";
import { ArrowRightIcon, RocketIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid Background */}
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

      {/* Gradient Blobs */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -z-10 top-1/3 right-1/4 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-0 right-1/3 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      {/* Fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-5" />

      <div className="mx-auto max-w-4xl px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent mb-8"
          >
            <RocketIcon className="h-4 w-4" />
            <span>Discover what's new</span>
            <ArrowRightIcon className="h-3 w-3" />
          </a>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Turn Ticket Queues Into
            <br />
            <span className="text-primary">Instant AI Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10">
            Empowering teams with 24/7 AI to resolve First Level tickets
            instantly. Because support never sleeps, but your experts should.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline" size="lg" className="gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Book a Call
            </Button>
            <Button size="lg" className="gap-2">
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
