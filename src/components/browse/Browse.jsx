import React, { useEffect } from "react";
import { useAuth } from "../../context/UserContextProvider";

const Browse = () => {
  const authObject = useAuth();
  useEffect(() => {
    console.log(authObject);
  });

  return <div>Browse</div>;
};

export default Browse;
