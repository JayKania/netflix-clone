import React, { useState } from "react";
import Input from "../Input";
import Faq from "./Faq";
import { faqData } from "./faqData";
import styled from "styled-components";

const FaqSection = () => {
  const [faqs, setFaqs] = useState(faqData);

  const questions = faqs.map((faq) => {
    return (
      <Faq
        ques={faq.ques}
        ans={faq.ans}
        key={faq.id}
        id={faq.id}
        isOpen={faq.isOpen}
        faqs={faqs}
        setFaqs={setFaqs}
      />
    );
  });
  return (
    <StyledFaqWrapper className="faq-wrapper">
      <StyledFaqContainer className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {questions}
      </StyledFaqContainer>
      <div className="last-p">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <Input />
    </StyledFaqWrapper>
  );
};

const StyledFaqWrapper = styled.div`
  background: #000000;
  color: #ffffff;
  border-bottom: 10px solid #222222;
  padding-bottom: 4rem;

  .last-p {
    width: 80%;
    margin: 3rem auto 1rem auto;
    font-size: 1.4rem;
    text-align: center;
  }

  .input-button-wrapper {
    width: 80%;
    margin: 2rem auto;
  }
`;

const StyledFaqContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  text-align: center;
  h1 {
    padding: 5rem 0rem 2.5rem 0rem;
    font-size: 3rem;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    h1 {
      font-size: 2.8rem;
    }
  }
  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    width: 85%;
    h1 {
      font-size: 3.5rem;
    }
  }
`;

export default FaqSection;
