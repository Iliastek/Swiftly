import React from "react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import type { Subscription } from "../types";
import { planNames } from "../types";

interface SubscriptionCardProps {
  subscription: Subscription;
  autoRenewal: boolean;
  onToggleAutoRenewal: () => void;
}

const formatNumber = (n: number) =>
  n >= 1000 ? n.toLocaleString("de-DE") : n.toString();

const barPercent = (used: number, limit: number) =>
  Math.min((used / limit) * 100, 100);

// Hardcoded usage for now
const usage = {
  apiRequests: { used: 45000, limit: 100000 },
  storage: { used: 35, limit: 100 },
};

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  autoRenewal,
  onToggleAutoRenewal,
}) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      {/* Plan Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-foreground">
              {planNames[subscription.plan_id] || subscription.plan_id}
            </h2>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs font-medium capitalize border",
                subscription.status === "active"
                  ? "bg-green-500/20 border-green-500/30 text-green-400"
                  : "bg-red-500/20 border-red-500/30 text-red-400",
              )}
            >
              {subscription.status}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            ${subscription.price}/
            {subscription.billing_cycle === "annual"
              ? "mo (billed yearly)"
              : "month"}
          </p>
        </div>
        <Button variant="outline" size="sm">
          Manage
        </Button>
      </div>

      {/* Usage */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-foreground">Usage</h3>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-foreground">API requests</span>
            <span className="text-muted-foreground">
              {formatNumber(usage.apiRequests.used)} requests /{" "}
              {formatNumber(usage.apiRequests.limit)}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-foreground transition-all"
              style={{
                width: `${barPercent(usage.apiRequests.used, usage.apiRequests.limit)}%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-foreground">Storage</span>
            <span className="text-muted-foreground">
              {usage.storage.used} GB / {usage.storage.limit}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-foreground transition-all"
              style={{
                width: `${barPercent(usage.storage.used, usage.storage.limit)}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border my-6" />

      {/* Next billing date */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-muted-foreground">📅</span>
        <div>
          <p className="text-sm font-medium text-foreground">
            Next billing date
          </p>
          <p className="text-sm text-muted-foreground">—</p>
        </div>
      </div>

      <div className="border-t border-border my-6" />

      {/* Auto-renewal */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-foreground">Auto-renewal</p>
          <p className="text-xs text-muted-foreground">
            Your subscription will renew automatically
          </p>
        </div>
        <button
          onClick={onToggleAutoRenewal}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            autoRenewal ? "bg-primary" : "bg-secondary",
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 rounded-full bg-white transition-transform",
              autoRenewal ? "translate-x-6" : "translate-x-1",
            )}
          />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          📈 Upgrade
        </Button>
        <Button variant="outline" size="sm">
          Downgrade
        </Button>
        <Button variant="destructive" size="sm">
          Cancel subscription
        </Button>
      </div>
    </div>
  );
};
