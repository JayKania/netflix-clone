import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState("");

  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    //Validates the email address
    var emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const submitHandler = () => {
    if (!validateEmail(email)) {
      setUserError("Please enter a valid email address.");
      return;
    }
    setUserError("");
  };

  return (
    <StyledInputButtonWrapper className="input-button-wrapper">
      <StyledInputErrWrapper className="input-err-wrapper">
        <input
          type="text"
          placeholder="Email address"
          value={email}
          onChange={inputHandler}
          className={`${userError ? "show-err-border" : ""}`}
        />
        <div className="email-err">{userError}</div>
      </StyledInputErrWrapper>
      <button onClick={submitHandler}>Get Started {">"}</button>
    </StyledInputButtonWrapper>
  );
};

const StyledInputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  button {
    flex-basis: 25%;
    border: none;
    height: 60px;
    width: 200px;
    background-color: #e40914;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    :hover {
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 540px) {
    button {
      margin-top: 2rem;
      flex-basis: 40%;
      height: 45px;
    }
  }
`;

const StyledInputErrWrapper = styled.div`
  position: relative;
  flex-basis: 50%;
  input {
    width: 100%;
    outline: none;
    border: none;
    height: 60px;
    padding: 1rem;
    font-size: 1.3rem;
    &.show-err-border {
      border-bottom: 2px solid #ffa00a;
    }
  }
  .email-err {
    position: absolute;
    font-size: 1.2rem;
    color: #ffa00a;
  }
  @media only screen and (max-width: 540px) {
    flex-basis: 90%;
    input {
      padding: 0.5rem 1rem;
      height: 40px;
    }
  }
`;
export default Input;
