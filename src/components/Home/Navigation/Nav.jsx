import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/Netflix-Logo.svg";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLogo className="nav-logo">
        <a href="/">
          <img src={navLogo} alt="" />
        </a>
      </StyledNavLogo>
      <StyledLanguageSignin className="language-signin flex-item">
        <div className="language">English</div>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </StyledLanguageSignin>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  padding-top: 1.8rem;

  @media only screen and (max-width: 482px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding-top: 1.5rem;
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

const StyledLanguageSignin = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1.5rem;
  .language {
    color: white;
    height: fit-content;
    padding: 0.3rem 0.75rem;
    border: 1px solid white;
    border-radius: 5px;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    height: fit-content;
    border: none;
    padding: 7.5px 18px;
    margin-right: 1rem;
    font-size: 1rem;
    background: #ee0e19;
    border-radius: 5px;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Nav;
