import React from "react";

interface WalletFormProps {
  walletProvider: string;
  setWalletProvider: (provider: string) => void;
}

export const WalletForm: React.FC<WalletFormProps> = ({
  walletProvider,
  setWalletProvider,
}) => {
  const wallets = ["Apple Pay", "Google Pay", "PayPal"];

  return (
    <div className="space-y-2 sm:space-y-3 mt-4">
      {wallets.map((wallet) => (
        <button
          key={wallet}
          onClick={() => setWalletProvider(wallet)}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 text-left transition-all ${
            walletProvider === wallet
              ? "border-gray-400 bg-primary/5"
              : "border-border hover:border-gray-400"
          }`}
        >
          <span className="font-medium text-sm sm:text-base text-foreground">
            {wallet}
          </span>
        </button>
      ))}
    </div>
  );
};
