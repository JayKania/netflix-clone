import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import userStore from "../../store/UserStore";
import Profiles from "../Home/Profiles";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FirebseConfig";

const Browse = () => {
  const { logOut, user } = userStore((state) => ({
    logOut: state.logOut,
    user: state.user,
  }));

  const location = useLocation();
  const from = location.state ? location.state.from : null;

  useEffect(() => {
    const createProfile = async () => {
      // getting reference of our document (uid)
      const docRef = doc(db, "users", user.uid);

      // now adding emailId as field in our selected document
      await setDoc(docRef, { email: user.email });

      // now for subcollection there are no methods for creating collections or subcollections in firebase v9
      // we just start writing into the document of the subcollection by specifing the path with name of subcollection
      // ex: users/uid/profiles translates to users -> collection, uid -> document, profiles -> subcollection
      await setDoc(
        doc(db, "users/" + user.uid + "/profiles", user.email.split(`@`)[0]),
        {
          movies: ["Dr. Strange"],
        }
      );
    };

    if (from) {
      createProfile();
    }
  }, [from, user]);

  return (
    <>
      {/* <div>
        <Profiles />
      </div> */}
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
