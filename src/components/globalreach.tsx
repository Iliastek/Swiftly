import React from "react";
import { Globe, MessageCircle } from "lucide-react";

const chatBubbles = [
  {
    flag: "🇺🇸",
    country: "USA",
    message: "Where is my order?",
    position:
      "top-[5%] left-[2%] sm:top-[10%] sm:left-[5%] md:top-[15%] md:left-[15%]",
    delay: "0s",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    message: "Wo ist meine Bestellung?",
    position:
      "top-[5%] right-[2%] sm:top-[15%] sm:right-[5%] md:top-[25%] md:right-[10%]",
    delay: "0.5s",
  },
  {
    flag: "🇧🇷",
    country: "Brazil",
    message: "Onde está meu pedido?",
    position:
      "bottom-[25%] left-[2%] sm:bottom-[28%] sm:left-[5%] md:bottom-[30%] md:left-[8%]",
    delay: "1s",
  },
  {
    flag: "🇪🇸",
    country: "Spain",
    message: "¿Dónde está mi pedido?",
    position:
      "bottom-[5%] right-[2%] sm:bottom-[10%] sm:right-[10%] md:bottom-[20%] md:right-[20%]",
    delay: "1.5s",
  },
  {
    flag: "🇯🇵",
    country: "Japan",
    message: "注文はどこですか？",
    position:
      "hidden sm:block sm:top-[45%] sm:right-[2%] md:top-[40%] md:right-[5%] lg:right-[25%]",
    delay: "2s",
  },
  {
    flag: "🇫🇷",
    country: "France",
    message: "Où est ma commande?",
    position:
      "hidden sm:block sm:bottom-[50%] sm:left-[2%] md:bottom-[45%] md:left-[5%] lg:left-[20%]",
    delay: "2.5s",
  },
];

export function GlobalReach() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Grid Background - like Hero */}

      <div className="mx-auto max-w-[1400px] w-full relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium shadow-sm mb-4 sm:mb-6">
            <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Global Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            Fluent in 50+ languages.{" "}
            <span className="text-primary">Instantly.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            No need to hire native speakers for every market. Swiftly
            automatically detects and responds in your customer's language.
          </p>
        </div>

        {/* Interactive Globe Visualization */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
          {/* Connection Lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Animated connection lines from center */}
            {[
              { x: 120, y: 75 },
              { x: 680, y: 125 },
              { x: 80, y: 350 },
              { x: 640, y: 400 },
              { x: 600, y: 200 },
              { x: 180, y: 275 },
            ].map((point, i) => (
              <g key={i}>
                <line
                  x1="400"
                  y1="250"
                  x2={point.x}
                  y2={point.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                {/* Animated dot traveling along line */}
                <circle r="3" fill="hsl(var(--primary))">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  >
                    <mpath xlinkHref={`#path${i}`} />
                  </animateMotion>
                </circle>
                <path
                  id={`path${i}`}
                  d={`M400,250 L${point.x},${point.y}`}
                  fill="none"
                />
              </g>
            ))}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Bot/Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Pulsing rings */}
              <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full bg-primary/20 animate-ping" />
              <div className="absolute inset-0 -m-6 sm:-m-8 rounded-full bg-primary/10 animate-pulse" />

              {/* Main circle */}
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/30">
                <MessageCircle className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Chat Bubbles */}
          {chatBubbles.map((bubble, index) => (
            <div
              key={index}
              className={`absolute ${bubble.position} animate-fade-in-up z-20`}
              style={{
                animationDelay: bubble.delay,
                animationFillMode: "both",
              }}
            >
              <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 shadow-lg max-w-[130px] sm:max-w-[150px] md:max-w-[180px] hover:scale-105 transition-transform">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <span className="text-sm sm:text-base md:text-lg">
                    {bubble.flag}
                  </span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">
                    {bubble.country}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-tight">
                  {bubble.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
