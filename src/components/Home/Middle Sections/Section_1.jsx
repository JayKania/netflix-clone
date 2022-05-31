import React from "react";
import styled from "styled-components";

const Section_1 = () => {
  return (
    <StyledSection className="section-1 section">
      <StyledImageDescWrapper className="image-desc-wrapper">
        <StyledDescription className="description">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </StyledDescription>
        <StyledImageVidWrapper className="img-video-wrapper">
          <div className="tv-img"></div>
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
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
    background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png")
      no-repeat;
    width: 485px;
    height: 360px;
    background-size: 480px 360px;
    z-index: 2;
  }
  video {
    position: absolute;
    top: 20%;
    left: 12.7%;
    width: 351px;
    height: 202px;
    z-index: 1;
    background: transparent;
  }

  @media only screen and (max-width: 320px) {
    width: 270px;
    height: 237px;
    .tv-img {
      width: 270px;
      height: 237px;
      background-size: 270px 237px;
    }
    video {
      top: 21%;
      left: 13%;
      width: fit-content;
      width: 218px;
      height: 128px;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 540px) {
    width: 290px;
    height: 237px;
    .tv-img {
      width: 290px;
      height: 237px;
      background-size: 290px 237px;
    }
    video {
      top: 21%;
      left: 13%;
      width: fit-content;
      width: 218px;
      height: 128px;
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
      top: 18%;
      left: 13.25%;
      width: fit-content;
      width: 399px;
      height: 250px;
    }
  }
`;

export default Section_1;
