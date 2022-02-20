// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8JvN2E_FvKO-X21qARMsH2jzVgokoR7M",
  authDomain: "netflix-clone-dc841.firebaseapp.com",
  projectId: "netflix-clone-dc841",
  storageBucket: "netflix-clone-dc841.appspot.com",
  messagingSenderId: "147359651542",
  appId: "1:147359651542:web:add17f70102bdea5529b77",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
