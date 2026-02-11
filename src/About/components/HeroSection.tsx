import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="mx-auto max-w-[1400px] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          We didn't build Swiftly to replace humans.
          <br />
          <span className="text-primary">
            We built it to save their sanity.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-normal max-w-xl mx-auto">
          Why we are on a mission to automate the boring, so your team can focus
          on the meaningful.
        </p>
      </div>
    </section>
  );
};
