import {
  Heart,
  Zap,
  Shield,
  Ticket,
  Clock,
  Smile,
  LucideIcon,
} from "lucide-react";
import aboutData from "../aboutData.json";
import type { Stat, Value, Founder } from "../types";

// Icon mapping für JSON-Daten
const iconMap: Record<string, LucideIcon> = {
  Heart,
  Zap,
  Shield,
  Ticket,
  Clock,
  Smile,
};

export const useAboutData = () => {
  // "Founded" wird gefiltert
  const stats: Stat[] = aboutData.stats
    .filter((stat) => stat.label !== "Founded")
    .map((stat) => ({
      ...stat,
      icon: iconMap[stat.iconName],
    }));

  const values: Value[] = aboutData.values.map((value) => ({
    ...value,
    icon: iconMap[value.iconName],
  }));

  const founders: Founder[] = aboutData.founders;

  return {
    stats,
    values,
    founders,
  };
};
