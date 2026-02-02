import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { PlanInfo } from "../data/planDetails";
import { FormInput } from "./FormInput";
import { OAuthButtons } from "./OAuthButtons";
import { PlanBadgeMobile } from "./PlanBadgeMobile";

interface RegisterFormProps {
  // Form state
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;

  // Setters
  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setAgreeToTerms: (value: boolean) => void;
  toggleShowPassword: () => void;
  toggleShowConfirmPassword: () => void;

  // Plan info
  selectedPlan: PlanInfo | null;
  price: number;
  billingCycle: string;

  // Animation
  isVisible: boolean;

  // Actions
  onSubmit: (e: React.FormEvent) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  fullName,
  email,
  password,
  confirmPassword,
  agreeToTerms,
  showPassword,
  showConfirmPassword,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setAgreeToTerms,
  toggleShowPassword,
  toggleShowConfirmPassword,
  selectedPlan,
  price,
  billingCycle,
  isVisible,
  onSubmit,
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-md transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
        {/* Mobile Plan Badge */}
        {selectedPlan && (
          <PlanBadgeMobile
            plan={selectedPlan}
            price={price}
            billingCycle={billingCycle}
          />
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {selectedPlan ? "Complete your registration" : "Create an account"}
          </h1>
          <p className="text-muted-foreground">
            {selectedPlan
              ? `You're signing up for ${selectedPlan.name}`
              : "Enter your information to get started"}
          </p>
        </div>

        {/* OAuth Buttons */}
        <OAuthButtons />

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-4 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          <FormInput
            label="Full name"
            type="text"
            placeholder="John Doe..."
            value={fullName}
            onChange={setFullName}
            icon={User}
            required
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="name@example.com..."
            value={email}
            onChange={setEmail}
            icon={Mail}
            required
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Create a password..."
            value={password}
            onChange={setPassword}
            icon={Lock}
            required
            hint="Must be at least 8 characters with uppercase, lowercase, and number"
            showPasswordToggle
            isPasswordVisible={showPassword}
            onTogglePassword={toggleShowPassword}
          />

          <FormInput
            label="Confirm password"
            type="password"
            placeholder="Confirm your password..."
            value={confirmPassword}
            onChange={setConfirmPassword}
            icon={Lock}
            required
            showPasswordToggle
            isPasswordVisible={showConfirmPassword}
            onTogglePassword={toggleShowConfirmPassword}
          />

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
              className="h-4 w-4 mt-0.5 rounded border-border bg-secondary/50 text-primary focus:ring-primary/50 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-sm text-foreground cursor-pointer"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="underline hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={cn(
              "w-full h-11",
              selectedPlan &&
                `bg-gradient-to-r ${selectedPlan.gradient} hover:opacity-90`,
            )}
          >
            {selectedPlan
              ? `Start with ${selectedPlan.name}`
              : "Create account"}
          </Button>
        </form>

        {/* Sign In Link */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-foreground font-medium hover:text-primary transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
