import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { PaymentMethodType } from "../types";

export const usePayment = () => {
  const navigate = useNavigate();
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(true);
  const [selectedMethod, setSelectedMethod] =
    React.useState<PaymentMethodType | null>(null);

  // Card form states
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");

  // Wallet state
  const [walletProvider, setWalletProvider] = React.useState("");

  // UPI state
  const [upiId, setUpiId] = React.useState("");

  // BNPL state
  const [bnplProvider, setBnplProvider] = React.useState("");

  // Check auth and ensure user exists in public.users
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      // Ensure user exists in public.users
      const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .eq("id", user.id)
        .single();

      if (!existingUser) {
        await supabase.from("users").insert({
          id: user.id,
          full_name: user.user_metadata?.full_name || "",
          email: user.email || "",
        });
      }

      setIsLoadingAuth(false);
    };

    checkAuth();
  }, [navigate]);

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const formatted = numbers.match(/.{1,4}/g)?.join(" ") || numbers;
    return formatted.slice(0, 19);
  };

  // Format expiry date as MM/YY
  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + "/" + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (value: string) => {
    setCardNumber(formatCardNumber(value));
  };

  const handleExpiryDateChange = (value: string) => {
    setExpiryDate(formatExpiryDate(value));
  };

  const handleCvvChange = (value: string) => {
    setCvv(value.replace(/\D/g, "").slice(0, 3));
  };

  const createSubscription = async (
    planId: string,
    billingCycle: string,
    price: number,
  ) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    // Calculate period end
    const now = new Date();
    const periodEnd = new Date(now);
    if (billingCycle === "annual") {
      periodEnd.setFullYear(periodEnd.getFullYear() + 1);
    } else {
      periodEnd.setMonth(periodEnd.getMonth() + 1);
    }

    // Check if subscription already exists
    const { data: existingSub } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (existingSub) {
      // Update existing subscription
      const { error } = await supabase
        .from("subscriptions")
        .update({
          plan_id: planId,
          billing_cycle: billingCycle,
          price: price,
          status: "active",
          current_period_start: now.toISOString(),
          current_period_end: periodEnd.toISOString(),
          updated_at: now.toISOString(),
        })
        .eq("user_id", user.id);

      if (error) throw error;
    } else {
      // Create new subscription
      const { error } = await supabase.from("subscriptions").insert({
        user_id: user.id,
        plan_id: planId,
        billing_cycle: billingCycle,
        price: price,
        status: "active",
        current_period_start: now.toISOString(),
        current_period_end: periodEnd.toISOString(),
      });

      if (error) throw error;
    }
  };

  return {
    isLoadingAuth,
    selectedMethod,
    setSelectedMethod,
    cardNumber,
    setCardNumber: handleCardNumberChange,
    expiryDate,
    setExpiryDate: handleExpiryDateChange,
    cvv,
    setCvv: handleCvvChange,
    cardholderName,
    setCardholderName,
    walletProvider,
    setWalletProvider,
    upiId,
    setUpiId,
    bnplProvider,
    setBnplProvider,
    createSubscription,
  };
};
