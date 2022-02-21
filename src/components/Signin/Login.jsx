import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, firebaseApp } from "../../firebase/FirebseConfig";
import { useAuth } from "../../context/UserContextProvider";
import navLogo from "../../assets/Netflix-Logo.svg";
import Footer from "../Home/Footer";

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
    <div className="form-container">
      <img src={navLogo} alt="" className="nav-logo" />
      <div className="form-footer-container">
        <form onSubmit={submitHandler}>
          <h2>Sign In</h2>
          <input
            type="text"
            id="username"
            placeholder="Email or Phone Number"
            value={username}
            onChange={inputHandler}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={inputHandler}
          />
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
    </div>
  );
};

export default Login;
