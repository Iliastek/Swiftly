import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import type { Subscription } from "../types";

export const useDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [autoRenewal, setAutoRenewal] = useState(true);

  useEffect(() => {
    const load = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("users")
        .select("full_name, email")
        .eq("id", user.id)
        .single();

      if (profile) {
        setUserName(profile.full_name);
        setUserEmail(profile.email);
      }

      const { data: sub } = await supabase
        .from("subscriptions")
        .select("plan_id, billing_cycle, status, price")
        .eq("user_id", user.id)
        .single();

      if (sub) setSubscription(sub);
      setIsLoading(false);
    };
    load();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
    localStorage.removeItem("isLoggedIn");
  };

  return {
    isLoading,
    userName,
    userEmail,
    subscription,
    autoRenewal,
    setAutoRenewal,
    handleLogout,
  };
};
