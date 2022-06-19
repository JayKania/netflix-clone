import React from "react";
import styled from "styled-components";
import transformers_img from "../../../assets/transformers_img.png";
import transformers_logo from "../../../assets/transformers_logo.png";

const Billboard = () => {
  return (
    <StyledBillboardContainer className="billboard-container">
      <StyledLogoDesc className="logo-desc">
        <StyledBillboardMovieLogo className="billboard-movie-logo">
          <div className="title-logo"></div>
        </StyledBillboardMovieLogo>
        <StyledDesc className="billboard-movie-description">
          When Optimus Prime learns of a downed Transformers ship on the moon,
          he leads a mission to rescue the pilot left behind: his mentor,
          Sentinel Prime.
        </StyledDesc>
        <StyledBtns className="billboard-btns">
          <button className="play-btn">
            <div className="play-icon"></div>
            <span>Play</span>
          </button>
          <button className="info-btn">
            <div className="info-icon">i</div>
            <span>More Info</span>
          </button>
        </StyledBtns>
      </StyledLogoDesc>
    </StyledBillboardContainer>
  );
};

const StyledBillboardContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 1rem;
  background-image: linear-gradient(
      77deg,
      rgba(0, 0, 0, 0.6) 0px,
      rgba(0, 0, 0, 0) 85%
    ),
    url(${transformers_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const StyledLogoDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 6rem 2rem 0 2rem;
  flex-wrap: wrap;
`;

const StyledBillboardMovieLogo = styled.div`
  width: 100%;
  height: 75px;
  .title-logo {
    height: inherit;
    background-image: url(${transformers_logo});
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const StyledDesc = styled.p`
  color: white;
  font-size: 1.3rem;
  padding-top: 1rem;
  width: 100%;
`;

const StyledBtns = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  .play-btn {
    padding: 0.75rem 1.4rem;
    color: black;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    .play-icon {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid black;
      transform: rotate(90deg) scale(2);
    }
    span {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
    :hover {
      cursor: pointer;
      background-color: #ffffffd7;
    }
  }
  .info-btn {
    margin-left: 1.4rem;
    padding: 0.7rem 1.3rem;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    background-color: rgba(109, 109, 110, 0.7);
    .info-icon {
      display: flex;
      width: 20px;
      height: 20px;
      border: 3px solid white;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      padding-top: 2px;
    }
    span {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
    :hover {
      cursor: pointer;
      background-color: rgba(109, 109, 110, 0.5);
    }
  }
  @media only screen and (max-width: 322px) {
    .play-btn {
      padding: 0.5rem 1rem;
      .play-icon {
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        border-bottom: 4px solid black;
      }
      span {
        font-size: 1rem;
      }
    }
    .info-btn {
      padding: 0.6rem 0.75rem;
      .info-icon {
        width: 10px;
        height: 10px;
        border: 1px solid white;
        font-size: 0.8rem;
        padding: 3px 0 2px 0;
      }
      span {
        font-size: 0.75rem;
        margin-left: 0.8rem;
      }
    }
  }
`;

export default Billboard;
