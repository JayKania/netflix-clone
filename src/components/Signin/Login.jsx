import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseApp } from "../../firebase/FirebseConfig";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = (event) => {
    console.log(event.target.id);
    event.target.id === "username"
      ? setUserName(event.target.value)
      : setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // console.log(userCredential.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log(auth);
  };

  const handleSignout = () => {
    const auth = getAuth(firebaseApp);
    signOut(auth);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="username"
        placeholder="Email or Phone Number"
        value={username}
        onChange={inputHandler}
      />
      <input
        type="text"
        id="password"
        placeholder="Password"
        value={password}
        onChange={inputHandler}
      />
      <button type="submit">Sign in</button>
      <input type="button" onClick={handleSignout} value="Sign out" />
    </form>
  );
};

export default Login;
