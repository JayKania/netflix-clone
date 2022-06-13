import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import userStore from "../../store/UserStore";
import Profiles from "../Home/Profiles";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/FirebseConfig";
import Nav from "./Navigation/Nav";

const Browse = () => {
  const { logOut, user } = userStore((state) => ({
    logOut: state.logOut,
    user: state.user,
  }));
  // const {profile, }

  const location = useLocation();
  const from = location.state ? location.state.from : null;

  useEffect(() => {
    // getting reference of our document (uid)
    let docRef;
    let docSnap;

    const checkUserExistInDatabase = async () => {
      if (user) {
        docRef = doc(db, "users", user.uid);
        docSnap = await getDoc(docRef);
      }
    };

    checkUserExistInDatabase();

    const createProfile = async () => {
      // now adding emailId as field in our selected document
      await setDoc(docRef, {
        email: user.email,
        profiles: [{ name: user.email.split(`@`)[0], wishlist: [] }],
      });
    };

    // !docSnap.exists() is usefull when user comes from signup route and reloads the page
    // we dont want to overwrite the doc unnecessarily
    if (from && !docSnap.exists()) {
      createProfile();
    }
  }, [from, user]);

  return (
    <>
      {/* <div>
        <Profiles />
      </div> */}
      <Nav />
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
