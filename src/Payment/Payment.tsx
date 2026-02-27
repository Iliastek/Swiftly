import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { CreditCard, Wallet, QrCode, Building2 } from "lucide-react";
import { Logo } from "../components/logo";
import { Button } from "../components/ui/button";
import { planDetails } from "../Register/data/planDetails";
import { usePayment } from "./hooks/usePayment";
import { PaymentMethod } from "./types";
import { PlanCard, PaymentMethodCard, Toast, ToastType } from "./components";

const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const planId = searchParams.get("plan");
  const billingCycle = searchParams.get("billing") || "annual";

  const selectedPlan = planId ? planDetails[planId] : null;
  const price = selectedPlan
    ? billingCycle === "annual"
      ? selectedPlan.annualPrice / 12
      : selectedPlan.monthlyPrice
    : 0;

  const {
    isLoadingAuth,
    selectedMethod,
    setSelectedMethod,
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    cardholderName,
    setCardholderName,
    walletProvider,
    setWalletProvider,
    upiId,
    setUpiId,
    bnplProvider,
    setBnplProvider,
    createSubscription,
  } = usePayment();

  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [toast, setToast] = React.useState<{
    show: boolean;
    type: ToastType;
    title: string;
    message: string;
  } | null>(null);

  const handlePaymentMethodSelect = async () => {
    if (!selectedMethod || !planId || !selectedPlan) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Simulate payment processing (1.5 seconds for better UX)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save subscription to database
      await createSubscription(planId, billingCycle, price);

      // Show success toast
      setToast({
        show: true,
        type: "success",
        title: "Payment processed",
        message: "Your payment has been successfully processed.",
      });

      // Navigate to dashboard after toast is shown
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      console.error("Error creating subscription:", err);
      setError("Failed to process subscription. Please try again.");

      // Show error toast
      setToast({
        show: true,
        type: "error",
        title: "Something went wrong",
        message: "We couldn't process your request.",
      });

      setIsProcessing(false);
    }
  };

  // Show loading while checking auth
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            No Plan Selected
          </h2>
          <p className="text-muted-foreground mb-6">
            Please select a plan to continue.
          </p>
          <Link to="/pricing">
            <Button>View Plans</Button>
          </Link>
        </div>
      </div>
    );
  }

  const paymentMethods: PaymentMethod[] = [
    {
      id: "card",
      title: "Cards",
      description: "Visa, Mastercard, etc.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      id: "wallet",
      title: "Digital Wallets",
      description: "Apple Pay, Google Pay, etc.",
      icon: <Wallet className="w-6 h-6" />,
    },
    {
      id: "upi",
      title: "UPI",
      description: "Unified Payments Interface",
      icon: <QrCode className="w-6 h-6" />,
    },
    {
      id: "bnpl",
      title: "Buy Now, Pay Later",
      description: "Klarna, Affirm, Afterpay",
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  const planData = selectedPlan
    ? {
        id: planId || "",
        name: selectedPlan.name,
        description: selectedPlan.description,
        icon: selectedPlan.icon,
        gradient: selectedPlan.gradient,
        price,
        billingCycle,
      }
    : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-3 sm:p-4 py-6 sm:py-8">
        <div className="w-full max-w-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo className="h-7 sm:h-8" />
            </Link>
          </div>

          {/* Main Card */}
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Payment Methods
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Choose your preferred payment method to continue
              </p>
            </div>

            {/* Selected Plan Card */}
            {planData && <PlanCard plan={planData} />}

            {/* Payment Methods */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {paymentMethods.map((method) => {
                const isSelected = selectedMethod === method.id;

                return (
                  <PaymentMethodCard
                    key={method.id}
                    method={method}
                    isSelected={isSelected}
                    onSelect={() =>
                      setSelectedMethod(isSelected ? null : method.id)
                    }
                    cardNumber={cardNumber}
                    setCardNumber={setCardNumber}
                    expiryDate={expiryDate}
                    setExpiryDate={setExpiryDate}
                    cvv={cvv}
                    setCvv={setCvv}
                    cardholderName={cardholderName}
                    setCardholderName={setCardholderName}
                    walletProvider={walletProvider}
                    setWalletProvider={setWalletProvider}
                    upiId={upiId}
                    setUpiId={setUpiId}
                    bnplProvider={bnplProvider}
                    setBnplProvider={setBnplProvider}
                  />
                );
              })}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Select Payment Method Button */}
            <Button
              disabled={!selectedMethod || isProcessing}
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold"
              onClick={handlePaymentMethodSelect}
            >
              {isProcessing ? "Processing..." : "Select Payment Method →"}
            </Button>

            {/* Footer */}
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              Your payment information is secure and encrypted
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast?.show && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast(null)}
          duration={3000}
        />
      )}
    </div>
  );
};

export default Payment;
