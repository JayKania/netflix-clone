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
            <span className="info-icon">i</span>
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
  background-image: linear-gradient(
      77deg,
      rgba(0, 0, 0, 0.6) 0px,
      rgba(0, 0, 0, 0) 85%
    ),
    url(${transformers_img});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
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
  height: 80px;
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
  text-shadow: 1px 1px grey;
  padding-top: 1rem;
`;

const StyledBtns = styled.div`
  margin-top: 2rem;
  display: flex;
  width: fit-content;
  .play-btn {
    width: 120px;
    padding: 0.7rem 1rem;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .play-icon {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid black;
      transform: rotate(90deg) scale(2);
    }
    :hover {
      cursor: pointer;
    }
  }
  .info-btn {
    margin-left: 1rem;
    width: 160px;
    padding: 0.7rem 1rem;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    background-color: rgba(109, 109, 110, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .info-icon {
      display: flex;
      width: 27px;
      height: 27px;
      border: 3px solid white;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export default Billboard;
