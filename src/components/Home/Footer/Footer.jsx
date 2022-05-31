import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <StyledGridContainer className="grid-container">
        <p className="footer-title">
          Questions? Call <span>000-800-040-1843</span>{" "}
        </p>
        <div className="grid-item">FAQ</div>
        <div className="grid-item">Help Center</div>
        <div className="grid-item">Account</div>
        <div className="grid-item">Media Center</div>
        <div className="grid-item">Investor Relations</div>
        <div className="grid-item">Jobs</div>
        <div className="grid-item">Ways to Watch</div>
        <div className="grid-item">Terms of Use</div>
        <div className="grid-item">Privacy</div>
        <div className="grid-item">Cookie Prefrences</div>
        <div className="grid-item">Corporate Information</div>
        <div className="grid-item">Contact Us</div>
        <div className="grid-item">Speed Test</div>
        <div className="grid-item">Legal Notices</div>
        <div className="grid-item">Only on Netflix</div>
        <p className="footer-bottom-title">Netflix India</p>
      </StyledGridContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: #000000;
  color: #757575;
`;

const StyledGridContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  font-size: 0.9rem;
  .grid-item {
    padding: 0.5rem;
    width: fit-content;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .footer-title {
    padding: 1.2rem 0.5rem;
    grid-column: 1/5;
    font-size: 1rem;
    font-weight: 500;
    span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .footer-bottom-title {
    padding: 1.2rem 0.5rem;
    grid-column: 1/5;
  }

  @media only screen and (max-width: 540px) {
    width: 80%;
    grid-template-columns: auto auto;
    .footer-title {
      font-size: 1.3rem;
      grid-column: 1/3;
      span {
        font-size: 1.3rem;
      }
    }
    .grid-item {
      font-size: 1.15rem;
    }
    .footer-bottom-title {
      grid-column: 1/3;
      font-size: 1.18rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    width: 80%;
    .footer-title {
      font-size: 1.3rem;
      span {
        font-size: 1.3rem;
      }
    }
    .grid-item {
      font-size: 1.15rem;
    }
    .footer-bottom-title {
      font-size: 1.18rem;
    }
  }
`;

export default Footer;
