import React from "react";
import { Button } from "../../components/ui/button";

interface UserCardProps {
  userName: string;
  userEmail: string;
  onLogout: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  userName,
  userEmail,
  onLogout,
}) => {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">Logged in as</p>
        <p className="font-semibold text-foreground">{userName}</p>
        <p className="text-xs text-muted-foreground">{userEmail}</p>
      </div>
      <Button variant="outline" size="sm" onClick={onLogout}>
        Sign out
      </Button>
    </div>
  );
};
