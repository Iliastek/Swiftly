import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/logo";
import { useDashboard } from "./hooks/useDashboard";
import { UserCard, SubscriptionCard } from "./components";

const Dashboard: React.FC = () => {
  const {
    isLoading,
    userName,
    userEmail,
    subscription,
    autoRenewal,
    setAutoRenewal,
    handleLogout,
  } = useDashboard();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="w-full max-w-lg flex justify-center mb-6">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-8" />
        </Link>
      </div>

      <div className="w-full max-w-lg space-y-4">
        <UserCard
          userName={userName}
          userEmail={userEmail}
          onLogout={handleLogout}
        />

        {subscription ? (
          <SubscriptionCard
            subscription={subscription}
            autoRenewal={autoRenewal}
            onToggleAutoRenewal={() => setAutoRenewal(!autoRenewal)}
          />
        ) : (
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
            <p className="text-muted-foreground mb-3">
              You don't have a plan yet.
            </p>
            <Link
              to="/pricing"
              className="text-primary font-medium hover:underline"
            >
              View plans →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
