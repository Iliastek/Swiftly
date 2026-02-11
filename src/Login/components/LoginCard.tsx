import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/logo";
import { cn } from "../../lib/utils";
import { OAuthButtons } from "./OAuthButtons";
import { Divider } from "./Divider";
import { LoginForm } from "./LoginForm";
import type { LoginFormState } from "../types";

interface LoginCardProps {
  formState: LoginFormState;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (rememberMe: boolean) => void;
  toggleShowPassword: () => void;
  isVisible: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export const LoginCard: React.FC<LoginCardProps> = ({
  formState,
  setEmail,
  setPassword,
  setRememberMe,
  toggleShowPassword,
  isVisible,
  handleSubmit,
}) => {
  return (
    <div className="w-full max-w-xl">
      {/* Logo above card */}
      <div className="flex justify-center mb-8">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-8" />
        </Link>
      </div>

      <div
        className={cn(
          "bg-card border border-border rounded-xl p-8 shadow-lg transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Sign in</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        {/* OAuth Buttons */}
        <OAuthButtons />

        {/* Divider */}
        <Divider />

        {/* Form */}
        <LoginForm
          formState={formState}
          setEmail={setEmail}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          toggleShowPassword={toggleShowPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
