import React from "react";
import { LucideIcon, Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  required?: boolean;
  hint?: string;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = false,
  hint,
  showPasswordToggle = false,
  isPasswordVisible = false,
  onTogglePassword,
}) => {
  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div className="space-y-1.5 sm:space-y-2">
      <label className="text-xs sm:text-sm font-medium text-foreground">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`w-full h-9 sm:h-11 pl-9 sm:pl-10 ${showPasswordToggle ? "pr-10 sm:pr-12" : "pr-3 sm:pr-4"} rounded-lg border border-border bg-secondary/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
        />
        {showPasswordToggle && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isPasswordVisible ? (
              <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        )}
      </div>
      {hint && (
        <p className="text-[11px] sm:text-xs text-muted-foreground">{hint}</p>
      )}
    </div>
  );
};
