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
}) => {
  return (
    <>
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="name@example.com..."
              value={formState.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type={formState.showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              value={formState.password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-11 pl-10 pr-12 rounded-lg border border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {formState.showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            checked={formState.rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-border bg-secondary/50 text-primary focus:ring-primary/50 cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-sm text-foreground cursor-pointer"
          >
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full h-11" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      {/* Register Link */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-foreground font-medium hover:text-primary transition-colors"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};
