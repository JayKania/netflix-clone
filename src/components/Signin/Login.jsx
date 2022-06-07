import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLogo from "../../assets/Netflix-Logo.svg";
import userStore from "../../store/UserStore";
import LoginFooter from "./LoginFooter";
import styled from "styled-components";
import background_img from "../../assets/background-image.jpg";

const Login = () => {
  // getting user actions from store
  const { user, loginWithEmail, email } = userStore((state) => ({
    user: state.user,
    loginWithEmail: state.loginWithEmail,
    email: state.email,
  }));

  const [username, setUserName] = useState(email);
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userErrorRef = useRef();
  const passwordErrorRef = useRef();

  const from = location.state ? location.state.form : null;

  useEffect(() => {
    user ? navigate("/browse") : navigate("/login");
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
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    //Validates the phone number
    const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
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

    loginWithEmail(username, password)
      .then(() => {
        from ? navigate(from, { replace: true }) : navigate("/browse");
      })
      .catch((err) => {
        console.log(err.message);
        setShowError(true);
        setPassword("");
      });
  };

  return (
    <StyledFormContainer className="form-container">
      <Link to="/">
        <img src={navLogo} alt="" className="nav-logo" />
      </Link>

      <StyledForm onSubmit={submitHandler}>
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
          placeholder="Email address"
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
      </StyledForm>
      <LoginFooter />
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;

  // padding: 2rem 2rem;
  background: url(${background_img});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 30px 70px 50px 500px #000000a6,
    inset -30px -50px 50px 100px #000000a6;
  .nav-logo {
    height: 45px;
    width: 200px;
    margin-top: 2rem;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 540px) {
    background: black;
    .nav-logo {
      height: 2rem;
      width: 80px;
    }
  }

  @media (min-width: 550px) and (max-width: 1025px) and (orientation: portrait) {
  }
`;

const StyledForm = styled.form`
  max-width: 400px;
  padding: 2rem 3rem;
  // margin: 4rem 0rem;
  margin: 5rem auto 10rem auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  h2 {
    opacity: 1;
    color: white;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  .genric-err {
    background-color: #e87c03;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    a {
      color: white;
    }
  }
  input {
    outline: none;
    background-color: #333333;
    border: 0px;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.1rem;
    width: 100%;
    color: white;
    font-weight: 100;
  }
  .username-err {
    border-bottom: 1px solid #e87c03;
  }
  .password-err {
    border-bottom: 1px solid #e87c03;
  }
  .user-err {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    color: #e87c03;
  }
  .pass-err {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    color: #e87c03;
  }
  button {
    width: 100%;
    border: none;
    padding: 1rem;
    background-color: #e50914;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 5px;
    margin-top: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  .checkbox-help-wrapper {
    padding-top: 1rem;
    display: flex;
    color: rgb(131, 131, 131);
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    .checkbox {
      display: flex;
      align-items: center;
      width: 70%;
      input[type="checkbox"] {
        width: fit-content;
        margin: 0;
        margin-right: 5px;
        &:checked {
          color: grey;
        }
      }
    }
    .help:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    padding: 1rem;
    // padding-bottom: 2rem;
    margin-bottom: 4rem;
    padding-bottom: 10rem;
    border-radius: 0;
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    .genric-err {
      font-size: 1.5rem;
      a {
        font-size: 1.5rem;
      }
    }
    .user-err,
    .pass-err {
      font-size: 1.2rem;
    }
    input {
      font-size: 1.4rem;
      padding: 1.5rem 1.7rem;
    }
    button {
      margin-top: 4rem;
      font-size: 1.5rem;
    }
    .checkbox-help-wrapper {
      .checkbox {
        div {
          font-size: 1.2rem;
        }
      }
      .help {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 550px) and (max-width: 1025px) and (orientation: portrait) {
    margin-top: 5rem;
    padding: 4.5rem;
    max-width: 450px;
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    input {
      font-size: 1.4rem;
      padding: 1.5rem 1.7rem;
    }
    button {
      margin-top: 4rem;
      font-size: 1.5rem;
    }
    .checkbox-help-wrapper {
      .checkbox {
        div {
          font-size: 1.2rem;
        }
      }
      .help {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Login;
