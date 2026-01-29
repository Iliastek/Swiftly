import React from "react";
import { Header } from "./components/header";
import { CallToAction } from "./components/cta";
import { Footer } from "./components/footer";
import { LogoCloud } from "./components/logo-cloud";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { ProblemSolution } from "./components/problem-solution";
import { Showcase } from "./components/showcase";
import { Testimonials } from "./components/testimonials";
import { GlobalReach } from "./components/globalreach";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <main className="flex-1 mx-auto max-w-4xl w-full py-8 px-4">
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
        <ProblemSolution />
        <Features />
        <Showcase />
        <Testimonials />
      </main>
      <GlobalReach />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
