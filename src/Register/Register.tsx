import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/logo";
import { cn } from "../lib/utils";
import { useRegisterForm } from "./hooks/useRegisterForm";
import { PlanCard, RegisterForm } from "./components";

const Register: React.FC = () => {
  const {
    formState,
    setFullName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setAgreeToTerms,
    toggleShowPassword,
    toggleShowConfirmPassword,
    selectedPlan,
    billingCycle,
    price,
    isVisible,
    isLoading,
    error,
    handleSubmit,
  } = useRegisterForm();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-6xl">
          {/* Logo centered above everything */}
          <div className="flex justify-center mb-8">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo className="h-8" />
            </Link>
          </div>

          <div
            className={cn(
              "w-full flex gap-6 justify-center",
              selectedPlan ? "max-w-6xl" : "max-w-xl mx-auto",
            )}
          >
            {/* Desktop Plan Card */}
            {selectedPlan && (
              <PlanCard
                plan={selectedPlan}
                price={price}
                billingCycle={billingCycle}
                isVisible={isVisible}
              />
            )}

            {/* Register Form */}
            <RegisterForm
              fullName={formState.fullName}
              email={formState.email}
              password={formState.password}
              confirmPassword={formState.confirmPassword}
              agreeToTerms={formState.agreeToTerms}
              showPassword={formState.showPassword}
              showConfirmPassword={formState.showConfirmPassword}
              setFullName={setFullName}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              setAgreeToTerms={setAgreeToTerms}
              toggleShowPassword={toggleShowPassword}
              toggleShowConfirmPassword={toggleShowConfirmPassword}
              selectedPlan={selectedPlan}
              price={price}
              billingCycle={billingCycle}
              isVisible={isVisible}
              isLoading={isLoading}
              error={error}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
