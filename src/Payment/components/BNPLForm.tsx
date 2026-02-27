import React from "react";

interface BNPLFormProps {
  bnplProvider: string;
  setBnplProvider: (provider: string) => void;
}

export const BNPLForm: React.FC<BNPLFormProps> = ({
  bnplProvider,
  setBnplProvider,
}) => {
  const providers = ["Klarna", "Affirm", "Afterpay"];

  return (
    <div className="space-y-4 mt-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Select Provider
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {providers.map((provider) => (
            <button
              key={provider}
              onClick={() => setBnplProvider(provider)}
              className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                bnplProvider === provider
                  ? "border-gray-400 bg-primary/5 font-medium"
                  : "border-border hover:border-gray-400"
              }`}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
