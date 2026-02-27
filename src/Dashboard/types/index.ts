export interface Subscription {
  plan_id: string;
  billing_cycle: string;
  status: string;
  price: number;
}

export interface AIModelUsage {
  name: string;
  percentage: number;
  used: number;
  total: number;
  status?: "normal" | "high" | "critical";
}

export const planNames: Record<string, string> = {
  basic: "Basic Plan",
  business: "Business Plan",
  enterprise: "Enterprise Plan",
};
