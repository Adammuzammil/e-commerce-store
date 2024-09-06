import React from "react";
import { useUserStore } from "../stores/useUserStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
