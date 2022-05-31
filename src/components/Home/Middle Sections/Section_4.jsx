import React from "react";
import styled from "styled-components";

const Section_4 = () => {
  return (
    <StyledSection className="section-4 section">
      <StyledImageDescWrapper className="image-desc-wrapper">
        <StyledDescription className="description">
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </StyledDescription>
        <StyledImageWrapper className="img-wrapper">
          <div className="children-img"></div>
        </StyledImageWrapper>
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
  flex-direction: row-reverse;
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

const StyledImageWrapper = styled.div`
  position: relative;
  .children-img {
    background: url("https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf")
      no-repeat;
    width: 545px;
    height: 425px;
    background-size: 540px 425px;
    object-fit: cover;
  }

  @media only screen and (max-width: 320px) {
    width: 250px;
    height: 187px;
    .children-img {
      position: absolute;
      width: 250px;
      height: 187px;
      background-size: 250px 187px;
    }
  }

  @media only screen and (min-width: 330px) and (max-width: 540px) {
    width: 310px;
    height: 237px;
    .children-img {
      position: absolute;
      width: 310px;
      height: 250px;
      background-size: 310px 250px;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1240px) {
    width: 550px;
    height: 425px;
    .children-img {
      position: absolute;
      width: 550px;
      height: 425px;
      background-size: 550px 425px;
    }
  }
`;

export default Section_4;
