import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/UserContextProvider";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const authObject = useAuth();
  console.log(authObject.user);
  if (!authObject.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
