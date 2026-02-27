import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import type { LoginFormState } from "../types";

export const useLoginForm = (
  selectedPlan?: string | null,
  selectedBilling?: string,
) => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState<LoginFormState>({
    email: "",
    password: "",
    rememberMe: false,
    showPassword: false,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const setEmail = (email: string) => {
    setFormState((prev) => ({ ...prev, email }));
    setError(null);
  };

  const setPassword = (password: string) => {
    setFormState((prev) => ({ ...prev, password }));
    setError(null);
  };

  const setRememberMe = (rememberMe: boolean) => {
    setFormState((prev) => ({ ...prev, rememberMe }));
  };

  const toggleShowPassword = () => {
    setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    // Ensure user exists in public.users table
    if (data.user) {
      const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .eq("id", data.user.id)
        .single();

      // If user doesn't exist in public.users, create it
      if (!existingUser) {
        await supabase.from("users").insert({
          id: data.user.id,
          full_name: data.user.user_metadata?.full_name || "",
          email: data.user.email || "",
        });
      }
    }

    setIsLoading(false);

    // Redirect to payment if a plan was selected, otherwise to dashboard
    if (selectedPlan) {
      navigate(`/payment?plan=${selectedPlan}&billing=${selectedBilling}`);
    } else {
      navigate("/dashboard");
    }
  };

  return {
    formState,
    setEmail,
    setPassword,
    setRememberMe,
    toggleShowPassword,
    isVisible,
    isLoading,
    error,
    handleSubmit,
  };
};
