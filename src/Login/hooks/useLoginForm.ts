import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import type { LoginFormState } from "../types";

export const useLoginForm = () => {
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

    const { error } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    navigate("/dashboard");
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
