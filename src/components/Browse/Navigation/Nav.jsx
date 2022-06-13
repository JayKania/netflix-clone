import React from "react";
import styled from "styled-components";
import navLogo from "../../../assets/Netflix-Logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledLinks>
        <StyledNavLogo href="/">
          <img src={navLogo} alt="" />
        </StyledNavLogo>

        <a href="/browse">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">New & Popular</a>
        <a href="#">My List</a>
      </StyledLinks>
      <StyledOptionsLinks></StyledOptionsLinks>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  background-color: #141414;
  padding: 1rem;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const StyledLinks = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: white;
    padding: 0.5rem 1rem;
  }
`;

const StyledNavLogo = styled.a`
  width: 125px;
  display: flex;
  img {
    align-items: center;
    width: 100%;
  }
  @media only screen and (max-width: 540px) {
    width: 90px;
  }
`;
const StyledOptionsLinks = styled.div``;

export default Nav;
