import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useAboutData } from "./hooks/useAboutData";
import {
  HeroSection,
  StatsRow,
  StorySection,
  ValuesSection,
  TeamSection,
} from "./components";

function About() {
  const { stats, values, founders } = useAboutData();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsRow stats={stats} />
        <StorySection />
        <ValuesSection values={values} />
        <TeamSection founders={founders} />
      </main>
      <Footer />
    </div>
  );
}

export default About;
