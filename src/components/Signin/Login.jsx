import { getAuth, signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, firebaseApp } from "../../firebase/FirebseConfig";
import { useAuth } from "../../context/UserContextProvider";
import navLogo from "../../assets/Netflix-Logo.svg";
import Footer from "../Home/Footer";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const authObject = useAuth();
  const userErrorRef = useRef();
  const passwordErrorRef = useRef();

  const from = location.state ? location.state.form : null;

  const inputHandler = (event) => {
    if (event.target.id === "username") {
      setUserName(event.target.value);
      setUserError("");
    } else {
      setPassword(event.target.value);
      setPasswordError("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setShowError(false);
      if (!username) {
        setUserError("Username cannot be empty");
      }
      if (!password) {
        setPasswordError("Password cannnot be empty");
      }
      return;
    }

    authObject
      .login(username, password)
      .then(() => {
        console.log("loged in");
        from ? navigate(from, { replace: true }) : navigate("/browse");
      })
      .catch((err) => {
        console.log(err.code);
        setShowError(true);
        setPassword("");
      });
  };

  return (
    <div className="form-container">
      <img src={navLogo} alt="" className="nav-logo" />

      <form onSubmit={submitHandler}>
        <h2>Sign In</h2>$
        {showError ? (
          <div className={"genric-err"}>
            Incorrect password. Please try again or you can{" "}
            <a href="#" id="reset-password">
              reset your password.
            </a>
          </div>
        ) : null}
        <input
          type="email"
          id="username"
          placeholder="Email or Phone Number"
          value={username}
          onChange={inputHandler}
          className={`${userError ? "username-err" : ""}`}
        />
        <div className="user-err" ref={userErrorRef}>
          {userError}
        </div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={inputHandler}
          className={`${passwordError ? "password-err" : ""}`}
        />
        <div className="pass-err" ref={passwordErrorRef}>
          {passwordError}
        </div>
        <button type="submit">Sign in</button>
        <div className="checkbox-help-wrapper">
          <div className="checkbox">
            <input type="checkbox" name="remember" id="remember" />
            <div>Remember me</div>
          </div>
          <div className="help">Need help?</div>
        </div>
        <div className="facebook-login">
          <div className="facebook-icon">
            <img
              // class="facebook-icon"
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
            />
          </div>
          <span className="facebook-login-text">Login with facebook</span>
        </div>
      </form>
      <footer className="footer">
        <div className="grid-container">
          <p className="footer-title">
            Questions? Call <span>000-800-040-1843</span>{" "}
          </p>
          <div className="grid-item">FAQ</div>
          <div className="grid-item">Help Center</div>
          <div className="grid-item">Terms of Use</div>
          <div className="grid-item">Privacy</div>
          <div className="grid-item">Cookie Prefrences</div>
          <div className="grid-item">Corporate Information</div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
