import React from "react";
import { useSearchParams } from "react-router-dom";
import { useLoginForm } from "./hooks/useLoginForm";
import { LoginCard } from "./components";
import { planDetails, calculatePrice } from "../Register/data/planDetails";

const Login = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan");
  const billingCycle = searchParams.get("billing") || "annual";

  const selectedPlan = planId ? planDetails[planId] : null;
  const price = selectedPlan ? calculatePrice(selectedPlan, billingCycle) : 0;

  const {
    formState,
    setEmail,
    setPassword,
    setRememberMe,
    toggleShowPassword,
    isVisible,
    isLoading,
    error,
    handleSubmit,
  } = useLoginForm(planId, billingCycle);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <LoginCard
          formState={formState}
          setEmail={setEmail}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          toggleShowPassword={toggleShowPassword}
          isVisible={isVisible}
          isLoading={isLoading}
          error={error}
          handleSubmit={handleSubmit}
          planId={planId}
          billingCycle={billingCycle}
          selectedPlan={selectedPlan}
          price={price}
        />
      </div>
    </div>
  );
};

export default Login;
