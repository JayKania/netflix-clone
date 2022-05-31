import React from "react";
import styled from "styled-components";

const Section_3 = () => {
  return (
    <StyledSection className="section-3 section">
      <StyledImageDescWrapper className="image-desc-wrapper">
        <StyledDescription className="description">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </StyledDescription>
        <StyledImageVidWrapper className="img-video-wrapper">
          <div className="tv-img"></div>
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </StyledImageVidWrapper>
      </StyledImageDescWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  background: #000000;
  border-bottom: 10px solid #222222;
  padding-bottom: 2rem;
`;

const StyledImageDescWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 3rem;
`;

const StyledDescription = styled.div`
  flex-basis: 50%;
  color: white;
  padding: 3.5rem 0;
  text-align: left;
  h1 {
    font-size: 3rem;
  }
  p {
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 540px) {
    flex-basis: 100%;
    text-align: center;
    h1 {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1240px) {
    flex-basis: 100%;
    text-align: center;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2.3rem;
    }
  }
`;

const StyledImageVidWrapper = styled.div`
  position: relative;
  width: 485px;
  height: 360px;
  .tv-img {
    position: absolute;
    background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png")
      no-repeat;
    width: 550px;
    height: 425px;
    background-size: 550px 425px;
    z-index: 2;
  }
  video {
    position: absolute;
    top: 12.5%;
    left: 20%;
    width: 351px;
    height: 202px;
    z-index: 1;
    background: transparent;
  }

  @media only screen and (max-width: 320px) {
    width: 250px;
    height: 187px;
    .tv-img {
      position: absolute;
      width: 250px;
      height: 187px;
      background-size: 250px 187px;
    }
    video {
      position: absolute;
      top: 6%;
      left: 16.5%;
      width: 165px;
      height: 110px;
    }
  }

  @media only screen and (min-width: 330px) and (max-width: 540px) {
    width: 310px;
    height: 237px;
    .tv-img {
      position: absolute;
      width: 310px;
      height: 250px;
      background-size: 310px 250px;
    }
    video {
      position: absolute;
      top: 10%;
      left: 16.5%;
      width: 205px;
      height: 125px;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1240px) {
    width: 550px;
    height: 425px;
    .tv-img {
      position: absolute;
      width: 550px;
      height: 425px;
      background-size: 550px 425px;
    }
    video {
      position: absolute;
      top: 3%;
      left: 17%;
      width: fit-content;
      width: 350px;
      height: 260px;
    }
  }
`;

export default Section_3;
