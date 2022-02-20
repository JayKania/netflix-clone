import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, firebaseApp } from "../../firebase/FirebseConfig";
import { useAuth } from "../../context/UserContextProvider";

const Login = ({ setUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const authObject = useAuth();

  const from = location.state ? location.state.form : null;
  console.log(from);

  const inputHandler = (event) => {
    event.target.id === "username"
      ? setUserName(event.target.value)
      : setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authObject
      .login(username, password)
      .then(() => {
        console.log("loged in");
        from ? navigate(from, { replace: true }) : navigate("/browse");
      })
      .catch((err) => {
        console.log(err.message);
      });
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
