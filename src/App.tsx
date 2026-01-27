import React from "react";
import { Header } from "./components/header";
import { CallToAction } from "./components/cta";
import { Footer } from "./components/footer";
import { LogoCloud } from "./components/logo-cloud";
import { Hero } from "./components/hero";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <Hero />

      <main className="flex-1 mx-auto max-w-4xl w-full py-8 px-4">
        {/* Logo Cloud Section */}
        <section className="relative mx-auto max-w-3xl mb-12">
          <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
            <span className="text-muted-foreground">Trusted by experts.</span>
            <br />
            <span className="font-semibold">Used by the leaders.</span>
          </h2>
          <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />
          <LogoCloud />
          <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" />
        </section>

        {/* Feature Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 border rounded-lg space-y-4">
              <div className="h-10 w-10 bg-muted rounded animate-pulse" />
              <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Content Sections Skeleton */}
        <div className="space-y-8 mb-12">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 h-64 bg-muted rounded-lg animate-pulse" />
              <div className="w-full md:w-1/2 space-y-4">
                <div className="h-8 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-full bg-muted rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 border rounded-lg space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-muted rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                </div>
              </div>
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Pricing Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 border rounded-lg space-y-4">
              <div className="h-6 w-1/2 bg-muted rounded animate-pulse" />
              <div className="h-10 w-2/3 bg-muted rounded animate-pulse" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    className="h-4 w-full bg-muted rounded animate-pulse"
                  />
                ))}
              </div>
              <div className="h-10 w-full bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>
      </main>
      
      {/* Call to Action before Footer */}
      <CallToAction />
      
      <Footer />
    </div>
  );
}

export default App;
