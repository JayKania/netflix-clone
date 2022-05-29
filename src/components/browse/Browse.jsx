import React from "react";
import userStore from "../../store/UserStore";
import Profiles from "./Profiles";

const Browse = () => {
  const logOut = userStore((state) => state.logOut);
  return (
    <>
      <div>
        <Profiles />
      </div>
      <input
        type="button"
        onClick={() => {
          logOut();
        }}
        value="Sign out"
      />
    </>
  );
};

export default Browse;
