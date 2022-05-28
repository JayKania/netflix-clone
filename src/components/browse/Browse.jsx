import React from "react";
import { useAuth } from "../../context/UserContextProvider";
import Profiles from "./Profiles";

const Browse = () => {
  const { logout } = useAuth();

  return (
    <>
      <div>
        <Profiles />
      </div>
      <input type="button" onClick={logout} value="Sign out" />
    </>
  );
};

export default Browse;
