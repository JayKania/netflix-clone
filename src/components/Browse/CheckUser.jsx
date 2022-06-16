import React, { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import userStore from "../../store/UserStore";

const CheckUser = ({ children }) => {
  const user = userStore((state) => state.user);
  const location = useLocation();
  const from = location.state ? location.state.from : "/browse";
  if (user) {
    return <Navigate to={from} replace />;
  }
  return children;
};

export default CheckUser;
