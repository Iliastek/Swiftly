export type PaymentMethodType = "card" | "wallet" | "upi" | "bnpl";

export interface PaymentMethod {
  id: PaymentMethodType;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CardFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export interface WalletFormData {
  provider: string;
}

export interface UPIFormData {
  upiId: string;
}

export interface BNPLFormData {
  provider: string;
}

export interface SelectedPlanData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  price: number;
  billingCycle: string;
}
