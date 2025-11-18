import React, { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { Navigate } from "react-router-dom";

const PremiumPortal = () => {
  const { user } = useContext(AuthContext);

  if (!user?.isPremium) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Premium Portal</h1>
      <p className="text-lg">Enjoy exclusive content and features as a premium user!</p>
      {/* Add premium content here */}
    </div>
  );
};

export default PremiumPortal;