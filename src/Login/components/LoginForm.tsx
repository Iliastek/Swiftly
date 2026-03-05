import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import type { LoginFormState } from "../types";

interface LoginFormProps {
  formState: LoginFormState;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (rememberMe: boolean) => void;
  toggleShowPassword: () => void;
  isLoading: boolean;
  error: string | null;
  handleSubmit: (e: React.FormEvent) => void;
  planId?: string | null;
  billingCycle?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  formState,
  setEmail,
  setPassword,
  setRememberMe,
  toggleShowPassword,
  isLoading,
  error,
  handleSubmit,
  planId,
  billingCycle,
}) => {
  return (
    <>
      {error && (
        <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
        {/* Email */}
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-xs sm:text-sm font-medium text-foreground">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="name@example.com..."
              value={formState.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-9 sm:h-11 pl-9 sm:pl-10 pr-3 sm:pr-4 rounded-lg border border-border bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-xs sm:text-sm font-medium text-foreground">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <input
              type={formState.showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              value={formState.password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-9 sm:h-11 pl-9 sm:pl-10 pr-10 sm:pr-12 rounded-lg border border-border bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {formState.showPassword ? (
                <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <input
            type="checkbox"
            id="remember"
            checked={formState.rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border-border bg-secondary/50 text-primary focus:ring-primary/50 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-xs sm:text-sm text-foreground cursor-pointer"
          >
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-9 sm:h-11"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      {/* Register Link */}
      <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          to={
            planId
              ? `/register?plan=${planId}&billing=${billingCycle}`
              : "/register"
          }
          className="text-foreground font-medium hover:text-primary transition-colors"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};
