import React from "react";
import { Button } from "../../components/ui/button";
import { X } from "lucide-react";

interface ConfirmationModalProps {
  planName: string;
  price: number;
  billingCycle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  planName,
  price,
  billingCycle,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            Confirm Subscription
          </h2>
          <button
            onClick={onCancel}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground mb-4">
            You are about to subscribe to:
          </p>
          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <p className="font-semibold text-foreground text-lg">{planName}</p>
            <p className="text-muted-foreground">
              ${price}/
              {billingCycle === "annual" ? "mo (billed yearly)" : "month"}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {billingCycle === "annual"
            ? `You will be charged $${(price * 12).toFixed(2)} annually.`
            : `You will be charged $${price} monthly.`}
        </p>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
