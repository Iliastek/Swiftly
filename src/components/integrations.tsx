import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

type Integration = {
  src?: string;
  name: string;
  isInvertable?: boolean;
};

const data: Integration[] = [
  {
    name: "Empty 1",
  },
  {
    name: "Vercel",
    src: "https://storage.efferd.com/logo/vercel.svg",
    isInvertable: true,
  },
  {
    name: "OpenAI",
    src: "https://storage.efferd.com/logo/openai.svg",
    isInvertable: true,
  },
  {
    src: "https://storage.efferd.com/logo/supabase.svg",
    name: "Supabase",
  },
  {
    name: "GitHub",
    src: "https://storage.efferd.com/logo/github.svg",
    isInvertable: true,
  },
  {
    name: "Notion",
    src: "https://storage.efferd.com/logo/notion.svg",
  },
  {
    name: "Gmail",
    src: "https://storage.efferd.com/logo/gmail.svg",
  },
  {
    name: "Google Maps",
    src: "https://storage.efferd.com/logo/google-maps.svg",
  },
  {
    name: "Neon",
    src: "https://storage.efferd.com/logo/neon.svg",
  },
  {
    name: "Empty 2",
  },
];

export function Integrations() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24">
      <div className="max-w-xl space-y-2 px-4 text-center">
        <h2 className="font-semibold text-4xl tracking-tight">
          All types of integration
        </h2>
        <p className="text-lg text-muted-foreground">
          Connect your favourite apps and services easily
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-full border bg-secondary dark:bg-secondary/10">
        <div className="mask-l-from-90 mask-r-from-90 flex items-center justify-center -space-x-4 p-1">
          {data.map((item) => (
            <div
              className={cn(
                "relative z-0 transition-transform",
                item.src ? "hover:z-10 hover:scale-110" : "",
              )}
              key={item.name}
            >
              <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border bg-card shadow-sm">
                {item.src && (
                  <img
                    alt={item.name}
                    className={cn(
                      "pointer-events-auto size-6 select-none object-contain",
                      item.isInvertable && "dark:invert",
                    )}
                    height="auto"
                    src={item.src}
                    width="auto"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button className="rounded-full px-5!">
        See all integration <ArrowUpRightIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
