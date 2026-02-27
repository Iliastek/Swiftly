import React, { useEffect } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { cn } from "../../lib/utils";

export type ToastType = "success" | "error";

interface ToastProps {
  type: ToastType;
  title: string;
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  type,
  title,
  message,
  onClose,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);

    // Auto-close after duration
    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 w-full max-w-md pointer-events-auto",
        "transform transition-all duration-300 ease-out",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <div
        className={cn(
          "rounded-xl border shadow-lg backdrop-blur-sm overflow-hidden",
          type === "success"
            ? "bg-green-950/95 border-green-800/50"
            : "bg-red-950/95 border-red-800/50",
        )}
      >
        {/* Progress bar */}
        <div
          className={cn(
            "h-1 animate-shrink origin-left",
            type === "success" ? "bg-green-500" : "bg-red-500",
          )}
          style={{
            animation: `shrink ${duration}ms linear forwards`,
          }}
        />

        <div className="p-4 flex items-start gap-3">
          {/* Icon */}
          <div
            className={cn(
              "shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
              type === "success"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400",
            )}
          >
            {type === "success" ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={cn(
                "font-semibold text-base mb-1",
                type === "success" ? "text-green-100" : "text-red-100",
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-sm",
                type === "success" ? "text-green-200/80" : "text-red-200/80",
              )}
            >
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className={cn(
              "shrink-0 p-1 rounded-lg transition-colors",
              type === "success"
                ? "text-green-400 hover:bg-green-500/20"
                : "text-red-400 hover:bg-red-500/20",
            )}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes shrink {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
    </div>
  );
};
