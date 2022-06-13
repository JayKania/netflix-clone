import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/UserContextProvider";
import userStore from "../../store/UserStore";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  // const authObject = useAuth();
  const user = userStore((state) => state.user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
