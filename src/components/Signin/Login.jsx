import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLogo from "../../assets/Netflix-Logo.svg";
import { useAuth } from "../../context/UserContextProvider";

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

  useEffect(() => {
    authObject.user ? navigate("/browse") : navigate("/login");
  }, []);

  const inputHandler = (event) => {
    if (event.target.id === "username") {
      setUserName(event.target.value);
      setUserError("");
    } else {
      setPassword(event.target.value);
      setPasswordError("");
    }
  };

  const validateEmail = (email) => {
    //Validates the email address
    var emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    //Validates the phone number
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
    return phoneRegex.test(phone);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateEmail(username) && !validatePhone(username)) {
      setShowError(false);
      setUserError("Please enter a valid email address or phone number.");
      if (!password) {
        setShowError(false);
        setPasswordError("Password cannnot be empty.");
      }
      return;
    }
    if (!password) {
      setShowError(false);
      setPasswordError("Password cannnot be empty.");
      return;
    }

    authObject
      .loginWithEmail(username, password)
      .then(() => {
        from ? navigate(from, { replace: true }) : navigate("/browse");
      })
      .catch((err) => {
        setShowError(true);
        setPassword("");
      });
  };

  const loginWithFacebook = () => {
    authObject
      .loginInWithFacebookPopup()
      .then(() => {
        console.log("facebook");
        from ? navigate(from, { replace: true }) : navigate("/browse");
      })
      .catch((err) => {
        setShowError(true);
        setPassword("");
      });
  };

  return (
    <div className="form-container">
      <Link to="/">
        <img src={navLogo} alt="" className="nav-logo" />
      </Link>

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
          type="text"
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
