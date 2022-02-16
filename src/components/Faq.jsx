import React from "react";
import expand from "../assets/plus.svg";
import cross from "../assets/cross.svg";

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
    <div className="faq" onClick={() => faqToggler()}>
      <div className="ques-wrapper">
        <div className="ques">{ques}</div>
        <div className={`logo`}>
          <i className={`fal fa-plus ${isOpen ? "close" : "open"}`}></i>
        </div>
      </div>
      <div className={`ans-wrapper`}>
        <div className={`ans ${isOpen ? "open" : "close"}`}>
          {ans.map((a) => {
            return <div>{a}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
