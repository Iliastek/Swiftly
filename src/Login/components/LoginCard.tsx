import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/logo";
import { cn } from "../../lib/utils";
import { OAuthButtons } from "./OAuthButtons";
import { Divider } from "./Divider";
import { LoginForm } from "./LoginForm";
import { PlanBadge } from "./PlanBadge";
import type { LoginFormState } from "../types";
import type { PlanInfo } from "../../Register/data/planDetails";

interface LoginCardProps {
  formState: LoginFormState;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (rememberMe: boolean) => void;
  toggleShowPassword: () => void;
  isVisible: boolean;
  isLoading: boolean;
  error: string | null;
  handleSubmit: (e: React.FormEvent) => void;
  planId?: string | null;
  billingCycle?: string;
  selectedPlan?: PlanInfo | null;
  price?: number;
}

export const LoginCard: React.FC<LoginCardProps> = ({
  formState,
  setEmail,
  setPassword,
  setRememberMe,
  toggleShowPassword,
  isVisible,
  isLoading,
  error,
  handleSubmit,
  planId,
  billingCycle,
  selectedPlan,
  price,
}) => {
  return (
    <div className="w-full max-w-xl">
      {/* Logo above card */}
      <div className="flex justify-center mb-4 sm:mb-8">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-6 sm:h-8" />
        </Link>
      </div>

      <div
        className={cn(
          "bg-card border border-border rounded-xl p-4 sm:p-8 shadow-lg transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        {/* Header */}
        <div className="mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Sign in
          </h1>
          <p className="text-muted-foreground">
            {selectedPlan
              ? "Sign in to continue with your selected plan"
              : "Enter your credentials to access your account"}
          </p>
        </div>

        {/* Plan Badge */}
        {selectedPlan && price !== undefined && (
          <PlanBadge
            plan={selectedPlan}
            price={price}
            billingCycle={billingCycle || "annual"}
          />
        )}

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
          isLoading={isLoading}
          error={error}
          handleSubmit={handleSubmit}
          planId={planId}
          billingCycle={billingCycle}
        />
      </div>
    </div>
  );
};
