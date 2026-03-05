import React from "react";

export const Divider: React.FC = () => {
  return (
    <div className="relative mb-4 sm:mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border"></div>
      </div>
      <div className="relative flex justify-center text-xs sm:text-sm">
        <span className="bg-card px-3 sm:px-4 text-muted-foreground">
          Or continue with email
        </span>
      </div>
    </div>
  );
};
