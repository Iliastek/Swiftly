export type Plan = "basic" | "business" | "enterprise";

export interface Feature {
  name: string;
  tooltip?: string;
  basic: boolean | string | number;
  business: boolean | string | number;
  enterprise: boolean | string | number;
}

export interface PlanData {
  id: Plan;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
}

export interface FeatureSection {
  category?: string;
  items: Feature[];
}
