export interface Subscription {
  plan_id: string;
  billing_cycle: string;
  status: string;
  price: number;
}

export const planNames: Record<string, string> = {
  basic: "Basic Plan",
  business: "Business Plan",
  enterprise: "Enterprise Plan",
};
