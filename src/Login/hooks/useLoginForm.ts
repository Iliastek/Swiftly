import { useState, useEffect } from "react";
import type { LoginFormState } from "../types";

export const useLoginForm = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    email: "",
    password: "",
    rememberMe: false,
    showPassword: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const setEmail = (email: string) => {
    setFormState((prev) => ({ ...prev, email }));
  };

  const setPassword = (password: string) => {
    setFormState((prev) => ({ ...prev, password }));
  };

  const setRememberMe = (rememberMe: boolean) => {
    setFormState((prev) => ({ ...prev, rememberMe }));
  };

  const toggleShowPassword = () => {
    setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({
      email: formState.email,
      password: formState.password,
      rememberMe: formState.rememberMe,
    });
  };

  return {
    formState,
    setEmail,
    setPassword,
    setRememberMe,
    toggleShowPassword,
    isVisible,
    handleSubmit,
  };
};
