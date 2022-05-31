import React from "react";

import styled from "styled-components";
import Input from "../Input";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title">
      <h1>Unlimited movies, TV shows and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <p className="last-p">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Input />
    </StyledTitleSection>
  );
};

const StyledTitleSection = styled.div`
  text-align: center;
  color: white;
  width: 80%;
  margin: 8rem auto 4rem auto;

  h1 {
    font-size: 3.5rem;
    max-width: 640px;
    margin: 0 auto;
  }
  p {
    font-size: 1.5rem;
  }
  .last-p {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
  }
`;

export default TitleSection;
