import React from "react";
import styled from "styled-components";

const Faq = ({ ques, ans, id, isOpen, faqs, setFaqs }) => {
  const faqToggler = () => {
    const tempFaqs = [...faqs];
    tempFaqs.forEach((faq) => {
      if (faq.id === id) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
    });
    setFaqs(tempFaqs);
  };
  return (
    <StyledFaq className="faq" onClick={() => faqToggler()}>
      <StyledQuesWrapper className="ques-wrapper">
        <div className="ques">{ques}</div>
        <div className={`logo`}>
          <i className={`fal fa-plus ${isOpen ? "close" : "open"}`}></i>
        </div>
      </StyledQuesWrapper>
      <StyledAnsWrapper className={`ans-wrapper`}>
        <div className={`ans ${isOpen ? "open" : "close"}`}>
          {React.Children.toArray(
            ans.map((a) => {
              return <div>{a}</div>;
            })
          )}
        </div>
      </StyledAnsWrapper>
    </StyledFaq>
  );
};

const StyledFaq = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 1.7rem;
  transition: 0.2s all ease;
  height: fit-content;
  overflow: hidden;
  position: relative;

  .logo {
    align-self: center;
    .close {
      transition: 0.2s all ease;
      transform: rotate(45deg);
    }
    .open {
      transition: 0.2s all ease;
    }
  }
`;

const StyledQuesWrapper = styled.div`
  background: #303030;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 2px solid black;
  cursor: pointer;
  z-index: 10;

  @media only screen and (max-width: 540px) {
    .ques {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    .ques {
      font-size: 2rem;
    }
  }
`;

const StyledAnsWrapper = styled.div`
  overflow: hidden;
  .ans {
    overflow: hidden;
    padding: 2rem 2rem;
    background: #303030;
    height: 100%;
    transition: transform 0.3s ease;
    // position: fixed;
    // transform: translateY(50%);
    &.close {
      position: absolute;
      visibility: hidden;
      padding: 0;
      transform: translateY(-100%);
    }
    div:nth-child(2) {
      padding-top: 2rem;
    }
  }
  @media only screen and (max-width: 540px) {
    .ans {
      div {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: 550px) and (max-width: 1024px) {
    .ans {
      div {
        font-size: 2rem;
      }
    }
  }
`;

export default Faq;
