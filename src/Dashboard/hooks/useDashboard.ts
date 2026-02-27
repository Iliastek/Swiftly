import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import type { Subscription, AIModelUsage } from "../types";

export const useDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [autoRenewal, setAutoRenewal] = useState(true);
  const [modelUsage, setModelUsage] = useState<AIModelUsage[]>([]);

  useEffect(() => {
    const load = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }

      // Set email immediately
      setUserEmail(user.email || "");

      const { data: profile } = await supabase
        .from("users")
        .select("full_name, email")
        .eq("id", user.id)
        .single();

      if (profile) {
        setUserName(profile.full_name || "User");
        setUserEmail(profile.email);
      } else {
        // If profile doesn't exist, create it
        const fullName = user.user_metadata?.full_name || "";

        await supabase.from("users").insert({
          id: user.id,
          full_name: fullName,
          email: user.email || "",
        });

        setUserName(fullName || "User");
      }

      const { data: sub } = await supabase
        .from("subscriptions")
        .select("plan_id, billing_cycle, status, price")
        .eq("user_id", user.id)
        .single();

      if (sub) setSubscription(sub);

      // Mock AI usage data - replace with actual API call
      // This shows ticket solving statistics across different AI models
      const usage: AIModelUsage[] = [
        {
          name: "Claude Sonnet 4",
          percentage: 75,
          used: 75,
          total: 100,
          status: "high",
        },
        {
          name: "ChatGPT 5",
          percentage: 12,
          used: 12,
          total: 100,
          status: "normal",
        },
        {
          name: "Grok 3",
          percentage: 57,
          used: 57,
          total: 100,
          status: "normal",
        },
        {
          name: "Gemini 2.5",
          percentage: 95,
          used: 95,
          total: 100,
          status: "critical",
        },
      ];
      setModelUsage(usage);

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
    modelUsage,
  };
};
