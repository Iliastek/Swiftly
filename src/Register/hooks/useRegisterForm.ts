import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { planDetails, PlanInfo, calculatePrice } from "../data/planDetails";

export interface RegisterFormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export interface UseRegisterFormReturn {
  // Form state
  formState: RegisterFormState;
  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setAgreeToTerms: (value: boolean) => void;
  toggleShowPassword: () => void;
  toggleShowConfirmPassword: () => void;

  // Plan state
  selectedPlan: PlanInfo | null;
  billingCycle: string;
  price: number;

  // Animation state
  isVisible: boolean;

  // Loading / Error
  isLoading: boolean;
  error: string | null;

  // Actions
  handleSubmit: (e: React.FormEvent) => void;
}

export const useRegisterForm = (): UseRegisterFormReturn => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Loading / Error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Plan state
  const selectedPlanId = searchParams.get("plan");
  const billingCycle = searchParams.get("billing") || "annual";
  const selectedPlan = selectedPlanId ? planDetails[selectedPlanId] : null;
  const price = selectedPlan ? calculatePrice(selectedPlan, billingCycle) : 0;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    // 1. Sign up with Supabase Auth (trigger creates user in public.users)
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setIsLoading(false);
      return;
    }

    // 2. If a plan was selected, create a subscription
    if (selectedPlanId && data.user) {
      const { error: subError } = await supabase.from("subscriptions").insert({
        user_id: data.user.id,
        plan_id: selectedPlanId,
        billing_cycle: billingCycle,
        price: price,
      });

      if (subError) {
        console.error("Subscription error:", subError.message);
      }
    }

    setIsLoading(false);
    navigate("/login");
  };

  return {
    formState: {
      fullName,
      email,
      password,
      confirmPassword,
      agreeToTerms,
      showPassword,
      showConfirmPassword,
    },
    setFullName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setAgreeToTerms,
    toggleShowPassword: () => setShowPassword((prev) => !prev),
    toggleShowConfirmPassword: () => setShowConfirmPassword((prev) => !prev),
    selectedPlan,
    billingCycle,
    price,
    isVisible,
    isLoading,
    error,
    handleSubmit,
  };
};
