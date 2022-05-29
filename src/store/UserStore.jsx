import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth, firebaseApp } from "../firebase/FirebseConfig";

const store = (set) => ({
  user: null,
  loginWithEmail: async (username, password) => {
    const data = await signInWithEmailAndPassword(auth, username, password);
    set({ user: data.user });
  },
  logOut: async () => {
    await signOut(auth);
    set({ user: null });
  },
});

const userStore = create(devtools(persist(store)));

export default userStore;
