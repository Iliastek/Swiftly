import React from "react";
import { PaymentMethod, PaymentMethodType } from "../types";
import { CardForm } from "./CardForm";
import { WalletForm } from "./WalletForm";
import { UPIForm } from "./UPIForm";
import { BNPLForm } from "./BNPLForm";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  isSelected: boolean;
  onSelect: () => void;
  // Card form props
  cardNumber?: string;
  setCardNumber?: (value: string) => void;
  expiryDate?: string;
  setExpiryDate?: (value: string) => void;
  cvv?: string;
  setCvv?: (value: string) => void;
  cardholderName?: string;
  setCardholderName?: (value: string) => void;
  // Wallet props
  walletProvider?: string;
  setWalletProvider?: (provider: string) => void;
  // UPI props
  upiId?: string;
  setUpiId?: (id: string) => void;
  // BNPL props
  bnplProvider?: string;
  setBnplProvider?: (provider: string) => void;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  method,
  isSelected,
  onSelect,
  cardNumber = "",
  setCardNumber = () => {},
  expiryDate = "",
  setExpiryDate = () => {},
  cvv = "",
  setCvv = () => {},
  cardholderName = "",
  setCardholderName = () => {},
  walletProvider = "",
  setWalletProvider = () => {},
  upiId = "",
  setUpiId = () => {},
  bnplProvider = "",
  setBnplProvider = () => {},
}) => {
  const renderForm = () => {
    switch (method.id) {
      case "card":
        return (
          <CardForm
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiryDate={expiryDate}
            setExpiryDate={setExpiryDate}
            cvv={cvv}
            setCvv={setCvv}
            cardholderName={cardholderName}
            setCardholderName={setCardholderName}
          />
        );
      case "wallet":
        return (
          <WalletForm
            walletProvider={walletProvider}
            setWalletProvider={setWalletProvider}
          />
        );
      case "upi":
        return <UPIForm upiId={upiId} setUpiId={setUpiId} />;
      case "bnpl":
        return (
          <BNPLForm
            bnplProvider={bnplProvider}
            setBnplProvider={setBnplProvider}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`rounded-xl border-2 transition-all ${
        isSelected ? "border-foreground" : "border-border"
      }`}
    >
      <button
        onClick={onSelect}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 text-left hover:bg-muted/30 transition-colors rounded-xl"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
          {method.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm sm:text-base text-foreground">
            {method.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {method.description}
          </p>
        </div>
      </button>

      {/* Expandable Form Section */}
      {isSelected && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-border overflow-hidden animate-in slide-in-from-top-2 fade-in duration-700 ease-in-out">
          {renderForm()}
        </div>
      )}
    </div>
  );
};
