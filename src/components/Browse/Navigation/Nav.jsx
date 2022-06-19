import React from "react";
import styled from "styled-components";
import navLogo from "../../../assets/Netflix-Logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLinks>
        <StyledMobileMenu className="mobile-menu">
          <img
            src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif"
            alt="mobile-menu"
          />
        </StyledMobileMenu>

        <StyledNavLogo href="/" className="nav-logo">
          <img src={navLogo} alt="" />
        </StyledNavLogo>

        <a href="/browse" className="nav-links">
          Home
        </a>
        <a href="#" className="nav-links">
          TV Shows
        </a>
        <a href="#" className="nav-links">
          Movies
        </a>
        <a href="#" className="nav-links">
          New & Popular
        </a>
        <a href="#" className="nav-links">
          My List
        </a>
      </StyledLinks>
      <StyledSearchBar
        type="text"
        placeholder="Search"
        className="search-bar"
      />
      <StyledDropdown className="dropdown">
        <StyledCurrProfileImg className="curr-profile-img"></StyledCurrProfileImg>
        <StyledDropdownBtn className="dropdown-btn"> </StyledDropdownBtn>
        <StyledDropdownContent className="dropdown-content">
          <StyledProfileLink>
            <div className="profile-img"></div>
            <a href="#">Profile 1</a>
          </StyledProfileLink>
          <StyledProfileLink>
            <div className="profile-img"></div>
            <a href="#">Profile 1</a>
          </StyledProfileLink>
          <StyledProfileLink>
            <div className="profile-img"></div>
            <a href="#">Profile 1</a>
          </StyledProfileLink>
        </StyledDropdownContent>
      </StyledDropdown>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  padding: 0rem 2.5rem;
  align-items: center;
  height: 68px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  position: fixed;
  background: linear-gradient(
    to bottom,
    rgba(35, 35, 35, 1),
    rgba(35, 35, 35, 0)
  );

  @media only screen and (max-width: 540px) {
    background-color: black;
    padding: 0rem 1.675rem;
    height: 50px;
  }
  @media only screen and (min-width: 550px) and (max-width: 1115px) {
    background-color: black;
    padding: 0rem 2.5rem;
    height: 50px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: white;
    padding: 0.5rem 1rem;
    transition: color 250ms ease;
    font-size: 1rem;
    :hover {
      color: #cdcdcd;
    }
  }

  @media only screen and (max-width: 1115px) {
    .nav-links {
      display: none;
    }
    .nav-logo {
      padding: 0;
    }
  }
`;

const StyledMobileMenu = styled.div`
  width: 24px;
  height: 24px;
  margin: auto 0;
  display: none;
  img {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1115px) {
    display: block;
  }
`;

const StyledNavLogo = styled.a`
  width: 125px;
  display: flex;
  img {
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 1115px) {
    margin-left: 1.75rem;
    width: 85px;
  }
`;

const StyledSearchBar = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  background-color: #1d1d1d;
  width: 100px;
  color: #ccc;
  font-size: 1.2rem;
  display: none;

  @media only screen and (max-width: 540px) {
    display: block;
  }
  @media only screen and (min-width: 550px) and (max-width: 1115px) {
    display: block;
    width: 180px;
  }
`;

const StyledDropdown = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    .dropdown-btn {
      cursor: pointer;
      transform: rotate(180deg);
    }
    .dropdown-content {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1115px) {
    display: none;
  }
`;

const StyledCurrProfileImg = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 5px;
  background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const StyledDropdownBtn = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  transition: transform 300ms ease;
  margin-left: 10px;
`;

const StyledDropdownContent = styled.div`
  position: absolute;
  width: max-content;
  display: none;
  flex-direction: column;
  right: 0;
  bottom: -210%;
  /* top: 40px; */
  padding: 1rem;
  background-color: #00000096;
  opacity: 0;
  transition: opacity 500ms ease;
  border-top: 2px solid white;
  :hover {
    display: flex;
    flex-direction: column;
  }
`;

const StyledProfileLink = styled.div`
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: white;
  }
`;

export default Nav;
