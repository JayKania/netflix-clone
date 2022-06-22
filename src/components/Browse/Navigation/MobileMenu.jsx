import React from "react";
import styled from "styled-components";
import userStore from "../../../store/UserStore";

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  const logOut = userStore((state) => state.logOut);

  return (
    <>
      <StyledOverlay
        className={`overlay ${menuOpen ? "" : "hidden"} `}
        onClick={toggleMenu}
      ></StyledOverlay>
      <StyledMobileMenu className={`mobile-menu ${menuOpen ? "" : "hidden"} `}>
        <StyledMobileLinks className="mobile-links">
          <StyledAccountLinks className="mobile-acc-links">
            <a href="#">Account</a>
            <a href="#">Help Center</a>
            <a href="#" onClick={logOut}>
              Sign out of Netflix
            </a>
          </StyledAccountLinks>
          <div className="divider"></div>
          <StyledGenreLinks className="mobile-genre-links">
            <a href="#" className="active">
              Home
            </a>
            <a href="#">My List</a>
            <a href="#">Thrillers</a>
            <a href="#">International Movies & TV</a>
            <a href="#">Action</a>
            <a href="#">Anime</a>
          </StyledGenreLinks>
        </StyledMobileLinks>
      </StyledMobileMenu>
    </>
  );
};

const StyledOverlay = styled.div`
  display: none;

  @media only screen and (max-width: 1115px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: block;
    z-index: 0;
    &.hidden {
      display: none;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledMobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 1115px) {
    z-index: 1;
    width: 80%;
    max-width: 250px;
    height: 100vh;
    background-color: black;
    transform: translateX(0);
    transition: transform 300ms ease;
    display: block;
    padding-top: 60px;
    &.hidden {
      transform: translateX(-100%);
    }
  }
`;

const StyledMobileLinks = styled.div`
  .divider {
    margin-top: 1.2rem;
    border: 0.5px solid #ffffff39;
  }
`;

const StyledAccountLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: grey;
    text-decoration: none;
    margin-bottom: 0.4rem;
    :hover {
      color: white;
    }
  }
`;

const StyledGenreLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  a {
    padding: 5px 0 5px 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: grey;
    text-decoration: none;
    :hover {
      color: white;
    }
    &.active {
      border-left: 3px solid #b9090b;
      color: white;
    }
  }
`;

export default MobileMenu;
