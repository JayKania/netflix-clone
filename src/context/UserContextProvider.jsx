import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, firebaseApp } from "../firebase/FirebseConfig";

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

  const login = (username, password) => {
    return signInWithEmailAndPassword(auth, username, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    signup,
    login,
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
