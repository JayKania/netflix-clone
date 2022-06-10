import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { auth } from "../firebase/FirebseConfig";

const store = (set) => ({
  user: null,
  email: null,
  setCurrentEmail: (email) => {
    set({ email: email });
  },
  loginWithEmail: async (username, password) => {
    const data = await signInWithEmailAndPassword(auth, username, password);
    set({ user: data.user });
  },
  logOut: async () => {
    await signOut(auth);
    set({ user: null });
  },
  signup: async (username, password) => {
    const data = await createUserWithEmailAndPassword(auth, username, password);
    // console.log(data.length);
    console.log(data.user);
    set({ user: data.user });
  },
});

const userStore = create(devtools(persist(store)));

export default userStore;
