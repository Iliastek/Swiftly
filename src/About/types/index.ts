import { LucideIcon } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
  iconName: string;
  color: string;
  icon?: LucideIcon;
}

export interface Value {
  title: string;
  description: string;
  iconName: string;
  color: string;
  bgColor: string;
  icon?: LucideIcon;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  initial: string;
  gradient: string;
}
