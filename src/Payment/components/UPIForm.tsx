import React from "react";

interface UPIFormProps {
  upiId: string;
  setUpiId: (id: string) => void;
}

export const UPIForm: React.FC<UPIFormProps> = ({ upiId, setUpiId }) => {
  return (
    <div className="space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          UPI ID
        </label>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="yourname@upi"
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Enter your UPI ID to complete the payment
        </p>
      </div>
    </div>
  );
};
