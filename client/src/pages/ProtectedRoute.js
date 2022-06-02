import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  if (
    user.type === "Supervisor" ||
    user.type === "Panel Member" ||
    user.type === "Co Supervisor"
  ) {
    if (!user.isValidStaff) {
      return <Navigate to="/wait" />;
    }
  }
  return children;
};

export default ProtectedRoute;
