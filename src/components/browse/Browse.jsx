import React, { useEffect } from "react";
import { useAuth } from "../../context/UserContextProvider";

const Browse = () => {
  const { logout } = useAuth();

  return (
    <>
      <div>Browse</div>
      <input type="button" onClick={logout} value="Sign out" />
    </>
  );
};

export default Browse;
