import React from "react";
import { useLoginForm } from "./hooks/useLoginForm";
import { LoginCard } from "./components";

const Login = () => {
  const {
    formState,
    setEmail,
    setPassword,
    setRememberMe,
    toggleShowPassword,
    isVisible,
    handleSubmit,
  } = useLoginForm();

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
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
