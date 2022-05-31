import React from "react";
import styled from "styled-components";
import mobile_photo from "../../../assets/mobile_photo.jpg";
import stranger_things from "../../../assets/stranger_things.png";

const Section_2 = () => {
  return (
    <StyledSection className="section-2 section">
      <StyledImageDescWrapper className="image-desc-wrapper">
        <StyledDescription className="description">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </StyledDescription>
        <StyledImagePhotoWrapper className="img-photo-wrapper">
          <div className="mobile-img"></div>
          <div className="download">
            <div className="download-img"></div>
            <div className="download-title">
              <h5>Stranger Things</h5>
              <p>Downloading...</p>
            </div>
            <div className="download-logo">
              <i className="fal fa-arrow-to-bottom fa-2x"></i>
            </div>
          </div>
        </StyledImagePhotoWrapper>
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
  flex-direction: row-reverse;
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
      font-size: 2.8rem;
    }
    p {
      font-size: 2.3rem;
    }
  }
`;

const StyledImagePhotoWrapper = styled.div`
  position: relative;
  .mobile-img {
    height: 380px;
    width: 290px;
    background: url(${mobile_photo}) no-repeat;
    background-size: 290px 380px;
  }
  .download {
    position: absolute;
    top: 67%;
    left: -10%;
    background-color: #000000;
    width: 350px;
    height: 6rem;
    border: 2px solid rgba(255, 255, 255, 0.25);
    display: grid;
    grid-template-columns: 18% 60% 20%;
    gap: 0.7em;
    padding: 0.5em 0.75em;
    border-radius: 0.75em;
    .download-img {
      background-image: url(${stranger_things});
      background-size: cover;
    }
    .download-title {
      color: rgb(255, 255, 255);
      align-self: center;
      h5 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      p {
        font-weight: 400;
        color: #006feb;
      }
    }
    .download-logo {
      color: rgb(255, 255, 255);
      align-self: center;
    }
  }
  @media only screen and (max-width: 540px) {
    .mobile-img {
      height: 300px;
      width: 210px;
      background-size: 210px 300px;
    }
    .download {
      left: -10%;
      width: 250px;
      height: 6rem;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1240px) {
    .mobile-img {
      height: 420px;
      width: 330px;
      background-size: 330px 420px;
    }
    .download {
      top: 70%;
      left: -8.5%;
      width: 380px;
      height: 8rem;
    }
  }
`;

export default Section_2;
