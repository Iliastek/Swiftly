import React from "react";

export const StorySection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            The Black Friday Epiphany
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Left: Text - linksbündig */}
          <div className="text-left">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              It was November 2023. Black Friday. Our founder, David, was
              leading a support team of 25 agents at a fast-growing e-commerce
              startup. The queue was exploding:{" "}
              <strong className="text-slate-900 font-semibold">
                4,000+ unread tickets.
              </strong>
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The team was drowning. But when we looked closer, we realized
              something tragic:{" "}
              <strong className="text-slate-900 font-semibold">
                80% of these tickets were identical.
              </strong>{" "}
              "Where is my order?" "How do I return this?" "Do you ship to
              Canada?"
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Our best support agents – brilliant, empathetic humans – were
              spending 8 hours a day acting like robots. They were copy-pasting
              answers until their fingers hurt.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              <strong className="text-slate-900 font-semibold">
                Two of our best senior agents quit that month due to burnout.
              </strong>
            </p>
          </div>

          {/* Right: Bild-Platzhalter */}
          <div className="flex items-stretch">
            <div className="w-full rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center min-h-[320px]">
              <div className="text-center p-8">
                <div className="text-5xl mb-4">📬</div>
                <p className="text-slate-400 font-medium">Image Placeholder</p>
                <p className="text-slate-400 text-sm">Inbox Chaos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Zitat - zentriert unter den Spalten */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-slate-900">
            "That was the moment <span className="text-primary">Swiftly</span>{" "}
            was born."
          </p>
        </div>

        {/* Abschlusstext */}
        <div className="max-w-5xl mx-auto mt-12">
          <p className="text-slate-600 text-lg leading-relaxed text-center">
            We realized that Customer Support is broken. We treat humans like
            machines, and then wonder why the service is bad. We built Swiftly
            to flip the script:{" "}
            <strong className="text-slate-900 font-semibold">
              Let AI handle the robotic repetition, so humans can handle the
              complex, emotional problems that actually require a heartbeat.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};
