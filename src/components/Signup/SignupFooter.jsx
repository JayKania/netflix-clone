import React from "react";
import styled from "styled-components";

const SignupFooter = () => {
  return (
    <StyledFooter className="footer">
      <StyledGridContainer className="grid-container">
        <p className="footer-title">
          Questions? Call <span>000-800-040-1843</span>{" "}
        </p>
        <div className="grid-item">FAQ</div>
        <div className="grid-item">Help Center</div>
        <div className="grid-item">Terms of Use</div>
        <div className="grid-item">Privacy</div>
        <div className="grid-item">Cookie Prefrences</div>
        <div className="grid-item">Corporate Information</div>
      </StyledGridContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: #757575;
  background-color: #f3f3f3;
  @media only screen and (max-width: 540px) {
  }

  @media (min-width: 550px) and (max-width: 1025px) and (orientation: portrait) {
  }
`;

const StyledGridContainer = styled.div`
  width: 55%;
  padding: 0 3rem;
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
    width: fit-content;
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
    padding: 1rem;
    width: 100%;
    grid-template-columns: auto auto;
    .footer-title {
      font-size: 1.6rem;
      grid-column: 1/3;
      span {
        font-size: 1.6rem;
      }
    }
    .grid-item {
      font-size: 1.3rem;
    }
    .footer-bottom-title {
      grid-column: 1/3;
      font-size: 1.18rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    padding: 2rem;
    width: 100%;
    .footer-title {
      font-size: 1.6rem;
      span {
        font-size: 1.6rem;
      }
    }
    .grid-item {
      font-size: 1.3rem;
    }
    .footer-bottom-title {
      font-size: 1.18rem;
    }
  }
`;

export default SignupFooter;
