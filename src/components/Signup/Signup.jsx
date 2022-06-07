import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import navLogo from "../../assets/Netflix-Logo.svg";
import userStore from "../../store/UserStore";
import SignupFooter from "./SignupFooter";

const Signup = () => {
  // store
  const { user, email } = userStore((state) => ({
    user: state.user,
    email: state.email,
    signup: state.signup,
  }));

  // state
  const [signupEmail, setSignupEmail] = useState(email);
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPasswordErr] = useState("");

  // handlers
  const inputHandler = (event) => {
    event.target.id === "email"
      ? setSignupEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // setSignupEmail(signupEmail.trim());
    // setPassword(password.trim());
    let emptyFlag = false;
    if (signupEmail.length === 0) {
      setEmailErr("Email is required.");
      emptyFlag = true;
    }

    if (password.length === 0) {
      setPasswordErr("Password is required.");
      emptyFlag = true;
    }

    if (emptyFlag) return;

    let validateFlag = false;
    if (!validateEmail(signupEmail)) {
      setEmailErr("Please enter a valid email address.");
      validateFlag = true;
    }

    if (!validatePassword(password)) {
      setPasswordErr("Password should be between 6 and 60 characters long.");
      validateFlag = true;
    }

    if (validateFlag) {
      return;
    } else {
      setEmailErr("");
      setPasswordErr("");
    }
  };

  // helpers
  const validateEmail = (email) => {
    //Validates the email address
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 60 ? true : false;
  };

  const navigate = useNavigate();
  useEffect(() => {
    user ? navigate("/browse") : navigate("/signup");
  }, []);
  return (
    <StyledSignupContainer>
      <StyledNav>
        <StyledNavLogo className="nav-logo">
          <a href="/">
            <img src={navLogo} alt="" />
          </a>
        </StyledNavLogo>
        <a className="login" href="/login">
          Sign In
        </a>
      </StyledNav>
      <StyledSignupForm onSubmit={submitHandler}>
        <h3>
          Create a password to start
          <br /> your membership
        </h3>
        <p>
          Just a few more steps and you're done!<br></br> We hate paperwork,
          too.
        </p>
        <input
          type="text"
          placeholder="Email"
          value={signupEmail}
          onChange={inputHandler}
          id="email"
          className={`${emailErr ? "err" : ""}`}
        />
        <span className="email-err">{emailErr}</span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={inputHandler}
          id="password"
          className={`password" ${passErr ? "err" : ""}`}
        />
        <span className="password-err">{passErr}</span>

        <button>Next</button>
      </StyledSignupForm>
      <SignupFooter />
    </StyledSignupContainer>
  );
};

const StyledSignupContainer = styled.div``;

const StyledNav = styled.nav`
  padding: 1.25rem 1.75rem;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .login {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: black;

    :hover {
      text-decoration: underline;
    }
  }
`;

const StyledNavLogo = styled.div`
  height: 45px;
  a {
    width: max-content;
    img {
      height: 100%;
      width: 200px;
    }
  }
  @media only screen and (max-width: 540px) {
    height: 25px;
    a {
      img {
        width: 100px;
      }
    }
  }
`;

const StyledSignupForm = styled.form`
  max-width: 475px;
  margin: 4rem auto;
  padding: 1rem;
  /* border: 1px solid black; */
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid black;
    &.err {
      border-color: #b92d2b;
    }
    :focus {
      outline: none;
    }
  }
  button {
    text-align: center;
    width: 100%;
    font-size: 1.65rem;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #f6121d;
    border: none;
  }
  span {
    font-size: 0.85rem;
    color: #b92d2b;
  }
`;

export default Signup;
