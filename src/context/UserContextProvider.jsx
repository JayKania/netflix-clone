import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  facebookAuthrovider,
  firebaseApp,
} from "../firebase/FirebseConfig";

export const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (username, password) => {
    return createUserWithEmailAndPassword(auth, username, password);
  };

  const loginWithEmail = (username, password) => {
    return signInWithEmailAndPassword(auth, username, password);
  };
  const loginWithPhone = (username, password) => {
    // return signInWithEmailAndPassword(auth, username, password);
  };

  const loginInWithFacebookPopup = async () => {
    return signInWithPopup(auth, facebookAuthrovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        console.log(credential);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential);

        // ...
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    signup,
    loginWithEmail,
    loginInWithFacebookPopup,
    logout,
  };

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((fetchUser) => {
      setUser(fetchUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
